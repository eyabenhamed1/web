document.getElementById('offerForm').addEventListener('submit', function(event) {
    let title = document.getElementById('title');
    let destination = document.getElementById('destination');
    let departureDate = document.getElementById('departureDate');
    let returnDate = document.getElementById('returnDate');
    let price = document.getElementById('price');
    let isValid = true;

    function showError(input, message) {
        input.nextElementSibling.textContent = message;
        input.nextElementSibling.style.color = 'red';
    }

    function showSuccess(input) {
        input.nextElementSibling.textContent = 'Correct';
        input.nextElementSibling.style.color = 'green';
    }

    if (title.value.length < 3) {
        showError(title, 'Le titre doit contenir au moins 3 caractères.');
        isValid = false;
    } else {
        showSuccess(title);
    }

    if (!/^[a-zA-Z\s]{3,}$/.test(destination.value)) {
        showError(destination, 'La destination doit contenir uniquement des lettres et au moins 3 caractères.');
        isValid = false;
    } else {
        showSuccess(destination);
    }

    if (!departureDate.value) {
        showError(departureDate, 'Veuillez sélectionner une date valide.');
        isValid = false;
    } else {
        showSuccess(departureDate);
    }

    if (!returnDate.value || new Date(returnDate.value) <= new Date(departureDate.value)) {
        showError(returnDate, 'La date de retour doit être ultérieure à la date de départ.');
        isValid = false;
    } else {
        showSuccess(returnDate);
    }

    if (price.value <= 0 || isNaN(price.value)) {
        showError(price, 'Le prix doit être un nombre positif.');
        isValid = false;
    } else {
        showSuccess(price);
    }

    if (!isValid) {
        event.preventDefault();
    }
});
