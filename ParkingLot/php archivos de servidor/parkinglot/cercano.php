<?php


include "db.php";




$iduser = 1;


//$usu='jlvo1994@gmail.com';
//$pass='mypass';


$data=array();
$q=mysqli_query($con,"SELECT * FROM `estacionamientos` WHERE id = '$iduser'");


while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);


?>