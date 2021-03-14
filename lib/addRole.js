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
    // console.log("connected as id " + connection.threadId + "\n");
    
});

exports.addR = () => {
    // const allRoles = db.getAllRoles();
     connection.query("SELECT * FROM company_db.department;", (err, results) =>{
        if(err){
            console.log("db err: ", err);
            return err;
        } 
        // console.log("db results: ",results);
        // return results;
    
        const roles = [];
        const departmentNames = [];
        for(var i = 0; i<results.length; i++){
            
            departmentNames.push(results[i].dept_name);
        }
        
        
        // console.log(roles);
        var options = [
            {
                type: "input",
                message: "Role name",
                name: "title",
                validate: function(input){
                    if(!input){
                        return "please enter the role name";
                    }else{
                        return true;
                    }
                }
            },
            {
                type: "input",
                message: "Salary",
                name: "salary",
                validate: function(input){
                    if(isNaN(parseInt(input)) || input.length<2){
                        return "please enter a real number";
                    }else{
                        return true;
                    }
                }
            },
            {
                type: "rawlist",
                message: "Department",
                name: "dept_id",
                choices: departmentNames
            }
            
        ];
        return inq.prompt(options)
            .then(function (answers) {
                var dept_id = null;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].dept_name === answers.dept_id) {
                        dept_id = results[i].dept_id
                    }

                }
                connection.query("INSERT INTO company_role SET?",
                    {
                        title: answers.title,
                        salary: answers.salary,
                        dept_id: dept_id
                    },
                    function (err, results) {
                        if (err) throw err;
                        console.log("Successfully added ");
                        app.start();
                        
                    }
                )
            });
        })  
};

// module.exports = addEmployee;

// title VARCHAR(30) NULL,
// salary DEC(7,2) NOT NULL,
// dept_id INT,