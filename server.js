const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Mushroomking1234',
      database: 'employee_tracker'
    },
    console.log(`Connected to the employee_tracker database.`)
  );
  ///prompt questions for user

  db.connect(function(err){
    if(err) throw err;
    console.log("MySql connection");

    askQuestions();
  });

  function askQuestions(){
    inquirer.prompt([
      {
        type: 'list',
        name:'askQuestions',
        message: 'please choose one of the following choices ',
       choices: [
        'view all departments',
        'view all jobs',
        'view all employees',
        'add a job',
        'view all of the above',
        'add a department',
        'add an employee',
        'update to an employee role'
       ],
      }
    ]
  )
        .then (function(res){
          switch(res.askQuestions){
            case 'view all departments':
            viewDepartment();
            break;
            case 'view all jobs':
              viewJobs()
            break;
            case 'view all employees':
              viewEmployees()
            break;
            case 'view all of the above':
              viewAll()
            break;
            case 'add a department':
            break;
            case 'add an employee':
            break;
            case 'update to an employee role':
            break;
          }
        });
      }

   function viewDepartment(){
    db.query(`SELECT id, name from department ORDER BY id;`,(err, viewDepartment)=>{
      console.log(viewDepartment);
    });
  };

  function viewJobs(){
    db.query(`SELECT * FROM job JOIN department ON job.department=department.id;`,(err, viewJobs)=>{
      console.log(viewJobs);
    });
  };

  function viewEmployees(){
    db.query(`SELECT * FROM `,(err, viewEmployees)=>{
      console.log(viewEmployees);
    });
  };

  function viewAll(){
    db.query(`SELECT * FROM employee RIGHT JOIN employee RIGHT JOIN job RIGHT JOIN department ` ,
    (err, viewAll)=>{
      console.log(viewAll);
    });
  };
