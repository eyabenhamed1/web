function validerFormulaire() {
    let title = document.getElementById('title').value.trim();
    let destination = document.getElementById('destination').value.trim();
    let departureDate = document.getElementById('departureDate').value;
    let returnDate = document.getElementById('returnDate').value;
    let price = document.getElementById('price').value;
    
    if (title.length < 3) {
        alert('Le titre doit contenir au moins 3 caractères.');
        return;
    }
    
    if (!/^[a-zA-Z\s]{3,}$/.test(destination)) {
        alert('La destination doit contenir uniquement des lettres et au moins 3 caractères.');
        return;
    }
    
    if (!departureDate) {
        alert('Veuillez sélectionner une date de départ valide.');
        return;
    }
    
    if (!returnDate || new Date(returnDate) <= new Date(departureDate)) {
        alert('La date de retour doit être ultérieure à la date de départ.');
        return;
    }
    
    if (price <= 0 || isNaN(price)) {
        alert('Le prix doit être un nombre positif.');
        return;
    }
    
    alert('Formulaire validé avec succès !');
}

document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();
    validerFormulaire();
});
