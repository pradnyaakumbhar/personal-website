import { useId } from 'react';
import { projects } from '../utils/constants';
import { ArrowUpRight, CheckCircle } from './Icons';
import { Reveal } from './Reveal';

// Faint film grain over each card, drawn in SVG so it needs no image file.
const Grain = () => {
  const id = useId();
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 size-full opacity-[0.06]">
      <filter id={id}>
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
};

const Projects = () => (
  <section id="work" className="px-4 py-16 md:py-24">
    <div className="mx-auto max-w-[1152px]">
      <Reveal as="h2" className="font-display text-4xl leading-none font-bold tracking-[-0.03em] md:text-[clamp(36px,4.4vw,52px)]">
        Things I&apos;ve Built
      </Reveal>

      <div className="mt-10 flex flex-col gap-20 md:mt-20">
        {projects.map((project, index) => (
          <div key={project.title} className="sticky" style={{ top: `calc(100px + ${index * 25}px)` }}>
            <Reveal as="article" className="relative isolate overflow-hidden rounded-t-[48px] rounded-b-[24px] border border-night-line bg-ink px-8 pt-8 outline-2 -outline-offset-[6px] outline-night-line md:px-10 md:pt-12 lg:px-20 lg:pt-16">
              <Grain />
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-12">
                  <h3 className="text-2xl font-bold tracking-[0.1em] text-cream uppercase md:text-4xl">{project.title}</h3>
                  <p className="mt-2 text-lg text-cream-dim md:mt-5">{project.desc}</p>
                  <hr className="mt-4 border-t-2 border-night-line md:mt-5" />

                  <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-[1.5] text-cream-dim md:text-base">
                        <CheckCircle className="size-5 shrink-0 md:size-6" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="my-8 flex gap-4">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-cream text-sm font-semibold text-ink transition-transform duration-[160ms] ease-out motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.97] hover:text-ink md:text-base"
                      >
                        Visit Live Site <ArrowUpRight size={16} />
                      </a>
                    )}
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-night-border text-sm font-semibold text-cream transition-[border-color,scale] duration-[160ms] ease-out hover:border-cream-muted motion-safe:active:scale-[0.97] md:text-base"
                    >
                      View Github <ArrowUpRight size={16} />
                    </a>
                  </div>

                  <h4 className="mt-8 text-sm font-medium tracking-[0.2em] text-cream-muted uppercase">Tech Stack</h4>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <li key={tech} className="rounded-full border border-night-border px-3 py-1 text-sm text-[#E4E1DA]">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                    className="mt-8 -mb-4 block w-full rounded-t-3xl md:mb-0 lg:absolute lg:top-0 lg:left-0 lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
