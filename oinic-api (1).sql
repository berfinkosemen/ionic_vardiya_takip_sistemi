-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 20 Oca 2021, 22:02:21
-- Sunucu sürümü: 10.4.6-MariaDB
-- PHP Sürümü: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `oinic-api`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `fullname` varchar(250) NOT NULL,
  `gender` varchar(2) NOT NULL,
  `datebirth` date NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`user_id`, `fullname`, `gender`, `datebirth`, `email`, `password`, `createdat`) VALUES
(12, 'Berfin Kosemen', 'ka', '1991-01-19', 'berfin12@', '46d045ff5190f6ea93739da6c0aa19bc', '2021-01-19 16:38:56'),
(13, 'Beril Can', 'ka', '2020-01-19', 'beril@', '81dc9bdb52d04dc20036dbd8313ed055', '2021-01-19 16:43:54'),
(14, 'Ahmet Oz', 'er', '2014-01-19', 'ahmet@', '674f3c2c1a8a6f90461e8a66fb5550ba', '2021-01-19 16:46:27'),
(16, 'Fatma Demir', 'ka', '1997-04-25', 'fatma12@', '674f3c2c1a8a6f90461e8a66fb5550ba', '2021-01-20 12:36:20'),
(17, 'Deniz', 'er', '1985-09-28', 'deniz@', '6562c5c1f33db6e05a082a88cddab5ea', '2021-01-20 19:18:24'),
(18, 'Zeynep Asli', 'ka', '1991-12-30', 'zeynep@', 'def7924e3199be5e18060bb3e1d547a7', '2021-01-20 19:26:55'),
(19, 'Berrak Gul', 'ka', '1994-12-27', 'berrak@', 'def7924e3199be5e18060bb3e1d547a7', '2021-01-20 20:54:59');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `user_shift`
--

CREATE TABLE `user_shift` (
  `u_id` int(11) NOT NULL,
  `u_name` varchar(250) NOT NULL,
  `u_durum` varchar(70) NOT NULL,
  `u_date` date NOT NULL,
  `u_time` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `user_shift`
--

INSERT INTO `user_shift` (`u_id`, `u_name`, `u_durum`, `u_date`, `u_time`) VALUES
(9, 'Fatma Demir', 'vardiyadayim', '2021-01-20', '8.00-17.00'),
(11, 'Deniz', 'vardiyamBitti', '2021-01-20', '24.00-8.00'),
(13, 'Beril Can', 'vardiyadayim', '2021-01-20', '8.00-17.00'),
(14, 'Zeynep Asli', 'vardiyamBitti', '2021-01-20', '17.00-24.00'),
(15, 'Berrak Gul', 'vardiyamBitti', '2021-01-20', '24.00-8.00'),
(16, 'Ahmet Oz', 'vardiyadayim', '2021-01-20', '17.00-24.00'),
(17, 'Berfin Kosemen', 'vardiyadayim', '2021-01-20', '17.00-24.00');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `user_tasks`
--

CREATE TABLE `user_tasks` (
  `g_id` int(11) NOT NULL,
  `g1` varchar(250) NOT NULL,
  `g2` varchar(250) NOT NULL,
  `g3` varchar(250) NOT NULL,
  `g4` varchar(250) NOT NULL,
  `g5` varchar(250) NOT NULL,
  `g6` varchar(250) NOT NULL,
  `g7` varchar(250) NOT NULL,
  `g8` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `user_tasks`
--

INSERT INTO `user_tasks` (`g_id`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`) VALUES
(32, 'gorev1', 'gorev2', 'gorev3', 'gorev4', '', '', '', '');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `user_task_control`
--

CREATE TABLE `user_task_control` (
  `tc_id` int(11) NOT NULL,
  `val` varchar(250) NOT NULL,
  `isChecked` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `user_task_control`
--

INSERT INTO `user_task_control` (`tc_id`, `val`, `isChecked`) VALUES
(103, 'gorev1', ''),
(104, 'gorev2', ''),
(105, 'gorev3', ''),
(106, 'gorev4', '');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Tablo için indeksler `user_shift`
--
ALTER TABLE `user_shift`
  ADD PRIMARY KEY (`u_id`);

--
-- Tablo için indeksler `user_tasks`
--
ALTER TABLE `user_tasks`
  ADD PRIMARY KEY (`g_id`);

--
-- Tablo için indeksler `user_task_control`
--
ALTER TABLE `user_task_control`
  ADD PRIMARY KEY (`tc_id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Tablo için AUTO_INCREMENT değeri `user_shift`
--
ALTER TABLE `user_shift`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Tablo için AUTO_INCREMENT değeri `user_tasks`
--
ALTER TABLE `user_tasks`
  MODIFY `g_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Tablo için AUTO_INCREMENT değeri `user_task_control`
--
ALTER TABLE `user_task_control`
  MODIFY `tc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
