// Script pour afficher/masquer l'embed Twitch
document.addEventListener('DOMContentLoaded', function() {
    const twitchIcon = document.querySelector('.social-icons img[alt="Twitch"]');
    const twitchEmbedContainer = document.getElementById('twitch-embed-container');

    twitchIcon.addEventListener('click', function() {
        if (twitchEmbedContainer.classList.contains('twitch-embed-hidden')) {
            twitchEmbedContainer.classList.remove('twitch-embed-hidden');
            twitchEmbedContainer.classList.add('twitch-embed-visible');
        } else {
            twitchEmbedContainer.classList.add('twitch-embed-hidden');
            twitchEmbedContainer.classList.remove('twitch-embed-visible');
        }
    });
});
