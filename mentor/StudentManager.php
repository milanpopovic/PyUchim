<?php

require_once('../config/config.php');

// Make a db connection or die

$con = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD,DB_DATABASE) or die("Couldn t execute query.".mysqli_error($con)); 
$oper = $_REQUEST['oper'];

// Process the request

if ($oper == 'add'){  // ADD new database tuple

// Prepare SQL query

   $SQL = "INSERT INTO student (Id,";
   $id = uniqid();
   $values = "('".$id."',";
   foreach($_POST as $key=>$value){
      if($key == 'oper')
         break;
            if($key == 'Id')
         continue; 
      if($key == 'password') {
            $SQL = $SQL.$key.",";
            $values=$values."'".md5($value)."',";
      }
      else {
         $SQL = $SQL.$key.",";
         $values=$values."'".$value."',";
      }
   }

   $SQL = rtrim($SQL,",");
   $values = rtrim($values,",");
   $SQL=$SQL.") VALUES ".$values.")";

// Execute SQL query and close db
   file_put_contents("error",$SQL);
   $result = mysqli_query( $con, $SQL ) or die(mysqli_error($con)); 
   mysqli_close($db);   


}

if ($oper == 'edit'){ // EDIT database tuple

//Prepare SQL query
   
   $SQL = "UPDATE student SET ";
   $id = $_REQUEST['Id'];
   foreach($_REQUEST as $key=>$value){
      if($key == 'oper')
         break;
      if($key == 'password') {
            $SQL = $SQL.$key."='".md5($value)."',";
            continue;
      }
      if($key != 'Id')
            $SQL = $SQL.$key."='".$value."',";
   }
   $SQL = rtrim($SQL,",");
   $SQL=$SQL." WHERE Id='".$id."'";


// Execute SQL query and close db

   $result = mysqli_query($con, $SQL ) or die(mysqli_error($con)); 
   mysqli_close($con); 
   
}

if ($oper == 'del'){ // DELETE database tuple

// Table key 

 $id = $_REQUEST['Id'];

// Prepare SQL query

 $SQL = "DELETE FROM student WHERE Id ='".$id."'";



// Execute SQL query and close db

 $result = mysqli_query($con, $SQL ) or die(mysqli_error($con)); 
 mysqli_close($con);
}
?>
