

// Function to show confirmation message
function showConfirmation() {
    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postal-code').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Validate if all fields are filled
    if (name === "" || email === "" || phone === "" || address === "" || city === "" || postalCode === "" || cardNumber === "" || expiryDate === "" || cvv === "") {
        alert("Please fill out all required fields.");
        return;
    }

    // Store the information in local storage
    const orderDetails = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        city: city,
        postalCode: postalCode,
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cvv: cvv
    };

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    // Show confirmation message and calculate delivery date
    const confirmationMessage = document.getElementById('confirmation-message');
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5); // Assuming a delivery time of 5 days
    const formattedDate = deliveryDate.toDateString();

    document.getElementById('delivery-date').textContent = formattedDate;
    confirmationMessage.style.display = 'block';
}

// Function to load order details from local storage (optional, in case you want to prefill the form on revisit)
function loadOrderDetails() {
    const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
    if (orderDetails) {
        document.getElementById('name').value = orderDetails.name;
        document.getElementById('email').value = orderDetails.email;
        document.getElementById('phone').value = orderDetails.phone;
        document.getElementById('address').value = orderDetails.address;
        document.getElementById('city').value = orderDetails.city;
        document.getElementById('postal-code').value = orderDetails.postalCode;
        document.getElementById('card-number').value = orderDetails.cardNumber;
        document.getElementById('expiry-date').value = orderDetails.expiryDate;
        document.getElementById('cvv').value = orderDetails.cvv;
    }
}

// Call this function when the page loads to prefill form if needed
window.onload = loadOrderDetails;
