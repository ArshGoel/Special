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
