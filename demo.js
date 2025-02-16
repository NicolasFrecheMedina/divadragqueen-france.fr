

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("bg-effect");
    for (let i = 0; i < 500; i++) { // Nombre de paillettes
        let sparkle = document.createElement("div");
        sparkle.classList.add("sparkle-glow");
        sparkle.style.left = Math.random() * logo.clientWidth + "px";
        sparkle.style.top = Math.random() * logo.clientHeight + "px";
        sparkle.style.animationDuration = (Math.random() * 2 + 1) + "s"; // Variation aléatoire
        logo.parentElement.appendChild(sparkle);
    }
});