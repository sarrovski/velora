import { ListingCard } from "@/components/listing-card";
import { Card, Nav, SectionHeader, Shell, Badge } from "@/components/ui";
import { games, listings, paymentMethods } from "@/lib/real-listings";

export default function MarketplacePage({
  searchParams,
}: {
  searchParams?: { game?: string; payment?: string };
}) {
  const selectedGame = searchParams?.game ?? "All";
  const selectedPayment = searchParams?.payment ?? "All";

  const filtered = listings.filter((listing) => {
    const matchesGame = selectedGame === "All" || listing.game === selectedGame;
    const matchesPayment =
      selectedPayment === "All" ||
      listing.verifiedFacts.paymentMethods.includes(selectedPayment) ||
      (selectedPayment === "Pending" && listing.verifiedFacts.paymentMethods.length === 0);
    return matchesGame && matchesPayment;
  });

  return (
    <Shell>
      <Nav />
      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeader
          eyebrow="Marketplace"
          title="Choose a game, then compare references"
          text="This page is intentionally simple: users choose a game and see available claimed or unclaimed listing references."
        />

        <Card className="mt-8 p-5">
          <div className="grid gap-5 lg:grid-cols-[1fr_260px]">
            <div>
              <div className="text-sm font-semibold text-slate-300">Games</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["All", ...games].map((game) => (
                  <a
                    key={game}
                    href={`/marketplace${game === "All" ? "" : `?game=${encodeURIComponent(game)}`}`}
                    className={`rounded-full border px-3 py-1.5 text-sm ${
                      selectedGame === game
                        ? "border-purple-400/40 bg-purple-500/15 text-purple-100"
                        : "border-white/10 bg-white/[0.04] text-slate-300"
                    }`}
                  >
                    {game}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-300">Payment filter</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["All", "Pending", ...paymentMethods.slice(0, 5)].map((payment) => (
                  <a
                    key={payment}
                    href={`/marketplace?${selectedGame !== "All" ? `game=${encodeURIComponent(selectedGame)}&` : ""}payment=${encodeURIComponent(payment)}`}
                    className={`rounded-full border px-3 py-1.5 text-sm ${
                      selectedPayment === payment
                        ? "border-cyan-400/40 bg-cyan-500/15 text-cyan-100"
                        : "border-white/10 bg-white/[0.04] text-slate-300"
                    }`}
                  >
                    {payment}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-8 grid gap-4">
          {filtered.map((listing, index) => (
            <ListingCard key={listing.slug} listing={listing} index={index} />
          ))}
        </div>

        <Card className="mt-8 p-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="amber">Important</Badge>
            <p className="text-sm text-slate-400">
              Unclaimed references are not endorsements. Pricing, payments, features, and delivery are hidden until verified.
            </p>
          </div>
        </Card>
      </section>
    </Shell>
  );
}
