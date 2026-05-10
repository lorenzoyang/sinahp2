import type { ImageMetadata } from "astro";
import cultureImage from "../assets/images/culture/steaming-hotpot-table-pexels.jpg";
import tableImage from "../assets/images/culture/hotpot-table-unsplash.jpg";
import ingredientsImage from "../assets/images/food/hotpot-meat-vegetables-pexels.jpg";
import platterImage from "../assets/images/food/ingredients-arrangement-pexels.jpg";
import mealSpreadImage from "../assets/images/food/hotpot-meal-spread-pexels.jpg";
import steamingSetupImage from "../assets/images/food/steaming-hotpot-setup-pexels.jpg";
import heroImage from "../assets/images/generated/premium-hotpot-hero.png";

type ImageModule = {
  default: ImageMetadata;
};

function galleryFromGlob(modules: Record<string, ImageModule>) {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, module]) => module.default);
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
const pratoPrimaryImage = pratoGallery[0] ?? platterImage;
const firenzePrimaryImage = firenzeGallery[0] ?? platterImage;

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
    gallery: pratoGallery.length > 0 ? pratoGallery : [pratoPrimaryImage],
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
    gallery:
      firenzeGallery.length > 0 ? firenzeGallery : [firenzePrimaryImage],
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
