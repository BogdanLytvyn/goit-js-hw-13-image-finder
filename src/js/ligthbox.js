import refs from "./refs.js";
const basicLightbox = require("basiclightbox");

function openLightboxHandler(event) {
  let currentImgURL = event.target.dataset.source;
  basicLightbox
    .create(
      `<div class ="lightbox"><img class ="img-lightbox" src="${currentImgURL}"></div>`,
      {
        closable: true,
      }
    )
    .show();
  let lightbox = document.querySelector(".basicLightbox");
  closeLightbox(lightbox);
}

function closeLightbox(lightbox) {
  function closeLightboxHandler() {
    lightbox.remove();
  }
  lightbox.addEventListener("click", closeLightboxHandler);
}
refs.gallery.addEventListener("click", openLightboxHandler);
