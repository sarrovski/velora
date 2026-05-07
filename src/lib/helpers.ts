import { sellers, tools } from "./data";

export function getTool(slug: string) { return tools.find((tool) => tool.slug === slug); }
export function getSeller(slug: string) { return sellers.find((seller) => seller.slug === slug); }
export function getGame(slug: string) { return tools.filter((tool) => tool.gameSlug === slug); }
export function formatInt(value: number) { return new Intl.NumberFormat("en-US", { notation: value > 9999 ? "compact" : "standard" }).format(value); }
export function organicTools() { return [...tools].filter((tool) => tool.status === "Published").sort((a,b) => (b.rating * 20 + b.reviews/10 + b.trustScore) - (a.rating * 20 + a.reviews/10 + a.trustScore)); }
