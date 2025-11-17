import { motion } from 'framer-motion';
import { Shield, Lock, Radar, Server, KeySquare, Globe2 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Unified Protection',
    desc: 'Endpoint, cloud and identity security in one place with zero configuration drift.'
  },
  {
    icon: Radar,
    title: 'Real-time Detection',
    desc: 'Stream events, correlate signals and detect anomalies with ML-backed rules.'
  },
  {
    icon: Lock,
    title: 'Policy Engine',
    desc: 'Define, enforce and audit policies across devices, apps and infrastructure.'
  },
  {
    icon: Server,
    title: 'Agentless Cloud',
    desc: 'Connect AWS, GCP and Azure in minutes for instant posture visibility.'
  },
  {
    icon: KeySquare,
    title: 'Secrets Governance',
    desc: 'Rotate keys, track usage and prevent leakage across your stack.'
  },
  {
    icon: Globe2,
    title: 'Compliance Ready',
    desc: 'SOC 2, ISO 27001 and HIPAA evidence collection out of the box.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center"
        >
          Security, simplified
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur hover:border-emerald-500/40 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.2),0_25px_60px_-15px_rgba(16,185,129,0.25)] transition"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-2xl bg-emerald-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                  <f.icon className="relative h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
