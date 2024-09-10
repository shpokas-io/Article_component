"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const shareButton = document.querySelector(".share-button");
  const shareOptions = document.querySelector(".share-options");

  shareButton.addEventListener("click", () => {
    shareButton.classList.toggle("active");

    if (shareButton.classList.contains("active")) {
      shareOptions.style.display = "block";
      setTimeout(() => {
        shareOptions.style.opacity = "1";
        shareOptions.style.visibility = "visible";
        shareOptions.style.transform = "translateY(0)"; // Slide up
      }, 10);
    } else {
      shareOptions.style.opacity = "0";
      shareOptions.style.visibility = "hidden";
      shareOptions.style.transform = "translateY(100%)"; // Slide down

      shareOptions.addEventListener(
        "transitionend",
        () => {
          if (!shareButton.classList.contains("active")) {
            shareOptions.style.display = "none";
          }
        },
        { once: true }
      );
    }
  });
});
