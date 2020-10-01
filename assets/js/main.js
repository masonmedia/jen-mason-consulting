// Scroll to specific values
// scrollTo is the same
// window.scroll({
//     top: 2500, 
//     left: 0, 
//     behavior: 'smooth'
//   });

sal();

AOS.init();

window.onload = function() {
	lax.setup() 

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

  var scroll = new SmoothScroll('a[href*="#"]',{
    easing: 'easeInOutQuad',
    speed: 500
});

const menuItem = document.querySelector('.nav-link');
menuItem.addEventListener('click', function() {
  document.querySelector('.navbar-collapse').classList.remove('show');
})

// close mobile menu on link click
  // function myFunction(x) {
  //     if (x.matches) { 
  //         let nav = document.querySelectorAll(".nav-item");
  //         let i;
  //         for (i = 0; i < nav.length; i++) {
  //             nav[i].setAttribute("data-toggle", "collapse");
  //             nav[i].setAttribute("data-target", ".navbar-collapse");
  //         }
  //     }
  //   }
    
  //   var x = window.matchMedia("(max-width: 992px)")
  //   myFunction(x) 
  //   x.addListener(myFunction) 

// copyright get current year
  const d = new Date();
  document.querySelector("#copyright").innerHTML = "&copy; Jen Mason Consulting " + d.getFullYear();