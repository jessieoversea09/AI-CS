import { useEffect, useRef, useState } from 'react';

type PathDef = { d: string; delay: string };

const DELAYS = ['0s', '0.3s', '0.15s', '0.45s'];

export default function AnimatedTreeLines() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [paths, setPaths] = useState<PathDef[]>([]);
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

      const newPaths: PathDef[] = starts.map((el, i) => {
        const r = el.getBoundingClientRect();
        const startX = r.right - containerRect.left;
        const startY = r.top + r.height / 2 - containerRect.top;
        const dx = Math.abs(endX - startX) * 0.5;
        const d = `M ${startX} ${startY} C ${startX + dx} ${startY}, ${endX - dx} ${endY}, ${endX} ${endY}`;
        return { d, delay: DELAYS[i % DELAYS.length] };
      });

      setPaths(newPaths);
      setReady(true);
    };

    compute();
    const t = setTimeout(compute, 300);
    const rt = setTimeout(compute, 1000);
    window.addEventListener('resize', compute);

    const observer = new ResizeObserver(compute);
    const endEl = document.querySelector('[data-tree-end]');
    if (endEl) observer.observe(endEl);

    return () => {
      window.removeEventListener('resize', compute);
      clearTimeout(t);
      clearTimeout(rt);
      observer.disconnect();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
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
        <marker id="treeArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
        </marker>
      </defs>

      {paths.map((p, i) => (
        <g key={i}>
          <path
            d={p.d}
            stroke="#E2E8F0"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d={p.d}
            stroke="url(#treeLineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            filter="url(#treeGlow)"
            markerEnd="url(#treeArrow)"
            pathLength={100}
            className="tree-line-flow"
            style={{ animationDelay: p.delay }}
          />
        </g>
      ))}
    </svg>
  );
}
