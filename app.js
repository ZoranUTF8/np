"use strict";

//! Smooth scrolling for nav links
//? add event listener to the parent element

document.querySelectorAll(".nav__links").forEach((links) => {
  links.addEventListener("click", function (e) {
    //? Prevent the scroll to the href from the a tag
    e.preventDefault();

    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");

      document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
    }
  });
});
