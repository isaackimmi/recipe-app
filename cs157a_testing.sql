-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: cs157a_testing
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `Author_ID` int NOT NULL AUTO_INCREMENT,
  `Author_Name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Author_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (3,'Michael Jackson'),(4,'Timmy'),(5,'Billy'),(6,'Kevin'),(7,'Leon');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preparations`
--

DROP TABLE IF EXISTS `preparations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preparations` (
  `Preparation_ID` int NOT NULL AUTO_INCREMENT,
  `Preparation` varchar(45) DEFAULT NULL,
  `Measurement` varchar(45) DEFAULT NULL,
  `Instruction` varchar(45) DEFAULT NULL,
  `Ingredients` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Preparation_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preparations`
--

LOCK TABLES `preparations` WRITE;
/*!40000 ALTER TABLE `preparations` DISABLE KEYS */;
INSERT INTO `preparations` VALUES (2,'You need a blender and a banana, and milk','1 cup of banana and half a cup of milk','you have to put it inside a blender','banana and milk'),(3,'You need a knife and some chocolate','1 candy bar','You cut the chocolate','Chocolate'),(4,'You need a rock and a strong arms','1 cup rock ','you hit the pineapple with the rock','pineapple,rock'),(5,'Get any bread and the finest sprinkles','1 slice of bread and 10 lbs of sprinkles','you butter the bread and add sprinkles','sprinkles, bread, butter');
/*!40000 ALTER TABLE `preparations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `Recipes_ID` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(45) DEFAULT NULL,
  `Description` varchar(45) DEFAULT NULL,
  `Preparation_ID` int DEFAULT NULL,
  `Rating` varchar(45) DEFAULT NULL,
  `Total_Time` varchar(45) DEFAULT NULL,
  `Publish_Date` varchar(45) DEFAULT NULL,
  `Cuisine` varchar(45) DEFAULT NULL,
  `Author_ID` int DEFAULT NULL,
  PRIMARY KEY (`Recipes_ID`),
  KEY `Preparation_ID_idx` (`Preparation_ID`),
  KEY `Author_ID_idx` (`Author_ID`),
  CONSTRAINT `Author_ID` FOREIGN KEY (`Author_ID`) REFERENCES `author` (`Author_ID`),
  CONSTRAINT `Preparation_ID` FOREIGN KEY (`Preparation_ID`) REFERENCES `preparations` (`Preparation_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (3,'Banana Splenda','It\'s a banana smoothie',NULL,'3.4','10 minutes','12-4-2022','Middle East',NULL),(4,'Chocolate','It\'s chocolate',NULL,'5','10 minutes','12-5-2022','American',NULL),(5,'Pineapple','It\'s a Pineapple',NULL,'2','1 min','12-6-2022','Mexican',NULL),(6,'Milk Juice','It\'s a mixture of milk and juice',NULL,'1','15 hrs','12-3-2022','Fairyland',NULL),(7,'Fairy bread','It\'s bread with sprinkles and butter',NULL,'5','5 min','12-20-2022','Australian',NULL);
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-04 11:52:40
