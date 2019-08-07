<?php
   if(file_exists ("exam_parameters.txt")){
	   	$myfile = fopen("exam_parameters.txt", "r");
   		echo fread($myfile,filesize("exam_parameters.txt"));
   		fclose($myfile);
   }
   else echo "Error: No exam setup file.";
?>
