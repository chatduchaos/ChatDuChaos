const twitchEmbed = document.getElementById('twitch-embed');
const twitchLogo = document.querySelector('.twitch-embed img');

twitchLogo.addEventListener('mouseenter', () => {
    twitchEmbed.style.display = 'block';
});

twitchLogo.addEventListener('mouseleave', () => {
    twitchEmbed.style.display = 'none';
});
