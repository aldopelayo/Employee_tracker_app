DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  job_id INT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE job (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id int,
    (department_id) INT,
   PRIMARY KEY (id)
   FOREIGN KEY (department_id) REFERENCES department(id)
);





CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    job_id int,
    manager_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
    ON DELETE SET NULL


);