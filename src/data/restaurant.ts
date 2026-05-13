import type { ImageMetadata } from "astro";
import {
  firstImage,
  imagesFromGlob,
  imagesWithFallback,
  type ImageModule,
} from "./imageAssets";
import cultureBasicsImage from "../assets/images/culture/culture-basics-placeholder.jpg";
import cultureBrothsImage from "../assets/images/culture/culture-broths-placeholder.jpg";
import cultureEtiquetteImage from "../assets/images/culture/culture-etiquette-placeholder.jpg";
import cultureIngredientsImage from "../assets/images/culture/culture-ingredients-placeholder.jpg";
import cultureRitualImage from "../assets/images/culture/culture-ritual-placeholder.jpg";
import mealSpreadImage from "../assets/images/homepage/homepage-sharedtable.jpg";
import steamingSetupImage from "../assets/images/homepage/homepage-steaming-meat.jpg";
import heroImage from "../assets/images/homepage/homepage-hero-hotpotpremium.png";

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

const pratoGallery = imagesFromGlob(
  import.meta.glob<ImageModule>(
    "../assets/images/restaurant/prato/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true },
  ),
);
const firenzeGallery = imagesFromGlob(
  import.meta.glob<ImageModule>(
    "../assets/images/restaurant/firenze/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true },
  ),
);
const pratoPrimaryImage = firstImage(pratoGallery, cultureEtiquetteImage);
const firenzePrimaryImage = firstImage(firenzeGallery, cultureEtiquetteImage);

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

export const brand = {
  chineseName: "鲜入围煮",
  publicName: "Sina Hotpot",
  email: "sinahotpot@gmail.com",
  whatsapp: "+39 348 032 8697",
  whatsappHref: "https://wa.me/393480328697",
  instagram: "https://www.instagram.com/sinahotpot/",
  facebook: "https://www.facebook.com/p/Sina-Hot-Pot-100071037279604/",
};

export const images = {
  hero: heroImage,
  interior: pratoPrimaryImage,
  exterior: pratoPrimaryImage,
  ingredients: cultureIngredientsImage,
  platter: cultureEtiquetteImage,
  broths: cultureBrothsImage,
  steamingSetup: steamingSetupImage,
  mealSpread: mealSpreadImage,
  culture: cultureBasicsImage,
  table: cultureRitualImage,
} as const;

export const locations = [
  {
    id: "prato",
    city: "Prato",
    phone: "+39 348 032 8697",
    address: "Via cava 109, Prato",
    hours: "18:00-02:00",
    wechatId: "Sinahotpot",
    image: pratoPrimaryImage,
    gallery: imagesWithFallback(pratoGallery, pratoPrimaryImage),
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Via%20cava%20109%2C%20Prato",
  },
  {
    id: "firenze",
    city: "Firenze",
    phone: "+39 344 681 3199",
    address: "Via Ghibellina 80R, Firenze",
    hours: "12:00-15:00, 18:30-23:00",
    wechatId: "sinafirenze",
    image: firenzePrimaryImage,
    gallery: imagesWithFallback(firenzeGallery, firenzePrimaryImage),
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Via%20Ghibellina%2080R%2C%20Firenze",
  },
] as const;

export type RestaurantLocation = (typeof locations)[number];

export function getPhoneHref(phone: string) {
  return `tel:${phone.replaceAll(" ", "")}`;
}

export function getLocationLabel(location: RestaurantLocation) {
  return `${location.city} - ${location.address}`;
}
