// Set the current year in the footer
document.addEventListener('DOMContentLoaded', function() {
  const currentYearElements = document.querySelectorAll('#currentYear');
  currentYearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
  });
  
  // Contact form submission
  const messageForm = document.getElementById('messageForm');
  if (messageForm) {
    messageForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const message = document.getElementById('contactMessage').value;
      
      console.log('Form submitted:', { name, email, message });
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      messageForm.reset();
    });
  }
  
  // Search functionality for recipes
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        filterRecipes();
      }
    });
  }
});

// Filter recipes by search term
function filterRecipes() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  const searchTerm = searchInput.value.toLowerCase();
  
  // Only attempt to filter if we're on the home page with recipes
  const recipeCards = document.querySelectorAll('.recipe-card');
  if (recipeCards.length === 0) {
    alert('Search for: ' + searchTerm);
    return;
  }
  
  let foundMatch = false;
  recipeCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    
    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = 'block';
      foundMatch = true;
    } else {
      card.style.display = 'none';
    }
  });
  
  // Show a message if no matches found
  const recipeSection = document.getElementById('recipes');
  let noResultsMsg = document.getElementById('noResultsMsg');
  
  if (!foundMatch) {
    if (!noResultsMsg) {
      noResultsMsg = document.createElement('p');
      noResultsMsg.id = 'noResultsMsg';
      noResultsMsg.className = 'no-results';
      noResultsMsg.textContent = 'No recipes found matching your search.';
      recipeSection.appendChild(noResultsMsg);
    }
  } else if (noResultsMsg) {
    noResultsMsg.remove();
  }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for header height
          behavior: 'smooth'
        });
      }
    });
  });
});