// Shared content-shape types used across copy, culture topic, and home section
// data modules. Keeping them here avoids redefining the same small structures.
export type TextPair = readonly [string, string];
export type TextSection = {
  title: string;
  body: string;
};
export type LocalizedContent<TLocale extends string, TContent> = Record<
  TLocale,
  TContent
>;
