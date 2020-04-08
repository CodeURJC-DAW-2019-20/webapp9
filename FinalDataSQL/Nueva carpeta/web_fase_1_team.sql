-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: web_fase_1
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
  `id_team` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `elo` int NOT NULL,
  `wins` int NOT NULL DEFAULT '0',
  `losses` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_team`),
  UNIQUE KEY `id_equipo_UNIQUE` (`id_team`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (0,'\" \"',0,0,0),(1,'The flyers',330,21,9),(2,'The JS Scripters',137,12,20),(3,'Salty People',1132,2,5),(4,'Su mama',12305,2,1),(13,'Lololo',1000,0,0),(14,'los ps',1000,0,0),(15,'POSTMAN 1',1000,0,0),(16,'POSTMAN 2',1000,0,0),(17,'Postman Aux Pro 2',1000,1,0),(18,'POSTMAN 3',0,0,0),(19,'The finals',1000,21,3),(20,'DEMO Team',1000,0,0),(24,'reggaae',1000,0,0),(25,'DEMO Team',1000,0,0),(28,'AngularTeam',1000,0,0),(29,'proando2',1000,0,0),(30,'postprueba',1000,0,0),(31,'TOMA',1000,0,0),(32,'TOMATOMA',1000,0,0),(33,'Toma3',1000,0,0),(34,'Toma4',1000,0,0),(35,'Toma5',1000,0,0),(36,'Toma7',1000,0,0),(37,'toma8',1000,0,0),(38,'toma9',1000,0,0),(39,'oloaas',1000,0,0),(40,'polo',1000,0,0),(41,'polos',1000,0,0),(42,'venga',1000,0,0),(43,'porfasss',1000,0,0),(44,'yaesta',1000,0,0),(45,'yaesta2',1000,0,0),(46,'yaesta3',1000,0,0),(47,'yaesta4',1000,0,0);
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-08 14:16:08
