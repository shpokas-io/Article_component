"use strict";

document.addEventListener(`DOMContentLoaded`, () => {
  const shareButton = document.querySelector(`.share-button`);
  const shareOptions = document.querySelector(`.share-options`);
  // show hidden element
  shareButton.addEventListener(`click`, () => {
    shareButton.classList.toggle(`active`);
  });

  //Toggle visible share option
  if (shareButton.classList.contains(`active`)) {
    shareOptions.style.display = `flex`; //bscly addded anything to unhide hiden element
    setTimeout(() => {
      shareOptions.style.opacity = `0`;
      shareOptions.style.visibility = "hidden";
      shareOptions.style.bottom = `100%`;
    }, 10);
  } else {
    shareOptions.style.opacity = `0`;
    shareOptions.style.visibility = `hidden`;
    shareOptions.style.bottom = `-100%`;

    shareOptions.addEventListener(
      `transitionend`,
      () => {
        if (!shareButton.classList.contains(`active`)) {
          shareOptions.style.display = `none`;
        }
      },
      { once: true }
    );
  }
});
