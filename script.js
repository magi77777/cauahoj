// Check if the element exists on the page
const typingElement = document.getElementById("typingText");

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

  // Function for typing text
  function type() {
    const currentText = texts[textIndex]; // Get the current text to type

    // Update the displayed text
    typingElement.textContent = currentText.slice(0, charIndex);

    // Check if typing has finished
    if (charIndex < currentText.length) {
      charIndex++; // Move to the next character
      setTimeout(type, typingSpeed); // Continue typing
    } else {
      // Wait after finishing typing the current text before starting the next one
      setTimeout(() => {
        charIndex = 0; // Reset character index
        textIndex = (textIndex + 1) % texts.length; // Move to the next text (loop back to the first one)
        type(); // Restart typing
      }, pauseBetweenTexts);
    }
  }

  // Start the typing effect when the page loads
  document.addEventListener("DOMContentLoaded", type);
}
