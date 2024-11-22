
const typingElement = document.getElementById("typingText");

if (typingElement) {
  const texts = [
    'print("Hello World!")',
    'console.log("Hello World!");',
    'System.out.println("Hello World!");',
    'printf("Hello World!");',
    'cout << "Hello World!";',
    'echo "Hello World!";',
  ];

  let textIndex = 0; 
  let charIndex = 0; 
  const typingSpeed = 100; 
  const pauseBetweenTexts = 1000; 


  function type() {
    const currentText = texts[textIndex]; 


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

  document.addEventListener("DOMContentLoaded", type);
}
