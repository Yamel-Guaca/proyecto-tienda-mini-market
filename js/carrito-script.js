// Selección de elementos del DOM
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');
const productsList = document.querySelector('.container-items');
const rowProduct = document.querySelector('.row-product');
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

// Estado del carrito en localStorage
let allProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

// Toggle para mostrar/ocultar el carrito
btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

// Añadir productos al carrito
productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: parseInt(product.querySelector('p').textContent.replace(/\D/g, '')),
        };

        const exists = allProducts.some(product => product.title === infoProduct.title);

        if (exists) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        // Guardar productos en localStorage
        localStorage.setItem('cartProducts', JSON.stringify(allProducts));

        showHTML();
    }
});

// Eliminar productos del carrito
rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(product => product.title !== title);

        // Guardar productos en localStorage
        localStorage.setItem('cartProducts', JSON.stringify(allProducts));

        showHTML();
    }
});

// Función para mostrar el carrito en el HTML
const showHTML = () => {
    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }

    // Limpiar HTML
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">$${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

        rowProduct.append(containerProduct);

        total += product.quantity * product.price;
        totalOfProducts += product.quantity;
    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
};

// Inicializar la vista del carrito cuando la página se carga
document.addEventListener('DOMContentLoaded', showHTML);

// Inicializar MercadoPago
const mercadopago = new MercadoPago("TEST-b658ce4c-1b5c-4f35-bcb5-10d1b1090315", {
    locale: "es-CO"
});

// Acción del botón de pago
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'checkout-btn') {
        // Lógica para redirigir a la página de pago de MercadoPago
        mercadopago.checkout({
            preference: {
                id: 'your_preference_id'
            }
        });
    }
});