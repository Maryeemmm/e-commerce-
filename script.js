document.addEventListener('DOMContentLoaded', () => {
  
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));
            const quantity = parseInt(button.closest('.product-card').querySelector('.quantity').value);
            
            const cart = JSON.parse(localStorage.getItem('cart')) || {};
            if (cart[productName]) {
                cart[productName].quantity += quantity;
            } else {
                cart[productName] = {
                    name: productName,
                    price: productPrice,
                    quantity: quantity
                };
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.href = 'cart.html'; 
        });
    });

   
    const quantityControls = document.querySelectorAll('.quantity-controls');
    quantityControls.forEach(control => {
        const increaseButton = control.querySelector('.quantity-increase');
        const decreaseButton = control.querySelector('.quantity-decrease');
        const quantityInput = control.querySelector('.quantity');

        increaseButton.addEventListener('click', () => {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });

        decreaseButton.addEventListener('click', () => {
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });
    });
});
