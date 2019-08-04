<?php
$path = "../projects/"; // path to projects
$project = $_REQUEST['project'];
$file  =  $path.$project."/".$_REQUEST['filename'];
if(!file_exists($file)){
   echo "Fajl ".$file." ne postoji";
   return;
}
unlink($file);
echo $_REQUEST['filename']." izbrisan iz projekta";
?>