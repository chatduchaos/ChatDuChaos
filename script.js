const twitchIcon = document.querySelector('a[href*="twitch"]');
const embed = document.getElementById('twitch-embed');

twitchIcon.addEventListener('mouseover', () => {
    embed.style.display = 'block';
});

twitchIcon.addEventListener('mouseout', () => {
    embed.style.display = 'none';
});
