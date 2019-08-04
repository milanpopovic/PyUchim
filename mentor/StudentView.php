<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Students</title> 
<link rel="stylesheet" type="text/css" media="screen" href="themes/redmond/jquery-ui.custom.css" />
<link rel="stylesheet" type="text/css" media="screen" href="css/ui.jqgrid.css" />
<script src="js/jquery-1.7.2.min.js" type="text/javascript"></script>
<script src="js/i18n/grid.locale-en.js" type="text/javascript"></script>
<script src="js/jquery.jqGrid.min.js" type="text/javascript"></script>
</head>
<body>
<script type="text/javascript">
jQuery(function(){ 
  jQuery("#student").jqGrid({ 
    url:"StudentLoader.php", 
    datatype: "json", 
    colNames:['Id','Student ID','Last name','First name','Email','Password','Status'], 
    colModel:[{name:'Id',index:'Id',width:100,editable:true,hidden:true,editrules:{edithidden:false}},
    {name:'studentID',index:'studentID',width:100,editable:true,hidden:false,editrules:{edithidden:true}},
    {name:'lastName',index:'lastName',width:100,editable:true,hidden:false,editrules:{edithidden:true}},
    {name:'firstName',index:'firstName',width:100,editable:true,hidden:false,editrules:{edithidden:true}},
    {name:'email',index:'email',width:200,editable:true,hidden:false,editrules:{edithidden:true}},
    {name:'password',index:'password',width:100,editable:false,hidden:true,editrules:{edithidden:false}},
    {name:'status',index:'status',width:30,editable:true,hidden:false,editrules:{edithidden:true}}],
    rowNum:20, 
    width: '100%',
    height: '100%',
    rowList:[10,20,30], 
    viewrecords: true, 
    pager: "#StudentPager",   
    sortname: "", 
    autowidth: true,
    caption: "Users",
    loadComplete: function(){},
    loadError : function(xhr, st, str){
                     alert(str);//'loadError triggered') 
                },
     ondblClickRow:function() {
         var rowid = $("#student").jqGrid('getGridParam', 'selrow');
         //fn = jQuery("#student").jqGrid('getCell', rowid, 'firstName');
         //ln = jQuery("#student").jqGrid('getCell', rowid, 'lastName');
         email = jQuery("#student").jqGrid('getCell', rowid, 'email');
         password = jQuery("#student").jqGrid('getCell', rowid, 'password');
         //project = fn.toLowerCase();+"."+ln.toLowerCase();;
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
).navButtonAdd('#StudentPager',{
     caption:"Password",
     cursor:"", 
     title:"",
     buttonicon:"ui-icon-folder-open", 
     onClickButton: function(){ 
        var rowid = $("#student").jqGrid('getGridParam', 'selrow');
        id = jQuery("#student").jqGrid('getCell', rowid, 'Id');
        new_password = prompt("New password:");
        if (new_password != null){
          $.ajax({
            method: "POST",
            url: "password_change.php",
            data: {id: id, pass: new_password }
          })
          .done(function( msg ) {
            alert( "Password changed "+msg);
          });
        }
      }
   })
  $(".ui-search-toolbar").hide();
  //if(true) 
  //	jQuery("#student").jqGrid('filterToolbar',{stringResult: true,searchOnEnter : false});
});

</script>
<table id="student"></table> 
<div id="StudentPager"></div>
</body>
</html>
