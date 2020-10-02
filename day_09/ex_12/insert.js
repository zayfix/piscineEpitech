$(document).ready(function () {
    $("<div>Wow, I precede the image!</div>").insertBefore("img");
    $("<div>Hey, I come in last</div>").insertAfter("img");
});