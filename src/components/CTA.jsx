import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_0%,rgba(16,185,129,0.08),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-emerald-400/40 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-8 sm:p-12 backdrop-blur">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl sm:text-4xl font-bold text-white"
          >
            Ready to secure your stack?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-center text-slate-300"
          >
            Get started in minutes — no agents, no hardware. Your first risks and misconfigurations highlighted instantly.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Work email"
              className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
            <button className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900 hover:bg-emerald-400 transition">Request demo</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
