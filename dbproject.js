const { faker, CompanyModule } = require("@faker-js/faker");
var mysql = require("mysql");
const express = require("express");
const app = express(); // executes express and saves it to a const
var bodyParser = require("body-parser"); //need this module to extract information from post requests

app.set("view engine", "ejs"); // configure express application
app.use(bodyParser.urlencoded({ extended: true })); //configure the body parser
app.use(express.static(__dirname + "/public")); // serve the content of the public directory to the views (make the content of public directory accessible by views)

var connection = mysql.createConnection({
  //establish the coonnection with the DB
  host: "localhost",
  user: "root",
  password: "password", //setup in mysql - Colt doesnt use this line
  database: "finalproject",
  port: "3306", //it was set up when creating the db in mysql - Colt doesnt use this line
});

connection.connect((err) => {
  // Colt's code works if we comments this out
  // references the ''connection'' that was created before
  if (err) {
    throw err;
  } else {
    console.log("connected");
  }
});

// var tableUsers = `CREATE TABLE project_users (
//     email VARCHAR(255) PRIMARY KEY,
//     created_at TIMESTAMP DEFAULT NOW()
// )`; //faker will provide fake data for created_at so we have to be able to overwrite it

// connection.query(tableUsers, function (err, results, fields) {
//   if (err) throw err;
//   console.log("Table created");
// });

// var users_data = []; // creates an array  of 500 users
// for (var i = 0; i < 500; i++) {
//   users_data.push([faker.internet.email(), faker.date.past()]);
// }

// var q = "INSERT INTO project_users (email, created_at) VALUES ?";
// // inserts values into the table
// connection.query(q, [users_data], function (err, result) {
//   if (err) throw err;
//   console.log(err);
//   console.log(result);
// });

app.get("/", function (req, res) {
  // define a get route
  // find the total number of users in the db
  var count_query = "SELECT COUNT(*) AS count FROM project_users";
  connection.query(count_query, function (err, result, field) {
    if (err) throw err; // need to re-write this code on the coming lessons
    var total_users = result[0].count;
    res.render("home", { data: total_users }); // renders the file home. It will automaticly look for a directory called views (directory name can be changed if you want). And inside that directory, it's going to look
    // for a file called home.ejs (.ejs may change depend on the app.set("view engine", "ejs")). It takes the content of home.ejs and renders it. We can pass data through from js file (total_users) to ejs file (js object) under the name of data
  });
});

app.post("/register", function (req, res) {
  //when the user clicks the button, it generates the http post request
  //define a post route and needs to 'npm install --save body-parser'. When the request is sent, the body parser process/parses the data from the http request body.
  //Somewhere in the body (req.body.email), contains informationabout the email that was inputed by the user. Body parses turn this data into js and it can used and manipulated
  var newUser = { email: req.body.email }; // the email coming from the form is stored in the body of the request
  connection.query(
    "INSERT INTO project_users SET ?", //inserts a new user into the email waiting list/db
    newUser,
    function (err, result) {
      if (err) throw err;
      console.log(result);
      res.redirect("/"); //redirects the user to the homepage after submitting the email address, renders the page with the updated user count
    }
  );
});

app.listen(3000, () => {
  // this code only works with app.get and doesnt work with connection.query. When using the connection.quer codes, need to comment this code and uncomment the connection.end
  console.log("Listening on port 3000");
});

// connection.end(); // the app.listen and the connection.end dont work together. Also, when running the code to create the table while using the app.liste, the code run but the table is not created. On the other hand, the table is created if commeintg the app.listen and using the connection.end
