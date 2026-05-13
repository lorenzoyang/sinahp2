import type { ImageMetadata } from "astro";
import {
  imagesFromGlob,
  type ImageModule,
} from "./imageAssets";
import galleryTableFallbackImage from "../assets/images/gallery/table/gallery-table-1.jpg";

export const galleryCategoryIds = [
  "dishes",
  "ingredients",
  "table",
  "drinks",
] as const;

export type GalleryCategoryId = (typeof galleryCategoryIds)[number];

export type GalleryGroup = {
  readonly id: GalleryCategoryId;
  readonly photos: readonly ImageMetadata[];
};

function createGalleryGroup(
  id: GalleryCategoryId,
  modules: Record<string, ImageModule>,
): GalleryGroup {
  return {
    id,
    photos: imagesFromGlob(modules),
  };
}

export const galleryGroups = [
  createGalleryGroup(
    "dishes",
    import.meta.glob<ImageModule>(
      "../assets/images/gallery/dishes/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
      { eager: true },
    ),
  ),
  createGalleryGroup(
    "ingredients",
    import.meta.glob<ImageModule>(
      "../assets/images/gallery/ingredients/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
      { eager: true },
    ),
  ),
  createGalleryGroup(
    "table",
    import.meta.glob<ImageModule>(
      "../assets/images/gallery/table/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
      { eager: true },
    ),
  ),
  createGalleryGroup(
    "drinks",
    import.meta.glob<ImageModule>(
      "../assets/images/gallery/drinks/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
      { eager: true },
    ),
  ),
] satisfies readonly GalleryGroup[];

export const galleryFallbackImages = {
  table: galleryTableFallbackImage,
} as const satisfies Record<string, ImageMetadata>;
