<?php
header("Access-Control-Allow-Origin: *");
//Conexion a mysql
$conexion= mysql_connect("localhost","root","123");

//Nombro variables con metodo POST


$RFDP03_2_txt_nombres=$_POST['RFDP03_2_txt_nombres'];
$RFDP03_2_txt_AP=$_POST['RFDP03_2_txt_AP'];
$RFDP03_2_txt_AM = $_POST['RFDP03_2_txt_AM'];
$RFDP03_txt_correo= $_POST['RFDP03_txt_correo'];
$RFDP03_txt_contrasena= $_POST['RFDP03_txt_contrasena'];
$RFDP03_2_txt_telefonoCelular= $_POST['RFDP03_2_txt_telefonoCelular'];
$pago='Tarjeta';

//$Nombre= 'asdasd';


//Selecciono mi Base de Datos
mysql_select_db("parkinglot",$conexion);


//Añado la onulta
$sql="INSERT INTO `usuario` (`id`, `nombres`, `ap`, `am`, `correo`, `contrasena`, `celular`, `pago`) VALUES (NULL, '$RFDP03_2_txt_nombres', '$RFDP03_2_txt_AP', '$RFDP03_2_txt_AM', '$RFDP03_txt_correo', '$RFDP03_txt_contrasena', '$RFDP03_2_txt_telefonoCelular','$pago')";

$resultado=mysql_query($sql);

//Cierro
echo $RFDP03_2_txt_nombres;
mysql_close($conexion);

?>