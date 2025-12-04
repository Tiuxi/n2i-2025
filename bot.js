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

// Fonction pour envoyer un message
function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message === '') return;

    // Ajouter le message de l'utilisateur
    addMessage(message, true);
    chatbotInput.value = '';

    // Afficher l'indicateur de frappe
    chatbotMessages.appendChild(typingIndicator);
    typingIndicator.style.display = 'block';
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Simuler une réponse du chatbot
    setTimeout(() => {
        // Retirer l'indicateur de frappe
        typingIndicator.style.display = 'none';
        typingIndicator.remove();
        
        // Ajouter le message du bot
        addMessage('Bonjour', false);
    }, 500);
}

// Envoyer le message avec le bouton
chatbotSend.addEventListener('click', sendMessage);

// Envoyer le message avec la touche Entrée
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
