import Link from "next/link";
import { Card, Nav, SectionHeader, Shell, Badge } from "@/components/ui";
import { games, listings } from "@/lib/real-listings";

export default function HomePage() {
  return (
    <Shell>
      <Nav />
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12">
        <div className="mx-auto max-w-4xl text-center">
          <Badge tone="purple">Real listing references, not copied marketing</Badge>
          <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight md:text-7xl">
            Find the <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">standard</span>
            <br />
            before you buy.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Standard helps users discover real marketplace references, compare seller trust,
            and let providers or resellers claim listings to verify payments, pricing, and product facts.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/marketplace" className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold">
              Open Marketplace
            </Link>
            <Link href="/claim" className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold">
              Claim a Listing
            </Link>
          </div>
        </div>

        <section className="mt-14 grid gap-4 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-xl font-bold">Unclaimed first</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Real-world references can appear as unclaimed records until the provider or reseller verifies the facts.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold">Payments matter</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Payment methods, delivery time, and refund policy are highlighted because they are key trust factors.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold">No paid rank</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Boosts and featured placements can exist later, but they never change organic integrity ranking.
            </p>
          </Card>
        </section>

        <section className="mt-14">
          <SectionHeader
            eyebrow="Game hubs"
            title="Start with a game"
            text="Users choose the game first, then compare real references and verified seller facts inside that category."
          />
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {games.map((game) => (
              <Link
                key={game}
                href={`/marketplace?game=${encodeURIComponent(game)}`}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-purple-400/40"
              >
                <div className="font-bold">{game}</div>
                <div className="mt-1 text-sm text-slate-500">
                  {listings.filter((listing) => listing.game === game).length} references
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </Shell>
  );
}
