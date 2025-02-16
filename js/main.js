const hamburger = document.querySelector(".hamburger");
const close_menu = document.querySelector(".close-menu");
const nav_list = document.querySelector(".nav-list");

hamburger.onclick = function() {
  this.classList.add("hide-hamburger");
  close_menu.classList.remove("hide-close-btn");
  nav_list.classList.add("open-menu");
};

close_menu.onclick = function() {
  this.classList.add("hide-close-btn");
  hamburger.classList.remove("hide-hamburger");
  nav_list.classList.remove("open-menu");
};