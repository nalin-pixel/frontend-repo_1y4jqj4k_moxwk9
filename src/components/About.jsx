export default function About() {
  return (
    <section id="about" className="relative bg-[#0a1f44] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.12),_transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-semibold md:text-4xl">About Me</h2>
          <p className="mt-4 text-white/75">
            I’m a developer obsessed with crafting memorable digital experiences. My work lives where
            aesthetics and engineering meet — from 3D interactions to scalable backend systems. I push
            interfaces to feel alive while keeping performance and accessibility at the core.
          </p>
          <p className="mt-3 text-white/70">
            My goal is simple: build thoughtful products that delight users and deliver real value.
          </p>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-[0_25px_80px_rgba(59,130,246,0.35)]">
            <div className="absolute inset-0 -z-[1] animate-pulse rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-2xl" />
            <img
              className="h-full w-full rounded-2xl object-cover"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop"
              alt="Profile"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
