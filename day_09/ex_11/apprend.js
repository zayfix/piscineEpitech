$(document).ready(function () {
    $("button").click(function() {
        $("body").append("<div>" + $('#listItem').val() + "</div>");
    })
});