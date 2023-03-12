<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Methods:*');
header('Access-Control-Allow-Origin:*');


class crud{
 
 static function connect(){
   try{

   $conn=new PDO('mysql:localhost=localhost;dbname=redux','root','');
   // echo 'connent';
   return $conn;
   

}catch(PDOException $error){

   echo 'Error' . $error->getMessage();


}

}
}


// crud::connect();
?>