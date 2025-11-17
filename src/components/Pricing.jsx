import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    caption: 'Free forever',
    features: ['Up to 5 devices', '1 cloud account', 'Basic detection', 'Community support'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$49',
    caption: 'per month',
    features: ['Up to 100 devices', '3 cloud accounts', 'Advanced rules', 'Email support'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    caption: 'Let’s talk',
    features: ['Unlimited devices', 'All clouds', 'Custom policies', 'SLA & SSO'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center"
        >
          Simple, transparent pricing
        </motion.h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-2xl border p-6 backdrop-blur bg-slate-900/60 ${t.highlight ? 'border-emerald-400/50 shadow-[0_0_0_1px_rgba(16,185,129,0.2),0_25px_60px_-15px_rgba(16,185,129,0.25)]' : 'border-slate-700/60'}`}
            >
              {t.highlight && (
                <div className="absolute -top-3 right-6 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">Most popular</div>
              )}
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-white font-semibold">{t.name}</h3>
                  <div className="mt-2 text-4xl font-bold text-emerald-400">{t.price}</div>
                  <div className="text-xs text-slate-400">{t.caption}</div>
                </div>
                <button className={`rounded-xl px-4 py-2 text-sm font-semibold ${t.highlight ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400' : 'border border-slate-700 text-slate-200 hover:border-slate-600'}`}>Choose</button>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" />{f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
