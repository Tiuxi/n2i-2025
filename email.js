const key = 1;

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
            let shifted = (code + key) % 26;
            let result = String.fromCharCode(shifted + 97);
            input.value += result;
            console.log(result);
        } else {
            input.value += event.key;
        }
    });
}