<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type");

    include_once "base.php";
    $DBCall = "SELECT * FROM orders";
    $resultDB = $base->query($DBCall);
    $DB = $resultDB->fetch_all(MYSQLI_ASSOC);
    echo json_encode($DB);
