
const mysql = require("mysql");
const app = require("../app");

const connection = mysql.createConnection({
    host: "localhost",
    port: 8888,
    user: "root",
    password: "password1",
    database: "company_db"
});