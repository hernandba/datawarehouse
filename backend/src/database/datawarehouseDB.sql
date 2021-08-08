CREATE DATABASE  IF NOT EXISTS `datawarehouse` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `datawarehouse`;
-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: datawarehouse
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `Channels`
--

DROP TABLE IF EXISTS `Channels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Channels` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Channels`
--

LOCK TABLES `Channels` WRITE;
/*!40000 ALTER TABLE `Channels` DISABLE KEYS */;
INSERT INTO `Channels` VALUES (1,'whatsapp'),(2,'facebook'),(3,'instagram'),(4,'twitter');
/*!40000 ALTER TABLE `Channels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cities`
--

DROP TABLE IF EXISTS `Cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cities` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `country_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_city_country_idx` (`country_id`),
  CONSTRAINT `fk_city_country` FOREIGN KEY (`country_id`) REFERENCES `Countries` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cities`
--

LOCK TABLES `Cities` WRITE;
/*!40000 ALTER TABLE `Cities` DISABLE KEYS */;
INSERT INTO `Cities` VALUES (1,'Buenos Aires',1),(2,'Córdoba',1),(3,'Bogotá',2),(4,'Cali',2),(5,'Medellín',2),(6,'Santiago',3),(7,'Valparaíso',3),(8,'Atacama',3),(9,'Canelones',4),(10,'Maldonado',4),(11,'Montevideo',4),(12,'Ciudad de México',5),(13,'Tijuana',5),(14,'Monterrey',5),(15,'Miami',6),(16,'Austin',6),(17,'Lima',7),(25,'Perth',29),(26,'Berlin',33),(27,'Nueva York',6),(28,'La Paz',31),(29,'Asunción',30),(30,'Toronto',32),(31,'Barranquilla',2);
/*!40000 ALTER TABLE `Cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Companies`
--

DROP TABLE IF EXISTS `Companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Companies` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `city_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cmpny_city_idx` (`city_id`),
  CONSTRAINT `fk_cmpny_city` FOREIGN KEY (`city_id`) REFERENCES `Cities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Companies`
--

LOCK TABLES `Companies` WRITE;
/*!40000 ALTER TABLE `Companies` DISABLE KEYS */;
INSERT INTO `Companies` VALUES (1,'Abata','8237 Bunting Trail','bstathoro@businessweek.com','319-917-8752',1),(2,'Voolia','36855 Ryan Place','arau0@tripadvisor.com','884-198-9748',13),(3,'Geba','16409 Hayes Court','sblazevic1@discovery.com','195-999-6399',13),(4,'Eimbee','2 Glendale Junction','cpearne2@reddit.com','330-435-9217',2),(5,'Brightdog','556 Almo Terrace','lsaunter3@noaa.gov','402-505-3527',8),(6,'Agimba','56837 Debra Point','rdavidescu4@miitbeian.gov.cn','678-967-9354',8),(7,'Dabtype','8330 Buena Vista Pass','dblondelle5@google.com.br','633-414-5845',12),(8,'Jabbersphere','4 Fordem Lane','ofreiberg6@rakuten.co.jp','444-960-8499',11),(9,'Demivee','002 Clemons Drive','dpoulglais7@artisteer.com','976-749-2228',11),(10,'Gabspot','3 Manufacturers Point','mlund8@google.cn','338-673-8291',15),(11,'Jaloo','26646 Kensington Circle','lguilleton9@sohu.com','127-346-8286',8),(12,'Tavu','9 Gerald Lane','cmelmorea@google.nl','950-426-7704',7),(13,'Dabtype','6991 Messerschmidt Park','mgeffingerb@dagondesign.com','496-447-0036',14),(14,'Jatri','617 Meadow Valley Drive','dbiggadykec@hud.gov','129-945-6921',15),(15,'Feedspan','71 Cottonwood Street','mheigoldd@ustream.tv','121-255-6179',1),(16,'Yombu','08 Loomis Avenue','lmontaguee@google.de','866-298-8098',1),(17,'Skilith','4399 Farragut Way','jdronf@fda.gov','698-125-5323',6),(18,'Photobug','49784 Northview Circle','jbeabyg@dedecms.com','335-600-7033',6),(19,'Skidoo','5203 Northport Junction','jstedmanh@aboutads.info','715-627-4721',5),(20,'Oyoyo','6 Morrow Parkway','klogsdaili@craigslist.org','980-439-4373',15),(21,'Vinder','2 Bobwhite Pass','hcoleyj@usgs.gov','381-595-8140',15),(22,'Youspan','05 Warbler Avenue','cmacalesterk@alexa.com','413-157-8896',5),(23,'Browseblab','3357 Sherman Circle','nburberryl@amazon.de','620-371-7557',4),(24,'Devbug','99 Weeping Birch Way','jhanrettym@alexa.com','154-566-9230',2),(25,'Voolith','0745 Johnson Point','dstorrarn@weebly.com','879-405-7719',5),(26,'Abata','8237 Bunting Trail','bstathoro@businessweek.com','319-917-8752',1),(27,'KittySoft','Calle Falsa 1234','gatito@gatosof.com','3173456789',4);
/*!40000 ALTER TABLE `Companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Contacts`
--

DROP TABLE IF EXISTS `Contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contacts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `company_id` int unsigned NOT NULL,
  `city_id` int unsigned DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `interested` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_contact_cmpny_idx` (`company_id`),
  KEY `fk_contact_city_idx` (`city_id`),
  CONSTRAINT `fk_contact_city` FOREIGN KEY (`city_id`) REFERENCES `Cities` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_contact_cmpny` FOREIGN KEY (`company_id`) REFERENCES `Companies` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contacts`
--

LOCK TABLES `Contacts` WRITE;
/*!40000 ALTER TABLE `Contacts` DISABLE KEYS */;
INSERT INTO `Contacts` VALUES (1,'Nicol','Antonazzi','Structural Analysis Engineer','nantonazzi0@cpanel.net',23,4,'7515 Bayside Circle','25'),(2,'Pieter','Duddridge','Civil Engineer','pduddridge1@360.cn',13,14,'097 Fordem Terrace','50'),(3,'Justino','Gosnell','Senior Developer','jgosnell2@ca.gov',16,1,'152 Lien Point','0'),(4,'Aline','Duding','Environmental Specialist','aduding3@about.me',1,1,'20 Maple Wood Center','0'),(5,'Mil','Katte','Assistant Manager','mkatte4@tinypic.com',7,12,'17217 Grim Drive','25'),(6,'Glen','Coatham','Staff Scientist','gcoatham5@dion.ne.jp',25,5,'4 Sauthoff Park','75'),(7,'Rachel','Clayhill','Professor','rclayhill6@pbs.org',8,11,'6 Kim Plaza','0'),(8,'Lara','McSharry','Nurse Practicioner','lmcsharry7@imgur.com',2,13,'59 John Wall Park','75'),(9,'Ram','Gulk','Graphic Designer','rgulk8@telegraph.co.uk',17,6,'99 Cardinal Point','0'),(10,'Rustie','Dudney','Cost Accountant','rdudney9@etsy.com',3,13,'45121 Aberg Pass','25'),(11,'Theodora','Jodrelle','VP Sales','tjodrellea@dagondesign.com',12,7,'93 Northfield Hill','75'),(12,'Etty','Yearsley','Civil Engineer','eyearsleyb@who.int',4,2,'20 Walton Point','100'),(13,'Liesa','McGlaughn','Media Manager I','lmcglaughnc@apple.com',16,1,'68457 Tomscot Crossing','50'),(14,'Sue','Hartshorne','Biostatistician II','shartshorned@yolasite.com',4,2,'56586 Roxbury Alley','0'),(15,'Hilliard','Jordon','Accountant III','hjordone@wufoo.com',2,13,'2 Maple Wood Alley','0'),(16,'Pate','Carneck','Pharmacist','pcarneckf@bloglovin.com',18,6,'2259 1st Trail','25'),(17,'Kellyann','Boundley','Tax Accountant','kboundleyg@samsung.com',26,1,'37081 Schurz Street','50'),(18,'Kial','Baud','Food Chemist','kbaudh@histats.com',21,15,'167 Colorado Road','75'),(19,'Cash','Emmines','Quality Control Specialist','cemminesi@google.de',13,14,'899 Ruskin Lane','0'),(20,'Audra','Roydon','Pharmacist','aroydonj@uol.com.br',11,8,'31095 Ohio Way','100'),(21,'Bunni','Russon','Assistant Professor','brussonk@printfriendly.com',11,8,'92156 Randy Place','25'),(22,'Ignacius','Stowell','Information Systems Manager','istowelll@purevolume.com',15,1,'8385 Northview Place','0'),(23,'Pierette','Airdrie','Research Associate','pairdriem@geocities.jp',14,15,'01321 Bunting Way','0'),(24,'Stephie','Tripony','Desktop Support Technician','striponyn@sina.com.cn',17,6,'4 Carey Point','75'),(25,'Caty','Henighan','VP Product Management','chenighano@xrea.com',6,8,'4 Scott Place','25'),(26,'Ernesto','Wickey','Assistant Manager','ewickeyp@about.com',16,1,'94331 Pennsylvania Plaza','0'),(27,'Aryn','Lilion','Associate Professor','alilionq@mapy.cz',10,15,'021 Havey Trail','50'),(28,'Bastien','Breinl','Electrical Engineer','bbreinlr@gravatar.com',14,15,'17710 Northview Plaza','75'),(29,'Aliza','Giabuzzi','Help Desk Operator','agiabuzzis@ihg.com',14,15,'14851 Mifflin Court','100'),(30,'Gnni','Rosekilly','Senior Developer','grosekillyt@vk.com',13,14,'07 Village Circle','50'),(31,'Jeremias','Pleass','Environmental Tech','jpleassu@bizjournals.com',14,15,'04 Vermont Way','25'),(32,'Florentia','Cohani','Quality Control Specialist','fcohaniv@ucla.edu',22,5,'249 Fallview Point','0'),(33,'Haily','Gask','Physical Therapy Assistant','hgaskw@mozilla.com',18,6,'1 East Circle','25'),(34,'Massimo','Buttle','Programmer Analyst I','mbuttlex@addtoany.com',5,8,'1 Portage Avenue','0'),(35,'Dyane','Eyton','General Manager','deytony@fastcompany.com',18,6,'9195 Lakeland Center','75'),(36,'Moyra','Wonham','Account Coordinator','mwonhamz@yahoo.com',18,6,'48 Jenifer Circle','100'),(37,'Edward','Willes','Desktop Support Technician','ewilles10@e-recht24.de',12,7,'4 Charing Cross Lane','50'),(38,'Blondie','Louth','Tax Accountant','blouth11@clickbank.net',17,6,'35 Di Loreto Court','0'),(39,'Ferris','Farloe','Database Administrator IV','ffarloe12@hostgator.com',5,8,'4 Donald Center','25'),(40,'Phillida','Drife','Account Coordinator','pdrife13@qq.com',24,2,'71 Rockefeller Junction','100'),(41,'Chane','Cheetam','Senior Financial Analyst','ccheetam14@photobucket.com',24,2,'8219 Raven Hill','75'),(42,'Kandace','Charrett','Senior Developer','kcharrett15@yolasite.com',9,11,'52 Dexter Center','50'),(43,'Lorita','Atty','Assistant Manager','latty16@unblog.fr',3,13,'9 Gulseth Place','25'),(44,'Dani','Vaugham','Account Coordinator','dvaugham17@wired.com',19,5,'14811 Ridgeview Drive','0'),(45,'Aldous','Wigfield','Desktop Support Technician','awigfield18@jigsy.com',26,1,'48 Goodland Alley','50'),(46,'Annalise','Verity','Quality Engineer','averity19@free.fr',9,11,'8962 Melvin Park','75'),(54,'Don','Ramon','Vecino','vecindad@chavo.com',5,12,'Av Insurgentes 890','75'),(55,'Doña','Flor','Vecina','flor@vecindad.com',8,12,'Av libertad 678','50'),(56,'Roberto','Gomez','Humorista','elchavo@vecindad.com',9,12,'Av Roma 654','75'),(57,'Mike','Jagger','Singer','thestones@rolling.com',6,27,'One infinte loop 190','100'),(58,'Patricio','Estrella','Bufon','patrick@sponge.com',3,16,'BajoRoca 123','50'),(59,'Sponge','Bobby','Friend','sponge@pants.com',6,27,'cxaecaec','25');
/*!40000 ALTER TABLE `Contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Contacts_Channels`
--

DROP TABLE IF EXISTS `Contacts_Channels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contacts_Channels` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `contact_id` int unsigned NOT NULL,
  `channel_id` int unsigned NOT NULL,
  `username` varchar(45) NOT NULL,
  `preference_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_contact_idx` (`contact_id`),
  KEY `fk_channel_idx` (`channel_id`),
  CONSTRAINT `fk_channel` FOREIGN KEY (`channel_id`) REFERENCES `Channels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_contact` FOREIGN KEY (`contact_id`) REFERENCES `Contacts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contacts_Channels`
--

LOCK TABLES `Contacts_Channels` WRITE;
/*!40000 ALTER TABLE `Contacts_Channels` DISABLE KEYS */;
INSERT INTO `Contacts_Channels` VALUES (1,38,3,'wfulle0',1),(2,41,3,'gpearse1',3),(3,42,2,'sguilfoyle2',2),(4,13,4,'tscutt3',3),(5,5,4,'dwoolveridge4',1),(6,35,2,'ephilbrook5',3),(7,42,2,'cscreeton6',1),(8,38,4,'dheaseman8',3),(9,14,3,'ghanburry9',3),(10,2,3,'tkroppa',1),(11,42,2,'ebogiesb',2),(12,12,3,'gpleassd',2),(13,46,4,'ebraverye',3),(14,31,4,'rscoterboshf',2),(15,37,2,'lfaraganh',2),(16,17,4,'jslefordi',2),(17,24,2,'gscoggansj',2),(18,37,3,'dportek',1),(19,37,3,'sphoebel',2),(20,15,2,'tfransmann',2),(21,8,2,'efedorskip',1),(22,5,3,'mhastewellq',2),(23,13,4,'swontnerr',2),(24,10,2,'pabramows',1),(25,8,2,'tfairyt',3),(26,28,2,'ugrabehamu',1),(27,31,4,'hpigromev',1),(28,40,2,'cunderwoodw',3),(29,1,3,'agiovannillix',1),(31,36,3,'jjewersz',2),(32,32,4,'sgrafom10',1),(33,7,2,'amcfie11',2),(34,1,4,'jikringill12',2),(35,12,4,'lsibun13',3),(36,12,4,'esergeant14',3),(37,2,4,'mgolsby15',2),(38,31,2,'gtrembey16',3),(39,11,4,'aaluard17',1),(40,6,2,'atomaszewski18',2),(41,9,4,'tdunphie19',3),(42,37,4,'wbertelsen1a',1),(43,17,4,'cfavey1b',2),(44,24,3,'dplomer1c',3),(45,14,2,'cgibling1d',2),(46,15,1,'654-278-8066',1),(47,24,1,'165-712-7613',3),(48,7,1,'643-663-9758',1),(49,21,1,'618-516-7968',2),(50,7,1,'3204567901',3),(51,17,1,'388-965-8803',1),(52,44,1,'844-638-3320',1),(53,12,1,'222-978-9618',2),(54,36,1,'771-394-7212',3),(55,31,1,'801-997-5323',3),(56,16,1,'318-578-2310',3),(57,36,1,'842-292-9967',2),(58,14,1,'648-209-3590',2),(59,11,1,'179-919-8208',3),(60,14,1,'372-434-0331',2),(61,29,1,'876-740-3949',1),(62,37,1,'600-603-3803',3),(63,17,1,'348-217-1584',1),(64,2,1,'556-702-2403',1),(65,46,1,'220-771-9151',2),(66,16,1,'206-939-4856',3),(67,1,1,'3172543430',1),(70,54,1,'3208907456',3),(71,54,3,'ramoncio',3),(72,54,4,'ramoncito',2),(75,58,2,'thepatrickstar',1),(76,58,3,'@patrickstar',2),(78,59,3,'@thesponge',1);
/*!40000 ALTER TABLE `Contacts_Channels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Countries`
--

DROP TABLE IF EXISTS `Countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Countries` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `region_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_country_region_idx` (`region_id`),
  CONSTRAINT `fk_country_region` FOREIGN KEY (`region_id`) REFERENCES `Regions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Countries`
--

LOCK TABLES `Countries` WRITE;
/*!40000 ALTER TABLE `Countries` DISABLE KEYS */;
INSERT INTO `Countries` VALUES (1,'Argentina',1),(2,'Colombia',1),(3,'Chile',1),(4,'Uruguay',1),(5,'México',2),(6,'Estados Unidos',2),(7,'Perú',1),(29,'Australia',8),(30,'Paraguay',1),(31,'Bolivia',1),(32,'Canadá',2),(33,'Alemania',7);
/*!40000 ALTER TABLE `Countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Preferences`
--

DROP TABLE IF EXISTS `Preferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Preferences` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `preference` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Preferences`
--

LOCK TABLES `Preferences` WRITE;
/*!40000 ALTER TABLE `Preferences` DISABLE KEYS */;
INSERT INTO `Preferences` VALUES (1,'Sin preferencia'),(2,'Canal favorito'),(3,'No molestar');
/*!40000 ALTER TABLE `Preferences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Profiles`
--

DROP TABLE IF EXISTS `Profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Profiles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `profile` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profiles`
--

LOCK TABLES `Profiles` WRITE;
/*!40000 ALTER TABLE `Profiles` DISABLE KEYS */;
INSERT INTO `Profiles` VALUES (1,'admin'),(2,'basic');
/*!40000 ALTER TABLE `Profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Regions`
--

DROP TABLE IF EXISTS `Regions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Regions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Regions`
--

LOCK TABLES `Regions` WRITE;
/*!40000 ALTER TABLE `Regions` DISABLE KEYS */;
INSERT INTO `Regions` VALUES (1,'Sudamérica'),(2,'Norteamérica'),(7,'Europa'),(8,'Oceania');
/*!40000 ALTER TABLE `Regions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `profile_id` int unsigned NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_profiles_idx` (`profile_id`),
  CONSTRAINT `fk_users_profiles` FOREIGN KEY (`profile_id`) REFERENCES `Profiles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Hernán','Belalcázar','hernandba@gmail.com',1,'frida123'),(2,'AnaM','Maya','anny_3006@hotmail.com',2,'aquiles123'),(3,'Cathe','Belalcázar','cathe10@hotmail.com',2,'nico123'),(6,'Yudy','Alegria','yudialegria@hotmail.com',2,'martina123'),(10,'Silvio','Belalcazar','shbel@gmail.com',2,'mateo123');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-07 19:28:37
