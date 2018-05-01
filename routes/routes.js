const path = require("path");
const books = require("../models/books.js");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });

    app.get("/bookshelf", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/bookShelf.html"));
    });

    app.get("/listByTitle", function(req, res) {
        books.listByTitle(function(data) {
            res.send(data);
        });
    });

};