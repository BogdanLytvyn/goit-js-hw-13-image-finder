import "./css/style.css";
import makeGallery from "./js/markup.js";
import refs from "./js/refs.js";
import apiService from "./js/apiService.js";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { error } from "@pnotify/core/";
// import * as basicLightbox from "basiclightbox";
// const basicLightbox = require("basiclightbox");

function saerchImg(event) {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  refs.gallery.innerHTML = "";
  if (form.elements.query.value === "") {
    refs.gallery.innerHTML = "";
    error({
      text: "Enter category!",
      delay: 2000,
    });
  }

  apiService.resetPage();
  refs.button.classList.add("is-hidden");

  apiService.fetchImage(apiService.query).then(({ hits }) => {
    makeGallery(hits);
    refs.button.classList.remove("is-hidden");
    if (hits.length === 0) {
      refs.gallery.innerHTML = "";
      error({
        text: "Category not found!",
        delay: 2000,
      }).catch(() => refs.button.classList.add("is-hidden"));
    }

    console.log(hits);
  });
  form.reset();
}

function loadMoreImg(event) {
  event.preventDefault();
  apiService.fetchImage().then(({ hits }) => {
    makeGallery(hits);

    window.scrollTo(0, 1000);
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: "smooth",
    });
  });
}

refs.input.addEventListener("submit", saerchImg);
refs.button.addEventListener("click", loadMoreImg);

//  error({
//     text: "Country not found!",
//     delay: 2000,
//   });
