const twitchLogo = document.getElementById('twitch-logo');
const twitchEmbed = document.getElementById('twitch-embed');

twitchLogo.addEventListener('mouseenter', () => {
    twitchEmbed.style.display = 'block';
});

twitchLogo.addEventListener('mouseleave', () => {
    twitchEmbed.style.display = 'none';
});
