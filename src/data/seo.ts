import {
  getPath,
  mapLocales,
  type Locale,
  type PageId,
} from "./routing";
import { brand } from "./restaurant";
import defaultSocialImageUrl from "../assets/images/homepage/homepage-hero-hotpotpremium.png?url";

export const siteOrigin = "https://sinahp2.yrw.workers.dev";
export const siteName = brand.publicName;
export { defaultSocialImageUrl };
export const defaultSocialImageAlt =
  "Sina Hotpot Chinese hotpot table in Prato and Firenze";

export const openGraphLocales: Record<Locale, string> = {
  it: "it_IT",
  zh: "zh_CN",
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
};

export type SeoMeta = {
  title: string;
  description: string;
};

const pageSeoMeta: Record<Locale, Partial<Record<PageId, SeoMeta>>> = {
  it: {
    home: {
      title: "鲜入围煮 Sina Hotpot | Hotpot cinese a Prato e Firenze",
      description:
        "Ristorante hotpot cinese a Prato e Firenze: brodi aromatici, ingredienti freschi, tavoli conviviali e prenotazione online o WhatsApp.",
    },
    culture: {
      title: "Hotpot cinese: guida, brodi e come mangiarlo | Sina Hotpot",
      description:
        "Scopri come funziona l'hotpot cinese: brodi, ingredienti, salse, tempi di cottura e consigli per provarlo a Prato o Firenze.",
    },
    locations: {
      title: "Ristorante hotpot cinese a Prato e Firenze | Sina Hotpot",
      description:
        "Trova Sina Hotpot a Prato in Via Cava 109 e a Firenze in Via Ghibellina 80R: indirizzi, orari, telefono, WhatsApp e mappe.",
    },
    gallery: {
      title: "Foto hotpot cinese, piatti e ingredienti | Sina Hotpot",
      description:
        "Guarda piatti, ingredienti freschi, dessert, bevande e interni dei ristoranti Sina Hotpot di Prato e Firenze.",
    },
    reservation: {
      title: "Prova la prenotazione dimostrativa | Sina Hotpot",
      description:
        "Esplora il modulo originale con dati inventati. La simulazione avviene solo nel browser: non viene inviata alcuna richiesta al ristorante.",
    },
  },
  zh: {
    home: {
      title: "鲜入围煮 Sina Hotpot | Prato 与 Firenze 中式火锅",
      description:
        "Sina Hotpot 在 Prato 与 Firenze 提供中式火锅、香气锅底、新鲜食材和线上预约，适合朋友聚餐、家庭用餐和第一次体验火锅。",
    },
    culture: {
      title: "中式火锅指南：锅底、食材和吃法 | Sina Hotpot",
      description:
        "了解中式火锅怎么吃：锅底选择、食材涮煮、蘸料搭配和第一次来店的实用建议。",
    },
    locations: {
      title: "Prato 与 Firenze 中式火锅门店 | Sina Hotpot",
      description:
        "查看 Sina Hotpot Prato 与 Firenze 门店地址、营业时间、电话、WhatsApp 和地图路线。",
    },
    gallery: {
      title: "中式火锅图片、菜品和食材展示 | Sina Hotpot",
      description:
        "浏览 Sina Hotpot 的火锅菜品、新鲜食材、甜品饮品、厨师和门店氛围照片。",
    },
    reservation: {
      title: "体验模拟预约 | Sina Hotpot",
      description:
        "使用虚构资料体验原网站的预约表单。整个流程只在浏览器中模拟，不会向餐厅发送任何请求。",
    },
  },
  en: {
    home: {
      title: "Sina Hotpot | Chinese Hotpot in Prato and Firenze",
      description:
        "Chinese hotpot restaurant in Prato and Firenze with aromatic broths, fresh ingredients, shared table cooking, and online or WhatsApp reservations.",
    },
    culture: {
      title: "Chinese Hotpot Guide: Broths, Ingredients and How to Eat",
      description:
        "Learn how Chinese hotpot works: broths, ingredients, sauces, cooking rhythm, and first-visit tips before dining in Prato or Firenze.",
    },
    locations: {
      title: "Chinese Hotpot Restaurant in Prato and Firenze | Sina Hotpot",
      description:
        "Find Sina Hotpot in Prato on Via Cava 109 and in Firenze on Via Ghibellina 80R: addresses, hours, phone, WhatsApp, and maps.",
    },
    gallery: {
      title: "Chinese Hotpot Photos, Dishes and Ingredients | Sina Hotpot",
      description:
        "Browse Sina Hotpot dishes, fresh ingredients, desserts, drinks, chefs, and restaurant photos from Prato and Firenze.",
    },
    reservation: {
      title: "Try a simulated reservation | Sina Hotpot",
      description:
        "Explore the original form with fictional details. This simulation runs only in your browser and sends no request to the restaurant.",
    },
  },
  es: {
    home: {
      title: "Sina Hotpot | Hotpot chino en Prato y Firenze",
      description:
        "Restaurante de hotpot chino en Prato y Firenze con caldos aromáticos, ingredientes frescos, mesa compartida y reserva online o por WhatsApp.",
    },
    culture: {
      title: "Guía del hotpot chino: caldos, ingredientes y cómo comerlo",
      description:
        "Descubre cómo funciona el hotpot chino: caldos, ingredientes, salsas, tiempos de cocción y consejos para probarlo en Prato o Firenze.",
    },
    locations: {
      title: "Restaurante de hotpot chino en Prato y Firenze | Sina Hotpot",
      description:
        "Encuentra Sina Hotpot en Prato, Via Cava 109, y Firenze, Via Ghibellina 80R: direcciones, horarios, teléfono, WhatsApp y mapas.",
    },
    gallery: {
      title: "Fotos de hotpot chino, platos e ingredientes | Sina Hotpot",
      description:
        "Mira platos, ingredientes frescos, postres, bebidas, chefs y fotos de los restaurantes Sina Hotpot de Prato y Firenze.",
    },
    reservation: {
      title: "Prueba una reserva simulada | Sina Hotpot",
      description:
        "Explora el formulario original con datos ficticios. La simulación funciona solo en el navegador y no envía solicitudes al restaurante.",
    },
  },
  fr: {
    home: {
      title: "Sina Hotpot | Hotpot chinois à Prato et Firenze",
      description:
        "Restaurant de hotpot chinois à Prato et Firenze avec bouillons parfumés, ingrédients frais, cuisson partagée à table et réservation en ligne ou WhatsApp.",
    },
    culture: {
      title: "Guide du hotpot chinois: bouillons, ingrédients et dégustation",
      description:
        "Découvrez le hotpot chinois: bouillons, ingrédients, sauces, rythme de cuisson et conseils pour une première visite à Prato ou Firenze.",
    },
    locations: {
      title: "Restaurant de hotpot chinois à Prato et Firenze | Sina Hotpot",
      description:
        "Retrouvez Sina Hotpot à Prato, Via Cava 109, et à Firenze, Via Ghibellina 80R: adresses, horaires, téléphone, WhatsApp et cartes.",
    },
    gallery: {
      title: "Photos de hotpot chinois, plats et ingrédients | Sina Hotpot",
      description:
        "Découvrez plats, ingrédients frais, desserts, boissons, chefs et photos des restaurants Sina Hotpot de Prato et Firenze.",
    },
    reservation: {
      title: "Essayez une réservation simulée | Sina Hotpot",
      description:
        "Explorez le formulaire d’origine avec des données fictives. La simulation fonctionne uniquement dans votre navigateur et n’envoie aucune demande au restaurant.",
    },
  },
};

export function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return new URL(pathOrUrl, `${siteOrigin}/`).toString();
}

export function getCanonicalUrl(path: string): string {
  return toAbsoluteUrl(path);
}

export function getPageSeoMeta(locale: Locale, page: PageId): SeoMeta | null {
  return pageSeoMeta[locale][page] ?? null;
}

export function getPageAlternatePaths(page: PageId): Record<Locale, string> {
  return mapLocales((locale) => getPath(locale, page));
}
