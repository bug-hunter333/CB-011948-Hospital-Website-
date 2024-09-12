    // Function to save form data to local storage
    document.querySelector('.reservation-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        // Get the form data
        const patientName = document.getElementById('patient-name').value;
        const contactInfo = document.getElementById('contact-info').value;
        const preferredDoctor = document.getElementById('preferred-doctor').value;
        const preferredDate = document.getElementById('preferred-date').value;
        const preferredTime = document.getElementById('preferred-time').value;
        const reasonConsultation = document.getElementById('reason-consultation').value;
        const additionalNotes = document.getElementById('additional-notes').value;

        // Save the data to local storage
        localStorage.setItem('patientName', patientName);
        localStorage.setItem('contactInfo', contactInfo);
        localStorage.setItem('preferredDoctor', preferredDoctor);
        localStorage.setItem('preferredDate', preferredDate);
        localStorage.setItem('preferredTime', preferredTime);
        localStorage.setItem('reasonConsultation', reasonConsultation);
        localStorage.setItem('additionalNotes', additionalNotes);

        alert('Appointment details saved locally!');
    });

    // Function to load form data from local storage when the page loads
    window.addEventListener('load', function () {
        if (localStorage.getItem('patientName')) {
            document.getElementById('patient-name').value = localStorage.getItem('patientName');
            document.getElementById('contact-info').value = localStorage.getItem('contactInfo');
            document.getElementById('preferred-doctor').value = localStorage.getItem('preferredDoctor');
            document.getElementById('preferred-date').value = localStorage.getItem('preferredDate');
            document.getElementById('preferred-time').value = localStorage.getItem('preferredTime');
            document.getElementById('reason-consultation').value = localStorage.getItem('reasonConsultation');
            document.getElementById('additional-notes').value = localStorage.getItem('additionalNotes');
        }
    });
