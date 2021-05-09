const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const inputEmail = document.querySelector(".main-form__email ");
const inputPhone = document.querySelector(".main-form__tel");
const inputName = document.querySelector(".main-form__name");
const inputWeight = document.querySelector(".main-form__weight");
const form = document.querySelector(".main-form__content");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

inputEmail.addEventListener("input", function (event) {
  if (!inputEmail.validity.valid) {
    inputEmail.classList.add("error");
  } else {
    inputEmail.classList.remove("error");
  }
});

inputPhone.addEventListener("input", function (event) {
  if (!inputPhone.validity.valid) {
    inputPhone.classList.add("error");
  } else {
    inputPhone.classList.remove("error");
  }
});

inputName.addEventListener("input", function (event) {
  if (!inputName.validity.valid) {
    inputName.classList.add("error");
  } else {
    inputName.classList.remove("error");
  }
});

inputWeight.addEventListener("input", function (event) {
  if (!inputWeight.validity.valid) {
    inputWeight.classList.add("error");
  } else {
    inputWeight.classList.remove("error");
  }
});
