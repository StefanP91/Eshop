<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    $response = ['success' => false];

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (!isset($_POST['full_name']) || empty($_POST['full_name'])) {
            $response['error'] = "Full Name field is required.";
            echo json_encode($response);
            exit;
        }

        if (!isset($_POST['email']) || empty($_POST['email'])) {
            $response['error'] = "Email field is required.";
            echo json_encode($response);
            exit;
        }

        if (!isset($_POST['phone_number']) || empty($_POST['phone_number'])) {
            $response['error'] = "Phone number field is required.";
            echo json_encode($response);
            exit;
        }

        if (!isset($_POST['address']) || empty($_POST['address'])) {
            $response['error'] = "Address field is required.";
            echo json_encode($response);
            exit;
        }

        if (!isset($_POST['city']) || empty($_POST['city'])) {
            $response['error'] = "City field is required.";
            echo json_encode($response);
            exit;
        }

        if (!isset($_POST['product_ids']) || empty($_POST['product_ids'])) {
            $response['error'] = "Product id field is required.";
            echo json_encode($response);
            exit;
        }

        if (!isset($_POST['product_quantities']) || empty($_POST['product_quantities'])) {
            $response['error'] = "Product quantity field is required.";
            echo json_encode($response);
            exit;
        }

        if (!isset($_POST['order_time']) || empty($_POST['order_time'])) {
            $response['error'] = "Order time field is required.";
            echo json_encode($response);
            exit;
        }

        if (!isset($_POST['payment_method']) || empty($_POST['payment_method'])) {
            $response['error'] = "Payment method field is required.";
            echo json_encode($response);
            exit;
        }

        include_once "base.php";

        $full_name = $base->real_escape_string($_POST['full_name']);
        $email = $base->real_escape_string($_POST['email']);
        $phone_number = $base->real_escape_string($_POST['phone_number']);
        $address = $base->real_escape_string($_POST['address']);
        $city = $base->real_escape_string($_POST['city']);
        $product_ids = $_POST['product_ids'];
        $product_quantities = $_POST['product_quantities'];
        $order_time = $base->real_escape_string($_POST['order_time']);
        $payment_method = $base->real_escape_string($_POST['payment_method']);

  
        foreach ($product_ids as $id) {
            if (!is_string($id) || empty($id)) {
                $response['error'] = "Invalid product id.";
                echo json_encode($response);
                exit;
            }
        }

        foreach ($product_quantities as $quantity) {
            if (!is_numeric($quantity)) {
                $response['error'] = "Invalid product quantity.";
                echo json_encode($response);
                exit;
            }
        }

        $product_quantities = array_map('intval', $product_quantities);

        $stmt = $base->prepare("INSERT INTO orders (user_email, full_name, user_phone, user_address, user_city, order_time, payment_method) 
                                VALUES (?, ?, ?, ?, ?, ?, ?)");
        if (!$stmt) {
            error_log("Prepare failed: " . $base->error);
            $response['error'] = "Database error: " . $base->error;
            echo json_encode($response);
            exit;
        }
        $stmt->bind_param("sssssss", $email, $full_name, $phone_number, $address, $city, $order_time, $payment_method);
        if (!$stmt->execute()) {
            error_log("Execute failed: " . $stmt->error);
            $response['error'] = "Database error: " . $stmt->error;
            echo json_encode($response);
            exit;
        }
        $order_id = $stmt->insert_id;
        $stmt->close();

        $stmt = $base->prepare("INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)");
        if (!$stmt) {
            error_log("Prepare failed: " . $base->error);
            $response['error'] = "Database error: " . $base->error;
            echo json_encode($response);
            exit;
        }
        foreach ($product_ids as $index => $product_id) {
            $quantity = $product_quantities[$index];
            $stmt->bind_param("isi", $order_id, $product_id, $quantity);
            if (!$stmt->execute()) {
                error_log("Execute failed: " . $stmt->error);
                $response['error'] = "Database error: " . $stmt->error;
                echo json_encode($response);
                exit;
            }
        }
        $stmt->close();

        $base->close();

        $response['success'] = true;
    }

    echo json_encode($response);