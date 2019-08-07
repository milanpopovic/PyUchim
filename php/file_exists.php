<?php
   $project = $_POST['project'];
   $file = "../projects/".$project."/".$_POST['file'];
   if(file_exists ($file)) echo "yes";
   else echo "no";
?>
