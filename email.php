<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NIRD - Formulaire</title>

    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="assets/styles/form.css">
    <link rel="stylesheet" href="loader.css">
    <script src="assets/js/email.js" defer></script>
</head>
<body>
    <?php include 'includes/navbar.php'; ?>
    
    <div class="gameboy-screen">
        <form>
            <label for="cypherInput">Entrez votre email, la clé Cesar est: <span id="keyDisplay"></span></label>
            <input type="email" id="cypherInput" placeholder="GL gang...">
        </form>
        <div class="screen-arrows">
            <a href="name.php" aria-label="Précédent">
                ◀
            </a>
            <a href="subject.php" aria-label="Suivant">
                ▶
            </a>
        </div>
        <div class="screen-nav">
            <span>2/4</span>
        </div>
    </div>
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