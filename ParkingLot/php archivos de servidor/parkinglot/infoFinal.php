<?php


include "db.php";




$iduser = $_POST['iduser'];
$codigo=$_POST['codigo'];


//$usu='jlvo1994@gmail.com';
//$pass='mypass';


$data=array();
$q=mysqli_query($con,"SELECT * FROM `historial` WHERE usuario_id = '$iduser' AND codigo ='$codigo'");

while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);


?>