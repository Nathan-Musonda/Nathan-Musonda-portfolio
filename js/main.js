// Mobile Navigation
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
}

if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileMenu);
}

document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

function closeMobileMenu() {
    if (navMenu) navMenu.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
    if (mobileToggle) {
        mobileToggle.querySelector('i').classList.add('fa-bars');
        mobileToggle.querySelector('i').classList.remove('fa-times');
    }
    document.body.style.overflow = '';
}

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Close on escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
        closeMobileMenu();
    }
});