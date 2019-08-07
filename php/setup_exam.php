<?php
   $myfile = fopen("exam_parameters.txt", "w") or die("Unable to open file!");
   $txt = '{"open":'.$_POST['exam-open'].',"no_of_tasks":'.$_POST['no-of-tasks'].',"from_task":';
   $txt .= $_POST['from-task'].',"to_task":'.$_POST['to-task'].'}';
   fwrite($myfile, $txt);
   echo "Exam setup saved ".$txt;
   fclose($myfile);
?>
