//import connection
const connection = require("./connection.js");

var orm = {

    listByTitle: function(table, cb) {
        var queryString = "SELECT * FROM " + table + " ORDER BY title ASC;";
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    }

};

module.exports = orm;