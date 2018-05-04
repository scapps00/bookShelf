//require orm
const orm = require("../config/orm.js");

const books = {

    listByTitle: function(cb) {
        orm.listByTitle("books", function(res) {
            cb(res);
        });
    },

    listByAuthor: function(cb) {
        orm.listByAuthor("books", function(res) {
            cb(res);
        });
    },

    listJustTitle: function(cb) {
        orm.listJustTitle("books", function(res) {
            cb(res);
        });
    },

    listJustAuthor: function(cb) {
        orm.listJustAuthor("books", function(res) {
            cb(res);
        });
    },

    listJustCover: function(cb) {
        orm.listJustCover("books", function(res) {
            cb(res);
        });
    },

    isbn: function(cb) {
        orm.isbn("books", "isbn", function(res) {
            cb(res);
        });
    },

    randomBook: function(cb) {
        orm.randomBook("books", function(res) {
            cb(res);
        });
    }

};

module.exports = books;