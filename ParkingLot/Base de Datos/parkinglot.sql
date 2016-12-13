-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-12-2016 a las 17:26:54
-- Versión del servidor: 10.1.19-MariaDB
-- Versión de PHP: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `parkinglot`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `codigo`
--

CREATE TABLE `codigo` (
  `id` int(11) NOT NULL,
  `codigoa` text NOT NULL,
  `codigob` text NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `codigoc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `codigo`
--

INSERT INTO `codigo` (`id`, `codigoa`, `codigob`, `usuario_id`, `codigoc`) VALUES
(2, 'D36555A299', 'D36555A299', 1, ''),
(3, '86550D3ECF', 'none', 1, ''),
(4, '0DFB5ACF0B', 'none', 1, ''),
(5, '313E2BCD13', '313E2BCD13', 1, ''),
(6, '9EDD9362C7', '9EDD9362C7', 1, ''),
(7, '8F5D755C85', '8F5D755C85', 1, ''),
(8, '22A32B3643', '22A32B3643', 1, '22A32B3643'),
(9, 'B3D81A12DC', 'B3D81A12DC', 1, 'B3D81A12DC'),
(10, '71AF0BCEAF', '71AF0BCEAF', 1, '71AF0BCEAF'),
(11, '757CD93BC6', 'none', 1, ''),
(12, 'A6619E2041', 'A6619E2041', 1, 'A6619E2041'),
(13, 'C06A88E95B', 'C06A88E95B', 1, 'C06A88E95B'),
(14, '2DA637EE80', '2DA637EE80', 1, '2DA637EE80'),
(15, 'F1277C5B47', 'F1277C5B47', 1, 'F1277C5B47'),
(16, '159A16122D', '159A16122D', 1, '159A16122D'),
(17, '5248E5AFF4', '5248E5AFF4', 1, '5248E5AFF4'),
(18, '94A7F91EFF', '94A7F91EFF', 1, '94A7F91EFF'),
(19, '5F3F873941', '5F3F873941', 1, '5F3F873941'),
(20, '72E1E3B161', '72E1E3B161', 1, '72E1E3B161'),
(21, 'DADAF19C3A', 'DADAF19C3A', 1, 'DADAF19C3A'),
(22, 'A8411670B5', 'A8411670B5', 1, 'A8411670B5'),
(23, 'A34D1A7DDB', 'A34D1A7DDB', 1, 'A34D1A7DDB'),
(24, '02D6E6A27D', '02D6E6A27D', 1, '02D6E6A27D'),
(25, 'CF6381C51E', 'CF6381C51E', 1, 'CF6381C51E'),
(26, 'F9D791C2C1', 'F9D791C2C1', 1, 'F9D791C2C1'),
(27, '44F38096C7', '44F38096C7', -1, '44F38096C7'),
(28, 'DD0FE485EE', 'DD0FE485EE', 11, 'DD0FE485EE'),
(29, '3AEA660122', 'none', 11, ''),
(30, '8123692101', '8123692101', 1, '8123692101');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estacionamientos`
--

CREATE TABLE `estacionamientos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `ubicacion` text NOT NULL,
  `costoHora` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estacionamientos`
--

INSERT INTO `estacionamientos` (`id`, `nombre`, `ubicacion`, `costoHora`) VALUES
(1, 'Centinela Estacionamiento Test 1', 'SAN ISIDRO RESIDENCIAL', 30),
(2, 'test2', 'Instituto tecnologico Superior de Zapopan', 45);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fallos`
--

CREATE TABLE `fallos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(44) NOT NULL,
  `ubicacion` text NOT NULL,
  `costo` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `fallos`
--

INSERT INTO `fallos` (`id`, `nombre`, `ubicacion`, `costo`) VALUES
(1, 'Centinela Estacionamiento Test 1', 'SAN ISIDRO RESIDENCIAL', 33),
(2, 'juan', 'dever', 44),
(3, 'jose', 'qwe', 55),
(4, 'juan', '123', 77);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `id` int(11) NOT NULL,
  `estacionamiento` text NOT NULL,
  `pago` float NOT NULL,
  `tiempo` float NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `inicio` datetime NOT NULL,
  `fin` datetime NOT NULL,
  `codigo` text NOT NULL,
  `estacionamientos_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `historial`
--

INSERT INTO `historial` (`id`, `estacionamiento`, `pago`, `tiempo`, `usuario_id`, `inicio`, `fin`, `codigo`, `estacionamientos_id`) VALUES
(1, 'Parking Lot 1 test', 90, 3, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', 0),
(3, 'Its Zapopan', 60, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', 0),
(4, 'none', 33, 33, 1, '2016-12-07 00:00:00', '2016-12-14 00:00:00', '', 0),
(6, 'asd', 2, 2, 1, '2016-12-07 00:00:00', '2016-12-07 00:00:00', '22222', 0),
(7, 'Parking Lot 1 test', -1, -1, 1, '2016-12-08 10:11:44', '2000-01-01 00:00:00', '333', 0),
(8, 'Parking Lot 1 test', -1, -1, 1, '2016-12-08 10:28:42', '2000-01-01 00:00:00', '0DFB5ACF0B', 0),
(9, 'Parking Lot 1 test', -1, -1, 1, '2016-12-08 10:54:00', '2000-01-01 00:00:00', '313E2BCD13', 0),
(10, 'Parking Lot 1 test', -1, -1, 1, '2016-12-08 12:10:52', '2000-01-01 00:00:00', '9EDD9362C7', 0),
(11, 'Parking Lot 1 test', -1, -1, 1, '2016-12-08 12:13:57', '2000-01-01 00:00:00', '8F5D755C85', 0),
(12, 'Parking Lot 1 test', -1, -1, 1, '2016-12-08 12:18:08', '2000-01-01 00:00:00', '22A32B3643', 0),
(13, 'Parking Lot 1 test', 14, 24, 1, '2016-12-08 12:23:33', '2016-12-08 12:48:16', 'B3D81A12DC', 0),
(14, 'Parking Lot 1 test', 55, 55, 1, '2016-12-08 12:50:08', '2016-12-08 12:51:19', '71AF0BCEAF', 0),
(15, 'Parking Lot 1 test', 4, 46, 1, '2016-12-08 13:13:20', '2016-12-08 14:00:00', '757CD93BC6', 1),
(16, 'Parking Lot 1 test', 4.5, 9, 1, '2016-12-08 14:57:41', '2016-12-08 15:06:52', 'A6619E2041', 0),
(17, 'Parking Lot 1 test', -1, 7, 1, '2016-12-08 15:09:48', '2016-12-08 15:17:30', 'C06A88E95B', 0),
(18, 'Parking Lot 1 test', -1, 2, 1, '2016-12-08 15:19:20', '2016-12-08 15:21:43', '2DA637EE80', 0),
(19, 'Parking Lot 1 test', 4.5, 9, 1, '2016-12-08 15:28:54', '2016-12-08 15:38:48', 'F1277C5B47', 0),
(20, 'Parking Lot 1 test', 1, 2, 1, '2016-12-08 15:59:15', '2016-12-08 16:01:36', '159A16122D', 0),
(21, 'Parking Lot 1 test', -4454400, -8908810, 1, '2016-12-08 16:08:42', '2016-12-08 16:12:44', '5248E5AFF4', 0),
(22, 'Parking Lot 1 test', 2, 4, 1, '2016-12-08 16:15:37', '2016-12-08 16:19:46', '94A7F91EFF', 0),
(23, 'Parking Lot 1 test', 0.5, 1, 1, '2016-12-08 16:25:19', '2016-12-08 16:26:52', '5F3F873941', 0),
(24, 'Parking Lot 1 test', 0.5, 1, 1, '2016-12-08 16:35:54', '2016-12-08 16:38:42', '72E1E3B161', 0),
(25, 'Parking Lot 1 test', 0.5, 1, 1, '2016-12-08 16:40:41', '2016-12-08 16:41:54', 'DADAF19C3A', 0),
(26, 'Parking Lot 1 test', 0.5, 1, 1, '2016-12-08 16:44:09', '2016-12-08 16:45:48', 'A8411670B5', 0),
(27, 'Parking Lot 1 test', 7, 14, 1, '2016-12-08 16:51:15', '2016-12-08 17:05:39', 'A34D1A7DDB', 0),
(28, 'Parking Lot 1 test', 1.5, 3, 1, '2016-12-08 20:46:45', '2016-12-08 20:50:30', '02D6E6A27D', 0),
(29, 'Parking Lot 1 test', 0, 0, 1, '2016-12-08 20:58:40', '2016-12-08 20:59:29', 'CF6381C51E', 0),
(30, 'Parking Lot 1 test', 0, 0, 1, '2016-12-08 21:27:33', '2016-12-08 21:28:32', 'F9D791C2C1', 0),
(31, 'Parking Lot 1 test', 0, 0, -1, '2016-12-08 21:32:34', '2016-12-08 21:33:14', '44F38096C7', 0),
(32, 'Parking Lot 1 test', 0.5, 1, 11, '2016-12-09 11:05:17', '2016-12-09 11:07:07', 'DD0FE485EE', 0),
(33, 'Parking Lot 1 test', -1, -1, 11, '2016-12-09 11:28:36', '2000-01-01 00:00:00', '3AEA660122', 0),
(34, 'Parking Lot 1 test', -4455050, -8910100, 1, '2016-12-09 13:45:40', '2016-12-09 13:47:06', '8123692101', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombres` text NOT NULL,
  `ap` text NOT NULL,
  `am` text NOT NULL,
  `correo` text NOT NULL,
  `contrasena` text NOT NULL,
  `celular` text NOT NULL,
  `pago` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombres`, `ap`, `am`, `correo`, `contrasena`, `celular`, `pago`) VALUES
(1, 'Jose Luis', 'Velazquez', 'Olguin', 'jlvo1994@gmail.com', 'mypass', '33 10 64 75 06', 'Tarjeta'),
(2, 'nombre', 'ap', 'am', 'correo@dominio.com', '123', 'cel', ''),
(3, 'juan', 'juan', 'juan', 'test3@gmail.com', 'test', '123123', ''),
(4, ' ', ' ', ' ', ' ', ' ', ' ', ''),
(5, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', ''),
(6, 'wwww', 'wwww', 'wwww', 'wwww', 'wwww', 'wwww', ''),
(7, '', '', '', '', '', '', ''),
(8, 'martha', 've', 'ol', 'martha', 'passmartha', '343434', ''),
(9, ' nava', 'nava', 'nava', 'navajas', '123', 'nava', 'Tarjeta'),
(10, '', 'as', '', 'as', 'as', '', 'Tarjeta'),
(11, 'michelle', 'moreno', 'galaxia', 'morenoverde@gmail.com', 'pass', '234', 'Tarjeta'),
(12, ' ', ' ', ' ', ' ', ' ', ' ', 'Tarjeta'),
(13, ' ', ' ', ' ', ' ', ' ', ' ', 'Tarjeta'),
(14, 'asd', 'asd', 'asda', 'sss', 'sss', 'sd', 'Tarjeta'),
(15, 'gg', 'ggg', 'ggg', 'michlaverde', 'trapos', 'ggg', 'Tarjeta'),
(16, 'michelle', 'moreno', 'galaxia', 'michellediaverde@vivaladroga.com', 'trapitos', '123123', 'Tarjeta');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `codigo`
--
ALTER TABLE `codigo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estacionamientos`
--
ALTER TABLE `estacionamientos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `fallos`
--
ALTER TABLE `fallos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `codigo`
--
ALTER TABLE `codigo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT de la tabla `estacionamientos`
--
ALTER TABLE `estacionamientos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `fallos`
--
ALTER TABLE `fallos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `historial`
--
ALTER TABLE `historial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
