var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  btn_green = createButton("Green");
  btn_green.position(200, 100);
  btn_green.mousePressed(green_bg);

  btn_red = createButton("Red");
  btn_red.position(100, 100);
  btn_red.mousePressed(red_bg);
}

function draw() {
  background(r,g,b);
}

function green_bg(){

  r = 0;
  g = 255;
  b = 0;

}

function red_bg(){

  r = 255;
  g = 0;
  b = 0;

}

