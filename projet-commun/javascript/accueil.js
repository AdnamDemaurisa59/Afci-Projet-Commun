
// Tableau des profils avec les noms et URL des portfolios
const profils = [
    { name: 'Koud Demaurisa Adnam', url:'https://adnamdemaurisa59.github.io/Agri-Partenaires1/' },
    { name: '', url:'' },
    { name: '', url:'' },
    { name: '', url:'' },
    { name: '', url:'' },
    { name: '', url:'' },
    { name: '', url:'' },
    { name: '', url:'' },
    { name: '', url:'' },
    { name: '', url:'' },
    { name: '', url:'' },
    { name: '', url:'' },
    { name: '', url:'' },
];

// Sélection des éléments du DOM pour la barre de recherche et les suggestions
const searchInput = document.getElementById('searchInput');
const suggestionsDiv = document.getElementById('suggestions');
const searchIcon = document.querySelector('.searchbutton'); // Icône de recherche

// Fonction pour afficher ou masquer la div suggestions
searchInput.addEventListener('keyup', function () {
    const input = searchInput.value.toLowerCase();

    // Si l'entrée est vide, cacher la div suggestions
    if (input === '') {
        suggestionsDiv.style.display = 'none';
        return;
    }

    // Filtre les profils en fonction de l'entrée
    const result = profils.filter(profil => profil.name.toLowerCase().includes(input));

    let suggestions = '';

    if (result.length > 0) {
        result.forEach(profil => {
            suggestions += `<div onclick="insertSuggestion('${profil.name}', '${profil.url}')">${profil.name}</div>`;
        });
        suggestionsDiv.innerHTML = suggestions;
        suggestionsDiv.style.display = 'block'; // Affiche la div suggestions
    } else {
        suggestionsDiv.style.display = 'none'; // Si aucun résultat, cacher la div
    }
});

// Ajoute un événement qui se déclenche lorsque l'utilisateur appuie sur "Enter"
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Si la touche "Enter" est pressée
        redirectToOfferPage(); // Redirige vers la page du portfolio correspondant
    }
});

// Ajoute un événement pour déclencher la recherche quand on clique sur l'icône de recherche
searchIcon.addEventListener('click', function() {
    redirectToOfferPage(); // Redirige vers la page du portfolio
});

// Fonction pour rediriger vers la page du portfolio basé sur la saisie dans la barre de recherche
function redirectToOfferPage() {
    // Cherche le profil qui correspond exactement à ce qui est tapé dans la barre de recherche
    const selectedSuggestion = profils.find(profil => profil.name === searchInput.value);
    
    // Si un profil est trouvé et qu'il a une URL, ouvre cette URL dans un nouvel onglet
    if (selectedSuggestion && selectedSuggestion.url) {
        window.open(selectedSuggestion.url, '_blank');
    }
}

// Fonction pour insérer la suggestion sélectionnée dans la barre de recherche
function insertSuggestion(name, url) {
    searchInput.value = name;
    suggestionsDiv.style.display = 'none'; // Cache la div suggestions après sélection
}



