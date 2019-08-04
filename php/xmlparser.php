<?php
$xml=simplexml_load_file("../samples/exercises.xml") or die("Error: Cannot create object");
echo $xml->count();
foreach($xml->children() as $exercize) { 
    echo "<pre>".$exercize->id . " ".$exercize->text . "</pre><br>";
}
echo $xml->exersize[8]->text;
?>

