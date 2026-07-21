import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 px-8 py-16 sm:px-16 sm:py-20 text-center shadow-glow"
        >
          {/* decorative */}
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-brand-300/30 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              让 AI 接待每一次咨询，持续创造客户价值
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-100 max-w-2xl mx-auto">
              基于企业知识快速构建专属 AI 客服，实现 7×24 小时智能接待、客户需求识别与人机协同，让服务更高效，让销售线索不再流失。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-brand-700 rounded-xl bg-white shadow-lg hover:scale-[1.02] transition-all">
                免费体验如意 AI 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-xl border border-white/40 hover:bg-white/10 transition-all">
                预约产品演示
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
