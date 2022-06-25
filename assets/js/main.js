AOS.init();

var today = new Date();
var year = today.getFullYear();
document.querySelector("#copyright").innerHTML= "&#169; Jen Mason Consulting " + year
console.log(today)

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// copyright get current year
//   const d = new Date();
//   document.getElementById("copyright").innerText = "&copy; Jen Mason Consulting " + d.getFullYear();

// var today = new Date();
// var yyyy = today.getFullYear();

