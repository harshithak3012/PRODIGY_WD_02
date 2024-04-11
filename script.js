let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        seconds++;
        milliseconds = 0;
    }
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes >= 60) {
        hours++;
        minutes = 0;
    }

    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");
    let ms = String(milliseconds).padStart(3, "0");

    timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    milliseconds = seconds = minutes = hours = 0;
    timerRef.innerHTML = "00 : 00 : 00 : 000";
});
