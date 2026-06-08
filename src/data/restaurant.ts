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
  readonly addressRegion: string;
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
  legal: {
    legalName: "RISTORANTE SINA HOTPOT S.R.L.",
    registeredOffice: "Via Cava 109, 59100 Prato (PO)",
    registrationAuthority: "Registro Imprese Pistoia-Prato",
    vatId: "02455830972",
    taxId: "02455830972",
    footerLines: [
      "© 2026 RISTORANTE SINA HOTPOT S.R.L.",
      "Sede legale: Via Cava 109, 59100 Prato (PO)",
      "P.IVA / C.F. / Registro Imprese Pistoia-Prato: 02455830972",
    ],
  },
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
    address: "Via Cava, 109, 59100 Prato PO",
    structuredAddress: {
      streetAddress: "Via Cava, 109",
      addressLocality: "Prato",
      postalCode: "59100",
      addressRegion: "PO",
    },
    hours: "18:30-02:00",
    schemaOpeningHours: ["Mo-Su 18:30-02:00"],
    reservationTimeRanges: [{ start: "18:30", end: "02:00" }],
    wechatId: "Sinahotpot",
    image: pratoPrimaryImage,
    gallery: imagesWithFallback(pratoGallery, pratoPrimaryImage),
    mapHref:
      "https://www.google.com/maps/place/Sina+Hotpot+%E9%B2%9C%E5%85%A5%E5%9B%B4%E7%85%AE/@43.8639425,11.0647209,17z/data=!3m1!4b1!4m6!3m5!1s0x132af5cdcfddd0fd:0x6f8cb950074fa810!8m2!3d43.8639425!4d11.0672958!16s%2Fg%2F11fszgmgbn",
  },
  {
    id: "firenze",
    city: "Firenze",
    phone: "+39 344 681 3199",
    address: "Via Ghibellina, 80r, 50122 Firenze FI",
    structuredAddress: {
      streetAddress: "Via Ghibellina, 80r",
      addressLocality: "Firenze",
      postalCode: "50122",
      addressRegion: "FI",
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
      "https://www.google.com/maps/place/Sina+Hotpot+Firenze+%E9%B2%9C%E5%85%A5%E5%9B%B4%E7%85%AE/@43.7700506,11.2601432,17z/data=!3m1!4b1!4m6!3m5!1s0x132a55ed4d444ceb:0x4d607f8845eb89c3!8m2!3d43.7700506!4d11.2627181!16s%2Fg%2F11lymjwzst",
  },
] as const satisfies readonly RestaurantLocationData[];

export type RestaurantLocation = (typeof locations)[number];
export type RestaurantLocationId = RestaurantLocation["id"];

export function getPhoneHref(phone: string): string {
  return `tel:${phone.replaceAll(" ", "")}`;
}

export function getWhatsappHref(phone: string, message?: string): string {
  const normalizedPhone = phone.replace(/\D/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";

  return `https://wa.me/${normalizedPhone}${text}`;
}

export function getLocationLabel(location: RestaurantLocation): string {
  return `${location.city} - ${location.address}`;
}
