//let mic;
let phase = 0;
let zoff = 0;

let noiseCircles = [];

function setup() {
  createCanvas(600,800);
  background(0,0,50);
  frameRate(60);

  // mic = new p5.AudioIn();
  // mic.start();

//   for (let i = 0; i < 10; i++) {
//     let x = random(width);
//     let y = random(height);
//     let r1 = random(0.2, 1.2);
//     let zoffUpdate1 = random(0.001, 0.0001);
//     let noiseMax1 = random(0, 1.5);

//     noiseCircles[i] = new NoiseCircle(x, y, r1, zoffUpdate1, noiseMax1);
//   }
}

function draw() {
  //let vol = mic.getLevel() * 5;
  let vol = 0.5;
  //clear();
  updateBG();
  //background(0,0,50);
  //randomPoints();
  //soundThreshod();
  for (let i = 0; i < noiseCircles.length; i++) {
    noiseCircles[i].Draw(vol);
    //littleCircle.move();
    noiseCircles[i].crawling();
    noiseCircles[i].br += 0.05;                   //get bigger
        if (noiseCircles[i].br > width/50) {
          noiseCircles[i].br = width/50;
        }

    //communication
    let overlapping =false;
    for (let j = 0; j < noiseCircles.length; j++) {
      
      //draw line
      if (i != j) {
        if (noiseCircles[j] != noiseCircles[i] && noiseCircles[i].communication(noiseCircles[j])) {
          overlapping = true;
          //stroke(230, 238, 156, 100);
          stroke(255,255,200,50);
          strokeWeight(0.3);
          line(noiseCircles[i].x,noiseCircles[i].y,
               noiseCircles[j].x,noiseCircles[j].y);
        }
      }
      
      //change color
      if (overlapping) {
        //let c1 = color(255, 152, 0, 50);
        //let c1 = color(100,random(200,255),random(200,255),10);
        let c1 = color(0,100,100,5);
        noiseCircles[i].changeColor(c1);
      } else {
        //let c2 = color(230, 238, 156, 25);
        //let c2 = color(100,random(200,255),random(200,255),10);
        let c2 = color(0,100,100,5);
        noiseCircles[i].changeColor(c2);
      }
      
      
      
    }
  } 
}

// function mousePressed() {
//   exportSVG();
// }

function exportSVG() {
  save("mySVG.svg"); // give file name
  print("saved svg");
  //noLoop(); // we just want to export once
}
