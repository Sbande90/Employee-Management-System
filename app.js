
const inq = require("inquirer");
const table = require("console.table");
const add = require("./lib/add");
const update = require("./lib/update");
const view = require("./lib/view");

const app = { 
start: () => {
    inq.prompt([
        {
            type: "list",
            message: "what would you like to do?",
            name: "menu",
            choices: [
                "View All Employees",
                "Add Employee",
                "Update Employee Role",
                "Exit"
            ]
        }
    ])
    .then(async function(answer){
        console.log(answer);
        if(answer.menu === "View All Employees"){
            view.viewAllEmployee();
        }
        else if(answer.menu === "Add Employee"){
            console.log("here");
           await add.addEmployee();
           app.start();
        }
        else if(answer.menu === "Update Employee Role"){
            update.updateRole();
        }
        else if(answer.menu === "Exit"){
            connection.end();
            return
        }
    });
}};
app.start();
module.exports = app;