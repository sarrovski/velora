# Standard v7 — Real Listings Framework

Frontend-only MVP for Standard.

## What this version does

- Uses real-listing framework instead of fictional finalized product pages.
- Listings can be `Unclaimed`, `Claim Pending`, `Claimed`, `Verified`, `Restricted`, or `Hidden`.
- Public listing pages show limited factual information and a seller claim CTA.
- Payment methods stay `Pending verification` until a seller claims and verifies the listing.
- No Prisma, no database, no auth, no Stripe, no scraping logic.

## Routes

- `/`
- `/marketplace`
- `/listings/phantomx-tracker`
- `/claim`
- `/seller`
- `/admin`

## Run

```bash
npm install
npm run build
npm run dev
```

## Add real references

Manually add reviewed references to:

```txt
src/lib/real-listings.ts
```

Do not copy marketing descriptions, screenshots, pricing claims, or direct purchase instructions without approval.
