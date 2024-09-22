const twitchIcon = document.querySelector('.social-icons a[href="https://www.twitch.tv/chatduchaos"]');
const twitchEmbed = document.querySelector('.twitch-embed');

twitchIcon.addEventListener('mouseenter', () => {
    twitchEmbed.style.display = 'block'; // Affiche l'embed
});

twitchIcon.addEventListener('mouseleave', () => {
    twitchEmbed.style.display = 'none'; // Masque l'embed
});
