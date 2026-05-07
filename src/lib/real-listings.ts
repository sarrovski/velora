export type ClaimStatus =
  | "Unclaimed"
  | "Claim Pending"
  | "Claimed"
  | "Verified"
  | "Restricted"
  | "Hidden";

export type ListingReference = {
  slug: string;
  publicName: string;
  publicSellerName: string;
  game: string;
  category: string;
  architecture: "Internal" | "External" | "DMA" | "Cloud" | "Unknown";
  status: ClaimStatus;
  sourceDomain: string;
  sourceType: "Forum reference" | "Marketplace reference" | "Seller submitted" | "Manual research";
  publicActivity?: {
    vouchCount?: number;
    replies?: number;
    views?: number;
    lastSeen?: string;
  };
  verifiedFacts: {
    features: string[];
    pricePoints: string[];
    paymentMethods: string[];
    delivery: string;
    refundPolicy: string;
  };
  pendingFacts: string[];
  integrity: {
    score: number | null;
    confidence: "Low" | "Medium" | "High" | "Pending";
    reviewSignals: string[];
    paymentRisk: "Low" | "Medium" | "High" | "Pending";
  };
  claimCta: string;
};

export const games = [
  "Valorant",
  "CS2",
  "Fortnite",
  "Apex Legends",
  "Call of Duty",
  "League of Legends",
  "Escape from Tarkov",
  "Rust",
];

export const paymentMethods = [
  "Crypto",
  "PayPal G&S",
  "PayPal F&F",
  "Card",
  "CashApp",
  "Skrill",
  "Wise",
  "Gift Cards",
  "Bank Transfer",
];

export const listings: ListingReference[] = [
  {
    slug: "phantomx-tracker",
    publicName: "PhantomX Tracker",
    publicSellerName: "PhantomX Labs",
    game: "Valorant",
    category: "Analytics / Overlay",
    architecture: "External",
    status: "Unclaimed",
    sourceDomain: "public forum reference",
    sourceType: "Manual research",
    publicActivity: {
      vouchCount: 326,
      replies: 184,
      views: 28400,
      lastSeen: "Recently active",
    },
    verifiedFacts: {
      features: [],
      pricePoints: [],
      paymentMethods: [],
      delivery: "Pending seller verification",
      refundPolicy: "Pending seller verification",
    },
    pendingFacts: [
      "Payment methods need seller confirmation",
      "Technical feature set needs seller confirmation",
      "Pricing needs seller confirmation",
      "Provider authorization not verified yet",
    ],
    integrity: {
      score: null,
      confidence: "Pending",
      reviewSignals: ["Reference activity exists", "Seller has not claimed this listing yet"],
      paymentRisk: "Pending",
    },
    claimCta: "Are you PhantomX Labs? Claim this listing to verify pricing, payments, and product facts.",
  },
  {
    slug: "shadow-overlay-reference",
    publicName: "Shadow Overlay Reference",
    publicSellerName: "Shadow Market",
    game: "CS2",
    category: "Overlay / Utility",
    architecture: "Unknown",
    status: "Unclaimed",
    sourceDomain: "public marketplace reference",
    sourceType: "Manual research",
    publicActivity: {
      vouchCount: 84,
      replies: 51,
      views: 6840,
      lastSeen: "Last activity unknown",
    },
    verifiedFacts: {
      features: [],
      pricePoints: [],
      paymentMethods: [],
      delivery: "Pending seller verification",
      refundPolicy: "Pending seller verification",
    },
    pendingFacts: [
      "Architecture unverified",
      "Payment profile unverified",
      "Seller identity unverified",
    ],
    integrity: {
      score: null,
      confidence: "Pending",
      reviewSignals: ["Limited public metadata", "Awaiting seller claim"],
      paymentRisk: "Pending",
    },
    claimCta: "Claim this listing to replace unverified metadata with verified seller facts.",
  },
  {
    slug: "reseller-offer-template",
    publicName: "Reseller Offer Template",
    publicSellerName: "Unverified Reseller",
    game: "Fortnite",
    category: "Reseller Offer",
    architecture: "Unknown",
    status: "Claim Pending",
    sourceDomain: "seller submitted draft",
    sourceType: "Seller submitted",
    publicActivity: {
      vouchCount: 0,
      replies: 0,
      views: 0,
      lastSeen: "Submitted for review",
    },
    verifiedFacts: {
      features: [],
      pricePoints: [],
      paymentMethods: ["Crypto", "PayPal G&S"],
      delivery: "Pending admin review",
      refundPolicy: "Pending admin review",
    },
    pendingFacts: [
      "Proof of reseller authorization required",
      "Payment methods require verification",
      "Refund policy requires verification",
    ],
    integrity: {
      score: null,
      confidence: "Low",
      reviewSignals: ["New submission", "No verified history"],
      paymentRisk: "Medium",
    },
    claimCta: "Finish reseller verification to display this offer publicly.",
  },
];

export const claimRequests = [
  {
    id: "claim-001",
    listing: "PhantomX Tracker",
    requester: "phantomx-owner@example.com",
    type: "Provider claim",
    status: "Needs proof",
    requiredProof: ["Domain ownership", "Product panel screenshot", "Payment policy"],
  },
  {
    id: "claim-002",
    listing: "Reseller Offer Template",
    requester: "reseller@example.com",
    type: "Reseller application",
    status: "Under review",
    requiredProof: ["Authorization proof", "Stock proof", "Refund policy"],
  },
];

export const outreachScripts = [
  {
    title: "Provider claim outreach",
    body:
      "Your listing is referenced on Standard but is currently unclaimed. Claim it to verify official pricing, accepted payments, product facts, and support details.",
  },
  {
    title: "Reseller application outreach",
    body:
      "Standard users often search by payment method. Apply as a verified reseller to list accepted payments, delivery time, stock, and support policy.",
  },
  {
    title: "Payment verification outreach",
    body:
      "Your listing has incomplete payment information. Verify accepted payment methods to improve buyer confidence and reduce support friction.",
  },
];
