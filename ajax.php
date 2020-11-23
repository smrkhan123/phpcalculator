<?php
$id = $_POST['data'];
$opt = $_POST['operator'];
$tempVar = $_POST['tempVar'];
$nextVar = $_POST['nextVar'];
if ($opt == "add") {
    $tempVar = $tempVar + $nextVar;
} else if ($opt == "substract") {
    $tempVar = $tempVar - $nextVar;
} else if ($opt == "multiply") {
    $tempVar = $tempVar * $nextVar;
} else if ($opt == "divide") {
    if ($nextVar == 0) {
        $tempVar = "";
    } else {
        $tempVar = $tempVar / $nextVar;
    }
}
$opt = $id;
$nextVar = " ";
$arr = array($tempVar, $opt, $nextVar, $id);
echo json_encode(array("arr" => $arr));
?>
