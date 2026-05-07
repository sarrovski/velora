import { plans } from "@/lib/data";
import { Badge, Button, Card, Nav, Shell } from "@/lib/ui";

export default function PricingPage() {
  return (
    <Shell>
      <Nav />
      <section className="mt-14 text-center"><Badge>Seller subscriptions</Badge><h1 className="mt-4 text-5xl font-black">Simple plans for sellers</h1><p className="mx-auto mt-3 max-w-2xl text-slate-400">Subscriptions control how many products sellers can list. Boosts are separate paid campaigns.</p></section>
      <section className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => <Card key={plan.name} className={`p-6 ${plan.name === "Pro" ? "border-purple-400/40 bg-purple-500/10" : ""}`}><div className="flex items-start justify-between"><h2 className="text-3xl font-black">{plan.name}</h2>{plan.name === "Pro" && <Badge tone="green">Recommended</Badge>}</div><div className="mt-6 text-4xl font-black">{plan.price}</div><div className="mt-2 text-sm text-slate-500">Up to {plan.productLimit} products</div><div className="mt-6 space-y-3 text-sm text-slate-300"><div>✓ Seller public page</div><div>✓ {plan.productLimit} product slots</div><div>✓ {plan.boostLimit} active boosts</div><div>✓ {plan.appealLimit} review appeals</div></div><div className="mt-6"><Button href="/dashboard">Choose plan</Button></div></Card>)}
      </section>
    </Shell>
  );
}
