import { motion, AnimatePresence } from 'framer-motion';
import { Headphones, Megaphone } from 'lucide-react';

interface RightShowcaseColumnProps {
  visibleCount: number;
}

function FloatingCard({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: { duration: 0.5, ease: 'easeOut', delay },
        x: { duration: 0.5, ease: 'easeOut', delay },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.5,
        },
      }}
      className="bg-white rounded-2xl shadow-xl shadow-slate-200 p-4 w-full"
    >
      <h4 className="text-xs font-semibold text-slate-800">Social Media Monitor</h4>

      <p className="mt-2 py-2 text-sm text-slate-600 leading-relaxed min-h-[3rem]">
        xxx xxx xxx
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-50 text-brand-600 text-[10px] font-medium">
          <Headphones className="w-2.5 h-2.5" />
          Customer Support
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-medium">
          <Megaphone className="w-2.5 h-2.5" />
          Marketing
        </span>
      </div>
    </motion.div>
  );
}

export default function RightShowcaseColumn({ visibleCount }: RightShowcaseColumnProps) {
  return (
    <div className="flex flex-col gap-6">
      <AnimatePresence>
        {visibleCount >= 1 && (
          <motion.div
            key="card-1"
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.3 }}
          >
            <FloatingCard delay={0} />
          </motion.div>
        )}
        {visibleCount >= 2 && (
          <motion.div
            key="card-2"
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.3 }}
          >
            <FloatingCard delay={0.15} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
