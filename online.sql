-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: פברואר 05, 2020 בזמן 03:06 PM
-- גרסת שרת: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online`
--

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `api`
--

CREATE TABLE `api` (
  `id` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  `Method_path` varchar(500) NOT NULL,
  `Request` varchar(500) NOT NULL,
  `Response` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- הוצאת מידע עבור טבלה `api`
--

INSERT INTO `api` (`id`, `description`, `Method_path`, `Request`, `Response`) VALUES
(4, 'Register', 'POST\n /users', '{ id: this.id,\n      email: this.email,\n      password: this.password,\n      city: this.city,\n      street: this.street,\n      name: this.name,\n      last_name: this.last_name\n}', '{ respons.success : true,\n        respons.errore: false,\n        respons.message :\'welcome new user!!!\',\n        respons.data : {\n          token: token,\n          user: new_user\n        }\n}'),
(5, 'Login', 'GET\n /users', '{  username ,\n  password\n}', '{  respons.success = true;\n      respons.errore = false;\n      respons.message = \'you logedin!!!\';\n      respons.data = {\n        token: token,\n        id_user: result }\n}'),
(6, 'Get category', 'GET\n /category/:jwt', '{ token}', '{  respons.success = true,\n        respons.errore = false,\n        respons.message = \'category-list\';\n        respons.data = result;\n        res.json(respons);}'),
(8, 'get all products listing by free search ', 'GET\n /get_all_product/:token', '{ token}', '{  respons.success: true,\n        respons.errore : false,\n        respons.message : \'products-list\';\n        respons.data : result;\n        }'),
(9, 'get products listing', 'GET\n /get_product/:id_category', '{ id_category,token}', '{  respons.success: true,\n        respons.errore : false,\n        respons.message : \'products-list\';\n        respons.data : result;\n        }'),
(10, 'get cart  ', 'GET  /cart/:id_user', '{id_user,\ncreate_data,\ntoken} ', 'cart'),
(11, 'delete cart  ', 'DELETE /cart\'', '{token,id_cart} ', '{success:true, error:false, massege:cart deleted!!!, data:result}'),
(12, 'GET Item in the cart', 'GET /cart\'', '{id_cart, token} ', '{success:true, error:false, massege:item-list!!!, data:result}'),
(13, 'get order', 'GET /order', '{token} ', '{success:true, error:false, massege:order-list, data:result}'),
(14, 'insert order', 'POST /order', '{ id_user,\n id_cart ,\n final_price,\n city,\n street ,\n deliveri_date,\ndigits,\n Order_date ,\n token } ', '{success:true, error:false, massege:order added successfuly, data:result}');

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `create_date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- הוצאת מידע עבור טבלה `cart`
--

INSERT INTO `cart` (`id`, `id_user`, `create_date`) VALUES
(5, 0, '2019-12-21 20:43:34.863'),
(7, 12, '2020-01-08 18:24:47.980'),
(8, 15, '2020-01-09 18:08:59.741'),
(9, 16, '2020-01-09 18:24:55.576'),
(55, 1, '2020-01-22 09:37:06.325'),
(126, 18, '2020-02-04 12:29:37.721'),
(130, 19, '2020-02-04 18:44:32.341'),
(134, 17, '2020-02-05 13:26:21.529');

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- הוצאת מידע עבור טבלה `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(3, 'Meat & Fish'),
(1, 'Milk & Eggs'),
(2, 'Vegetables & Fruits'),
(4, 'Wine & Drinks');

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `order_`
--

CREATE TABLE `order_` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_cart` int(11) NOT NULL,
  `final_price` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `delivery_date` varchar(255) NOT NULL,
  `Order_date` varchar(255) NOT NULL,
  `4_digits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- הוצאת מידע עבור טבלה `order_`
--

INSERT INTO `order_` (`id`, `id_user`, `id_cart`, `final_price`, `city`, `street`, `delivery_date`, `Order_date`, `4_digits`) VALUES
(1, 301270211, 6, 51, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 2147483647),
(2, 301270211, 6, 57, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 111111),
(3, 301270211, 6, 57, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 2147483647),
(4, 301270211, 6, 57, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 55555555),
(5, 301270211, 10, 12, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 21345),
(6, 301270211, 11, 6, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 215234),
(7, 301270211, 12, 6, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 3556),
(8, 301270211, 13, 6, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 6576835),
(9, 301270211, 14, 6, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 3221),
(10, 301270211, 15, 6, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 5555),
(11, 301270211, 16, 6, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 55555),
(12, 301270211, 17, 6, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 2222222),
(13, 301270211, 18, 6, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 121212),
(14, 301270211, 19, 6, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 1111),
(15, 301270211, 20, 6, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 32),
(16, 301270211, 21, 7, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 543),
(17, 301270211, 22, 6, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 111),
(18, 301270211, 23, 6, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 32134),
(19, 301270211, 24, 38, 'ELAD', 'BARTENURA', '2020-01-16', '2020-01-16', 3223),
(20, 301270211, 25, 6, 'ELAD', 'BARTENURA', '2020-01-17', '2020-01-17', 1222),
(21, 301270211, 26, 6, 'ELAD', 'BARTENURA', '2020-01-17', '2020-01-17', 35),
(22, 301270211, 27, 12, 'ELAD', 'BARTENURA', '2020-01-17', '2020-01-17', 125),
(23, 301270211, 28, 6, 'ELAD', 'BARTENURA', '2020-01-17', '2020-01-17', 12),
(24, 301270211, 29, 6, 'ELAD', 'BARTENURA', '2020-01-17', '2020-01-17', 45),
(25, 301270211, 30, 18, 'ELAD', 'BARTENURA', '2020-01-18', '2020-01-18', 3),
(26, 301270211, 31, 6, 'ELAD', 'BARTENURA', '2020-01-18', '2020-01-18', 2),
(27, 301270211, 32, 6, 'ELAD', 'BARTENURA', '2020-01-18', '2020-01-18', 55),
(28, 301270211, 33, 6, 'ELAD', 'BARTENURA', '2020-01-18', '2020-01-18', 2),
(29, 301270211, 34, 6, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 1),
(30, 301270211, 35, 6, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 1),
(31, 301270211, 36, 6, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 4),
(32, 301270211, 37, 6, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 1),
(33, 301270211, 38, 6, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 1),
(34, 301270211, 39, 6, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 1),
(35, 301270211, 40, 12, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 1),
(36, 301270211, 41, 6, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 1),
(37, 301270211, 42, 17, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 2),
(38, 301270211, 43, 18, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 2),
(39, 301270211, 44, 12, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 33),
(40, 301270211, 45, 6, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 11),
(41, 301270211, 46, 13, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 4),
(42, 301270211, 47, 2, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 12),
(43, 301270211, 48, 2, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 1),
(44, 301270211, 49, 6, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 22),
(45, 301270211, 50, 12, 'ELAD', 'BARTENURA', '2020-01-10', '2020-01-19', 52),
(46, 301270211, 51, 11, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 11),
(47, 301270211, 52, 6, 'ELAD', 'BARTENURA', '2020-01-19', '2020-01-19', 2),
(48, 301270211, 53, 6, 'ELAD', 'BARTENURA', '2020-01-20', '2020-01-19', 5),
(49, 301270211, 54, 140, 'ELAD', 'BARTENURA', '2020-01-22', '2020-01-22', 65),
(50, 123456789, 56, 22, 'hhh', 'hhh', '2020-01-22', '2020-01-22', 2147483647),
(51, 123456789, 57, 36, 'hhh', 'hhh', '2020-01-22', '2020-01-22', 212121),
(52, 123456789, 58, 6, 'hhh', 'hhh', '2020-01-23', '2020-01-22', 123),
(53, 123456789, 59, 18, 'hhh', 'hhh', '2020-01-12', '2020-01-22', 2147483647),
(54, 123456789, 60, 382, 'hhh', 'hhh', '2020-01-26', '2020-01-26', 2147483647),
(55, 123456789, 60, 382, 'hhh', 'hhh', '2020-01-26', '2020-01-26', 2147483647),
(56, 123456789, 60, 382, 'hhh', 'hhh', '2020-01-26', '2020-01-26', 2147483647),
(57, 123456789, 60, 382, 'hhh', 'hhh', '2020-01-26', '2020-01-26', 2147483647),
(58, 123456789, 60, 382, 'hhh', 'hhh', '2020-01-26', '2020-01-26', 2147483647),
(59, 123456789, 60, 382, 'jh', 'hkgjh', '2020-01-30', '2020-01-26', 2147483647),
(60, 123456789, 60, 382, 'jh', 'hkgjh', '2020-01-30', '2020-01-26', 2147483647),
(61, 123456789, 60, 382, 'jh', 'hkgjh', '2020-01-30', '2020-01-26', 2147483647),
(62, 123456789, 60, 382, 'jh', 'hkgjh', '2020-01-30', '2020-01-26', 2147483647),
(63, 123456789, 60, 382, 'hhh', 'hhh', '2020-01-25', '2020-01-26', 2147483647),
(64, 123456789, 60, 382, 'hhh', 'hhh', '2020-01-24', '2020-01-26', 2147483647),
(65, 123456789, 60, 382, 'hhh', 'hhh', '2020-01-24', '2020-01-26', 2147483647),
(66, 123456789, 60, 382, 'hhh', 'hhh', '2020-01-31', '2020-01-26', 2147483647),
(67, 123456789, 60, 388, 'hhh', 'hhh', '2020-01-04', '2020-01-26', 2147483647),
(68, 123456789, 60, 388, 'hhh', 'hhh', '2020-01-02', '2020-01-26', 2147483647),
(69, 123456789, 61, 6, 'hhh', 'hhh', '2020-01-23', '2020-01-26', 2147483647),
(70, 123456789, 62, 6, 'hhh', 'hhh', '2020-01-24', '2020-01-26', 2147483647),
(71, 123456789, 63, 6, 'hhh', 'hhh', '2020-01-02', '2020-01-26', 2147483647),
(72, 123456789, 64, 6, 'hhh', 'hhh', '2020-01-04', '2020-01-26', 2147483647),
(73, 123456789, 65, 6, 'hhh', 'hhh', '2020-01-23', '2020-01-26', 2147483647),
(74, 123456789, 66, 12, 'hhh', 'hhh', '2020-01-29', '2020-01-29', 2147483647),
(75, 123456789, 67, 41, 'hhh', 'hhh', '2020-01-29', '2020-01-29', 2147483647),
(76, 123456789, 68, 11, 'dddddd', 'd', '2020-01-31', '2020-01-29', 2147483647),
(77, 123456789, 69, 11, 'd', 'd', '2020-01-30', '2020-01-29', 2147483647),
(78, 123456789, 70, 6, 'm', 'hhh', '2020-01-29', '2020-01-29', 2147483647),
(79, 123456789, 71, 11, 'hhh', 'hhh', '2020-01-31', '2020-01-29', 2147483647),
(80, 123456789, 72, 6, 'hhh', 'hhh', '2020-02-21', '2020-01-29', 2147483647),
(81, 123456789, 73, 6, 'hhh', 'hhh', '2020-02-14', '2020-01-29', 2147483647),
(82, 123456789, 74, 6, 'hhh', 'hhh', '2020-02-20', '2020-01-29', 2147483647),
(83, 123456789, 75, 6, 'hhh', 'hhh', '2020-02-13', '2020-01-29', 2147483647),
(84, 123456789, 76, 6, 'hhh', 'hhh', '2020-02-08', '2020-01-29', 2147483647),
(85, 123456789, 77, 6, 'hhh', 'hhh', '2020-02-01', '2020-01-29', 2147483647),
(86, 123456789, 78, 12, 'hhh', 'hhh', '2020-01-04', '2020-01-29', 2147483647),
(87, 123456789, 79, 11, 'hhh', 'hhh', '2020-02-07', '2020-01-29', 2147483647),
(88, 123456789, 80, 11, 'hhh', 'hhh', '2020-02-13', '2020-01-29', 2147483647),
(89, 123456789, 81, 11, 'hhh', 'hhh', '2020-02-14', '2020-01-29', 2147483647),
(90, 123456789, 82, 11, 'hhh', 'hhh', '2020-02-08', '2020-01-29', 2147483647),
(91, 123456789, 83, 6, 'hhh', 'hhh', '2020-02-14', '2020-01-29', 2147483647),
(92, 123456789, 84, 6, 'hhh', 'hhh', '2019-12-18', '2020-01-29', 2147483647),
(93, 123456789, 85, 16, 'hhh', 'hhh', '2020-02-14', '2020-01-29', 2147483647),
(94, 123456789, 86, 22, 'hhh', 'hhh', '2020-02-07', '2020-01-30', 2147483647),
(95, 123456789, 87, 11, 'hhh', 'hhh', '2020-02-02', '2020-02-02', 2147483647),
(96, 123456789, 88, 12, 'hhh', 'hhh', '2020-02-02', '2020-02-02', 2147483647),
(97, 123456789, 89, 12, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(98, 123456789, 90, 6, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(99, 123456789, 91, 6, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(100, 123456789, 92, 5, 'hhh', 'hhh', '2020-02-29', '2020-02-03', 2147483647),
(101, 123456789, 93, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(102, 123456789, 94, 6, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(103, 123456789, 95, 6, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(104, 123456789, 96, 11, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(105, 123456789, 97, 6, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(106, 123456789, 98, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(107, 123456789, 99, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(108, 123456789, 100, 11, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(109, 123456789, 101, 17, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(110, 123456789, 102, 14, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(111, 123456789, 103, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(112, 123456789, 104, 10, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(113, 123456789, 105, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(114, 123456789, 106, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(115, 123456789, 107, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(116, 123456789, 108, 10, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(117, 123456789, 109, 9, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(118, 123456789, 110, 6, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(119, 123456789, 111, 6, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(120, 123456789, 112, 6, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(121, 123456789, 113, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(122, 123456789, 114, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(123, 123456789, 115, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(124, 123456789, 116, 10, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(125, 123456789, 117, 35, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(126, 123456789, 118, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(127, 123456789, 119, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(128, 123456789, 120, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(129, 123456789, 121, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(130, 123456789, 122, 5, 'hhh', 'hhh', '2020-02-03', '2020-02-03', 2147483647),
(131, 123456789, 123, 6, 'hhh', 'hhh', '2020-02-04', '2020-02-04', 2147483647),
(132, 301270211, 125, 17, 'rosh haayn', 'hagephen 13', '2020-02-04', '2020-02-04', 2147483647),
(133, 123456789, 124, 26, 'hhh', 'hhh', '2020-02-04', '2020-02-04', 2147483647),
(134, 123456789, 127, 96, 'hhh', 'hhh', '2020-02-04', '2020-02-04', 2147483647),
(135, 123456789, 129, 176, 'sava', 'ayalon 32', '2020-02-04', '2020-02-04', 2147483647),
(136, 218885965, 131, 250, 'ELAD', 'ggjfy4', '2020-02-04', '2020-02-04', 2147483647),
(137, 123456789, 128, 7, 'hhh', 'hhh', '2020-02-05', '2020-02-05', 2147483647),
(138, 123456789, 132, 13, 'hhh', 'hhh', '2020-02-05', '2020-02-05', 2147483647),
(139, 123456789, 133, 7, 'hhh', 'hhh', '2020-02-05', '2020-02-05', 2147483647);

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `id_category` int(11) NOT NULL,
  `price` float NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- הוצאת מידע עבור טבלה `product`
--

INSERT INTO `product` (`id`, `name`, `id_category`, `price`, `img`) VALUES
(2, 'Milk in carton 3%', 1, 7, 'aHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym4lM0FBTmQ5R2NUX1V3R0xrc1BWUVdmMGFfMTBJX1BmYVF3U3NNWHJ1d3BIZ3VBLWFmZnRweXZaVGN6bA=='),
(3, 'משקה בננה עם פקק', 1, 5.5, 'ZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FNQUFBQUpiU0pJQUFBQ09sQk1WRVgvLy8vcTZ1cjI4KzRBZURFNW5ERDU5UEc2eWVqNzlmTHM3T3ozOHU0VFEzVHc4TzdzNit6czYrb0FtZFVBcE5rQXFkclB6dE1BT1cxenZlQ3BuLy9BeiszMjl2YTN4dWNBRlZXTmw2b0FvTmNBbk5jQXB'),
(4, 'גבינה לבנה סקי 5%', 1, 4.75, 'YUhSMGNITTZMeTl5WlhNdVkyeHZkV1JwYm1GeWVTNWpiMjB2YzJoMVptVnljMkZzTDJsdFlXZGxMM1Z3Ykc5aFpDOW1YMkYxZEc4c2NWOWhkWFJ2TDNZeE5UVXhPREF3T1RJeUwzQnliMlF2Y0hKdlpIVmpkRjlwYldGblpYTXZjSEp2WkhWamRITmZiR0Z5WjJVdlVrdGFNalpmVEY5UVh6STRNalEyTkRCZk1TNXdibWM9'),
(5, 'גבינה לבנה 5%', 1, 2.38, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfbGFyZ2UvVkpQMDhfTF9QXzUwMzAwXzEucG5n'),
(6, 'יופלה דיאט עוגת גבינה', 1, 5, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfbGFyZ2UvVFFNMzRfTF9QXzQxMjY3NTlfMS5wbmc='),
(7, 'יוגורט מולר לבן ביו 2.8%', 1, 4, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9VREw1Ml9aX1BfNzI5MDEwMjM5MjcyOF8xLnBuZw=='),
(8, 'יוגורט כבשים פרוביוטי 5%', 1, 11.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIwL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9HT0M0Nl9aX1BfNzI5MDAxNDg5MDIxM18xLnBuZw=='),
(9, 'ביצים L שופרסל', 1, 11.3, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9YS1g1OF9aX1BfNzI5NjA3MzI0MzM2Nl8xLnBuZw=='),
(10, 'ביצים M שופרסל', 1, 26, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9YS1g1OF9aX1BfNzI5NjA3MzI0MzM2Nl8xLnBuZw=='),
(11, 'מלפפון', 2, 6.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9BVFUxMF9aX1BfNDZfMS5wbmc='),
(12, 'עגבניה תמר', 2, 5.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9BRFQwOF9aX1BfODAwXzEucG5n'),
(13, 'בצל יבש', 2, 3.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9STE0xMl9aX1BfNDgwXzEucG5n'),
(14, 'כוסברה יח', 2, 3.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9VTE0xOF9aX1BfNTU4XzEucG5n'),
(15, 'בטטה', 2, 9.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9QTE0xNF9aX1BfNDI4XzEucG5n'),
(16, 'בננה\n', 2, 5.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9XRFMzOF9aX1BfOTY0Nzc1XzEucG5n'),
(17, 'תפוח עץ סמיט\n', 2, 9.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfbGFyZ2UvVUhKMzJfTF9QXzk2MzUxOF8xLnBuZw=='),
(18, 'תפוז', 2, 4.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9WTEwyMl9aX1BfOTY0MzAwXzEucG5n'),
(19, 'כתף טרי חלק אנגוס', 3, 84.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9TWUkyMl9aX1BfOTAxMjQxNV8xLnBuZw=='),
(20, 'אנטריקוט טרי חלק אנגוס', 3, 139.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9TWEwyNl9aX1BfOTAxMjM5Ml8xLnBuZw=='),
(21, 'בשר לטחינה חלק א.א', 3, 59.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9JRVkzMF9aX1BfMjUxOTYwN18xLnBuZw=='),
(22, 'פילה סלמון טרי נורווגי', 3, 99.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9EUEszNF9aX1BfMTEyNzk5NV8xLnBuZw=='),
(23, 'אמנון שלם טרי', 3, 29.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9BT1cyNl9aX1BfMTEyNTk1M18xLnBuZw=='),
(24, 'לברק שלם טרי', 3, 64.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9GV0YyNF9aX1BfMTEyOTUyNF8xLnBuZw=='),
(25, 'ברבוניה שלם טרי', 3, 99.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9aVUgyNF9aX1BfMjgzMDI5MF8xLnBuZw=='),
(26, 'וודקה אבסולוט', 4, 49.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9VQks0Ml9aX1BfNzMxMjA0MDAxNzY4M18xLnBuZw=='),
(31, 'וויסקי שיבס', 4, 99.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9GTlczNl9aX1BfODA0MzI0MDI5MzFfMS5wbmc='),
(32, 'מוסקטו הר חרמון', 4, 29.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9EU0E1Ml9aX1BfNzI5MDAxNDQ2NjQ2M18xLnBuZw=='),
(33, 'מוסקטו הר חרמון', 4, 29.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9EU0E1Ml9aX1BfNzI5MDAxNDQ2NjQ2M18xLnBuZw=='),
(34, 'הר חרמון קברנה סוביניון', 4, 29.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9SQlY1Nl9aX1BfNzI5MDAxNTk1MTg5MF8xLnBuZw=='),
(35, 'ברקן קלאסיק מרלו', 4, 27.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9JTEUyOF9aX1BfMjM5NzdfMS5wbmc='),
(36, 'פאנטה ענבים', 4, 6.7, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9WV04yOF9aX1BfNTYwNDY1Ml8xLnBuZw=='),
(37, 'מירינדה תפוזים', 4, 5.5, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9RUE0yNl9aX1BfNDMzNzQ1XzEucG5n'),
(38, 'קולה שופרסל', 4, 4.3, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9SSkI1Nl9aX1BfNzI5NjA3MzI3NDQxNF8xLnBuZw=='),
(39, 'קוקה קולה בקבוק', 4, 6.5, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9ET0YyNF9aX1BfMjg0MzE2XzEucG5n'),
(40, '19.90\n₪', 4, 19.9, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9aUVY0Ml9aX1BfNzI5MDAxMTAxODgzMl8xLnBuZw=='),
(41, 'מים בטעם פירות יער', 4, 7.5, 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9QTFMyNl9aX1BfMjMzMTE3OV8xLnBuZw==');

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `product_cart`
--

CREATE TABLE `product_cart` (
  `id` int(11) NOT NULL,
  `id_product` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `id_cart` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- הוצאת מידע עבור טבלה `product_cart`
--

INSERT INTO `product_cart` (`id`, `id_product`, `count`, `price`, `id_cart`) VALUES
(71, 9, 4, 11, 6),
(75, 3, 1, 6, 6),
(86, 3, 1, 6, 18),
(89, 11, 1, 7, 21),
(92, 5, 1, 2, 24),
(93, 3, 1, 6, 24),
(94, 23, 1, 30, 24),
(117, 3, 1, 6, 42),
(122, 6, 1, 5, 46),
(123, 5, 1, 2, 46),
(125, 5, 1, 2, 47),
(126, 5, 1, 2, 48),
(144, 3, 1, 6, 51),
(145, 3, 1, 6, 51),
(149, 5, 1, 2, 54),
(150, 19, 1, 85, 54),
(157, 3, 1, 6, 54),
(159, 3, 1, 6, 56),
(160, 6, 1, 5, 56),
(161, 12, 1, 6, 56),
(162, 16, 1, 6, 56),
(164, 9, 1, 11, 57),
(165, 15, 1, 10, 57),
(166, 38, 2, 4, 57),
(176, 26, 1, 50, 60),
(177, 19, 1, 85, 60),
(179, 3, 1, 6, 60),
(180, 32, 1, 30, 60),
(181, 12, 1, 6, 60),
(182, 22, 2, 100, 60),
(184, 3, 1, 6, 61),
(186, 3, 1, 6, 63),
(189, 2, 1, 6, 65),
(190, 2, 1, 6, 66),
(191, 2, 1, 6, 66),
(192, 3, 1, 6, 67),
(193, 2, 1, 6, 67),
(194, 32, 1, 30, 67),
(195, 2, 1, 6, 68),
(196, 3, 1, 6, 68),
(197, 2, 1, 6, 69),
(198, 3, 1, 6, 69),
(199, 2, 1, 6, 70),
(200, 2, 1, 6, 71),
(201, 3, 1, 6, 71),
(202, 2, 1, 6, 72),
(203, 2, 1, 6, 73),
(204, 2, 1, 6, 74),
(205, 2, 1, 6, 75),
(206, 2, 1, 6, 76),
(207, 2, 1, 6, 77),
(208, 2, 1, 6, 78),
(209, 2, 1, 6, 78),
(210, 2, 1, 6, 79),
(211, 3, 1, 6, 79),
(212, 2, 1, 6, 80),
(213, 3, 1, 6, 80),
(214, 2, 1, 6, 81),
(215, 3, 1, 6, 81),
(216, 2, 1, 6, 82),
(217, 3, 1, 6, 82),
(218, 2, 1, 6, 83),
(219, 2, 1, 6, 84),
(220, 2, 1, 6, 85),
(221, 3, 1, 6, 85),
(222, 4, 1, 5, 85),
(223, 2, 1, 6, 86),
(224, 3, 1, 6, 86),
(225, 4, 1, 5, 86),
(226, 2, 1, 6, 86),
(227, 2, 1, 6, 87),
(228, 6, 1, 5, 87),
(229, 2, 1, 6, 88),
(230, 2, 1, 6, 88),
(231, 2, 1, 6, 89),
(232, 2, 1, 6, 89),
(233, 2, 1, 6, 90),
(234, 2, 1, 6, 91),
(235, 4, 1, 5, 92),
(236, 4, 1, 5, 93),
(237, 2, 1, 6, 94),
(238, 3, 1, 6, 95),
(239, 4, 1, 5, 96),
(240, 2, 1, 6, 96),
(241, 3, 1, 6, 97),
(242, 4, 1, 5, 98),
(243, 4, 1, 5, 99),
(244, 4, 1, 5, 100),
(245, 2, 1, 6, 100),
(246, 2, 1, 6, 101),
(247, 2, 1, 6, 101),
(248, 3, 1, 6, 101),
(249, 3, 1, 6, 102),
(250, 4, 1, 5, 102),
(251, 7, 1, 4, 102),
(252, 4, 1, 5, 103),
(253, 4, 1, 5, 104),
(254, 3, 1, 6, 104),
(255, 4, 1, 5, 105),
(256, 4, 1, 5, 106),
(257, 4, 1, 5, 107),
(258, 3, 1, 6, 108),
(259, 4, 1, 5, 108),
(260, 4, 1, 5, 109),
(261, 7, 1, 4, 109),
(262, 3, 1, 6, 110),
(263, 2, 1, 6, 111),
(264, 2, 1, 6, 112),
(265, 4, 1, 5, 113),
(266, 4, 1, 5, 114),
(267, 4, 1, 5, 115),
(268, 4, 1, 5, 116),
(269, 3, 1, 6, 116),
(270, 4, 1, 5, 117),
(271, 32, 1, 30, 117),
(272, 4, 1, 5, 118),
(273, 4, 1, 5, 119),
(274, 4, 1, 5, 120),
(275, 4, 1, 5, 121),
(276, 4, 1, 5, 122),
(277, 2, 1, 6, 123),
(278, 2, 1, 6, 125),
(279, 2, 1, 6, 124),
(280, 3, 1, 6, 124),
(281, 5, 1, 2, 124),
(282, 2, 1, 6, 125),
(283, 3, 1, 6, 125),
(284, 2, 1, 6, 124),
(285, 2, 1, 6, 124),
(286, 2, 1, 6, 127),
(287, 3, 1, 6, 127),
(288, 19, 1, 85, 127),
(289, 6, 2, 5, 129),
(291, 34, 2, 30, 129),
(292, 12, 1, 6, 129),
(293, 22, 1, 100, 129),
(294, 2, 1, 6, 130),
(295, 3, 1, 6, 130),
(296, 4, 1, 5, 130),
(297, 31, 1, 100, 131),
(298, 32, 1, 30, 131),
(299, 2, 4, 6, 131),
(300, 8, 1, 12, 131),
(301, 19, 1, 85, 131),
(302, 2, 1, 7, 128),
(303, 2, 1, 7, 132),
(304, 3, 1, 6, 132),
(305, 2, 1, 7, 133),
(306, 2, 1, 7, 134);

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `sum_product`
--

CREATE TABLE `sum_product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- הוצאת מידע עבור טבלה `sum_product`
--

INSERT INTO `sum_product` (`id`, `name`, `img`) VALUES
(1, 'יופלה דיאט עוגת גבינה', 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfbGFyZ2UvVFFNMzRfTF9QXzQxMjY3NTlfMS5wbmc='),
(2, 'פילה סלמון טרי נורווגי', 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9EUEszNF9aX1BfMTEyNzk5NV8xLnBuZw=='),
(3, 'הר חרמון קברנה סוביניון', 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2h1ZmVyc2FsL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL3YxNTUxODAwOTIyL3Byb2QvcHJvZHVjdF9pbWFnZXMvcHJvZHVjdHNfem9vbS9SQlY1Nl9aX1BfNzI5MDAxNTk1MTg5MF8xLnBuZw==');

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `_id` int(11) NOT NULL,
  `password` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- הוצאת מידע עבור טבלה `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `username`, `_id`, `password`, `city`, `street`, `role`) VALUES
(1, 'jon', 'max', 'jonmax1987@gmail.com', 301270211, 1234, 'ELAD', 'BARTENURA', 0),
(2, 'sivan', 'max', 'sivanmax@gmail.com', 201444148, 0, 'ELAD', 'BARTENURA', 1),
(7, 'kkk', 'lll', 'kokoko@gmail.com', 888888888, 3333, 'newyourk', 'skjdkfj', 0),
(8, 'itamar', 'max', 'itamar@gmail.com', 999999999, 9999, 'new yourk ', 'Hashalom', 1),
(9, 'SHAUL', 'SHAY', 'JONM@GMAIL.COM', 888888888, 1111, 'haifa', 'HANEVEEIM', 1),
(10, 'lorl', 'gastin', 'jonmax187@gmail.com', 999999999, 0, 'new york', 'seven seventy', 1),
(11, 'k.jllkj', 'kuli', 'jonma1987@gmail.com', 888888888, 1111, ',kj', 'lk.jl', 1),
(12, 'lk', 'lk', 'itam1ar@gmail.com', 777777777, 0, 'lkLK', 'lk', 1),
(13, 'kjhj', 'kjgh', 'jonmax19587@gmail.com', 555555555, 0, 'jhg', 'jhkg', 1),
(14, ';lk', ';ll', 'JONM@GMAIL.COM5', 333333333, 0, 'lk', ';l', 1),
(15, 'kjhlkj', 'kj,hkj', 'l.j', 222222222, 0, 'ELAD', 'kjhlkj', 1),
(16, ';l/k', ';l/;', 'jonmax1987@gmail.com5', 111111111, 0, ';l/;k', ';l/k;', 1),
(17, 'hhh', 'hhh', 'jonmax1007@gmail.com', 123456789, 0, 'hhh', 'hhh', 1),
(18, 'gorge', 'king', 'jon@gmail.com', 301270211, 1346, 'rosh haayn', 'hagephen 13', 1),
(19, 'sigal', 'tsigler', 'sigal@gmail.com', 123456789, 1234, 'sava', 'ayalon 32', 1),
(20, 'itamar', 'choen', 'netanel@gmail.com', 218885965, 12345, 'ELAD', 'ggjfy4', 1);

--
-- Indexes for dumped tables
--

--
-- אינדקסים לטבלה `api`
--
ALTER TABLE `api`
  ADD PRIMARY KEY (`id`);

--
-- אינדקסים לטבלה `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- אינדקסים לטבלה `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- אינדקסים לטבלה `order_`
--
ALTER TABLE `order_`
  ADD PRIMARY KEY (`id`);

--
-- אינדקסים לטבלה `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- אינדקסים לטבלה `product_cart`
--
ALTER TABLE `product_cart`
  ADD PRIMARY KEY (`id`);

--
-- אינדקסים לטבלה `sum_product`
--
ALTER TABLE `sum_product`
  ADD PRIMARY KEY (`id`);

--
-- אינדקסים לטבלה `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `api`
--
ALTER TABLE `api`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `order_`
--
ALTER TABLE `order_`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `product_cart`
--
ALTER TABLE `product_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=307;

--
-- AUTO_INCREMENT for table `sum_product`
--
ALTER TABLE `sum_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
