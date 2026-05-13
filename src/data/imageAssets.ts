import type { ImageMetadata } from "astro";

export type ImageModule = {
  default: ImageMetadata;
};

const imageSortOptions = {
  numeric: true,
  sensitivity: "base",
} satisfies Intl.CollatorOptions;

export function imagesFromGlob(
  modules: Record<string, ImageModule>,
): ImageMetadata[] {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, imageSortOptions))
    .map(([, module]) => module.default);
}

export function firstImage(
  images: readonly ImageMetadata[],
  fallback: ImageMetadata,
): ImageMetadata {
  return images[0] ?? fallback;
}

export function imagesWithFallback(
  images: readonly ImageMetadata[],
  fallback: ImageMetadata,
): readonly ImageMetadata[] {
  return images.length > 0 ? images : [fallback];
}
