const current_date = new Date();
const footer_date = document.querySelector(".footer-date");

footer_date.textContent = current_date.getFullYear();
