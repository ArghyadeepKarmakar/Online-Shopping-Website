let cartItems = [
    { name: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/150' },
    { name: 'Product 2', price: 29.99, image: 'https://via.placeholder.com/150' }
];

function renderCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';

    let totalAmount = 0;

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        cartList.appendChild(cartItem);

        totalAmount += item.price;
    });

    document.getElementById('total-amount').innerText = `$${totalAmount.toFixed(2)}`;
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    renderCart();
}

document.getElementById('continue-shopping').addEventListener('click', () => {
    window.location.href = 'index.html';
});

window.onload = () => {
    renderCart();
};
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cartItems');
    let cart = localStorage.getItem('cart');

    if (cart) {
        cart = JSON.parse(cart);
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            cartItem.innerHTML = `
                <h2>${item.name}</h2>
                <p>Price: $${item.price}</p>
            `;

            cartItemsContainer.appendChild(cartItem);
        });
    } else {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
});
