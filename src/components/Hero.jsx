import { motion as Motion, useReducedMotion } from 'framer-motion';
import { heroFacts, layers, links } from '../utils/constants';
import { ArrowUpRight } from './Icons';
import StackDiagram from './StackDiagram';
import { EASE_OUT as ease } from '../utils/motion';


const Hero = () => {
  const reduce = useReducedMotion();
  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease, delay },
        };

  return (
    <section id="top" className="px-5 pt-12 pb-12 md:px-8 md:pt-18 md:pb-16">
      <div className="mx-auto flex max-w-[1248px] flex-wrap items-center gap-x-6 gap-y-10">
        <div className="min-w-0 flex-[1_1_480px]">
          <Motion.p {...rise(0)} className="font-hand text-[26px] leading-none text-pen md:text-[28px]">
            Hi, I&apos;m Pradnya —
          </Motion.p>
          <Motion.h1
            {...rise(0.08)}
            className="mt-3.5 font-display text-[46px] leading-[0.92] font-bold tracking-[-0.035em] md:mt-4 md:text-[clamp(48px,8.2vw,96px)]"
          >
            Software Developer.
            <br />
            Cloud.
            <br />
            DevOps.
          </Motion.h1>
          <Motion.p {...rise(0.16)} className="mt-6 max-w-[34rem] text-base leading-[1.65] text-ink-soft md:mt-7 md:text-[17px]">
            I build things end to end, from architecture and APIs to infrastructure, CI/CD and production.
          </Motion.p>
          <Motion.div {...rise(0.24)} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4 md:mt-9">
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-cream transition-transform duration-[160ms] ease-out motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.97]"
            >
              Get in touch <ArrowUpRight />
            </a>
          </Motion.div>
        </div>

        <Motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
          className="mx-auto w-full min-w-0 max-w-[672px] flex-[1_1_520px] pl-[30px] md:pl-11"
        >
          <div className="hidden md:block">
            <StackDiagram />
          </div>
          <div className="md:hidden">
            <StackDiagram compact />
          </div>
        </Motion.div>

        {/* Phone: the diagram drops its tech lines, so list them here */}
        <ul className="flex w-full flex-col gap-2 text-sm md:hidden">
          {layers.map((layer) => (
            <li key={layer.name} className="flex justify-between gap-3 border-b border-paper-line pb-2">
              <span className="font-medium text-ink">{layer.name}</span>
              <span className="text-right text-muted">{layer.tech}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-11 grid max-w-[1248px] gap-2.5 border-t border-paper-line pt-5 text-sm text-muted md:mt-14 md:grid-cols-3 md:gap-3">
        {heroFacts.map((fact, i) => (
          <p key={fact.label} className={i === 1 ? 'md:text-center' : i === 2 ? 'md:text-right' : ''}>
            <span className="text-ink">{fact.label}</span> — {fact.value}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Hero;
