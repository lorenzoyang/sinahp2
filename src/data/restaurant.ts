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
  hero: "/images/generated/premium-hotpot-hero.png",
  interior: "/images/restaurant/sina-prato-interior-reference.jpg",
  exterior: "/images/restaurant/sina-prato-exterior-reference.jpg",
  ingredients: "/images/food/hotpot-meat-vegetables-pexels.jpg",
  platter: "/images/food/ingredients-arrangement-pexels.jpg",
  steamingSetup: "/images/food/steaming-hotpot-setup-pexels.jpg",
  mealSpread: "/images/food/hotpot-meal-spread-pexels.jpg",
  culture: "/images/culture/steaming-hotpot-table-pexels.jpg",
  table: "/images/culture/hotpot-table-unsplash.jpg",
} as const;

export const locations = [
  {
    id: "prato",
    city: "Prato",
    phone: "+39 348 032 8697",
    address: "Via cava 109, Prato",
    hours: "18:00-02:00",
    image: images.interior,
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Via%20cava%20109%2C%20Prato",
  },
  {
    id: "firenze",
    city: "Firenze",
    phone: "+39 344 681 3199",
    address: "Via Ghibellina 80R, Firenze",
    hours: "12:00-15:00, 18:30-23:00",
    image: images.platter,
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
