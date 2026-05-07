import { paymentMethods, tools } from "@/lib/data";
import { Nav, SectionTitle, Shell, Card, Badge } from "@/components/ui";
import { ToolCard } from "@/components/tool-card";

export default function RankingsPage({ searchParams }: { searchParams?: { game?: string; payment?: string; status?: string } }) {
  const selectedGame = searchParams?.game;
  const selectedPayment = searchParams?.payment;
  const selectedStatus = searchParams?.status;
  const ranked = tools
    .filter((tool) => !selectedGame || tool.game === selectedGame || tool.gameSlug === selectedGame)
    .filter((tool) => !selectedPayment || tool.paymentIds.includes(selectedPayment))
    .filter((tool) => !selectedStatus || tool.toolStatus === selectedStatus)
    .sort((a, b) => b.integrityIndex - a.integrityIndex);
  return (
    <Shell>
      <Nav />
      <SectionTitle eyebrow="Rankings" title="Ranked gaming tools" text="Filter by game, tool status, payment method, seller trust, and organic integrity signals." />
      <Card className="mt-8 p-5">
        <div className="flex flex-wrap gap-2">
          <Badge tone="purple">Filters</Badge>
          <a href="/rankings" className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">All</a>
          <a href="/rankings?game=Valorant" className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Valorant</a>
          <a href="/rankings?game=CS2" className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">CS2</a>
          <a href="/rankings?status=Working" className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Working</a>
          {paymentMethods.slice(0, 5).map((method) => <a key={method.id} href={`/rankings?payment=${method.id}`} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{method.name}</a>)}
        </div>
      </Card>
      <section className="mt-6 grid gap-4">
        {ranked.map((tool, index) => <ToolCard key={tool.slug} tool={tool} rank={index + 1} />)}
      </section>
    </Shell>
  );
}
