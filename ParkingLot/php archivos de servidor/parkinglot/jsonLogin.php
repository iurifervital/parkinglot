<?php


include "db.php";




$usu = $_POST['usu'];
$pass = $_POST['pass'];

//$usu='jlvo1994@gmail.com';
//$pass='mypass';


$data=array();
$q=mysqli_query($con,"SELECT * FROM `usuario` WHERE correo = '$usu' and contrasena = '$pass'");

while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);


?>