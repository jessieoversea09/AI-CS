import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import ChatDemo from './ChatDemo';
import LeftShowcaseColumn from './LeftShowcaseColumn';
import RightShowcaseColumn from './RightShowcaseColumn';

export default function ChatShowcase() {
  const [aiCount, setAiCount] = useState(0);

  const handleAiCount = useCallback((count: number) => {
    setAiCount(count);
  }, []);

  return (
    <div className="w-full px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-6 lg:gap-8 items-start">
          {/* Left column — static showcase cards */}
          <div className="hidden lg:block">
            <LeftShowcaseColumn />
          </div>

          {/* Center column — AI chat window */}
          <div className="flex justify-center">
            <ChatDemo onAiCountChange={handleAiCount} />
          </div>

          {/* Right column — linked floating cards */}
          <div className="hidden lg:block">
            <RightShowcaseColumn visibleCount={aiCount} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
