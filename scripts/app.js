const burgerMenu = document.getElementsByClassName("burger-menu")[0];
const closeMenu = document.getElementsByClassName("close-menu")[0];
const menu = document.getElementsByClassName("menu")[0];
const menuItems = menu.getElementsByClassName("items")[0].getElementsByTagName("img");

Array.from(menuItems).forEach(item => {
  item.addEventListener("click", (e) => {
    e.target.classList.add("arrow-open")
  })
});

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
  menu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  closeMenu.classList.add("hidden");
  menu.classList.add("hidden");
  burgerMenu.classList.remove("hidden");
});
