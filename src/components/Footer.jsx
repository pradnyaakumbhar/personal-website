import { useEffect, useRef } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { footerLinks, links } from '../utils/constants';
import { ArrowUp, ArrowUpRight } from './Icons';
import crowdDesktop from '../assets/footer/crowd-desktop.mp4';
import crowdDesktopStill from '../assets/footer/crowd-desktop.jpg';
import crowdPhone from '../assets/footer/crowd-phone.mp4';
import crowdPhoneStill from '../assets/footer/crowd-phone.jpg';

// The walking crowd with the name behind it. Phones get a narrower cut of the
// same loop; reduced-motion visitors get a still frame. The video only plays
// while it is on screen.
const Crowd = () => {
  const isPhone = useMediaQuery('(max-width: 767px)');
  const reduce = useMediaQuery('(prefers-reduced-motion: reduce)');
  const videoRef = useRef(null);

  const src = isPhone ? crowdPhone : crowdDesktop;
  const still = isPhone ? crowdPhoneStill : crowdDesktopStill;
  // Both videos are shown whole, full width, nothing cropped.
  // Desktop is the wide 8:3 crowd with room for the name on top (1920×860);
  // phone is a centre cut of the same loop with a smaller name (780×592).
  const frame = { aspectRatio: isPhone ? '780 / 592' : '1920 / 860' };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    video.muted = true;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, [src, reduce]);

  return (
    <div className="relative overflow-hidden bg-white" aria-hidden="true">
      {reduce ? (
        <img src={still} alt="" className="block h-auto w-full" style={frame} />
      ) : (
        <video
          key={src}
          ref={videoRef}
          src={src}
          poster={still}
          muted
          loop
          playsInline
          preload="metadata"
          className="block h-auto w-full"
          style={frame}
        />
      )}
    </div>
  );
};

const Footer = () => (
  <footer className="overflow-hidden bg-ink text-cream">
    <div className="mx-auto max-w-[1248px] px-5 md:px-8">
      <div className="grid gap-7 border-t border-night-line py-10 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] md:gap-10 md:pt-14">
        <div>
          <p className="font-display text-[22px] font-bold tracking-[-0.02em] md:text-[26px]">
            Pradnya<span className="text-pen-soft">.</span>
          </p>
          <p className="mt-2 text-sm leading-normal text-cream-muted md:mt-2.5">
            Software Developer
            <br className="hidden md:block" />
            <span className="md:hidden"> · </span>
            Cloud &amp; DevOps
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-3 text-[13px] text-muted-2 md:mb-3.5">Explore</p>
          <ul className="grid grid-cols-2 gap-2.5 text-[15px]">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-cream hover:text-pen-soft">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-[13px] text-muted-2 md:mb-3.5">Get in touch</p>
          <a
            href={`mailto:${links.email}`}
            className="inline-flex items-center gap-1.5 text-[15px] break-all text-cream hover:text-pen-soft"
          >
            {links.email} <ArrowUpRight size={13} />
          </a>
          <div className="mt-3 flex gap-4.5 text-sm">
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-cream-muted hover:text-cream">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream-muted hover:text-cream">
              LinkedIn
            </a>
          </div>
          <p className="mt-4.5 text-[13px] text-muted-2">© {new Date().getFullYear()} Pradnya Kumbhar</p>
        </div>
      </div>

      <div className="flex items-end justify-between pt-2 pb-7 md:pt-2">
        <p className="font-display text-[26px] font-semibold tracking-[-0.03em] md:text-[clamp(28px,3.4vw,40px)]">
          See you around.
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 pb-1.5 text-sm text-cream-muted hover:text-cream">
          Back to top <ArrowUp />
        </a>
      </div>
    </div>

    <Crowd />
  </footer>
);

export default Footer;
