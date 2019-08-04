<?php
require_once('../config/config.php');

/* A simple forwarder */

if(isset($_POST['passw']))
{
	$name = $_POST['passw'];
	if ($name == MENTOR_PASSWORD ){   
		session_start();  
		$_SESSION['SESS_NAME'] = 'mentor'; 
		session_write_close();
		header("Location: StudentView.php");
		exit;
	}  
	else {     
		echo '<center><h1>Not Autorized</h1>
                      <a href="mentor.php">Back to Mentor login page</a></center>';  
		exit;
    }
}
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" ;="" charset="utf-8">
    <title>PyUchim mentor</title>
    <link rel="stylesheet" type="text/css" href="../CodeSkulptor3/bootstrap.css">
    <link rel="shortcut icon" href="../CodeSkulptor3/favicon.ico">
    <script src="../CodeSkulptor3/jquery.js"></script>
    <script src="../CodeSkulptor3/jquery-ui.js"></script>
    <script src="../CodeSkulptor3/bootstrap.js"></script>
</head>
<body>


<div class="jumbotron text-center">
  <h1>PyUchim - Mentor login</h1>
</div>
<div class="container">
 <div class="row">
  <div class="col-sm-3"></div>
  <div class="col-sm-6">
      <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="passw" name='passw' placeholder="Password">
	</div>
	<button type="submit" class="btn btn-default">Submit</button>
      </form>
  <div class="col-sm-3"></div>
</div>
</body>
</html>
