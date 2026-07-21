import { useEffect, useRef, useState } from 'react';

type LineDef = { d: string; delay: string };

const DELAYS = ['0s', '0.2s', '0.4s', '0.15s', '0.35s'];

export default function AnimatedTreeLines() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [lines, setLines] = useState<LineDef[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const compute = () => {
      const svg = svgRef.current;
      if (!svg) return;
      const containerRect = svg.getBoundingClientRect();
      if (containerRect.width === 0) return;

      const starts = Array.from(
        document.querySelectorAll<HTMLElement>('[data-tree-start]'),
      );
      const end = document.querySelector<HTMLElement>('[data-tree-end]');
      if (!starts.length || !end) return;

      const endRect = end.getBoundingClientRect();
      const endX = endRect.left - containerRect.left;
      const endY = endRect.top + endRect.height / 2 - containerRect.top;

      const newLines: LineDef[] = starts.map((el, i) => {
        const r = el.getBoundingClientRect();
        const startX = r.right - containerRect.left;
        const startY = r.top + r.height / 2 - containerRect.top;
        const midX = (startX + endX) / 2;
        const d = `M ${startX},${startY} C ${midX},${startY} ${midX},${endY} ${endX},${endY}`;
        return { d, delay: DELAYS[i % DELAYS.length] };
      });

      setLines(newLines);
      setReady(true);
    };

    compute();
    const t = setTimeout(compute, 300);
    const rt = setTimeout(compute, 1000);
    window.addEventListener('resize', compute);
    return () => {
      window.removeEventListener('resize', compute);
      clearTimeout(t);
      clearTimeout(rt);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-40"
      fill="none"
      style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.4s ease' }}
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

      {lines.map((line, i) => (
        <g key={i}>
          <path d={line.d} stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
          <path
            d={line.d}
            stroke="url(#treeLineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#treeGlow)"
            className="tree-line-flow"
            style={{ animationDelay: line.delay }}
          />
        </g>
      ))}
    </svg>
  );
}
