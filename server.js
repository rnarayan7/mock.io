const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path')

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set views location to correct path
app.set('views',path.join(__dirname,'views'));

// Set folder for static files to public
app.use(express.static(path.join(__dirname,"public")));

// Access index page
app.get('/', function(req, res) {
    res.render('pages/index');
});
app.get('/index', function(req, res) {
    res.render('pages/index');
});
app.get('/profile', function(req, res) {
    res.render('pages/profile');
});
app.get('/schedule', function(req, res) {
    res.render('pages/schedule');
});
app.get('/interview', function(req, res) {
    res.render('pages/interview');
});
app.get('/prepare', function(req, res) {
    res.render('pages/prepare');
});

// Configure express to use static pages
// app.use(express.static('src'));
// Configure bodyParser to accept urlencoded form data
app.use(bodyParser.urlencoded({ extended: true }));
// Define router for requests to login endpoint
app.post('/login/', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    res.json({ username: req.body.username,
               password: req.body.password });

});
// Define router for requests to register endpoint
app.get('/login', function (req, res) {
    res.render(res);
});
// Define router for requests to register endpoint
app.post('/register', function (req, res) {
    res.render(res);
});

// Initialize connection to mySQL database
/**let connection = mysql.createConnection({
    host: "35.232.221.94",
    user: "rnarayan7",
    password: "Fx3spy123",
    database: "mock_io_accounts",
    timeout: 60000
    //host: process.env.DB_HOST,
    //user: process.env.DB_USER,
    //password: process.env.DB_PASSWORD,
    //database: process.env.DB_NAME
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
});

connection.query("INSERT INTO accounts (first_name, last_name, email) VALUES ('sachin', 'narayan', 'cheechunan@yahoo.com');")*/
