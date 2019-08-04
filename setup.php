<?php
/* A simple forwarder */

if(isset($_POST['submit']))
{
   $dbserver = $_POST['dbserver'];
   $dbname = $_POST['dbname'];
   $dbuser = $_POST['dbuser'];
   $dbpassword = $_POST['dbpassword'];
   $mentorskype = $_POST['mentorskype'];
   $mentor_password = $_POST['mentor_password'];
   $content = "<?php
define('MENTOR_PASSWORD','$mentor_password');
define('MENTOR_SKYPE_NAME', '$mentorskype');
define('DB_HOST', '$dbserver');
define('DB_USER', '$dbuser');
define('DB_PASSWORD', '$dbpassword');
define('DB_DATABASE', '$dbname');
?>";
   
   if (!is_dir('config')) {
      mkdir('./config/',0777) or die("Cannot make config dir");
   }

   if (!is_dir('projects')) {
      mkdir('./projects/', 0777, true) or die("Cannot make projects dir");
   }
   $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator(getcwd()));
   foreach($iterator as $item) {
        chmod($item, 0777);
   }
   file_put_contents("config/config.php",$content) or die("No permission to create config file.");
   // Connect to MySQL
   $conn = new mysqli($dbserver, $dbuser, $dbpassword);
   if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
   }

   // If database is not exist create one
   if (!mysqli_select_db($conn,$dbname)){
       $sql = "CREATE DATABASE ".$dbname;
       if ($conn->query($sql) === TRUE) {
          //echo "Database created successfully.<br>";
       }else {
        die("Error creating database: " . $conn->error);
       }
   } 
   else{
       //echo "Database alredy exist.<br>";
   } 
   $con = mysqli_connect($dbserver,$dbuser,$dbpassword,$dbname);
   if (mysqli_connect_error()) {
       die("Database connection failed: " . mysqli_connect_error());
   }

   $create_table = "CREATE TABLE student 
(
Id varchar(36) PRIMARY KEY NOT NULL,
studentID varchar(20) NOT NULL,
lastName varchar(30) NOT NULL,
firstName varchar(20) NOT NULL,
email varchar(120) NOT NULL,
password varchar(32) NOT NULL,
status varchar(1) NOT NULL
)";

   $create_tbl = $con->query($create_table);
  
   if ($create_tbl)
   { 
      //echo "Table student has created.<br>";
   }
   else {
      // echo "Table student already exist.<br>";  
   }
   header("location: index.php");
   //echo "Setup finished successfully.";
   $con->close();
   exit(0);
}

?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" ;="" charset="utf-8">
    <title>PyUchim</title>
    <link rel="stylesheet" type="text/css" href="CodeSkulptor3/bootstrap.css">
    <link rel="shortcut icon" href="CodeSkulptor3/favicon.ico">
    <script src="CodeSkulptor3/jquery.js"></script>
    <script src="CodeSkulptor3/jquery-ui.js"></script>
    <script src="CodeSkulptor3/bootstrap.js"></script>
</head>
<body>


<div class="jumbotron text-center">
  <h1>PyUchim setup</h1>
</div>
<div class="container">
 <div class="row">
  <div class="col-sm-3"></div>
  <div class="col-sm-6">
	<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <div class="form-group">
	  <label for="dbserver">Database server:</label>
	  <input name="dbserver" id="dbserver" class="form-control" value="localhost">
        </div>
        <div class="form-group">
	  <label for="dbname">Database name:</label>
	  <input name="dbname" id="dbname" class="form-control" value="pyuchim">
        </div>
        <div class="form-group">
	  <label for="dbuser">Database user:</label>
	  <input name="dbuser" id="dbuser" class="form-control" value="root">
        </div>
        <div class="form-group">
	  <label for="dbpassword">Database password:</label>
	  <input name="dbpassword" id="dbpassword" class="form-control">
        </div>
        <div class="form-group">
	  <label for="mentorskype">Mentor skype name:</label>
	  <input name="mentorskype" id="mentorskype" class="form-control">
        </div>
        <div class="form-group">
	  <label for="mentor_password">Mentor password:</label>
	  <input name="mentor_password" id="mentor_password" class="form-control">
        </div>
        <div>
	  <input type="submit" name="submit" value="Submit" class="btn btn-success">
        </div>
	</form>
  </div>
  <div class="col-sm-3"></div>
 </div> 
</div>
<?php
require_once('config/config.php');

if(defined('DB_DATABASE')){

echo "
<script>
$( document ).ready(function() {
  $('#dbserver').val('".DB_HOST."');
  $('#dbname').val('".DB_DATABASE."');
  $('#dbuser').val('".DB_USER."');
  $('#dbpassword').val('".DB_PASSWORD."');
  $('#mentorskype').val('".MENTOR_SKYPE_NAME."');
  $('#mentor_password').val('".MENTOR_PASSWORD."');
});
</script>
";
}

?>
</body >
</html>
