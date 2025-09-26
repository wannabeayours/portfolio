// Scroll fade-in animation
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));

// Skills progress animation
const skillBars = document.querySelectorAll('.progress-bar');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target.getAttribute('data-progress');
      entry.target.style.width = progress + '%';
      entry.target.textContent = progress + '%';
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));
