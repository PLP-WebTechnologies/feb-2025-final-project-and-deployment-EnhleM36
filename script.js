document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('welcomeBtn');
  const text = document.getElementById('welcomeText');

  if (btn && text) {
    btn.addEventListener('click', () => {
      text.textContent = 'Thanks for visiting! Enjoy exploring delicious recipes!';
      btn.textContent = 'Clicked!';
      btn.disabled = true;
      btn.style.opacity = 0.6;
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('welcomeBtn');
  const text = document.getElementById('welcomeText');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (btn && text) {
    btn.addEventListener('click', () => {
      text.textContent = 'Thanks for visiting! Enjoy exploring delicious recipes!';
      btn.textContent = 'Clicked!';
      btn.disabled = true;
      btn.style.opacity = 0.6;
    });
  }

  // Mobile menu toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
