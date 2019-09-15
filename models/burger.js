// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");


orm.selectAll("burgers");

orm.insertOne();

orm.updateOne();

module.exports = orm;