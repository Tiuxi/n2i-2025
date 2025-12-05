const chatbotButton = document.getElementById('chatbot-button');
const chatbotModal = document.getElementById('chatbot-modal');
const closeChatbot = document.getElementById('close-chatbot');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotMessages = document.getElementById('chatbot-messages');

// Créer l'indicateur de frappe
const typingIndicator = document.createElement('div');
typingIndicator.classList.add('typing');
typingIndicator.style.display = 'none';
typingIndicator.innerHTML = '<span></span><span></span><span></span>';

// Message de bienvenue du bot
addMessage('Bonjour, comment puis-je vous aider ?', false);

// Ouvrir la fenêtre du chatbot
chatbotButton.addEventListener('click', () => {
    chatbotModal.classList.toggle('active');
    chatbotInput.focus();
});

// Fermer la fenêtre du chatbot
closeChatbot.addEventListener('click', () => {
    chatbotModal.classList.remove('active');
});

// Fonction pour ajouter un message
function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user' : 'bot');
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Fonction pour envoyer un message à l'API LM Studio
async function getBotResponse(userMessage) {
    try {
        const response = await fetch('chat.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userMessage })
        });

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Erreur:', error);
        return 'Désolé, une erreur est survenue. Veuillez réessayer.';
    }
}

// Fonction pour envoyer un message
async function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message === '') return;

    // Ajouter le message de l'utilisateur
    addMessage(message, true);
    chatbotInput.value = '';

    // Afficher l'indicateur de frappe
    chatbotMessages.appendChild(typingIndicator);
    typingIndicator.style.display = 'block';
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Obtenir la réponse du bot via l'API
    const botResponse = await getBotResponse(message);
    
    // Retirer l'indicateur de frappe
    typingIndicator.style.display = 'none';
    typingIndicator.remove();
    
    // Ajouter le message du bot
    addMessage(botResponse, false);
}

// Envoyer le message avec le bouton
chatbotSend.addEventListener('click', sendMessage);

// Envoyer le message avec la touche Entrée
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
