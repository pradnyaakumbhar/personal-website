import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { links } from '../utils/constants';
import { EASE_OUT } from '../utils/motion';
import { ArrowUpRight, Check, Copy } from './Icons';
import { Reveal } from './Reveal';

// Copies text and reports which item was copied, for a short-lived confirmation.
function useCopy() {
  const [copied, setCopied] = useState(null);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

  return [copied, copy];
}

const Contact = () => {
  const [copied, copy] = useCopy();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = name ? `Hello from ${name}` : 'Hello from your portfolio';
    const body = name ? `${message}\n\n— ${name}` : message;
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="rounded-t-[40px] bg-ink px-5 pb-20 text-cream md:rounded-t-[56px] md:px-8 md:pb-28"
    >
      <div className="mx-auto flex max-w-[1248px] flex-wrap gap-14 pt-22 md:gap-16 md:pt-32">
        <Reveal className="min-w-0 flex-[1.1_1_440px]">
          <h2 className="font-display text-[52px] leading-[0.92] font-bold tracking-[-0.035em] md:text-[clamp(48px,8vw,96px)]">
            Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-[30rem] text-base leading-[1.65] text-cream-muted md:mt-6 md:text-[17px]">
            Have a role, a project or a system that needs building? My inbox is open.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-10">
            <a
              href={`mailto:${links.email}`}
              className="font-display text-[21px] font-semibold tracking-[-0.02em] break-all underline decoration-pen-soft decoration-2 underline-offset-[0.25em] hover:text-pen-soft md:text-[clamp(20px,2.6vw,30px)]"
            >
              {links.email}
            </a>
            <button
              type="button"
              onClick={() => copy('email', links.email)}
              aria-label={copied === 'email' ? 'Email address copied' : 'Copy email address'}
              className="grid size-11 place-items-center rounded-full border border-night-line text-cream-muted transition-[color,border-color,scale] duration-[160ms] ease-out hover:border-cream-muted hover:text-cream motion-safe:active:scale-[0.97]"
            >
              {/* Both icons share one grid cell so they crossfade in place */}
              <AnimatePresence initial={false}>
                <Motion.span
                  key={copied === 'email' ? 'check' : 'copy'}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.15, ease: EASE_OUT }}
                  className="[grid-area:1/1]"
                >
                  {copied === 'email' ? <Check /> : <Copy />}
                </Motion.span>
              </AnimatePresence>
            </button>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-[15px] text-cream-muted md:mt-10">
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
              LinkedIn
            </a>
          </div>
          <p className="sr-only" aria-live="polite">
            {copied ? 'Email address copied' : ''}
          </p>
        </Reveal>

        <Reveal
          as="form"
          delay={0.1}
          onSubmit={onSubmit}
          className="flex min-w-0 flex-[1_1_400px] flex-col gap-7 md:gap-8 md:pt-6"
        >
          <label className="flex flex-col gap-2">
            <span className="text-sm text-cream-muted">Your name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              placeholder="What should I call you?"
              className="border-b border-night-line bg-transparent pb-3 text-base text-cream outline-none transition-colors duration-150 ease-out placeholder:text-muted-2 focus:border-cream-muted md:text-[17px]"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm text-cream-muted">What do you have in mind?</span>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="A few lines about the role or project…"
              className="resize-none border-b border-night-line bg-transparent pb-3 text-base leading-[1.6] text-cream outline-none transition-colors duration-150 ease-out placeholder:text-muted-2 focus:border-cream-muted md:text-[17px]"
            />
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-[15px] font-medium text-ink transition-transform duration-[160ms] ease-out motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.97]"
            >
              Write the email <ArrowUpRight />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
