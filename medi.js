let cart = [];
let totalPrice = 0;

function addToCart(medicineName, quantity, price) {
    let cartItem = {
        name: medicineName,
        quantity: parseInt(quantity),
        price: price * parseInt(quantity)
    };
    cart.push(cartItem);
    updateCartTable();
}

function updateCartTable() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
    totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price;
        cartItemsElement.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>$${item.price.toFixed(2)}</td>
            </tr>
        `;
    });

    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}