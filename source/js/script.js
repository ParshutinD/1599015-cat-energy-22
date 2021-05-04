const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle--close");

navToggle.addEventListener("click", function () {
  if (navToggle.classList.contains("main-nav__toggle--close")) {
    navToggle.classList.remove("main-nav__toggle--close");
    navToggle.classList.add("main-nav__toggle--open");
    navMain.classList.add("visually-hidden");
  } else {
    navToggle.classList.add("main-nav__toggle--close");
    navToggle.classList.remove("main-nav__toggle--open");
    navMain.classList.remove("visually-hidden");
  }
});
