

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

document.addEventListener("DOMContentLoaded", function() {
  const leftArrow = document.querySelector(".leftarrow");
  const rightArrow = document.querySelector(".rightarrow");

  const projectTitles = document.querySelectorAll(".projects h1");
  const projectFrames = document.querySelectorAll(".projects .project-frame");

  let currentIndex = 0;

  leftArrow.addEventListener("click", navigateLeft);
  rightArrow.addEventListener("click", navigateRight);

  function navigateLeft() {
    currentIndex = (currentIndex - 1 + projectTitles.length) % projectTitles.length;
    updateNavigation();
  }

  function navigateRight() {
    currentIndex = (currentIndex + 1) % projectTitles.length;
    updateNavigation();
  }

  function updateNavigation() {
    projectTitles.forEach((title, index) => {
      title.classList.toggle("active", index === currentIndex);
    });

    projectFrames.forEach((frame, index) => {
      frame.classList.toggle("active", index === currentIndex);
    });
  }
});