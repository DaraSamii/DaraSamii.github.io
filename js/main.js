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
// Project Slideshow Functionality
// ============================================
const SLIDESHOW_INTERVAL = 4000; // 4 seconds

function initProjectSlideshows() {
    const projectCards = document.querySelectorAll('.project-card[data-project]');
    
    projectCards.forEach(card => {
        const slideshow = card.querySelector('.project-slideshow');
        if (!slideshow) return;
        
        const container = slideshow.querySelector('.slideshow-container');
        const images = container.querySelectorAll('.slideshow-image');
        const prevBtn = slideshow.querySelector('.slideshow-prev');
        const nextBtn = slideshow.querySelector('.slideshow-next');
        const indicator = slideshow.querySelector('.slideshow-indicator');
        
        if (images.length <= 1) {
            // Hide navigation if only one image
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            if (indicator) indicator.style.display = 'none';
            return;
        }
        
        let currentIndex = 0;
        let slideshowInterval;
        
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
            currentIndex = index;
            
            // Update indicator
            if (indicator) {
                indicator.className = 'slideshow-indicator';
                if (images.length > 1) {
                    indicator.classList.add('active');
                }
            }
        }
        
        function nextImage() {
            const nextIndex = (currentIndex + 1) % images.length;
            showImage(nextIndex);
        }
        
        function prevImage() {
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(prevIndex);
        }
        
        function startSlideshow() {
            slideshowInterval = setInterval(nextImage, SLIDESHOW_INTERVAL);
        }
        
        function stopSlideshow() {
            if (slideshowInterval) {
                clearInterval(slideshowInterval);
            }
        }
        
        // Navigation buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                stopSlideshow();
                nextImage();
                startSlideshow();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                stopSlideshow();
                prevImage();
                startSlideshow();
            });
        }
        
        // Pause on hover
        slideshow.addEventListener('mouseenter', stopSlideshow);
        slideshow.addEventListener('mouseleave', startSlideshow);
        
        // Start slideshow
        startSlideshow();
        
        // Initialize first image
        showImage(0);
    });
}

// ============================================
// Project Details Dropdown
// ============================================
function initProjectDetailsDropdowns() {
    const toggles = document.querySelectorAll('.project-details-toggle');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const details = toggle.nextElementSibling;
            const isActive = toggle.classList.contains('active');
            
            if (isActive) {
                toggle.classList.remove('active');
                details.classList.remove('active');
                toggle.querySelector('.toggle-text').textContent = 'Show Details';
            } else {
                toggle.classList.add('active');
                details.classList.add('active');
                toggle.querySelector('.toggle-text').textContent = 'Hide Details';
            }
        });
    });
}

// ============================================
// Image Modal Functionality
// ============================================
let currentModalImages = [];
let currentModalIndex = 0;

function initImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    const modalPrev = document.querySelector('.modal-nav-prev');
    const modalNext = document.querySelector('.modal-nav-next');
    const modalCounter = document.getElementById('modalCounter');
    
    // Get all project images and make them clickable
    const projectCards = document.querySelectorAll('.project-card[data-project]');
    
    projectCards.forEach(card => {
        const slideshow = card.querySelector('.project-slideshow');
        if (!slideshow) return;
        
        const images = slideshow.querySelectorAll('.slideshow-image');
        
        images.forEach((img, index) => {
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                openModal(card, index);
            });
        });
        
        // Also make the container clickable
        const container = slideshow.querySelector('.slideshow-container');
        if (container) {
            container.addEventListener('click', (e) => {
                if (e.target === container || e.target.classList.contains('slideshow-container')) {
                    const activeImg = slideshow.querySelector('.slideshow-image.active');
                    if (activeImg) {
                        const allImages = Array.from(images);
                        const activeIndex = allImages.indexOf(activeImg);
                        openModal(card, activeIndex);
                    }
                }
            });
        }
    });
    
    function openModal(card, startIndex) {
        const slideshow = card.querySelector('.project-slideshow');
        if (!slideshow) return;
        
        const images = slideshow.querySelectorAll('.slideshow-image');
        currentModalImages = Array.from(images).map(img => ({
            src: img.src,
            alt: img.alt
        }));
        
        currentModalIndex = startIndex;
        updateModalImage();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function updateModalImage() {
        if (currentModalImages.length === 0) return;
        
        const image = currentModalImages[currentModalIndex];
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalCounter.textContent = `${currentModalIndex + 1} / ${currentModalImages.length}`;
        
        // Show/hide navigation buttons
        if (modalPrev) {
            modalPrev.style.display = currentModalImages.length > 1 ? 'flex' : 'none';
        }
        if (modalNext) {
            modalNext.style.display = currentModalImages.length > 1 ? 'flex' : 'none';
        }
    }
    
    function nextModalImage() {
        if (currentModalImages.length === 0) return;
        currentModalIndex = (currentModalIndex + 1) % currentModalImages.length;
        updateModalImage();
    }
    
    function prevModalImage() {
        if (currentModalImages.length === 0) return;
        currentModalIndex = (currentModalIndex - 1 + currentModalImages.length) % currentModalImages.length;
        updateModalImage();
    }
    
    // Event listeners
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalPrev) {
        modalPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            prevModalImage();
        });
    }
    
    if (modalNext) {
        modalNext.addEventListener('click', (e) => {
            e.stopPropagation();
            nextModalImage();
        });
    }
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            prevModalImage();
        } else if (e.key === 'ArrowRight') {
            nextModalImage();
        }
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initProjectSlideshows();
    initProjectDetailsDropdowns();
    initImageModal();
});

// ============================================
// Console Easter Egg
// ============================================
console.log('%c👋 Hey there, curious developer!', 'font-size: 20px; font-weight: bold;');
console.log('%cFeel free to explore the code. Built with passion and ☕', 'font-size: 14px;');
console.log('%c- Dara Rahmat Samii', 'font-size: 12px; color: #6366f1;');
