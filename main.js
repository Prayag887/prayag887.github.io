// Parallax effect
// Adapted from @ilonacodes article ->  https://link.medium.com/7fFiON6Q1X

// Update : added throttle to increase performance
window.addEventListener('scroll', throttle(parallax, 14));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

function parallax() {
  var scrolled = window.pageYOffset;
  var parallax = document.querySelector(".moon");
  var coords = (scrolled * 0.75) + 'px'
  var rev = (scrolled * -0.4) + 'px'
  parallax.style.transform = 'translate(' + rev + ', ' + coords + ')';
};



//parallax for mountains
window.addEventListener('scroll', throttles(parallax_2, 14));

function throttles(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};


function parallax_2() {
    var scrolled = window.pageYOffset;
    var parallax = document.querySelector(".mountains_behind");
    // You can adjust the 0.4 to change the speed
      var coords = (scrolled * 0.2) + 'px'
    parallax.style.transform = 'translateY(' + coords + ')';
  };


//parallax for stars
window.addEventListener('scroll', throttles(parallax_3, 14));

function throttles(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};


function parallax_3() {
    var scrolled = window.pageYOffset;
    var parallax = document.querySelector(".stars");
    // You can adjust the 0.4 to change the speed
      var coords = (scrolled * 0.9) + 'px'
    parallax.style.transform = 'translateX(' + coords + ')';
  };  