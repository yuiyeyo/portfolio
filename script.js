let currentSection = 0;
const sections = document.querySelectorAll('.profile-div, .works-div, .projects-div');

function scrollToNextSection() {
  
  currentSection = (currentSection + 1) % sections.length;
  sections[currentSection].scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (e.deltaY > 0) {
    // Scrolling down
    scrollToNextSection();
  } else {
    // Scrolling up
    currentSection = (currentSection - 1 + sections.length) % sections.length;
    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
  }
});

sections.forEach((section) => {
  section.addEventListener('click', scrollToNextSection);
});
