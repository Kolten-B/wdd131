// Handle hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Update last modified date
document.getElementById('lastModified').textContent = document.lastModified;
