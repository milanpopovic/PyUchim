<?php 
     session_start();
     if(!isset($_SESSION['SESS_NAME'])){
        echo "<center><h1>Not Authorized.</h1></center>";
        exit;
     }
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>PyUchim mentor's page</title> 
    <link rel="stylesheet" type="text/css" href="../CodeSkulptor3/bootstrap.css">
    <link rel="shortcut icon" href="../CodeSkulptor3/favicon.ico">
    <link rel="stylesheet" type="text/css" media="screen" href="themes/redmond/jquery-ui.custom.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="css/ui.jqgrid.css" />
    <script src="js/jquery-1.7.2.min.js" type="text/javascript"></script>
    <script src="js/i18n/grid.locale-en.js" type="text/javascript"></script>
    <script src="js/jquery.jqGrid.min.js" type="text/javascript"></script>
    <link rel="shortcut icon" href="../CodeSkulptor3/favicon.ico">
    <script src="https://kit.fontawesome.com/292f64c027.js"></script>
    
<script>
function changePassword(){ 
    var rowid = $("#student").jqGrid('getGridParam', 'selrow');
    if(rowid == null){
        alert("No user selected.")
        return
    }
    id = jQuery("#student").jqGrid('getCell', rowid, 'Id');
    new_password = prompt("New password:");  
    if (new_password != null){
      $.ajax({
        method: "POST",
        url: "password_change.php",
        data: {id: id, pass: new_password }
      }).done(function( msg ) {
            alert( "Password changed "+msg);
      });
    }
}

function sendMail(){
  	var rowid = $("#student").jqGrid('getGridParam', 'selrow');
    if(rowid == null){
        alert("No user selected.")
        return
    }
    email = jQuery("#student").jqGrid('getCell', rowid, 'email');
    window.location.href = "mailto:"+email;
}
function userLogin(){
    var rowid = $("#student").jqGrid('getGridParam', 'selrow');
    if(rowid == null){
        alert("No user selected.")
        return
    }
    email = jQuery("#student").jqGrid('getCell', rowid, 'email');
    password = jQuery("#student").jqGrid('getCell', rowid, 'password');
    window.open("../login/prof-login-exec.php?email="+email+"&id="+password);
}
</script>
</head>
<body>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
          <a class="navbar-brand" href="#"><i class="fa fa-graduation-cap" aria-hidden="true"></i>PyUchim Mentor's page</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		<ul class="nav navbar-nav">
		   <li><a class="nav-link" href="#" onClick="sendMail();"><i class="far fa-envelope"></i> Send mail</a></li>
           <li><a class="nav-link" href="#" onClick="userLogin()"><i class="fas fa-sign-in-alt"></i> User login</a></li>
	  	   <li><a class="nav-link" href="#" onClick="changePassword()"><i class="fas fa-unlock-alt"></i> Change password</a></li>
           <li><a class="nav-link" href="#" onClick="window.open('exam_setup.html');"><i class="fas fa-cog"></i> Exam setup</a></li>
           <li><a class="nav-link" href="../setup.php" target="_blank"><i class="fas fa-cog"></i> PyUchim setup</a></li>
           <li><a class="nav-link" href="../login/log.txt" target="_blank"><i class="fas fa-eye"></i> PyUchim logfile</a></li>  
		</ul>
    </div>
   </div>
</nav>
<div class="container">
 <div class="row">
  <div class="col-sm-0"></div>
  <div class="col-sm-10">
<script type="text/javascript">
jQuery(function(){ 
  jQuery("#student").jqGrid({ 
    url:"StudentLoader.php", 
    datatype: "json", 
    colNames:['Id','Student ID','First name','Last name','Email','Password','Status'], 
    colModel:[{name:'Id',index:'Id',width:100,editable:true,hidden:true,editrules:{edithidden:false}},
    {name:'studentID',index:'studentID',width:100,editable:true,hidden:false,editrules:{edithidden:true}},
    {name:'firstName',index:'firstName',width:100,editable:true,hidden:false,editrules:{edithidden:true}},
    {name:'lastName',index:'lastName',width:100,editable:true,hidden:false,editrules:{edithidden:true}},
    {name:'email',index:'email',width:200,editable:true,hidden:false,editrules:{edithidden:true}},
    {name:'password',index:'password',width:100,editable:false,hidden:true,editrules:{edithidden:false}},
    {name:'status',index:'status',width:50,editable:true,hidden:false,editrules:{edithidden:true}}],
    rowNum:20, 
    width: '100%',
    height: '100%',
    rowList:[10,20,30], 
    viewrecords: true, 
    pager: "#StudentPager",   
    sortname: "", 
    autowidth: true,
    caption: "PyUchim users",
    loadComplete: function(){},
    loadError : function(xhr, st, str){
                     alert(str);//'loadError triggered') 
                },
     ondblClickRow:function() {
         var rowid = $("#student").jqGrid('getGridParam', 'selrow');
         email = jQuery("#student").jqGrid('getCell', rowid, 'email');
         password = jQuery("#student").jqGrid('getCell', rowid, 'password');
         window.open("../login/prof-login-exec.php?email="+email+"&id="+password);
    },

  });
  jQuery("#student").jqGrid("navGrid","#StudentPager",
    		{edit:true,add:false,del:true,view:true},
	// Edit options
           {width:400, url: "StudentManager.php", closeAfterEdit: true},
        // Add options
           {width:400, url: "StudentManager.php", closeAfterAdd: true },
        // Delete options
           {url: "StudentManager.php",
             delData: {
         		Id: function() {
           		      var sel_id = jQuery("#student").jqGrid('getGridParam', 'selrow');
           		      var value = jQuery("#student").jqGrid('getCell', sel_id, 'Id');
           		      return value;
         	            }
      	     }
   	   },  
        // Search options
           {},
        // View options
           {width:400}
  )
  $(".ui-search-toolbar").hide();
  //jQuery("#student").jqGrid('filterToolbar',{stringResult: true,searchOnEnter : false});
});

</script>
<table id="student"></table> 
<div id="StudentPager"></div>
<div class="col-sm-0"></div>
</div>

</body>
</html>
