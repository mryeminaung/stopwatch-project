let hourTag = document.querySelector('.hour');
let minuteTag = document.querySelector('.minute');
let secondTag = document.querySelector('.second');

let startBtn = document.querySelector('.btn-start');
let stopBtn = document.querySelector('.btn-stop');
let resumeBtn = document.querySelector('.btn-resume');
let restartBtn = document.querySelector('.btn-restart');
let resetBtn = document.querySelector('.btn-reset');

let hour = 0;
let minute = 59;
let second = 55;

let intervalID;
let startBtnClickingCount = 0;

const timer = () => {
    second += 1;
    if (second === 60) {
        second = 0;
        minute += 1;
        if (minute === 60) {
            minute = 0;
            hour += 1;
        }
    }

    const hourText = hour < 10 ? '0' + hour : hour;
    const minuteText = minute < 10 ? '0' + minute : minute;
    const secondText = second < 10 ? '0' + second : second;
    
    hourTag.textContent = hourText;
    minuteTag.textContent = minuteText;
    secondTag.textContent = secondText;
};

startBtn.addEventListener('click', () => {
    startBtnClickingCount += 1;
    if (startBtnClickingCount === 1) {
        intervalID = setInterval(timer, 1000);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalID);
});

resumeBtn.addEventListener('click', () => {
    if (startBtnClickingCount >= 1) {
        clearInterval(intervalID);
        intervalID = setInterval(timer, 1000);
    }
});

restartBtn.addEventListener('click', () => {
    if (startBtnClickingCount >= 1) {
        clearInterval(intervalID);
        (hour = 0), (minute = 0), (second = 0);
        intervalID = setInterval(timer, 1000);
    }
});

resetBtn.addEventListener('click', () => {
    if (startBtnClickingCount >= 1) {
        clearInterval(intervalID);
        startBtnClickingCount = 0;
        (hour = 0), (minute = 0), (second = 0);
        hourTag.textContent = '00';
        minuteTag.textContent = '00';
        secondTag.textContent = '00';
    }
});