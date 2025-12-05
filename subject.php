<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="assets/styles/form.css">
    <script src="assets/js/subject.js" defer></script>
    <style>
        .touche {
            width: 50px;
            vertical-align: middle;
        }
        .keypad {
            display: inline-block;
            margin-bottom: 10px;
        }
        .keypad.hidden {
            display: none;
        }
        .keypad-row {
            display: flex;
            justify-content: center;
            margin-bottom: 5px;
        }
        .keypad-row.last {
            display: flex;
            justify-content: center;
        }
    </style>
</head>
<body>
    <?php include 'includes/navbar.php'; ?>
    
    <div class="gameboy-screen">
    <form action="get">
        <label for="subject">Sujet du message :</label><br>
        <button type="button" id="indiceBtn">Indice</button><br>
        <div class="keypad hidden">
            <div class="keypad-row">
                <img src="assets/img/touche_1.png" class="touche">
                <img src="assets/img/touche_2.png" class="touche">
                <img src="assets/img/touche_3.png" class="touche">
            </div>
            <div class="keypad-row">
                <img src="assets/img/touche_4.png" class="touche">
                <img src="assets/img/touche_5.png" class="touche">
                <img src="assets/img/touche_6.png" class="touche">
            </div>
            <div class="keypad-row">
                <img src="assets/img/touche_7.png" class="touche">
                <img src="assets/img/touche_8.png" class="touche">
                <img src="assets/img/touche_9.png" class="touche">
            </div>
            <div class="keypad-row last">
                <img src="assets/img/touche_0.png" class="touche">
            </div>
        </div><br>
        <input type="text" name="subject" id="subject" maxlength="100" placeholder="Sujet">
    </form>
    <div class="screen-arrows">
        <a href="email.php" aria-label="Précédent">
            ◀
        </a>
        <a href="msg.php" aria-label="Suivant">
            ▶
        </a>
    </div>
    <div class="screen-nav">
        <span>3/4</span>
    </div>
    </div>
</body>
</html>