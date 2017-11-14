-- MySQL dump 10.13  Distrib 5.7.16, for osx10.12 (x86_64)
--
-- Host: us-cdbr-iron-east-05.cleardb.net    Database: heroku_54ce99cae833691
-- ------------------------------------------------------
-- Server version	5.6.36-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autogeneraratedpassword`
--

DROP TABLE IF EXISTS `autogeneraratedpassword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `autogeneraratedpassword` (
  `FID` int(11) NOT NULL AUTO_INCREMENT,
  `TOKEN` varchar(15) NOT NULL,
  `EXPIRYDATE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `GENERATIONDATE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `USER_UID` int(11) NOT NULL,
  `STATUS` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`FID`),
  KEY `fk_AUTOGENERARATEDPASSWORD_USER1_idx` (`USER_UID`),
  KEY `PASSWORDRESETSTATUS_idx` (`STATUS`),
  CONSTRAINT `PASSWORDRESETSTATUS` FOREIGN KEY (`STATUS`) REFERENCES `status` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_AUTOGENERARATEDPASSWORD_USER1` FOREIGN KEY (`USER_UID`) REFERENCES `user` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autogeneraratedpassword`
--

LOCK TABLES `autogeneraratedpassword` WRITE;
/*!40000 ALTER TABLE `autogeneraratedpassword` DISABLE KEYS */;
/*!40000 ALTER TABLE `autogeneraratedpassword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `autogeneraratedpasswordhistory`
--

DROP TABLE IF EXISTS `autogeneraratedpasswordhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `autogeneraratedpasswordhistory` (
  `FID` int(11) NOT NULL,
  `EXPIRYDATE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `STATUS` int(11) NOT NULL,
  `GENERATIONDATE` varchar(45) NOT NULL,
  `USER_UID` int(11) NOT NULL,
  PRIMARY KEY (`FID`),
  KEY `fk_AUTOGENERARATEDPASSWORDHISTORY_USER1_idx` (`USER_UID`),
  KEY `TOKEN_STATUS_idx` (`STATUS`),
  CONSTRAINT `TOKEN_STATUS` FOREIGN KEY (`STATUS`) REFERENCES `status` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_AUTOGENERARATEDPASSWORDHISTORY_USER1` FOREIGN KEY (`USER_UID`) REFERENCES `user` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autogeneraratedpasswordhistory`
--

LOCK TABLES `autogeneraratedpasswordhistory` WRITE;
/*!40000 ALTER TABLE `autogeneraratedpasswordhistory` DISABLE KEYS */;
INSERT INTO `autogeneraratedpasswordhistory` VALUES (1,'2017-08-08 11:35:47',8,'2017-08-08 14:10:06.000',81),(2,'2017-08-08 11:35:47',8,'2017-08-08 14:10:06.000',81),(3,'2017-08-08 11:35:47',1,'2017-08-08 14:11:17',81),(4,'2017-08-08 11:40:07',8,'2017-08-08 14:10:06.000',81);
/*!40000 ALTER TABLE `autogeneraratedpasswordhistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consumer`
--

DROP TABLE IF EXISTS `consumer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consumer` (
  `CID` int(11) NOT NULL AUTO_INCREMENT,
  `USERID` int(11) DEFAULT NULL,
  PRIMARY KEY (`CID`),
  KEY `UID_idx` (`USERID`),
  CONSTRAINT `CFUID` FOREIGN KEY (`USERID`) REFERENCES `user` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumer`
--

LOCK TABLES `consumer` WRITE;
/*!40000 ALTER TABLE `consumer` DISABLE KEYS */;
INSERT INTO `consumer` VALUES (41,301),(51,311),(61,351);
/*!40000 ALTER TABLE `consumer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dish`
--

DROP TABLE IF EXISTS `dish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dish` (
  `DID` int(11) NOT NULL AUTO_INCREMENT,
  `SERVICEPROVIDER_SPID` int(11) NOT NULL,
  `IMAGES_IID` int(11) NOT NULL DEFAULT '1',
  `NAME` varchar(45) NOT NULL,
  `AVAILABLE` int(1) NOT NULL DEFAULT '1',
  `CREATION` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `LASTMODIFYTIME` timestamp NULL DEFAULT NULL,
  `DISCRIPTION` text NOT NULL,
  `PRICE` double NOT NULL DEFAULT '0',
  `FOODCATRGORY_FCID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`DID`),
  KEY `fk_DISH_SERVICEPROVIDER1_idx` (`SERVICEPROVIDER_SPID`),
  KEY `fk_DISH_IMAGES1_idx` (`IMAGES_IID`),
  KEY `fk_DISH_FOODCATRGORY_idx` (`FOODCATRGORY_FCID`),
  CONSTRAINT `fk_DISH_IMAGES1` FOREIGN KEY (`IMAGES_IID`) REFERENCES `images` (`IID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_DISH_SERVICEPROVIDER1` FOREIGN KEY (`SERVICEPROVIDER_SPID`) REFERENCES `serviceprovider` (`SPID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=221 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dish`
--

LOCK TABLES `dish` WRITE;
/*!40000 ALTER TABLE `dish` DISABLE KEYS */;
INSERT INTO `dish` VALUES (141,1,201,'sadas',213,'2017-09-25 19:37:34','2017-09-25 19:37:32','12312',12312,2),(151,1,211,'qweqw',213,'2017-09-25 19:42:30','2017-09-25 19:42:28','adsd',123,2),(171,1,231,'rt',0,'2017-09-26 09:28:53','2017-09-26 09:28:53','',0,0),(181,1,261,'FFF',0,'2017-09-26 09:54:48','2017-09-26 09:54:48','sdasfsd',0,0),(191,5,291,'Opa',122,'2017-09-26 10:04:45','2017-09-26 10:04:45','hop',145,0),(201,1,591,'dsads',230,'2017-09-26 20:49:21','2017-09-26 20:49:20','adasd',12312,1);
/*!40000 ALTER TABLE `dish` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `error`
--

DROP TABLE IF EXISTS `error`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `error` (
  `EID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_UID` int(11) DEFAULT NULL,
  `DESCRIPTION` varchar(45) DEFAULT NULL,
  `CODE` varchar(15) DEFAULT NULL,
  `METHOD` varchar(45) DEFAULT NULL,
  `SERVIRITRY` varchar(45) DEFAULT NULL,
  `DEVICE` varchar(45) DEFAULT NULL,
  `CREATIONTIME` varchar(45) DEFAULT NULL,
  `OS` varchar(45) DEFAULT NULL,
  `OS_VERSION` varchar(45) DEFAULT NULL,
  `APPLICATION_VERSION` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`EID`),
  KEY `fk_ERROR_USER1_idx` (`USER_UID`),
  CONSTRAINT `fk_ERROR_USER1` FOREIGN KEY (`USER_UID`) REFERENCES `user` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `error`
--

LOCK TABLES `error` WRITE;
/*!40000 ALTER TABLE `error` DISABLE KEYS */;
INSERT INTO `error` VALUES (1,1,'ds','f','d','s','fd','s','2','d','g');
/*!40000 ALTER TABLE `error` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foodcatrgory`
--

DROP TABLE IF EXISTS `foodcatrgory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `foodcatrgory` (
  `FCID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`FCID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foodcatrgory`
--

LOCK TABLES `foodcatrgory` WRITE;
/*!40000 ALTER TABLE `foodcatrgory` DISABLE KEYS */;
INSERT INTO `foodcatrgory` VALUES (0,'UNDEFINED'),(1,'اكلات محلية'),(2,'ولائم'),(3,'مقبلات'),(4,'فطائر'),(5,'حلويات');
/*!40000 ALTER TABLE `foodcatrgory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generalrequest`
--

DROP TABLE IF EXISTS `generalrequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `generalrequest` (
  `GRID` int(11) NOT NULL AUTO_INCREMENT,
  `CONSUMER_CID` int(11) NOT NULL,
  `REQUESTTIME` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `REQUESTDETAILS` longtext NOT NULL,
  `REQUESTSUBJECT` varchar(45) NOT NULL,
  `STATUS` int(11) NOT NULL DEFAULT '1',
  `LONGT` int(11) DEFAULT NULL,
  `LAT` int(11) DEFAULT NULL,
  PRIMARY KEY (`GRID`),
  KEY `fk_GENERALREQUEST_CONSUMER1_idx` (`CONSUMER_CID`),
  KEY `STATUS_idx` (`STATUS`),
  CONSTRAINT `STATUS` FOREIGN KEY (`STATUS`) REFERENCES `status` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_GENERALREQUEST_CONSUMER1` FOREIGN KEY (`CONSUMER_CID`) REFERENCES `consumer` (`CID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generalrequest`
--

LOCK TABLES `generalrequest` WRITE;
/*!40000 ALTER TABLE `generalrequest` DISABLE KEYS */;
INSERT INTO `generalrequest` VALUES (71,41,'2017-09-26 19:05:02','asdfgd','asdfgds',4,1234,2345),(81,61,'2017-09-26 21:35:58','aasd','asdfds',3,213,21),(91,41,'2017-09-26 21:47:50','sdfdf','asdf',6,23,12);
/*!40000 ALTER TABLE `generalrequest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gerneralrequesthistory`
--

DROP TABLE IF EXISTS `gerneralrequesthistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gerneralrequesthistory` (
  `GRHID` int(11) NOT NULL AUTO_INCREMENT,
  `CONSUMER_CID` int(11) NOT NULL,
  `STATUS` varchar(45) NOT NULL,
  `REQUESTDETAILS` longtext NOT NULL,
  `REQUESTSUBJECT` varchar(45) NOT NULL,
  `REQUESTTIME` timestamp NULL DEFAULT NULL,
  `COMPLETED` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`GRHID`),
  KEY `fk_GERNERALREQUESTHISTORY_CONSUMER1_idx` (`CONSUMER_CID`),
  CONSTRAINT `fk_GERNERALREQUESTHISTORY_CONSUMER1` FOREIGN KEY (`CONSUMER_CID`) REFERENCES `consumer` (`CID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gerneralrequesthistory`
--

LOCK TABLES `gerneralrequesthistory` WRITE;
/*!40000 ALTER TABLE `gerneralrequesthistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `gerneralrequesthistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `IID` int(11) NOT NULL AUTO_INCREMENT,
  `PATH` varchar(200) NOT NULL,
  PRIMARY KEY (`IID`)
) ENGINE=InnoDB AUTO_INCREMENT=621 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (151,'uploads/1506340495818.png'),(161,'uploads/1506340608489.png'),(171,'uploads/1506340638676.png'),(181,'https://s3.us-east-2.amazonaws.com/heroku-img'),(201,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506368252492.png'),(211,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506368548281.png'),(221,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506368793661.png'),(231,'https://s3.us-east-2.amazonaws.com/heroku-imgs/dish.png'),(251,'https://s3.us-east-2.amazonaws.com/heroku-imgs/dish.png'),(261,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506418855295.png'),(271,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506420209548.png'),(281,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506420273438.png'),(291,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506420284724.png'),(301,'https://s3.us-east-2.amazonaws.com/heroku-imgs/human.jpg'),(311,'https://s3.us-east-2.amazonaws.com/heroku-imgs/human.jpg'),(321,'https://s3.us-east-2.amazonaws.com/heroku-imgs/human.jpg'),(331,'https://s3.us-east-2.amazonaws.com/heroku-imgs/human.jpg'),(341,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506447639151.png'),(351,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506447811613.png'),(361,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506448028980.png'),(371,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506448109687.png'),(381,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506450021121.png'),(391,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506450055091.png'),(401,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506451079076.png'),(411,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506451117065.png'),(421,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506451436013.png'),(431,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506451565741.png'),(441,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506451889421.png'),(451,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506451940634.png'),(461,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506452135363.png'),(471,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506452226108.png'),(481,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506452683789.png'),(491,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506453427528.png'),(501,'https://s3.us-east-2.amazonaws.com/heroku-imgs/dish.png'),(511,'https://s3.us-east-2.amazonaws.com/heroku-imgs/dish.png'),(521,'https://s3.us-east-2.amazonaws.com/heroku-imgs/dish.png'),(531,'https://s3.us-east-2.amazonaws.com/heroku-imgs/dish.png'),(541,'https://s3.us-east-2.amazonaws.com/heroku-imgs/dish.png'),(551,'https://s3.us-east-2.amazonaws.com/heroku-imgs/dish.png'),(561,'https://s3.us-east-2.amazonaws.com/heroku-imgs/dish.png'),(571,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506458936486.png'),(581,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506458950086.png'),(591,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506458960181.png'),(601,'https://s3.us-east-2.amazonaws.com/heroku-imgs/human.jpg'),(611,'https://s3.us-east-2.amazonaws.com/heroku-imgs/1506643136195.png');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login` (
  `LID` int(11) NOT NULL AUTO_INCREMENT,
  `LOGINTIME` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `TOKEN` varchar(15) NOT NULL,
  `USER_UID` int(11) DEFAULT NULL,
  PRIMARY KEY (`LID`),
  KEY `UID_idx` (`USER_UID`),
  CONSTRAINT `LFUID` FOREIGN KEY (`USER_UID`) REFERENCES `user` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'2017-05-20 21:40:13','Wm3kXmwNvhCBaIw',19),(11,'2017-07-01 03:17:37','onpP9Micl2V3Mov',77),(12,'2017-07-05 08:48:41','8IDGtx4957EE9Wa',77),(13,'2017-07-14 11:47:06','d6mIJlXKyTI18oH',81),(14,'2017-07-22 20:23:54','mGjjoidUrdgr3xW',83),(15,'2017-07-22 20:42:57','TS0zt9tbnzNdDBX',NULL),(16,'2017-07-22 20:59:35','afyfih9fyO3XtdV',NULL),(17,'2017-07-22 20:59:52','pMPjmgvpxwWmADa',NULL),(18,'2017-07-22 21:00:21','eMkOabrM2S7u5jx',NULL),(19,'2017-07-22 21:01:52','UzTCZneJFuoYHNp',NULL),(20,'2017-07-22 21:02:21','lNSQ3PK4ITswJZq',NULL),(21,'2017-07-22 21:03:44','hnsVtF50XXl4mGc',NULL),(22,'2017-07-23 06:31:38','Nv6WtA5sTxEdOOE',NULL),(23,'2017-07-23 06:38:07','VkPgczdbT2vGvq4',NULL),(24,'2017-07-23 06:39:26','lLUbfez1js6qF97',NULL),(25,'2017-07-23 08:01:23','KFZ9o7lB3n7LopA',84),(26,'2017-07-23 08:16:51','68fdRAaSe0ztM5G',84),(27,'2017-07-23 08:17:27','MHcLzMKNs40pj4X',84),(28,'2017-07-23 08:17:54','IwRLkbb8gTSBpoR',84),(29,'2017-07-23 08:18:17','fQsYXPws6lm1aO4',84),(30,'2017-07-23 08:18:32','NbxATuHMCyeGWVU',84),(31,'2017-07-23 08:19:21','0BFKqHdQ3KQZ0X0',84),(32,'2017-07-23 08:19:36','QhgaxFYq86ewwYA',84),(33,'2017-07-23 08:20:20','EjtklhnYCIqQKYv',84),(34,'2017-07-23 08:20:53','1Dg2n0yErZSf13f',84),(35,'2017-07-23 08:21:46','2waTyQShxaR5hTc',84),(36,'2017-07-23 08:23:25','zvgbf6WD2yl8o4B',84),(37,'2017-07-23 08:24:30','W72cwf7yrwl2h8F',84),(38,'2017-07-23 09:02:50','ReWAZho3w8iCM8S',84);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loginhistory`
--

DROP TABLE IF EXISTS `loginhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loginhistory` (
  `LHID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_UID` int(11) NOT NULL,
  `LOGINTIME` timestamp NULL DEFAULT NULL,
  `LOGOUTTIME` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`LHID`),
  KEY `fk_LOGINHISTORY_USER1_idx` (`USER_UID`),
  CONSTRAINT `fk_LOGINHISTORY_USER1` FOREIGN KEY (`USER_UID`) REFERENCES `user` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loginhistory`
--

LOCK TABLES `loginhistory` WRITE;
/*!40000 ALTER TABLE `loginhistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `loginhistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ratings` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RATING` double DEFAULT NULL,
  `COMMENT` text,
  `SERVICEPROVIDER_SPID` int(11) NOT NULL,
  `POSTERID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `SERVICEPROVIDER_SPID_idx` (`SERVICEPROVIDER_SPID`),
  KEY `CONSUMER_CID_idx` (`POSTERID`),
  CONSTRAINT `SERVICEPROVIDER_SPID` FOREIGN KEY (`SERVICEPROVIDER_SPID`) REFERENCES `serviceprovider` (`SPID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `USER_UID` FOREIGN KEY (`POSTERID`) REFERENCES `user` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (2,10,'nice food',1,19);
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `serviceprovider`
--

DROP TABLE IF EXISTS `serviceprovider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `serviceprovider` (
  `SPID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_UID` int(11) NOT NULL,
  `AVERAGERATING` int(11) NOT NULL DEFAULT '1',
  `ISACTIVE` int(11) NOT NULL DEFAULT '1',
  `DESCRIPTION` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`SPID`),
  KEY `UID_idx` (`USER_UID`),
  CONSTRAINT `SPFUID` FOREIGN KEY (`USER_UID`) REFERENCES `user` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `serviceprovider`
--

LOCK TABLES `serviceprovider` WRITE;
/*!40000 ALTER TABLE `serviceprovider` DISABLE KEYS */;
INSERT INTO `serviceprovider` VALUES (1,63,0,1,'test'),(5,72,1,1,'test'),(6,73,1,1,'test'),(9,77,1,1,'test'),(10,79,1,1,'igor sdfsafsd'),(71,341,2234,0,'sdfsadf');
/*!40000 ALTER TABLE `serviceprovider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `NAME_UNIQUE` (`NAME`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (6,'ACCEPTED'),(4,'CANCELED'),(3,'COMPLETED'),(1,'CREATED'),(2,'DELETED'),(7,'EXPIRED'),(5,'PENDING'),(8,'USED');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `UID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) NOT NULL,
  `EMAIL` varchar(45) NOT NULL,
  `PHONENUMBER` varchar(45) NOT NULL,
  `PASSWORD` varchar(88) NOT NULL,
  `CREATEDBY` int(11) DEFAULT NULL,
  `CREATIONTIME` timestamp NULL DEFAULT NULL,
  `LASTMODIFYBY` int(11) DEFAULT NULL,
  `LASTMODIFYTIME` timestamp NULL DEFAULT NULL,
  `PASSWORDLASTMODIFY` timestamp NULL DEFAULT NULL,
  `USERTYPE_ID` int(11) NOT NULL,
  `IMAGES_IID` int(11) NOT NULL DEFAULT '1',
  `LONG` double DEFAULT NULL,
  `LAT` double DEFAULT NULL,
  `BLOCK` tinyint(1) NOT NULL DEFAULT '0',
  `BLOCKREASON` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`UID`),
  UNIQUE KEY `EMAIL_UNIQUE` (`EMAIL`),
  KEY `fk_USER_USERTYPE1_idx` (`USERTYPE_ID`),
  KEY `fk_USER_IMAGES1_idx` (`IMAGES_IID`),
  CONSTRAINT `fk_USER_USERTYPE1` FOREIGN KEY (`USERTYPE_ID`) REFERENCES `usertype` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=361 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'FirstAdmin','dar.dhan@gmail.com','','$2a$04$v9C/9vaiRroXBOuLjqU/G.7gcCH7SLMu3aUGWkeUveong898x3fKe',NULL,NULL,NULL,NULL,NULL,3,1,24.694,40.9773,1,''),(15,'Yasser1','asaafdsdsads@gmail.com','0542870020','QBVpopikdZ4S99fk',NULL,NULL,NULL,NULL,NULL,1,1,24.734987,46.7323957,0,''),(16,'Yasser1','1@gmail.com','0542870020','MwgqGF4C8xCJ0Cro',NULL,NULL,NULL,NULL,NULL,1,1,24.734987,46.7323957,0,''),(17,'Yasser1','12@gmail.com','0542870020','8ST02a6hfB13eVlu',NULL,NULL,NULL,NULL,NULL,1,1,24.734987,46.7323957,0,''),(18,'Yasser1','12s@gmail.com','0542870020','00sXzw1PzFh6bkdy',NULL,NULL,NULL,NULL,NULL,1,1,24.734987,46.7323957,0,''),(19,'Yasser1','12ss@gmail.com','0542870020','7vdrj7LoibRIhyJq',NULL,NULL,NULL,NULL,NULL,1,1,24.734987,46.7323957,0,''),(20,'Yasser1','1ss@gmail.com','0542870020','dRi2nnSiMt6vjQrb',NULL,NULL,NULL,NULL,NULL,1,1,24.734987,46.7323957,0,''),(42,'t','d7omi.ksa@gmail.com','0542870020','sha1$76f25d85$1$4fd044706fc88690764eaf9385dbe121c0ec755c',NULL,NULL,NULL,NULL,NULL,1,1,24.734987,46.7323957,0,''),(44,'t','d7oksa@gmail.com','0542870020','lWcBalUiPcmcDJew',NULL,NULL,NULL,NULL,NULL,1,1,24.734987,46.7323957,0,''),(45,'t','asd@gmail.com','0542870020','gh3WkaMJ0wdS5eib',NULL,NULL,NULL,NULL,NULL,1,1,24.734987,46.7323957,0,''),(46,'t','sdfi@gmail.com','0542870020','HQIbX9JyXNotF0Si',NULL,NULL,NULL,NULL,NULL,1,1,24.734987,46.7323957,0,''),(63,'Yasser','d7omi.dddd@gmail.com','23452345','sha1$5d8f936a$1$24ebc7a557912679c461143f9dc3da2e8847b6d6',NULL,NULL,NULL,NULL,NULL,1,1,24.734987,46.7323957,1,'dsfsdfdsf'),(72,'Yasser','me@me1.com','05555555','sha1$365787d5$1$5c9c4da2616cc86d5312cbe847363a35cc12a3bd',NULL,NULL,NULL,NULL,NULL,1,1,24.734987,46.7323957,1,'sdfasdfads'),(73,'Yasser','me@qme1.com','05555555','sha1$2ead63da$1$2d952d6a2a20ce7c24bda1d4f8f1b4b6640dc1dd',NULL,NULL,NULL,NULL,NULL,1,1,24.734987,46.7323957,0,''),(77,'Yasser','123@test1234.com','23452345','1234',NULL,NULL,NULL,NULL,NULL,1,1,24.734987,46.7323957,0,''),(79,'Igor','123q@test1234.com','23452345','sha1$e3979dda$1$d2449cf68bfddb17352d5f22d939d011ec99e076',NULL,NULL,NULL,'2017-09-24 07:18:15','2017-09-24 07:18:15',1,1,24.734987,46.7323957,0,''),(81,'Yasser','abdulrahmanx.cs@gmail.com','23452345','sha1$7fd2f582$1$54d0b6d706f35a7f077d1184887627196a386ff8',NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,0,''),(83,'Yasser','abdulrahmssanx.cs@gmail.com','23452345','sha1$42b83bc6$1$edf760a9a5992cbf9778d4b40ebd7aab1151fcee',NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,0,''),(84,'Yasser','yaser.hk@gmail.com','23452345','$2a$04$Sdic9yJgxR2enFIhUnUHReoUx5mFuO2ghfaViG5vM1uxyhXTQXDt.',NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,0,''),(121,'opo','opao@sdf.com','34234','afsdf',0,'0000-00-00 00:00:00',0,'0000-00-00 00:00:00','0000-00-00 00:00:00',1,0,213,21,0,''),(131,'MyFirstChef','sdfsd@gmail.com','34243','sdfsd',0,'0000-00-00 00:00:00',0,'0000-00-00 00:00:00','0000-00-00 00:00:00',1,0,23,12,0,''),(141,'ewwer','werqwer','234234','dsafds',0,'0000-00-00 00:00:00',0,'0000-00-00 00:00:00','0000-00-00 00:00:00',1,0,23,232,0,''),(181,'Chef','Chef@gmial.com','123123','safdsd',NULL,'2017-09-26 17:40:39',NULL,'2017-09-26 17:40:39','2017-09-26 17:40:39',1,341,123213,123,0,''),(191,'asdasd','asdasd','asdasd','asd',NULL,'2017-09-26 17:43:32',NULL,'2017-09-26 17:43:32','2017-09-26 17:43:32',1,351,12,123,0,''),(201,'qwe','qwe','qwe','qwe',NULL,'2017-09-26 17:47:09',NULL,'2017-09-26 17:47:09','2017-09-26 17:47:09',1,361,123,213,0,''),(301,'gfdfsa','asdfghfdsa','asfdg','asdfg',0,'0000-00-00 00:00:00',0,'2017-09-26 19:04:44','0000-00-00 00:00:00',2,481,1234,123,1,'asdfasdf'),(311,'asdfasd','sdfsadfasdgdf','12345','gfdsa',0,'0000-00-00 00:00:00',0,'2017-09-26 19:17:08','0000-00-00 00:00:00',2,491,123,123,1,'asdasd'),(341,'rtyerty','rewrew@ererew.com','3424','dsfadf',0,'2017-09-26 20:33:39',0,'2017-09-26 20:33:39','2017-09-26 20:33:39',1,551,3434,23,0,''),(351,'Igor','asdas@sdfsdf.com','232432','asdfsdf',0,'0000-00-00 00:00:00',0,'2017-09-26 21:03:06','0000-00-00 00:00:00',2,601,123,12,0,'');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertype`
--

DROP TABLE IF EXISTS `usertype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usertype` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertype`
--

LOCK TABLES `usertype` WRITE;
/*!40000 ALTER TABLE `usertype` DISABLE KEYS */;
INSERT INTO `usertype` VALUES (1,'SERVICEPROVIDER'),(2,'CONSUMER'),(3,'ADMIN');
/*!40000 ALTER TABLE `usertype` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-02  8:38:11
