export type PaymentRisk = "Low" | "Medium" | "High" | "Irreversible";
export type SellerKind = "Official Provider" | "Verified Reseller" | "Reseller";
export type ToolStatus = "Working" | "Updating" | "Not Working";
export type Architecture = "Internal" | "External" | "DMA" | "Cloud" | "Unknown";

export const games = [
  { slug: "valorant", name: "Valorant", description: "Trackers, overlays, utilities and competitive support tools." },
  { slug: "cs2", name: "CS2", description: "Overlays, statistics, trading utilities and training tools." },
  { slug: "fortnite", name: "Fortnite", description: "Strategy planners, trackers and team utility tools." },
  { slug: "apex-legends", name: "Apex Legends", description: "Performance analytics and coaching companions." },
  { slug: "call-of-duty", name: "Call of Duty", description: "Stats, overlays, coaching and market utilities." },
  { slug: "league-of-legends", name: "League of Legends", description: "Build planners, coaching tools and account utilities." }
];

export const paymentMethods = [
  { id: "card", name: "Card", risk: "Low" as PaymentRisk, note: "Most familiar method. Stronger buyer protection when processed by a reputable seller." },
  { id: "paypal-gs", name: "PayPal G&S", risk: "Medium" as PaymentRisk, note: "Some buyer protection, but disputes still depend on seller evidence and platform rules." },
  { id: "paypal-ff", name: "PayPal F&F", risk: "High" as PaymentRisk, note: "Usually no purchase protection. Use verified sellers only." },
  { id: "crypto", name: "Crypto", risk: "Irreversible" as PaymentRisk, note: "Fast and common, but irreversible. Trust and delivery history matter a lot." },
  { id: "cashapp", name: "CashApp", risk: "High" as PaymentRisk, note: "Limited dispute path. Prefer high-trust resellers." },
  { id: "skrill", name: "Skrill", risk: "Medium" as PaymentRisk, note: "Useful alternative method with moderate risk." },
  { id: "wise", name: "Wise", risk: "Medium" as PaymentRisk, note: "Useful for bank transfers. Refunds depend on seller cooperation." },
  { id: "gift-cards", name: "Gift Cards", risk: "High" as PaymentRisk, note: "High scam risk. Use only verified sellers with strong vouch history." }
];

export const sellers = [
  {
    slug: "devstudio",
    name: "DevStudio",
    kind: "Official Provider" as SellerKind,
    status: "Verified",
    trustScore: 96,
    disputeRate: "0.8%",
    responseTime: "18 min",
    joined: "2023",
    plan: "Pro",
    offers: 6,
    paymentIds: ["card", "paypal-gs", "crypto"],
    description: "Official provider for analytics, overlay, and utility products with verified product data."
  },
  {
    slug: "novakeys",
    name: "NovaKeys",
    kind: "Verified Reseller" as SellerKind,
    status: "Verified",
    trustScore: 91,
    disputeRate: "1.6%",
    responseTime: "12 min",
    joined: "2022",
    plan: "Reseller Pro",
    offers: 22,
    paymentIds: ["crypto", "paypal-ff", "cashapp", "gift-cards"],
    description: "Fast-delivery reseller specializing in alternative payment methods and instant stock."
  },
  {
    slug: "bytemarket",
    name: "ByteMarket",
    kind: "Verified Reseller" as SellerKind,
    status: "Under Review",
    trustScore: 84,
    disputeRate: "3.2%",
    responseTime: "45 min",
    joined: "2024",
    plan: "Starter",
    offers: 9,
    paymentIds: ["crypto", "skrill", "wise", "gift-cards"],
    description: "Alternative payments reseller with manual delivery and mixed risk profile."
  },
  {
    slug: "aimforge-labs",
    name: "AimForge Labs",
    kind: "Official Provider" as SellerKind,
    status: "Restricted",
    trustScore: 68,
    disputeRate: "7.9%",
    responseTime: "2 hr",
    joined: "2024",
    plan: "Starter",
    offers: 4,
    paymentIds: ["crypto", "gift-cards"],
    description: "Provider currently restricted due to unresolved payment disputes."
  }
];

export const tools = [
  {
    slug: "phantomx-tracker",
    name: "PhantomX Tracker",
    gameSlug: "valorant",
    game: "Valorant",
    category: "Stats & Insights",
    providerName: "DevStudio",
    providerSlug: "devstudio",
    architecture: "External" as Architecture,
    toolStatus: "Working" as ToolStatus,
    productStatus: "Published",
    integrityIndex: 94,
    spamRisk: "Low",
    paymentRisk: "Low",
    sponsored: true,
    pinned: true,
    bumped: false,
    rating: 4.9,
    reviews: 326,
    verifiedReviews: 82,
    vouchCount: 326,
    clicks: 1320,
    lastUpdated: "Updated 2 days ago",
    priceFrom: "$27/mo",
    description: "Performance analytics and match insights for competitive Valorant players.",
    features: ["Match analytics", "Agent performance", "Round history", "Rank tracking"],
    tags: ["tracker", "analytics", "external", "verified"],
    paymentIds: ["card", "paypal-gs", "crypto", "paypal-ff", "gift-cards"]
  },
  {
    slug: "shadow-overlay",
    name: "Shadow Overlay",
    gameSlug: "cs2",
    game: "CS2",
    category: "Overlays",
    providerName: "DevStudio",
    providerSlug: "devstudio",
    architecture: "External" as Architecture,
    toolStatus: "Updating" as ToolStatus,
    productStatus: "Pending Review",
    integrityIndex: 78,
    spamRisk: "Medium",
    paymentRisk: "Medium",
    sponsored: false,
    pinned: false,
    bumped: true,
    rating: 4.4,
    reviews: 84,
    verifiedReviews: 21,
    vouchCount: 96,
    clicks: 412,
    lastUpdated: "Updated today",
    priceFrom: "$12/wk",
    description: "Clean in-game overlay with crosshair sync and map awareness.",
    features: ["Overlay HUD", "Crosshair sync", "Map awareness"],
    tags: ["overlay", "cs2", "updating"],
    paymentIds: ["crypto", "paypal-ff", "skrill", "wise"]
  },
  {
    slug: "stratpad-extension",
    name: "StratPad Extension",
    gameSlug: "fortnite",
    game: "Fortnite",
    category: "Utility",
    providerName: "DevStudio",
    providerSlug: "devstudio",
    architecture: "Cloud" as Architecture,
    toolStatus: "Not Working" as ToolStatus,
    productStatus: "Draft",
    integrityIndex: 41,
    spamRisk: "Low",
    paymentRisk: "Low",
    sponsored: false,
    pinned: false,
    bumped: false,
    rating: 0,
    reviews: 0,
    verifiedReviews: 0,
    vouchCount: 0,
    clicks: 0,
    lastUpdated: "Updated 18 days ago",
    priceFrom: "Free",
    description: "Strategy notes, team comms, and utility lineups for Fortnite teams.",
    features: ["Strategy notes", "Team comms", "Utility lineups"],
    tags: ["utility", "team", "draft"],
    paymentIds: ["card"]
  },
  {
    slug: "apex-sense-lab",
    name: "Apex Sense Lab",
    gameSlug: "apex-legends",
    game: "Apex Legends",
    category: "Coaching",
    providerName: "AimForge Labs",
    providerSlug: "aimforge-labs",
    architecture: "Cloud" as Architecture,
    toolStatus: "Working" as ToolStatus,
    productStatus: "Published",
    integrityIndex: 72,
    spamRisk: "High",
    paymentRisk: "High",
    sponsored: true,
    pinned: false,
    bumped: true,
    rating: 4.2,
    reviews: 118,
    verifiedReviews: 9,
    vouchCount: 75,
    clicks: 689,
    lastUpdated: "Updated 6 days ago",
    priceFrom: "$19/mo",
    description: "Aim review and coaching companion for Apex players.",
    features: ["Aim review", "Positioning notes", "Session history", "Coach reports"],
    tags: ["coaching", "cloud", "risk-review"],
    paymentIds: ["crypto", "gift-cards"]
  },
  {
    slug: "cod-market-watch",
    name: "COD Market Watch",
    gameSlug: "call-of-duty",
    game: "Call of Duty",
    category: "Market Utility",
    providerName: "ByteMarket",
    providerSlug: "bytemarket",
    architecture: "External" as Architecture,
    toolStatus: "Working" as ToolStatus,
    productStatus: "Published",
    integrityIndex: 83,
    spamRisk: "Medium",
    paymentRisk: "Medium",
    sponsored: false,
    pinned: false,
    bumped: true,
    rating: 4.6,
    reviews: 204,
    verifiedReviews: 44,
    vouchCount: 178,
    clicks: 944,
    lastUpdated: "Updated 4 days ago",
    priceFrom: "$8/day",
    description: "Market and inventory utility for Call of Duty communities.",
    features: ["Inventory alerts", "Price watch", "Seller watchlist", "Deal history"],
    tags: ["market", "utility", "reseller"],
    paymentIds: ["crypto", "skrill", "wise", "gift-cards"]
  },
  {
    slug: "rift-build-pro",
    name: "Rift Build Pro",
    gameSlug: "league-of-legends",
    game: "League of Legends",
    category: "Build Planner",
    providerName: "NovaKeys",
    providerSlug: "novakeys",
    architecture: "Cloud" as Architecture,
    toolStatus: "Working" as ToolStatus,
    productStatus: "Published",
    integrityIndex: 88,
    spamRisk: "Low",
    paymentRisk: "Medium",
    sponsored: false,
    pinned: true,
    bumped: false,
    rating: 4.7,
    reviews: 290,
    verifiedReviews: 53,
    vouchCount: 244,
    clicks: 1004,
    lastUpdated: "Updated 3 days ago",
    priceFrom: "$9/mo",
    description: "Champion build planner with matchup notes and ranked prep workflows.",
    features: ["Build planner", "Matchup notes", "Patch tracking", "Team sheets"],
    tags: ["planner", "cloud", "verified"],
    paymentIds: ["card", "paypal-gs", "crypto"]
  }
];

export const offers = [
  { toolSlug: "phantomx-tracker", sellerSlug: "devstudio", seller: "DevStudio", kind: "Official Provider" as SellerKind, price: "$29/mo", delivery: "Instant", stock: "Available", trustScore: 96, paymentIds: ["card", "paypal-gs", "crypto"] },
  { toolSlug: "phantomx-tracker", sellerSlug: "novakeys", seller: "NovaKeys", kind: "Verified Reseller" as SellerKind, price: "$27/mo", delivery: "15 min", stock: "Available", trustScore: 91, paymentIds: ["crypto", "paypal-ff", "cashapp", "gift-cards"] },
  { toolSlug: "phantomx-tracker", sellerSlug: "bytemarket", seller: "ByteMarket", kind: "Verified Reseller" as SellerKind, price: "$25/mo", delivery: "Manual", stock: "Limited", trustScore: 84, paymentIds: ["crypto", "skrill", "wise", "gift-cards"] },
  { toolSlug: "shadow-overlay", sellerSlug: "devstudio", seller: "DevStudio", kind: "Official Provider" as SellerKind, price: "$12/wk", delivery: "Instant", stock: "Available", trustScore: 96, paymentIds: ["card", "paypal-gs", "crypto"] },
  { toolSlug: "shadow-overlay", sellerSlug: "novakeys", seller: "NovaKeys", kind: "Verified Reseller" as SellerKind, price: "$10/wk", delivery: "15 min", stock: "Available", trustScore: 91, paymentIds: ["crypto", "paypal-ff", "cashapp"] },
  { toolSlug: "cod-market-watch", sellerSlug: "bytemarket", seller: "ByteMarket", kind: "Verified Reseller" as SellerKind, price: "$8/day", delivery: "Manual", stock: "Available", trustScore: 84, paymentIds: ["crypto", "skrill", "wise", "gift-cards"] }
];

export const reviews = [
  { toolSlug: "phantomx-tracker", user: "Vortex", title: "Clean, fast, and reliable", rating: 5, verified: true, accountAge: "2y", body: "The stats feel accurate and the UI is simple to understand." },
  { toolSlug: "phantomx-tracker", user: "SentinelMain", title: "Good tool but setup was confusing", rating: 4, verified: false, accountAge: "7mo", body: "Useful once installed. Setup instructions could be better." },
  { toolSlug: "shadow-overlay", user: "Hexa", title: "Nice overlay design", rating: 4, verified: true, accountAge: "1y", body: "Overlay is clean. Waiting for the next update before using it full time." }
];

export const signals = [
  { title: "Suspicious positive spike", target: "Apex Sense Lab", severity: "High", detail: "14 positive reviews from accounts created within 48 hours." },
  { title: "Repeated language pattern", target: "Shadow Overlay", severity: "Medium", detail: "6 reviews share near-identical wording around setup and delivery." },
  { title: "Gift card dispute cluster", target: "ByteMarket", severity: "Medium", detail: "3 recent reports mention gift card delivery delays." },
  { title: "Verified review strength", target: "PhantomX Tracker", severity: "Low", detail: "82 verified reviews with healthy account age distribution." }
];

export const outreachScripts = [
  {
    seller: "DevStudio",
    subject: "Claim your official Standard provider page",
    body: "Your tool PhantomX Tracker currently ranks #1 for Valorant analytics on Standard. Claim your provider page to certify pricing, features, accepted payments, and official delivery options."
  },
  {
    seller: "NovaKeys",
    subject: "Become a verified reseller on Standard",
    body: "NovaKeys is already visible as a high-trust alternative payment reseller. Verify your payment methods and delivery policy to earn a Verified Reseller badge."
  }
];

export function getPayment(id: string) { return paymentMethods.find((method) => method.id === id); }
export function getTool(slug: string) { return tools.find((tool) => tool.slug === slug); }
export function getSeller(slug: string) { return sellers.find((seller) => seller.slug === slug); }
export function getGame(slug: string) { return games.find((game) => game.slug === slug); }
export function paymentsFor(ids: string[]) { return ids.map(getPayment).filter(Boolean) as typeof paymentMethods; }
export function offersForTool(slug: string) { return offers.filter((offer) => offer.toolSlug === slug); }
