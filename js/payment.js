document.addEventListener('DOMContentLoaded', () => {
    const totalPagar = document.getElementById('total-pagar');
    const invoiceDetails = document.getElementById('invoice-details');
    const payButton = document.getElementById('pay-button');
    const printButton = document.getElementById('print-button');

    // Obtener los datos del carrito almacenados en localStorage
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    let total = 0;

    // Mostrar los productos en la factura
    cartProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('invoice-product');

        productElement.innerHTML = `
            <p>${product.quantity} x ${product.title} - $${product.price}</p>
        `;

        invoiceDetails.appendChild(productElement);
        total += product.quantity * product.price;
    });

    totalPagar.textContent = `$${total}`;

    // Inicializar MercadoPago
    const mercadopago = new MercadoPago("public_key", {
        locale: "es-CO"
    });

    payButton.addEventListener('click', () => {
        // Lógica para redirigir a la página de pago de MercadoPago
        fetch('http://localhost:8080/create_preference', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    items: cartProducts.map(product => ({
                        title: product.title,
                        unit_price: product.price,
                        quantity: product.quantity,
                    }))
                })
            })
            .then(response => response.json())
            .then(data => {
                mercadopago.checkout({
                    preference: {
                        id: data.id
                    }
                });
            })
            .catch(error => console.error('Error al crear la preferencia:', error));
    });

    printButton.addEventListener('click', () => {
        window.print();
    });
});