const mysql = require("mysql");
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


const db = {
    getAllRoles:async () =>{
        return await connection.query("SELECT * FROM company_role", (err, results) =>{
            if(err){
                console.log("db err: ", err);
                return err;
            } 
            console.log("db results: ",results[0]);
            return results;
        })
    }
}

module.exports = db;