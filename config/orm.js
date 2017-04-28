// Import MySQL connection.
var connection = require("../config/connection.js");

// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

// Object Relational Mapper (ORM)

var orm = {
  //select all queury
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString,
      [tableInput, colToSearch, valOfCol], function(err, result) {
      console.log(result);
      console.log("------");
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol, orderBy) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ? ?";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol, orderBy], function(err, result) {
      console.log(result);
      console.log("------");
    });
  },
  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
