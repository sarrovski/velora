import { Card, Nav, SectionHeader, Shell } from "@/components/ui";
import {
  GameFilterBar,
  PaymentFilterBar,
  ProductCard,
} from "@/components/marketplace-client";
import { games, listings, paymentMethods } from "@/lib/data";

export default function MarketplacePage({
  searchParams,
}: {
  searchParams?: { game?: string; payment?: string };
}) {
  const selectedGame = searchParams?.game ?? "All";
  const selectedPayment = searchParams?.payment ?? "All";

  // Filtering logic is unchanged — purely visual components updated
  const filtered = listings.filter((listing) => {
    const matchesGame =
      selectedGame === "All" || listing.game === selectedGame;
    const matchesPayment =
      selectedPayment === "All" ||
      listing.verifiedPayments.includes(selectedPayment) ||
      (selectedPayment === "Pending" &&
        listing.verifiedPayments.length === 0);
    return matchesGame && matchesPayment;
  });

  return (
    <Shell>
      <Nav />
      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeader
          eyebrow="Marketplace"
          title="Choose a game, then compare listings"
          text="A simpler marketplace: game first, then product references, sellers, resellers, payment methods, and trust signals."
        />

        <Card className="mt-8 p-5">
          <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
            <div>
              <div className="text-sm font-semibold text-slate-300">Games</div>
              <div className="mt-3">
                <GameFilterBar games={games} selected={selectedGame} />
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-300">
                Payment method
              </div>
              <div className="mt-3">
                <PaymentFilterBar
                  paymentMethods={paymentMethods}
                  selected={selectedPayment}
                  selectedGame={selectedGame}
                />
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-8 grid gap-4">
          {filtered.map((listing, index) => (
            <ProductCard key={listing.slug} listing={listing} index={index} />
          ))}
        </div>
      </section>
    </Shell>
  );
}
