import Link from "next/link";
import { Badge, Button, Card, FeaturePill, Nav, Shell } from "@/components/ui";
import { games } from "@/lib/data";

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <Card className="p-6 text-left">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/15 text-2xl">{icon}</div>
        <div>
          <h3 className="font-bold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
        </div>
      </div>
    </Card>
  );
}

export default function Home() {
  return (
    <Shell>
      <Nav />
      <section className="mx-auto max-w-5xl pb-16 pt-16 text-center">
        <Badge>Trusted gaming software discovery</Badge>
        <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight md:text-7xl">
          Find the <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">best tools</span><br />for every game.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Compare features, reviews, tool status, seller trust, and fair rankings without the noise.
        </p>
        <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-purple-400/30 bg-slate-950/70 p-2 shadow-2xl shadow-purple-500/10 backdrop-blur">
          <div className="flex flex-1 items-center gap-3 px-4 text-left text-slate-500"><span>⌕</span><span>Search tools, games, or features...</span></div>
          <Button href="/rankings">Search</Button>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {games.map((game) => <Link key={game} href={`/rankings?game=${encodeURIComponent(game)}`}><FeaturePill>{game}</FeaturePill></Link>)}
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
        <FeatureCard icon="🏆" title="Organic rankings" description="Rankings are powered by trust, reviews, freshness, and community signals." />
        <FeatureCard icon="🧩" title="Feature comparison" description="Users compare tools by what they actually do, not just ratings." />
        <FeatureCard icon="⚡" title="Transparent boosts" description="Sellers can sponsor visibility, but boosts never buy rank." />
      </section>
      <section className="mx-auto mt-12 grid max-w-5xl gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-left md:grid-cols-4">
        {[["5.6K+","Tools listed"],["24.8K+","Verified reviews"],["1.1K+","Trusted sellers"],["38+","Games covered"]].map(([value,label])=><div key={label}><div className="text-3xl font-black">{value}</div><div className="mt-1 text-sm text-slate-400">{label}</div></div>)}
      </section>
    </Shell>
  );
}
