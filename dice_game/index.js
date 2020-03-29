
var randomNumber1 = Math.floor((Math.random())*6)+1;
var randomimgsrc1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimgsrc1);
var randomNumber2 = Math.floor((Math.random())*6)+1;
var randomimgsrc2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimgsrc2);
var dk = document.querySelector("h1");
if(randomNumber1>randomNumber2)
{
dk.innerHTML="🚩 Player 1 wins!";
}
else if(randomNumber1<randomNumber2){
dk.innerHTML="Player 2 wins! 🚩";
}
else{
  dk.innerHTML="Draw!";
}
