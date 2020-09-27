// Scroll to specific values
// scrollTo is the same
// window.scroll({
//     top: 2500, 
//     left: 0, 
//     behavior: 'smooth'
//   });

  var scroll = new SmoothScroll('a[href*="#"]',{
    easing: 'easeInOutQuad',
    speed: 500
});