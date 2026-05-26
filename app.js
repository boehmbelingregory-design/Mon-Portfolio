// 1. On selectionne le bouton de contact grâce à sa classe css
const boutonContact = document.querySelector('.btn-contact');

// 2. On écoute le clic de l'utilisateur sur ce bouton
boutonContact.addEventListener('click', function(evenement) {
     
    //Le bouton est un lien (#contact), on stoppe son comportement par défaut pour éxecuter notre script d'abord
    evenement.preventDefault();

    // 3. On affiche une alerte personnalisée
    alert('Félicitations ! Ton script JavaScript fonctionne à merveille sur ton tout nouveau portfolio. 🚀');

    // 4. Défilement fluide vers la section contact après l'alerte
    const sectionContact = document.querySelector('#contact');
    sectionContact.scrollIntoView({ behavior: 'smooth'});
});

