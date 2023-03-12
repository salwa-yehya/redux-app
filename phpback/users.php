<?php require('./config.php');?>

<?php

error_reporting(E_ALL);
ini_set('display_error',1);
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Methods:*');
header('Access-Control-Allow-Origin:*');

$object = new crud;
$conn = $object->connect();
$method = $_SERVER['REQUEST_METHOD'];



switch ($method) {
    case 'GET' :
        
        $sql = "SELECT * FROM user" ;
        $path = explode('/' , $_SERVER['REQUEST_URI']);
        // print_r($path);
        if(isset($path[4]) && is_numeric($path[4])){
            $sql .= " WHERE id = ?";
            $query = $conn->prepare($sql);
            $query->execute([$path[4]]);
            $users = $query->fetch(PDO::FETCH_ASSOC);
        } else {
            $query = $conn->prepare($sql);
            $query->execute();
            $users = $query->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($users);
        break;


    case 'PUT' :
        $users = json_decode(file_get_contents('php://input'));
        // print_r($users);
        echo ($users->id);
        $sql = "UPDATE user SET fullname=?  , email=? , password=?
                WHERE id = ?" ;
        $query = $connect->prepare($sql);
        $query->execute([$users->fullname  , $users->email , $users->password , $users->id]);
        break;

    case 'POST' :
        $users = json_decode(file_get_contents('php://input'));

        $email = $users->email;
        
        $oldData="SELECT * FROM user WHERE email = '$email' ";
        $stmt = $connect->prepare($oldData);
        $stmt->execute();
        $checkEmail = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        if($checkEmail == []){
            $sql = "INSERT INTO user (  fullname , email , password)
                    VALUES ( ? , ? , ? )" ;
            $query = $connect->prepare($sql);
            $query->execute([$users->fullname , $users->email , $users->password]);
        } else {
            echo 'Your Email is Already Exist';
        }
        break;


    case 'DELETE' :
        $sql = "DELETE FROM user WHERE id = ?" ;
        $path = explode('/' , $_SERVER['REQUEST_URI']);
   
        if(isset($path[4]) && is_numeric($path[4])){
            $query = $connect->prepare($sql);
            $query->execute([$path[4]]);
        }
        echo json_encode($users);
        break;
}
?>