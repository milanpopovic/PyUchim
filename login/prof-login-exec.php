<?php
	//Start session
	session_start();
	
	//Include database connection details
	require_once('../config/config.php');
	
	//Array to store validation errors
	$errmsg_arr = array();
	
	//Validation error flag
	$errflag = false;
	
	//Connect to database
	$con = $con = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD,DB_DATABASE) or die("Couldn t execute query.".mysqli_error($con));
	
	
	//Sanitize the POST values
        
	$login = $_GET['email'];
	$password = $_GET['id'];
        
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
		// header("location: login-form.php");
		exit();
	}
	
	//Create query
	$qry="SELECT * FROM student WHERE email='$login' AND password='$password'";
	$result=mysqli_query($con,$qry);
	
	//Check whether the query was successful or not
	if($result) {
		if(mysqli_num_rows($result) == 1) {
			$member = mysqli_fetch_assoc($result);
			if($member['status'] != '1'){
                   		header("location: login-failed.php?razlog='Not authorized.'");
			   	exit();
                	}
			$_SESSION['SESS_FIRST_NAME'] = $member['firstName'];
			$_SESSION['SESS_LAST_NAME'] = $member['lastName'];
                        $projekat = $_SESSION['SESS_FIRST_NAME'].".".$_SESSION['SESS_LAST_NAME'];
			session_write_close();
			header("location: ../index.php?projekat=$projekat");
			exit();
		}else {
			//Login failed
			header("location: login-failed.php?razlog='Pogresno ime ili pasvord'");
			exit();
		}
	}else {
		die("Query failed");
	}
?>
