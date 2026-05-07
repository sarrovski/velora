import { PageShell, PublicNav } from "@/components/layout/Nav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { plans } from "@/lib/data";

export default function PricingPage() {
  return (
    <PageShell>
      <PublicNav />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="mx-auto max-w-3xl text-center"><Badge tone="purple">Seller pricing</Badge><h1 className="mt-4 text-5xl font-black tracking-tight">Simple plans based on product slots.</h1><p className="mt-4 text-slate-400">Sellers pay for catalog capacity. Boosts are separate and always labeled as sponsored.</p></section>
        <section className="mt-10 grid gap-5 md:grid-cols-3">{plans.map((plan) => <Card key={plan.name} className={`p-6 ${plan.highlighted ? "border-purple-400/40 bg-purple-500/10" : ""}`}>{plan.highlighted && <Badge tone="purple">Recommended</Badge>}<h2 className="mt-5 text-2xl font-black">{plan.name}</h2><div className="mt-6 flex items-end gap-2"><span className="text-5xl font-black">{plan.price}</span><span className="pb-2 text-sm text-slate-500">/month</span></div><ul className="mt-6 space-y-3 text-sm text-slate-300"><li>✓ {plan.productLimit} products</li><li>✓ {plan.boosts} active boosts</li><li>✓ {plan.appeals} review appeals</li><li>✓ {plan.analytics}</li><li>✓ Seller public page</li><li>✓ Product features management</li></ul><Button href="/dashboard" className="mt-7 w-full" variant={plan.highlighted ? "primary" : "secondary"}>Start with {plan.name}</Button></Card>)}</section>
        <Card className="mt-10 p-6"><h2 className="text-xl font-bold">Boosts are separate from rankings</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">Sponsored boosts can increase product visibility for a limited time, but they never buy organic ranking.</p></Card>
      </main>
    </PageShell>
  );
}
