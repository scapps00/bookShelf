//loops through lists and sends to DOM
function loopForLists(results) {
    $(".books").text("");
    var end = results.length;
    for (i = 0; i < end; i++) {
        $(".books").append("<img class='bookPhoto' src='assets/img/books/" + results[i].keyword + ".jpg' alt=" + results[i].keyword + "><br><br><span class='boldAuthor'>" + results[i].author + ".</span> <span class='boldItalicTitle'>" + results[i].title + ".</span><br><br>Published " + results[i].pubYear + " by " + results[i].publisher + ". " + results[i].pages + " pages.<br><br>" + results[i].summary);
        if (i < end - 1) {
            $(".books").append("<br><br><br><span class='bar'></span><br><br>");
        }
    }
};

//loop for just titles
function loopForJustTitle(results) {
    $(".books").text("");
    var end = results.length;
    for (i = 0; i < end; i++) {
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
    for (i = 0; i < end; i++) {
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
    for (i = 0; i < end; i++) {
        $(".books").append("<img class='bookPhoto' src='assets/img/books/" + results[i].keyword + ".jpg' alt=" + results[i].keyword + ">");
        if (i < end - 1) {
            $(".books").append("<br><br>");
        }
    }
};

//click for List by Title
$("#title").click(function() {
    event.preventDefault;
    $.ajax({
        method: "GET",
        url: "/listByTitle"
    }).done(function(results) {
        loopForLists(results);
    });
});

//click for List by Author
$("#author").click(function() {
    event.preventDefault;
    $.ajax({
        method: "GET",
        url: "/listByAuthor"
    }).done(function(results) {
        loopForLists(results);
    });
});

//click for List Just Title
$("#justTitle").click(function() {
    event.preventDefault;
    $.ajax({
        method: "GET",
        url: "/listJustTitle"
    }).done(function(results) {
        loopForJustTitle(results);
    });
});

//click for List Just Author
$("#justAuthor").click(function() {
    event.preventDefault;
    $.ajax({
        method: "GET",
        url: "/listJustAuthor"
    }).done(function(results) {
        loopForJustAuthor(results);
    });
});

//click for List Just Cover
$("#justCover").click(function() {
    event.preventDefault;
    $.ajax({
        method: "GET",
        url: "/listJustCover"
    }).done(function(results) {
        loopForJustCover(results);
    });
});