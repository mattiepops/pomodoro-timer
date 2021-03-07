const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const counter = document.querySelector('#counter');

const main = document.querySelector('.main');
const loader = document.querySelector('#loader');


const wm = document.querySelector('#w-minutes');
const ws = document.querySelector('#w-seconds');

const bm = document.querySelector('#b-minutes');
const bs = document.querySelector('#b-seconds');


window.addEventListener('load', function () {
    main.classList.remove('hidden');
    loader.classList.add('hidden');
})



// store a reference to a timer variable

wm.innerHTML = 0;
ws.innerHTML = "05";
bm.innerHTML = 5;
bs.innerHTML = "00";


let startTimer;


// Buttons Functionality

start.addEventListener('click', () => {

    if (startTimer === undefined) {
        startTimer = setInterval(timer, 50)
    } else {
        alert("Timer is already Running")
    }
})

stop.addEventListener('click', () => {

    stopInterval();

})

reset.addEventListener('click', () => {

    wm.innerHTML = 25;
    ws.innerHTML = "00";

    bm.innerHTML = 5;
    bs.innerHTML = "00";

    counter.innerHTML = 0;
    stopInterval();

})

// Start Timer Function

function timer() {
    // Work timer countdown
    if (ws.innerHTML != 0) {
        if (wm.innerHTML != 0 && ws.innerHTML < 10) {
            ws.innerHTML = "0" + ws.innerHTML;
        }
        ws.innerHTML--;
    } else if (wm.innerHTML != 0 && ws.innerHTML == 0) {
        if (wm.innerHTML != 0 && ws.innerHTML < 10) {
            ws.innerHTML = "0" + ws.innerHTML;
        }
        ws.innerHTML = 59;
        wm.innerHTML--;
    }


    // if (wm.innerHTML == 0 && ws.innerHTML == 0 && bs.innerHTML < 10 && bm.innerHTML != 0) {

    //     bs.innerHTML = "0" + bs.innerHTML;
    // }

    // Break Timer Countdown
    if (wm.innerHTML == 0 && ws.innerHTML == 0) {

        if (bs.innerHTML != 0) {
            bs.innerHTML--;
        } else if (bm.innerHTML != 0 && bs.innerHTML == 0) {
            bs.innerHTML = 59;
            bm.innerHTML--;
        }
    }

    // Increment Counter by One if One Full Cycle is Completed

    if (wm.innerHTML == 0 && ws.innerHTML == 0 && bm.innerHTML == 0 && bs.innerHTML == 0) {

        wm.innerHTML = 25;
        ws.innerHTML = "00";

        bm.innerHTML = 5;
        bs.innerHTML = "00";

        counter.innerHTML++;
    }

    // Add long break after 4 cycles

    if (counter.innerHTML % 4 == 0 && counter.innerHTML != 0) {
        wm.innerHTML = 25;
        ws.innerHTML = "0";

        bm.innerHTML = 20;
        bs.innerHTML = "00";

        counter.innerHTML++;
    }


    // add another 0 to the break seconds to make it prettier


    if (wm.innerHTML == 0 && ws.innerHTML == 0 && bs.innerHTML < 10 ){
        bs.innerHTML = "0" + bs.innerHTML;
    }


}

// Stop Timer Function 

function stopInterval() {
    clearInterval(startTimer);
    startTimer = undefined;
}