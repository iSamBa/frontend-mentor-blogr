const burgerMenu = document.getElementsByClassName("burger-menu")[0];
const closeMenu = document.getElementsByClassName("close-menu")[0];
const menu = document.getElementsByClassName("menu")[0];

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
  menu.classList.remove("hidden");
  console.log("HELLO");
});

closeMenu.addEventListener("click", () => {
  closeMenu.classList.add("hidden");
  menu.classList.add("hidden");
  burgerMenu.classList.remove("hidden");
});
