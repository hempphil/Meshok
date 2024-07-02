const petrovich = document.getElementById('petrovich');
const message = document.getElementById('message');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const shovelButton = document.getElementById('shovel');
const resetButton = document.getElementById('reset');

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

let workTimer;
let breakTimer;
let currentMode = 'work'; // 'work' or 'break'
let workCount = 0;
let breakCount = 0;

function updateCounters() {
    document.getElementById('work-count').innerText = workCount;
    document.getElementById('break-count').innerText = breakCount;
}

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
    console.log("Starting work timer");
    clearTimers();
    currentMode = 'work';
    let time = 25 * 60; // 25 minutes in seconds
    timerDisplay.innerText = formatTime(time);
    workTimer = setInterval(() => {
        time--;
        timerDisplay.innerText = formatTime(time);
        if (time <= 0) {
            clearInterval(workTimer);
            workCount++;
            updateCounters();
            showPetrovich(workPhrases);
        }
    }, 1000);
}

function startBreakTimer() {
    console.log("Starting break timer");
    clearTimers();
    currentMode = 'break';
    let time = 5 * 60; // 5 minutes in seconds
    timerDisplay.innerText = formatTime(time);
    breakTimer = setInterval(() => {
        time--;
        timerDisplay.innerText = formatTime(time);
        if (time <= 0) {
            clearInterval(breakTimer);
            breakCount++;
            updateCounters();
            showPetrovich(breakPhrases);
        }
    }, 1000);
}

function clearTimers() {
    clearInterval(workTimer);
    clearInterval(breakTimer);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 
