const twitchIcon = document.getElementById("twitch-icon");
const twitchEmbed = document.getElementById("twitch-embed");

twitchIcon.addEventListener("mouseover", function() {
    twitchEmbed.style.display = "block";
});

twitchIcon.addEventListener("mouseout", function() {
    twitchEmbed.style.display = "none";
});
