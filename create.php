<?php
header("Content-Type: application/json");

$json = file_get_contents("php://input");
$filename = json_decode($json)->{'filename'}.'.html';
$file = file_get_contents('index.html');

if (! file_exists($filename)) {
    fopen($filename, "a+");
    file_put_contents($filename, $file);
    echo json_encode(true);
} else echo json_encode(false);

unset($filename);
unset($json);
unset($file);
