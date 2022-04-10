const mysql=require("mysql");
const dotenv=require("dotenv")
dotenv.config()
const dbpassword=process.env.password

var mysqlcon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: dbpassword,
    database: "evstudio",
    multipleStatements: true,
  });


 mysqlcon.connect(function(err) {
    if (err) throw err
    console.log('Connected to the MySQL server.');

});

module.exports=mysqlcon;