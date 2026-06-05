import type { ImageMetadata } from "astro";
import galleryHeroImage from "../assets/images/gallery/gallery-hero.jpg";
import { imagesFromGlob, type ImageModule } from "./imageAssets";
import type { Locale } from "./routing";

export const galleryCategoryIds = [
  "dishes",
  "ingredients",
  "refreshments",
  "chefs",
] as const;

export type GalleryCategoryId = (typeof galleryCategoryIds)[number];

export type GalleryGroup = {
  readonly id: GalleryCategoryId;
  readonly photos: readonly ImageMetadata[];
};

export type VisibleGalleryGroup = GalleryGroup & {
  readonly coverPhoto: ImageMetadata;
  readonly sectionId: string;
};

export const galleryHeroPhoto = galleryHeroImage;

const photoCountLabels = {
  it: ["foto", "foto"],
  zh: ["张照片", "张照片"],
  en: ["photo", "photos"],
  es: ["foto", "fotos"],
  fr: ["photo", "photos"],
} as const satisfies Record<Locale, readonly [string, string]>;

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
    "refreshments",
    import.meta.glob<ImageModule>(
      "../assets/images/gallery/refreshments/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
      { eager: true },
    ),
  ),
  createGalleryGroup(
    "chefs",
    import.meta.glob<ImageModule>(
      "../assets/images/gallery/chefs/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
      { eager: true },
    ),
  ),
] satisfies readonly GalleryGroup[];

export function getGallerySectionId(id: GalleryCategoryId): string {
  return `gallery-${id}`;
}

export function getVisibleGalleryGroups(
  groups: readonly GalleryGroup[] = galleryGroups,
): VisibleGalleryGroup[] {
  return groups.flatMap((group) => {
    const [coverPhoto] = group.photos;

    if (!coverPhoto) {
      return [];
    }

    return {
      ...group,
      coverPhoto,
      sectionId: getGallerySectionId(group.id),
    };
  });
}

export function getGalleryPhotoTotal(groups: readonly GalleryGroup[]): number {
  return groups.reduce((total, group) => total + group.photos.length, 0);
}

export function getGalleryPhotoCountLabel(
  count: number,
  locale: Locale,
): string {
  const [singular, plural] = photoCountLabels[locale];
  const label = count === 1 ? singular : plural;

  return locale === "zh" ? `${count}${label}` : `${count} ${label}`;
}
