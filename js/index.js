// Verificación de sesión del usuario
const user = JSON.parse(localStorage.getItem('login_success')) || false;
if (!user) {
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout');

    logoutButton.addEventListener('click', () => {
        alert('Hasta pronto!');
        localStorage.removeItem('login_success');
        window.location.href = 'login.html';
    });
});