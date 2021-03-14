const inq = require("inquirer");
const mysql = require("mysql");
const app = require("../app");
// 

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password1",
    database: "company_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    
});

exports.addEmployee = () => {
    // const allRoles = db.getAllRoles();
     connection.query("SELECT * FROM company_db.company_role;", (err, results) =>{
        if(err){
            console.log("db err: ", err);
            return err;
        } 
        // console.log("db results: ",results);
        // return results;
    
        const roles = [];
        const rolesNames = [];
        for(var i = 0; i<results.length; i++){
            roles.push({
                title: results[i].title,
                emp_role_id: results[i].role_id
            })
            rolesNames.push(results[i].title);
        }
        
        
        // console.log(roles);
        var options = [
            {
                type: "input",
                message: "Employee First Name",
                name: "first_name",
                validate: function(input){
                    if(!input){
                        return "please enter the first name";
                    }else{
                        return true;
                    }
                }
            },
            {
                type: "input",
                message: "Employee Last Name",
                name: "last_name",
                validate: function(input){
                    if(!input){
                        return "please enter the first name";
                    }else{
                        return true;
                    }
                }
            },
            {
                type: "list",
                message: "Employee Role",
                name: "role",
                choices: rolesNames
            }
            
        ];
        return inq.prompt(options)
            .then(function (answers) {
                var roleId = null;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].title === answers.role) {
                        roleId = results[i].role_id
                    }

                }
                connection.query("INSERT INTO employees SET?",
                    {
                        first_name: answers.first_name,
                        last_name: answers.last_name,
                        emp_role_id: roleId
                    },
                    function (err, results) {
                        if (err) throw err;
                        console.log("Successfully added " + answers.first_name + " " + answers.last_name);
                        // app.start();
                        return true;
                    }
                )
            });
        })  
};

// module.exports = addEmployee;

// first_name VARCHAR(30) NOT NULL,
// last_name VARCHAR(30) NOT NULL,
// emp_role_id INT NOT NULL,
// manager_id INT,