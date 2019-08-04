<?php
$path = "../projects/"; // path to projects
$project = $_POST['otvori_projekat'];
$content = $_POST['content'];
$file = $path.$project.'/'.trim($_POST['file']);
file_put_contents($file,$content);
if(strstr($file,".py") != FALSE)
         chmod ( $file , 0755 );
echo "Fajl sacuvan";
?>
