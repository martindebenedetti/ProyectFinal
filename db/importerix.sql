-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 20-08-2023 a las 23:19:39
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `importerix`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_productos` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `stock` int(100) NOT NULL,
  `precio` float NOT NULL,
  `categoria` varchar(250) NOT NULL,
  `img_id` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_productos`, `nombre`, `descripcion`, `stock`, `precio`, `categoria`, `img_id`) VALUES
(1, 'Notebook Asus Tuf Gaming f15 fx506lhb-hn324w 15,6\" Gtx 1650 Core i5 16', 'La notebook ASUS TUF Gaming de 15,6\" cuenta con un procesador Core i5 de Intel que ofrece un potente rendimiento de procesamiento.', 20, 989999, 'Informatica', 'ttr0oww6dpvrmchtjfsf'),
(3, 'Notebook Dell 14 Vostro 3405 Negra r5 3450u 8gb ssd256gb win10home', 'Pantalla: 14.0-inch HD (1366*768) Procesador: AMD Ryzen 5 3450U Mobile Radeon Vega 8 Graphics Batería: 42WHr, 3-Cell Battery (Integrated) Memeria: 8GB, 1x8GB, DDR4, 3200MHz_2400MHz Ach (slot libre)Graficos: AMD Radeon Vega 8 Graphics', 20, 852799, 'Informatica', 'gmq76pcew3qqcnyldzt1'),
(4, 'Apple Macbook Air 13\" m1 Chip 8-Core Cpu 7-Core Gpu 256gb Silver', 'Pantalla de 13.3 pulgadas (diagonal) retroiluminada por LED con tecnología IPS; resolución nativa de 2560 x 1600 a 227 pixeles por pulgada compatible con millones de colores.Chip M1 de Apple', 2, 1200000, 'Informatica', 'rzsj4qy8hra9ugj44ttg'),
(5, 'Soporte De Escritorio Doble Brazo Monitor + Porta Notebook', 'Características:\r\nMaterial: Aluminio\r\nPosee sujetacables.\r\nAltura regulable.\r\nInclinación regulable.\r\nMonitor de hasta 32\" VESA: 75*75 - 100*100\r\nNotebooks entre 12\" y 17\": Mínimo extensible 287mm. Máximo extensible 438 mm.', 20, 58999, 'Accesorios', 'wtbmbiryf2ydb7nno8ac'),
(8, 'Combo Periféricos Gamer Constrictor Grootslang Cmc-1001l', 'Especificaciones -Auricular- Nombre: Crassus Tipo De Modelo: On Ear Parlante: 40 Mm Frecuencia De Respuesta: 20Hz ~ 20Khz Impedancia: 32 ± 15% Sensibilidad: 108Db ± 3Db Luz:', 1, 16000, 'Audio y video', 'jdfkgmlz41ee5ztqsj6i'),
(9, 'Auriculares House Of Marley Smile Jamaica Fire', 'Descripción:Auriculares House Of Marley Smile Jamaica In EarEstos auriculares ofrecen gran comodidad y calidad. Fabricado con plástico reciclado y un grosor de 9 mm, tiene aislamiento de ruido que brinda una sofisticada experiencia sonora', 28, 9500, 'Audio y video', 'o829olrrdklzgkoe4kp2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'martin', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'pablo', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_productos`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_productos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
