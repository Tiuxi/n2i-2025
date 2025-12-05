<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake</title>
    <script src=" https://cdn.jsdelivr.net/npm/p5@1.11.11/lib/p5.min.js"></script>
    <link rel="icon" href="data:,">
    <script src="snake.js"></script>
    <script src="main.js"></script>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="loader.css">
</head>
<body>
    <div id="chatbot-container">
        <button id="chatbot-button">
            <img src="bulle.png">
        </button>
        <!-- Fenêtre modale du chatbot -->
        <div id="chatbot-modal">
            <div id="chatbot-header">
                <div>
                    <img src="avatar.jpeg">
                    <div>
                        <h3>Freddy</h3>
                        <p>En ligne</p>
                    </div>
                </div>
                <button id="close-chatbot">&times;</button>
            </div>
            <div id="chatbot-messages">
            </div>
            <div id="chatbot-input-area">
                <input type="text" id="chatbot-input" placeholder="Écrivez un message...">
                <button id="chatbot-send">➤</button>
            </div>
        </div>
    </div>
    <script src="chatbot.js"></script>
</body>
</html>
