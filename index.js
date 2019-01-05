var ctx = document.getElementById("ctx").getContext("2d");
ctx.font = "80px Arial";
var WIDTH = 1920;
var HEIGHT = 1080;
var background = new Image(); background.src = "blue.png";

function company() {
    ctx.drawImage(background, 0, 0, WIDTH, HEIGHT);
}

window.onload = company;

