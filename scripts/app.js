const navOpenBtn = document.querySelector("#menu-mobile");
const navCloseBtn = document.querySelector("#menu-mobile-close");
const navMobieMenuOpen = document.querySelector(".overlay__mobile_nav_open");
const navContainer = document.querySelector(".mobile__nav");

let isNavOpen = false;
navOpenBtn.addEventListener("click", () => {
  isNavOpen = true;
  navContainer.classList.toggle("mobile__nav-close");
  navMobieMenuOpen.style.display = "block";
});

navCloseBtn.addEventListener("click", () => {
  isNavOpen = false;
  navContainer.classList.toggle("mobile__nav-close");
  navMobieMenuOpen.style.display = "none";
});
