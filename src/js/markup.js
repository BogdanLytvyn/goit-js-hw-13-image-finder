import galleryTmp from "../templates/gallery-template.hbs";
import refs from "./refs";

function makeGallery(data) {
  const markupGallery = galleryTmp(data);
  refs.gallery.insertAdjacentHTML("beforeend", markupGallery);
}

export default makeGallery;
