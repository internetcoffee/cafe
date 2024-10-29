const beat = document.getElementById("aud1");
const hard = document.getElementById("boss");

const abop = document.getElementById("bopsound");
const atwist = document.getElementById("twistsound");
const apull = document.getElementById("pullsound");

const C1 = document.getElementById("myC1");
const C2 = document.getElementById("myC2");
const C3 = document.getElementById("myC3");

hard.volume = 0.35;
document.getElementById("tooslow").volume = .4;

var pressedOnTime = true;

var counter = 0;
var scoreCount = document.getElementById("score");;

function twistIt() {
    pressedOnTime = false;
    C1.style.opacity = "1";
    C1.style.transform = "scale(1, 1)";
    C1.onclick = function() {
        pressedOnTime = true;
        counter = counter + 1;
        scoreCount.textContent = "score: " + String(counter);
        C1.style.transform = "scale(0, 0)";
        document.getElementById("twistfx").play();
        setTimeout(() => {
            C1.style.opacity = "0";

        }, 200);
    };
    atwist.play();
}

function bopIt() {
    pressedOnTime = false;
    C2.style.opacity = "1";
    C2.style.transform = "scale(1,1)";
    C2.onclick = function() {
        pressedOnTime = true;
        counter = counter + 1;
        scoreCount.textContent = "score: " + String(counter);
        C2.style.transform = "scale(0, 0)";
        document.getElementById("bopfx").play();
        setTimeout(() => {
            C2.style.opacity = "0";

        }, 200);
    };
    abop.play();
}

function pullIt() {
    pressedOnTime = false;
    C3.style.opacity = "1";
    C3.style.transform = "scale(1,1)";
    C3.onclick = function() {
        pressedOnTime = true;
        counter = counter + 1;
        scoreCount.textContent = "score: " + String(counter);
        C3.style.transform = "scale(0, 0)";
        document.getElementById("pullfx").play();
        setTimeout(() => {
            C3.style.opacity = "0";

        }, 200);
    };
    apull.play();
}

const functions = [bopIt, twistIt, pullIt];

// var randomBop = functions[Math.floor(Math.random() * functions.length)];
function randomBop() {
    return functions[Math.floor(Math.random() * functions.length)];
}

function playNormal() {
    const reroll = randomBop();
    reroll();
    console.log(pressedOnTime);
    setTimeout(() => {
        if (pressedOnTime == true) {
            console.log("wow");
            // counter = counter + 1;
            playNormal();

        }
        else {
            beat.pause();
            console.log("how");
            C1.style.opacity = "0";
            C2.style.opacity = "0";
            C3.style.opacity = "0";
            document.getElementById("tooslow").play();
        }
    }, 1846.2);
}

function playHard() {
    const rerollH = randomBop();
    rerollH();
    // scoreCount.textContent = "score: " + String(counter);
    console.log(pressedOnTime);
    setTimeout(() => {
        if (pressedOnTime == true) {
            console.log("wow2");
            // counter = counter + 1;
            // console.log(counter);
            playHard();
        }
        else {
            hard.pause();
            console.log("how2");
            C1.style.opacity = "0";
            C2.style.opacity = "0";
            C3.style.opacity = "0";
            document.getElementById("tooslow").play();
            console.log(counter);
        }
    }, 1650);
}

document.getElementById("playn").onclick = function() {
    counter = 0
    scoreCount.textContent = "score: " + String(counter);
    playNormal();
    beat.play();
};

document.getElementById("playh").onclick = function() {
    counter = 0
    scoreCount.textContent = "score: " + String(counter);
    hard.play();
    playHard();
};