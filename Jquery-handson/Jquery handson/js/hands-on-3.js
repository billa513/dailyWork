$(() => {
    $('.chapter-title').click(function() {
        $(this).nextAll().toggle();
    });
    $("p").mousemove(function(event) {
        var xcor = event.pageX - $(this).offset().left;
        var ycor = event.pageY - $(this).offset().top;
        console.log("X-cordinate " + xcor + "Y-cordinate" + ycor);
    });
});