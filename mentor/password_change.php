<?php
require_once('../config/config.php');
$pass = md5($_REQUEST['pass']);
$id = $_REQUEST['id'];
$con = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD,DB_DATABASE) or die("Couldn t execute query.".mysqli_error($con));  
$SQL = "UPDATE student SET password = '$pass' WHERE Id = '$id'";
mysqli_query($con, $SQL) or die("Not Changed");
mysqli_close($db);
?>
