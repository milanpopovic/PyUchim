<?php
	//Start session
	session_start();
	
	//Include database connection details
	require_once('../config/config.php');

	//Array to store validation errors
	$errmsg_arr = array();
	
	//Validation error flag
	$errflag = false;
	//Connect to mysql server
	$con = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD,DB_DATABASE);

	if(!$con) {
		die('Failed to connect to server: ' . mysqli_error());
	}
	//Function to sanitize values received from the form. Prevents SQL injection
	function clean($con,$str) {
                //return $str;
		$str = @trim($str);

		if(get_magic_quotes_gpc()) {
			$str = stripslashes($str);
		}

		return mysqli_real_escape_string($con,$str);
	}
	
	//Sanitize the POST values
	$login = clean($con,$_POST['login']);
	$password = clean($con,$_POST['password']);
	//Input Validations
	if($login == '') {
		$errmsg_arr[] = 'Login ID missing';
		$errflag = true;
	}
	if($password == '') {
		$errmsg_arr[] = 'Password missing';
		$errflag = true;
	}
	
	//If there are input validations, redirect back to the login form
	if($errflag) {
		$_SESSION['ERRMSG_ARR'] = $errmsg_arr;
		session_write_close();
		header("location: login-failed.php?error=Missing email and/or password.");
                exit;
	}
	
	//Create query
	$qry="SELECT * FROM student WHERE email = '$login' AND password='".md5($_POST['password'])."'";
     
	$result=mysqli_query($con,$qry);
       

	//Check whether the query was successful or not
	if($result) {
		if(mysqli_num_rows($result) == 1) {
			//Login Successful
			//session_regenerate_id();
			$member = mysqli_fetch_assoc($result);
			$login = $member['email'];
			if($member['status'] != '1'){
                   		header("location: login-failed.php?error=You are not authorized to use this app.");
                	}
			$_SESSION['SESS_FIRST_NAME'] = $member['firstName'];
			$_SESSION['SESS_LAST_NAME'] = $member['lastName'];
			session_write_close();
			header("location: ../index.php");
                        exit;
		}else {
			//Login failed
			header("location: login-failed.php?error=Wrong email or password");
                        exit;
		}
	}else {
		die("Query failed");
	}
?>
