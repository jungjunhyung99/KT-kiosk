<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DBConnect.php';
$objDb = new DbConnect();
$conn = $objDb->connect();


$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'POST':
        $input = json_decode(file_get_contents('php://input'));

        $sql = "SELECT * FROM kiosk_answer WHERE store = :store AND level = :level";
        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':store', $input->store);
        $stmt->bindParam(':level', $input->level);

        if ($stmt->execute()) {
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            echo "stmt execute failed";
            return;
        }
        $json_answer = json_encode($input->basket);
        $answer = json_decode($json_answer, true);

        // print_r($answer);
        // print_r($result);
        $result_basket = json_decode($result["basket"], true);

        // print_r($result_basket);

        ksort($result_basket);
        ksort($answer);


        $return1 = array_diff_assoc_recursive($result_basket, $answer);
        $return2 = array_diff_assoc_recursive($answer, $result_basket);

        $return = array(
            'in' => $return1,
            'not_in' => $return2
        );

        echo json_encode($return);

        break;

    case 'GET':
        $sql = "SELECT * FROM kiosk_answer WHERE store = :store AND level = :level";
        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':store', $_GET['store']);
        $stmt->bindParam(':level', $_GET['level']);

        $stmt->execute();

        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        echo json_encode($result);

        break;
}


function array_diff_assoc_recursive($array1, $array2)
{
    $difference=array();
    foreach ($array1 as $key => $value) {
        if ($key === "name") {
            $difference[$key] = $value;
        }
        if (is_array($value)) {
            if (!isset($array2[$key]) || !is_array($array2[$key])) {
                $difference[$key] = $value;
            } else {
                $new_diff = array_diff_assoc_recursive($value, $array2[$key]);
                if (!empty($new_diff)) {
                    $difference[$key] = $new_diff;
                }
            }
        } elseif (!array_key_exists($key, $array2) || $array2[$key] !== $value) {
            $difference[$key] = $value;
        }
    }
    return $difference;
}
