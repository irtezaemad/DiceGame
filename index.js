
function choosePic(){
var myPix=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randomNum=Math.floor(Math.random()*myPix.length);
document.querySelector("#img1").setAttribute("src",myPix[randomNum]);
var yourPix=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var numRandom=Math.floor(Math.random()*yourPix.length);
document.querySelector(".img2").setAttribute("src",yourPix[numRandom]);
if(randomNum>numRandom){
  document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (numRandom>randomNum) {
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML="Its a Draw";
}
}
choosePic();
