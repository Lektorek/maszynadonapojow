-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Czas generowania: 10 Maj 2018, 18:57
-- Wersja serwera: 10.1.26-MariaDB-0+deb9u1
-- Wersja PHP: 7.0.27-0+deb9u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `maszyna`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kompozycjenapojow`
--
CREATE DATABASE IF NOT EXISTS maszyna;
USE maszyna;
CREATE TABLE `kompozycjenapojow` (
  `id` int(11) NOT NULL,
  `User` text NOT NULL,
  `IDusera` int(11) NOT NULL,
  `NazwaKompozycji` text NOT NULL,
  `Napoj1` text NOT NULL,
  `Napoj1Ilosc` text NOT NULL,
  `Napoj2` text NOT NULL,
  `Napoj2Ilosc` text NOT NULL,
  `Napoj3` text NOT NULL,
  `Napoj3Ilosc` text NOT NULL,
  `Napoj4` text NOT NULL,
  `Napoj4Ilosc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `kompozycjenapojow`
--

INSERT INTO `kompozycjenapojow` (`id`, `User`, `IDusera`, `NazwaKompozycji`, `Napoj1`, `Napoj1Ilosc`, `Napoj2`, `Napoj2Ilosc`, `Napoj3`, `Napoj3Ilosc`, `Napoj4`, `Napoj4Ilosc`) VALUES
(1, 'admin', 1, 'dfgd', 'Cola', '2', 'Sprite', '0', 'Pomarancza', '3', 'JackDaniels', '0'),
(2, 'admin', 1, 'dupa', 'Cola', '2', 'Sprite', '2', 'Pomarancza', '0', 'JackDaniels', '0'),
(3, 'user', 2, 'hahah', 'Cola', '0', 'Sprite', '2', 'Pomarancza', '3', 'JackDaniels', '0');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `listanapojow`
--

CREATE TABLE `listanapojow` (
  `id` int(11) NOT NULL,
  `Napoj` text NOT NULL,
  `Ilosc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `listanapojow`
--

INSERT INTO `listanapojow` (`id`, `Napoj`, `Ilosc`) VALUES
(1, 'Cola', '10'),
(2, 'Pepsi', '8'),
(3, 'Pomarancza', '7'),
(4, 'JackDaniels', '10');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownicy`
--

CREATE TABLE `uzytkownicy` (
  `id` int(11) NOT NULL,
  `user` text NOT NULL,
  `pass` text NOT NULL,
  `admin` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`id`, `user`, `pass`, `admin`) VALUES
(1, 'admin', '5B5416BE5B43A878C00791AE0492B5CC2BA50EF1D6B1B2D909E65E059ECCB630', '1'),
(2, 'user', '04F8996DA763B7A969B1028EE3007569EAF3A635486DDAB211D512C85B9DF8FB', '0');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zamowienia`
--

CREATE TABLE `zamowienia` (
  `id` int(11) NOT NULL,
  `Napoj1` text NOT NULL,
  `Napoj1Ilosc` text NOT NULL,
  `Napoj2` text NOT NULL,
  `Napoj2Ilosc` text NOT NULL,
  `Napoj3` text NOT NULL,
  `Napoj3Ilosc` text NOT NULL,
  `Napoj4` text NOT NULL,
  `Napoj4Ilosc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `zamowienia`
--

INSERT INTO `zamowienia` (`id`, `Napoj1`, `Napoj1Ilosc`, `Napoj2`, `Napoj2Ilosc`, `Napoj3`, `Napoj3Ilosc`, `Napoj4`, `Napoj4Ilosc`) VALUES
(1, 'Cola', '2', 'Sprite', '0', 'Pomarancza', '3', 'JackDaniels', '0'),
(2, 'Cola', '0', 'Sprite', '0', 'Pomarancza', '0', 'JackDaniels', '6'),
(3, 'Cola', '0', 'Sprite', '0', 'Pomarancza', '0', 'JackDaniels', '3'),
(4, 'Cola', '0', 'Sprite', '0', 'Pomarancza', '0', 'JackDaniels', '1'),
(5, 'Cola', '0', 'Sprite', '2', 'Pomarancza', '3', 'JackDaniels', '0');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `kompozycjenapojow`
--
ALTER TABLE `kompozycjenapojow`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDusera` (`IDusera`);

--
-- Indeksy dla tabeli `listanapojow`
--
ALTER TABLE `listanapojow`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `zamowienia`
--
ALTER TABLE `zamowienia`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `kompozycjenapojow`
--
ALTER TABLE `kompozycjenapojow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `listanapojow`
--
ALTER TABLE `listanapojow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `zamowienia`
--
ALTER TABLE `zamowienia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `kompozycjenapojow`
--
ALTER TABLE `kompozycjenapojow`
  ADD CONSTRAINT `kompozycjenapojow_ibfk_1` FOREIGN KEY (`IDusera`) REFERENCES `uzytkownicy` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
