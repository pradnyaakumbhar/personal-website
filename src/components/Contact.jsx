import React, { useRef, useState } from "react"
import {
  FaGithub,
  FaXTwitter,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa6"
import { FiMail } from "react-icons/fi"
import { links } from "../utils/constants" 
function CopyButton({
  toCopy,
  className = "",
  children,
  label = "Copy to clipboard",
  copiedText = "Copied!",
  onCopied,
}) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(toCopy)
      setCopied(true)
      if (onCopied) onCopied(copiedText)
      window.setTimeout(() => setCopied(false), 1200)
    } catch (e) {
      const ta = document.createElement("textarea")
      ta.value = toCopy
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      document.body.removeChild(ta)
      setCopied(true)
      if (onCopied) onCopied(copiedText)
      window.setTimeout(() => setCopied(false), 1200)
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className={className}
      title={copied ? copiedText : label}
      aria-label={label}
    >
      {children}
    </button>
  )
}

export default function Contact() {
  const [toast, setToast] = useState("")
  const toastTimerRef = useRef(null)

  const showToast = (message) => {
    setToast(message)
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current)
    }
    toastTimerRef.current = window.setTimeout(() => setToast(""), 1600)
  }

  return (
    <section id="contact" className="relative w-full bg-gray-100 py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        {toast && (
          <div className="fixed right-6 bottom-6 z-50 rounded-full bg-gray-900 px-4 py-2 text-sm text-white shadow-lg">
            {toast}
          </div>
        )}
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Let&apos;s build next resilient system together.
            </p>

            <div className="mt-10 max-w-lg space-y-6">
              <div className="rounded-3xl border border-gray-300 bg-gray-900 px-6 py-5 text-gray-100 shadow-[0_18px_40px_rgba(15,23,42,0.2)]">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                  Email
                </p>
                <p className="mt-3 text-xl font-semibold">{links.email}</p>
              </div>

              <div className="rounded-3xl border border-gray-300 bg-gray-900 px-6 py-5 text-gray-100 shadow-[0_18px_40px_rgba(15,23,42,0.2)]">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                  Location
                </p>
                <p className="mt-3 text-xl font-semibold">
                  Remote · Pune, India
                </p>
              </div>

              <div className="rounded-3xl border border-gray-300 bg-gray-900 px-6 py-5 text-gray-100 shadow-[0_18px_40px_rgba(15,23,42,0.2)]">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                  Availability
                </p>
                <p className="mt-3 text-xl font-semibold">
                  Open to Backend, DevOps / platform roles & collaborations.
                </p>
              </div>
            </div>
          </div>

          {/* galaxy */}
          <div className="flex justify-center lg:justify-end">
            <div className="galaxy mt-4 lg:mt-0 galaxy--lg">
              {/* ORBIT 1 */}
              <div className="orbit orbit-1">
                <span className="circle" />

                <a
                  className="icon icon-1"
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                >
                  <span className="icon-shell">
                    <FaGithub className="icon-svg" aria-hidden="true" />
                  </span>
                </a>

                <a
                  className="icon icon-2"
                  href={links.twitter}
                  target="_blank"
                  rel="noreferrer"
                  title="X"
                >
                  <span className="icon-shell">
                    <FaXTwitter className="icon-svg" aria-hidden="true" />
                  </span>
                </a>

                <a
                  className="icon icon-3 icon-mail"
                  href={`mailto:${links.email}`}
                  title="Email"
                >
                  <span className="icon-shell">
                    <FiMail className="icon-svg" aria-hidden="true" />
                  </span>
                </a>
              </div>

              {/* ORBIT 2 */}
              <div className="orbit orbit-2">
                <span className="circle" />

                <a
                  className="icon icon-1"
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <span className="icon-shell">
                    <FaLinkedinIn className="icon-svg" aria-hidden="true" />
                  </span>
                </a>

                <CopyButton
                  className="icon icon-2 icon-discord"
                  toCopy="pradnya_kumbhar"
                  label="Copy Discord username"
                  copiedText="Discord username copied"
                  onCopied={showToast}
                >
                  <span className="icon-shell" title="Discord">
                    <FaDiscord className="icon-svg" aria-hidden="true" />
                  </span>
                </CopyButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* styles (same as vue, translated) */}
      <style>{`
        @keyframes rotate {
          from { rotate: 0deg; }
          to { rotate: 360deg; }
        }
        @keyframes anti-rotate {
          from { rotate: 0deg; }
          to { rotate: -360deg; }
        }

        .galaxy{
          width: min(calc(100% - 2rem), 40rem);
          aspect-ratio: 1 / 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .galaxy--lg{
          width: min(calc(100% - 2rem), 46rem);
        }

        .galaxy .orbit{
          aspect-ratio: 1 / 1;
          position: absolute;
          animation: rotate linear infinite;
        }

        .galaxy .icon{
          position: absolute;
          translate: -50% -50%;
          z-index: 1;
          pointer-events: all;
          animation: anti-rotate linear infinite;
          transition: scale 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .galaxy .icon:hover{ scale: 0.9; }
        .galaxy .icon-discord{
          animation-name: anti-rotate;
        }

        .galaxy .icon-mail .icon-svg{
          transform: rotate(-75deg);
        }

        .galaxy .icon-shell{
          width: 3.25rem;
          height: 3.25rem;
          border-radius: 9999px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          display: grid;
          place-items: center;
          box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12);
        }
        @media (min-width: 1024px){
          .galaxy .icon-shell{ width: 4rem; height: 4rem; }
        }
        .galaxy .icon-svg{
          width: 1.5rem;
          height: 1.5rem;
          color: #111827;
          pointer-events: none;
        }
        @media (min-width: 1024px){
          .galaxy .icon-svg{ width: 1.8rem; height: 1.8rem; }
        }

        /* ----- ORBIT 1 ----- */
        .orbit-1{
          width: 100%;
        }
        .orbit-1, .orbit-1 .icon{
          animation-duration: 100s !important;
        }

        /* dashed circle look using mask + conic gradient */
        .orbit-1 .circle{
          position:absolute;
          inset:0;
          border-radius:9999px;
          background:
            conic-gradient(
              #9ca3af,
              transparent,
              transparent,
              #6b7280,
              transparent,
              #9ca3af,
              transparent,
              #9ca3af
            );
          /* make it a thin ring */
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px));
                  mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px));
          /* convert ring into dashed segments */
          -webkit-mask-composite: source-in;
                  mask-composite: intersect;
          opacity: 0.7;
          filter: drop-shadow(0 0 6px rgba(15,23,42,0.08));
        }
        /* dashed effect (overlay) */
        .orbit-1 .circle::after{
          content:"";
          position:absolute;
          inset:0;
          border-radius:9999px;
          border:2px dashed rgba(15,23,42,0.12);
          opacity:0.7;
        }

        .orbit-1 .icon-1{ top: 6%; left: 26%; }
        .orbit-1 .icon-2{ top: 80%; left: 89%; }
        .orbit-1 .icon-3{ top: 66%; left: 3%; }

        /* ----- ORBIT 2 ----- */
        .orbit-2{
          width: calc(50% + 2rem);
        }
        @media (min-width: 1024px){
          .orbit-2{ width: calc(50% + 4rem); }
        }
        .orbit-2, .orbit-2 .icon{
          animation-duration: 60s !important;
        }

        .orbit-2 .circle{
          position:absolute;
          inset:0;
          border-radius:9999px;
          background:
            conic-gradient(
              #9ca3af,
              transparent,
              #6b7280,
              #6b7280,
              transparent,
              transparent,
              #9ca3af,
              #9ca3af
            );
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px));
                  mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px));
          opacity: 0.7;
          filter: drop-shadow(0 0 6px rgba(15,23,42,0.08));
        }
        .orbit-2 .circle::after{
          content:"";
          position:absolute;
          inset:0;
          border-radius:9999px;
          border:2px dashed rgba(15,23,42,0.10);
          opacity:0.65;
        }

        .orbit-2 .icon-1{ top: 3%; left: 65%; }
        .orbit-2 .icon-2{ top: 99%; left: 54%; }
      `}</style>
    </section>
  )
}
