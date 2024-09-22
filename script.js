const twitchIcon = document.querySelector('.social-icons a[href*="twitch"]');
const twitchEmbed = document.querySelector('.twitch-embed');

twitchIcon.addEventListener('mouseover', () => {
    twitchEmbed.style.display = 'block';
});

twitchIcon.addEventListener('mouseout', () => {
    twitchEmbed.style.display = 'none';
});
