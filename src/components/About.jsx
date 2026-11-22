import { useRef } from 'react';
import { motion as Motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { about } from '../utils/constants';

// About me: the sentence lights up word by word as it scrolls up the screen.
const words = `${about.lead} ${about.tail}`.split(' ');

const Word = ({ progress, range, children }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <Motion.span style={{ opacity }}>{children}</Motion.span>;
};

const About = () => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  // 0 when the paragraph's top reaches 85% down the screen, 1 when its bottom reaches 45%
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const step = 1 / words.length;

  return (
    <section id="about" className="px-5 pt-18 md:px-8 md:pt-36">
      <div className="mx-auto flex max-w-[1248px] flex-wrap gap-x-16 gap-y-5 md:gap-y-6">
        <h2 className="flex-[0_0_224px] font-hand text-[30px] leading-none font-semibold text-pen md:pt-3 md:text-[32px]">
          about me
        </h2>
        <p
          ref={ref}
          className="min-w-0 flex-[1_1_560px] font-display text-[28px] leading-[1.1] font-semibold tracking-[-0.03em] md:text-[clamp(28px,3.6vw,50px)] md:leading-[1.08]"
        >
          {reduce ? (
            `${about.lead} ${about.tail}`
          ) : (
            <>
              <span className="sr-only">
                {about.lead} {about.tail}
              </span>
              <span aria-hidden="true">
                {words.map((word, i) => (
                  <Word key={i} progress={scrollYProgress} range={[i * step, Math.min(1, (i + 2.5) * step)]}>
                    {word}{' '}
                  </Word>
                ))}
              </span>
            </>
          )}
        </p>
      </div>
    </section>
  );
};

export default About;
