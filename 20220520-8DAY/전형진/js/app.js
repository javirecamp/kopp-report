const stopWatch = document.querySelector('.stop-watch');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const restartBtn = document.querySelector('.restart-btn');

let stopWatchTime = 0;
let cron;

const startButton = () => {
    updateStopWatch();
    cron = setInterval(updateStopWatch,1000);
}

const stopButton = () => {
    clearInterval(cron);
}

const restartButton = () => {
    stopButton();
    stopWatch.innerHTML = `00 : 00 : 00`;
    return (stopWatchTime = 0);
}

const updateStopWatch = () => {
    const hours = Math.floor(stopWatchTime / 3600);
    const checkMinutes = Math.floor(stopWatchTime / 60);
    const minutes = checkMinutes % 60;
    const seconds = stopWatchTime % 60;

    stopWatch.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    stopWatchTime++;
}

const hideStartBtn = () => {
    if(startBtn.style.display !== 'none'){
        startBtn.style.display = 'none';
    }
}

const showStartBtn = () => {
    if(startBtn.style.display === 'none'){
        startBtn.style.display = '';
    }
}

startBtn.addEventListener('click',startButton);
startBtn.addEventListener('click',hideStartBtn);
stopBtn.addEventListener('click',stopButton);
stopBtn.addEventListener('click',showStartBtn);
restartBtn.addEventListener('click',restartButton);
restartBtn.addEventListener('click',showStartBtn);


const timer = document.querySelector('.timer-box');
const timerStartBtn = document.querySelector('.timer-start');
const timerStopBtn = document.querySelector('.timer-stop');
let timerState = true;
let timerTime = 0;
let cron2;

const startTimer = () => {
    updateTimer();
    cron2 = setInterval(updateTimer,1000);
}

const updateTimer = () =>{
    if(timerState === true){
        const hour1 = document.querySelector('.hour-input1').value;
        const hour2 = document.querySelector('.hour-input2').value;
        const minute1 = document.querySelector('.minute-input1').value;
        const minute2 = document.querySelector('.minute-input2').value;
        const second1 = document.querySelector('.second-input1').value;
        const second2 = document.querySelector('.second-input2').value;
        
        timerTime = (hour1+hour2)*3600+(minute1+minute2)*60+(second1+second2)*1;
        timerState = false;
    }

    if(timerTime === -1){
        alert("시간종료!");
        window.location.reload();
    }

    const hours = Math.floor(timerTime / 3600);
    const checkMinutes = Math.floor(timerTime / 60);
    const minutes = checkMinutes % 60;
    const seconds = timerTime % 60;

    timer.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    timerTime--;

}

const stopTimer = () => {
    clearInterval(cron2);
}

const hideStartBtn2 = () => {
    if(timerStartBtn.style.display !== 'none'){
        timerStartBtn.style.display = 'none';
    }
}

const showStartBtn2 = () => {
    if(timerStartBtn.style.display === 'none'){
        timerStartBtn.style.display = '';
    }
}


timerStartBtn.addEventListener('click',startTimer);
timerStartBtn.addEventListener('click',hideStartBtn2);
timerStopBtn.addEventListener('click',stopTimer);
timerStopBtn.addEventListener('click',showStartBtn2);

