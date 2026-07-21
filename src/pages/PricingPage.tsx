import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  X,
  ArrowRight,
  ChevronDown,
  Shield,
  Zap,
  Brain,
  MessageSquare,
  Database,
  BarChart3,
  Workflow,
  Sparkles,
} from 'lucide-react';
import HeroBackground from '../components/HeroBackground';

type Plan = {
  name: string;
  price: string;
  priceUnit?: string;
  desc: string;
  cta: string;
  featured: boolean;
  custom?: boolean;
  features: string[];
  note: string;
};

const plans: Plan[] = [
  {
    name: '普通版',
    price: '￥3200',
    priceUnit: '/月',
    desc: '面向小型团队，打破基础限制，体验先进未来的工作方式。',
    cta: '立即购买',
    featured: false,
    features: [
      '支持跨平台数据总览',
      '基础 AI 质检',
      '模型自学习',
      'AI 推荐答案',
      '聚合接待',
    ],
    note: '支持 100 用户',
  },
  {
    name: 'Plus 版',
    price: '￥9900',
    priceUnit: '/月',
    desc: '面向成长型团队，提升业务管理效能。',
    cta: '立即购买',
    featured: true,
    features: [
      '含普通版全部能力',
      '永久记忆能力',
      '高级意图识别',
      '售后处理',
      '工单处理',
      '物流拦截',
      '100B 销售大模型',
    ],
    note: '支持 500 用户',
  },
  {
    name: '企业旗舰版',
    price: '专属定制方案',
    desc: '大型企业专属，打造企业数字总部与极致安全能力。',
    cta: '购买咨询',
    featured: false,
    custom: true,
    features: [
      '更高规格用量权益',
      '企业级安全合规能力',
      '复杂组织精细化管控',
      '企业品牌定制',
      '专属定制百亿/千亿大模型部署',
    ],
    note: '无规模上限',
  },
];

const capabilities = [
  { icon: Zap, label: '即时消息' },
  { icon: Database, label: '知识库' },
  { icon: BarChart3, label: '数据分析' },
  { icon: Workflow, label: '工单流转' },
  { icon: Brain, label: 'AI 应答' },
  { icon: MessageSquare, label: '全渠道接入' },
];

type Cell = string | boolean;

const comparisonRows: { feature: string; values: Cell[] }[] = [
  { feature: '跨平台数据总览', values: [true, true, true] },
  { feature: 'AI质检', values: [true, true, true] },
  { feature: '模型自学习', values: [true, true, true] },
  { feature: 'AI推荐答案', values: [true, true, true] },
  { feature: '聚合接待', values: [true, true, true] },
  { feature: '记忆能力', values: ['7天', '永久', '永久'] },
  { feature: '意图识别', values: ['弱', true, '极强 (深度定制)'] },
  { feature: '售后处理', values: [false, true, true] },
  { feature: '工单处理', values: [false, true, true] },
  { feature: '物流拦截', values: [false, true, true] },
  { feature: '销售大模型', values: ['32B', '100B', '专属定制大模型'] },
  { feature: '回复率', values: ['30%-50%', '50%-80%', '80%以上 (效果保障)'] },
];

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const featured = plan.featured;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:shadow-xl ${
        featured
          ? 'bg-gradient-to-b from-brand-500 to-brand-600 text-white shadow-2xl shadow-brand-500/40 lg:-mt-4 lg:mb-4'
          : 'bg-white border border-slate-200 shadow-sm text-slate-900'
      }`}
    >
      {featured && (
        <span className="absolute top-5 right-5 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm">
          <Sparkles className="w-3 h-3" />
          最热门
        </span>
      )}

      <h3 className={`text-lg font-bold ${featured ? 'text-white' : 'text-slate-900'}`}>
        {plan.name}
      </h3>

      {/* Price */}
      <div className="mt-4 flex items-end gap-1">
        {plan.custom ? (
          <div className="flex items-center gap-2">
            <div
              className={`grid place-items-center w-10 h-10 rounded-xl ${
                featured ? 'bg-white/20' : 'bg-brand-50 text-brand-600'
              }`}
            >
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight">为您定制最佳方案</span>
          </div>
        ) : (
          <>
            <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
            <span className={`mb-1.5 text-sm ${featured ? 'text-white/70' : 'text-slate-400'}`}>
              {plan.priceUnit}
            </span>
          </>
        )}
      </div>

      <p className={`mt-3 text-sm leading-relaxed ${featured ? 'text-white/85' : 'text-slate-500'}`}>
        {plan.desc}
      </p>

      {/* CTA */}
      <button
        className={`mt-6 group inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold transition-all ${
          featured
            ? 'bg-white text-brand-700 shadow-lg hover:shadow-xl'
            : plan.custom
            ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-glow-soft hover:shadow-glow'
            : 'border border-slate-300 text-slate-800 hover:border-brand-400 hover:text-brand-600'
        }`}
      >
        {plan.cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Features */}
      <p className={`mt-7 text-sm font-semibold ${featured ? 'text-white' : 'text-slate-900'}`}>
        包含功能
      </p>
      <ul className="mt-3 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                featured ? 'text-white' : 'text-brand-500'
              }`}
            />
            <span className={`text-sm ${featured ? 'text-white/95' : 'text-slate-700'}`}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* Note */}
      <div
        className={`mt-6 pt-4 border-t text-xs ${
          featured ? 'border-white/15 text-white/70' : 'border-slate-100 text-slate-400'
        }`}
      >
        {plan.note}
      </div>
    </motion.div>
  );
}

function CellValue({ value, featured }: { value: Cell; featured?: boolean }) {
  if (value === true)
    return <Check className={`w-4 h-4 mx-auto ${featured ? 'text-brand-600' : 'text-brand-500'}`} />;
  if (value === false) return <X className="w-4 h-4 mx-auto text-slate-300" />;
  return (
    <span className={`text-xs ${featured ? 'text-brand-600 font-semibold' : 'text-slate-600'}`}>
      {value}
    </span>
  );
}

export default function PricingPage() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <HeroBackground />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200 bg-brand-50/80 text-brand-700 text-sm font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              定价方案
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              下一代 <span className="text-gradient">AI 智能工作平台</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              从初创团队到大型企业，提供多种套餐与部署方式，满足不同规模客户的智能化服务需求。
            </p>

            {/* Capability chips */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur-md text-sm font-medium text-slate-700 shadow-sm"
                >
                  <c.icon className="w-4 h-4 text-brand-500" />
                  {c.label}
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-xs text-slate-400">*所有版本需按年付费</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map((p, i) => (
              <PlanCard key={p.name} plan={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison toggle + table */}
      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <button
              onClick={() => setOpen((v) => !v)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 shadow-sm hover:border-brand-300 hover:text-brand-600 transition-all"
            >
              版本功能对比
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  open ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-10 rounded-2xl border border-slate-200 bg-white shadow-card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-brand-50 to-white">
                          <th
                            className="sticky top-0 z-10 px-6 py-4 text-left text-sm font-semibold text-slate-900 backdrop-blur-md"
                            style={{ backgroundColor: 'rgba(238, 246, 255, 0.95)' }}
                          >
                            功能对比
                          </th>
                          {['普通版', 'Plus版本', '企业旗舰版'].map((h, i) => (
                            <th
                              key={h}
                              className="sticky top-0 z-10 px-6 py-4 text-center text-sm font-semibold backdrop-blur-md"
                              style={{
                                backgroundColor:
                                  i === 1 ? 'rgba(51,128,255,0.08)' : 'rgba(238, 246, 255, 0.95)',
                                color: i === 1 ? '#1f63f0' : '#0f172a',
                              }}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonRows.map((row, ri) => (
                          <tr
                            key={row.feature}
                            className={ri % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}
                          >
                            <td className="px-6 py-4 text-sm font-medium text-slate-700">
                              {row.feature}
                            </td>
                            {row.values.map((v, ci) => (
                              <td
                                key={ci}
                                className={`px-6 py-4 text-center ${
                                  ci === 1 ? 'bg-brand-50/40' : ''
                                }`}
                              >
                                <CellValue value={v} featured={ci === 1} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
