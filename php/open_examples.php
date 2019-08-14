<?php
$path = "../projects/mentor.examples/"; 

$dir = dir($path);
$files[0]="";
while (($file = $dir->read()) !== false)
{
 if(is_file($path.$d."/".$file) ) 
  	$files[] = $file; 
}
$dir->close();
sort($files);
$filenames = "";
foreach($files as $name){
   if($name != "")
       $filenames = $filenames.$name.",";
}
echo rtrim($filenames," ");
?> 
