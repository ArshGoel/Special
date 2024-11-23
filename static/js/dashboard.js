// Canvas-based confetti animation
let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 150;
const particles = [];
const possibleColors = [
  "DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue",
  "Gold", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"
];

// Utility function: random number generator
function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

// Particle definition
function confettiParticle() {
  this.x = Math.random() * W;
  this.y = Math.random() * H - H;
  this.r = randomFromTo(11, 33);
  this.d = Math.random() * maxConfettis + 11;
  this.color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
  this.tilt = Math.floor(Math.random() * 33) - 11;
  this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
  this.tiltAngle = 0;

  this.draw = function() {
    context.beginPath();
    context.lineWidth = this.r / 2;
    context.strokeStyle = this.color;
    context.moveTo(this.x + this.tilt + this.r / 3, this.y);
    context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
    return context.stroke();
  };
}

// Draw confetti on canvas
function Draw() {
  requestAnimationFrame(Draw);
  context.clearRect(0, 0, W, window.innerHeight);
  particles.forEach((particle) => particle.draw());
  particles.forEach((particle, i) => {
    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
    particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;
    if (particle.y > H || particle.x < -30 || particle.x > W + 30) {
      particle.x = Math.random() * W;
      particle.y = -30;
      particle.tilt = Math.floor(Math.random() * 10) - 20;
    }
  });
}

// Adjust canvas size on window resize
window.addEventListener("resize", () => {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
});

// Initialize particles
for (let i = 0; i < maxConfettis; i++) particles.push(new confettiParticle());
canvas.width = W;
canvas.height = H;
Draw();

// Image-triggered confetti using external library
import confetti from "https://cdn.skypack.dev/canvas-confetti";

const triggerImage = document.getElementById("triggerImage");

// Function to trigger confetti on image interaction
const triggerConfetti = (evt, intensity) => {
  const particleCount = intensity ? getRandomInt(100, 200) : getRandomInt(5, 20);
  confetti({
    particleCount,
    angle: getRandomInt(60, 120),
    spread: getRandomInt(50, 70),
    origin: {
      x: evt.clientX / window.innerWidth,
      y: evt.clientY / window.innerHeight,
    },
  });
};

// Utility function: random integer generator
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Trigger confetti on hover and click
triggerImage.addEventListener("mousemove", (event) => triggerConfetti(event, false));
triggerImage.addEventListener("click", (event) => triggerConfetti(event, true));
