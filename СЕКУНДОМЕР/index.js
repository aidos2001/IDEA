//document.getElementNById("count").innerText = 5;
window.onload = function() {


var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds =  document.getElementById("Seconds");
var buttonStart = document.getElementById("buttonStart");
var buttonStop = document.getElementById("buttonStop");
var buttonReset = document.getElementById("buttonReset");
var Interval;

buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);

    
}

buttonStop.onclick = function() {
    clearInterval(Interval);
}

buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00"
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}

function startTimer() {
    tens++;
    if(tens < 9 ){
        appendTens.innerHTML = '0' + tens;
    }
    if (tens > 9){
        appendTens.innerHTML = tens;
    }

    if(tens > 99){
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;

    }
    if(seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}
}