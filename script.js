const twitchLogo = document.querySelector('.social-icons a[href="https://www.twitch.tv/chatduchaos"]');
const embedContainer = document.querySelector('.embed-container');

twitchLogo.addEventListener('mouseenter', () => {
    embedContainer.style.display = 'block';
});

twitchLogo.addEventListener('mouseleave', () => {
    embedContainer.style.display = 'none';
});
