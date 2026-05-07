import { listings } from "./real-listings";

export function getListing(slug: string) {
  return listings.find((listing) => listing.slug === slug);
}

export function getListingsByGame(game?: string) {
  if (!game || game === "All") return listings;
  return listings.filter((listing) => listing.game === game);
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
