import { useState } from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import { layers } from '../utils/constants';
import { EASE_IN_OUT } from '../utils/motion';

// Isometric stack of the layers I work across. Layers are drawn bottom-up so
// upper slabs overlap the ones beneath. `compact` is the phone version: bigger
// labels, no tech line (the list under the diagram carries it).
//
// Hover (mouse only): the stack spreads apart like an exploded view, the
// bracket stretches to keep covering the focus layers, and the layer under the
// pointer turns blue. Reduced motion: no spreading, only the highlight.
const PEN = 'var(--color-pen)';
const INK = 'var(--color-ink)';
const STEP = 62;
const TOP_Y = 120;
const SPREAD = 8; // extra gap per level when spread
const MOVE = { duration: 0.3, ease: EASE_IN_OUT };
const FILL_FADE = { transition: 'fill 150ms ease' };

const isMouse = (e) => e.pointerType === 'mouse';

const StackDiagram = ({ compact = false }) => {
  const reduce = useReducedMotion();
  const [spread, setSpread] = useState(false);
  const [hot, setHot] = useState(null);

  const last = layers.length - 1;
  // Top layer lifts the most, bottom layer stays put
  const lift = (i) => (spread && !reduce ? -(last - i) * SPREAD : 0);
  const ordered = layers.map((layer, i) => ({ ...layer, i, y: TOP_Y + i * STEP })).reverse();
  const stroke = compact ? 2 : 1.4;

  // Bracket spans the first and last focus layers, following them as they spread
  const first = layers.findIndex((l) => l.focus);
  const top = 176 + lift(first);
  const bottom = 392 + lift(last);

  return (
    <svg
      viewBox="0 0 660 520"
      className="block h-auto w-full overflow-visible"
      role="img"
      aria-label={`Diagram of the layers I work across: ${layers.map((l) => l.name).join(', ')}. Most of my time goes into ${layers
        .filter((l) => l.focus)
        .map((l) => l.name)
        .join(', ')}.`}
      onPointerEnter={(e) => isMouse(e) && setSpread(true)}
      onPointerLeave={() => {
        setSpread(false);
        setHot(null);
      }}
    >
      {ordered.map((layer) => {
        const edge = layer.focus ? PEN : INK;
        const isHot = hot === layer.name;
        const face = isHot ? '#E4E4FB' : layer.focus ? '#F6F5F1' : '#E3E0D8';
        return (
          <Motion.g
            key={layer.name}
            animate={{ y: lift(layer.i) }}
            transition={MOVE}
            onPointerEnter={(e) => isMouse(e) && setHot(layer.name)}
            onPointerLeave={() => setHot((h) => (h === layer.name ? null : h))}
          >
            <g transform={`translate(0 ${layer.y})`}>
              <polygon points="70,0 230,92.4 230,106.4 70,14" fill="#121212" />
              <polygon points="230,92.4 390,0 390,14 230,106.4" fill="#3D3C39" />
              <polygon
                points="230,-92.4 390,0 230,92.4 70,0"
                fill={face}
                stroke={edge}
                strokeWidth={stroke}
                strokeLinejoin="round"
                style={FILL_FADE}
              />
              {!compact && <polyline points="142,0 230,50.8 318,0" fill="none" stroke={edge} strokeOpacity="0.35" />}
              {/* Invisible hit area so hovering the label also highlights the layer */}
              <rect x="398" y="-26" width="262" height="50" fill="transparent" />
              <line x1="398" y1="0" x2="430" y2="0" stroke="#121212" strokeWidth={compact ? 2 : 1} />
              {!compact && <circle cx="398" cy="0" r="2.5" fill="#121212" />}
              {compact ? (
                <text
                  x="438"
                  y="10"
                  fill={isHot ? PEN : '#121212'}
                  style={FILL_FADE}
                  fontFamily="Bricolage Grotesque, sans-serif"
                  fontWeight="600"
                  fontSize="30"
                >
                  {layer.name}
                </text>
              ) : (
                <>
                  <text
                    x="438"
                    y="-3"
                    fill={isHot ? PEN : '#121212'}
                    style={FILL_FADE}
                    fontFamily="Bricolage Grotesque, sans-serif"
                    fontWeight="600"
                    fontSize="17"
                  >
                    {layer.name}
                  </text>
                  <text x="438" y="16" fill="#6B6964" fontFamily="Geist, sans-serif" fontSize="12.5">
                    {layer.tech}
                  </text>
                </>
              )}
            </g>
          </Motion.g>
        );
      })}

      <Motion.path
        initial={false}
        animate={{ d: `M 52 ${top} q -16 0 -16 16 L 36 ${bottom - 16} q 0 16 16 16` }}
        transition={MOVE}
        fill="none"
        stroke={PEN}
        strokeWidth={compact ? 3 : 2}
        strokeLinecap="round"
      />
      <Motion.g animate={{ y: (top + bottom) / 2 - 284 }} transition={MOVE}>
        <text
          x="-6"
          y="284"
          fill={PEN}
          fontFamily="Caveat, cursive"
          fontSize={compact ? 34 : 25}
          fontWeight="600"
          textAnchor="middle"
          transform="rotate(-90 -6 284)"
        >
          {compact ? 'most of my time' : 'where I spend most of my time'}
        </text>
      </Motion.g>
    </svg>
  );
};

export default StackDiagram;
