<?php
require_once('../config/config.php');

$page = $_REQUEST["page"]; // get the requested page 
$limit = $_REQUEST["rows"]; // get how many rows we want to have into the grid 
$sidx = $_REQUEST["sidx"]; // get index row - i.e. user click to sort 
$sord = $_REQUEST["sord"]; // get the direction 
if(!$sidx) $sidx =1; 

// connect to the database 
$con = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD,DB_DATABASE) or die("Couldn t execute query.".mysqli_error($con)); 

// Get the number of table rows
$result = mysqli_query($con,"SELECT * FROM student");
$count = mysqli_num_rows($result);

if( $count > 0 ) { $total_pages = ceil($count/$limit); }
 else { $total_pages = 0; } 
if ($page > $total_pages) $page=$total_pages; 
$start = $limit*$page - $limit;
$ops = array(
    'eq'=>'=', //equal
    'ne'=>'<>',//not equal
    'lt'=>'<', //less than
    'le'=>'<=',//less than or equal
    'gt'=>'>', //greater than
    'ge'=>'>=',//greater than or equal
    'bw'=>'LIKE', //begins with
    'bn'=>'NOT LIKE', //doesn't begin with
    'in'=>'LIKE', //is in
    'ni'=>'NOT LIKE', //is not in
    'ew'=>'LIKE', //ends with
    'en'=>'NOT LIKE', //doesn't end with
    'cn'=>'LIKE', // contains
    'nc'=>'NOT LIKE'  //doesn't contain
);   
function getWhereClause($col, $oper, $val){
    global $ops;    
    if($oper == 'bw' || $oper == 'bn') $val .= '%';
    if($oper == 'ew' || $oper == 'en' ) $val = '%'.$val;
    if($oper == 'cn' || $oper == 'nc' || $oper == 'in' || $oper == 'ni') $val = '%'.$val.'%';
    return " WHERE $col {$ops[$oper]} '$val' ";
}
$searchField = isset($_GET['searchField']) ? $_GET['searchField'] : false; 
$searchOper = isset($_GET['searchOper']) ? $_GET['searchOper']: false;  
$searchString = isset($_GET['searchString']) ? $_GET['searchString'] : false;
$filters = "";
if(isset($_GET['filters'])) $filters = $_GET['filters'];
$where = "";
if ($filters != "") {
	$filters = json_decode($filters);
     $where = " where ";
     $whereArray = array();
     $rules = $filters->rules;
     foreach($rules as $rule) {
                $whereArray[] = $rule->field." like '%".$rule->data."%'";
            }
     if (count($whereArray)>0) {
                $where .= join(" and ", $whereArray);
     } else {
                $where = "";
     }
     $SQL = "SELECT Id,studentID,lastName,firstName,email,password,status FROM student ".$where." ORDER BY $sidx $sord LIMIT $start , $limit";;
}
else if ( $_REQUEST["_search"] == 'true')

	$SQL = "SELECT Id,studentID,lastName,firstName,email,password,status FROM student ". getWhereClause($searchField,$searchOper,$searchString)." ORDER BY $sidx $sord LIMIT $start , $limit";;


// Get SQL query

if ( $_REQUEST["_search"] != 'true')
	$SQL = "SELECT Id,studentID,lastName,firstName,email,password,status FROM student ORDER BY $sidx $sord LIMIT $start , $limit";


// Prepare json response

$responce = new stdClass();

$responce->page = $page; 
$responce->limit = $limit;
$responce->total = $total_pages; 
$responce->records = $count;

if($count == 0) { echo json_encode($responce); exit();}

$result = mysqli_query($con,$SQL ) or die("Couldn t execute query.".mysqli_error($con)); 

$i=0; 
while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)) { 
     $responce->rows[$i]['Id']=$row['Id'];
	$responce->rows[$i]["cell"]=array($row['Id'],$row['studentID'],$row['firstName'],$row['lastName'],$row['email'],$row['password'],$row['status']); 	
     $i++; 
}
mysqli_close($con);
echo json_encode($responce);
?>
