const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    port: 8888,
    user: "root",
    password: "password1",
    database: "",
});