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
    startTimer();
}
