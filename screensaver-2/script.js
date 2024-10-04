// sets "time" variable to random number
// var time = Math.random() * 8 + .5;

// console.log(time);

//connects "rand" variable to "#rand" CSS id
var rand = document.querySelector('#rand');
var cheese = document.querySelector('#cheese');
var cuke = document.querySelector('#cuke');
var cont = document.querySelector('#container');

//converts "time" variable to seconds and pushes variable to CSS animation
// function setProperty(duration) {
//     rand.style.setProperty('animation-duration', duration +'s');
//   }

// function changeBackground() {
//   cont.style.backgroundImage = "url(mulch-dither.png)"
//   const myTimeout = setTimeout(changeBackground, 3000);
//   cont.style.backgroundImage = "url(mulch-2.png)";
//   const myTimeoute = setTimeout(changeBackground, 3000);
//   cont.style.backgroundImage = "url(mulch-3.png)";
//   const myTimeouti = setTimeout(changeBackground, 3000);
// }

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

function changeAnimationTimec() {
  timec = Math.random() * 8 + .5;
  var topc = Math.floor(Math.random() * 101); 
  var leftc = Math.floor(Math.random() * 101); 
  cheese.style.setProperty('transition-duration', timec +'s');
  cheese.style.setProperty('top', topc + 'vh');
  cheese.style.setProperty('left', leftc + 'vw');
  const myTimeout = setTimeout(changeAnimationTimec, timec * 1000);
  console.log(timec);
}

function changeAnimationTimed() {
  timed = Math.random() * 8 + .5;
  var topd = Math.floor(Math.random() * 101); 
  var leftd = Math.floor(Math.random() * 101); 
  cuke.style.setProperty('transition-duration', timed +'s');
  cuke.style.setProperty('top', topd + 'vh');
  cuke.style.setProperty('left', leftd + 'vw');
  const myTimeout = setTimeout(changeAnimationTimed, timed * 1000);
  console.log(timed);
}

// const thousand = time * 1000;

//repeats "changeAnimationTime" function every "time" seconds
// setInterval(changeAnimationTime, time * 1000);

// changeBackground();
changeAnimationTime();
changeAnimationTimec();
changeAnimationTimed();