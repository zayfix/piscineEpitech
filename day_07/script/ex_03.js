var child = document.getElementsByTagName("footer")[0];

child.onclick = function () {
    do
        var name = prompt("What's your name ?");
    while (name == null || name == "");
    if(confirm("Are you sure that " + name + " is your name ?")) {
        alert("Hello " + name + " !");
        child.getElementsByTagName("div")[0].innerHTML = "Hello <strong>" + name + "</strong> !";
    }
    else {

    }
};