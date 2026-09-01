// 1. CRIA O BOTÃO DE TEMA VIA JAVASCRIPT AUTOMATICAMENTE
const themeToggleBtn = document.createElement('button');
themeToggleBtn.id = 'theme-toggle';
themeToggleBtn.className = 'theme-btn';
themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun" id="theme-icon"></i>';
document.body.appendChild(themeToggleBtn);

// 2. LÓGICA DO TEMA (DARK/LIGHT)
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Verifica no navegador se o usuário já escolheu um tema antes
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});

// 3. ANIMAÇÕES DE ENTRADA (STAGGERED ANIMATIONS)
window.addEventListener('load', () => {
    const elementosAnimados = document.querySelectorAll('.fade-in');
    
    elementosAnimados.forEach((elemento, index) => {
        setTimeout(() => {
            elemento.classList.add('show');
        }, index * 150);
    });
});