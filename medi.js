let cart = [];
let totalPrice = 0;

// Function to add an item to the cart
function addToCart(medicineName, quantity, price) {
    let cartItem = {
        name: medicineName,
        quantity: parseInt(quantity),
        price: price * parseInt(quantity)
    };
    cart.push(cartItem);
    updateCartTable();
}

// Function to update the cart table in the HTML
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

// Function to save current cart items to favourites (local storage)
function addToFavourites() {
    if (cart.length > 0) {
        localStorage.setItem('favourites', JSON.stringify(cart));
        alert('Favourites saved successfully!');
    } else {
        alert('No items in the cart to save as favourites.');
    }
}

// Function to load saved favourites and add them to the cart
function applyFavourites() {
    const savedFavourites = localStorage.getItem('favourites');
    if (savedFavourites) {
        cart = JSON.parse(savedFavourites);
        updateCartTable();
        alert('Favourites applied to your cart!');
    } else {
        alert('No favourites found.');
    }
}
