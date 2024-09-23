const amazonLogo = document.querySelector('.social-icons img[src="https://github.com/chatduchaos/ChatDuChaos/blob/main/images/Logo%20Amazon.png?raw=true"]');
const tooltip = document.getElementById('amazon-tooltip');

amazonLogo.addEventListener('mouseenter', () => {
    tooltip.style.display = 'block';
});

amazonLogo.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
});

// Code pour l'embed Twitch
const twitchEmbed = document.getElementById('twitch-embed');
const toggleEmbedButton = document.getElementById('toggle-embed');

toggleEmbedButton.addEventListener('click', () => {
    if (twitchEmbed.style.display === 'none' || twitchEmbed.style.display === '') {
        twitchEmbed.style.display = 'block';
    } else {
        twitchEmbed.style.display = 'none';
    }
});
