<?php
// Définition des liens de navigation
$navLinks = [
    ['Accueil', 'index.php'],
    ['Formulaire', 'name.php'],
];
?>
<nav class="navbar">
    <div class="nav-container">
        <?php foreach ($navLinks as $link): ?>
            <a href="<?php echo $link[1]; ?>" class="nav-link">
                <?php echo $link[0]; ?>
            </a>
        <?php endforeach; ?>
    </div>
</nav>
