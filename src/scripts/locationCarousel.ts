const dotSelector = "[data-location-carousel-dot]";

function scrollToSlide(dot: HTMLButtonElement) {
  const slideId = dot.dataset.slideId;
  const slide = slideId ? document.getElementById(slideId) : null;
  const track = slide?.closest<HTMLElement>(".location-carousel-track");

  if (!slide || !track) {
    return;
  }

  track.scrollTo({
    left: slide.offsetLeft - track.offsetLeft,
    behavior: "smooth",
  });
}

document.querySelectorAll<HTMLButtonElement>(dotSelector).forEach((dot) => {
  dot.addEventListener("click", () => scrollToSlide(dot));
});

export {};
