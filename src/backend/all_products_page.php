<?php
 header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json");
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
 header("Access-Control-Allow-Headers: Content-Type");

include_once "base.php";

if (isset($_GET['product_id']) && !empty($_GET['product_id'])) {
    $product_id = $_GET['product_id']; 
    
    $sql = "SELECT * FROM products WHERE product_id = ?";
    $stmt = $base->prepare($sql);
    
    $stmt->bind_param("s", $product_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $product = $result->fetch_assoc();


        if (!empty($product['image_1'])) {
            $product['image_1'] = base64_encode($product['image_1']);
        }

        if (!empty($product['image_2'])) {
            $product['image_2'] = base64_encode($product['image_2']);
        }

        if (!empty($product['image_3'])) {
            $product['image_3'] = base64_encode($product['image_3']);
        }

        if (!empty($product['image_4'])) {
            $product['image_4'] = base64_encode($product['image_4']);
        }

        if (!empty($product['image_5'])) {
            $product['image_5'] = base64_encode($product['image_5']);
        }

        if (!empty($product['image_6'])) {
            $product['image_6'] = base64_encode($product['image_6']);
        }

        if (!empty($product['image_7'])) {
            $product['image_7'] = base64_encode($product['image_7']);
        }

        if (!empty($product['image_8'])) {
            $product['image_8'] = base64_encode($product['image_8']);
        }

        echo json_encode($product);
    } 
    
    else {
        echo json_encode(['error' => 'No products found']);
    }

    $stmt->close();
    $base->close();
} else {
    echo json_encode(['error' => 'Invalid product ID']);
}
