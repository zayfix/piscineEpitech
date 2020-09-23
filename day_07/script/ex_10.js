var okButton = document.getElementsByTagName("footer")[0].getElementsByTagName("a")[0];


okButton.onclick = function() {
    document.cookie = "acceptCookies=true"; 
}

if (document.cookie.indexOf('acceptCookies') != -1) 
    document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML = "<button>Delete the cookie</button>";
else 
    alert('cookie is not here');