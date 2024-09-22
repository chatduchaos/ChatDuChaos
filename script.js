document.querySelector('.social-icons a img[alt="Twitch"]').addEventListener('mouseover', function() {
    document.querySelector('.embed-container').style.display = 'block'; // Afficher l'embed
});

document.querySelector('.social-icons a img[alt="Twitch"]').addEventListener('mouseout', function() {
    document.querySelector('.embed-container').style.display = 'none'; // Masquer l'embed
});
