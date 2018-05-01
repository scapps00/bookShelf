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

//click for List by Title
$("#title").click(function() {
    event.preventDefault;
    $.ajax({
        method: "GET",
        url: "/listByTitle"
    }).done(function(results) {
        console.log(results.length);
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
        console.log(results.length);
        loopForLists(results);
    });
});