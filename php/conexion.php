<?php
// Archivo: conexion.php

// Datos de conexión
$host = "localhost";
$user = "root";
$password = "";
$dbname = "datos-corresponsal";

// Crear la conexión
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Recibir datos del formulario
$nombre_cajero = $_POST['nombre_cajero'];

// Función para quitar puntos y comas y convertir el valor a INT
function sanitize_numeric($value) {
    return intval(str_replace(array('.',','), '', $value));
}

$total_efectivo   = sanitize_numeric($_POST['total_efectivo']);
$niqui            = sanitize_numeric($_POST['niqui']);
$daviplata        = sanitize_numeric($_POST['daviplata']);
$yamel            = sanitize_numeric($_POST['yamel']);
$punto_red        = sanitize_numeric($_POST['punto_red']);
$plataforma       = sanitize_numeric($_POST['plataforma']);
$corresponsal2   = sanitize_numeric($_POST['corresponsal2']);
$corresponsal3   = sanitize_numeric($_POST['corresponsal3']);
$total_sistema    = sanitize_numeric($_POST['total_sistema']);
$total            = sanitize_numeric($_POST['total']);
$recaudo          = sanitize_numeric($_POST['recaudo']);
$consignar        = sanitize_numeric($_POST['consignar']);
$transacciones    = sanitize_numeric($_POST['transacciones']);
$total_transacciones = sanitize_numeric($_POST['total_transacciones']);
$fecha            = $_POST['fecha'];  // La fecha mostrada en el formulario

// Insertar los datos en la tabla transacciones
$sql = "INSERT INTO transacciones 
(`nombre_cajero`, `total_efectivo`, `niqui`, `daviplata`, `yamel`, `punto_red`, `plataforma`, `corresponsal2`, `corresponsal3`, `total_sistema`, `total`, `recaudo`, `consignar`, `transacciones`, `total_transacciones`, `fecha`)
VALUES 
('$nombre_cajero',
 $total_efectivo,
 $niqui,
 $daviplata,
 $yamel,
 $punto_red,
 $plataforma,
 $corresponsal2,
 $corresponsal3,
 $total_sistema,
 $total,
 $recaudo,
 $consignar,
 $transacciones,
 $total_transacciones,
 '$fecha')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso. <a href='../corresponsal-index.html'>Volver</a>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
