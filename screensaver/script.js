// sets "time" variable to random number
// var time = Math.random() * 8 + .5;

// console.log(time);

//connects "rand" variable to "#rand" CSS id
var rand = document.querySelector('#rand');

//converts "time" variable to seconds and pushes variable to CSS animation
// function setProperty(duration) {
//     rand.style.setProperty('animation-duration', duration +'s');
//   }

  //not really sure, tbh
function changeAnimationTime() {
    time = Math.random() * 8 + .5;
    var top = Math.floor(Math.random() * 101); 
    var left = Math.floor(Math.random() * 101); 
    // var animationDuration = time;
    // setProperty(animationDuration);
    // rand.style.setProperty('animation-duration', time +'s');
    rand.style.setProperty('transition-duration', time +'s');
    rand.style.setProperty('top', top + 'vh');
    rand.style.setProperty('left', left + 'vw');
    const myTimeout = setTimeout(changeAnimationTime, time * 1000);
    console.log(time);
}

// const thousand = time * 1000;

//repeats "changeAnimationTime" function every "time" seconds
// setInterval(changeAnimationTime, time * 1000);

changeAnimationTime();