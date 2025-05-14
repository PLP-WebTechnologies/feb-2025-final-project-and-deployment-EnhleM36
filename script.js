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
function filterRecipes() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".recipe-card");

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
document.getElementById("searchInput").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    filterRecipes();
  }
});
