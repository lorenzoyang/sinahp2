// Public data entry point for page and layout code. It groups routing helpers
// with restaurant metadata so component imports stay stable and compact.
export * from "./routing";
export {
  brand,
  getLocationLabel,
  getPhoneHref,
  locations,
} from "./restaurant";
export type {
  RestaurantLocation,
} from "./restaurant";
