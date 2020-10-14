USE employertracker_db;

INSERT INTO department(name) VALUES("sales");

USE employertracker_db;

INSERT INTO department(name) VALUES("sales");
INSERT INTO roles(title,salary,department_id) VALUES("sales manager",100000,1);
INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUES("Joe","Rogan",1,null);

INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUES("Jack","Frost",1,1);