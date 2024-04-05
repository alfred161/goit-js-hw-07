import { galleryItems } from "./gallery-items.js";

let gallery = document.querySelector(".gallery");
const basicLightboxInstance = null;

galleryItems.forEach((item) => {
  let li = `
    <li class="gallery__item">
      <a class="gallery__link">
        <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
        />
        </a>
    </li>
    `;
  gallery.innerHTML += li;
});

gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const basicLightboxInstance = basicLightbox.create(`
    <div class="modal">
      <img
        src="${e.target.getAttribute("data-source")}"
        alt="${e.target.getAttribute("alt")}"
      />
    </div>
  `);

    basicLightboxInstance.show();

    document.querySelector(".basicLightbox").addEventListener("click", () => {
      if (basicLightboxInstance.visible()) {
        basicLightboxInstance.close();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && basicLightboxInstance.visible()) {
        basicLightboxInstance.close();
      }
    });
  }
});
