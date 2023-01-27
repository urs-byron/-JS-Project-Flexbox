const about_products_info = [
  {
    id: 1,
    name: "nintendo",
    image_source: "./res/about-categories/nintendo-controller.jpg",
  },
  {
    id: 2,
    name: "xbox",
    image_source: "./res/about-categories/gamecube-controller.jpg",
  },
  {
    id: 3,
    name: "playstation",
    image_source: "./res/about-categories/playstation-controller.jpg",
  },
  {
    id: 4,
    name: "pc",
    image_source: "./res/about-categories/keyboard.jpg",
  },
  {
    id: 5,
    name: "peripherals",
    image_source: "./res/about-categories/audio-gear.jpg",
  },
];
const about_products_container = document.querySelector(".t-prod-set");

window.addEventListener("DOMContentLoaded", function () {
  const about_products_html = about_products_info.map((product) => {
    const product_name = document.createTextNode(product.name);
    const product_link = document.createElement("a");
    product_link.setAttribute("href", "#about");
    product_link.appendChild(product_name);

    const product_img = document.createElement("img");
    product_img.setAttribute("src", product.image_source);

    const product_set = document.createElement("div");
    product_set.classList.add("t-prod-img-set");
    product_set.appendChild(product_img);
    product_set.appendChild(product_link);

    return product_set;
  });

  about_products_html.forEach((product) => {
    about_products_container.appendChild(product);
  });

  document
    .querySelector(".about-container")
    .style.setProperty("--t-prod-set-img-cnt", about_products_html.length);
});
