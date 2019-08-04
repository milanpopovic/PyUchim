<?php
	//Start session
	session_start();
	
	//Unset the variables stored in session
	unset($_SESSION['SESS_MEMBER_ID']);
	unset($_SESSION['SESS_FIRST_NAME']);
	unset($_SESSION['SESS_LAST_NAME']);
        echo "Logged out";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Logged Out</title>
<link href="loginmodule.css" rel="stylesheet" type="text/css" />
</head>
<body>
<center><h1>Logout </h1><center>
<p align="center">&nbsp;</p>
<h4 align="center" class="err">Izlogovali ste se.</h4>
<p align="center">Kliknite ovde za ponovni <a href="login-form.php">Login</a></p>
</body>
</html>
