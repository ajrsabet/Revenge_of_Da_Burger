### Schema

CREATE DATABASE rvqrlsrd5w05y00b;
USE rvqrlsrd5w05y00b;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
-- changed sleppy to eaten