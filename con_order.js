

function showConfirmation() {
    const confirmationMessage = document.getElementById('confirmation-message');
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5); // Assuming a delivery time of 5 days
    const formattedDate = deliveryDate.toDateString();

    document.getElementById('delivery-date').textContent = formattedDate;
    confirmationMessage.style.display = 'block';
}