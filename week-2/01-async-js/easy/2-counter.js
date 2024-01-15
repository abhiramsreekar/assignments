let time=0;

function timer(){
    time++;
    console.log(time);
    setTimeout(timer,1000);
}

timer();