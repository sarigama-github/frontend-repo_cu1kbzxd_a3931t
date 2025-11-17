import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 antialiased selection:bg-emerald-500/30 selection:text-emerald-100">
      {/* ambient background */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `radial-gradient(1000px 400px at 10% -10%, rgba(16,185,129,0.25), transparent), radial-gradient(800px 400px at 90% -10%, rgba(16,185,129,0.25), transparent)`
        }} />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />

      <footer className="relative border-t border-slate-800/80 py-10 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Sentinel Security, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App