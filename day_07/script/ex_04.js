var child = document.getElementsByTagName("footer")[0];
var keyboardInput = "";

document.addEventListener('keydown', function(event) {
    keyboardInput += event.key;
    child.getElementsByTagName("div")[0].innerHTML = keyboardInput;

    if(keyboardInput.length >= 43)
    {
        lastCharacters = "";

        for(let i=(keyboardInput.length - 42); i < keyboardInput.length;i++)
            lastCharacters += keyboardInput[i];

        keyboardInput = lastCharacters;
        child.getElementsByTagName("div")[0].innerHTML = keyboardInput;
    }
    else
        child.getElementsByTagName("div")[0].innerHTML = keyboardInput;
}, true);