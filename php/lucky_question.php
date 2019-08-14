<?php
$xml=simplexml_load_file("../projects/challenges/exercises.xml") or die("Error: Cannot create object");
$count=$xml->count();
$i = rand(0,$count-1);
echo "'''".$xml->exercise[$i]->id.$xml->exercise[$i]->text."'''";
?>

