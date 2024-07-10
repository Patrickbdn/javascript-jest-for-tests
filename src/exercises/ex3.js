const messageElement = document.getElementById('validationMessage');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showValidationMessage(isValid) {
    if (isValid) {
        messageElement.textContent = "Email valide !";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Email invalide. Veuillez réessayer.";
        messageElement.style.color = "red";
    }
}

const form = document.getElementById('email-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;
    const isValid = validateEmail(email);
    showValidationMessage(isValid);
});
