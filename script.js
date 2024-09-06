let cart = [];

function addToCart(medicineName, element) {
    const quantity = parseInt(element.previousElementSibling.value);
    const pricePerUnit = 10; // Assume each medicine costs $10
    const totalItemPrice = quantity * pricePerUnit;

    const existingItem = cart.find(item => item.name === medicineName);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice += totalItemPrice;
    } else {
        cart.push({
            name: medicineName,
            quantity: quantity,
            totalPrice: totalItemPrice
        });
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    cartItems.innerHTML = '';

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.totalPrice.toFixed(2)}</td>
        `;
        cartItems.appendChild(row);
        totalPrice += item.totalPrice;
    });

    totalPriceElement.innerText = `Total Price: $${totalPrice.toFixed(2)}`;
}
