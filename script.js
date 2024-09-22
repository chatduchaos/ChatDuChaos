const twitchLogo = document.querySelector('.social-icons a img');
const twitchEmbed = document.getElementById('twitch-embed');

twitchLogo.addEventListener('mouseover', () => {
    twitchEmbed.style.display = 'block';
});

twitchLogo.addEventListener('mouseout', () => {
    twitchEmbed.style.display = 'none';
});
