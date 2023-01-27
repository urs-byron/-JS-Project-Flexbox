const about_product_left_arrow = document.querySelector(".product-move-left");
const about_product_right_arrow = document.querySelector(".product-move-right");
const about_products = document.querySelector(".t-prod-set");

about_product_left_arrow.addEventListener("click", function () {
  if (about_products.classList.contains("t-prod-set-right")) {
    about_products.classList.remove("t-prod-set-right");
  }
});
about_product_right_arrow.addEventListener("click", function () {
  if (!about_products.classList.contains("t-prod-set-right")) {
    about_products.classList.add("t-prod-set-right");
  }
});
