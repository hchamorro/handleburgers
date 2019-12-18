DROP DATABASE IF EXISTS good_burger_db;

CREATE DATABASE good_burger_db;

USE good_burger_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger VARCHAR(300) NOT NULL,
  devoured BOOLEAN NOT NULL default 0,
  PRIMARY KEY (id)

);


