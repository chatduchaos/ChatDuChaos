const twitchLogo = document.querySelector('.social-icons a[href*="twitch"]');
const twitchEmbed = document.getElementById('twitch-embed');

twitchLogo.addEventListener('mouseover', () => {
    twitchEmbed.style.display = 'block'; // Affiche l'embed
});

twitchLogo.addEventListener('mouseleave', () => {
    twitchEmbed.style.display = 'none'; // Masque l'embed
});
