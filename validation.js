function test(event) {
    let title = document.getElementById("title").value.trim();
    let destination = document.getElementById("destination").value.trim();
    let departureDate = new Date(document.getElementById("departureDate").value);
    let returnDate = new Date(document.getElementById("returnDate").value);
    let price = document.getElementById("price").value.trim();

    // Validation du titre
    if (title.length < 3) {
        alert("Le titre doit contenir au moins 3 caractères.");
        event.preventDefault();
        return;
    }

    // Validation de la destination
    let destinationRegex = /^[A-Za-zÀ-ÿ ]{3,}$/;
    if (!destinationRegex.test(destination)) {
        alert("La destination doit contenir au moins 3 lettres et ne comporter que des lettres et des espaces.");
        event.preventDefault();
        return;
    }

    // Validation des dates
    if (returnDate <= departureDate) {
        alert("La date de retour doit être après la date de départ.");
        event.preventDefault();
        return;
    }

    // Validation du prix
    if (isNaN(price) || parseFloat(price) <= 0) {
        alert("Le prix doit être un nombre positif.");
        event.preventDefault();
        return;
    }

    // Si tout est valide, soumettre le formulaire
    alert("Offre de voyage ajoutée avec succès !");
}

// Appel de la fonction lorsque l'utilisateur clique sur le bouton de soumission
document.getElementById("travel").addEventListener("submit", test);
