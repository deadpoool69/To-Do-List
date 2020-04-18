$(document).ready(function() {

    $("ul").on("click", "li", function() {
        $(this).toggleClass("selected1");
    });

    $("ul").on("click", "span", function(event) {
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
        });
        event.stopPropagation();
    });

    $("input").on("keypress", function(event2) {
        if (event2.which === 13) {
            var todo = $(this).val();
            $(this).val("");
            $("ul").append("<li><span>X </span>" + todo + "</li");
        }
    });



});