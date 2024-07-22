const navBtn = document.querySelector(".nav__btn");
const mobileMenu = document.querySelector(".menu-mobile");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("nav__btn--open");
  mobileMenu.classList.toggle("menu-mobile--open");
});
