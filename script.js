document.addEventListener("DOMContentLoaded", function() {
    const twitchLogo = document.querySelector(".twitch-logo");
    const embed = document.getElementById("twitch-embed");

    twitchLogo.addEventListener("mouseover", function() {
        embed.style.display = "block";
        embed.style.position = "fixed";
        embed.style.top = "10px";
        embed.style.right = "10px";
        embed.style.width = "10%";
        embed.style.height = "auto";
    });

    twitchLogo.addEventListener("mouseout", function() {
        embed.style.display = "none";
    });
});
