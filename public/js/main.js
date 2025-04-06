// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const scrollToTopBtn = document.querySelector('.scroll-to-top');

// Mobile Menu Toggle
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (nav && nav.classList.contains('active')) {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  }
});

// Navbar scroll effect
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    if (header) header.classList.add('scrolled');
    if (scrollToTopBtn) scrollToTopBtn.classList.add('active');
  } else {
    if (header) header.classList.remove('scrolled');
    if (scrollToTopBtn) scrollToTopBtn.classList.remove('active');
  }
}

// Add scroll event listener
window.onscroll = function() {
  scrollFunction();
};

// Scroll to top functionality
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize current year in footer
const yearElement = document.getElementById('current-year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    }

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Animation on scroll (simple implementation)
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.classList.add('animated');
    }
  });
}

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', animateOnScroll); 