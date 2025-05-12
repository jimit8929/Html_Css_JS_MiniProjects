const textInput = document.querySelector(".text-input");
const wordCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count");
const spaceCountElement = document.querySelector(".space-count");

textInput.addEventListener("input", () => {
  const text = textInput.value;
  
  // spaces and letter ko count karo
  let letters = 0, spaces = 0;
  for (const char of text) {
    if (char === " ") {
      spaces++;
    } else if (/[a-zA-Z]/.test(char)) {
      letters++;
    }
  }

  // Count valid words ko count karo 
  const words = text.trim().split(/\s+/);
  let wordCount = 0;
  
  for (const word of words) {
    if (isValidWord(word)) {
      wordCount++;
    }
  }

  // update kardo ui par 
  wordCountElement.textContent = wordCount;
  letterCountElement.textContent = letters;
  spaceCountElement.textContent = spaces;
});


function isValidWord(word) {
  let letterCount = 0;
  let consecutiveCount = 1;

  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i];
    const nextChar = word[i + 1];


    if (/[a-zA-Z]/.test(currentChar)) {
      letterCount++;
    }

    if (currentChar === nextChar) {
      consecutiveCount++;
      if (consecutiveCount >= 3) {
        return false;
      }
    } else {
      consecutiveCount = 1;
    }
  }

  return letterCount >= 2;
}