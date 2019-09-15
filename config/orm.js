var connection = require("./connection");

var orm = {
    selectAll: function(){
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function (err, result) {
          if (err) throw err;
          console.log(result);
      }); 
    },
    insertOne: function(){

    },
    updateOne: function(){

    }

};

module.exports = orm;