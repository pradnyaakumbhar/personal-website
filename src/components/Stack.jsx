import { groups } from '../utils/constants';
import { Reveal, RevealItem, RevealList } from './Reveal';

const Stack = () => (
  <section id="stack" className="px-5 pt-24 md:px-8 md:pt-40">
    <div className="mx-auto max-w-[1248px]">
      <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-5">
        <h2 className="font-display text-[clamp(40px,6vw,76px)] leading-[0.92] font-bold tracking-[-0.035em]">Stack.</h2>
        <p className="max-w-[22rem] pb-2 text-[15px] text-muted">
          The tools I reach for, from the interface down to the infrastructure.
        </p>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]">
        {groups.map((group) => (
          <div key={group.label} className="border-b border-paper-line py-7 pr-8">
            <Reveal as="h3" className="font-display text-xl font-semibold tracking-[-0.01em]">
              {group.label}
            </Reveal>
            <RevealList className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <RevealItem key={item} className="rounded-full border border-ink/20 px-3 py-1 text-[13.5px] text-ink-soft">
                  {item}
                </RevealItem>
              ))}
            </RevealList>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stack;
