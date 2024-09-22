document.getElementById('twitch-logo').addEventListener('mouseenter', function() {
    document.getElementById('twitch-embed').style.display = 'block';
});

document.getElementById('twitch-logo').addEventListener('mouseleave', function() {
    // Ne rien faire ici pour garder l'embed affiché quand la souris n'est pas dessus
});

document.getElementById('twitch-logo').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le lien de s'ouvrir immédiatement
    const embed = document.getElementById('twitch-embed');
    embed.style.display = (embed.style.display === 'block') ? 'none' : 'block'; // Toggle l'embed
});
