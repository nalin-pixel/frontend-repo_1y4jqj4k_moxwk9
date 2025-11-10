import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Cinematic Portfolio Engine',
    desc: 'A next-gen portfolio template with WebGL scenes, motion design, and blazing performance.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    live: '#',
    code: '#',
  },
  {
    title: 'Realtime Collaboration Suite',
    desc: 'Docs, whiteboarding, and chat built on top of WebRTC and CRDTs.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    live: '#',
    code: '#',
  },
  {
    title: 'AI Visual Tools',
    desc: 'Creative tooling that blends ML models with intuitive UX and buttery animations.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop',
    live: '#',
    code: '#',
  },
];

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const nodes = containerRef.current?.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('reveal');
        });
      },
      { threshold: 0.15 }
    );
    nodes?.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  return (
    <section id="projects" className="relative bg-[#0b1c3a] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.12),_transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10" ref={containerRef}>
        <h2 className="text-center text-3xl font-semibold md:text-4xl">Projects</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          A curated selection of experiments and production work.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              data-reveal
              onMouseMove={handleMove}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1c3a] to-transparent opacity-70" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.live} className="inline-flex items-center gap-1 rounded-xl bg-white/10 px-3 py-2 text-sm text-white/90 transition hover:bg-white/20">
                    <ExternalLink size={16} /> View Live
                  </a>
                  <a href={p.code} className="inline-flex items-center gap-1 rounded-xl border border-white/10 px-3 py-2 text-sm text-white/70 transition hover:border-white/20 hover:text-white">
                    <Github size={16} /> View Code
                  </a>
                </div>
              </div>
              {/* Glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,0.25), transparent 40%)' }} />
            </article>
          ))}
        </div>
      </div>

      <style>{`
        [data-reveal] { opacity: 0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease; }
        [data-reveal].reveal { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  );
}
