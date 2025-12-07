// ============================================
// Configuration - UPDATE THESE VALUES
// ============================================
const CONFIG = {
    // Number of profile photos in assets/images/profile/
    // Name them 1.jpg, 2.jpg, 3.jpg, etc.
    profilePhotoCount: 5,
    
    // Time between photo changes (in milliseconds)
    // 3000 = 3 seconds, 5000 = 5 seconds
    photoChangeInterval: 4000,
    
    // Photo file extension
    photoExtension: 'jpg'
};

// ============================================
// Rotating Profile Photo
// ============================================
const profileImg = document.getElementById('rotating-profile');
let currentPhotoIndex = 1;

function changeProfilePhoto() {
    // Fade out
    profileImg.style.opacity = '0';
    
    setTimeout(() => {
        // Pick a random photo (different from current)
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * CONFIG.profilePhotoCount) + 1;
        } while (newIndex === currentPhotoIndex && CONFIG.profilePhotoCount > 1);
        
        currentPhotoIndex = newIndex;
        profileImg.src = `assets/images/profile/${currentPhotoIndex}.${CONFIG.photoExtension}`;
        
        // Fade in
        profileImg.style.opacity = '1';
    }, 500);
}

// Start rotating photos
if (profileImg && CONFIG.profilePhotoCount > 1) {
    profileImg.style.transition = 'opacity 0.5s ease';
    setInterval(changeProfilePhoto, CONFIG.photoChangeInterval);
}

// Handle image load errors (fallback to placeholder)
if (profileImg) {
    profileImg.addEventListener('error', function() {
        this.style.display = 'none';
        const frame = this.parentElement;
        if (frame && !frame.querySelector('.image-placeholder')) {
            frame.innerHTML = `
                <div class="image-placeholder">
                    <i class="fas fa-user"></i>
                    <span>Add photos to<br>assets/images/profile/</span>
                </div>
            `;
        }
    });
}

// ============================================
// Navigation
// ============================================
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Active Navigation Link
// ============================================
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink?.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ============================================
// Smooth Scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ============================================
// Intersection Observer for Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.timeline-item, .project-card, .pub-card, .exp-card, .award-card, .skill-category, .friend-card, .blog-card, .video-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add animation class styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ============================================
// Typing Effect for Hero
// ============================================
const heroTitles = document.querySelectorAll('.hero-title');
heroTitles.forEach((title, index) => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(10px)';
    setTimeout(() => {
        title.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 500 + (index * 200));
});

// ============================================
// Project Image Fallback
// ============================================
document.querySelectorAll('.project-image img, .blog-image img, .friend-photo img').forEach(img => {
    img.addEventListener('error', function() {
        const parent = this.parentElement;
        this.style.display = 'none';
        if (!parent.querySelector('.image-placeholder')) {
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.innerHTML = `
                <i class="fas fa-image"></i>
                <span>Image</span>
            `;
            parent.appendChild(placeholder);
        }
    });
});

// ============================================
// Console Easter Egg
// ============================================
console.log('%c👋 Hey there, curious developer!', 'font-size: 20px; font-weight: bold;');
console.log('%cFeel free to explore the code. Built with passion and ☕', 'font-size: 14px;');
console.log('%c- Dara Rahmat Samii', 'font-size: 12px; color: #6366f1;');
