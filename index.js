var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var filename1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",filename1);

var filename2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",filename2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}