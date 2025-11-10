import Spline from '@splinetool/react-spline';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  const handleScrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0a1024] text-white">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.20),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(147,51,234,0.15),_transparent_55%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 md:px-10">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-wider text-white/70 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          Available for freelance & collaborations
        </p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Hi, I’m <span className="bg-gradient-to-tr from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">Your Name</span>
          — A Passionate Programmer & Creative Developer.
        </h1>
        <p className="mt-5 max-w-2xl text-white/70">
          Building interactive digital experiences that merge code, art, and innovation.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={handleScrollToProjects}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-medium text-white shadow-[0_10px_30px_rgba(59,130,246,0.45)] transition hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(59,130,246,0.55)] focus:outline-none"
          >
            View My Work
            <ArrowDownRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
          </button>

          <a href="#contact" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/80 transition hover:bg-white/10">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
