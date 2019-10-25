var news = "HELLO";

let capture;
let ai;

function preload() {
  img = loadImage('img/a1.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO);
    capture.size(windowWidth, windowHeight);
    capture.hide();
    ai = loadImage('image/a1.png');


}

function draw() {
    background(255);
    image(capture, 0, 0, windowWidth, windowHeight);
    //filter(INVERT);
    image(iai, 0, height / 2, img.width / 2, img.height / 2);
}






/*
function keyPressed() {
    if (keyCode === 37) {
        news = "LEFT";
    }
    if (keyCode === 39) {
        news = "RIGHT";
    }
    if (keyCode === 13) {
        news = "ENTER";
    }
}
*/
