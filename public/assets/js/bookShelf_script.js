$("#title").click(function() {
    $.ajax({
        method: "GET",
        url: "/listByTitle"
    }).done(function(results) {
        $(".books").text(results[0].title);
    });
});