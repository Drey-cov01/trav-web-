document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.attraction-card a, .accommodation-card a');
    const bookingPopup = document.getElementById('booking-popup');
    const closePopup = document.getElementById('close-popup');
    const decreaseTravellerButton = document.getElementById('decrease-traveller');
    const increaseTravellerButton = document.getElementById('increase-traveller');
    const travellerCountInput = document.getElementById('traveller-count');
    const bookingForm = document.getElementById('booking-form');
    
    // Show the pop-up when clicking on a link
    window.onscroll = function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 400) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            bookingPopup.classList.add('show'); // Show the booking form
        });
    });

    // Close the pop-up when clicking the 'x' button
    closePopup.addEventListener('click', function() {
        bookingPopup.classList.remove('show'); // Hide the booking form
    });

    // Close the pop-up if the user clicks outside the form
    window.addEventListener('click', function(event) {
        if (event.target === bookingPopup) {
            bookingPopup.classList.remove('show'); // Hide the booking form
        }
    });

    // Decrease the traveller count
    decreaseTravellerButton.addEventListener('click', function() {
        let currentCount = parseInt(travellerCountInput.value, 10);
        if (currentCount > 1) { // Ensure traveller count doesn't go below 1
            travellerCountInput.value = currentCount - 1;
        }
    });

    // Increase the traveller count
    increaseTravellerButton.addEventListener('click', function() {
        let currentCount = parseInt(travellerCountInput.value, 10);
        travellerCountInput.value = currentCount + 1;
    });

    // Optionally, handle form submission (just prevent for now)
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Form submitted successfully!");
        bookingPopup.classList.remove('show'); // Close popup after submit
    });
});
