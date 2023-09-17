-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2023 at 05:35 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `created_at`) VALUES
(1, 'Sank', 'sanket@123', 'Sanket@789', '2023-04-16 19:15:54'),
(1, 'Sank', 'Sanket@gmail.com', 'Sanket@789', '2023-04-16 19:17:45'),
(2, 'Dev', 'Devendra@gmail.com', 'Dev@12345678', '2023-04-16 19:21:19');

-- --------------------------------------------------------

--
-- Table structure for table `availability`
--

CREATE TABLE `availability` (
  `room_name` varchar(20) NOT NULL,
  `count` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `availability`
--

INSERT INTO `availability` (`room_name`, `count`) VALUES
('single-economy', 2),
('single basic', 5),
('single-standard', 5),
('single-deluxe', 5),
('double-economy', 5),
('double basic', 5),
('double-standard', 5),
('double-deluxe', 2),
('family-economy', 5),
('family-basic', 5),
('family standard', 5),
('family deluxe', 5),
('presidential-room', 4);

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `name` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `form`
--

INSERT INTO `form` (`name`, `email`) VALUES
('sanket', 'sanket@123'),
('', ''),
('', ''),
('sanket ', 'sanket@hello.com'),
('hello', 'hello@gmail.com'),
('sanket ', 'sanket@gmail.com'),
('fdxgh', 'dfgh@dfghj'),
('', 'sanket@gmail.com'),
('fljsf', ''),
('harsh', 'harsh@gmail.com'),
('sanket naitam', 'sanketnaitam@gmail.com'),
('sanket', 'naitam@gmail.com'),
('sanket', 'svhb@g.com');

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `num_of_people` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `occasion` varchar(255) NOT NULL,
  `seating_preference` varchar(255) NOT NULL,
  `additional_comments` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `name`, `email`, `phone_number`, `num_of_people`, `date`, `time`, `occasion`, `seating_preference`, `additional_comments`, `created_at`) VALUES
(1, 'sanket naitam', 'sanketnaitam@gmail.com', '8788970531', 5, '2023-04-16', '21:19:00', 'xyz', 'xyz', 'hello', '2023-04-16 13:51:08'),
(2, 'sanket naitam', 'sanketnaitam@gmail.com', '8788970531', 5, '2023-04-17', '20:25:00', 'xkrdvtfgyb', 'tfvtgbynhu', 'ygbyu', '2023-04-16 13:55:36'),
(4, 'Sanket Naitam', 'sanketnaitam2206@gmail.com', '8788970531', 2, '2023-05-12', '01:25:00', 'hello', 'first ', '', '2023-05-10 18:56:08');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`name`, `slug`, `price`, `size`) VALUES
('single standard', 'single-standard', 250, '300'),
('family standard', 'family-standard', 400, '600'),
('double basic', 'double-basic', 250, '350'),
('double basic', 'double-basic', 250, '350'),
('double basic', 'double-basic', 250, '350'),
('sanketnaitam@gmail.com', 'single-standard', 250, '300'),
('sanketnaitam@gmail.com', 'family-deluxe', 500, '700'),
('sanketnaitam@gmail.com', 'family-deluxe', 500, '700'),
('sanketnaitam@gmail.com', 'presidential-room', 600, '1000'),
('kishore@gmail.com', 'family-standard', 400, '600'),
('kishore@gmail.com', 'family-standard', 400, '600'),
('kishore@gmail.com', 'double-deluxe', 400, '500'),
('kishore@gmail.com', 'single-basic', 150, '250'),
('kishore@gmail.com', 'double-deluxe', 400, '500'),
('', 'single-economy', 100, '200'),
('', 'single-economy', 100, '200'),
('sanketnaitam@gmail.com', 'double-deluxe', 400, '500'),
('sanketnaitam@gmail.com', 'single-economy', 100, '200');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `created_at`) VALUES
(1, 'sanket', 'sanketnaitam@gmail.com', 'Sanket@123', '2023-04-15 18:46:48'),
(2, 'sanket', 'sanketnaitam@gmail.com', '123456789', '2023-04-15 21:06:59'),
(3, 'sanket', 'sklfalfjl@flkas.com', '147852369', '2023-04-15 21:08:06'),
(4, 'hello', 'nsjflkasjl@fljl.com', '741852963', '2023-04-16 08:26:05'),
(5, 'saish', 'saish@gmail.com', '12345678', '2023-04-16 13:10:39'),
(6, 'devendra', 'devendra@gmail.com', 'dev12345678', '2023-04-16 19:10:18'),
(7, 'Saish ', 'saish@gmail.com', 'Satish@123', '2023-05-10 21:04:03'),
(8, 'kishore ', 'kishore@gmail.com', 'Kishore@123', '2023-05-11 04:14:56');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
