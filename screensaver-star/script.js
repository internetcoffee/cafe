// var rand = document.querySelector('#rand'); //connects "rand" variable to "#rand" CSS id
const rand = document.getElementById('rand');
const star = document.getElementById('star');

let slideRight = true;
let slideDown = true;

function createTrail(x, y) {
  const trail = document.createElement('img');
  trail.src = star.src;
  trail.classList.add('trail');
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;
  document.getElementById('container').appendChild(trail);

  // Fade out and remove the trail after 1 second
  setTimeout(() => {
    trail.style.opacity = '0'; // Start fading out
    setTimeout(() => {
      trail.remove(); // Remove from DOM after fading
    }, 1000); // Match the duration of the fade-out
  }, 0);
}

function slideHorizontally() {
  if (slideRight) {
    rand.style.left = 'calc(100vw - 100px)'; // Move to the right edge
  } else {
    rand.style.left = '0'; // Move back to the left edge
  }
  slideRight = !slideRight;
}

function slideVertically() {
  if (slideDown) {
    rand.style.top = 'calc(100vh - 100px)'; // Move to the bottom edge
  } else {
    rand.style.top = '0'; // Move back to the top edge
  }
  slideDown = !slideDown;
}

// Function to alternate the image's movement
function animate() {
  slideHorizontally(); // Slide horizontally back and forth every 5 seconds
  slideVertically();   // Slide vertically back and forth every 3 seconds
}

window.onload = function() {
  setInterval(() => {
    createTrail(rand.offsetLeft, rand.offsetTop); // Create trail at current image position
    slideHorizontally();
  }, 5000);

  setInterval(() => {
    createTrail(rand.offsetLeft, rand.offsetTop); // Create trail at current image position
    slideVertically();
  }, 3000);

  setInterval(() => {
    createTrail(rand.offsetLeft, rand.offsetTop); // Continuous trail creation
  }, 75); // Create trails every 100ms to make the trail effect smoother
}

// window.onload = function() {
//   setInterval(slideHorizontally, 5000); // Horizontal movement every 5 seconds
//   setInterval(slideVertically, 3000);  // Vertical movement every 3 seconds
// }

// function changeAnimationTime() {
//     time = Math.random() * 8 + .5;
//     var top = Math.floor(Math.random() * 101); 
//     var left = Math.floor(Math.random() * 101); 
//     rand.style.setProperty('transition-duration', time +'s');
//     rand.style.setProperty('top', top + 'vh');
//     rand.style.setProperty('left', left + 'vw');
//     const myTimeout = setTimeout(changeAnimationTime, time * 1000);
//     console.log(time);
// }

// changeAnimationTime(); //runs changeAnimationTime function