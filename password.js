// script.js
document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('copy').addEventListener('click', copyPassword);

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';

function generatePassword() {
    let passwordLength = 12; // délka hesla
    let password = '';
    
    // Generování náhodného hesla
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    
    // Zobrazení v divu
    document.getElementById('password').textContent = password;
}

function copyPassword() {
    const passwordText = document.getElementById('password').textContent;
    navigator.clipboard.writeText(passwordText).then(() => {
        alert('Password copied!');
    }).catch(err => {
        alert('Error:' + err);
    });
}
