var child = document.getElementsByTagName("footer")[0];
var canvas = child.getElementsByTagName("canvas")[0];
var boutonPause = child.getElementsByTagName("button")[0];
var boutonStop = child.getElementsByTagName("button")[1];
var boutonMute = child.getElementsByTagName("button")[2];

var triangle = canvas.getContext("2d")
triangle.beginPath();
triangle.moveTo(6, 6);
triangle.lineTo(14, 10);
triangle.lineTo(6, 14);
triangle.lineWidth = 1;
triangle.strokeStyle = "blue";
triangle.stroke();
triangle.fillStyle = "white";
triangle.fill();
triangle.closePath();

var audio = new Audio('https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3')

canvas.addEventListener("click", function () {
    audio.play();
});

boutonPause.addEventListener("click", function () {
    audio.pause();
});

boutonStop.addEventListener("click", function () {
    audio.pause();
    audio.currentTime = 0;
});

boutonMute.addEventListener("click", function () {
    if (audio.muted)
        audio.muted = false;
    else
        audio.muted = true;
});