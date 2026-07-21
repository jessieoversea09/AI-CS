import { motion } from 'framer-motion';
import { Headphones, BookOpen, Users, LifeBuoy } from 'lucide-react';
import { SectionHeader } from './Features';

const items = [
  { icon: Headphones, title: '7×24 技术支持', desc: '专属技术团队全天候响应，保障业务连续性。' },
  { icon: BookOpen, title: '开发者文档', desc: '完整的 API 文档与 SDK，5 分钟快速接入。' },
  { icon: Users, title: '合作伙伴计划', desc: '与 200+ 生态伙伴共建 AI 服务解决方案。' },
  { icon: LifeBuoy, title: '客户成功服务', desc: '专属顾问全程陪跑，确保上线即见效。' },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-brand-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="合作与支持"
          title="全方位支持，让你无后顾之忧"
          subtitle="从接入到上线，从使用到优化，我们与你并肩前行。"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card hover:shadow-glow-soft transition-shadow"
            >
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
