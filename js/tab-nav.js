const nav_btn = document.querySelector(".nav-btn");
const primary_nav = document.querySelector(".primary-nav");

nav_btn.addEventListener("click", function (btn) {
  btn.preventDefault();
  primary_nav.classList.toggle("primary-nav-open");
});
