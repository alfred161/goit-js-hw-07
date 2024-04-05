import { galleryItems } from "./gallery-items.js";

let gallery = document.querySelector(".gallery");
const basicLightboxInstance = null;

galleryItems.forEach((item) => {
  let li = `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
          title="${item.description}"
      />
      </a>
  </li>
      `;
  gallery.innerHTML += li;
});

let galleryImage = new SimpleLightbox(".gallery__link", {});

gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    galleryImage.open();
  }
});
