sal();

AOS.init();

  var scroll = new SmoothScroll('a[href*="#"]',{
    easing: 'easeInOutQuad',
    speed: 500
});

const menuItem = document.querySelector('.nav-link');
menuItem.addEventListener('click', function() {
  document.querySelector('.navbar-collapse').classList.remove('show');
})

// copyright get current year
  const d = new Date();
  document.querySelector("#copyright").innerHTML = "&copy; Jen Mason Consulting " + d.getFullYear();