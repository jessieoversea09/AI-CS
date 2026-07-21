import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, FileText, BarChart3, Sparkles } from 'lucide-react';

// ── Floating 3D decoration icons ─────────────────────────────────────────────
function FloatingDeco({
  className,
  rotate = 0,
  delay = 0,
  children,
}: {
  className: string;
  rotate?: number;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ rotate: `${rotate}deg` }}
      animate={{ y: [0, -8, 0], rotate: [rotate, rotate + 4, rotate] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  );
}

// ── Card 1: Signup ────────────────────────────────────────────────────────────
function SignupCard() {
  return (
    <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200 p-5 py-4">
      <FloatingDeco className="-top-3 -right-3" rotate={12} delay={0}>
        <div className="w-7 h-7 rounded-md bg-gradient-to-br from-brand-400 to-brand-600 shadow-md" />
      </FloatingDeco>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center">
          <User className="w-4 h-4 text-brand-600" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-800 leading-tight">Signup</h3>
          <p className="text-[11px] text-slate-400 leading-tight">Signup for free trial</p>
        </div>
      </div>

      <div className="mt-3.5 space-y-2">
        <div className="h-2 rounded-full bg-slate-100" />
        <div className="h-2 w-3/4 rounded-full bg-slate-100" />
      </div>

      <button className="mt-3.5 w-full py-2 rounded-lg bg-brand-600 text-white text-xs font-semibold hover:bg-brand-700 transition-colors">
        Signup
      </button>
    </div>
  );
}

// ── Card 2: Integration ──────────────────────────────────────────────────────
function IntegrationCard() {
  const [on, setOn] = useState(false);
  return (
    <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200 p-5 py-4">
      <FloatingDeco className="-bottom-3 -left-3" rotate={-12} delay={1.2}>
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-300 to-emerald-500 shadow-md" />
      </FloatingDeco>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center">
          <FileText className="w-4 h-4 text-brand-600" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-800 leading-tight">Integration</h3>
          <p className="text-[11px] text-slate-400 leading-tight">Integrate your channels</p>
        </div>
      </div>

      <div className="mt-3.5 space-y-2">
        <div className="h-2 rounded-full bg-slate-100" />
        <div className="h-2 w-5/6 rounded-full bg-slate-100" />
        <div className="h-2 w-2/3 rounded-full bg-slate-100" />
      </div>

      <div className="mt-3.5 flex items-center justify-between">
        <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-500 text-xs font-medium hover:bg-slate-200 transition-colors">
          Details
        </button>
        <button
          onClick={() => setOn(v => !v)}
          className={`relative w-11 h-6 rounded-full transition-colors ${on ? 'bg-emerald-500' : 'bg-slate-200'}`}
          aria-pressed={on}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${on ? 'translate-x-5' : ''}`}
          />
        </button>
      </div>
    </div>
  );
}

// ── Card 3: Stats ────────────────────────────────────────────────────────────
function StatsCard() {
  return (
    <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200 p-5 py-4 overflow-hidden">
      <FloatingDeco className="-top-3 -left-3" rotate={-8} delay={0.6}>
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-amber-300 to-amber-500 shadow-md" />
      </FloatingDeco>
      <FloatingDeco className="-bottom-3 -right-3" rotate={14} delay={1.8}>
        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-brand-300 to-brand-500 shadow-md" />
      </FloatingDeco>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center">
          <BarChart3 className="w-4 h-4 text-brand-600" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-slate-800 leading-none tracking-tight">28,839</h3>
          <p className="mt-0.5 text-[11px] text-slate-400 leading-tight">New Conversations</p>
        </div>
      </div>

      {/* Simple line chart */}
      <div className="mt-3 h-14 w-full">
        <svg viewBox="0 0 200 56" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="statsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(51,128,255,0.28)" />
              <stop offset="100%" stopColor="rgba(51,128,255,0)" />
            </linearGradient>
          </defs>
          <path
            d="M0,42 L20,38 L40,30 L60,34 L80,22 L100,26 L120,16 L140,20 L160,10 L180,14 L200,6 L200,56 L0,56 Z"
            fill="url(#statsFill)"
          />
          <path
            d="M0,42 L20,38 L40,30 L60,34 L80,22 L100,26 L120,16 L140,20 L160,10 L180,14 L200,6"
            fill="none"
            stroke="#3380ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <p className="mt-2 text-[11px] text-slate-400 flex items-center gap-1">
        <Sparkles className="w-3 h-3 text-brand-500" />
        Powered By Assistia AI
      </p>
    </div>
  );
}

// ── Exported left column ──────────────────────────────────────────────────────
export default function LeftShowcaseColumn() {
  return (
    <div className="flex flex-col gap-4">
      <SignupCard />
      <IntegrationCard />
      <StatsCard />
    </div>
  );
}
