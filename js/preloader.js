const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.remove("preloader-active");
  preloader.classList.add("preloader-hidden");
});
