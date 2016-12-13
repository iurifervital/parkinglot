<?php
header("Access-Control-Allow-Origin: *");
//Conexion a mysql
$conexion= mysql_connect("localhost","root","123");

//Nombro variables con metodo POST



$codigo=$_POST['codigo'];
$userid=$_POST['userid'];




//$Nombre= 'asdasd';


//Selecciono mi Base de Datos
mysql_select_db("parkinglot",$conexion);


//Añado la onulta
$sql="UPDATE `historial` SET `tiempo` = TIMESTAMPDIFF(MINUTE, `historial`.`inicio`, `historial`.`fin`) WHERE `historial`.`codigo` = '$codigo' and `historial`.`usuario_id`='$userid'";

$resultado=mysql_query($sql);

//Cierro
mysql_close($conexion);

?>