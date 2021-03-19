const burgerMenu = document.getElementsByClassName("burger-menu")[0];
const closeMenu = document.getElementsByClassName("close-menu")[0];
const menu = document.getElementsByClassName("menu")[0];
const menuItems = menu.getElementsByClassName("items")[0].getElementsByClassName("item");

Array.from(menuItems).forEach(item => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("arrow-open")) {
      e.target.classList.remove("arrow-open");
    }
    else {
      e.target.classList.add("arrow-open");
    }
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
