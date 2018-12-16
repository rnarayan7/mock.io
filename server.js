const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

// Initialize connection to mySQL database
/**var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dbuser',
  password : 's3kreee7',
  database : 'my_db'
});
connection.connect();*/

// Configure express to use static pages
app.use(express.static('src'));
// Configure bodyParser to accept urlencoded form data
app.use(bodyParser.urlencoded({ extended: true }));
// Define router for requests to login endpoint
app.post('/login/', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    res.json({ username: req.body.username,
               password: req.body.password });

});
// Define router for requests to register endpoint
app.post('/register/', function (req, res) {
    console.log(res);
});

/**connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err
  console.log('The solution is: ', rows[0].solution)
})

connection.end()*/
