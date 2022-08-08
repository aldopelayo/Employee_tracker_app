INSERT INTO department(name)
VALUES ("finances"),
        ("tech"),
        ("security"),
        ("Accountant");

insert into job (name,salary,department)
VALUES ("manager",100,1),
        ("intern",10,2),
        ("Officer",60,3),
        ("clerk",80,4);

insert into employee (first_name,last_name,job_id,manager_id)
VALUES("Aldo","Pelayo","manager",null),
    ("JoJo","Elm","intern",1),
    ("tony","stark","officer",2),
    ("steve","urwin","clerk",3);