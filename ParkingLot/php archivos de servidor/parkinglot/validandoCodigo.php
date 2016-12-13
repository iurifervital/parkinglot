<?php
 
$server = "localhost";
$username = "root";
$password = "123";
$database = "parkinglot";
 
$con = mysql_connect($server, $username, $password) or die ("No se conecto: " . mysql_error());
 
mysql_select_db($database, $con);
 
$userid = mysql_real_escape_string($_POST["userid"]);
$codigo = mysql_real_escape_string($_POST["codigo"]);
 
$sql = "SELECT * FROM codigo WHERE id='$userid' AND codigob='$codigo'";
 
if ($resultado = mysql_query($sql, $con)){
    if (mysql_num_rows($resultado) > 0){
        echo true;
    }
}
else{
    echo false;
}
mysql_close($con);
 
?>