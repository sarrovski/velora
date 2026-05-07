import { Button, Card, Nav, Shell } from "@/components/ui";
import { plans } from "@/lib/data";

export default function PricingPage() {
  return (
    <Shell>
      <Nav />
      <section className="mx-auto mt-14 max-w-3xl text-center"><p className="text-sm font-medium text-purple-300">Seller pricing</p><h1 className="mt-3 text-5xl font-black tracking-tight">Simple plans based on product slots.</h1><p className="mt-4 text-slate-400">Sellers pay for catalog capacity. Boosts are separate and always labeled as sponsored.</p></section>
      <section className="mt-10 grid gap-5 md:grid-cols-3">{plans.map((plan) => <Card key={plan.name} className={`p-6 ${plan.recommended ? "border-purple-400/40 bg-purple-500/10 shadow-purple-950/30" : ""}`}>{plan.recommended && <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-200">Recommended</span>}<h2 className="mt-5 text-2xl font-black">{plan.name}</h2><p className="mt-2 text-sm leading-6 text-slate-400">{plan.description}</p><div className="mt-6 flex items-end gap-2"><span className="text-5xl font-black">{plan.price}</span><span className="pb-2 text-sm text-slate-500">/month</span></div><ul className="mt-6 space-y-3 text-sm text-slate-300"><li>✓ {plan.products} products</li><li>✓ {plan.boosts} active boosts</li><li>✓ {plan.appeals} appeals / month</li><li>✓ {plan.analytics}</li><li>✓ Seller public page</li><li>✓ Product features management</li></ul><div className="mt-7"><Button href="/dashboard" variant={plan.recommended ? "primary" : "secondary"}>Start with {plan.name}</Button></div></Card>)}</section>
      <Card className="mt-10 p-6"><h2 className="text-xl font-bold">Boosts are separate from rankings</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">Sponsored boosts can increase product visibility for a limited time, but they never buy organic ranking. Organic ranking is based on trust, reviews, freshness, and engagement.</p></Card>
    </Shell>
  );
}
