DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department (
  id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  department_id int,
  primary key (id)
);

CREATE TABLE job (
    id INT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id int,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);





CREATE TABLE employee (
    id INT,
    first_name VARCHAR(30),
    last_name varchar(30),
    job_id int,
    FOREIGN KEY (job_id)
    REFERENCES job(id)
    -- manager_id int,
    -- FOREIGN KEY (manager_id)
   --  REFERENCES manager(id)
  --   ON DELETE SET NULL


);