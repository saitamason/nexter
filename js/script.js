"use strict";

const btn = document.querySelector(".nav-btn-container");
const overflow = document.querySelector(".overflow");

btn.addEventListener("click", function (e) {
  document.body.classList.toggle("sidebar--active");
});

overflow.addEventListener("click", function (e) {
  document.body.classList.toggle("sidebar--active");
});
