import { queryAll, queryOne } from "./dom";

const dotSelector = "[data-location-carousel-dot]";
const carouselSelector = "[data-location-carousel]";
const trackSelector = "[data-location-carousel-track]";

function getSlideOffset(track: HTMLElement, slide: HTMLElement): number {
  return slide.offsetLeft - track.offsetLeft;
}

function scrollToSlide(dot: HTMLButtonElement): void {
  const slideId = dot.dataset.slideId;
  const slide = slideId ? document.getElementById(slideId) : null;
  const track = slide?.closest<HTMLElement>(trackSelector);

  if (!slide || !track) {
    return;
  }

  track.scrollTo({
    left: getSlideOffset(track, slide),
    behavior: "smooth",
  });
}

function updateActiveDot(carousel: HTMLElement): void {
  const track = queryOne<HTMLElement>(trackSelector, carousel);
  const dots = queryAll<HTMLButtonElement>(dotSelector, carousel);

  if (!track || dots.length === 0) {
    return;
  }

  const slides = Array.from(track.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement,
  );
  const activeSlide = slides.reduce<HTMLElement | null>((closest, slide) => {
    if (!closest) {
      return slide;
    }

    const closestDistance = Math.abs(
      getSlideOffset(track, closest) - track.scrollLeft,
    );
    const slideDistance = Math.abs(
      getSlideOffset(track, slide) - track.scrollLeft,
    );

    return slideDistance < closestDistance ? slide : closest;
  }, null);

  dots.forEach((dot) => {
    const isActive = dot.dataset.slideId === activeSlide?.id;
    dot.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function initCarousel(carousel: HTMLElement): void {
  const track = queryOne<HTMLElement>(trackSelector, carousel);
  let frame = 0;

  queryAll<HTMLButtonElement>(dotSelector, carousel).forEach((dot) => {
    dot.addEventListener("click", () => scrollToSlide(dot));
  });

  track?.addEventListener(
    "scroll",
    () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => updateActiveDot(carousel));
    },
    { passive: true },
  );

  updateActiveDot(carousel);
}

queryAll<HTMLElement>(carouselSelector).forEach(initCarousel);

export {};
