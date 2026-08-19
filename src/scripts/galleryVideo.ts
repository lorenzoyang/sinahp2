import { queryAll, queryOne } from "./dom";

const containerSelector = "[data-gallery-video]";
const playerSelector = "[data-gallery-video-player]";
const toggleSelector = "[data-gallery-video-toggle]";
const soundSelector = "[data-gallery-video-sound]";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setLabel(button: HTMLButtonElement, label: string | undefined): void {
  if (!label) {
    return;
  }

  button.setAttribute("aria-label", label);
  button.setAttribute("title", label);
}

function syncPlayState(
  container: HTMLElement,
  video: HTMLVideoElement,
  toggle: HTMLButtonElement,
): void {
  const isPlaying = !video.paused && !video.ended;

  container.dataset.playing = isPlaying ? "true" : "false";
  setLabel(
    toggle,
    isPlaying ? container.dataset.pauseLabel : container.dataset.playLabel,
  );
}

function syncSoundState(
  container: HTMLElement,
  video: HTMLVideoElement,
  sound: HTMLButtonElement,
): void {
  container.dataset.muted = video.muted ? "true" : "false";
  sound.setAttribute("aria-pressed", video.muted ? "false" : "true");
  setLabel(
    sound,
    video.muted ? container.dataset.unmuteLabel : container.dataset.muteLabel,
  );
}

function initGalleryVideo(container: HTMLElement): void {
  const video = queryOne<HTMLVideoElement>(playerSelector, container);
  const toggle = queryOne<HTMLButtonElement>(toggleSelector, container);
  const sound = queryOne<HTMLButtonElement>(soundSelector, container);

  if (!video || !toggle || !sound) {
    return;
  }

  // Autoplay is a convenience, never a requirement: a rejected play() promise
  // (blocked autoplay, iOS low power mode) simply leaves the poster in place.
  let autoResume = !reducedMotion.matches;

  function play(player: HTMLVideoElement): void {
    void player.play().catch(() => undefined);
  }

  video.addEventListener("play", () => syncPlayState(container, video, toggle));
  video.addEventListener("pause", () =>
    syncPlayState(container, video, toggle),
  );
  video.addEventListener("volumechange", () =>
    syncSoundState(container, video, sound),
  );

  toggle.addEventListener("click", () => {
    if (video.paused) {
      autoResume = true;
      play(video);

      return;
    }

    autoResume = false;
    video.pause();
  });

  sound.addEventListener("click", () => {
    video.muted = !video.muted;

    if (!video.muted && video.paused) {
      autoResume = true;
      play(video);
    }
  });

  // The clip only streams while it is on screen, and a manual pause sticks.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (autoResume) {
            play(video);
          }

          return;
        }

        if (!video.paused) {
          video.pause();
        }
      });
    },
    { threshold: 0.4 },
  );

  observer.observe(video);
  syncPlayState(container, video, toggle);
  syncSoundState(container, video, sound);
}

queryAll<HTMLElement>(containerSelector).forEach(initGalleryVideo);

export {};
