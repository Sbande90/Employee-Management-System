
const inq = require("inquirer");
// const table = require("console.table");
const add = require("./lib/add");
const update = require("./lib/update");
const view = require("./lib/view");
const addDep = require("./lib/addDepartment");
const addRole = require("./lib/addRole");


exports.start = () => {
    inq.prompt([
        {
            type: "rawlist",
            message: "what would you like to do?",
            name: "menu",
            choices: [
                "View All Employees",
                "View Departments",
                "View Roles",
                "Add Employee",
                "Add Department",
                "Add Role",
                "Update Employee Role",
                "Exit"
            ]
        }
    ])
    .then(function(answer){
        console.log(answer);
        if(answer.menu === "View All Employees"){
            view.showEmployees();
        }
        else if(answer.menu === "View Departments"){
            view.showDepartment();
        }
        else if(answer.menu === "View Roles"){
            view.showRoles();
        }
        else if(answer.menu === "Add Employee"){
            // console.log("here");
            add.addEmployee();
           
        }
        else if(answer.menu === "Add Department"){
            // console.log("here");
            addDep.addD();
           
        }
        else if(answer.menu === "Add Role"){
            // console.log("here");
            addRole.addR();
           
        }
        else if(answer.menu === "Update Employee Role"){
            update.updateRole();
        }
        else if(answer.menu === "Exit"){
            connection.end();
            return
        }
    });
};

