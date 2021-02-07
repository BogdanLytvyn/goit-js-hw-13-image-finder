import galleryTmp from "../templates/gallery-template.hbs";
import refs from "./refs";
// import cardGalleryTmp from "../templates/card-gallery-template.hbs";

function makeGallery(data) {
  const markupGallery = galleryTmp(data);
  refs.gallery.insertAdjacentHTML("beforeend", markupGallery);
}

export default makeGallery;
