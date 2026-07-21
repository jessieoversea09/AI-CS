import { motion } from 'framer-motion';
import { Brain, MessagesSquare, Workflow, BarChart3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
  accent: string;
};

const features: Feature[] = [
  {
    icon: Brain,
    title: '大模型智能应答',
    desc: '基于自研行业大模型，精准理解用户意图，自动生成专业、有温度的回复。',
    points: ['多轮对话上下文记忆', '意图识别准确率 95%+', '支持 20+ 行业知识包'],
    accent: 'from-brand-500 to-brand-700',
  },
  {
    icon: MessagesSquare,
    title: '全渠道统一接入',
    desc: '网页、App、微信、企微、邮件、电话，一个后台统一管理所有客户对话。',
    points: ['微信 / 企微 / 飞书生态', 'SDK 5 分钟接入', '历史记录全量同步'],
    accent: 'from-sky-500 to-brand-600',
  },
  {
    icon: Workflow,
    title: '智能工单流转',
    desc: 'AI 自动识别复杂问题并生成工单，按规则流转至对应团队，无缝人机协同。',
    points: ['自动分级与路由', 'SLA 超时预警', '工单全流程可追溯'],
    accent: 'from-cyan-500 to-brand-500',
  },
  {
    icon: BarChart3,
    title: '数据洞察分析',
    desc: '实时仪表盘呈现服务指标，AI 辅助生成洞察报告，持续优化客户体验。',
    points: ['会话质量自动评分', '热点问题聚类', '可导出 BI 报表'],
    accent: 'from-blue-500 to-indigo-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="产品功能"
          title="一套平台，覆盖智能客服全链路"
          subtitle="从 AI 自动应答到人工协同，从全渠道接入到数据洞察，如意AI客服为企业提供端到端的服务能力。"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-card hover:shadow-glow-soft transition-shadow"
            >
              <div
                className={`grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-glow-soft`}
              >
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              <ul className="mt-4 space-y-2">
                {f.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-brand-200/0 group-hover:ring-brand-200/60 transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center"
    >
      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-brand-600 bg-brand-50 border border-brand-100">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-600 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
