let workTime = 25 * 60;
let breakTime = 5 * 60;
let isWorkTime = true;
let timeRemaining = workTime;
let timerInterval;
let isRunning = false;

function startTimer() {
    if (isRunning) return;

    isRunning = true;
    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            toggleTimerType();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function toggleTimerType() {
    isWorkTime = !isWorkTime;
    timeRemaining = isWorkTime ? workTime : breakTime;
    document.getElementById('message').textContent = isWorkTime ? 'Ворочайте мешки!' : 'Перерыв!';

    const petrovich = document.getElementById('petrovich');
    petrovich.style.display = 'block';
    setTimeout(() => {
        petrovich.style.display = 'none';
        startTimer();
    }, 3000); // Показываем Петровича на 3 секунды
}

const petrovich = document.getElementById('petrovich');
const message = document.getElementById('message');

const workPhrases = [
    "Вот это мешок! Ты заслужил перекур!",
    "Я в юности такие мешки десятками ворочал",
    "Можно и попиздеть"
];

const breakPhrases = [
    "Хорош пиздеть!",
    "Мешки сами себя не поворочают!",
    "А ну взял и поворочал!"
];

function showPetrovich(phrases) {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    message.innerText = randomPhrase;
    petrovich.style.display = 'block';
    message.style.display = 'block';
    setTimeout(() => {
        petrovich.style.display = 'none';
        message.style.display = 'none';
    }, 5000); // Show for 5 seconds
}

function startWorkTimer() {
    setTimeout(() => {
        showPetrovich(workPhrases);
    }, 25 * 60 * 1000); // 25 minutes
}

function startBreakTimer() {
    setTimeout(() => {
        showPetrovich(breakPhrases);
    }, 5 * 60 * 1000); // 5 minutes
}

console.log("Meshok app is running");

// Example usage
startWorkTimer(); // Start the work timer when the page loads
// Call startBreakTimer() when you want to start the break timer
