// Seleciona o botão de tema, o ícone e a tag body
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Verifica no navegador se o usuário já escolheu um tema antes
const currentTheme = localStorage.getItem('theme');

// Se a preferência salva for 'light', aplica o tema claro e muda o ícone para a lua
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

// O que acontece quando clica no botão
themeToggleBtn.addEventListener('click', () => {
    // Adiciona ou remove a classe 'light-mode' do body
    body.classList.toggle('light-mode');

    // Se a classe 'light-mode' estiver ativa agora...
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light'); // Salva a preferência
        themeIcon.classList.replace('fa-sun', 'fa-moon'); // Troca o ícone para Lua
    } else {
        localStorage.setItem('theme', 'dark'); // Salva a preferência
        themeIcon.classList.replace('fa-moon', 'fa-sun'); // Troca o ícone para Sol
    }
});