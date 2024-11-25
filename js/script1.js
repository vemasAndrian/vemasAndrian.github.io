// Toggle class active
const navbarnav = document.querySelector(".navbar-nav");
//humburger menu di klik
document.querySelector("#humburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

//klik di luar untuk menghilangkan nav
const humburger = document.querySelector("#humburger-menu");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
