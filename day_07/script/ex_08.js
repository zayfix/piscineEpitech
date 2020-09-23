var canvas = document.getElementsByTagName("footer")[0].getElementsByTagName("canvas");

const black  = "rgb(0, 0, 0)"
var nbBlack = 0;
const orange = "rgb(255, 165, 0)"
var nbOrange = 0;
const olive  = "rgb(128, 128, 0)"
var nbOlive = 0;
const purple = "rgb(128, 0, 128)"
var nbPurple = 0;

var numberOfCanvas = canvas.length;
console.log(numberOfCanvas);

for(let i=0; i < numberOfCanvas; i++)
{
    let saucisse = canvas[i];
    console.log(window.getComputedStyle(saucisse,null).getPropertyValue("background-color"));
    let colorOfCanvas = window.getComputedStyle(saucisse,null).getPropertyValue("background-color");

    if(colorOfCanvas == black)
        nbBlack++;
    if(colorOfCanvas == orange)
        nbOrange++;
    if(colorOfCanvas == olive)
        nbOlive++;
    if(colorOfCanvas == purple)
        nbPurple++;
}   

for(let i=0; i < numberOfCanvas; i++)
{
    if(i < nbOrange)
        canvas[i].style.background = orange;
    else if(i>= nbOrange && i < (nbOrange + nbPurple))
        canvas[i].style.background = purple;
    else if(i>= (nbOrange + nbPurple) && i < (nbOrange + nbPurple + nbBlack))
        canvas[i].style.background = black;
    else if(i>= (nbOrange + nbPurple + nbBlack) && i < (nbOrange + nbPurple + nbBlack + nbOlive))
        canvas[i].style.background = olive;

}