import inquirer from 'inquirer';
import mysql from 'mysql2'

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Taking out the password for safety reasons
  database: 'employee_db'
});

db.connect(err => {
  if (err) throw err;
  console.log(`Connected to the employee_db database.`);
  startApp();
});

// Create a prompt module using inquirer

 function startApp() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit'
        ]
      }
    ])
    .then(answer => {
      switch (answer.action) {
        case 'View all departments':
          viewDepartments();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'View all employees':
          viewEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Exit':
          db.end();
          console.log('Goodbye!');
          break;
      }
    });
}

function viewDepartments() {
  db.query('SELECT * FROM department', (err, results) => {
    if (err) throw err;
    console.log(results);
    startApp();
  });
}

function viewRoles() {
  db.query('SELECT * FROM role', (err, results) => {
    if (err) throw err;
    console.log(results);
    startApp();
  });
}

function viewEmployees() {
  db.query('SELECT * FROM employee', (err, results) => {
    if (err) throw err;
    console.log(results);
    startApp();
  });
}


function addDepartment() {
  db.query('INSERT INTO Department (department_name) VALUES ("customer_retention")', (err, results) => {
    if (err) throw err;
    console.log(results);
    startApp();
  });
}
function addRole() {
  db.query('INSERT INTO Role (title) VALUES ("Customer success Associate")', (err, results) => {
    if (err) throw err;
    console.log(results);
    startApp();
  });
}
