$(document).ready(function () {
    $("input").valid(function() {
        $("ul").append("<li>" + $('input').val() + "</li>");
    })
});