import { useEffect, useState } from 'react';
import { links, navLinks } from '../utils/constants';
import { ArrowUpRight, Close, Menu } from './Icons';

// Tracks which section is on screen so the matching nav link is highlighted.
function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navLinks.map((l) => l.id);

const Navbar = () => {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="sticky top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Primary"
        className="relative w-full max-w-[560px] rounded-full bg-ink text-cream shadow-[0_10px_30px_-12px_rgba(18,18,18,0.55)]"
      >
        <div className="flex items-center justify-between gap-2 py-1.5 pr-1.5 pl-5">
          <a href="#top" className="font-display text-[17px] font-semibold text-cream">
            Pradnya<span className="text-pen-soft">.</span>
          </a>

          <ul className="hidden items-center gap-1 text-[13px] sm:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block rounded-full px-3 py-1.5 transition-colors duration-200 ${
                      isActive ? 'bg-white/10 text-cream' : 'text-cream-muted hover:text-cream'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-0.5">
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-1 rounded-full bg-cream px-3.5 py-2.5 text-[13px] font-medium text-ink transition-transform duration-200 hover:-translate-y-px active:translate-y-0"
            >
              Email me <ArrowUpRight size={13} className="hidden sm:block" />
            </a>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 place-items-center rounded-full text-cream sm:hidden"
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <ul
            id="mobile-menu"
            className="absolute inset-x-0 top-[calc(100%+8px)] flex flex-col gap-1 rounded-3xl bg-ink p-2 text-[15px] shadow-[0_18px_40px_-16px_rgba(18,18,18,0.6)] sm:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3 ${
                    active === link.id ? 'bg-white/10 text-cream' : 'text-cream-muted'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
