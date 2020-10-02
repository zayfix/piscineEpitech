$(document).ready(function () {
    $(".platypus").click(function () { 
        $(this).css("position", "relative")
        $(this).animate({left: "150px", top: "200px"}, 500)
        $(this).css("background", "green")
    });
});