$(document).ready(function() {

    $(".listitem").click(function() {
        var str = $("#listitem").val();
        var style = $("select").val();
        if (str != "") {
            if (style != "none") {
                $("ul").append("<li class=\"" + style + "\"> " + str + "</li>");
            } else {
                $("ul").append("<li>" + str + "</li>");
            }
        }
        $(".note").css("border", "solid 1px blue");
        $(".email").css("border", "solid 1px green");
        $(".todo_").css("border", "solid 1px red");
    });
});