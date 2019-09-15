// Dependencies 
// ================================
var express = require("express");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
// Create an instance of the express app.
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller");

app.use(routes);

// Routes
// app.get("/", function(req, res){
//     connection.query("SELECT * FROM burgers;", function (err, data){
//         if (err) {
//             return res.status(500).end();
//         }
//         res.render("index", { burgers: data });
//     });
   
// });

// Get all burgers
// app.get("/api/burgers", function(req, res){
//     connection.query("SELECT * FROM burgers;", function (err, data){
//         if (err) {
//             return res.status(500).end();
//         }
//         res.json(data);
//     });
// });


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  