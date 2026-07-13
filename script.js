// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });
  }

  // Smooth scroll with navbar offset
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 64;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  // Skill bars: animate fill + percentage label together, once visible
  const skillRows = document.querySelectorAll(".skill-row");
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const fill = entry.target.querySelector(".skill-fill");
      const value = entry.target.querySelector(".skill-row__value");
      const progress = fill.getAttribute("data-progress");
      fill.style.width = progress + "%";
      value.textContent = progress + "%";
      skillObserver.unobserve(entry.target);
    });
  }, { threshold: 0.4 });
  skillRows.forEach(row => skillObserver.observe(row));
});

// Modal controls (called via inline onclick attributes)
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("is-open");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("is-open");
}

// Close modal on backdrop click
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal") && e.target.classList.contains("is-open")) {
    e.target.classList.remove("is-open");
  }
});

// Close modal on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal.is-open").forEach(m => m.classList.remove("is-open"));
  }
});