// <!--
// b.             8          .8.              ,o888888o.        ,o888888o.               8 888888888o.      8 8888888888   `8.`888b           ,8'
// 888o.          8         .888.            8888     `88.   . 8888     `88.             8 8888    `^888.   8 8888          `8.`888b         ,8'
// Y88888o.       8        :88888.        ,8 8888       `8. ,8 8888       `8b            8 8888        `88. 8 8888           `8.`888b       ,8'
// .`Y888888o.    8       . `88888.       88 8888           88 8888        `8b           8 8888         `88 8 8888            `8.`888b     ,8'
// 8o. `Y888888o. 8      .8. `88888.      88 8888           88 8888         88           8 8888          88 8 888888888888     `8.`888b   ,8'
// 8`Y8o. `Y88888o8     .8`8. `88888.     88 8888           88 8888         88           8 8888          88 8 8888              `8.`888b ,8'
// 8   `Y8o. `Y8888    .8' `8. `88888.    88 8888           88 8888        ,8P           8 8888         ,88 8 8888               `8.`888b8'
// 8      `Y8o. `Y8   .8'   `8. `88888.   `8 8888       .8' `8 8888       ,8P            8 8888        ,88' 8 8888                `8.`888'
// 8         `Y8o.`  .888888888. `88888.     8888     ,88'   ` 8888     ,88'             8 8888    ,o88P'   8 8888                 `8.`8'
// 8            `Yo .8'       `8. `88888.     `8888888P'        `8888888P'               8 888888888P'      8 888888888888          `8.`

//                                                                 Powered by 🅽🅰🅲🅾 🅳🅴🆅 ✨
// -->


document.addEventListener("DOMContentLoaded", function () {
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



// Flip one-shot : après le premier clic, plus aucun toggle
document.querySelectorAll('.sub-menu').forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('flipped');   // pas de toggle
  }, { once: true });                 // le handler ne s'exécutera qu'une seule fois
});

document.addEventListener('DOMContentLoaded', function () {

    const forms = document.querySelectorAll('form');

    forms.forEach((form) => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(form);

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
                .then(() => {
                    alert("Votre message a bien été envoyé, merci!");
                    form.reset();
                })
                .catch((error) => alert(error));
        });
    });

    // === Modal candidates (ouverture via .candidate-link[data-img], fermeture via X / backdrop / Esc) ===
(function () {
  function initCandidateModal() {
    const modal = document.getElementById('candidate-modal');
    if (!modal) return; // pas de modal dans le DOM -> on sort

    const modalImg = modal.querySelector('.candidate-modal__img');
    const closeBtn = modal.querySelector('.candidate-modal__close');
    const backdrop = modal.querySelector('.candidate-modal__backdrop');
    const dialog = modal.querySelector('.candidate-modal__dialog');

    let lastActiveEl = null;

    function open(src) {
      lastActiveEl = document.activeElement;
      modalImg.src = src || '';
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // lock scroll
      if (closeBtn) closeBtn.focus();
    }

    function close() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      modalImg.src = '';
      document.body.style.overflow = ''; // unlock scroll
      if (lastActiveEl && typeof lastActiveEl.focus === 'function') {
        lastActiveEl.focus();
      }
    }

    // Ouvrir la modal en cliquant sur un nom de candidate
    document.addEventListener('click', (e) => {
      const link = e.target.closest('.candidate-link');
      if (!link) return;
      e.preventDefault();
      e.stopPropagation(); // évite de déclencher le flip sur .sub-menu
      open(link.getAttribute('data-img'));
    });

    // Fermer
    closeBtn && closeBtn.addEventListener('click', (e) => { e.stopPropagation(); close(); });
    backdrop && backdrop.addEventListener('click', close);
    dialog && dialog.addEventListener('click', (e) => e.stopPropagation());
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  // Exécute même si DOMContentLoaded est déjà passé
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCandidateModal);
  } else {
    initCandidateModal();
  }
})();

    // const form = document.querySelector('form');
    // if (form) {
    //     const handleSubmit = (event) => {
    //         event.preventDefault();
    //         const myForm = event.target;
    //         const formData = new FormData(myForm);

    //         fetch("/", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //             body: new URLSearchParams(formData).toString(),
    //         })
    //             .then(() => {
    //                 alert("Votre message a bien été envoyé, merci!");
    //                 myForm.reset();
    //             })
    //             .catch((error) => alert(error));
    //     };
    //     form.addEventListener('submit', handleSubmit);
    // }
});
