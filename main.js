document.addEventListener('DOMContentLoaded', function() {
    const inquireButtons = document.querySelectorAll('.inquire'); // Select all buttons with the class 'inquire'
    const bookingPopup = document.getElementById('booking-popup');
    const closePopup = document.getElementById('close-popup');
    const decreaseTravellerButton = document.getElementById('decrease-traveller');
    const increaseTravellerButton = document.getElementById('increase-traveller');
    const travellerCountInput = document.getElementById('traveller-count');
    const bookingForm = document.getElementById('booking-form');

    window.onscroll = function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 400) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    inquireButtons.forEach(button => { // Iterate through each button
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            bookingPopup.classList.add('show'); // Show the popup
        });
    });

    closePopup.addEventListener('click', function() {
        bookingPopup.classList.remove('show');
    });

    window.addEventListener('click', function(event) {
        if (event.target === bookingPopup) {
            bookingPopup.classList.remove('show');
        }
    });

    decreaseTravellerButton.addEventListener('click', function() {
        let currentCount = parseInt(travellerCountInput.value, 10);
        if (currentCount > 1) {
            travellerCountInput.value = currentCount - 1;
        }
    });

    increaseTravellerButton.addEventListener('click', function() {
        let currentCount = parseInt(travellerCountInput.value, 10);
        travellerCountInput.value = currentCount + 1;
    });

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Form submitted successfully!");
        bookingPopup.classList.remove('show');
    });
});
