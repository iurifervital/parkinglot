<?php
header("Access-Control-Allow-Origin: *");
//Conexion a mysql
$conexion= mysql_connect("localhost","root","123");

//Nombro variables con metodo POST
$codigo=$_POST['codigo'];
$userid=$_POST['userid'];



$est='Parking Lot 1 test';


//$Nombre= 'asdasd';


//Selecciono mi Base de Datos
mysql_select_db("parkinglot",$conexion);


//Añado la onulta
$sql="INSERT INTO `historial` (`id`, `estacionamiento`, `pago`, `tiempo`, `usuario_id`, `inicio`, `fin`, `codigo`) VALUES (NULL, '$est', -1, -1, '$userid', now(), '2000-01-01 00:00:00', '$codigo');";

$resultado=mysql_query($sql);

//Cierro
mysql_close($conexion);

?>