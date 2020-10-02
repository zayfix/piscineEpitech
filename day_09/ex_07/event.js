$(document).ready(function () {
    $("p").mouseenter(function () { 
        $(this).css("background", "#D3D3D3");
    });
    $("p").mouseleave(function () { 
        $(this).css("background", "white");
    });
    $("p").click(function () { 
        $(this).hide();
    });
});