var child = document.getElementsByTagName("footer")[0];
var canvas = child.getElementsByTagName("canvas")[0];

canvas.addEventListener("mouseover", getPos);

function getPos() {
    console.log(canvas.clientHeight);
}