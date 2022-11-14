var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2= Math.floor(Math.random()*6);
// we can also get the random images by following method
// var ImageRandom = "images/dice" + randomNumber1 + ".png"
//document.getElementsByClassName("img1")[0].setAttribute("src" , ImageRandom)




//creating a array of all six images 
var randomImg = ['dice1.png' , 'dice2.png', 'dice3.png','dice4.png', 'dice5.png','dice6.png']

var image1 = randomImg[randomNumber1];//finding the image using random index b/w 0 to 5
var image2 = randomImg[randomNumber2];

document.getElementsByClassName("img1")[0].setAttribute("src" , "images/"+image1)

document.getElementsByClassName("img2")[0].setAttribute("src" , "images/"+image2)

var change = document.querySelector(".container h1");
if(randomNumber1 > randomNumber2){
    change.innerHTML = " 🚩 Player 1 Win"
}
else if(randomNumber1 == randomNumber2){
change.innerHTML = "DRAW"
}
else{
    change.innerHTML = "Player 2 Win 🚩"
}
//refreshing the page
const refreshButton = document.querySelector('#btn');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)
