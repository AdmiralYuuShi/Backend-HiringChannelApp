-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: hiring_channel
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `company_id` varchar(64) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  `name` varchar(128) NOT NULL,
  `logo` varchar(256) NOT NULL,
  `location` varchar(256) NOT NULL,
  `description` varchar(512) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  PRIMARY KEY (`company_id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `company_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES ('1986b20e-271e-4d72-9090-c9bf2a1cb6a4','aa1b647a-1dbd-4f61-9223-26319dc3e724','Youtube','2019-12-25-yt.png','Cherry Avenue San Bruno, California, United States','YouTube is an American video-sharing platform headquartered in San Bruno, California. Three former PayPal employees—Chad Hurley, Steve Chen, and Jawed Karim—created the service in February 2005. Google bought the site in November 2006 for US$1.65 billion; ','2019-12-25 19:05:47','2019-12-25 19:05:47'),('2419904b-c387-4b48-b0d2-c1adea9a1c1f','64fed9d1-cf3f-483b-98f2-9ae4975d73a5','Steam','2019-12-25-steam-logo-73274B19E3-seeklogo.com.png','Bellevue, Washington, US','Steam is a video game digital distribution service by Valve. It was launched as a standalone software client in September 2003 as a way for Valve to provide automatic updates for their games, and expanded to include games from third-party publishers. Steam has also expanded into an online web-based and mobile digital storefront. Steam offers digital rights management (DRM), matchmaking servers, video streaming, and social networking services. It also provides the user with installation and automatic updatin','2019-12-25 19:26:01','2019-12-25 19:26:01'),('3c43d7cf-7145-40a6-8edf-005862caeffb','6bf40859-4e5f-4f6b-b72f-c34909d4c454','Valve','2019-12-26-512px-Valve_logo.svg.png','Bellevue, Washington, US','Valve Corporation, also known as Valve Software, is an American video game developer, publisher, and digital distribution company headquartered in Bellevue, Washington. It is the developer of the software distribution platform Steam and the Half-Life, Counter-Strike, Portal, Day of Defeat, Team Fortress, Left 4 Dead, and Dota series.','2019-12-26 10:50:34','2019-12-26 10:50:34'),('45caf914-9083-4a8f-9b67-998d8925fc32','e11b63a5-b9da-4ee0-a67e-5fdffadb30b0','Pivix Inc.','2019-12-25-pixiv.png','Shibuya, Tokyo, Japan.','Pixiv is a Japanese online community for artists. It was first launched as a beta test on September 10, 2007 by Takahiro Kamitani and Takanori Katagiri. Pixiv Inc. is headquartered in Sendagaya, Shibuya, Tokyo, Japan.','2019-12-25 19:07:51','2020-01-01 10:27:52'),('48115b32-3881-44c5-8972-bf1d83d7e9af','c4df5950-536b-476f-bade-2e10db142645','Niconico, Inc.','2019-12-25-bdb46e0338031b3c2b4f23f6ff2c73bc9ac218de_hq.jpg','Tokyo, Japan','Niconico formerly Nico Nico Douga is a Japanese video-sharing service on the web. Niconico or nikoniko is the Japanese ideophone for smiling. As of September 2015, Niconico is the tenth most visited website in Japan, according to Alexa traffic rankings. The site won the Japanese Good Design Award in 2007, and an Honorary Mention of the Digital Communities category at Prix Ars Electronica 2008.','2019-12-25 19:13:38','2019-12-25 19:15:12'),('56483406-7518-4212-b7ca-52326d9c3444','c6930c80-7cbb-4a92-8dcb-3b2a05109e3a','igigig','new-company.png','ifig','igig','2020-01-04 04:31:39','2020-01-04 04:31:39'),('729cc12e-a8e7-4b51-8307-3f6d97d888ee','45c53428-aee3-4b9f-9d59-b2ef37887e63','Bilibili Inc.','2019-12-25-bilibili.png','Hangzhou, Zhejiang, China','Bilibili is a video sharing website themed around animation, comic, and game (ACG) based in China, where users can submit, view, and add commentary subtitles on videos. Bilibili uses an Adobe Flash or HTML5 player, which can be manually switched, to play user submitted videos hosted by either itself or third-party sources, while featuring a real-time overlaying subtitle system for interactive playback experience.','2019-12-25 19:22:49','2019-12-25 19:22:49'),('76821060-4c5f-4453-9691-cc93b23e75a9','18902528-8fbb-4a27-9044-39a844da86be','Facebook, Inc.','2019-12-25-fb_icon_325x325.png','Menlo Park, California, U.S','Facebook (FB) is an American online social media and social networking service based in Menlo Park, California and a flagship service of the namesake company Facebook, Inc. It was founded by Mark Zuckerberg, along with fellow Harvard College students and r','2019-12-25 19:01:25','2020-01-01 07:12:30'),('8c25d7ba-9aed-47a8-83a2-2219f18bf625','d4704c1c-847c-4014-aea3-ce84f52179b5','Tokopedia','2019-12-25-tokped.jpg','Jakarta, Indonesia','Tokopedia is an Indonesian technology company specializing in e-commerce. It was founded in 2009 by William Tanuwijaya and Leontinus Alpha Edison. It is an Indonesian unicorn along with ride hailing company Gojek, travel service firm Traveloka, e-commerce Bukalapak and fintech company OVO.','2019-12-25 19:28:26','2019-12-25 19:28:26'),('cfd461e3-6fa6-4239-8c6a-f87351dd265f','9a7849e3-7cc3-4e83-a861-16acbd628c79','Twitter','2019-12-25-_65QFl7B.png','San Francisco, California, United States','Twitter is an American microblogging and social networking service on which users post and interact with messages known as tweets. Tweets were originally restricted to 140 characters, but on November 7, 2017, this limit was doubled to 280 for all languages','2019-12-25 19:04:09','2019-12-25 19:04:09'),('f36ffc7e-7f50-4064-832e-fd6709f5020f','540bd6ce-3d54-4f7e-a985-29744633ec10','Arkademy','2020-01-02-IMG_20191223_223717.jpg','Jakarta','Bootcamp Arkademy','2020-01-02 03:57:16','2020-01-02 03:57:16');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `engineer`
--

DROP TABLE IF EXISTS `engineer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `engineer` (
  `engineer_id` varchar(64) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` varchar(256) NOT NULL,
  `skill` varchar(256) NOT NULL,
  `location` varchar(256) NOT NULL,
  `date_of_birth` date NOT NULL,
  `showcase` varchar(256) NOT NULL,
  `expected_salary` varchar(32) NOT NULL,
  `email` varchar(64) NOT NULL,
  `phone` varchar(32) NOT NULL,
  `profil_picture` varchar(256) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  PRIMARY KEY (`engineer_id`),
  UNIQUE KEY `user_id` (`user_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`),
  CONSTRAINT `engineer_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `engineer`
--

LOCK TABLES `engineer` WRITE;
/*!40000 ALTER TABLE `engineer` DISABLE KEYS */;
INSERT INTO `engineer` VALUES ('0cae335a-002e-4734-8c38-110706065884','9af8ec06-fe66-40a5-b5c6-e500c91b8068','Randi Jayne Zuckerberg','Former director of market development and spokesperson for Facebook','PHP','New York City, New York, U.S.','1982-02-27','Facebook.com/Randi','70000000','randi@mail.com','028302913722','2019-12-23-Randi-Zuckerberg.jpg','2019-12-19 00:00:00','2019-12-19 13:26:08'),('16347eb6-dfdd-4902-98fd-c7c97c39fa46','8c620fff-6da9-4474-afcf-aad5772c8af8','Bill Gates','Chairman, chief executive officer (CEO), president and chief software architect of Microsoft','Software developer, investor, entrepreneur, philanthropist','Seattle, Washington, U.S.','1955-10-26','gatesnotes.com','99900','billgates@mail.com','09121212399711','2019-12-23-XpgonN0X_400x400.jpg','2019-12-19 00:00:00','2020-01-01 16:48:03'),('201b56e5-c972-43a6-ad55-1d34258a1be5','aa596afa-f718-4b5b-a943-dece26f277fb','Hideo Kojima','Japanese video game designer, writer, director and producer','Video game designer, writer, director, producer','Setagaya, Tokyo, Japan','1963-08-23','https://en.wikipedia.org/wiki/Hideo_Kojima','22000','kojima@mail.com','02372173812781','2019-12-23-KojimaKonami-768x432.png','2019-11-19 00:00:00','2020-01-01 16:49:15'),('447ee7f9-c8f9-42dd-a433-13e0df5b6243','2bdb4238-b426-4b67-a17d-66077b5c9368','Junya ZUN Oota','Programmer, writer, artist, and composer for Team Shanghai Alice.','Game developer, music composer, comic writer','Tokyo, Japan','1977-03-16','www16.big.or.jp/~zun/','18000','zun@mail.com','0873221872221','2019-12-23-zun-4514.jpg','2019-11-19 00:00:00','2020-01-01 16:52:22'),('4b63bde5-e4b6-4c94-ab06-0355c141d9a8','87ae747c-624a-421a-a975-696662f42ffc','Steve Jobs','Chairman, chief executive officer (CEO), and co-founder of Apple Inc.','Computer Science','San Francisco, California, U.S.','1955-02-23','https://en.wikipedia.org/wiki/Steve_Jobs','8800','stevejobs@mail.com','0678463534345','2019-12-23-Mengintip-Gaya-Kepemimpinan-Steve-Jobs-yang-Unik-dan-Inspiratif.jpg','2019-12-19 00:00:00','2020-01-01 16:54:12'),('54a4016e-b505-4141-ba63-331b6e715472','505169d1-3915-4988-ba39-d14464c03d7d','Fathur Rahman F','Pengangguran','PHP NATIVE\nSQL\nKINEMASTER\nFILMORA\nPIXLE LAB','Indonesia','2000-12-16','Tamvan','800','Fathur16@gmail.com','089699079250','new-engineer.png','2020-01-03 12:22:57','2020-01-03 12:22:57'),('5ac65a63-d73c-4202-80b1-a06153d26d67','ef26d451-664b-48d0-b7cc-b74717b5cf32','Jack Patrick Dorsey','Co-founder and CEO of Twitter, and the founder and CEO of Square, a mobile payments company','Computer programmer and Internet entrepreneur','San Francisco, California, U.S.','1976-11-19','https://en.wikipedia.org/wiki/Jack_Dorsey','780000000','jackdorsey@mail.com','003178172181','2019-12-23-jack-dorsey.jpg','2019-12-19 13:37:07','2019-12-19 13:37:07'),('6874c313-5a81-48d6-ad28-1daaedd0dc5c','83720059-0ea4-4b42-925e-3d764757744c','Melinda Gates','Co-Chair and Founder, Bill & Melinda Gates Foundation','Marketing','Medina, Washington, U.S.','1964-08-13','www.gatesfoundation.org','68000','melindagates@mail.com','0567435435435','2019-12-23-mcx050119nf-pointofview-004-color-1555683563.jpg','2019-12-19 00:00:00','2020-01-06 02:26:55'),('68d63db1-a3db-4878-822f-003571dbbebf','3517059b-4298-469a-9585-4efea96102a3','Ken Kutaragi','Former chairman and CEO of Sony Computer Entertainment','Computer Science','Tokyo, Japan','1950-08-01','https://en.wikipedia.org/wiki/Ken_Kutaragi','3300','ken@mail.com','0182137128181','2019-12-23-1238417-ken_kutaragi.jpg','2019-11-19 00:00:00','2020-01-01 16:53:46'),('9fa43ebe-fd7a-460d-8c6e-c37bd9df182a','d68d267e-3c5c-42b8-913f-114fe16901b0','Jack','Im Jack','Not have any','Jawa Utara','2020-01-16','jack.jc','99999','mycomp@mail.com','00000000001','2020-01-04-image-d602083a-4e06-44ae-9c37-e9867c49b085.jpg','2020-01-04 09:24:16','2020-01-04 09:24:16'),('a38efb62-cbad-49b6-8ebe-a2f1ab8a36f7','70afe55e-0672-4c58-a31e-d6763afe3ba7','Bayu','Code for fun','Kebal ','Tangeranh','2020-01-03','Www','8000000','bayu@gmail.com','081234567899','new-engineer.png','2020-01-03 10:37:52','2020-01-03 10:37:52'),('bad6742a-182c-403f-a22d-21e82941e647','f7ce2416-7784-4115-97e1-829948a7d321','Hapid Moch Jamil','Full Stack Developer','Reactjs, React Native, Nodejs, Codeigniter ','Bandung, Indonesia','2001-01-12','github.com/AdmiralYuuShi','6000','hapidmochj12@gmail.com','089668360673','2020-01-02-IMG_20190504_100309.jpg','2020-01-01 14:01:18','2020-01-06 07:57:25'),('c433091e-24f6-4924-b5bd-8509ccde174f','2d6a935e-737a-480f-af58-d3c0c0748a5a','Mark Elliot Zuckerberg','Co-founding and leading Facebook, Inc.','PHP','Dobbs Ferry, New York, U.S.','1984-05-13','facebook.com/zuck','8900','mark@mail.com','03173412111','2019-12-23-30771455_1534269614088.jpg','2019-12-19 00:00:00','2020-01-01 16:50:16'),('ca6a9080-9a70-4a5e-b454-72171cecf5bb','679f51f7-8caf-4a4b-b87e-bdda98a74847','Aoba Suzukaze','Character designer for Eagle Jump games company','3D Modeling, Digital Drawing','Kitakyushu, Fukuoka Prefecture, Japan','1993-03-16','https://en.wikipedia.org/wiki/New_Game!','8000','aoba@mail.com','081379812719','2019-12-23-42450.jpg','2019-12-19 13:33:06','2020-01-01 06:37:26'),('ca838d7b-fa85-4822-9156-683fdd0a966d','747cb7ce-3caf-4851-ad33-ce4948f4a683','Elon Reeve Musk','Technology engineer and entrepreneur. Holds South African, Canadian, and U.S. citizenship and is the founder, CEO, and chief engineer/designer of SpaceX; CEO and product architect of Tesla, Inc.; co-founder of Neuralink; founder of The Boring Company','Entrepreneur, engineer, philanthropist','Bel Air, Los Angeles, California, United States','1971-06-26','https://en.wikipedia.org/wiki/Elon_Musk','80000','elonmusk@mail.com','0123912919111','2019-12-25-Elon_Musk_Royal_Society.jpg','2019-12-25 21:21:07','2020-01-05 10:36:47'),('fb9e9341-a1ac-4e45-846a-b0ad7b3ffa37','919074c8-640c-4c9c-8a9e-dcc420d1c829','Haris Maulana Jamil','Front End Developer','React Native, ReactJs','Bandung, Indonesia','2000-10-29','github.com/haris','6000000','haris@mail.com','03464536888','2020-01-21-IMG_20200104_175418.jpg','2020-01-21 09:14:36','2020-01-21 09:14:36');
/*!40000 ALTER TABLE `engineer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(128) NOT NULL,
  `role` varchar(16) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('05f8ddae-5a01-4f12-bb74-dead5e51299c','gg@hh.jj','ggg','$2a$10$a2TOmcEN2oPY0fsdbbbJPOGZFyb6wuXbfhkKCMMiyWEStpZkV4sGG','engineer','2020-01-01 12:30:48','2020-01-01 12:30:48'),('18902528-8fbb-4a27-9044-39a844da86be','facebook@mail.com','facebook','$2a$10$NPX5vAL1CKq1s8fOGqR4GO/tk66oPHi5rRUUZ93aM7W.igmfQw1lS','company','2019-12-25 18:59:45','2019-12-25 18:59:45'),('2bdb4238-b426-4b67-a17d-66077b5c9368','zun@mail.com','zun','$2a$10$dT49YnLel/2uQapC6PhynuCnJ7fAKM1uuSOSNOaGtQ.qCiC10hECO','engineer','2019-11-19 12:55:23','2019-11-19 12:55:23'),('2d6a935e-737a-480f-af58-d3c0c0748a5a','mark@mail.com','markzuck','$2a$10$cijxXeMGijOjsh7Bg3DtNOarmcXq8PUh/L9vwOcchC2Aq7HjGWFU6','engineer','2019-12-19 09:54:09','2019-12-19 09:54:09'),('34434285-b3b0-4065-af5d-8e57bccdb31b','fjxjxjc@fi.ggg','jrudud','$2a$10$WUQJ67IRkTMe4lALczcaGe8MHuqXCbGeOXhZ3n91blpR9FUhlACQm','company','2020-01-01 12:25:11','2020-01-01 12:25:11'),('3517059b-4298-469a-9585-4efea96102a3','ken@mail.com','ken','$2a$10$tCdtNbhuYamfuiGzfqZvTu6myFsZIiy4swUvQUkueX5b22Mpq6rEK','engineer','2019-11-19 13:07:07','2019-11-19 13:07:07'),('45c53428-aee3-4b9f-9d59-b2ef37887e63','bilibili@mail.com','bilibili','$2a$10$GhLBm9jxY52QnlNW085yreoTTKS7GAFvmLdS92qAOCNhMrGkHD8Qm','company','2019-12-25 19:16:16','2019-12-25 19:16:16'),('45cd8f40-8727-4d6c-ab9d-de2bf33a852a','aaaaa@aaa.aa','aaa','$2a$10$PyJOBsKsgFu0dgki.Jpj.u6XxyfT3brep5TLEK5YFU.cEylvmqXFC','engineer','2019-12-26 10:20:59','2019-12-26 10:20:59'),('505169d1-3915-4988-ba39-d14464c03d7d','Fathur16@gmail.com','Fathur','$2a$10$V8gssQmDlNEFZp3DBjhIW.CNH3P/45QYmEadtmp.Vzr2dhCFuxtq6','engineer','2020-01-03 12:19:52','2020-01-03 12:19:52'),('50ba51f2-13d4-4bf6-8c17-769dee2997ec','Rahman@gmail.com','Rahman','$2a$10$xXKn3H6ViAEeczEDz0CxduuAvo0eEX8MfdE8RzOkZI72Oy6e2X6Fa','company','2020-01-08 12:02:31','2020-01-08 12:02:31'),('540bd6ce-3d54-4f7e-a985-29744633ec10','arkademy@mail.com','arkademy','$2a$10$sE5t.kQ77dI1DDx1oVR1L.nERTWZ2gXubUgXtlsm8gTRBndkeLi9G','company','2020-01-02 03:56:25','2020-01-02 03:56:25'),('5942c5b0-bd36-4cd4-baca-5bbdde31ed77','company@mail.com','company','$2a$10$ZBz7dYz9AISO4aOwARdUcuT2qxxHMZT6UVl7fh23ZOuBcPF.7MhkW','company','2020-01-01 09:40:37','2020-01-01 09:40:37'),('6105a283-5ab6-4759-a947-3570638e7008','aaaaa@aaaaa.aaaa','aaaa','$2a$10$qZV7r5n5dDcftiGPVrUN.e1vpvvLAlos/dAwcFo37B9PmavYU3OSa','company','2020-01-01 12:23:21','2020-01-01 12:23:21'),('64fed9d1-cf3f-483b-98f2-9ae4975d73a5','steam@mail.com','steam','$2a$10$AjFcrKhjBvR5.uWNwzF37eIXrB5.oNHb/RX/fcaUiq6y718K1DsWa','company','2019-12-25 19:23:38','2019-12-25 19:23:38'),('679f51f7-8caf-4a4b-b87e-bdda98a74847','aoba@mail.com','aoba','$2a$10$citGWuD20ALlXN1aY3ppBOhnkDGxNzvWc0NkRZwTVGl0DFQ4EjeM6','engineer','2019-12-19 13:30:22','2019-12-19 13:30:22'),('6bf40859-4e5f-4f6b-b72f-c34909d4c454','valve@mail.com','valve','$2a$10$jP7s6eLpXGWe/hTNaCWiuOYVODakb/ei46ib5O/hfVB0QL9nUohly','company','2019-12-26 10:50:05','2019-12-26 10:50:05'),('70afe55e-0672-4c58-a31e-d6763afe3ba7','bayu@gmail.com','Bayu','$2a$10$aFVGh1xh7JfG5lFlonS25u0wcm8LVikAAhNZT0kZqOlDMsHzMTmKS','engineer','2020-01-03 10:36:13','2020-01-03 10:36:13'),('747cb7ce-3caf-4851-ad33-ce4948f4a683','elonmusk@mail.com','elon','$2a$10$6xcolA/1/NQ1e1kFPCn4JeCFN1x8oC9hLN8cTWNYm/R3gWJ3NjQJq','engineer','2019-12-25 21:15:47','2019-12-25 21:15:47'),('7596dc0c-6700-4370-bef4-0045e16e19fd','gg@dd.bb','fghjj','$2a$10$Z3zitTgRMObx7LpAZJ/ofOKIgVOUKQDUHklAO/tPMVb45vfwHD9h6','engineer','2020-01-01 12:22:05','2020-01-01 12:22:05'),('7820e2f3-a31e-4acc-96db-f84788c61da2','Kk@kk.com','Kk','$2a$10$jj65ryxRbFO96w7AVBFqNOn9wUh8/p6HZOtvoiXNnAiL874niD8WK','company','2020-01-07 14:54:41','2020-01-07 14:54:41'),('7c44c4ed-d0fc-4c45-9443-45ccf6c35574','Hh@hh.com','Hh','$2a$10$J.z8wgrL9sPAvzax8IBb4uIbAPLE0ybgPACQB4Y/q1tdN7/CNfRXC','engineer','2020-01-07 14:50:05','2020-01-07 14:50:05'),('83720059-0ea4-4b42-925e-3d764757744c','melindagates@mail.com','melindagates','$2a$10$Zvx7ngZKFBSlXIV5Hdgxbuu/vPlvG.mGI.FFdOtAOoqbOBNkONCnS','engineer','2019-12-19 09:54:09','2019-12-19 09:54:09'),('87ae747c-624a-421a-a975-696662f42ffc','stevejobs@mail.com','stevejobs','$2a$10$53FfM/95lnZbEeZQPTiYi.F08ZizJCwiiJeprtu.kBvLJO2DAYad2','engineer','2019-12-19 09:54:09','2019-12-19 09:54:09'),('8c620fff-6da9-4474-afcf-aad5772c8af8','billgates@mail.com','billgates','$2a$10$gX6PavOnolhF/nJRJNDy9OZDGrmZVqevstUeQePVovEF1BXnykVFO','engineer','2019-12-19 09:54:09','2019-12-19 09:54:09'),('919074c8-640c-4c9c-8a9e-dcc420d1c829','haris@mail.com','haris','$2a$10$miqExjUxkKLXos2A4Zfa6.aRgi52MJW3Jg5reQQfmlb1CtnyxbReO','engineer','2019-12-26 10:45:45','2019-12-26 10:45:45'),('99269cbf-cba3-4d7a-aeaa-33443d059f08','shigure@mail.com','shigure','$2a$10$lC0iP/4J3cdS7GetwSFGM..s17291YPw7ktGBcRLJ5xXK/O2YQn3W','engineer','2020-01-03 09:11:41','2020-01-03 09:11:41'),('9a7849e3-7cc3-4e83-a861-16acbd628c79','twitter@mail.com','twitter','$2a$10$o/NChjBZIkbF0vdkMbcOGO7mmNHVMeCjs9StgG8YnYNFvniheF8gC','company','2019-12-25 19:02:19','2019-12-25 19:02:19'),('9af8ec06-fe66-40a5-b5c6-e500c91b8068','randi@mail.com','randizuck','$2a$10$zhX8lDkz8WHdi1.HNNndE.T3OVnQBE9VaJ6/qWgrqsWjW7G5GhkHS','engineer','2019-12-19 09:54:09','2019-12-19 09:54:09'),('9c391035-23cc-4157-bc73-96a7d97dc319','itcompany@mail.com','itcompany','$2a$10$Z4kWy9fKJ.lQ6XCRW0YWqOeisGvnYJa.U.zpAQlDeo9TGXCT0/q52','company','2020-01-21 08:19:33','2020-01-21 08:19:33'),('aa1b647a-1dbd-4f61-9223-26319dc3e724','youtube@mail.com','youtube','$2a$10$.6GJN9opMkt9hM3KaMNac.brxCLRQhA9r4byjfFWVgAmX6ga8MVCW','company','2019-12-25 19:04:49','2019-12-25 19:04:49'),('aa596afa-f718-4b5b-a943-dece26f277fb','kojima@mail.com','hideokojima','$2a$10$LlleLgcwmLTNMXNH5Fa7K.Iw3jKBjnRSGFNr5ap6qKDfXvR5rpCl.','engineer','2019-11-19 13:03:29','2019-11-19 13:03:29'),('be0c4dd8-7a15-4af4-9310-8cd7df31c0b8','vkvk@fjcjcj.b','ofkcj','$2a$10$8fL8LrgvOConk6gaMaKuh.vf6Vvv7eXmoLiQ4TmUwzB..pJcEv2Ga','company','2020-01-01 12:50:40','2020-01-01 12:50:40'),('c4df5950-536b-476f-bade-2e10db142645','nicovideo@mail.com','nicovideo','$2a$10$qdR70OSgyddJdDEJwJtAeuT6HJFvluxwsJvKx8K0/vWMTsNoTHC/a','company','2019-12-25 19:08:37','2019-12-25 19:08:37'),('c6930c80-7cbb-4a92-8dcb-3b2a05109e3a','qq@qq.qq','qq','$2a$10$uRxIB6ZjX3M4VCAzpzwlfeVQ3E2Sj8kDjgzz0xFwVjDDsQ4u8NLtG','company','2020-01-01 10:17:29','2020-01-01 10:17:29'),('cf370a51-bdac-4259-8728-85873a027ef9','jdjdjdj@dhd.bb','zbzhxjgkgk','$2a$10$dz9/lOjukB92Xmxnq6OEaO2w76EUyEkPKKU1toNhrcnvaUF3Y2baC','engineer','2020-01-01 12:24:21','2020-01-01 12:24:21'),('d4704c1c-847c-4014-aea3-ce84f52179b5','tokopedia@mail.com','tokopedia','$2a$10$.Pxc94lwOMyH8EhUGIrkMeom//.bVq2JhsL4FpXYlVI3.c/Pm/Ssq','company','2019-12-25 19:26:44','2019-12-25 19:26:44'),('d68d267e-3c5c-42b8-913f-114fe16901b0','mycomp@mail.com','mycompany','$2a$10$Krd5iEiRv7FgsvXmDmywrelxa13rw7aAlS0zYXWBwrbBDk8NsvOgu','engineer','2020-01-04 09:16:17','2020-01-04 09:16:17'),('daa7d924-af60-44bd-8607-a8211d847659','aa@aa.aa','aa','$2a$10$xHrunPBqjn5vP6PDV0T75OvaGNjhdqISecNr1Y.M7YRXRm1yM2Qz2','engineer','2020-01-01 10:16:48','2020-01-01 10:16:48'),('e11b63a5-b9da-4ee0-a67e-5fdffadb30b0','pixiv@mail.com','pixiv','$2a$10$kSXwUUaIE6xZ38rbXlQg/.pp5m7BZAjjP3EslQh1guOp.yj2ZRc0a','company','2019-12-25 19:06:25','2019-12-25 19:06:25'),('ef26d451-664b-48d0-b7cc-b74717b5cf32','jackdorsey@mail.com','jackdorsey','$2a$10$ccB6odeQKWovwn4kxf1u/O47SYongRL2RlQrPfnWC8bNqUwesui3u','engineer','2019-12-19 13:35:02','2019-12-19 13:35:02'),('f06b881c-3a13-46c8-b3dd-314d353d5659','new@mail.com','new','$2a$10$kxvVHB4KboOwVMc0omP...PsNGvuh5DZW3SvKqORRZcDCWyTThdgq','engineer','2020-01-01 08:19:27','2020-01-01 08:19:27'),('f7ce2416-7784-4115-97e1-829948a7d321','hapidmochj12@gmail.com','hapidmochj','$2a$10$ldz8j8/xxHza6PbIiPy/a.vDN6JFMlyfnsg13pIJI0cP830I/dTja','engineer','2019-12-19 09:54:09','2019-12-19 09:54:09');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-22 10:50:28
