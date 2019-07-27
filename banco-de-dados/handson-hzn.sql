-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 27-Jul-2019 às 19:29
-- Versão do servidor: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `handson-hzn`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `bateria`
--

CREATE TABLE `bateria` (
  `id` int(11) NOT NULL,
  `surfista_id1` int(3) NOT NULL,
  `surfista_id2` int(3) NOT NULL,
  `vencedor_srf1` tinyint(1) NOT NULL,
  `vencedor_srf2` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `nota`
--

CREATE TABLE `nota` (
  `id` int(3) NOT NULL,
  `nota1` float NOT NULL,
  `nota2` float NOT NULL,
  `nota3` float NOT NULL,
  `ondaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `onda`
--

CREATE TABLE `onda` (
  `id` int(3) NOT NULL,
  `BateriaId` int(3) NOT NULL,
  `tipo_onda` varchar(30) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `surfista`
--

CREATE TABLE `surfista` (
  `id` int(11) NOT NULL,
  `nome` varchar(30) COLLATE utf8_bin NOT NULL,
  `pais` varchar(30) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `surfista`
--

INSERT INTO `surfista` (`id`, `nome`, `pais`) VALUES
(1, 'coisinho', 'brasil');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bateria`
--
ALTER TABLE `bateria`
  ADD PRIMARY KEY (`id`),
  ADD KEY `surfista_id1` (`surfista_id1`),
  ADD KEY `surfista_id2` (`surfista_id2`);

--
-- Indexes for table `nota`
--
ALTER TABLE `nota`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ondaId` (`ondaId`);

--
-- Indexes for table `onda`
--
ALTER TABLE `onda`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BateriaId` (`BateriaId`);

--
-- Indexes for table `surfista`
--
ALTER TABLE `surfista`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bateria`
--
ALTER TABLE `bateria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nota`
--
ALTER TABLE `nota`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `onda`
--
ALTER TABLE `onda`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `surfista`
--
ALTER TABLE `surfista`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `bateria`
--
ALTER TABLE `bateria`
  ADD CONSTRAINT `bateria_ibfk_1` FOREIGN KEY (`surfista_id1`) REFERENCES `surfista` (`id`),
  ADD CONSTRAINT `bateria_ibfk_2` FOREIGN KEY (`surfista_id2`) REFERENCES `surfista` (`id`);

--
-- Limitadores para a tabela `nota`
--
ALTER TABLE `nota`
  ADD CONSTRAINT `nota_ibfk_1` FOREIGN KEY (`ondaId`) REFERENCES `onda` (`id`);

--
-- Limitadores para a tabela `onda`
--
ALTER TABLE `onda`
  ADD CONSTRAINT `onda_ibfk_1` FOREIGN KEY (`BateriaId`) REFERENCES `bateria` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
