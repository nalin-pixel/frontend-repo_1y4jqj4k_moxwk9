import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-[#0a1f44]/70 shadow-[0_10px_40px_rgba(0,0,0,0.35)]' : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-[0_0_25px_rgba(59,130,246,0.6)]" />
          <span className="font-semibold tracking-wide text-white/90 group-hover:text-white">Flames.Dev</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          aria-label="Toggle theme"
          onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-white shadow-inner shadow-cyan-500/20 transition hover:bg-white/10"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
      {/* Scroll Progress Bar */}
      <ScrollProgress />
    </header>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress(total ? (current / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="h-0.5 w-full bg-white/5">
      <div
        className="h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
