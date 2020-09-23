var child = document.getElementsByTagName("footer")[0];
var numberCount = 0;

child.onclick = function(){
    numberCount++;
    child.getElementsByTagName("div")[0].innerHTML = numberCount;
};