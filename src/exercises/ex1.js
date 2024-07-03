// Récupération des éléments du DOM
const addButton = document.getElementById('add-class-button');
const element = document.getElementById('element');

// Fonction pour ajouter la classe
function addClassToElement() {
  element.classList.add('new-class');
}

// Écouteur d'événement sur le bouton
addButton.addEventListener('click', addClassToElement);
