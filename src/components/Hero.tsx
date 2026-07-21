import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import ChatShowcase from './ChatShowcase';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-brand-200/40 via-brand-100/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-40 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-300/30 to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200 bg-brand-50/80 text-brand-700 text-sm font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            新一代企业级 AI 智能客服平台
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            一个会销售的AI
            <br />
            助力<span className="text-gradient">万千电商人</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            如意AI客服基于先进的自然语言与机器学习技术，为企业打造 7×24
            小时智能应答、工单流转、多渠道接入的一体化客服解决方案，让服务更高效，让客户更满意。
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 shadow-glow-soft hover:shadow-glow hover:scale-[1.02] transition-all">
              免费试用
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-700 rounded-xl border border-slate-200 bg-white/70 hover:border-brand-400 hover:text-brand-600 hover:scale-[1.02] transition-all">
              <Play className="w-4 h-4" />
              观看产品演示
            </button>
          </div>
        </motion.div>

        {/* AI 客服对话演示 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 sm:mt-16"
        >
          <ChatShowcase />
        </motion.div>

      </div>
    </section>
  );
}
