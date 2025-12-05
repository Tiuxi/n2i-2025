<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="assets/styles/form.css">
    <script src="assets/js/name.js" defer></script>
    <link rel="stylesheet" href="loader.css">
</head>
<body>
    <?php include 'includes/navbar.php'; ?>
    
    <div class="gameboy-screen">
    <form action="get" id="myForm">
        <label for="name">Prénom :</label><br>
        <label for="output_name" id="output_name"></label><br>
        <button class="letter-btn">A</button>
        <button class="letter-btn">B</button>
        <button class="letter-btn">C</button>
        <button class="letter-btn">D</button>
        <button class="letter-btn">E</button>
        <button class="letter-btn">F</button>
        <button class="letter-btn">G</button>
        <button class="letter-btn">H</button>
        <button class="letter-btn">I</button>
        <button class="letter-btn">J</button>
        <button class="letter-btn">K</button>
        <button class="letter-btn">L</button>
        <button class="letter-btn">M</button>
        <button class="letter-btn">N</button>
        <button class="letter-btn">O</button>
        <button class="letter-btn">P</button>
        <button class="letter-btn">Q</button>
        <button class="letter-btn">R</button>
        <button class="letter-btn">S</button>
        <button class="letter-btn">T</button>
        <button class="letter-btn">U</button>
        <button class="letter-btn">V</button>
        <button class="letter-btn">W</button>
        <button class="letter-btn">X</button>
        <button class="letter-btn">Y</button>
        <button class="letter-btn">Z</button>
        <button class="letter-btn"> </button>
        
        <button class="reset-btn">Reset</button>
    </form>
    <div class="screen-arrows">
        <span></span>
        <a href="email.php" aria-label="Suivant">
            ▶
        </a>
    </div>
    <div class="screen-nav">
        <span>1/4</span>
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