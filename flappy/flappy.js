var bird;
var pipes = [];
var score = 0;
var font, fontsize = 32;
function preload(){
    tlo = loadImage("walking.png");
    moon = loadImage("moon.png");
    usa = loadImage("usa.png");
    cccp = loadImage("cccp.png");
}


function setup() {
    createCanvas(800, 600);
    bird = new Bird();
    pipes.push(new Pipe());
    textSize(fontsize);
    textFont('Georgia');
    textAlign(CENTER, CENTER);
}
    
function draw() {
    background(tlo);
    scores();
    bird.update();
    bird.show();
    textAlign(RIGHT);
    fill(255,204,0);
    text("Punkty", 110,60);
    text(score, 60, 80);
   
    
    
    if (frameCount % 60 == 0) {
        pipes.push(new Pipe());
    }



    function scores() {
        for (var i = pipes.length - 1; i >= 0; i--) {
            pipes[i].show();
            pipes[i].update();
            if (pipes[i].hits(bird)) {
                // console.log("uderz");
            }



            if (pipes[i].offscreen()) {
                pipes.splice(i, 1);
            }
        }
    }
}
function keyPressed() {
    if (key == ' ') {
        //console.log("space");
        bird.up();
    }
}

function Bird() {
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
    this.show = function () {
            image(moon, this.x, this.y);
    }
    this.up = function () {                                   
        this.velocity += this.lift;


    }
    this.update = function () {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;

        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
        
    }
}
function Pipe() {    
    points();
   
    this.top = random(height / 2);
    console.log(this.top);
    this.bottom = random(height / 2);
    console.log(this.bottom);
     if (this.top+50 > this.bottom || this.bottom+50> this.top){
        this.bottom -=  20;
        this.top -=20;
    }
    if (this.top-30 > this.bottom || this.bottom-30> this.top){
        this.bottom +=10;
        this.top +=10;
    }
    this.x = width;
    this.w = 50; // szerokosc
    this.speed = 3;
    this.highlight = false;
    this.hits = function (bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.highlight = true;
                return true;
            }
           

            return false;
        }

    }

    this.show = function () {
        fill(255);
        if (this.highlight) {
            
            score = 0;
        }
        image(usa, this.x, 0, this.w, this.top);
        image(cccp, this.x, height - this.bottom, this.w, this.bottom);
    }

    this.update = function () {
        this.x -= this.speed;
    }
    this.offscreen = function () {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }
    function points(){
        score++
        console.log(score);

          }


    
}
