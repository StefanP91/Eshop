<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    include_once "base.php";  

    $sql = "SELECT * FROM products WHERE category = 'electronics' "; 
    $result = $base->query($sql);

    

    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {

            if (!empty($row['image_1'])) {
                $row['image_1'] = base64_encode($row['image_1']);  
            }

            if (!empty($row['image_2'])) {
                $row['image_2'] = base64_encode($row['image_2']);  
            }

            if (!empty($row['image_3'])) {
                $row['image_3'] = base64_encode($row['image_3']);  
            }

            if (!empty($row['image_4'])) {
                $row['image_4'] = base64_encode($row['image_4']);  
            }

            if (!empty($row['image_5'])) {
                $row['image_5'] = base64_encode($row['image_5']);  
            }

            if (!empty($row['image_6'])) {
                $row['image_6'] = base64_encode($row['image_6']);  
            }
            
            if (!empty($row['image_7'])) {
                $row['image_7'] = base64_encode($row['image_7']);  
            }

            if (!empty($row['image_8'])) {
                $row['image_8'] = base64_encode($row['image_8']);  
            }
            
            $products[] = $row;
        }

        echo json_encode($products);
        exit;
        

    } 

    
    else {
        echo json_encode(array('error' => 'No products found'));

    }
