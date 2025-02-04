<?php


    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    $response = ['success' => false];

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        if (!isset($_POST['first_name']) || empty($_POST['first_name'])) {
            die(json_encode("First name field is required."));
        }
    
        if (!isset($_POST['last_name']) || empty($_POST['last_name'])) {
            die(json_encode("Last name field is required."));
        }
    
        if (!isset($_POST['email']) || empty($_POST['email'])) {
            die(json_encode("Email field is required."));
        }
    
        if (!isset($_POST['password']) || empty($_POST['password'])) {
            die(json_encode("Password field is required."));
        }
    
        include_once "base.php";
    
        $first_name = $base->real_escape_string($_POST['first_name'] ?? '');
        $last_name = $base->real_escape_string($_POST['last_name'] ?? '');
        $email = $base->real_escape_string($_POST['email'] ?? '');
        $password = password_hash($base->real_escape_string($_POST['password'] ?? ''), PASSWORD_BCRYPT);
    
        
        $check_email = "SELECT * FROM users WHERE email = '{$email}'";
        $result = $base->query($check_email);
    
        if ($result->num_rows > 0) {
            $response['error'] = "This email already exists";
        } 
    
        else {
            $insert = "INSERT INTO users (first_name, last_name, email, password) 
                        VALUES ('{$first_name}', '{$last_name}', '{$email}', '{$password}');";
            if ($base->query($insert)) {
                $response['success'] = true;
                $response['message'] = "Registration successful.";
                die(json_encode($response));
            } 
            else {
                $response['error'] = "Database error. Please try again.";
                die(json_encode($response));
            }
        }
    }

    include_once "base.php";
    $DBCall = "SELECT * FROM users";
    $resultDB = $base->query($DBCall);
    $DB = $resultDB->fetch_all(MYSQLI_ASSOC);
    echo json_encode($DB);
    

    
       
    
    

  