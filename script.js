
var fine = "";
// making bubble
function makebubble() {
    fine = "";
    for (var i = 1; i <= 152; i++) {
        var x = Math.floor(Math.random() * 10);
        fine += `<div class="bubble">${x}</div>`;
    }
    document.querySelector(".bpannel").innerHTML = fine;
}

var timer = 60;
// this is timer
function runtimer() {
    var time = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#mytimer').innerHTML = timer;
        } else {
            clearInterval(time);

            // Print the last score
            document.querySelector('.bpannel').innerHTML = `<h1 class="ffnd">Time Over...</h1><br><h1 class="ffnd">Last score is ${score}</h1>`;
        }
    }, 1000);
}

var changer = 1;
// it will cahnge tha random number automatically after click your answer
function gettarget() {
    changer = Math.floor(Math.random() * 10);
    document.querySelector('#target').innerHTML = changer;
}

var score = 0;
// this will show you you score
function scorer() {
    score += 10;
    document.querySelector('#scored').textContent = score;
}

function handleClick(event) {
    var clicknum = Number(event.target.textContent);
    if (clicknum === changer) {
        scorer();
        makebubble();
        gettarget();
    }
}

document.querySelector('.bpannel').addEventListener('click', handleClick);

makebubble();
gettarget();
runtimer();
