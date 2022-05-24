const { prompt } = require("inquirer");
const { exit } = require("process");
const { inherits } = require("util");
const db = require("./db");
require("console.table");
manager();
function manager() {
  launchInterface();
}

function launchInterface() {
  prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        {
          name: "View all employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "View all departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "View all roles",
          value: "VIEW_ROLES",
        },
        {
          name: "Add an employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Remove an employee",
          value: "REMOVE_EMPLOYEE",
        },
        {
          name: "Update an employee role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },

        {
          name: "Add a department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Remove a department",
          value: "REMOVE_DEPARTMENT",
        },

        {
          name: "Add a role",
          value: "ADD_ROLE",
        },
        {
          name: "Update an employee role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "Remove a role",
          value: "REMOVE_ROLE",
        },
        {
          name: "Exit",
          value: "EXIT",
        },
      ],
    },
  ]).then((response) => {
    let action = response.action;
    switch (action) {
      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;
      case "VIEW_DEPARTMENTS":
        viewDepartments();
        break;
      case "VIEW_ROLES":
        viewRoles();
        break;
      case "ADD_EMPLOYEE":
        addEmployee();
        break;
      case "REMOVE_EMPLOYEE":
        removeEmployee();
        break;
      case "UPDATE_EMPLOYEE_ROLE":
        updateEmployeeRole();
        break;
      case "ADD_DEPARTMENT":
        addDepartment();
        break;
      case "REMOVE_DEPARTMENT":
        removeDepartment();
        break;
      case "ADD_ROLE":
        addRole();
        break;
      case "REMOVE_ROLE":
        removeRole();
        break;
      default:
        exit();
    }
  });
}
function viewEmployees() {
  db.viewEmployees().then((res) => {
    console.table(res);
    manager();
  });
}
function viewDepartments() {
    db.viewDepartments().then((res) => {
        console.table(res);
        manager();
    });
}
function viewRoles() {
    db.viewRoles().then((res) => {
        console.table(res);
        manager();
    });
}
function addEmployee() {
    prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is their first name?",
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the their last name?",
        }
    ]).then((response) => {
        let fn = response.first_name;
        let ln = response.last_name;
        db.findAllRoles().then((roles) => {
            let roleChoices = roles.map(({id, title}) => ({
                name: title,
                value: id
            }));
            

    
                

module.exports = new db(connection);
