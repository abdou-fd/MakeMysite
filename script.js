/* ------------------ Typing Effect 1 ------------------ */
const words = ['Developer', 'Designer', 'Freelancer', 'Creator'];
let currentWordIndex = 0;
let charIndex1 = 0;
const typingSpeed1 = 150;
const erasingSpeed1 = 100;
const delayBetweenWords1 = 2000;
const typingSpan = document.querySelector('.typing-text span');

function typeWords() {
  if (charIndex1 < words[currentWordIndex].length) {
    typingSpan.textContent += words[currentWordIndex].charAt(charIndex1);
    charIndex1++;
    setTimeout(typeWords, typingSpeed1);
  } else {
    setTimeout(eraseWords, delayBetweenWords1);
  }
}

function eraseWords() {
  if (charIndex1 > 0) {
    typingSpan.textContent = words[currentWordIndex].substring(0, charIndex1 - 1);
    charIndex1--;
    setTimeout(eraseWords, erasingSpeed1);
  } else {
    currentWordIndex++;
    if (currentWordIndex >= words.length) currentWordIndex = 0;
    setTimeout(typeWords, typingSpeed1);
  }
}

/* ------------------ Typing Effect 2 ------------------ */
const phrases = [
  "We build modern websites 🚀",
  "Custom web solutions 🌐",
  "Creative designs 🎨",
  "Fast & responsive ⚡"
];
let phraseIndex = 0;
let charIndex2 = 0;
const typingSpeed2 = 100;
const erasingSpeed2 = 50;
const delayBetweenPhrases = 2000;
const dynamicText = document.querySelector('.dynamic-text');

function typePhrases() {
  if (charIndex2 < phrases[phraseIndex].length) {
    dynamicText.textContent += phrases[phraseIndex].charAt(charIndex2);
    charIndex2++;
    setTimeout(typePhrases, typingSpeed2);
  } else {
    setTimeout(erasePhrases, delayBetweenPhrases);
  }
}

function erasePhrases() {
  if (charIndex2 > 0) {
    dynamicText.textContent = phrases[phraseIndex].substring(0, charIndex2 - 1);
    charIndex2--;
    setTimeout(erasePhrases, erasingSpeed2);
  } else {
    phraseIndex++;
    if (phraseIndex >= phrases.length) phraseIndex = 0;
    setTimeout(typePhrases, typingSpeed2);
  }
}

/* ------------------ Start Typing Effects ------------------ */
document.addEventListener('DOMContentLoaded', () => {
  if (words.length) typeWords();
  if (phrases.length) typePhrases();
});
