"use strict";

document.addEventListener(`DOMContentLoaded`, () => {
  const shareButton = document.querySelector(`.share-button`);
  const shareOptions = document.querySelector(`.share-options`);
  // show hidden element
  shareButton.addEventListener(`click`, () => {
    shareButton.classList.toggle(`active`);
  });
});
