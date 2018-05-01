//require orm
const orm = require("../config/orm.js");

const books = {

    listByTitle: function(cb) {
        orm.listByTitle("books", function(res) {
            cb(res);
        });
    }

};

module.exports = books;