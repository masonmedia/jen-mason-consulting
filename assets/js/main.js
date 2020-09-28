// Scroll to specific values
// scrollTo is the same
// window.scroll({
//     top: 2500, 
//     left: 0, 
//     behavior: 'smooth'
//   });

sal();

  var scroll = new SmoothScroll('a[href*="#"]',{
    easing: 'easeInOutQuad',
    speed: 500
});

const menuItem = document.querySelector('.nav-link');
menuItem.addEventListener('click', function() {
  document.querySelector('.navbar-collapse').classList.remove('show');
})