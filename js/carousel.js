var carousel = document.getElementById('carousel');
var position = parseInt(carousel.style.marginLeft);

// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var slideshow = document.getElementById('slideshow');

carousel.style.marginLeft = 0;

// Create mouseoveer and mouseexit events for the buttons
// to change their opacity from .5 to .2
next.onmouseover = function(event) {
  next.style.opacity = 0.2;
};

next.onmouseout = function(event) {
  next.style.opacity = 0.5;
};

previous.onmouseover = function(event) {
  previous.style.opacity = 0.2;
};

previous.onmouseout = function(event) {
  previous.style.opacity = 0.5;
};

// Create onclick events to advance the images
function toRight() {
  var position = parseInt(carousel.style.marginLeft);
  if (position > - 1224) {
    carousel.style.marginLeft = position - 612 + 'px';
  } else {
    carousel.style.marginLeft = 0 + 'px';
  }
};

function toLeft() {
  var position = parseInt(carousel.style.marginLeft);
  if (position < 0) {
    carousel.style.marginLeft = position + 612 + 'px';
  } else {
    carousel.style.marginLeft = -1224 + 'px';
  }
};

var showTimer = null;
var delayMs = 500;

function playSlideShow() {
  if (showTimer === null) {
    showTimer = window.setInterval(toRight, delayMs);
  }
}

function pauseSlideShow() {
  window.clearInterval(showTimer);
  showTimer = null;
}

next.addEventListener("click", toRight);
previous.addEventListener("click", toLeft);
slideshow.addEventListener("click", playSlideShow);
pause.addEventListener("click", pauseSlideShow);
