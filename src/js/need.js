// import galleryTmp from "../templates/gallery-template.hbs";
// import "@pnotify/core/dist/PNotify.css";
// import "@pnotify/core/dist/BrightTheme.css";
// import { error } from "@pnotify/core/";
// import * as basicLightbox from "basiclightbox";
// const basicLightbox = require("basiclightbox");

const refs = {
  input: document.querySelector("#search-form"),
  gallery: document.querySelector(".gallery"),
  button: document.querySelector(".btn"),
};

const key = "16983876-2e0d7c5bd7f8d708e3eb2a9d0";
const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal`;
let page = 1;
let searchQuery = "";
console.log(searchQuery);
console.log(page);

const fetchImage = async function (searchQuery) {
  try {
    const url = `${BASE_URL}&q=${searchQuery}&page=${page}&per_page=${12}&key=${key}`;
    const response = await fetch(url);
    const images = await response.json();
    return images;
  } catch (error) {
    (error) => error;
  }
};

function saerchImg(event) {
  page = 1;
  refs.gallery.innerHTML = "";
  event.preventDefault();
  searchQuery = event.target.value;
  console.log(searchQuery);
  fetchImage(searchQuery).then(({ hits }) => makeGallery(hits));

  // console.log(hits);
  // makeGallery(hits);

  // if (!hits) {
  //   error({
  //     text: "Country not found!",
  //     delay: 2000,
  //   });
  // }
}

function loadMoreImg(event) {
  event.preventDefault();
  // if ((inputText = "")) {
  //   error({
  //     text: "Country not found!",
  //     delay: 2000,
  //   });
  //   fetchImage(inputText).then(({ hits }) => makeGallery(hits));
  // }
  if (searchQuery != "") {
    fetchImage(searchQuery).then(({ hits }) => makeGallery(hits));
    page += 1;
  }
  fetchImage(searchQuery).then(({ hits }) => console.log(hits));
}

function makeGallery(data) {
  const markupGallery = galleryTmp(data);
  refs.gallery.insertAdjacentHTML("beforeend", markupGallery);
}

refs.input.addEventListener("input", saerchImg);
refs.button.addEventListener("click", loadMoreImg);
