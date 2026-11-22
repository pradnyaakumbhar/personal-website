// Small stroke icons used across the site. All decorative: aria-hidden.
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  viewBox: '0 0 24 24',
};

export const ArrowUpRight = ({ size = 15, ...p }) => (
  <svg width={size} height={size} {...base} {...p}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export const ArrowUp = ({ size = 13, ...p }) => (
  <svg width={size} height={size} {...base} {...p}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

export const Copy = ({ size = 16, ...p }) => (
  <svg width={size} height={size} {...base} {...p}>
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

export const Check = ({ size = 16, ...p }) => (
  <svg width={size} height={size} {...base} {...p}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const CheckCircle = ({ size = 24, ...p }) => (
  <svg width={size} height={size} {...base} strokeWidth={1.5} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.5l2.5 2.5 5-5.5" />
  </svg>
);

export const Menu = ({ size = 20, ...p }) => (
  <svg width={size} height={size} {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = ({ size = 20, ...p }) => (
  <svg width={size} height={size} {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Briefcase = ({ size = 16, ...p }) => (
  <svg width={size} height={size} {...base} {...p}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const Pin = ({ size = 16, ...p }) => (
  <svg width={size} height={size} {...base} {...p}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Calendar = ({ size = 15, ...p }) => (
  <svg width={size} height={size} {...base} {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const Award = ({ size = 16, ...p }) => (
  <svg width={size} height={size} {...base} {...p}>
    <circle cx="12" cy="8" r="7" />
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
  </svg>
);
