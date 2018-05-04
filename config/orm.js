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
        var queryString = "SELECT DISTINCT author FROM " + table + " ORDER BY author ASC;";
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
    },

    isbn: function(table1, table2, cb) {
        var queryString = "SELECT " + table1 + ".title, " + table1 + ".keyword, " + table2 + ".keyword, " + table2 + ".isbn FROM " + table1 + " LEFT JOIN " + table2 + " ON " + table1 + ".keyword = " + table2 + ".keyword ORDER BY " + table1 + ".title ASC";
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },

    randomBook: function(table, cb) {
        var queryString = "SELECT id FROM " + table;
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            var numBooks = results.length;
            var pick = Math.floor(Math.random() * numBooks);
            var pickId = results[pick].id;
            var queryString2 = "SELECT * FROM " + table + " WHERE id = " + pickId;
            connection.query(queryString2, function(err, results) {
                if (err) throw err;
                cb(results);
            });
        });
    } 

};

module.exports = orm;