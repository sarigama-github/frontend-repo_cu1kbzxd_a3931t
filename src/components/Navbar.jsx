import { Menu, ShieldCheck, LockKeyhole, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-slate-900/60 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <motion.a
              href="#"
              className="flex items-center gap-2 text-emerald-400"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-emerald-500/20 blur-2xl" />
                <ShieldCheck className="relative h-6 w-6" />
              </div>
              <span className="font-semibold tracking-tight">Sentinel</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#security" className="hover:text-white transition">Security</a>
              <a href="#contact" className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300">
                <Sparkles className="h-4 w-4" /> New</a>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 px-4 py-2 text-sm text-emerald-300 hover:text-white hover:border-emerald-400/60 transition">
                <LockKeyhole className="h-4 w-4" /> Sign in
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400 transition">
                Start free trial
              </button>
              <button className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-700/80 p-2 text-slate-300 hover:text-white">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
