const hoverArea = document.getElementById('hover-area');
const interactionResult = document.getElementById('interaction-result');

hoverArea.addEventListener('mouseover', () => {
  // Mettre à jour le contenu textuel lorsque l'utilisateur survole la zone.
  interactionResult.textContent = 'Vous survolez la base :)!';
});

hoverArea.addEventListener('mouseout', () => {
  // Remettre à jour le contenu textuel lorsque l'utilisateur ne survole plus la zone.
  interactionResult.textContent = 'Vous êtes en dehors de la base :/.';
});
