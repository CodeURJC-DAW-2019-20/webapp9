-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: web_fase_1
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
-- Table structure for table `teams_on_game`
--

DROP TABLE IF EXISTS `teams_on_game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams_on_game` (
  `team_id_team` int NOT NULL,
  `game_id_game` int NOT NULL,
  `result` int NOT NULL,
  `winner` tinyint(1) DEFAULT NULL,
  `date` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_da_0900_ai_ci NOT NULL,
  PRIMARY KEY (`team_id_team`,`game_id_game`),
  KEY `fk_team_has_game_game1_idx` (`game_id_game`),
  KEY `fk_team_has_game_team1_idx` (`team_id_team`),
  CONSTRAINT `fk_team_has_game_game1` FOREIGN KEY (`game_id_game`) REFERENCES `game` (`id_game`),
  CONSTRAINT `fk_team_has_game_team1` FOREIGN KEY (`team_id_team`) REFERENCES `team` (`id_team`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_da_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams_on_game`
--

LOCK TABLES `teams_on_game` WRITE;
/*!40000 ALTER TABLE `teams_on_game` DISABLE KEYS */;
<<<<<<< HEAD:FinalDataSQL/web_fase_1_teams_on_game.sql
=======
INSERT INTO `teams_on_game` VALUES (1,1,4,1,'March 16'),(2,1,3,0,'March 16'),(2,2,5,0,'March 16'),(3,2,6,1,'March 16');
>>>>>>> pruebastorneo:Dump20200223/web_fase_1_teams_on_game.sql
/*!40000 ALTER TABLE `teams_on_game` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

<<<<<<< HEAD:FinalDataSQL/web_fase_1_teams_on_game.sql
-- Dump completed on 2020-02-24 19:26:49
=======
-- Dump completed on 2020-02-23 22:41:53
>>>>>>> pruebastorneo:Dump20200223/web_fase_1_teams_on_game.sql
