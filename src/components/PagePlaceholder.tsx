import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type Props = {
  title: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
};

export default function PagePlaceholder({ title, eyebrow, description, icon: Icon }: Props) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-brand-200/40 via-brand-100/20 to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200 bg-brand-50/80 text-brand-700 text-sm font-medium">
            <Icon className="w-3.5 h-3.5" />
            {eyebrow}
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            {title}
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {description}
          </p>

          <div className="mt-12 inline-flex flex-col items-center gap-4 px-10 py-12 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-card">
            <div className="grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-glow-soft">
              <Icon className="w-8 h-8" />
            </div>
            <p className="text-base font-semibold text-slate-800">
              {title}页面建设中
            </p>
            <p className="text-sm text-slate-500">内容即将上线，敬请期待</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
