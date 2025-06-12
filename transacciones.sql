-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-06-2025 a las 08:45:10
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `datos-corresponsal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transacciones`
--

CREATE TABLE `transacciones` (
  `id` int(11) NOT NULL,
  `nombre_cajero` varchar(100) NOT NULL,
  `total_efectivo` int(11) NOT NULL,
  `niqui` int(11) NOT NULL,
  `daviplata` int(11) NOT NULL,
  `yamel` int(11) NOT NULL,
  `punto_red` int(11) NOT NULL,
  `plataforma` int(11) NOT NULL,
  `corresponsal2` int(11) NOT NULL,
  `corresponsal3` int(11) NOT NULL,
  `total_sistema` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `recaudo` int(11) NOT NULL,
  `consignar` int(11) NOT NULL,
  `transacciones` int(11) NOT NULL,
  `total_transacciones` int(11) NOT NULL,
  `fecha` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `transacciones`
--

INSERT INTO `transacciones` (`id`, `nombre_cajero`, `total_efectivo`, `niqui`, `daviplata`, `yamel`, `punto_red`, `plataforma`, `corresponsal2`, `corresponsal3`, `total_sistema`, `total`, `recaudo`, `consignar`, `transacciones`, `total_transacciones`, `fecha`) VALUES
(1, 'Yamel', 10000000, 0, 0, 0, 0, 0, 0, 0, 200000, 10200000, 10000000, -200000, 0, 3, '9/5/2025, 12:04:20 p. m.'),
(2, 'Yamel', 10000000, 0, 0, 0, 0, 0, 0, 0, 200000, 10200000, 10000000, -200000, 0, 8, '9/5/2025, 12:05:10 p. m.'),
(3, 'Yamel', 10000000, 0, 0, 0, 0, 60000, 0, 0, 200000, 10260000, 10000000, -260000, 0, 17, '9/5/2025, 12:06:02 p. m.'),
(4, 'Yamel', 10000000, 200000, 0, 0, 0, 60000, 0, 0, 200000, 10460000, 10000000, -460000, 0, 17, '9/5/2025, 12:10:55 p. m.'),
(5, 'Yamel', 10000000, 200000, 0, 0, 0, 60000, 0, 0, 200000, 10460000, 10000000, -460000, 0, 26, '9/5/2025, 12:56:28 p. m.'),
(6, 'Yamel Guaca', 10000000, 200000000, 0, 0, 0, 0, 0, 0, 0, 210000000, 10000000, -200000000, 0, 10, '10/5/2025, 5:40:21 p. m.'),
(7, 'Yamel Guaca', 10000000, 0, 0, 0, 0, 0, 200000, 0, 0, 10200000, 10000000, -200000, 0, 20, '10/5/2025, 5:52:16 p. m.'),
(8, 'Yamel Guaca', 10000000, 0, 20000, 0, 0, 0, 0, 0, 0, 10020000, 10000000, -20000, 0, 29, '11/5/2025, 10:17:47 a. m.'),
(9, 'Yamel Guaca', 10000000, 0, 0, 20000, 0, 0, 0, 0, 0, 10020000, 10000000, -20000, 0, 33, '2025-05-12 20:34:41'),
(10, 'Adriana', 10000000, 200000, 0, 0, 0, 60000, 0, 0, 200000, 10460000, 10000000, -460000, 0, 3, '2025-06-10 19:30:23');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
