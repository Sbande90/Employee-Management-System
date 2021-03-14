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
    
});

exports.addD = () => {
   
     
        var options = [
            {
                type: "input",
                message: "Department Name",
                name: "dept_name",
                validate: function(input){
                    if(!input){
                        return "please enter department name";
                    }else{
                        return true;
                    }
                }
            },
            
            
        ];
        return inq.prompt(options)
            .then(function (answers) {
                
                connection.query("INSERT INTO department SET?",
                    {
                        dept_name: answers.dept_name
                    },
                    function (err, results) {
                        if (err) throw err;
                        console.log("Successfully added ");
                        app.start();
                        
                    }
                )
            });
          
};

// module.exports = addEmployee;

// first_name VARCHAR(30) NOT NULL,
// last_name VARCHAR(30) NOT NULL,
// emp_role_id INT NOT NULL,
// manager_id INT,