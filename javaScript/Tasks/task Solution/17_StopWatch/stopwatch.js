let showMilliSec = document.getElementById("showMilliSec");
let showSec = document.getElementById("showSec");
let showMin = document.getElementById("showMin");
let showHour = document.getElementById("showHour");

let timer = 0;
let second = 0;
let minute = 0;
let hour = 0;

let flag = false;

let interval;

function start() {
    if (!flag) {
        interval = setInterval(() => {
            flag = true;
            timer += 1; 
            if (timer > 99) {
                timer = 0;
                second++;
                // console.log(second);
            }
            if (second > 59) {
                second = 0;
                minute++;
                // console.log(minute);
            }
            if (minute > 59) {
                minute = 0;
                hour++;
                // console.log(hour);
            }

            showHour.innerHTML = String(hour).padStart(2, '0');
            showMin.innerHTML = String(minute).padStart(2, '0');
            showSec.innerHTML = String(second).padStart(2, '0');
            showMilliSec.innerHTML = String(timer).padStart(2, '0');

        }, 10);
    }
}

function stop() {
    clearInterval(interval);
    flag = false;
}
function clearall() {
    flag = false;
    timer = 0;
    second = 0;
    minute = 0;
    hour = 0;
    clearInterval(interval);
    showHour.innerHTML = "00";
    showMin.innerHTML = "00";
    showSec.innerHTML = "00";
    showMilliSec.innerHTML = "00";
}