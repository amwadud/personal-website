// ===== BAUHAUS MONOCHROME JAVASCRIPT =====

// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Update active navigation on scroll
function updateActiveNav() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe project items
document.querySelectorAll('.project-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
});

// Observe voice samples
document.querySelectorAll('.sample').forEach((sample, index) => {
    sample.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(sample);
});

// Audio Players
document.querySelectorAll('.sample').forEach(sample => {
    const audio = sample.querySelector('audio');
    const playBtn = sample.querySelector('.audio-btn');
    const progressBar = sample.querySelector('.progress-bar');
    const progressHandle = sample.querySelector('.progress-handle');
    const progressContainer = sample.querySelector('.audio-progress');
    const timeCurrent = sample.querySelector('.time-current');
    const timeTotal = sample.querySelector('.time-total');
    
    if (!audio || !playBtn) return;
    
    // Format time helper
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Load metadata
    audio.addEventListener('loadedmetadata', () => {
        timeTotal.textContent = formatTime(audio.duration);
    });
    
    // Play/Pause toggle
    playBtn.addEventListener('click', () => {
        // Pause all other audios
        document.querySelectorAll('audio').forEach(otherAudio => {
            if (otherAudio !== audio && !otherAudio.paused) {
                otherAudio.pause();
                otherAudio.closest('.sample').querySelector('.audio-btn').classList.remove('playing');
            }
        });
        
        // Toggle current
        if (audio.paused) {
            audio.play();
            playBtn.classList.add('playing');
        } else {
            audio.pause();
            playBtn.classList.remove('playing');
        }
    });
    
    // Update progress
    audio.addEventListener('timeupdate', () => {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percent + '%';
        progressHandle.style.left = percent + '%';
        timeCurrent.textContent = formatTime(audio.currentTime);
    });
    
    // Seek functionality
    progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = x / rect.width;
        audio.currentTime = percent * audio.duration;
    });
    
    // Reset on end
    audio.addEventListener('ended', () => {
        playBtn.classList.remove('playing');
        progressBar.style.width = '0%';
        progressHandle.style.left = '0%';
        timeCurrent.textContent = '0:00';
    });
});

// Smooth animations for skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`;
    
    observer.observe(card);
    
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Parallax effect for geometric shapes
let scrollPosition = 0;
const geometricAccent = document.querySelector('.geometric-accent');

function updateParallax() {
    scrollPosition = window.scrollY;
    if (geometricAccent && scrollPosition < window.innerHeight) {
        geometricAccent.style.transform = `translateY(${scrollPosition * 0.3}px) rotate(${scrollPosition * 0.05}deg)`;
    }
}

window.addEventListener('scroll', updateParallax);

// Add smooth entrance animation to elements
const elementsToAnimate = document.querySelectorAll('.meta-item, .contact-item');
elementsToAnimate.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`;
    
    observer.observe(element);
});

// Console message
console.log('%c BAUHAUS PHILOSOPHY ', 'background: #0A0A0A; color: #FAFAFA; padding: 10px 20px; font-size: 14px; font-weight: bold;');
console.log('%c Form follows function • Geometric precision • Monochrome harmony ', 'background: #FAFAFA; color: #0A0A0A; padding: 5px 10px; border: 2px solid #0A0A0A;');

// Smooth page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
