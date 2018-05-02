//import connection
const connection = require("./connection.js");

var orm = {

    listByTitle: function(table, cb) {
        var queryString = "SELECT * FROM " + table + " ORDER BY title ASC;";
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },

    listByAuthor: function(table, cb) {
        var queryString = "SELECT * FROM " + table + " ORDER BY author ASC;";
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },

    listJustTitle: function(table, cb) {
        var queryString = "SELECT title FROM " + table + " ORDER BY title ASC;";
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },
    
    listJustAuthor: function(table, cb) {
        var queryString = "SELECT author FROM " + table + " ORDER BY author ASC;";
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },
    
    listJustCover: function(table, cb) {
        var queryString = "SELECT title, keyword FROM " + table + " ORDER BY title ASC;";
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    } 

};

module.exports = orm;