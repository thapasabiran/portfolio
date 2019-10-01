//Select DOM elements
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const arrow = document.querySelector(".arrow");
const arrowRight = document.querySelector(".arrow-right");

//Set initial state of menu
let showMenu = false;
let showArrow = false;
menuBtn.addEventListener("click", toggleMenu);
arrow.addEventListener("click", showDetail);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //reset menu state
    showMenu = false;
  }
}

function showDetail() {
  console.log("arrow clicked.");
  if (!showArrow) {
    console.log("arrow if.");
    arrow.classList.add("show");
    arrowRight.classList.remove("show");
    //set menu state
    showArrow = true;
  } else {
    console.log("arrow else.");
    arrow.classList.remove("show");
    arrowRight.classList.add("show");
    //reset menu state
    showArrow = false;
  }
}
