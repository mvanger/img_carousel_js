var carousel = document.getElementById('carousel');
var position = parseInt(carousel.style.marginLeft);

// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');

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
next.onclick = function(event) {
  var position = parseInt(carousel.style.marginLeft);
  if (position > - 1224) {
    carousel.style.marginLeft = position - 612 + 'px';
  } else {
    carousel.style.marginLeft = 0 + 'px';
  }
};

previous.onclick = function(event) {
  var position = parseInt(carousel.style.marginLeft);
  if (position < 0) {
    carousel.style.marginLeft = position + 612 + 'px';
  } else {
    carousel.style.marginLeft = -1224 + 'px';
  }
};