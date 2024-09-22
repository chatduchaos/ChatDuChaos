const twitchIcon = document.querySelector('a[href="https://www.twitch.tv/chatduchaos"]');
const embed = document.getElementById('twitch-embed');

twitchIcon.addEventListener('mouseenter', () => {
    embed.style.display = 'block';
});

twitchIcon.addEventListener('mouseleave', () => {
    embed.style.display = 'none';
});
