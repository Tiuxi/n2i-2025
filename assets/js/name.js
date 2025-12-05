// Fonction pour mélanger et réorganiser les boutons
function shuffleButtons() {
    const form = document.getElementById('myForm');
    const letterButtons = Array.from(form.querySelectorAll('.letter-btn'));
    const resetButton = form.querySelector('.reset-btn');
    
    // Mélanger uniquement les boutons lettres
    for (let i = letterButtons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letterButtons[i], letterButtons[j]] = [letterButtons[j], letterButtons[i]];
    }
    
    // Réinsérer d'abord les lettres puis le reset en dernier
    letterButtons.forEach(button => form.appendChild(button));
    if (resetButton) {
        form.appendChild(resetButton);
    }
}

// Variable pour stocker le texte des boutons cliqués
let clickedText = '';

// Ajouter des event listeners à tous les boutons
document.addEventListener('DOMContentLoaded', function() {
    // Randomiser les boutons au chargement
    shuffleButtons();
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Empêcher le comportement par défaut du bouton
            
            // Vérifier si c'est le bouton Reset
            if (button.textContent === 'Reset') {
                clickedText = '';
                document.getElementById('output_name').textContent = '';
            } else {
                // Ajouter le texte du bouton cliqué
                clickedText += button.textContent;
                
                // Mettre à jour le label
                document.getElementById('output_name').textContent = clickedText;
            }
            
            shuffleButtons();
        });
    });
});
