import refs from "./refs.js";
const basicLightbox = require("basiclightbox");

function openLightboxHandler(event) {
  const currentImgURL = event.target.dataset.source;
  basicLightbox
    .create(
      `<div class ="lightbox"> <img class ="img-lightbox" src="${currentImgURL}"> </div>`
    )
    .show();

  const lightbox = document.querySelector(".basicLightbox");
  function closeLightboxHandler() {
    lightbox.remove();
  }
  lightbox.addEventListener("click", closeLightboxHandler);
}

refs.gallery.addEventListener("click", openLightboxHandler);
