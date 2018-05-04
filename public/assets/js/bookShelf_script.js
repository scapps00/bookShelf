//display .books if it's not visible
function displayBooks() {
    if ($(".books").css("display") == "none") {
        $(".books").css("display", "block");
    }
}

//loops through lists and sends to DOM
function loopForLists(results) {
    $(".books").text("");
    var end = results.length;
    for (var i = 0; i < end; i++) {
        var lengthForSplit = results[i].author.length;
        var split = results[i].author.split("");
        if (split[lengthForSplit - 1] !== ".") {
            $(".books").append("<img class='bookPhoto' src='assets/img/books/" + results[i].keyword + ".jpg' alt=" + results[i].keyword + "><br><br><span class='boldAuthor'>" + results[i].author + ".</span> <span class='boldItalicTitle'>" + results[i].title + ".</span><br><br>Published " + results[i].pubYear + " by " + results[i].publisher + ". " + results[i].pages + " pages.<br><br>" + results[i].summary);
        } else {
            $(".books").append("<img class='bookPhoto' src='assets/img/books/" + results[i].keyword + ".jpg' alt=" + results[i].keyword + "><br><br><span class='boldAuthor'>" + results[i].author + "</span> <span class='boldItalicTitle'>" + results[i].title + ".</span><br><br>Published " + results[i].pubYear + " by " + results[i].publisher + ". " + results[i].pages + " pages.<br><br>" + results[i].summary);
        }
        if (i < end - 1) {
            $(".books").append("<br><br><br><span class='bar'></span><br><br>");
        }
    }
};

//loop for just titles
function loopForJustTitle(results) {
    $(".books").text("");
    var end = results.length;
    for (var i = 0; i < end; i++) {
        $(".books").append("<span class='boldItalicTitle'>" + results[i].title + "</span>");
        if (i < end - 1) {
            $(".books").append("<br>");
        }
    }
};

//loop for just authors
function loopForJustAuthor(results) {
    $(".books").text("");
    var end = results.length;
    for (var i = 0; i < end; i++) {
        $(".books").append("<span class='boldAuthor'>" + results[i].author + "</span>");
        if (i < end - 1) {
            $(".books").append("<br>");
        }
    }
};

//loop for just cover
function loopForJustCover(results) {
    $(".books").text("");
    var end = results.length;
    for (var i = 0; i < end; i++) {
        $(".books").append("<img class='bookPhoto' src='assets/img/books/" + results[i].keyword + ".jpg' alt=" + results[i].keyword + ">");
        if (i < end - 1) {
            $(".books").append("<br><br>");
        }
    }
};

//loop for isbn
function loopForIsbn(results) {
    $(".books").text("");
    var end = results.length;
    for(var i = 0; i < end; i++) {
        $(".books").append("<span class='boldItalicTitle'>" + results[i].title + "</span> ISBN-13: " + results[i].isbn + ".");
        if (i < end - 1) {
            $(".books").append("<br><br>");
        }
    }
};

//action for random book
function randomBook(results) {
    $(".books").text("");
    $(".books").append("<img class='bookPhoto' src='assets/img/books/" + results[0].keyword + ".jpg' alt=" + results[0].keyword + "><br><br><span class='boldAuthor'>" + results[0].author + ".</span> <span class='boldItalicTitle'>" + results[0].title + ".</span><br><br>Published " + results[0].pubYear + " by " + results[0].publisher + ". " + results[0].pages + " pages.<br><br>" + results[0].summary);
};

//click for List by Title
$("#title").click(function(event) {
    event.preventDefault;
    $.ajax({
        method: "GET",
        url: "/listByTitle"
    }).done(function(results) {
        displayBooks();
        loopForLists(results);
    });
});

//click for List by Author
$("#author").click(function(event) {
    event.preventDefault;
    $.ajax({
        method: "GET",
        url: "/listByAuthor"
    }).done(function(results) {
        displayBooks();
        loopForLists(results);
    });
});

//click for List Just Title
$("#justTitle").click(function(event) {
    event.preventDefault;
    $.ajax({
        method: "GET",
        url: "/listJustTitle"
    }).done(function(results) {
        displayBooks();
        loopForJustTitle(results);
    });
});

//click for List Just Author
$("#justAuthor").click(function(event) {
    event.preventDefault;
    $.ajax({
        method: "GET",
        url: "/listJustAuthor"
    }).done(function(results) {
        displayBooks();
        loopForJustAuthor(results);
    });
});

//click for List Just Cover
$("#justCover").click(function(event) {
    event.preventDefault;
    $.ajax({
        method: "GET",
        url: "/listJustCover"
    }).done(function(results) {
        displayBooks();
        loopForJustCover(results);
    });
});

//click for isbn
$("#isbn").click(function(event) {
    event.preventDefault();
    $.ajax({
        method: "GET",
        url: "/isbn"
    }).done(function(results) {
        displayBooks();
        loopForIsbn(results);
    });
});

//click for Random Book
$("#randomBook").click(function(event) {
    event.preventDefault;
    $.ajax({
        method: "GET",
        url: "/randomBook"
    }).done(function(results) {
        displayBooks();
        randomBook(results);
    });
});