<?php
     header("Access-Control-Allow-Origin: *");
     header("Content-Type: application/json");
     header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
     header("Access-Control-Allow-Headers: Content-Type");

    if (!isset($_POST['email']) || empty($_POST['email'])) {
        die(json_encode("Email field is required."));
    }

    require_once "base.php";

    $email = $base->real_escape_string($_POST['email']);
    $success_message = "Thank you for subscribing!";
    $error_message = "You are already subscribed";

    $check_email = "SELECT * FROM subscribe WHERE email = '$email'";
    $result = $base->query($check_email);

    if ($result->num_rows > 0) {
        die(json_encode(array("status" => "error", "message" => $error_message)));
    } 
    else {
        $insert = "INSERT INTO subscribe (email) VALUES ('$email')";
        if ($base->query($insert)) {
            die(json_encode( $success_message));
        } 
        
        else {
            die(json_encode("Database error. Please try again."));
        }
    }

