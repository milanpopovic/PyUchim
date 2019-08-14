<?php
if ($_POST['path'] == 'projects') {
	$path = "../projects/"; // path to projects
	$project = $_REQUEST['otvori_projekat'];
	$file  =  $path.$project."/".$_REQUEST['filename'];
}
else {
    $file = "../".$_POST['path']."/".$_POST['filename'];
}
if(!file_exists($file)){
   echo "File ".$file." does not exist";
   return;
}
echo file_get_contents($file);
?>
