export const sectionClasses = {
  heroDark: "bg-ink px-4 py-12 sm:px-6 lg:px-8",
  heroDarkSpacious: "bg-ink px-4 py-16 sm:px-6 lg:px-8",
  dark: "page-band bg-ink px-4 py-14 sm:px-6 lg:px-8",
  darkTight: "page-band bg-ink px-4 py-12 sm:px-6 lg:px-8",
  inkBand: "page-band bg-ink-band px-4 py-14 sm:px-6 lg:px-8",
  inkBandTight: "page-band bg-ink-band px-4 py-12 sm:px-6 lg:px-8",
  paper: "page-band bg-paper px-4 py-14 text-ink sm:px-6 lg:px-8",
  paperTight: "page-band bg-paper px-4 py-12 text-ink sm:px-6 lg:px-8",
  paperSoft: "page-band bg-paper-soft px-4 py-14 text-ink sm:px-6 lg:px-8",
  footerDark: "page-band bg-ink-footer px-4 py-14 sm:px-6 lg:px-8",
};

export const layoutClasses = {
  container: "mx-auto max-w-7xl",
  containerNarrow: "mx-auto max-w-5xl",
  containerText: "mx-auto max-w-4xl",
};

export const headingClasses = {
  darkEyebrow:
    "max-w-full break-words text-xs font-semibold uppercase leading-5 tracking-normal text-gold",
  darkTitle: "mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl",
  darkIntro: "mt-4 text-base leading-7 text-paper-soft/76",
  lightEyebrow:
    "max-w-full break-words text-xs font-semibold uppercase leading-5 tracking-normal text-lacquer",
  lightTitle: "mt-3 max-w-full text-3xl font-semibold leading-tight sm:text-4xl",
  lightIntro: "mt-4 text-base leading-7 text-brown-text",
  heroTitle:
    "mt-4 max-w-4xl break-words text-3xl font-semibold leading-tight text-white min-[360px]:text-4xl sm:text-5xl",
  heroIntro: "mt-5 max-w-3xl text-lg leading-8 text-paper-soft/82",
};

export const cardClasses = {
  dark: "rounded-lg border border-white/12 bg-white/5.5",
  darkInteractive:
    "rounded-lg border border-white/12 bg-white/5.5 transition hover:border-gold hover:bg-white/8",
  darkSoft:
    "rounded-lg border border-white/12 bg-black/16 px-4 py-4 text-base leading-7 text-cream-soft",
  light: "rounded-lg border border-warm-line bg-white/70",
  lightSoft: "rounded-lg border border-warm-line bg-white/72",
  lightPanel: "rounded-lg border border-warm-line bg-white/70 p-5",
  paperPanel: "rounded-lg border border-white/12 bg-paper text-ink",
};

export const mediaClasses = {
  absoluteImage: "absolute inset-0 h-full w-full object-cover",
  portraitFrame: "relative aspect-4/5 overflow-hidden rounded-lg",
  landscapeFrame: "relative aspect-4/3 overflow-hidden rounded-lg",
  darkPortraitFrame:
    "relative aspect-4/5 overflow-hidden rounded-lg border border-white/12 bg-ink-panel shadow-[0_24px_70px_rgba(0,0,0,0.24)]",
  darkTile:
    "group relative aspect-4/3 min-w-0 overflow-hidden rounded-lg border border-white/12 bg-ink-panel",
  hoverImage:
    "absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]",
};

export const imageSizes = {
  fullBleedHero: {
    width: 1800,
    widths: [960, 1400, 1800],
    sizes: "100vw",
  },
  heroWide: {
    width: 1400,
    widths: [640, 1080, 1400],
    sizes: "(min-width: 1024px) 58vw, 92vw",
  },
  splitPanel: {
    width: 1200,
    widths: [640, 960, 1200],
    sizes: "(min-width: 1024px) 50vw, 92vw",
  },
  card: {
    width: 720,
    widths: [360, 720],
    sizes: "(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw",
  },
  tile: {
    width: 900,
    widths: [360, 720, 900],
    sizes:
      "(min-width: 1280px) 23vw, (min-width: 1024px) 31vw, (min-width: 640px) 45vw, 92vw",
  },
};
