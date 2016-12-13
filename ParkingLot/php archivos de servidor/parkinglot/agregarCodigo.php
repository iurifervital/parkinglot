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
$sql="INSERT INTO `codigo` (`id`, `codigoa`, `codigob`, `usuario_id`) VALUES (NULL, '$codigo', 'none', '$userid')";

$resultado=mysql_query($sql);

//Cierro
mysql_close($conexion);

?>