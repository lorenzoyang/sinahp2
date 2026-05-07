const headerDetails = document.querySelectorAll<HTMLDetailsElement>(
  "[data-header-details]",
);

headerDetails.forEach((details) => {
  details.addEventListener("toggle", () => {
    if (!details.open) {
      return;
    }

    headerDetails.forEach((otherDetails) => {
      if (otherDetails !== details) {
        otherDetails.open = false;
      }
    });
  });
});

export {};
