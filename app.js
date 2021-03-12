const mysql = require("mysql");
const inq = require("inquirer");
const table = require("console.table");
const add = require("./lib/add");
const update = require("./lib/update");
const view = require("./lib/view");



const connection = mysql.createConnection({
    host: "localhost",
    port: 8888,
    user: "root",
    password: "password1",
    database: "company_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.theadId + "\n");
    exports.askFirstQuestions();
});

exports.askFirstQuestions = () => {
    inq.prompt([
        {
            type: "list",
            message: "what would you like to do?",
            choices: [
                "View All Employees",
                "Add Employee",
                "Update Employee Role",
                "Exit"
            ]
        }
    ])
    .then(function(answer){
        if(answer.choice === "View All Employees"){
            view.viewAllEmployee();
        }
        else if(answer.choice === "Add Employee"){
            add.addEmployee();
        }
        else if(answer.choice === "Update Employee Role"){
            update.updateRole();
        }
        else if(answer.choice === "Exit"){
            connection.end();
            return
        }
    })
};