document.addEventListener("DOMContentLoaded", function() {
    const embed = document.getElementById("twitch-embed");
    const twitchLink = document.querySelector('.social-icons a[href*="twitch"]');

    twitchLink.addEventListener("mouseover", function() {
        embed.style.display = "block"; // Montre l'embed
    });

    twitchLink.addEventListener("mouseout", function() {
        embed.style.display = "none"; // Cache l'embed
    });
});
