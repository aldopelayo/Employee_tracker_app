DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE job (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department INT,
    FOREIGN KEY(department)
    references department(id)
    ON DELETE SET NULL
);





CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    job_id VARCHAR(30),
    manager_id int,
    FOREIGN KEY(manager_id)
    references job(id),
    PRIMARY KEY(id)
);