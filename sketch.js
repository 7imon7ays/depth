var RECT_HEIGHT;
var RECT_WIDTH;
var particles = [];

function setup() {
    noCursor();
    background(0);
    createCanvas(displayWidth, displayHeight);
}

function draw() {
    RECT_WIDTH = displayWidth / 4;
    RECT_HEIGHT = displayHeight / 6;

    clear();
    background(0);
    stroke(255);
    noFill();
    drawShapes();
}

function drawShapes() {
    rect(mouseX, mouseY, RECT_WIDTH, RECT_HEIGHT);
    // Top left line.
    line(0, 0, mouseX, mouseY);
    // Bottom left line.
    line(0, displayHeight, mouseX, mouseY + RECT_HEIGHT);
    // Top right line.
    line(displayWidth, 0, mouseX + RECT_WIDTH, mouseY);
    // Bottom right line.
    line(
        displayWidth,
        displayHeight,
        mouseX + RECT_WIDTH,
        mouseY + RECT_HEIGHT
    );

    animateParticles();
}

function animateParticles () {
    particles.forEach(function (particle) {
        particle.move();
        particle.render();
    });
    line(640, 480, mouseX + RECT_WIDTH, mouseY + RECT_HEIGHT);
    line(
        displayWidth,
        displayHeight,
        mouseX + RECT_WIDTH,
        mouseY + RECT_HEIGHT
    );

    animateParticles();
}

function animateParticles () {
    particles.forEach(function (particle) {
        particle.move();
        particle.render();
    });
}

function mousePressed() {
    fullscreen(true);
    addParticle();
}

function addParticle () {
    var particleIdx = particles.length;

    // Approximation.
    // Should be equal to angle of line from center and bottom of screen to
    // center of rectangle.
    var particleAngle = (mouseX + RECT_WIDTH / 2) - displayWidth / 2;
    var particle = new Particle(particleIdx, particleAngle);
    particles.push(particle);
}

function mousePressed() {
    fullscreen(true);
    addParticle();
}

function addParticle () {
    var particleIdx = particles.length;

    // Approximation.
    // Should be equal to angle of line from center and bottom of screen to
    // center of rectangle.
    var particleAngle = (mouseX + RECT_WIDTH / 2) - displayWidth / 2;
    var particle = new Particle(particleIdx, particleAngle);
    particles.push(particle);
}

function Particle (index, angle) {
    this.xPos = displayWidth / 2;
    this.yPos = displayHeight;
    this.width = 25;
    this.height = 50;

    this.index = index;
    this.upVelocity = 4;
    this.sideVelocity = angle * .005;
}

Particle.prototype.move = function () {
    this.yPos -= this.upVelocity;
    this.xPos += this.sideVelocity;

    var didReachRectMiddle = this.yPos <= mouseY + RECT_HEIGHT / 2;
    if (didReachRectMiddle) {
        this._destroy();
    }
    this._shrink();
};

Particle.prototype.render = function () {
    ellipse(this.xPos, this.yPos, this.height, this.width);
}

Particle.prototype._shrink= function () {
    this.height *= .99;
    this.width *= .99;
}

Particle.prototype._destroy = function () {
    particles.splice(this.index);
}


function Particle (index, angle) {
    this.xPos = displayWidth / 2;
    this.yPos = displayHeight;
    this.width = 25;
    this.height = 50;

    this.index = index;
    this.upVelocity = 4;
    this.sideVelocity = angle * .005;
}

Particle.prototype.move = function () {
    this.yPos -= this.upVelocity;
    this.xPos += this.sideVelocity;

    var didReachRectMiddle = this.yPos <= mouseY + RECT_HEIGHT / 2;
    if (didReachRectMiddle) {
        this._destroy();
    }
    this._shrink();
};

Particle.prototype.render = function () {
    ellipse(this.xPos, this.yPos, this.height, this.width);
}

Particle.prototype._shrink= function () {
    this.height *= .99;
    this.width *= .99;
}

Particle.prototype._destroy = function () {
    particles.splice(this.index);
}
