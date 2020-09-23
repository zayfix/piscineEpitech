var footer = document.getElementsByTagName("footer")[0];
var select = footer.getElementsByTagName("select")[0];
var defaultFontSize = 16;

footer.getElementsByTagName("button")[0].addEventListener("click", function () {
    document.body.style.fontSize = (defaultFontSize++ + "px");
});

footer.getElementsByTagName("button")[1].addEventListener("click", function () {
    document.body.style.fontSize = (defaultFontSize-- + "px");
});

select.onchange = function () {
    document.body.style.background = select.value;
}