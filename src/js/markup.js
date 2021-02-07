import galleryTmp from "../templates/gallery-template.hbs";
import refs from "./refs.js";

function makeGallery(data) {
  const markupGallery = galleryTmp(data);
  refs.gallery.insertAdjacentHTML("beforeend", markupGallery);
}

export default makeGallery;
