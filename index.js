const monthEl = document.getElementById('month')
const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

const newYear = new Date("Jan 1, 2023 00:00:00").getTime();
newYearUpdate()


function newYearUpdate(){
    const now = new Date().getTime();
    const gap = newYear - now;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;

    const mon = Math.floor(gap / month)
    const d = Math.floor((gap % month) / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second)
    
    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    monthEl.innerText = mon;

    setTimeout(() => {
        newYearUpdate();
    }, 1000);

}