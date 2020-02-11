let earth // Declare variable 'img'
let sky
let diamEarth
let button1
let button2
let button3
let button4
let button5
let button6
let button7



function preload() { // runs once

sky = loadImage ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/sky.jpg', 'sky')
earth = loadImage ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/Earth.png','earth');
}

function setup() { // happens once
createCanvas (window.innerWidth, window.innerHeight);
background (0); // 0 preto 255 branco; // Fundo,Fundo,Fundo
}


function mousePressed () { // Event
}


function draw() { // happens forever.. loop

  strokeWeight(18);
    stroke(7, 62, 89);
    circle(769,361, 480);

    strokeWeight(14);
    stroke(20, 92, 127);
    circle(769,361, 448);

    strokeWeight(12);
    stroke(42, 131, 174);
    circle(769,361, 422);

    strokeWeight(10);
    stroke(65, 163, 211);
    circle(769,361, 400);

     strokeWeight(11);
    stroke(158, 207, 231);
    circle(769,361, 379);

     strokeWeight(20);
    stroke(158, 207, 231);
    circle(769,361, 350);


  image (sky, 0 , 0, window.innerWidth, window.innerHeight);
  imageMode (CENTER);
  image (earth,width/2, height/2); // (img, x, y, w, h)

  fill (0)
  button1 = createButton('Radio');
  button1.position ( width-1410, height-75);
  button1.mousePressed(changeRadio);

  fill (0)
  button2 = createButton('Microwave');
  button2.position ( width-1210, height-75);
  button2.mousePressed(changeMicrowave);

  button3 = createButton ('Infrared');
  button3.position (width-1010,height-75);
  button3.mousePressed (changeInfrared);

  button4 = createButton ('Visible Light');
  button4.position (width-810,height-75);
  button4.mousePressed (changeVisibleLight);

  button5 = createButton ('Ultraviolet');
  button5.position (width-610,height-75);
  button5.mousePressed (changeUltraviolet);

  button6 = createButton ('X ray');
  button6.position (width -410, height-75);
  button6.mousePressed (changeXray);

  button7 = createButton ('Gamma');
  button7.position (width-210,height-75);
  button7.mousePressed (changeGamma);
}


function changeRadio() {
}
function changeMicrowave() {
}
function changeInfrared() {
}
function changeVisibleLight() {
}
function changeUltraviolet() {
}
function changeXray() {
}
function changeGamma() {
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
