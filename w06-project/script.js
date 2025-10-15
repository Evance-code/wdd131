// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Learn More Button
document.getElementById('learnMoreBtn').addEventListener('click', () => {
    window.scrollTo({ top: document.querySelector('#services').offsetTop, behavior: 'smooth' });
});

// Application Form Handling
const form = document.getElementById('applicationForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const career = form.career.value;
    localStorage.setItem('applicantName', name);
    message.textContent = `Thank you, ${name}! Your application for ${career} has been received.`;
    form.reset();
});

// Current Year
document.getElementById('year').textContent = new Date().getFullYear();
