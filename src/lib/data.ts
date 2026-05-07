export type ToolStatus = "Working" | "Updating" | "Not Working";
export type PlatformStatus = "Published" | "Pending Review" | "Draft" | "Suspended";

export type Product = {
  id: string;
  slug: string;
  name: string;
  game: string;
  category: string;
  sellerSlug: string;
  sellerName: string;
  description: string;
  websiteUrl: string;
  platformStatus: PlatformStatus;
  toolStatus: ToolStatus;
  showToolStatus: boolean;
  rating: number;
  reviews: number;
  clicks: number;
  views: number;
  rankScore: number;
  boosted: boolean;
  lastUpdated: string;
  lastReview: string;
  visibility: string;
  healthNote: string;
  recommendedAction: string;
  features: string[];
};

export const games = ["CS2", "Valorant", "Fortnite", "Apex Legends", "Call of Duty"];
export const categories = ["Stats & Insights", "Overlays", "Utility", "Coaching", "Aim Training"];
export const featureOptions = ["Match analytics", "Agent performance", "Round history", "Rank tracking", "Overlay HUD", "Crosshair sync", "Map awareness", "Strategy notes", "Team comms", "Utility lineups"];

export const seller = {
  name: "DevStudio",
  slug: "devstudio",
  email: "seller@velora.dev",
  verified: true,
  trustScore: 96,
  plan: "Pro",
  productLimit: 10,
  boostLimit: 5,
  appealLimit: 3,
  joinedAt: "March 2026",
  description:
    "DevStudio builds polished analytics, overlay, and utility tools for competitive players who want reliable products with transparent reviews.",
};

export const products: Product[] = [
  {
    id: "phantomx",
    slug: "phantomx-tracker",
    name: "PhantomX Tracker",
    game: "Valorant",
    category: "Stats & Insights",
    sellerSlug: "devstudio",
    sellerName: "DevStudio",
    description: "Performance analytics and match insights for competitive Valorant players.",
    websiteUrl: "https://example.com",
    platformStatus: "Published",
    toolStatus: "Working",
    showToolStatus: true,
    rating: 4.9,
    reviews: 326,
    clicks: 1320,
    views: 28400,
    rankScore: 94.7,
    boosted: true,
    lastUpdated: "May 23, 2026",
    lastReview: "May 21, 2026",
    visibility: "Public",
    healthNote: "Visible, ranked, working, and eligible for boosts.",
    recommendedAction: "Keep boost active and collect fresh reviews after major updates.",
    features: ["Match analytics", "Agent performance", "Round history", "Rank tracking"],
  },
  {
    id: "shadow",
    slug: "shadow-overlay",
    name: "Shadow Overlay",
    game: "CS2",
    category: "Overlays",
    sellerSlug: "devstudio",
    sellerName: "DevStudio",
    description: "A clean in-game overlay for CS2 players who want better visibility and utility context.",
    websiteUrl: "https://example.com",
    platformStatus: "Pending Review",
    toolStatus: "Updating",
    showToolStatus: true,
    rating: 4.4,
    reviews: 84,
    clicks: 412,
    views: 6840,
    rankScore: 72.1,
    boosted: false,
    lastUpdated: "May 21, 2026",
    lastReview: "—",
    visibility: "Not public yet",
    healthNote: "Waiting for admin review before public ranking and boosts fully work.",
    recommendedAction: "Finish review requirements before buying a boost.",
    features: ["Overlay HUD", "Crosshair sync", "Map awareness"],
  },
  {
    id: "stratpad",
    slug: "stratpad-extension",
    name: "StratPad Extension",
    game: "Fortnite",
    category: "Utility",
    sellerSlug: "devstudio",
    sellerName: "DevStudio",
    description: "Strategy notes, team comms, and utility lineups for Fortnite teams.",
    websiteUrl: "https://example.com",
    platformStatus: "Draft",
    toolStatus: "Not Working",
    showToolStatus: false,
    rating: 0,
    reviews: 0,
    clicks: 0,
    views: 0,
    rankScore: 0,
    boosted: false,
    lastUpdated: "May 18, 2026",
    lastReview: "—",
    visibility: "Private draft",
    healthNote: "Draft products are hidden from users and cannot be boosted.",
    recommendedAction: "Fix tool status, complete features, and submit for review.",
    features: ["Strategy notes", "Team comms", "Utility lineups"],
  },
];

export const reviews = [
  { id: "r1", productSlug: "phantomx-tracker", user: "Vortex", rating: 5, title: "Clean, fast, and reliable", body: "The stats feel accurate and the UI is simple to understand.", helpful: 214, appealStatus: "None" },
  { id: "r2", productSlug: "phantomx-tracker", user: "SentinelMain", rating: 4, title: "Good tool but setup was confusing", body: "Useful once installed. Setup instructions could be better.", helpful: 98, appealStatus: "Pending Appeal" },
  { id: "r3", productSlug: "shadow-overlay", user: "Hexa", rating: 4, title: "Nice overlay design", body: "Overlay is clean. Waiting for the next update before using it full time.", helpful: 41, appealStatus: "None" },
];

export const plans = [
  { name: "Starter", price: "$29/mo", productLimit: 5, boostLimit: 1, appealLimit: 1, description: "For new sellers testing the platform." },
  { name: "Pro", price: "$79/mo", productLimit: 10, boostLimit: 5, appealLimit: 3, description: "For serious sellers with multiple products." },
  { name: "Big Seller", price: "$199/mo", productLimit: 30, boostLimit: 15, appealLimit: 10, description: "For larger sellers with a full catalog." },
];

export const boostPackages = [
  { name: "Starter Boost", price: "$19", duration: "3 days", placement: "Lower sponsored block" },
  { name: "Standard Boost", price: "$49", duration: "7 days", placement: "Game ranking sponsored block" },
  { name: "Premium Boost", price: "$129", duration: "14 days", placement: "Top sponsored slot + homepage rotation" },
];

export const boosts = [
  { id: "boost-1", productSlug: "phantomx-tracker", productName: "PhantomX Tracker", status: "Active", packageName: "Standard Boost", spend: "$49", clicks: 912, impressions: 18420, ctr: "4.95%", startsAt: "May 20, 2026", endsAt: "May 27, 2026" },
];

export const analytics = {
  productViews: 38640,
  outboundClicks: 2184,
  conversionRate: "5.7%",
  boostClicks: 912,
  organicClicks: 1272,
  averageRating: 4.9,
  rankMovement: "+2",
  timeline: [38, 46, 52, 71, 64, 88, 76, 69, 82, 90, 74, 80],
  sources: [
    { name: "Game rankings", share: 47, clicks: 1080 },
    { name: "Seller page", share: 21, clicks: 436 },
    { name: "Boost placements", share: 24, clicks: 912 },
    { name: "Search", share: 8, clicks: 188 },
  ],
};

export const auditLogs = [
  "Admin approved PhantomX Tracker",
  "Seller opened review appeal for SentinelMain review",
  "Boost campaign created for PhantomX Tracker",
  "Shadow Overlay submitted for review",
];
