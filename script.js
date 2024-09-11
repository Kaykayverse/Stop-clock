let min = 0;
let sec = 0;
let tens = 0;

const getMin = document.querySelector('.mins');
const getSec = document.querySelector('.secs');
const getTen = document.querySelector('.tens');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const stopBtn = document.querySelector('.stop');
let interval;

startBtn.addEventListener('click', ()=> {
    interval = setInterval(startcounter, 10);

})

stopBtn.addEventListener('click', ()=>{
    clearInterval(interval)
})

resetBtn.addEventListener('click', ()=>{
    clearInterval(interval);
    min = '0';
    sec ='0';
    tens ='0';
    getMin.textContent = '0' + min;
    getSec.textContent = '0' + sec;
    getTen.textContent = '0' + tens;
})

function startcounter(){
    tens++;
    if (tens < 10){
        getTen.textContent = '0'+ tens
    }
    if(tens >= 10 ){
        getTen.textContent = tens;
    }
    if(tens > 99){
        sec++;
        tens = 0;
        getTen.textContent = '0'+tens;
    }
    if (sec <10){
        getSec.textContent = "0" + sec;
    }
    if(sec >= 10){
        getSec.textContent = sec;
    }
    if(sec > 59){
        min++;
        sec = 0;
        getSec.textContent = '0'+ sec
    }
    if(min <10){
        getMin.textContent = '0' + min;

    }
    if(min >=10 ){
        getMin.textContent = min
    }

}