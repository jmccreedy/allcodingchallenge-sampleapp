# ************************************************************
# Sequel Pro SQL dump
# Version 5446
#
# https://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 8.0)
# Database: uu_code_challenge
# Generation Time: 2020-10-07 14:32:56 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table employeedata
# ------------------------------------------------------------


DROP TABLE IF EXISTS `employeedata`;
CREATE TABLE `employeedata` (
`id` int(6) unsigned NOT NULL AUTO_INCREMENT,
`employee_id` int(16) DEFAULT NULL,
`employee_name` varchar(255) DEFAULT NULL,
`age` int(16) DEFAULT NULL,
`gender` varchar(255) DEFAULT NULL,
`occupation` varchar(255) DEFAULT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


LOCK TABLES `employeedata` WRITE;
/*!40000 ALTER TABLE `employeedata` DISABLE KEYS */;
INSERT INTO `employeedata` (`id`, `employee_id`, `employee_name`, `age`, `gender`, `occupation`) VALUES
('1','6299','Ryan','42','Male','Developer'),
('2','4320','Nick','42','Male','Business Analyst'),
('3','3928','Carlos','36','Male','Developer'),
('4','8369','Kevin','38','Male','Developer'),
('5','2427','John','37','Male','Developer'),
('6','8576','Holly','51','Female','Business Analyst'),
('7','7459','Fiona','55','Female','Tester'),
('8','9725','Jamal','56','Male','Developer'),
('9','2318','Nadia','42','Female','Tester'),
('10','3675','Wendy ','51','Female','Manager'),
('11','9852','Shaquon','31','Male','Tester'),
('12','9314','Kristal','46','Female','Developer'),
('13','8153','Barry','42','Male','DBA'),
('14','3034','Shaniqua','50','Female','Developer')
-- UNLOCK TABLES;


-- /*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
-- /*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
-- /*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- /*!test */;
-- /*!test 2*/;