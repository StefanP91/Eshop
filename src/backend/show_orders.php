<?php
 header("Content-Type: application/json");

    include_once "base.php";
    $DBCall = "SELECT * FROM orders";
    $resultDB = $base->query($DBCall);
    $DB = $resultDB->fetch_all(MYSQLI_ASSOC);
    echo json_encode($DB);
