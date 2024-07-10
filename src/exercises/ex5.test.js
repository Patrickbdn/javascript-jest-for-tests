document.addEventListener('DOMContentLoaded', function() {
    const hoverArea = document.getElementById('hover-area');
    const interactionResult = document.getElementById('interaction-result');

    hoverArea.addEventListener('mouseover', function() {
        interactionResult.textContent = 'Vous êtes en train de survoler la zone !';
    });

    hoverArea.addEventListener('mouseout', function() {
        interactionResult.textContent = 'Vous avez quitté la zone de survol.';
    });
});

;