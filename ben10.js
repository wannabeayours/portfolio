//ben10.js
// Animate skills
window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      const target = bar.getAttribute("data-progress");
      bar.style.width = target + "%";
      bar.textContent = target + "%";
    }
  });
});
