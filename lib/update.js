var inq = require("inquirer");
var mysql = require("mysql");
var app = require("../app");
var view = require("./view");



var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password1",
    database: "company_db"
});

exports.updateRole = () => {
  

  connection.query("SELECT * FROM company_db.employees;", (err, employeeResults) =>{
    if(err){
        console.log("db err: ", err);
        return err;
    } 
    


        // console.log("test here:");
        // console.table(employeeResults);
        var employees = [];
        for (var i = 0; i < employeeResults.length; i++) {
            var fullName = {
                name: employeeResults[i].first_name + ' ' + employeeResults[i].last_name,
                value: {
                    id: employeeResults[i].emp_id,
                    first_name: employeeResults[i].first_name,
                    last_name: employeeResults[i].last_name
                }
            };

            employees.push(fullName)
        };

        inq.prompt([
            {
                type: "rawlist",
                message: "Which employee would you like to update?",
                name: "employee",
                choices: employees
            }
        ]).then((answers) => {
          var rolesResults = view.showRoles();

          connection.query("SELECT * FROM company_db.company_role;", (err, rolesResults) =>{
            if(err){
                console.log("db err: ", err);
                return err;
            } 
            // console.table(rolesResults);
    
            
        

                var roles = [];
                // console.log(answers.employee);

                for (var i = 0; i < rolesResults.length; i++) {
                    var fullRole = {
                        name: rolesResults[i].title,
                        value: {
                            id: rolesResults[i].role_id,
                            role: rolesResults[i].title,
                        }
                    }
                    roles.push(fullRole);
                };

                inq.prompt([
                    {
                        type: "rawlist",
                        message: `Which role would you like to update ${answers.employee.first_name} to?`,
                        name: "role",
                        choices: roles
                    }
                ]).then((results) => {
                    console.log("results...")
                    console.log(results.role)
                    connection.query("UPDATE employees SET emp_role_id = ? WHERE emp_id = ?",[results.role.id, answers.employee.id],function (err, results) {
                        if (err) throw err;
                        console.log("Successfully updated " + answers.employee.id);
                        app.start();
                    })
                });
            });
        });
    });   
};
