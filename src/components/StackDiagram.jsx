import { layers } from '../utils/constants';

// Isometric stack of the layers I work across. Layers are drawn bottom-up so
// upper slabs overlap the ones beneath. `compact` is the phone version: bigger
// labels, no tech line (the list under the diagram carries it).
const PEN = 'var(--color-pen)';
const INK = 'var(--color-ink)';
const STEP = 62;
const TOP_Y = 120;

const StackDiagram = ({ compact = false }) => {
  const ordered = layers.map((layer, i) => ({ ...layer, y: TOP_Y + i * STEP })).reverse();
  const stroke = compact ? 2 : 1.4;

  return (
    <svg
      viewBox="0 0 660 520"
      className="block h-auto w-full overflow-visible"
      role="img"
      aria-label={`Diagram of the layers I work across: ${layers.map((l) => l.name).join(', ')}. Most of my time goes into ${layers
        .filter((l) => l.focus)
        .map((l) => l.name)
        .join(', ')}.`}
    >
      {ordered.map((layer) => {
        const edge = layer.focus ? PEN : INK;
        return (
          <g key={layer.name} transform={`translate(0 ${layer.y})`}>
            <polygon points="70,0 230,92.4 230,106.4 70,14" fill="#121212" />
            <polygon points="230,92.4 390,0 390,14 230,106.4" fill="#3D3C39" />
            <polygon
              points="230,-92.4 390,0 230,92.4 70,0"
              fill={layer.focus ? '#F6F5F1' : '#E3E0D8'}
              stroke={edge}
              strokeWidth={stroke}
              strokeLinejoin="round"
            />
            {!compact && <polyline points="142,0 230,50.8 318,0" fill="none" stroke={edge} strokeOpacity="0.35" />}
            <line x1="398" y1="0" x2="430" y2="0" stroke="#121212" strokeWidth={compact ? 2 : 1} />
            {!compact && <circle cx="398" cy="0" r="2.5" fill="#121212" />}
            {compact ? (
              <text x="438" y="10" fill="#121212" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="600" fontSize="30">
                {layer.name}
              </text>
            ) : (
              <>
                <text x="438" y="-3" fill="#121212" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="600" fontSize="17">
                  {layer.name}
                </text>
                <text x="438" y="16" fill="#6B6964" fontFamily="Geist, sans-serif" fontSize="12.5">
                  {layer.tech}
                </text>
              </>
            )}
          </g>
        );
      })}

      <path
        d="M 52 176 q -16 0 -16 16 L 36 376 q 0 16 16 16"
        fill="none"
        stroke={PEN}
        strokeWidth={compact ? 3 : 2}
        strokeLinecap="round"
      />
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
    </svg>
  );
};

export default StackDiagram;
