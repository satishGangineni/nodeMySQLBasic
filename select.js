var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Test@12345",
    insecureAuth: true,
    database: "mydb"
});

//"SELECT * FROM customers WHERE address = 'Park Lane 38';
//"SELECT * FROM customers ORDER BY name"
//"SELECT * FROM customers LIMIT 5"

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});