function loopForListByTitle(results) {
    var end = results.length;
    for (i = 0; i < end; i++) {
        $(".books").append(results[i].title + " by " + results[i].author);
        if (i < end - 1) {
            $(".books").append("<br><br>");
        }
    }
};

$("#title").click(function() {
    $.ajax({
        method: "GET",
        url: "/listByTitle"
    }).done(function(results) {
        console.log(results.length);
        loopForListByTitle(results);
    });
});