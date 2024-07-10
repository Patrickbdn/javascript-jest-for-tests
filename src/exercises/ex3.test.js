/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const { validateEmail, showValidationMessage } = require('./ex3');

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

describe('Email Validation', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        const form = document.getElementById('email-form');
        const emailInput = document.getElementById('email-input');
    });

    test('showValidationMessage should display the correct message', (done) => {
        emailInput.value = "test@example.com";
        const invalidEmail = "invalid-email";
        
        // Test avec un email valide"
        const validEmail = validateEmail(emailInput.value);
        showValidationMessage(validEmail);
        expect(messageElement.textContent).toBe("Email valide !");
 ; // Attendre 100 ms, ajustez si nécessaire

        // Test avec un email invalide
        showValidationMessage(invalidEmail);
        expect(messageElement.textContent).toBe("Email invalide. Veuillez réessayer.");

    });
});