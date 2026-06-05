import type { ImageMetadata } from "astro";
import {
  firstImage,
  imagesFromGlob,
  imagesWithFallback,
  type ImageModule,
} from "./imageAssets";
import firenzeFallbackImage from "../assets/images/restaurant/firenze/firenze-interior-1.jpg";
import pratoFallbackImage from "../assets/images/restaurant/prato/prato-interior-1.jpg";

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
const pratoPrimaryImage = firstImage(pratoGallery, pratoFallbackImage);
const firenzePrimaryImage = firstImage(firenzeGallery, firenzeFallbackImage);

export type ReservationTimeRange = {
  readonly start: string;
  readonly end: string;
};

type StructuredAddress = {
  readonly streetAddress: string;
  readonly addressLocality: string;
  readonly postalCode: string;
};

type RestaurantLocationData = {
  readonly id: "prato" | "firenze";
  readonly city: string;
  readonly phone: string;
  readonly address: string;
  readonly structuredAddress: StructuredAddress;
  readonly hours: string;
  readonly schemaOpeningHours: readonly string[];
  readonly reservationTimeRanges: readonly ReservationTimeRange[];
  readonly wechatId: string;
  readonly image: ImageMetadata;
  readonly gallery: readonly ImageMetadata[];
  readonly mapHref: string;
};

export const brand = {
  chineseName: "鲜入围煮",
  publicName: "Sina Hotpot",
  email: "sinahotpot@gmail.com",
  whatsapp: "+39 348 032 8697",
  whatsappHref: "https://wa.me/393480328697",
  instagram: "https://www.instagram.com/sinahotpot/",
  facebook: "https://www.facebook.com/p/Sina-Hot-Pot-100071037279604/",
};

export const locations = [
  {
    id: "prato",
    city: "Prato",
    phone: "+39 348 032 8697",
    address: "Via cava 109, Prato",
    structuredAddress: {
      streetAddress: "Via Cava 109",
      addressLocality: "Prato",
      postalCode: "59100",
    },
    hours: "18:30-02:00",
    schemaOpeningHours: ["Mo-Su 18:30-02:00"],
    reservationTimeRanges: [{ start: "18:30", end: "02:00" }],
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
    structuredAddress: {
      streetAddress: "Via Ghibellina 80R",
      addressLocality: "Firenze",
      postalCode: "50122",
    },
    hours: "12:00-15:00, 16:00-23:00",
    schemaOpeningHours: ["Mo-Su 12:00-15:00", "Mo-Su 16:00-23:00"],
    reservationTimeRanges: [
      { start: "12:00", end: "15:00" },
      { start: "16:00", end: "23:00" },
    ],
    wechatId: "sinafirenze",
    image: firenzePrimaryImage,
    gallery: imagesWithFallback(firenzeGallery, firenzePrimaryImage),
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Via%20Ghibellina%2080R%2C%20Firenze",
  },
] as const satisfies readonly RestaurantLocationData[];

export type RestaurantLocation = (typeof locations)[number];
export type RestaurantLocationId = RestaurantLocation["id"];

export function getPhoneHref(phone: string): string {
  return `tel:${phone.replaceAll(" ", "")}`;
}

export function getLocationLabel(location: RestaurantLocation): string {
  return `${location.city} - ${location.address}`;
}
