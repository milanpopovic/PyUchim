var appurl = '.';
$( document ).ready(function() {
    var $myVar;
    $("#chk-share").change(function() {
        if(this.checked) {
            $myVar = setInterval(myTimer, 3000);
        }
        else{
            clearInterval($myVar);
        }
    });
    $('#codeContainer').keyup(function() {
        if($('#chk-share').is(':checked')) {
            clearInterval($myVar);
            save_file();
            $myVar = setInterval(myTimer, 3000);
        }
    });
    
    function myTimer(){
       //alert("checked")
       load_file();
    }
});

function login(){
   $("#loginModal").trigger('reset');
  $("#loginModal").modal('show');
}
function logout(){
   $("#login").show(); 
   $("#logout").hide();
   $("#menu-signin").show();
   $model.view.setCode("");
   $('#open_file').val("");
   $('#open_project').text("")
   $model.reset();
   $.ajax({
      method: "POST",
      url: "./login/logout.php",
      data: { project: "" }
    }).done(function( msg ) {
     });
}

function open_file(){
    project = $('#open_project').text();
    if(project == ""){
        myAlert("alert-warning","You must be logged in.");
        return;
    }
    var urlpath = appurl+'/php/open_file.php'
    $.ajax({
      method: "POST",
      url: urlpath,
      data: { otvori_projekat: project }
    }).done(function( msg ) {
        if(msg.length <= 1){
             	return;
        }
        else{
           $("#path").val("projects");
           addCombo(msg);        
        }
    });
}

function open_examples(){
    var urlpath = appurl+'/php/open_examples.php'
    $.ajax({
      method: "POST",
      url: urlpath,
    }).done(function( msg ) {
        if(msg.length <= 1){
             	return;
        }
        else{
           $("#path").val("projects/mentor.examples");
           addCombo(msg);        
        }
    });
}

function open_file_name(file,path){
    $('#open_file').val(file);
    load_file(path);
    $('#OpenProgramModal').modal('hide');
}

function close_file(){
    $model.view.setCode("");
    $('#open_file').val("");
    $model.reset();
}

function addCombo(options) {
    op = options.split(",");
    $("#combo").empty();
    for(i=0; i < op.length-1; i++){
           $('#combo').append($('<option>', {value: i, text:op[i]}));
    }
    $("#OpenProgramModal").modal('show');
}

function load_file(path){
    var fajl = $('#open_file').val();
    var projekat = $('#open_project').text();
    var urlpath = appurl+'/php/load_file.php';
      $.ajax({
	    method: "POST",
	    url: urlpath,
	    data: { 'path': path, otvori_projekat: projekat, filename: fajl }
      }).done(function( msg ) {
            if ($model.view.getCode() !== msg){
                $model.view.setCode(msg);
            }
            if(!$('#chk-share').is(':checked')) {
                $model.reset();
            }
         //}
      });
}

function delete_file(){
    var fajl = $('#open_file').val();
    if(fajl.startsWith("Exam")){
       myAlert("alert-warning","Cannot delete exam file.");
       return;
    }
    if(fajl == "") return
    var projekat = $('#open_project').text();
    var urlpath = appurl+'/php/remove_file.php'
    $.ajax({
	  method: "POST",
	  url: urlpath,
	  data: { project: projekat, filename: fajl }
    })
    $model.view.setCode("");
    $model.reset();
    $('#open_file').val("");
}

function save_file_as(){  
    var projekat = $('#open_project').text();
    if(projekat == ""){
        myAlert("alert-warning","You must be logged in.");
        return;
    }
    var fajl = prompt("Naziv programa","");
    if(fajl.startsWith("Exam")){
       myAlert("alert-warning","Cannot change exam file.");
       return;
    }
    if(fajl == "") return
    $('#open_file').val(fajl);
    sadrzaj = $model.view.getCode();
    var urlpath = appurl+'/php/save_file.php'
 
    $.ajax({
	  method: "POST",
	  url: urlpath,
	  data: { otvori_projekat: projekat, file: fajl, content: sadrzaj  }
    }).done(function( msg ) {
            //alert(msg)
      });
}

function new_file(){
    $('#open_file').val("");
    $model.view.setCode("");
    $model.reset();
    save_file();
}

function save_new_file(name){
    var valid = /^(\w)+(\.?)(\w{0,})$/;
    if(!valid.test(name)) {
        myAlert("alert-warning","Invalid code name: "+name);
        return;
    }
    $('#open_file').val(name);
    $model.view.setCode("");
    $model.reset();
    save_file();
}

function save_file(flag){
    var projekat = $('#open_project').text();
    if(projekat == ""){
        myAlert("alert-warning","You must be logged in.");
        return;
    }
    
    var fajl = $('#open_file').val();
    if(fajl.startsWith("Exam")){
       myAlert("alert-warning","Cannot change exam file.");
       return;
    }
    if(fajl == "") {
       save_file_as();
       return;
    }
    sadrzaj = $model.view.getCode();
    var urlpath = appurl+'/php/save_file.php' 
    $.ajax({
      method: "POST",
      url: urlpath,
      data: { otvori_projekat: projekat, file: fajl, content: sadrzaj  }
    });
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function signup(){
  $("#signupModal").trigger('reset');
  $("#signupModal").modal('show');
}


function sharing(){
   myAlert("alert-warning",$("#chk-share").val());
}

function new_user(){
  var error = false;
  var error_message = ''
  var password = $('#signin-password').val();
  var confirm_password = $('#confirm-password').val();
  var studentID=$('#studentID').val();
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var email = $('#email').val();
  if (firstName.length < 2 || lastName.length < 2) {
    error_message ='Invalid first and/or last name\n';
    error = true;
  }
  var pattern = "^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$";
  if (!email.match(pattern)){
    error_message +='Incorrect mail address\n';
    error = true;
  }
  pattern = "^(?=.*?[a-z])(?=.*?[0-9]).{5,}$";
  if(!password.match(pattern)){
    error_message +='Password: minimum five characters,\n at least one letter and one number.\n';
    error = true;
  }
  if (password !== confirm_password){
    error_message +='Passwords dont match.\n';
    error = true;
  }
 
  if (!error){
    $.post( "./php/new_user.php", {studentID: studentID, lastName: lastName,firstName: firstName, email: email,password: password })
    .done(function( response ) {
      myAlert("alert-warning",response);
      $("#signupModal").modal('hide');
    });
  }
  else{
    myAlert("alert-warning",error_message);
  }
}

function lucky_question(){
  $.ajax({
	  method: "POST",
	  url: "php/lucky_question.php"
  }).done(function( msg ) {
            $model.view.setCode(msg);
            $model.reset();
            $("#open_file").val("");
  });
}

function myAlert(alertType,alertMessage){
  var alertDiv = '<div class="alert '+alertType+' alert-dismissible " role="alert">';
  alertDiv += alertMessage;
  alertDiv += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
  alertDiv += '<span aria-hidden="true">&times;</span></button></div>';
  $("#alertMessage").html(alertDiv);
}

function fontSizeUp(){

        jQuery(".CodeMirror").css('font-size','+=1');
        jQuery("#console pre").css('font-size','+=1');
}
function fontSizeDown(){

		jQuery(".CodeMirror").css('font-size','-=1');
        jQuery("#console pre").css('font-size','-=1');

}


