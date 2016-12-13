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
$sql="UPDATE `historial` SET `fin` = now() WHERE `historial`.`codigo` = '$codigo' and `historial`.`usuario_id`='$userid';";

$resultado=mysql_query($sql);

//Cierro
mysql_close($conexion);

?>