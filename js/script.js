const secondsEl =document.getElementById('seconds');
const daysEl =document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minsEl =document.getElementById('mins');





const newYears = "6 December 2022";

function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/ 3600/ 24);
    const hours = Math.floor(totalSeconds/3600) % 24 ;
    const minutes = Math.floor(totalSeconds /60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML =  formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    secondsEl.innerHTML = formatTime(seconds);
    minsEl.innerHTML = formatTime(minutes);

}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countDown();

setInterval(countDown, 1000);
