// Toggle class active
const navbarnav = document.querySelector(".navbar-nav");
//humburger menu di klik
document.querySelector("#humburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

//klik di luar untuk menghilangkan nav
const humburger = document.querySelector("#humburger-menu");

// Klik pada hamburger menu
humburger.addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah reload atau scroll ke atas
  
});
document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

// slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   if (n > slides.length) {
     slideIndex = 1;
   }
   if (n < 1) {
     slideIndex = slides.length;
   }
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";
  
}