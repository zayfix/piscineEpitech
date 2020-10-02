$(document).ready(function () {
    $("p").hover(function () {
        $(this).addClass("blue");
        },
    );

    $(".highlighted").click(function () {
        $(this).hide();
    });
});