import "./css/style.css";
import makeGallery from "./js/markup.js";
import refs from "./js/refs.js";
import "./js/ligthbox.js";
import apiService from "./js/apiService.js";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { search, matches } from "./js/notification.js";
import { error } from "@pnotify/core/";

function saerchImg(event) {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  refs.gallery.innerHTML = "";
  if (refs.input.elements.query.value === "") {
    error(search);
  }

  apiService.resetPage();

  if (refs.input.elements.query.value !== "") {
    apiService.fetchImage(apiService.query).then(({ hits }) => {
      makeGallery(hits);
      refs.loadBtn.classList.remove("is-hidden");
      if (hits.length === 0) {
        error(matches);
        refs.loadBtn.classList.add("is-hidden");
      }
    });
  }
  form.reset();
}

function loadMoreHandler(event) {
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
refs.loadBtn.addEventListener("click", loadMoreHandler);
