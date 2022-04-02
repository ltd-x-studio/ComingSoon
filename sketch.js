/* eslint-disable no-undef, no-unused-vars */

let logo;
var size;
var title;
var fontSize;
var a;
var twitter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  logo = createVideo("video/logo-glitch.webm", vidLoad);

  textFont("Koulen");
  fill(255);
  textAlign(CENTER);

  a = createA("https://twitter.com/LTD_X_Studio", "");
  twitter = createImg("video/twitter.png", "the p5 magenta asterisk");
  twitter.parent(a);

  windowResized();
}

function draw() {
  clear();
  background(0);
  text("Coming soon..", windowWidth / 2, (windowHeight * 2) / 5 + size / 2);
}

// This Redraws the Canvas when resized
windowResized = function () {
  clear();
  var twSize;
  resizeCanvas(windowWidth, windowHeight);
  //mobile
  if (windowWidth < 550) {
    size = 200;
    fontSize = 28;
    twSize = 32;
  }
  //tablet
  else if (windowWidth <= 1024) {
    size = 320;
    fontSize = 44;
    twSize = 40;
  }
  //desktop
  else {
    size = 400;
    fontSize = 54;
    twSize = 48;
  }
  logo.size(size, size);
  logo.position(windowWidth / 2 - size / 2, (windowHeight * 2) / 5 - size / 2);
  textSize(fontSize);

  twitter.style("width", twSize + "px");
  twitter.position(
    width / 2 - twSize / 2,
    (windowHeight * 2) / 5 + size / 2 + 100
  );
};

function vidLoad() {
  logo.loop();
  logo.volume(0);
  logo.play();
}
