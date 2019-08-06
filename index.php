<?php 
     session_start();
     $project = $_SESSION['SESS_FIRST_NAME'].".".$_SESSION['SESS_LAST_NAME'];
?><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" ;charset="utf-8">
    <title>PyUchim</title>

    <link rel="stylesheet" type="text/css" href="CodeSkulptor3/bootstrap.css">
    <link rel="shortcut icon" href="CodeSkulptor3/favicon.ico">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <script src="CodeSkulptor3/jquery.js"></script>
    <script src="CodeSkulptor3/jquery-ui.js"></script>
    <script src="CodeSkulptor3/bootstrap.js"></script>
    <script src="CodeSkulptor3/Chart.js"></script>
    <script src="CodeSkulptor3/skulpt.js"></script>
    <script src="CodeSkulptor3/skulpt-stdlib.js"></script>
    <script src="CodeSkulptor3/vendor.js"></script>
    <script src="CodeSkulptor3/codeskulptor.js?<?php echo filemtime('CodeSkulptor3/codeskulptor.js'); ?>"></script>

    <script src="js/ajax.js?<?php echo filemtime('js/ajax.js'); ?>"></script>
    
    <script src="samples/exam_questions.js?<?php echo filemtime('samples/exam_questions.js'); ?>"></script>
    <script src="samples/input_output.js?<?php echo filemtime('samples/input_output.js'); ?>"></script>
    <script src="samples/for_loops.js?<?php echo filemtime('samples/for_loops.js'); ?>"></script>
    <script src="samples/if_statement.js?<?php echo filemtime('samples/if_statement.js'); ?>"></script>
    <script src="samples/while_loops.js?<?php echo filemtime('samples/while_loops.js'); ?>"></script>
    <script src="samples/try_except.js?<?php echo filemtime('samples/try_except.js'); ?>"></script>
    <script src="samples/lists.js?<?php echo filemtime('samples/lists.js'); ?>"></script>
    <script src="samples/dictionaries.js?<?php echo filemtime('samples/dictionaries.js'); ?>"></script>
    <script src="samples/simple_plot.js?<?php echo filemtime('samples/simple_plot.js'); ?>"></script>
    <script src="samples/sorting.js?<?php echo filemtime('samples/sorting.js'); ?>"></script>
    <script src="samples/searching.js?<?php echo filemtime('samples/searching.js'); ?>"></script>
    <script src="samples/functions.js?<?php echo filemtime('samples/functions.js'); ?>"></script>
    <script src="samples/classes.js?<?php echo filemtime('samples/classes.js'); ?>"></script>

    <!--<link rel="stylesheet" type="text/css" href="CodeSkulptor3/css.css">-->
    <!--<link rel="stylesheet" type="text/css" href="CodeSkulptor3/basics.css">-->
    <!--<link rel="stylesheet" type="text/css" href="CodeSkulptor3/footers.css">-->
    <!--<script type="text/javascript" charset="UTF-8" src="CodeSkulptor3/common.js"></script>-->
    <!--<script type="text/javascript" charset="UTF-8" src="CodeSkulptor3/util.js"></script>-->
    
</head>

<body style="overflow-y: hidden;">

<!-- Menu -->

  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
          <a class="navbar-brand" href="#"><i class="fa fa-graduation-cap" aria-hidden="true"></i> PyUchim</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	<ul class="nav navbar-nav">
	  <li class="dropdown">
	    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-file-code-o" aria-hidden="true"></i> My Code<span class="caret"></span></a>
	    <ul class="dropdown-menu" aria-labelledby="about-us">
		<li><a class="dropdown-item" href="#" onClick="new_file()">New</a></li>
		<li><a class="dropdown-item" href="#" onClick="open_file()">Open</a></li>
                <li role="separator" class="divider"></li>
		<li><a class="dropdown-item" href="#" onClick="save_file(true)">Save</a></li>
		<li><a class="dropdown-item" href="#" onClick="save_file_as()">Save as ..</a></li>
                <li role="separator" class="divider"></li>
		<li><a class="dropdown-item" href="#" onClick="close_file()">Close</a></li>
                <li role="separator" class="divider"></li>
                <li><a class="dropdown-item loadLocalBtn" href="#">Load local file</a></li>
                <li role="separator" class="divider"></li>
		<li><a class="dropdown-item" href="#" onClick="delete_file(true)">Delete</a></li>
	    </ul>
	  </li>

	  <li class="dropdown">
	    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
               <i class="fa fa-code" aria-hidden="true"></i> Examples
		<span class="caret"></span></a>
	    <ul class="dropdown-menu" aria-labelledby="about-us">
		<li><a class="dropdown-item" href="#" onClick="select_sample_io()">Input/Output</a></li>
                <li><a class="dropdown-item" href="#" onClick="select_sample_for_loops()">For loops</a></li>
		<li><a class="dropdown-item" href="#" onClick="select_sample_if_statement()">If statement</a></li>	
		<li><a class="dropdown-item" href="#" onClick="select_sample_while_loops()">While loops</a></li>
		<li><a class="dropdown-item" href="#" onClick="select_sample_try_except()">Try...except</a></li>
                <li role="separator" class="divider"></li>
		<li><a class="dropdown-item" href="#" onClick="select_sample_lists()">Lists</a></li>
                <li><a class="dropdown-item" href="#" onClick="select_sample_dictionaries()">Dictionaries</a></li>
                <li role="separator" class="divider"></li>
                <li><a class="dropdown-item" href="#" onClick="select_sample_functions()">Functions</a></li>
                <li><a class="dropdown-item" href="#" onClick="select_sample_classes()">Classes</a></li>
                <li role="separator" class="divider"></li>
                <li><a class="dropdown-item" href="#" onClick="select_sample_simple_plot()">Simple plot</a></li>
                <li role="separator" class="divider"></li>
                <li><a class="dropdown-item" href="#" onClick="select_sample_searching()">Search algorithms</a></li>
                <li><a class="dropdown-item" href="#" onClick="select_sample_sorting()">Sort algorithms</a></li>

	    </ul>
	  </li>
	  <li class="dropdown">
	    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-question-circle-o" aria-hidden="true"></i>  Challenges
		<span class="caret"></span></a>
	    <ul class="dropdown-menu" aria-labelledby="about-us">
		<li><a class="dropdown-item" href="#" onClick="random_exam_question()">Random from exam</a></li>
		<li><a class="dropdown-item" href="#" onClick="select_exam_question()">Select from exam</a></li>
                <li role="separator" class="divider"></li>
                <li><a class="dropdown-item" href="#" onClick="takeExam()">Take exam</a></li>
                <li role="separator" class="divider"></li>
                <li><a class="dropdown-item" href="#" onClick="lucky_question()">I feel lucky!</a></li>
	    </ul>
	  </li>
          <li class="dropdown">
	    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-book" aria-hidden="true"></i> Books
		<span class="caret"></span></a>
	    <ul class="dropdown-menu" aria-labelledby="about-us">
		<li><a class="dropdown-item" href="http://mef-lab.com/osnove-2018/book/index.html" target="_new">
                     <small>Lecture notes</small></a></li>
                <li role="separator" class="divider"></li>
		<li><a class="dropdown-item" href="https://www.brianheinold.net/python/python_book.html" target="_new">
                     <small>Python - Practical introduction </small></a></li>
		<li><a class="dropdown-item" href="https://www.brianheinold.net/python/Python_Quick_Reference_Guide_Heinold.pdf" 
                     target="_new"><small>Python Quck reference</small></a></li>
                <li role="separator" class="divider"></li>
                <li><a class="dropdown-item" href="https://docs.python.org/3/tutorial/index.html" target="_new">
                    <small>Official Python tutorial</small></a></li>   
                <li role="separator" class="divider"></li>
                <li><a class="dropdown-item" href="http://www.codeskulptor.org/demos.html#tabs-Hall-of-Fame" target="_new">
                    <small>Demo games</small></a></li>   
	    </ul>
	  </li>
          <li class="dropdown">
	    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-user" aria-hidden="true"></i> Mentor
		<span class="caret"></span></a>
	    <ul class="dropdown-menu" aria-labelledby="about-us">
		<li><a href="mentor/mentor.php" target="_new" >
                     Open Mentor's page</a></li>
                <li role="separator" class="divider"></li>
		<li><a href="skype:milan.popovic?call">Call Mentor via Skype</a></li>	
	    </ul>
          </li>
	</ul> 
        <ul class="nav navbar-nav navbar-right">
          <li id="login"><a href="#" onClick="login()"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</a></li>
          <li id="logout"><a href="#" onClick="logout()"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
          <li><a class="nav-link" href="#" id ="open_project" ></a></li> 
          <li><a class="nav-link" href="javascript: signin()" id="menu-signin"><i class="fa fa-user-plus" aria-hidden="true">
		</i> SignUp</a></li>
          <li class="dropdown">
	    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-user" aria-hidden="true"></i> Help
		<span class="caret"></span></a>
	    <ul class="dropdown-menu" aria-labelledby="about-us">
    		<li><a href="help/about.html" target="_new" >About</a></li>
                <li role="separator" class="divider"></li>
		<li><a href="help/docs.html" target="_new">Docs</a></li>	
	    </ul>
          </li>
        </ul>
    </div>
  </div>
</nav>
<div id='alertMessage'></div>
<!-- CodeSkulptor panels -->
<div id="bodyWrapper">
    <div id="mainBody">
        <input type="file" id="localfile"></input>
        <a id="dlhref" href=""></a>
        <div id="outputRow" class="row">
             <div id="active" class="col-xs-12" style="width: 100%;">
                 <div class="row row-no-gutter">
                      <div id="codeContainer" class="col-xs-6" style="width: 50%;">
                          <div class="cs-panel panel panel-primary">
                             <div class="panel-heading"><i class="fa fa-code" aria-hidden="true"></i> Python Code 
                               <input type="text" id="open_file" size="30" readonly="readonly" style="color: black;"/>
                               <span class="btn btn-primary" onClick="comment()" data-toggle="tooltip" data-placement="right"
                                title="" data-original-title="Comment selection."> 
                                <i class="fa fa-hashtag"></i>
                	       </span> 
                               <span class="btn btn-primary" onClick="uncomment()" data-toggle="tooltip" data-placement="right"  
                                title="" data-original-title="Uncomment selection."> 
                                <i class="fa fa-minus-square"></i>
                	       </span> 
                               <span class="btn btn-primary">
                                  <input type="checkbox" name="chk-share" id="chk-share" data-toggle="tooltip" data-placement="right"  
                               title="" data-original-title="Share Python code with Mentor (on/off)">
                               </span>
                               <span class="btn btn-primary runBtn" data-toggle="tooltip" data-placement="right" 
                                title="" data-original-title="Execute the Python code from the beginning.">
                                <i class="fa fa-play" aria-hidden="true"></i>
                               </span>
            		       <span class="btn btn-primary resetBtn" data-toggle="tooltip" data-placement="right" 
                                   title="Stop execution and clear all output." ><i class="fa fa-stop-circle"></i>
                               </span>
			     </div>
                             <div id="codePanelBackground" class="panel-body" style="background-color: rgb(255, 255, 255);">
                                <form action="#" method="post" enctype="multipart/form-data" id="codeform">
                                    <textarea id="code" name="file" style="display: none;">ggg</textarea>
                                </form>
                              </div>
                           </div>
                      </div>
                      <div id="outputContainer" class="col-xs-6" style="width: 50%;">
                        <div id="splitbar" style="height: 513px; cursor: auto;">
                          <div id="grip"></div>
                        </div>
                        <div class="cs-panel panel panel-primary">
                            <div class="panel-heading"><i class="fa fa-print" aria-hidden="true"></i> 
                              <small><button class="btn btn-primary" disabled>Output</button></small>
                            </div>
                            <div id="outputPanel" class="panel-body" style="height: 483px;">
                                <div id="console"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- /active -->
        </div> <!-- /row -->
    </div> <!-- /mainBody -->
</div> <!-- /bodyWrapper -->

<!-- OPen program Modal -->
<div class="modal fade" id="OpenProgramModal" tabindex="-1" role="dialog" aria-labelledby="OpenProgramModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="OpenProgramModalLabel">Open file</h5>
      </div>
      <div class="modal-body">      
	<select name="combo" id="combo" class="form-control"></select>
      </div>
      <div class="modal-footer">
        <button class="btn btn-success btn-lg float-left" onclick="open_file_name($('#combo option:selected').text())">Submit</button>
        <button class="btn btn-secondary" data-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>

<!-- Login Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="loginModalLabel">Login form</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="loginForm" name="loginForm" method="post" action="./login/login-exec.php">
	  <div class="form-group">
	    <label for="login">Email address</label>
	    <input type="email" class="form-control" id="login" name='login' placeholder="Email">
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="password" name='password' placeholder="Password">
	  </div>
	  <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
   </div>
 </div>
</div>

<!-- Sign Up Modal -->
<div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="signupModalLabel">New user</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form onsubmit="return false" class="form" role="form" autocomplete="off">
            <div class="form-group">
                <label for="brojindeksa">Student ID</label>
                <input type="text" class="form-control" name="studentID" id="studentID" placeholder="Student ID">
            </div>
            <div class="form-group">
                <label for="ime">First name</label>
                <input type="text" class="form-control" name="firstName" id="firstName" placeholder="First name">
            </div>
            <div class="form-group">
                <label for="prezime">Last name</label>
                <input type="text" class="form-control" name="lastName" id="lastName" placeholder="Last name">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" id="email" placeholder="email@gmail.com" required="">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" name="signin-password" id="signin-password" placeholder="password" 
			title="At least 6 characters with letters and numbers" required="">
            </div>
            <div class="form-group">
                <label for="confirm-password">Repeat password</label>
                <input type="password" class="form-control" name="confirm-password" id="confirm-password" 
			placeholder="password again" required="">
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button onclick="new_user()" class="btn btn-success btn-lg float-right">Submit</button>
      </div>
    </div>
  </div>
</div>
<?php
if ($project !== ".") {
     	echo '<script>$("#open_project").text("'.stripslashes($project).'")</script>'; 
     	echo '<script>$("#login").hide();$("#logout").show();$("#menu-signin").hide();</script>'; 
     }
     else{
     	echo '<script>$("#login").show();$("#menu-signin").show();$("#logout").hide()</script>'; 
     }
?>
</body>
</html>
