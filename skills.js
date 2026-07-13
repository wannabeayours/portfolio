// skills.js

// === Animate skill bars on scroll ===
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector("#skills");
  const progressBars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach(bar => {
          const value = bar.getAttribute("data-progress");
          bar.style.width = value + "%";
        });
      }
    });
  }, { threshold: 0.5 });

  observer.observe(skillsSection);
});
