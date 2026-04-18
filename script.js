// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
mobileMenuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
  
  const icon = mobileMenuBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const offsetTop = targetSection.offsetTop - 60; // account for header height
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
    
    // Close mobile menu after click
    if (navList.classList.contains('active')) {
      navList.classList.remove('active');
      mobileMenuBtn.querySelector('i').classList.add('fa-bars');
      mobileMenuBtn.querySelector('i').classList.remove('fa-times');
    }
  });
});

// Portfolio Filters (if needed)
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.portfolio-card');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
