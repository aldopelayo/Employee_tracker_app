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
        name:'userChoice',
        message: 'please choose one of the following choices ',
       choices: [
        'view all departments',
        'view all roles',
        'view all employees',
        'add a job',
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
            case 'view all roles':
            break;
            case 'view all employees':
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
    db.query(`SELECT * FROM department`,(err, viewDepartment)=>{
      console.log(viewDepartment);
    });
  };

















