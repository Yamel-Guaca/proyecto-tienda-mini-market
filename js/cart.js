// cart.js: Gestión del carrito de compras optimizada

const cart = {
    items: [],

    // Inicializar el carrito
    init: function() {
        this.loadCart();
        this.renderCart();
        this.setupEventListeners();
    },

    // Cargar el carrito desde localStorage
    loadCart: function() {
        const savedCart = JSON.parse(localStorage.getItem("cartProducts"));
        this.items = savedCart || [];
    },

    // Guardar el carrito en localStorage
    saveCart: function() {
        localStorage.setItem("cartProducts", JSON.stringify(this.items));
    },

    // Agregar un producto al carrito
    addItem: function(item) {
        const existingItem = this.items.find((i) => i.title === item.title);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            this.items.push(item);
        }
        this.saveCart();
        this.renderCart();
    },

    // Eliminar un producto del carrito
    removeItem: function(index) {
        this.items.splice(index, 1);
        this.saveCart();
        this.renderCart();
    },

    // Vaciar el carrito
    clearCart: function() {
        this.items = [];
        this.saveCart();
        this.renderCart();
    },

    // Renderizar el carrito en la interfaz
    renderCart: function() {
        const cartContainer = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");
        const cartEmptyMessage = document.querySelector(".cart-empty");
        const cartTotalSection = document.querySelector(".cart-total");

        if (!cartContainer || !cartTotal || !cartEmptyMessage || !cartTotalSection) {
            console.error("Faltan elementos del DOM necesarios para el carrito.");
            return;
        }

        cartContainer.innerHTML = "";

        if (this.items.length === 0) {
            cartEmptyMessage.style.display = "block";
            cartTotalSection.style.display = "none";
        } else {
            cartEmptyMessage.style.display = "none";
            cartTotalSection.style.display = "block";

            let total = 0;
            this.items.forEach((item, index) => {
                const listItem = document.createElement("div");
                listItem.classList.add("cart-product");
                listItem.innerHTML = `
                    <div class="info-cart-product">
                        <span class="cantidad-producto-carrito">${item.quantity}</span>
                        <p class="titulo-producto-carrito">${item.title}</p>
                        <span class="precio-producto-carrito">$${item.unit_price * item.quantity}</span>
                    </div>
                    <button class="btn-remove" data-index="${index}">Eliminar</button>
                `;
                cartContainer.appendChild(listItem);
                total += item.unit_price * item.quantity;
            });

            cartTotal.textContent = total.toFixed(2);
        }
    },

    // Configurar eventos
    setupEventListeners: function() {
        const clearCartButton = document.getElementById("clear-cart");
        const checkoutButton = document.getElementById("checkout-btn");

        if (clearCartButton) {
            clearCartButton.addEventListener("click", () => {
                this.clearCart();
                alert("El carrito ha sido vaciado.");
            });
        }

        if (checkoutButton) {
            checkoutButton.addEventListener("click", () => {
                if (this.items.length > 0) {
                    window.location.href = "invoice.html";
                } else {
                    alert("Tu carrito está vacío.");
                }
            });
        }

        const cartItemsContainer = document.getElementById("cart-items");
        if (cartItemsContainer) {
            cartItemsContainer.addEventListener("click", (e) => {
                if (e.target.classList.contains("btn-remove")) {
                    const index = e.target.dataset.index;
                    this.removeItem(index);
                }
            });
        }
    },
};

// Inicializar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cart.init();
});