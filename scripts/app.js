const burgerMenu = document.getElementsByClassName("burger-menu")[0];
const closeMenu = document.getElementsByClassName("close-menu")[0];
const menu = document.getElementsByClassName("menu")[0];
const menuItems = menu.getElementsByClassName("items")[0].getElementsByClassName("item");

Array.from(menuItems).forEach(item => {
  item.addEventListener("click", (e) => {

    const arrowImg = e.target.getElementsByTagName("img")[0];
    const itemContent = e.target.getElementsByTagName("ul")[0];
    
    console.log(arrowImg);
    console.log(itemContent);
    if (arrowImg.classList.contains("arrow-open")) {
      arrowImg.classList.remove("arrow-open");
      itemContent.classList.add("hidden");
    }
    else {
      arrowImg.classList.add("arrow-open");
      itemContent.classList.remove("hidden");
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
