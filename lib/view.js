const cTable = require('console.table');

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

exports.showEmployees = () => {
    // const allRoles = db.getAllRoles();
     connection.query("SELECT * FROM company_db.employees;", (err, results) =>{
        if(err){
            console.log("db err: ", err);
            return err;
        } 
        console.table(results);
        app.start();
    });

};

exports.showDepartment = () => {
    // const allRoles = db.getAllRoles();
     connection.query("SELECT * FROM company_db.department;", (err, results) =>{
        if(err){
            console.log("db err: ", err);
            return err;
        } 
        console.table(results);
        app.start();
    });
};



exports.showRoles = () => {
    // const allRoles = db.getAllRoles();
     connection.query("SELECT * FROM company_db.company_role;", (err, results) =>{
        if(err){
            console.log("db err: ", err);
            return err;
        } 
        console.table(results);
        app.start();
    });
};






