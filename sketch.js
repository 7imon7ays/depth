var RECT_HEIGHT = 80;
var RECT_WIDTH = 160;

function setup() {
    noCursor();
    background(0);
    createCanvas(640, 480);
}

function draw() {
    clear();
    background(0);
    stroke(255);
    noFill()
    rect(mouseX, mouseY, RECT_WIDTH, RECT_HEIGHT);
    // Top left line.
    line(0, 0, mouseX, mouseY);
    // Bottom left line.
    line(0, 480, mouseX, mouseY + RECT_HEIGHT);
    // Top right line.
    line(640, 0, mouseX + RECT_WIDTH, mouseY);
    // Bottom right line.
    line(640, 480, mouseX + RECT_WIDTH, mouseY + RECT_HEIGHT);
}
