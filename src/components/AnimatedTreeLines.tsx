const LINES = [
  { y1: 60, delay: '0s' },
  { y1: 160, delay: '0.2s' },
  { y1: 260, delay: '0.4s' },
  { y1: 360, delay: '0.15s' },
  { y1: 460, delay: '0.35s' },
];

const CENTER_Y = 260;
const END_X = 100;

export default function AnimatedTreeLines() {
  return (
    <svg
      className="absolute inset-y-0 left-0 w-full h-full pointer-events-none z-10"
      viewBox="0 0 100 520"
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <linearGradient id="treeLineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <filter id="treeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {LINES.map((line, i) => {
        const d = `M 0,${line.y1} C 35,${line.y1} 65,${CENTER_Y} ${END_X},${CENTER_Y}`;
        return (
          <g key={i}>
            <path d={d} stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
            <path
              d={d}
              stroke="url(#treeLineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#treeGlow)"
              className="tree-line-flow"
              style={{ animationDelay: line.delay }}
            />
          </g>
        );
      })}
    </svg>
  );
}
