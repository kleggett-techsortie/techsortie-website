// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe expertise columns
document.querySelectorAll('.expertise-column').forEach((column, index) => {
    column.style.opacity = '0';
    column.style.transform = 'translateY(30px)';
    column.style.transition = `all 0.6s ease ${index * 0.15}s`;
    observer.observe(column);
});

// Observe contact section
const contactSection = document.querySelector('.contact-content');
if (contactSection) {
    contactSection.style.opacity = '0';
    contactSection.style.transform = 'translateY(30px)';
    contactSection.style.transition = 'all 0.8s ease';
    observer.observe(contactSection);
}

// Contact form handling
document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // For now, just log the data
    // In production, this would send to your email service
    console.log('Form submission:', data);
    
    // Show success message
    alert('Thank you for your message! We\'ll get back to you soon.');
    this.reset();
});

// Add active state to nav on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});