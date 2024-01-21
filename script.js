
document.addEventListener("DOMContentLoaded", function() {
  const leftArrow = document.querySelector(".leftarrow");
  const rightArrow = document.querySelector(".rightarrow");

  const projectTitles = document.querySelectorAll(".projects .project-frame");
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

$(document).ready(function() {
    $('[data-fancybox="gallery"]').fancybox();
});
