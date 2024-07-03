function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showValidationMessage(isValid) {
    const messageElement = document.getElementById('validation-message');
    if (isValid) {
        messageElement.textContent = "Email valide !";
        messageElement.className = 'valid';
    } else {
        messageElement.textContent = "Email invalide. Veuillez réessayer.";
        messageElement.className = 'invalid';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('email-form');
    const emailInput = document.getElementById('email-input');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value;
        const isValid = validateEmail(email);
        showValidationMessage(isValid);
    });
});

// Export pour les tests
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validateEmail, showValidationMessage };
}
