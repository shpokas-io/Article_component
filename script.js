"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const shareButton = document.querySelector(".share-button");
  const shareOptions = document.querySelector(".share-options");

  shareButton.addEventListener("click", () => {
    shareButton.classList.toggle("active");

    if (shareButton.classList.contains("active")) {
      // Show share options
      shareOptions.style.display = "block";
      setTimeout(() => {
        shareOptions.style.opacity = "1";
        shareOptions.style.visibility = "visible";
        shareOptions.style.transform = "translateY(0)"; // Slide up for mobile
      }, 10);
    } else {
      // Hide share options
      shareOptions.style.opacity = "0";
      shareOptions.style.visibility = "hidden";
      shareOptions.style.transform = "translateY(100%)"; // Slide back down for mobile

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
