import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';

type Plan = {
  name: string;
  price: string;
  desc: string;
  cta: string;
  featured: boolean;
  features: { label: string; included: boolean }[];
};

const plans: Plan[] = [
  {
    name: '普通版',
    price: '3200元',
    desc: '适合个人与小团队快速起步',
    cta: '立即购买',
    featured: false,
    features: [
      { label: '跨平台数据总览', included: true },
      { label: 'AI质检', included: true },
      { label: '模型自学习', included: true },
      { label: 'AI推荐答案', included: true },
      { label: '聚合接待', included: true }, 
      { label: '记忆能力 7 天', included: true },
      { label: '意图识别弱', included: true },
      { label: '销售大模型 32 B', included: true },
      { label: '回复率 30%-50%', included: true },
    ],
  },
  {
    name: 'Plus版',
    price: '9900元',
    desc: '适合成长型团队规模化使用',
    cta: '立即购买',
    featured: true,
    features: [
      { label: '跨平台数据总览', included: true },
      { label: 'AI质检', included: true },
      { label: '模型自学习', included: true },
      { label: 'AI推荐答案', included: true },
      { label: '聚合接待', included: true }, 
      { label: '记忆能力永久', included: true },
      { label: '意图识别', included: true },
      { label: '售后处理', included: true },
      { label: '工单处理', included: true },
      { label: '物流拦截', included: true },
      { label: '销售大模型 100 B', included: true },
      { label: '回复率 50%-80%', included: true },
    ],
  },
  {
    name: '企业旗舰版',
    price: '19999元',
    desc: '为您定制最佳方案',
    cta: '立即购买',
    featured: false,
    features: [
      { label: '企业级安全合规能力', included: true },
      { label: 'AI 对话量不限', included: true },
      { label: '私有化部署 + 模型微调', included: true },
      { label: '专属客户成功经理', included: true },
    ],
  },
];

function Badge() {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-dashed border-slate-200">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
      <span className="text-sm text-blue-500 font-medium">Pricing</span>
    </span>
  );
}

function RegularCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="relative rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-glow-soft transition-all duration-300 p-7 flex flex-col"
    >
      <p className="text-sm font-medium text-slate-500">{plan.name}</p>
      <div className="mt-3 flex items-end gap-1">
        <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{plan.price}</span>
        <span className="mb-1.5 text-sm text-slate-400">/ 年</span>
      </div>
      <p className="mt-2 text-sm text-slate-500">{plan.desc}</p>

      <p className="mt-6 text-sm font-semibold text-slate-900">包括：</p>
      <ul className="mt-3 flex-1">
        {plan.features.map((f, i) => (
          <li
            key={i}
            className="flex items-center gap-3 py-3 border-b border-slate-100 last:border-b-0"
          >
            {f.included ? (
              <Check className="w-4 h-4 text-slate-700 shrink-0" />
            ) : (
              <X className="w-4 h-4 text-slate-300 shrink-0" />
            )}
            <span className={`text-sm ${f.included ? 'text-slate-700' : 'text-slate-400 line-through'}`}>
              {f.label}
            </span>
          </li>
        ))}
      </ul>

      <button className="mt-6 group inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-b from-slate-700 to-slate-900 hover:shadow-lg transition-all">
        {plan.cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}

function FeaturedCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="relative rounded-2xl bg-gradient-to-b from-blue-500 to-blue-600 shadow-2xl shadow-blue-500/40 transition-all duration-300 p-7 flex flex-col text-white overflow-hidden"
    >
      <span className="absolute top-5 right-5 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm">
        最热门
      </span>

      <p className="text-sm font-medium text-white/80">{plan.name}</p>
      <div className="mt-3 flex items-end gap-1">
        <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
        <span className="mb-1.5 text-sm text-white/70">/ 年</span>
      </div>
      <p className="mt-2 text-sm text-white/80">{plan.desc}</p>

      <p className="mt-6 text-sm font-semibold">包括：</p>
      <ul className="mt-3 flex-1">
        {plan.features.map((f, i) => (
          <li
            key={i}
            className="flex items-center gap-3 py-3 border-b border-white/10 last:border-b-0"
          >
            <Check className="w-4 h-4 text-white shrink-0" />
            <span className="text-sm text-white/95">{f.label}</span>
          </li>
        ))}
      </ul>

      <button className="mt-6 group inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-slate-900 bg-white shadow-lg hover:shadow-xl transition-all">
        {plan.cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <Badge />
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            定价方案
          </h2>
          <p className="mt-4 text-base text-slate-500 leading-relaxed">
            让AI成为您的销售助手，
            <br />
            提升客服效率，增加转化率
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((p, i) =>
            p.featured ? (
              <FeaturedCard key={p.name} plan={p} index={i} />
            ) : (
              <RegularCard key={p.name} plan={p} index={i} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
