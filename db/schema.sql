### Schema

CREATE DATABASE gmheg6m4jjd5noen;
USE gmheg6m4jjd5noen;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
-- changed sleppy to eaten