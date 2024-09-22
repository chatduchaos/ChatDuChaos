const twitchIcon = document.getElementById('twitch-icon');
const embed = document.getElementById('twitch-embed');

twitchIcon.addEventListener('mouseover', () => {
    embed.style.display = 'block';
});

twitchIcon.addEventListener('mouseout', () => {
    embed.style.display = 'none';
});
