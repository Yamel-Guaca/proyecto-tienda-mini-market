const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!');
    }
    alert(`Bienvenido ${validUser.name}`);
    localStorage.setItem('login_success', JSON.stringify(validUser));
    localStorage.setItem('user', JSON.stringify(validUser)); // Guardar datos del usuario en localStorage
    window.location.href = 'homepage.html';
});

// Guardar datos de ejemplo del carrito de compras (esto debería estar en el archivo donde se maneja el carrito, no en el login)
const cart = [
    { title: "Producto 1", quantity: 2, unit_price: 50 },
    { title: "Producto 2", quantity: 1, unit_price: 100 }
];
localStorage.setItem("cart", JSON.stringify(cart));