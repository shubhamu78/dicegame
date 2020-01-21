var random1=Math.floor((Math.random() * 6) + 1);
var randomImageSrc="images/dice"+ random1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc);

var random2=Math.floor((Math.random()*6)+1);
var randomImageSrc2="images/dice"+ random2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2);

if(random1 > random2)
    {
        document.querySelector("h1").innerHTML="🚩 Player1 Wins !!!";
    }
else if(random2 > random1)
    {
        document.querySelector("h1").innerHTML="Player 2 Wins 🚩 !!!";
    }
else
    {
        document.querySelector("h1").innerHTML="Draw !!!";
    }