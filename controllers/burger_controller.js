// Dependencies 
// ==============================
var express = require("express");

// Setting up the router
var router = express.Router();

// Importing the model to use its database functions
var burger = require("../models/burger.js");

// Create routes
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers : data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res){
   
});

module.exports = router;