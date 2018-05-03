const oneBeep = document.getElementById('oneBeep'),
      twoBeeps = document.getElementById('twoBeeps'),
      timerDisplay = document.getElementById('timerDisplay'),
      start = document.getElementById('start'),
      stop = document.getElementById('stop'),
      clear = document.getElementById('clear');
let   seconds = 0, minutes = 0,
      t;


const add = () => {
	seconds++;
	if(seconds >= 60) {
		seconds = 0;
        minutes++;
        if(minutes === 1) {
            // play one-minute sound
            oneBeep.play();
        } else {
            // play two-minute sound
            twoBeeps.play();
            // reset timer
            seconds = 0; minutes = 0;
        }
    }

    timerDisplay.textContent = ("0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

const timer = () => t = setTimeout(add, 1000);
// Start timer when page loads
// timer();


// Start button
start.onclick = timer;

// Stop button
stop.onclick = () => clearTimeout(t);

// Clear button
clear.onclick = () => {
    timerDisplay.textContent = "00:00";
    seconds = 0; minutes = 0;
}
