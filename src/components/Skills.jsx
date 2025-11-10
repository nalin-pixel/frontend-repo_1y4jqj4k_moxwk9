import { Code2, Layers, Server, Cloud } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    desc: 'Crafting immersive interfaces with React, animations, and pixel-perfect design.',
    glow: 'from-cyan-400/30 to-blue-500/30',
  },
  {
    icon: Server,
    title: 'Backend Systems',
    desc: 'Designing robust APIs, authentication, and scalable services.',
    glow: 'from-blue-400/30 to-purple-500/30',
  },
  {
    icon: Layers,
    title: 'Mobile Apps',
    desc: 'Building buttery-smooth cross-platform experiences.',
    glow: 'from-purple-400/30 to-cyan-500/30',
  },
  {
    icon: Cloud,
    title: 'Cloud & APIs',
    desc: 'Deployments, CI/CD, cloud-native patterns, and observability.',
    glow: 'from-cyan-400/30 to-purple-500/30',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0a1f44] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">What I Do Best</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          A blend of engineering rigor and creative finesse, brought to life with modern tooling.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title, desc, glow }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform hover:-translate-y-1 hover:bg-white/10"
              style={{ animation: `fadeInUp 0.6s ease ${(i + 1) * 0.08}s both` }}
            >
              <div className={`absolute -inset-20 bg-gradient-to-tr ${glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 p-3 text-cyan-300 shadow-[inset_0_0_30px_rgba(59,130,246,0.25)]">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-0 animate-[skill_1.8s_ease_forwards] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ animationDelay: `${(i + 1) * 0.2}s` }} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes skill { to { width: 90% } }
      `}</style>
    </section>
  );
}
