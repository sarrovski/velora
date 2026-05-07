# Velora Hostable Demo

A fully hostable Next.js demo for Velora, a trusted ranking platform for gaming tools.

## Included pages

- `/` Landing page
- `/rankings` Tool rankings
- `/tools/phantomx-tracker` Public tool page
- `/sellers/devstudio` Public seller page
- `/pricing` Seller plans
- `/dashboard` Seller dashboard
- `/admin` Admin control center

## Product logic included

- Seller plans with product limits
- Product features visible to users
- Tool status: Working / Updating / Not Working
- Platform status: Published / Pending Review / Draft / Suspended
- Sponsored boosts separated from organic rankings
- Reviews and seller appeals
- Admin moderation/control center
- Mock analytics and audit log

## Run locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Deploy to Vercel

1. Upload this project to GitHub.
2. Go to Vercel.
3. Import the repository.
4. Deploy.

No database or environment variables required for this demo.
