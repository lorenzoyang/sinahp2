import type { ImageMetadata } from "astro";
import homeHeroImage from "../assets/images/homepage/homepage-hero-hotpotpremium.png";
import homeHowToEatImage from "../assets/images/homepage/homepage-how-to-eat.png";
import homePremiumSpreadImage from "../assets/images/homepage/homepage-sharedtable-1.jpg";
import cultureHeroImage from "../assets/images/hotpot-culture/hotpot-culture-hero0.png";
import cultureBasicsImage from "../assets/images/hotpot-culture/hotpot-culture-basics.png";
import cultureBrothsImage from "../assets/images/hotpot-culture/hotpot-culture-broths.png";
import cultureEtiquetteImage from "../assets/images/hotpot-culture/hotpot-culture-guidance.png";
import cultureIngredientsImage from "../assets/images/hotpot-culture/hotpot-culture-Ingredients.png";
import cultureRitualImage from "../assets/images/hotpot-culture/hotpot-culture-howtoeat.png";
import reservationHeroImage from "../assets/images/reservation/reservation-hero.jpg";

type ImageMap = Record<string, ImageMetadata>;

export const homeImages = {
  hero: homeHeroImage,
  howToEat: homeHowToEatImage,
  premiumSpread: homePremiumSpreadImage,
} as const satisfies ImageMap;

export const cultureImages = {
  hero: cultureHeroImage,
  basics: cultureBasicsImage,
  broths: cultureBrothsImage,
  ingredients: cultureIngredientsImage,
  ritual: cultureRitualImage,
  etiquette: cultureEtiquetteImage,
} as const satisfies ImageMap;

export const reservationImages = {
  hero: reservationHeroImage,
} as const satisfies ImageMap;
