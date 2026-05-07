export type ToolStatus = "Working" | "Updating" | "Not Working";
export type SellerStatus = "Verified" | "Under Review" | "Restricted";
export type ProductStatus = "Published" | "Pending Review" | "Draft" | "Suspended";

export const games = [
  { slug: "valorant", name: "Valorant", genre: "Tactical FPS", tools: 8, hot: true },
  { slug: "cs2", name: "CS2", genre: "Tactical FPS", tools: 7, hot: true },
  { slug: "fortnite", name: "Fortnite", genre: "Battle Royale", tools: 6, hot: true },
  { slug: "apex-legends", name: "Apex Legends", genre: "Battle Royale", tools: 5, hot: false },
  { slug: "call-of-duty", name: "Call of Duty", genre: "FPS", tools: 5, hot: false },
  { slug: "league-of-legends", name: "League of Legends", genre: "MOBA", tools: 4, hot: false },
  { slug: "escape-from-tarkov", name: "Escape from Tarkov", genre: "Extraction", tools: 4, hot: false },
  { slug: "guild-wars", name: "Guild Wars", genre: "MMORPG", tools: 3, hot: false },
];

export const sellers = [
  {
    slug: "devstudio",
    name: "DevStudio",
    status: "Verified" as SellerStatus,
    plan: "Pro",
    productSlots: "7/10",
    trustScore: 96,
    positive: 428,
    neutral: 12,
    negative: 3,
    disputeRate: "0.8%",
    responseTime: "2h avg",
    joined: "Mar 2026",
    description: "Polished analytics, overlay, and utility tools for competitive players.",
  },
  {
    slug: "aimforge-labs",
    name: "AimForge Labs",
    status: "Under Review" as SellerStatus,
    plan: "Starter",
    productSlots: "4/5",
    trustScore: 72,
    positive: 91,
    neutral: 8,
    negative: 6,
    disputeRate: "4.1%",
    responseTime: "9h avg",
    joined: "Nov 2025",
    description: "Aim training utilities, overlays, and tactical helpers.",
  },
  {
    slug: "overlayworks",
    name: "OverlayWorks",
    status: "Verified" as SellerStatus,
    plan: "Big Seller",
    productSlots: "18/30",
    trustScore: 91,
    positive: 301,
    neutral: 19,
    negative: 5,
    disputeRate: "1.4%",
    responseTime: "4h avg",
    joined: "Jan 2025",
    description: "High-quality overlays and productivity extensions for gamers.",
  },
  {
    slug: "scriptbay",
    name: "ScriptBay",
    status: "Restricted" as SellerStatus,
    plan: "Starter",
    productSlots: "3/5",
    trustScore: 38,
    positive: 42,
    neutral: 17,
    negative: 21,
    disputeRate: "13.2%",
    responseTime: "2d avg",
    joined: "Apr 2026",
    description: "Restricted seller under manual moderation due to repeated disputes.",
  },
];

export const features = [
  "Match analytics", "Agent performance", "Round history", "Rank tracking", "Overlay HUD", "Crosshair sync",
  "Map awareness", "Strategy notes", "Team comms", "Utility lineups", "Aim routines", "Recoil practice",
  "Patch monitoring", "Build optimizer", "Item tracker", "Route planner", "Market watcher", "Performance alerts",
];

export const tools = [
  {
    slug: "phantomx-tracker", name: "PhantomX Tracker", game: "Valorant", gameSlug: "valorant", category: "Stats & Insights",
    seller: "DevStudio", sellerSlug: "devstudio", status: "Published" as ProductStatus, toolStatus: "Working" as ToolStatus,
    sponsored: true, pinned: true, bumped: true, rating: 4.9, reviews: 326, clicks: 1320, views: 28400, replies: 118,
    lastUpdated: "Today", trustScore: 96, risk: "Low", pricing: "Freemium",
    description: "Performance analytics and match insights for competitive Valorant players.",
    tags: ["tracker", "analytics", "ranked"],
    features: ["Match analytics", "Agent performance", "Round history", "Rank tracking"],
  },
  {
    slug: "shadow-overlay", name: "Shadow Overlay", game: "CS2", gameSlug: "cs2", category: "Overlays",
    seller: "DevStudio", sellerSlug: "devstudio", status: "Pending Review" as ProductStatus, toolStatus: "Updating" as ToolStatus,
    sponsored: false, pinned: false, bumped: true, rating: 4.4, reviews: 84, clicks: 412, views: 6840, replies: 39,
    lastUpdated: "Yesterday", trustScore: 96, risk: "Medium", pricing: "Paid",
    description: "A clean in-game overlay for CS2 players who want better visibility and utility context.",
    tags: ["overlay", "hud", "cs2"],
    features: ["Overlay HUD", "Crosshair sync", "Map awareness"],
  },
  {
    slug: "stratpad-extension", name: "StratPad Extension", game: "Fortnite", gameSlug: "fortnite", category: "Utility",
    seller: "DevStudio", sellerSlug: "devstudio", status: "Draft" as ProductStatus, toolStatus: "Not Working" as ToolStatus,
    sponsored: false, pinned: false, bumped: false, rating: 0, reviews: 0, clicks: 0, views: 0, replies: 0,
    lastUpdated: "3 days ago", trustScore: 96, risk: "Low", pricing: "Freemium",
    description: "Strategy notes, team comms, and utility lineups for Fortnite teams.",
    tags: ["strategy", "team", "utility"],
    features: ["Strategy notes", "Team comms", "Utility lineups"],
  },
  {
    slug: "aimforge-pro", name: "AimForge Pro", game: "Valorant", gameSlug: "valorant", category: "Aim Training",
    seller: "AimForge Labs", sellerSlug: "aimforge-labs", status: "Published" as ProductStatus, toolStatus: "Working" as ToolStatus,
    sponsored: false, pinned: false, bumped: true, rating: 4.6, reviews: 149, clicks: 820, views: 14200, replies: 57,
    lastUpdated: "Today", trustScore: 72, risk: "Medium", pricing: "Paid",
    description: "Aim routines, recoil practice, and ranked warmups for tactical FPS players.",
    tags: ["aim", "training", "fps"],
    features: ["Aim routines", "Recoil practice", "Performance alerts"],
  },
  {
    slug: "apex-route-lab", name: "Apex Route Lab", game: "Apex Legends", gameSlug: "apex-legends", category: "Route Planner",
    seller: "OverlayWorks", sellerSlug: "overlayworks", status: "Published" as ProductStatus, toolStatus: "Working" as ToolStatus,
    sponsored: true, pinned: false, bumped: false, rating: 4.7, reviews: 201, clicks: 940, views: 16800, replies: 73,
    lastUpdated: "2 days ago", trustScore: 91, risk: "Low", pricing: "Freemium",
    description: "Route planning, rotation notes, and ranked drop analysis for Apex teams.",
    tags: ["routes", "ranked", "team"],
    features: ["Route planner", "Map awareness", "Team comms"],
  },
  {
    slug: "warzone-loadout-hub", name: "Warzone Loadout Hub", game: "Call of Duty", gameSlug: "call-of-duty", category: "Build Optimizer",
    seller: "OverlayWorks", sellerSlug: "overlayworks", status: "Published" as ProductStatus, toolStatus: "Working" as ToolStatus,
    sponsored: false, pinned: true, bumped: true, rating: 4.8, reviews: 288, clicks: 1110, views: 21100, replies: 101,
    lastUpdated: "Today", trustScore: 91, risk: "Low", pricing: "Free",
    description: "Weapon builds, patch tracking, and performance alerts for Call of Duty players.",
    tags: ["loadout", "patch", "builds"],
    features: ["Build optimizer", "Patch monitoring", "Performance alerts"],
  },
  {
    slug: "lol-buildsmith", name: "LoL Buildsmith", game: "League of Legends", gameSlug: "league-of-legends", category: "Build Optimizer",
    seller: "OverlayWorks", sellerSlug: "overlayworks", status: "Published" as ProductStatus, toolStatus: "Updating" as ToolStatus,
    sponsored: false, pinned: false, bumped: false, rating: 4.5, reviews: 132, clicks: 604, views: 9200, replies: 44,
    lastUpdated: "Yesterday", trustScore: 91, risk: "Low", pricing: "Freemium",
    description: "Champion builds, patch-aware item suggestions, and matchup notes.",
    tags: ["moba", "builds", "patch"],
    features: ["Build optimizer", "Patch monitoring", "Item tracker"],
  },
  {
    slug: "tarkov-market-watch", name: "Tarkov Market Watch", game: "Escape from Tarkov", gameSlug: "escape-from-tarkov", category: "Market Watcher",
    seller: "DevStudio", sellerSlug: "devstudio", status: "Published" as ProductStatus, toolStatus: "Working" as ToolStatus,
    sponsored: false, pinned: false, bumped: true, rating: 4.6, reviews: 97, clicks: 510, views: 8700, replies: 31,
    lastUpdated: "Today", trustScore: 96, risk: "Low", pricing: "Paid",
    description: "Track market movement, item values, and route profitability for Tarkov runs.",
    tags: ["market", "items", "routes"],
    features: ["Market watcher", "Item tracker", "Route planner"],
  },
  {
    slug: "guildmate-helper", name: "GuildMate Helper", game: "Guild Wars", gameSlug: "guild-wars", category: "Utility",
    seller: "OverlayWorks", sellerSlug: "overlayworks", status: "Published" as ProductStatus, toolStatus: "Working" as ToolStatus,
    sponsored: false, pinned: false, bumped: false, rating: 4.3, reviews: 62, clicks: 240, views: 4300, replies: 18,
    lastUpdated: "5 days ago", trustScore: 91, risk: "Low", pricing: "Free",
    description: "Utility notes, route planning, and team organization for Guild Wars players.",
    tags: ["utility", "mmorpg", "team"],
    features: ["Strategy notes", "Route planner", "Team comms"],
  },
  {
    slug: "scriptbay-macro-kit", name: "ScriptBay Macro Kit", game: "CS2", gameSlug: "cs2", category: "Macro Utility",
    seller: "ScriptBay", sellerSlug: "scriptbay", status: "Suspended" as ProductStatus, toolStatus: "Not Working" as ToolStatus,
    sponsored: false, pinned: false, bumped: false, rating: 2.1, reviews: 31, clicks: 80, views: 2100, replies: 62,
    lastUpdated: "12 days ago", trustScore: 38, risk: "High", pricing: "Paid",
    description: "Suspended listing under admin review due to repeated user reports.",
    tags: ["restricted", "macro", "reports"],
    features: ["Team comms"],
  },
];

export const reviews = [
  { toolSlug: "phantomx-tracker", user: "Vortex", title: "Clean, fast, and reliable", rating: 5, body: "The stats feel accurate and the UI is simple to understand.", status: "Published" },
  { toolSlug: "phantomx-tracker", user: "SentinelMain", title: "Good tool but setup was confusing", rating: 4, body: "Useful once installed. Setup instructions could be better.", status: "Appealed" },
  { toolSlug: "aimforge-pro", user: "Kova", title: "Great routines", rating: 5, body: "Good warmups before ranked. Needs more CS2 presets.", status: "Published" },
  { toolSlug: "scriptbay-macro-kit", user: "Luma", title: "Would avoid for now", rating: 2, body: "Support was slow and the listing changed after purchase.", status: "Flagged" },
];

export const reports = [
  { id: "REP-1024", target: "ScriptBay", type: "Seller risk", status: "Open", severity: "High", note: "Multiple disputes in 7 days." },
  { id: "REP-1025", target: "ScriptBay Macro Kit", type: "Product claim", status: "Open", severity: "High", note: "Product status mismatch reported." },
  { id: "REP-1026", target: "Shadow Overlay", type: "Update delay", status: "Monitoring", severity: "Medium", note: "Seller says patch compatibility is being fixed." },
];

export const auditLogs = [
  "Admin restricted ScriptBay after repeated disputes",
  "PhantomX Tracker boost renewed for 7 days",
  "Shadow Overlay moved to Pending Review",
  "Review appeal created by DevStudio",
  "Warzone Loadout Hub pinned by Standard team",
];

export const plans = [
  { name: "Starter", price: "$29", products: 5, boosts: 1, appeals: 1, analytics: "Basic", description: "For new sellers testing Standard." },
  { name: "Pro", price: "$79", products: 10, boosts: 5, appeals: 3, analytics: "Advanced", description: "For serious sellers with multiple tools.", highlighted: true },
  { name: "Big Seller", price: "$199", products: 30, boosts: 15, appeals: 10, analytics: "Pro", description: "For larger sellers with a full catalog." },
];
