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

    $(".searchbar").click(function() {
        var str = $("#searchbar").val();

        switch (str) {
            case "note":
                $("li").hide();
                $(".note").show();
                break;
            case "email":
                $("li").hide();
                $(".email").show();
                break;
            case "todo_":
                $("li").hide();
                $(".todo_").show();
                break;
            default:
                $("li").show();
                break;
        }
    });
});