let sky
let earth
let button1
let button2
let button3
let button4
let button5
let button6
let button7
let showEarth
let Wid = window.innerWidth
let Hei = window.innerHeight
let noOfButtons = 8

// Wave variables setup
let xspacing = 1; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 125; // Height of wave
let period // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave


function preload() {

sky = loadImage('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/sky.jpg')
earth = loadImage('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/Earth.png');
}

function setup() {

  showEarth = true
createCanvas (Wid, Hei);
 imgbackground();

  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));

fill (0)

var homeButton = createButton('Home');
homeButton.position ( width-((width/(noOfButtons + 1))*8), height-75);
homeButton.mousePressed(changeHome);


var button1 = createButton('Radio');
button1.position ( width-((width/(noOfButtons + 1))*7), height-75);
button1.mousePressed(changeRadio);

var button2 = createButton('Microwave');
button2.position ( width-((width/(noOfButtons + 1))*6), height-75);
button2.mousePressed(changeMicrowave);

var button3 = createButton ('Infrared');
button3.position (width-((width/(noOfButtons + 1))*5),height-75);
button3.mousePressed (changeInfrared);

var button4 = createButton ('Visible Light');
button4.position (width-((width/(noOfButtons + 1))*4),height-75);
button4.mousePressed (changeVisibleLight);

var button5 = createButton ('Ultraviolet');
button5.position (width-((width/(noOfButtons + 1))*3),height-75);
button5.mousePressed (changeUltraviolet);

var button6 = createButton ('X ray');
button6.position (width -((width/(noOfButtons + 1))*2), height-75);
button6.mousePressed (changeXray);

var button7 = createButton ('Gamma');
button7.position (width-((width/(noOfButtons + 1))*1),height-75);
button7.mousePressed (changeGamma);


}

function changeHome() {
  showEarth = true
}

function changeRadio() {
  showEarth = false
  period = 1500.0
  dx = (TWO_PI / period) * xspacing;
}
function changeMicrowave() {
     showEarth = false
  period = 1000.0
  dx = (TWO_PI / period) * xspacing;
}
function changeInfrared() {
   showEarth = false
  period = 800.0
  dx = (TWO_PI / period) * xspacing;
}
function changeVisibleLight() {
   showEarth = false
  period = 700.0
  dx = (TWO_PI / period) * xspacing;
}
function changeUltraviolet() {
   showEarth = false
  period = 500.0
  dx = (TWO_PI / period) * xspacing;
}
function changeXray() {
   showEarth = false
  period = 350.0
  dx = (TWO_PI / period) * xspacing;
}
function changeGamma() { showEarth = false
  period = 200.0
  dx = (TWO_PI / period) * xspacing;

}

function imgbackground() {
   imageMode(CORNERS);
  image(sky, 0, 0, Wid, Hei);
}

function draw() {
clear();
  imgbackground();


 if(showEarth) {
    noStroke ();
    fill (9, 69, 99);
    circle(width/2, height/2, 485);

    fill(20, 92, 127);
    circle(width/2, height/2, 455);

    fill(42, 131, 174);
    circle(width/2, height/2, 425);

    fill(65, 163, 211);
    circle(width/2, height/2, 395);

    fill (158, 207, 231);
    circle(width/2, height/2, 365);

  imageMode (CENTER);
  image (earth, width/2, height/2);

}else{
  calcWave();
  renderWave();
}

}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  }
}
