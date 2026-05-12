import type { ImageMetadata } from "astro";
import cultureImage from "../assets/images/culture/sauce-bar-table.jpg";
import tableImage from "../assets/images/culture/hotpot-table-ritual.jpg";
import ingredientsImage from "../assets/images/food/rolled-beef-platter.jpg";
import platterImage from "../assets/images/food/premium-meat-platter.jpg";
import mealSpreadImage from "../assets/images/homepage/455.jpg";
import steamingSetupImage from "../assets/images/food/steaming-beef-bite.jpg";
import heroImage from "../assets/images/homepage/homepage-hero-hotpotpremium.png";

type ImageModule = {
  default: ImageMetadata;
};

export type GalleryCategoryId = "table" | "ingredients" | "action" | "drinks";

function galleryFromGlob(modules: Record<string, ImageModule>) {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, module]) => module.default);
}

function getPrimaryImage(
  gallery: readonly ImageMetadata[],
  fallback: ImageMetadata,
) {
  return gallery[0] ?? fallback;
}

function withFallbackGallery(
  gallery: readonly ImageMetadata[],
  fallback: ImageMetadata,
) {
  return gallery.length > 0 ? gallery : [fallback];
}

const pratoGallery = galleryFromGlob(
  import.meta.glob<ImageModule>(
    "../assets/images/restaurant/prato/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true },
  ),
);
const firenzeGallery = galleryFromGlob(
  import.meta.glob<ImageModule>(
    "../assets/images/restaurant/firenze/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true },
  ),
);
const pratoPrimaryImage = getPrimaryImage(pratoGallery, platterImage);
const firenzePrimaryImage = getPrimaryImage(firenzeGallery, platterImage);

export const galleryGroups = [
  {
    id: "table",
    photos: galleryFromGlob(
      import.meta.glob<ImageModule>(
        "../assets/images/gallery/table/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
        { eager: true },
      ),
    ),
  },
  {
    id: "ingredients",
    photos: galleryFromGlob(
      import.meta.glob<ImageModule>(
        "../assets/images/gallery/ingredients/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
        { eager: true },
      ),
    ),
  },
  {
    id: "action",
    photos: galleryFromGlob(
      import.meta.glob<ImageModule>(
        "../assets/images/gallery/action/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
        { eager: true },
      ),
    ),
  },
  {
    id: "drinks",
    photos: galleryFromGlob(
      import.meta.glob<ImageModule>(
        "../assets/images/gallery/drinks/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
        { eager: true },
      ),
    ),
  },
] satisfies readonly {
  id: GalleryCategoryId;
  photos: ImageMetadata[];
}[];

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
  ingredients: ingredientsImage,
  platter: platterImage,
  steamingSetup: steamingSetupImage,
  mealSpread: mealSpreadImage,
  culture: cultureImage,
  table: tableImage,
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
    gallery: withFallbackGallery(pratoGallery, pratoPrimaryImage),
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
    gallery: withFallbackGallery(firenzeGallery, firenzePrimaryImage),
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
