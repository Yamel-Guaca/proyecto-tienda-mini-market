<?php
// Archivo: php/conexion.php

// Datos de conexión (verifica que sean los correctos para tu entorno)
$host = "localhost";
$user = "root";
$password = "Yame1@";
$dbname = "datos-corresponsal";


// Crear la conexión
$conn = new mysqli($host, $user, $password, $dbname);
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Recibir datos del formulario
$nombre_cajero = $_POST['nombre_cajero'];

// Función para quitar puntos y comas y convertir el valor a entero
function sanitize_numeric($value) {
    return intval(str_replace(array('.',','), '', $value));
}

$total_efectivo      = sanitize_numeric($_POST['total_efectivo']);
$niqui               = sanitize_numeric($_POST['niqui']);
$daviplata           = sanitize_numeric($_POST['daviplata']);
$yamel               = sanitize_numeric($_POST['yamel']);
$punto_red           = sanitize_numeric($_POST['punto_red']);
$plataforma          = sanitize_numeric($_POST['plataforma']);
$corresponsal2      = sanitize_numeric($_POST['corresponsal2']);
$corresponsal3      = sanitize_numeric($_POST['corresponsal3']);
$total_sistema       = sanitize_numeric($_POST['total_sistema']);
$total               = sanitize_numeric($_POST['total']);
$recaudo             = sanitize_numeric($_POST['recaudo']);
$consignar           = sanitize_numeric($_POST['consignar']);
$transacciones       = sanitize_numeric($_POST['transacciones']);
$total_transacciones = sanitize_numeric($_POST['total_transacciones']);

// Usar la fecha del servidor para garantizar el formato correcto
$fecha = date("Y-m-d H:i:s");

// Preparar la consulta usando *prepared statement*
$sql = "INSERT INTO transacciones 
(`nombre_cajero`, `total_efectivo`, `niqui`, `daviplata`, `yamel`, `punto_red`, `plataforma`, 
 `corresponsal2`, `corresponsal3`, `total_sistema`, `total`, `recaudo`, `consignar`, 
 `transacciones`, `total_transacciones`, `fecha`)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
if (!$stmt) {
    die("Error en la preparación de la consulta: " . $conn->error);
}

// La cadena de tipos: "s" para string y "i" para enteros (asegúrate de que los tipos coincidan con tu BD)
$stmt->bind_param(
    "siiiiiiiiiiiiiis",
    $nombre_cajero,
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
    $fecha
);

if ($stmt->execute()) {
    echo "Registro exitoso. <a href='../corresponsal-index.html'>Volver</a>";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
