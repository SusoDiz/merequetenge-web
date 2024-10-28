// Efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Conmutador de tema oscuro/claro
const toggleModeButton = document.querySelector('.theme-switch');
const body = document.body;

function applySavedMode() {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light') {
        body.setAttribute('data-theme', 'light');
        toggleModeButton.textContent = '🌙'; // Cambia el texto al modo oscuro
    } else {
        body.setAttribute('data-theme', 'dark');
        toggleModeButton.textContent = '☀️'; // Cambia el texto al modo claro
    }
}

// Aplicar el modo guardado al cargar la página
applySavedMode();

// Manejador de evento para el botón de cambio de modo
toggleModeButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    toggleModeButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('mode', newTheme);
});

document.addEventListener('DOMContentLoaded', function() {
    console.log("Merequetenge Bot está listo!");
});