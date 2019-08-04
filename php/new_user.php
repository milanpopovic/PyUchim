<?php
require_once('../config/config.php');

// Make a db connection or die
$con = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD,DB_DATABASE);
$firstName = $_POST['firstName'];
$lastName=$_POST['lastName'];
$studentID=$_POST['studentID'];
$email=$_POST['email'];
$password=md5($_POST['password']);
$id = uniqid();
$status="1";
$project=$firstName.".".$lastName;
$projDir="../projects/".$project;
if(!is_dir($projDir)) {
	$permit = 0777;
	mkdir($projDir);
	chmod($projDir, $permit);
}
else die("User is already registered".$projDir);


$SQL = "INSERT INTO student (Id,studentID,lastName,firstName,email,password,status) VALUES('$id','$studentID','$lastName','$firstName','$email','$password','$status')";
// Execute SQL query and close db
$result = mysqli_query( $con,$SQL ) or die(mysqli_error($con)); 
mysqli_close($con);   
echo "Registration accepted.";
?>
