// Saisie type multi-tap (téléphone) sur l'input #subject
document.addEventListener('DOMContentLoaded', () => {
	const input = document.getElementById('subject');
	if (!input) return;

	const keyMap = {
        '1': '1.,?!\'"-()',
		'2': '2abc',
		'3': '3def',
		'4': '4ghi',
		'5': '5jkl',
		'6': '6mno',
		'7': '7pqrs',
		'8': '8tuv',
		'9': '9wxyz',
        '0': '0 '
	};

	let lastKey = null;
	let pressCount = 0;
	let commitTimer = null;

	// Gestion du bouton indice
	const indiceBtn = document.getElementById('indiceBtn');
	const keypad = document.querySelector('.keypad');
	
	if (indiceBtn && keypad) {
		indiceBtn.addEventListener('click', (e) => {
			e.preventDefault();
			keypad.classList.toggle('hidden');
			
			// Changer le texte du bouton
			if (keypad.classList.contains('hidden')) {
				indiceBtn.textContent = 'Indice';
			} else {
				indiceBtn.textContent = "Cacher l'indice";
			}
		});
	}

	const commitCurrent = () => {
		lastKey = null;
		pressCount = 0;
		if (commitTimer) {
			clearTimeout(commitTimer);
			commitTimer = null;
		}
	};

	const scheduleCommit = () => {
		if (commitTimer) clearTimeout(commitTimer);
		commitTimer = setTimeout(commitCurrent, 1000);
	};

	const handleDigit = (key) => {
		const letters = keyMap[key];
		if (!letters) return;

		if (key === lastKey) {
			pressCount += 1;
			const nextChar = letters[(pressCount - 1) % letters.length];
			input.value = input.value.slice(0, -1) + nextChar;
		} else {
			lastKey = key;
			pressCount = 1;
			input.value += letters[0];
		}

		scheduleCommit();
	};

	input.addEventListener('keydown', (e) => {
		const { key } = e;

		// Bloquer les lettres tapées directement
		if (/^[a-zA-Z]$/.test(key)) {
			e.preventDefault();
			return;
		}

		// Gestion des chiffres 0-9 pour multi-tap
		if (/^[0-9]$/.test(key)) {
			e.preventDefault();
			handleDigit(key);
			return;
		}

		// Backspace : on valide l'état courant puis on supprime
		if (key === 'Backspace') {
			commitCurrent();
			input.value = input.value.slice(0, -1);
			e.preventDefault();
			return;
		}

		// Entrée/validation : on fige le dernier caractère en cours
		if (key === 'Enter') {
			commitCurrent();
			return;
		}

		// Bloquer tous les autres caractères imprimables
		if (key.length === 1) {
			e.preventDefault();
			return;
		}

		// Autoriser navigation (flèches, tab, etc.) sans bloquer
	});
});
