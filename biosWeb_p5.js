const particles = [];

let img1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
//  createCanvas(windowWidth, windowHeight, WEBGL);
  
  
  img1 = loadImage('https://raw.githubusercontent.com/Avxy/ioching_p5/gh-pages/images/64W89.png');
  
  
  
  const particlesLength = Math.min(Math.floor(window.innerWidth / 10), 100);
  for(let i=0; i<particlesLength; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0,89,108);
  
  
  push();
  translate(0, 0, -34);
  noStroke();
  fill(255);
 // rotateZ(frameCount * -0.001);
 // texture(img1);
  circle(windowWidth/2, windowHeight/2,233);
  pop();
  
  image(img1, 0, 0);
  
  particles.forEach((particle, idx) => {
    particle.update();
    particle.draw();
    particle.checkParticles(particles.slice(idx));
  });
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.size = 5;
  }
  
  update() {
    this.pos.add(this.vel);
    this.edges();
  }
  
  draw() {
    noStroke();
    fill('rgba(255, 255, 255, 0.5)');
    circle(this.pos.x, this.pos.y, this.size * 2);
  }
  
  edges() {
    if(this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    
    if(this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
    
//     if(this.pos.x > width) {
//       this.pos.x = 0;
//     }
    
//     if(this.pos.y > height) {
//       this.pos.y = 0;
//     }
  }
  
  checkParticles(particles) {
    particles.forEach(particle => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      if(d < 120) {
        const alpha = map(d, 0, 120, 0, 0.25)
        stroke(`rgba(255, 255, 255, ${alpha})`);
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
      }
    });
  }
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
  social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
  social_panel_container.classList.remove('visible')
});
