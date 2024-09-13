const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const scoreDisplay = document.getElementById('score');
let score = 0;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});

function jump() {
    if (dino.classList.contains('jump')) return;
    dino.classList.add('jump');
    setTimeout(() => {
        dino.classList.remove('jump');
    }, 300);
}

const checkCollision = setInterval(() => {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (
        dinoRect.left < cactusRect.right &&
        dinoRect.right > cactusRect.left &&
        dinoRect.bottom > cactusRect.top
    ) {
        alert('Game Over! Score: ' + score);
        score = 0;
        scoreDisplay.textContent = score;
    }
}, 10);

const increaseScore = setInterval(() => {
    score += 1;
    scoreDisplay.textContent = score;
}, 1000);
