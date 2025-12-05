<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Etes-vous aveugle ?</title>

    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="assets/styles/form.css">
    <script src="assets/js/msg.js" defer></script>
</head>
<body>
    <?php include 'includes/navbar.php'; ?>
    
    <div class="gameboy-screen">
        <form>
            <label for="msgInput">Entrez votre message :</label>
            <input type="text" id="msgInput" placeholder="Coucou" style="display:none">
            <button id="msgValidate" type="button">Valider</button>
        </form>
        <div class="screen-arrows">
            <a href="subject.php" aria-label="Précédent">
                ◀
            </a>
            <span></span>
        </div>
        <div class="screen-nav">
            <span>4/4</span>
        </div>
    </div>
</body>
</html>