var news = "HELLO";

let capture;

function setup() {
    createCanvas(windowWidth, windowHeight*2);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
	capture.hide();
}

function draw() {
    background(255);
    image(capture, 0, 0, windowWidth, windowHeight);
    //filter(INVERT);
}

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
