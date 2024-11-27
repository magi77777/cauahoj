document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('copy').addEventListener('click', copyPassword);
document.getElementById('length').addEventListener('input', updateLength);

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

function updateLength() {
    const length = document.getElementById('length').value;
    document.getElementById('length-value').textContent = length;
}

function generatePassword() {
    const length = parseInt(document.getElementById('length').value, 10);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    let availableChars = '';
    if (includeUppercase) availableChars += uppercaseChars;
    if (includeLowercase) availableChars += lowercaseChars;
    if (includeNumbers) availableChars += numberChars;
    if (includeSymbols) availableChars += symbolChars;

    if (availableChars === '') {
        alert('Please select at least one character type!');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars.charAt(randomIndex);
    }

    document.getElementById('password').textContent = password;
}

function copyPassword() {
    const passwordText = document.getElementById('password').textContent;
    navigator.clipboard.writeText(passwordText).then(() => {
        alert('Password copied!');
    }).catch(err => {
        alert('Error: ' + err);
    });
}
