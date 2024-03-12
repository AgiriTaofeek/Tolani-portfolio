import sendMail from "./email";

// const form = document.querySelector(".contact-form");
const btnFormSubmit = document.querySelector("[data-submit-form]");

// form.addEventListener("submit", sendMail);
btnFormSubmit.addEventListener("click", sendMail);

function addEventOnMultipleElements(el, eventType, cb) {
  for (let i = 0, len = el.length; i < len; i++) {
    el[i].addEventListener(eventType, cb);
  }
}

//Nav
const navbar = document.querySelector(".navbar");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

// console.log({ navbar, navTogglers, overlay });

function toggleNavbar() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnMultipleElements(navTogglers, "click", toggleNavbar);

//Header sticky
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
