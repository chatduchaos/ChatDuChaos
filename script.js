const twitchLogo = document.querySelector('.social-icons a[href*="twitch"]');
const twitchEmbed = document.getElementById('twitch-embed');

twitchLogo.addEventListener('mouseenter', () => {
    twitchEmbed.style.display = 'block';
});

twitchLogo.addEventListener('mouseleave', () => {
    twitchEmbed.style.display = 'none';
});
document.addEventListener('DOMContentLoaded', () => {
    const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    days.forEach(day => {
        const hoursContainer = document.getElementById(day).querySelector('.hours');
        hours.forEach(hour => {
            const hourDiv = document.createElement('div');
            hourDiv.className = 'hour';
            hourDiv.textContent = hour;
            hoursContainer.appendChild(hourDiv);
        });
    });
});