const hamburger = document.querySelector(".hamburger");
const close_menu = document.querySelector(".close-menu");
const nav_list = document.querySelector(".nav-list");

hamburger.addEventListener("click", function() {
  nav_list.classList.add("open");
  hamburger.classList.add("hide-hamburger");
  close_menu.classList.remove("hide-close-menu");
});

close_menu.addEventListener("click", function() {
  nav_list.classList.remove("open");
  close_menu.classList.add("hide-close-menu");
  hamburger.classList.remove("hide-hamburger");
});