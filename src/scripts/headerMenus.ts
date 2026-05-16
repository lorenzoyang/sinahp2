const headerDetails = document.querySelectorAll<HTMLDetailsElement>(
  "[data-header-details]",
);

function closeDetails(details: HTMLDetailsElement) {
  details.open = false;
}

headerDetails.forEach((details) => {
  details.addEventListener("toggle", () => {
    if (!details.open) {
      return;
    }

    headerDetails.forEach((otherDetails) => {
      if (otherDetails !== details) {
        closeDetails(otherDetails);
      }
    });
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof Node)) {
    return;
  }

  headerDetails.forEach((details) => {
    if (!details.contains(target)) {
      closeDetails(details);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  headerDetails.forEach((details) => {
    if (!details.open) {
      return;
    }

    closeDetails(details);
    details.querySelector("summary")?.focus();
  });
});

export {};
