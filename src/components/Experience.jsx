import { useLayoutEffect, useRef, useState } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { experiences } from '../utils/constants';
import { Award, Briefcase, Calendar, Pin } from './Icons';
import { Reveal } from './Reveal';

const Experience = () => {
  const sectionRef = useRef(null);
  const lineWrapRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  // Measure the timeline so the trail travels its exact length
  useLayoutEffect(() => {
    const el = lineWrapRef.current;
    if (!el) return undefined;
    const measure = () => setLineHeight(el.getBoundingClientRect().height);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.85', 'end 0.25'],
  });
  const trail = useTransform(scrollYProgress, [0, 1], [0, Math.max(lineHeight, 1)]);

  return (
    <section ref={sectionRef} id="experience" className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1152px]">
        <Reveal
          as="h2"
          className="mb-10 font-display text-4xl leading-none font-bold tracking-[-0.03em] md:mb-14 md:text-[clamp(36px,4.4vw,52px)]"
        >
          Where I&apos;ve Worked
        </Reveal>

        <div className="relative" ref={lineWrapRef}>
          <div className="absolute top-0 left-5 h-full w-0.5 bg-[#D9D6CE] md:left-6" />
          <Motion.div
            className="absolute top-0 left-5 w-0.5 md:left-6"
            style={{
              height: trail,
              background: 'linear-gradient(to bottom, rgba(53,53,232,0) 0%, var(--color-pen) 65%)',
            }}
          />

          <ol className="flex flex-col gap-8 md:gap-10">
            {experiences.map((exp) => (
              <li key={`${exp.company}-${exp.period}`} className="relative pl-11 md:pl-16">
                <div className="absolute top-3.5 left-5 grid size-11 -translate-x-1/2 place-items-center overflow-hidden rounded-full border border-paper-border bg-white shadow-[0_8px_18px_rgba(18,18,18,0.14)] md:top-4 md:left-6 md:size-16">
                  <img src={exp.logo} alt="" className="size-[30px] object-contain md:size-11" />
                </div>

                <Reveal as="article" className="ml-3 rounded-2xl border border-paper-border bg-paper-raised p-[22px] shadow-[0_8px_30px_rgba(18,18,18,0.06)] md:ml-6 md:p-8">
                  <div className="flex flex-col gap-3.5 md:flex-row md:items-start md:justify-between md:gap-4">
                    <div>
                      <h3 className="font-display text-[21px] leading-[1.2] font-semibold md:text-2xl">{exp.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-sm text-ink-body md:gap-x-4 md:gap-y-2 md:text-[15px]">
                        <span className="inline-flex items-center gap-1.5 md:gap-2">
                          <Briefcase className="text-muted-2" />
                          <span className="font-medium">{exp.company}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 md:gap-2">
                          <Pin className="text-muted-2" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-paper-border bg-chip px-3.5 py-1.5 text-[13px] text-[#3A3834] md:px-4 md:py-2 md:text-sm">
                      <Calendar />
                      {exp.period}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-[15px] font-semibold md:mt-6 md:text-base">
                    <Award className="text-muted-2" />
                    Key Achievements
                  </div>
                  <ul className="mt-2.5 flex flex-col gap-2 md:mt-3">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex gap-2.5 text-[15px] leading-[1.6] text-ink-body md:gap-3 md:text-base">
                        <span className="mt-2 size-[7px] shrink-0 rounded-full bg-muted-2 md:size-2" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-1.5 md:mt-7 md:gap-2">
                    {exp.stack.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-paper-border bg-chip px-3 py-1.5 text-[13px] text-[#3A3834] md:px-4 md:py-2 md:text-sm"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
