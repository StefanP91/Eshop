<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    if ($_SERVER['REQUEST_METHOD']=== 'POST') {

        if (!isset($_POST['email']) || empty($_POST['email'])) {
            die(json_encode("Email field is required."));
        }
    
        if (!isset($_POST['password']) || empty($_POST['password'])) {
            die(json_encode("Password field is required."));
        }

        include_once "base.php";

        $email = $base->real_escape_string($_POST['email'] ?? '');
        $password = $base->real_escape_string($_POST['password'] ?? '');

        $query = "SELECT * FROM users WHERE email = '$email'";
        $result = $base->query($query);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $response['success'] = true;
            $response['message'] = 'Login successful.';
            $response['user'] = $user;
        } else {
            $response['error'] = 'Invalid password.';
        }
    } else {
        $response['error'] = 'No user found with this email.';
    }

    echo json_encode($response);
    }