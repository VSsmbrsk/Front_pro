let totalSeconds = 85;

const timerDisplay = document.getElementById("timer");

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

timerDisplay.textContent = formatTime(totalSeconds);

const timerId = setInterval(() => {
    totalSeconds--;
    timerDisplay.textContent = formatTime(totalSeconds);

    if (totalSeconds <= 0) {
        clearInterval(timerId);
        timerDisplay.textContent = "00:00";
    }
}, 1000);