// VARIABLES
var countdown = document.querySelector('.countdown');


// FUNCTIONS
function startTimer(duration, countdown) {
    var timer = duration, minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdown.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            countdown.textContent = "0:00";
        }
    }, 1000);
}


// EVENT LISTENERS
window.onload = function() {
    var twoMins = 60 * 2;
    startTimer(twoMins, countdown);
};