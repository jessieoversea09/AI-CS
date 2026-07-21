import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Headphones, Megaphone } from 'lucide-react';

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

      <div className="mt-3 flex items-center gap-2.5">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="flex-1 h-12 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-100 flex items-center justify-center"
          >
            <FileText className="w-4 h-4 text-slate-300" />
          </div>
        ))}
      </div>

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
