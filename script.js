const twitchIcon = document.querySelector('.social-icons a[href*="twitch"]');
const twitchEmbed = document.getElementById('twitch-embed');

twitchIcon.addEventListener('mouseenter', () => {
    twitchEmbed.style.display = 'block'; // Affiche l'embed quand on survole le logo Twitch
});

twitchIcon.addEventListener('mouseleave', () => {
    twitchEmbed.style.display = 'none'; // Cache l'embed quand on ne survole plus
});
