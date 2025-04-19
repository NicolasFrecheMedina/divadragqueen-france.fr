document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("bg-effect");
    const windowWidth = window.innerWidth;
    const numberOfSparkles = windowWidth < 1024 ? 200 : 500; // 200 paillettes pour les écrans < 1024px, sinon 500

    for (let i = 0; i < numberOfSparkles; i++) {
        let sparkle = document.createElement("div");
        sparkle.classList.add("sparkle-glow");
        sparkle.style.left = Math.random() * logo.clientWidth + "px";
        sparkle.style.top = Math.random() * logo.clientHeight + "px";
        sparkle.style.animationDuration = (Math.random() * 2 + 1) + "s"; // Variation aléatoire
        logo.parentElement.appendChild(sparkle);
    }
});

document.querySelectorAll('.sub-menu').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});