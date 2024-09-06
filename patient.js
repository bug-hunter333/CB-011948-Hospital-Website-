document.getElementById('patientForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Basic form validation
    if (name === "" || email === "" || contact === "" || dob === "" || !gender) {
        document.getElementById('message').textContent = "Please fill all the fields.";
        document.getElementById('message').style.color = "red";
        return;
    }

    // Success message
    document.getElementById('message').textContent = "Registration successful!";
    document.getElementById('message').style.color = "green";

    // Clear form after submission
    document.getElementById('patientForm').reset();
});
