let mysql = require("mysql");
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'student'
})
connection.connect();

var sql = 'SELECT * FROM stu';
connection.query(sql, function(err, result) {
    if (err) {
        throw err;
    }
    console.log(result);
})
connection.end();