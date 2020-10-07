AOS.init();

var scroll = new SmoothScroll('a[href*="#"]',{
    easing: 'easeInOutQuad',
    speed: 500
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// copyright get current year
  const d = new Date();
  document.querySelector("#copyright").innerHTML = "&copy; Jen Mason Consulting " + d.getFullYear();
