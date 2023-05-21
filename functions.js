
function mousePressed() {
  let r2 = random(0.2, 1.2);
  let zoffUpdate2 = random(0.001, 0.0001);
  let noiseMax2 = random(0, 1.5);
  
  let n = new NoiseCircle(mouseX, mouseY, r2, zoffUpdate2, noiseMax2);
  noiseCircles.push(n);
}

function updateBG() {
  noStroke();
  //fill(210,210,255,20);
  //fill(0, 100, 30, 5);
  fill(30,72,95, 10);
  rect(0, 0, width, height);
}

function randomPoints() {
  noStroke();
  fill(0,random(255), random(255),5);
  ellipse(random(width), random(height), random(width));
}

// function soundThreshod() {
//   let vol = mic.getLevel();
//   let threshold1 = 0.03;
//   if (vol > threshold1) {
//     fill(255, 0);
//     strokeWeight(1);
//     stroke(255);
//     ellipse(random(width), random(height), vol * 100);
//   }

//   let threshold2 = 0.4;
//   if (vol > threshold2) {
//     fill(0);
//     ellipse(width / 2, height / 2, height, height);
//   }
// }

