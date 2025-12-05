let keylen = 1;
let key;

const keyDisplay = document.getElementById("keyDisplay");
if (keyDisplay) keyDisplay.textContent = String(keylen);

function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

fetch("/keys.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(keys => {
        const ids = Object.keys(keys);

        const randomId = ids[Math.floor(Math.random() * ids.length)];
        key = keys[randomId];
        keylen = key.length || keylen;

        console.log(`Using key: ${key}`);
        if (keyDisplay) keyDisplay.textContent = String(key != null ? key : keylen);
    })
    .catch(err => {
        console.warn('Failed to load keys.json, using fallback key=', keylen, err);
        if (keyDisplay) keyDisplay.textContent = String(keylen);
    });

const input = document.getElementById("cypherInput");

if (!input) {
    console.warn('Element with id "cypherInput" not found');
} else {
    input.addEventListener('keydown', function(event) {
        if (event.key.length > 1) return;

        event.preventDefault();

        let ch = event.key.toLowerCase();

        if (ch >= 'a' && ch <= 'z') {
            let code = ch.charCodeAt(0) - 97;
            let shifted = (code + keylen) % 26;
            let result = String.fromCharCode(shifted + 97);
            input.value += result;
        } else {
            input.value += event.key;
        }
    });

    input.addEventListener('change', function() {
        if (isValidEmail(input.value)) {
            console.log('Valid email');
        } else {
            console.warn('Invalid email');
        }
    });
}