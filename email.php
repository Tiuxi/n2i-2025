<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Force a vous :D</title>

    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="assets/styles/form.css">
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
</body>
</html>