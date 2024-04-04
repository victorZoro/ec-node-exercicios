CREATE DATABASE IF NOT EXISTS agency_database;
USE agency_database;

CREATE TABLE IF NOT EXISTS category(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS brand(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS vehicle(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    color VARCHAR(255) NOT NULL,
    category BIGINT UNSIGNED NOT NULL,
    brand BIGINT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category) REFERENCES category(id),
    FOREIGN KEY (brand) REFERENCES brand(id)
);

INSERT INTO category (name) VALUES ('CAR'), ('MOTORCYCLE'), ('TRUCK');