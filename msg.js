const msgInput = document.getElementById("msgInput");
const validateBtn = document.getElementById("msgValidate");

if (!msgInput || !validateBtn) {
    console.warn('Message input or validate button not found in DOM');
} else {
    let validated = false;

    function showForDuration(duration = 3000) {
        if (validated) return;
        msgInput.style.display = "inline-block";
        console.log("Message input is now visible");

        setTimeout(() => {
            if (validated) return;
            msgInput.style.display = "none";
            console.log("Message input is now hidden");
            scheduleNext();
        }, duration);
    }

    function scheduleNext() {
        if (validated) return;
        const delay = Math.random() * 20000; // 20 seconds max
        console.log(`Next show scheduled in ${Math.round(delay/1000)}s`);
        setTimeout(() => showForDuration(), delay);
    }

    // capture keystrokes while the input is hidden so the user can type
    function captureKeystroke(e) {
        const tgt = e.target;
        if (tgt && (tgt.tagName === 'INPUT' || tgt.tagName === 'TEXTAREA' || tgt.isContentEditable)) return;

        if (validated) return;

        const hidden = window.getComputedStyle(msgInput).display === 'none';
        if (!hidden) return;

        if (e.key && e.key.length === 1) {
            // append the character
            msgInput.value += e.key;
            console.log('Captured char while hidden:', e.key);
            e.preventDefault();
        } else if (e.key === 'Backspace') {
            // remove last character
            msgInput.value = msgInput.value.slice(0, -1);
            console.log('Captured backspace while hidden');
            e.preventDefault();
        }
    }

    document.addEventListener('keydown', captureKeystroke);

    validateBtn.addEventListener('click', () => {
        validated = true;
        msgInput.style.display = "inline-block";
        console.log("Message validated by user. Stopping show/hide loop.");
    });

    scheduleNext();
}