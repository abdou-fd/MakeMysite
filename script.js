const roles = ['Developer', 'Designer', 'Freelancer', 'Creator'];
let index = 0;
let charIndex = 0;
const typedSpan = document.getElementById('typed');

function typeRole() {
  if (charIndex < roles[index].length) {
    typedSpan.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 2000);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typedSpan.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeRole, 500);
});
