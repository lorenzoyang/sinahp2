// Public data entry point for page and layout code. It groups routing helpers
// with restaurant metadata so component imports stay stable and compact.
export * from "./routing";
export {
  brand,
  galleryCategoryIds,
  galleryGroups,
  getLocationLabel,
  getPhoneHref,
  images,
  locations,
} from "./restaurant";
export type {
  GalleryCategoryId,
  GalleryGroup,
  RestaurantLocation,
} from "./restaurant";
