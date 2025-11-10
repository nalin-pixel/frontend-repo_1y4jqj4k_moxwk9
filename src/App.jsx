import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Smooth scroll for internal links
    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href');
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#070f22] font-inter text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="border-t border-white/10 bg-[#0a1f44] py-8 text-center text-white/60">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>

      <ScrollTop />
    </div>
  );
}

function ScrollTop() {
  useEffect(() => {
    const btn = document.getElementById('scrollTopBtn');
    const onScroll = () => {
      if (!btn) return;
      btn.style.opacity = window.scrollY > 500 ? '1' : '0';
      btn.style.pointerEvents = window.scrollY > 500 ? 'auto' : 'none';
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      id="scrollTopBtn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-3 text-white shadow-[0_10px_30px_rgba(59,130,246,0.45)] transition hover:scale-105"
      aria-label="Scroll to top"
      style={{ opacity: 0 }}
    >
      ↑
    </button>
  );
}
