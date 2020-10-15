USE employertracker_db;

INSERT INTO department(name) VALUES("Sales")('Human Resorce'), ('Legal'), ('IT');

USE employertracker_db;

INSERT INTO department(name) VALUES("Sales");
INSERT INTO roles(title,salary,department_id) VALUES("Sales Manager",100000,1),( 'Engineer',2500,4),('Project Manager',3500,4),('HR Admin',2800,1);


INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUES("Joe","Rogan",1,null),("Jack","Frost",1,1),('Mirta','Rodriguez',2,1),('Abdul','Valdes',1,NULL),('Lorenzo','Ascencion',3,NULL),('Steve','Lee',4,NULL);