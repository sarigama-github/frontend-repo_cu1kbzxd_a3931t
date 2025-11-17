import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      {/* grid glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 20% 10%, rgba(16,185,129,0.08), transparent 50%), radial-gradient(circle at 80% 0%, rgba(16,185,129,0.08), transparent 40%), radial-gradient(circle at 50% 90%, rgba(16,185,129,0.06), transparent 40%)`
        }} />
      </div>

      {/* navbar spacer */}
      <div className="h-28" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 backdrop-blur"
            >
              <ShieldCheck className="h-4 w-4" />
              Enterprise-grade protection
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Cybersecurity that just works
              <span className="block bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-200 bg-clip-text text-transparent"> for modern teams</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="mt-6 text-lg leading-8 text-slate-300"
            >
              Detect threats, enforce policies, and prove compliance with an all‑in‑one security platform. Simple setup. Real‑time visibility. Audits ready.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#pricing" className="inline-flex justify-center items-center rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900 hover:bg-emerald-400 transition">Start free trial</a>
              <a href="#features" className="inline-flex justify-center items-center rounded-xl border border-slate-700 px-6 py-3 text-slate-200 hover:border-slate-600 transition">See features</a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300"
            >
              {[
                '5‑minute onboarding',
                'SOC 2 & ISO 27001 ready',
                'Agentless deployment',
                '24/7 monitoring'
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" /> {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Spline 3D scene */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-emerald-500/20 bg-slate-900/40">
              <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            {/* subtle gradient top overlay (doesn't block interaction) */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* bottom gradient border */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
    </section>
  );
}
