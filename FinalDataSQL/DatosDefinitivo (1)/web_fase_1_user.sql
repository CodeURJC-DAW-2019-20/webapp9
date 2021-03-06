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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `UserName` varchar(45) NOT NULL,
  `rol_id_rol` int NOT NULL,
  `email` varchar(90) NOT NULL DEFAULT 'default@default',
  `password` varchar(15) NOT NULL DEFAULT '" "',
  `name` varchar(45) NOT NULL DEFAULT 'dafaultname',
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `UserName_UNIQUE` (`UserName`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_User_Rol_idx` (`rol_id_rol`),
  CONSTRAINT `fk_User_Rol` FOREIGN KEY (`rol_id_rol`) REFERENCES `rol` (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Admin',1,'admin@gmail.com','123','Admin',NULL),(2,'Willy',2,'willy@gmail.com','123','Willy',NULL),(3,'Veggeta',2,'veggeta@gmail.com','123','Veggeta',NULL),(4,'Rubius',2,'rubius@gmail.com','123','Rubius',NULL),(5,'Tetro',2,'tetro@gmail.com','123','Tetro',NULL),(6,'Rocketo',2,'rocketo@gmail.com','123','Rocketo',NULL),(7,'Leugo',2,'leugo@gmail.com','123','Leugo',NULL),(8,'Cachim',2,'cachim@gmail.com','123','Cachim',NULL),(9,'Cachom',2,'cachom@gmail.com','123','Cachom',NULL),(10,'Eskere',2,'eskere@gmail.com','123','Eskere',NULL),(12,'Danielo',2,'danielo@gmail.com','123','Danielo',NULL),(13,'Danichu',2,'danichu@gmail.com','123','Danichu',NULL),(14,'alo',2,'alo@gmail.com','123','Alo',NULL),(15,'ddd',2,'ddd@gmail.com','123','ddd',NULL),(16,'aaa',2,'aaa@gmail.com','123','aaa',NULL),(17,'user1',2,'usuer1@gmail.com','123','u1',NULL),(18,'user2',2,'usuer2@gmail.com','123','u2',NULL),(19,'user3',2,'usuer3@gmail.com','123','u3',NULL),(20,'pepegamer',2,'pepe@gmail.com','123','Pepe',NULL),(21,'papo',2,'papo@gmail.com','123','papo',NULL),(22,'Postman Pro',2,'pepi@gmail.com','123','pepi',NULL),(23,'Postman',2,'postman@gmail.com','123','Postman User',NULL),(24,'Postman2',2,'postman2@gmail.com','123','Postman User 2',NULL),(25,'Admin2',1,'admin2@gmail.com','123','Admin2',NULL),(26,'RubiusZ',2,'rubiusz@gmail.com','123','RubiusZ',NULL);
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

-- Dump completed on 2020-04-10 13:41:33
