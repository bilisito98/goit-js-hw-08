import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function createGallery(items) {
  return items
    .map(
      (item) => `
     <li class="gallery__item">
       <a class="gallery__link" href="${item.original}">
         <img
           class="gallery__image"
           src="${item.preview}"
           data-source="${item.original}"
           alt="${item.description}"
         />
       </a>
     </li>`
    )
    .join("");
}

gallery.innerHTML = createGallery(galleryItems);
const addGallery = createGallery(galleryItems);

gallery.innerHTML = addGallery;

gallery.addEventListener("click", clickOnImage);

function clickOnImage(imageAction) {
  action(imageAction);

  if (imageAction.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${imageAction.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  //    se agrega un eventlistener; que cuando se pulse la tecla ESCAPE se cierre la imagen que esta previamente en pantalla completa

  window.addEventListener("keydown", handleEscapeKey);

  function handleEscapeKey(imageAction) {
    if (imageAction.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", handleEscapeKey);
    }
  }
}

function action(imageAction) {
  imageAction.preventDefault();
}
console.log(galleryItems)