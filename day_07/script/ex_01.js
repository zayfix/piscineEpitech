var anon = function() {
    var child = document.getElementsByTagName("footer")[0];
    child.getElementsByTagName("div")[0].innerHTML = "Hello World !";
  }
  anon();