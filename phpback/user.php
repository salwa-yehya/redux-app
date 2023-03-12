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

switch($method){
    case "GET":

        $sql = "SELECT * FROM user";
        $path = explode('/',$_SERVER['REQUEST_URI']);
        
        // print_r($path);break;
        if(isset($path[4])&&is_numeric($path[4])){

            $sql .= "   WHERE id = :id";
            $stmt =$conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);

            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

        }else{

            $stmt =$conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        
        echo json_encode( $users);
        break;




    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO user( id , fullname , email ,phone, password , created_at) VALUES ( null , :fullname, :email , :mobile,:password,:created_at)";
        $stmt =$conn->prepare($sql);
        $created_at = date('Y-m-d');
        $stmt->bindParam(':fullname', $user->fullname);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':mobile', $user->phone);
        $stmt->bindParam(':password', $user->password);
        $stmt->bindParam(':created_at', $created_at);
        if($stmt->execute()){
            $response = ['status'=>1,'message'=>'Record created successfully.'];
        }else{
            $response = ['status'=>0,'message'=>'Failed to created  record.'];

        }

        echo json_encode( $response);
        break;

        case "PUT":

        $user = json_decode(file_get_contents('php://input'));

        // print_r($user);break;
        $sql = "UPDATE  user SET  fullname = :fullname, email = :email , password = :password  WHERE id = :id ";
        $stmt =$conn->prepare($sql);
        $updated_at = date('Y-m-d');
        $stmt->bindParam(':id', $user->id);
        $stmt->bindParam(':fullname', $user->fullname);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':password', $user->password);
        if($stmt->execute()){
            $response = ['status'=>1,'message'=>'Record updated successfully.'];
        }else{
            $response = ['status'=>0,'message'=>'Failed to updated  record.'];

        }

        echo json_encode( $response);
        break;

        case "DELETE":

            $sql = "DELETE  FROM user WHERE id = :id";
            $path = explode('/',$_SERVER['REQUEST_URI']);
            $stmt =$conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();

            // print_r($path);

            if($stmt->execute()){
                $response = ['status'=>1,'message'=>'Record deleted successfully.'];
            }else{
                $response = ['status'=>0,'message'=>'Failed to delete  record.'];
    
            }
            echo json_encode( $response);
            break;








}
?>