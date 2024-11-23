// Check if the element exists on the page
const typingElement = document.getElementById("typingText");
const musicElement = document.getElementById("backgroundMusic"); // Audio element
const playPauseButton = document.getElementById("playPauseButton");

if (typingElement) {
  // Texts in various programming languages
  const texts = [
    'print("Hello World!")',
    'console.log("Hello World!");',
    'System.out.println("Hello World!");',
    'printf("Hello World!");',
    'cout << "Hello World!";',
    'echo "Hello World!";',
  ];

  let textIndex = 0; // Current text index
  let charIndex = 0; // Current character index
  const typingSpeed = 100; // Speed of typing in ms
  const pauseBetweenTexts = 1000; // Pause between texts in ms

  function type() {
    const currentText = texts[textIndex]; // Get the current text to type
    typingElement.textContent = currentText.slice(0, charIndex);

    if (charIndex < currentText.length) {
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(() => {
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length;
        type();
      }, pauseBetweenTexts);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    type();

    if (musicElement) {
      musicElement.play().catch((err) => {
        console.warn("Autoplay was blocked:", err);
      });
    }
  });
}

// Play/Pause functionality for the music player
playPauseButton.addEventListener("click", () => {
  if (musicElement.paused) {
    musicElement.play();
    playPauseButton.textContent = "⏸️"; // Change icon to pause
  } else {
    musicElement.pause();
    playPauseButton.textContent = "▶️"; // Change icon to play
  }
});
