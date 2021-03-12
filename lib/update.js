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