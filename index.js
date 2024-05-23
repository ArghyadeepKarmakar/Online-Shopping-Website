function addToCart(product) {
    alert(product + ' has been added to your cart!');
}

function searchProducts() {
    const query = document.getElementById('search').value;
    alert('Searching for: ' + query);
}
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productId = product.getAttribute('data-id');
            const productName = product.getAttribute('data-name');
            const productPrice = product.getAttribute('data-price');

            const cartItem = {
                id: productId,
                name: productName,
                price: productPrice
            };

            let cart = localStorage.getItem('cart');
            if (cart) {
                cart = JSON.parse(cart);
            } else {
                cart = [];
            }

            cart.push(cartItem);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${productName} has been added to the cart.`);
        });
    });
});
