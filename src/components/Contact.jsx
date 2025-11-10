import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0a1f44] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.12),_transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">Let’s Build Something</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Have an idea, a role, or a challenge? I’d love to hear from you.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <form className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input className="mt-1 w-full rounded-xl border border-white/10 bg-[#0b1c3a] px-4 py-3 outline-none ring-cyan-500/30 placeholder:text-white/40 focus:ring-2" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-[#0b1c3a] px-4 py-3 outline-none ring-cyan-500/30 placeholder:text-white/40 focus:ring-2" placeholder="jane@email.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-[#0b1c3a] px-4 py-3 outline-none ring-cyan-500/30 placeholder:text-white/40 focus:ring-2" placeholder="Tell me about your project..." />
            </div>
            <button type="button" className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-medium text-white shadow-[0_10px_30px_rgba(59,130,246,0.45)] transition hover:translate-y-[-1px]">
              Send Message
            </button>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/0 px-4 py-3 transition hover:bg-white/10" href="https://github.com/" target="_blank" rel="noreferrer">
                  <div className="rounded-lg bg-white/10 p-2 text-white/80 group-hover:text-white"><Github size={18} /></div>
                  <span className="text-white/80 group-hover:text-white">GitHub</span>
                </a>
              </li>
              <li>
                <a className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/0 px-4 py-3 transition hover:bg-white/10" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <div className="rounded-lg bg-white/10 p-2 text-white/80 group-hover:text-white"><Linkedin size={18} /></div>
                  <span className="text-white/80 group-hover:text-white">LinkedIn</span>
                </a>
              </li>
              <li>
                <a className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/0 px-4 py-3 transition hover:bg-white/10" href="mailto:hello@example.com">
                  <div className="rounded-lg bg-white/10 p-2 text-white/80 group-hover:text-white"><Mail size={18} /></div>
                  <span className="text-white/80 group-hover:text-white">Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
