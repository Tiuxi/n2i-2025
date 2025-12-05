// --- CARROUSEL ---
const images = ["emote_envie.png", "emote_colere.png", "emote_joie.png", "emote_anxiete.png","emote_degout.png", "emote_triste.png", "emote_peur.png", "emote_ennuis.png", "emote_embarra.png"];
const images_back = ["envie.png", "colere.png", "joir.png", "anxiete.png","degout.png", "triste.png", "peur.png", "ennuis.png", "embarras.png"]; // change-les si tu veux
let currentIndex = 1;
const text = ["Envie","Colère","Joie","Anxiété","Dégoût","Triste","Peur","Ennui","Embarras"];

document.getElementById("nextImage").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("carouselImage").src = images[currentIndex];
    document.getElementById("carouselText").textContent = text[currentIndex];
    document.getElementById("cardImage").src = images_back[currentIndex];
    document.getElementById("typeImage").src = images[currentIndex];
});

// --- AJOUT DE COMPÉTENCES ---
document.getElementById("addSkill").addEventListener("click", () => {
    const name = document.getElementById("skillName").value.trim();
    const desc = document.getElementById("skillDesc").value.trim();

    if (name === "" || desc === "") return alert("Veuillez remplir le nom et la description.");

    const li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong><br>${desc}`;
    document.getElementById("skillList").appendChild(li);

    const li2 = document.createElement("li");
    li2.innerHTML = `<h2>${name}</h2><br>${desc}`;
    document.getElementById("skillList2").appendChild(li2);

    // Reset mini form
    document.getElementById("skillName").value = "";
    document.getElementById("skillDesc").value = "";
});

// --- VALIDATION ---
document.getElementById("validate").addEventListener("click", () => {
    const card = document.getElementById("container2");

    html2canvas(card, { useCORS: true }).then(canvas => {
        const imgData = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = imgData;
        link.download = "capture.png";
        link.click();
    });
});

const imagePicker = document.getElementById("imagePicker");
const carouselImage = document.getElementById("carouselImage");

imagePicker.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // créer une URL temporaire pour afficher l'image
    const imageURL = URL.createObjectURL(file);

    // remplacer l'image du carrousel
    illusImage.src = imageURL;
});

const pseudoInput = document.getElementById("pseudo");
const displayPseudo = document.getElementById("nom");

pseudoInput.addEventListener("input", () => {
    displayPseudo.textContent = pseudoInput.value;
});
