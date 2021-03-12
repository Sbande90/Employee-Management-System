const inq = require("inquirer");
const mysql = require("mysql");
const app = require("../app");
var view = require("./view");

const connection = mysql.createConnection({
    host: "localhost",
    port: 8888,
    user: "root",
    password: "password1",
    database: "company_db"
});

exports.addEmployee = () =>{
    view.getAllRoles(function(rolesResults){
        const roles = [];
        for(var i = 0; i < rolesResults.length; i++){
            roles.push(rolesResults[i].title);
        }
        var options = [
            {
                type: "input",
                message: "Employee First Name",
                name: "FirstName",
                default: "Erick"
            },
            {
                type: "input",
                message: "Employee Last Name",
                name: "LastName",
                default: "Kabore"
            },
            {
                type: "list",
                message: "Employee Role",
                name: "role",
                choices: roles
            }
        ];
        inq.prompt(options)
        .then(function(answer){
            var roleId = null;
            for(var i = 0; i < rolesResults.length; i++){
                if(rolesResults[i].title === answer.role){
                    roleId = rolesResults[i].role_id
                }
                
            }
            connection.query("INSERT INTO employees SET?",
                {
                    first_name: answers.firstName,
                    last_name: answers.lastName,
                    emp_role_id: roleId
                },
                function(err, results){
                    if(err) throw err;
                    console.log("Successfully added " + answers.firstName + " " + answers.lastName);
                    exports.askFirstQuestions();
                }
                )
        })
    })
};