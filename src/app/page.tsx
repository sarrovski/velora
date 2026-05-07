import { games, tools, paymentMethods } from "@/lib/data";
import { Button, Card, Nav, SectionTitle, Shell, Stat, Badge } from "@/components/ui";
import { ToolCard } from "@/components/tool-card";
import Link from "next/link";

export default function Home() {
  const topTools = [...tools].sort((a, b) => b.integrityIndex - a.integrityIndex).slice(0, 3);
  return (
    <Shell>
      <Nav />
      <section className="mx-auto max-w-5xl py-20 text-center">
        <Badge tone="purple">Trusted tools + safer payment discovery</Badge>
        <h1 className="mt-6 text-5xl font-black leading-[1.03] tracking-tight md:text-7xl">
          Find the <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">standard</span><br />for every game.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Compare gaming tools by integrity, features, seller trust, accepted payments, delivery speed, and verified reviews.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/rankings">Explore Rankings</Button>
          <Button href="/payments" variant="secondary">Find Payment Options</Button>
          <Button href="/dashboard" variant="secondary">Seller Dashboard</Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <Stat label="Tracked Tools" value="46" detail="Original Standard dataset" />
        <Stat label="Verified Reviews" value="1.8K" detail="Weighted 5x in scoring" />
        <Stat label="Payment Methods" value={paymentMethods.length} detail="Risk-labeled options" />
        <Stat label="Open Signals" value="4" detail="Anti-spam / risk center" />
      </section>

      <SectionTitle eyebrow="Top integrity" title="Highest-trust tools right now" text="Sponsored placements are labeled and kept separate from organic ranking." />
      <section className="mt-6 grid gap-4">
        {topTools.map((tool, index) => <ToolCard key={tool.slug} tool={tool} rank={index + 1} />)}
      </section>

      <SectionTitle eyebrow="Games" title="Browse by game" text="Users usually know the game first. Standard helps them find the best tool and the safest buying path." />
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {games.map((game) => (
          <Link key={game.slug} href={`/games/${game.slug}`} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-purple-400/40 hover:bg-purple-500/[0.06]">
            <h3 className="text-2xl font-black">{game.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{game.description}</p>
          </Link>
        ))}
      </section>

      <SectionTitle eyebrow="Payments matter" title="A marketplace advantage sellers actually need" text="Standard highlights which providers and resellers accept crypto, PayPal, card, gift cards, Wise, Skrill, and more — with risk labels." />
      <Card className="mt-6 p-6">
        <div className="grid gap-3 md:grid-cols-4">
          {paymentMethods.slice(0, 8).map((method) => <div key={method.id} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div className="font-bold">{method.name}</div><div className="mt-1 text-xs text-slate-500">Risk: {method.risk}</div></div>)}
        </div>
      </Card>
    </Shell>
  );
}
