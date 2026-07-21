import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Clock,
  Building2,
  Boxes,
  Package,
  Store,
  ShoppingCart,
  BarChart3,
  Timer,
  ShieldCheck,
  TrendingUp,
  Gauge,
  UserPlus,
  Brain,
  Search,
  Workflow,
  Reply,
  Database,
  CheckCircle2,
  ArrowUp,
  MessageSquare,
  Lightbulb,
  LineChart,
  Settings,
  Headphones,
  Globe,
  Lock,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ─────────────── shared ─────────────── */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center"
    >
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${
          light
            ? 'text-blue-100 bg-white/10 border border-white/20'
            : 'text-brand-600 bg-brand-50 border border-brand-100'
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? 'text-blue-100/80' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ─────────────── 1. Hero ─────────────── */

const heroFeatures = [
  { icon: Rocket, text: '秒级响应' },
  { icon: Clock, text: '7×24 小时在线' },
  { icon: Building2, text: '覆盖售前售中售后' },
];

const orbitNodes = [
  { icon: Package, label: '商品知识', color: 'emerald', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' },
  { icon: Store, label: '店铺规则', color: 'orange', pos: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2' },
  { icon: ShoppingCart, label: '订单数据', color: 'blue', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' },
  { icon: BarChart3, label: '数据分析', color: 'purple', pos: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2' },
];

const colorMap: Record<string, { bg: string; ring: string; text: string; dot: string }> = {
  emerald: { bg: 'bg-emerald-500', ring: 'ring-emerald-200', text: 'text-emerald-600', dot: 'bg-emerald-500' },
  orange: { bg: 'bg-orange-500', ring: 'ring-orange-200', text: 'text-orange-600', dot: 'bg-orange-500' },
  blue: { bg: 'bg-blue-500', ring: 'ring-blue-200', text: 'text-blue-600', dot: 'bg-blue-500' },
  purple: { bg: 'bg-purple-500', ring: 'ring-purple-200', text: 'text-purple-600', dot: 'bg-purple-500' },
};

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-brand-200/40 via-brand-100/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-40 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-300/30 to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200 bg-brand-50/80 text-brand-700 text-sm font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              如意 AI · 客户案例
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              让每一次客户咨询
              <br />
              都创造<span className="text-gradient">更好的经营结果</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              如意 AI 将客户理解、企业知识、店铺规则和主动销售能力
              融入完整服务流程，帮助企业实现更高效的客户服务与更持续的业务增长。
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {heroFeatures.map((f) => (
                <li key={f.text} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <f.icon className="w-4 h-4 text-brand-500" />
                  {f.text}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 shadow-glow-soft hover:shadow-glow hover:scale-[1.02] transition-all">
                预约方案演示
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-brand-600 rounded-xl border border-brand-200 bg-white hover:border-brand-400 hover:scale-[1.02] transition-all">
                查看行业方案
              </button>
            </div>
          </motion.div>

          {/* Right central visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md aspect-square"
          >
            {/* orbit rings */}
            <div className="absolute inset-8 rounded-full border border-brand-200/40" />
            <div className="absolute inset-16 rounded-full border border-brand-200/30" />
            <div className="absolute inset-24 rounded-full border border-brand-200/20" />

            {/* center cube */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative">
                <div className="absolute -inset-10 rounded-full bg-brand-400/20 blur-3xl animate-pulseGlow" />
                <div className="relative grid place-items-center w-32 h-32 rounded-3xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-glow animate-floaty">
                  <Boxes className="w-14 h-14 text-white" />
                </div>
                <p className="mt-4 text-center text-sm font-bold text-slate-800">
                  如意 AI 智能服务中枢
                </p>
              </div>
            </div>

            {/* orbit nodes */}
            {orbitNodes.map((n, i) => {
              const c = colorMap[n.color];
              return (
                <div
                  key={n.label}
                  className={`absolute ${n.pos} animate-floatySlow`}
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`grid place-items-center w-14 h-14 rounded-2xl bg-white shadow-card ring-2 ${c.ring}`}>
                      <n.icon className={`w-6 h-6 ${c.text}`} />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 bg-white/80 px-2 py-0.5 rounded-md shadow-sm">
                      {n.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 2. Pain Points ─────────────── */

type Pain = {
  icon: LucideIcon;
  title: string;
  points: string[];
  badge: LucideIcon;
};

const pains: Pain[] = [
  { icon: Timer, title: '响应效率低', points: ['高峰期积压', '非工作时间响应', '重复问题'], badge: Clock },
  { icon: ShieldCheck, title: '服务质量不一', points: ['回答不一致', '员工培训长', '知识更新不同步'], badge: ShieldCheck },
  { icon: TrendingUp, title: '转化机会流失', points: ['只回答不推荐', '丢单挽留差', '高意向无法跟进'], badge: BarChart3 },
  { icon: Gauge, title: '运营管理困难', points: ['过程无法量化', '缺少沉淀', '策略无法优化'], badge: Gauge },
];

function PainPointsSection() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="痛点洞察"
          title="客服问题的背后，是经营链路没有真正打通"
          subtitle="回复慢、知识分散、转化无追踪——企业需要的不只是自动回复，而是一套能理解业务、沉淀经验、持续优化的智能服务闭环。"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-card hover:shadow-glow-soft transition-shadow"
            >
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-slate-100 text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-base font-bold text-slate-900">{p.title}</h3>
              <ul className="mt-3 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <p.badge className="absolute bottom-4 right-4 w-5 h-5 text-slate-200 group-hover:text-brand-300 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 3. Flow (blue bg) ─────────────── */

type FlowStep = { icon: LucideIcon; num: string; title: string; desc: string };

const flowSteps: FlowStep[] = [
  { icon: UserPlus, num: '01', title: '客户接入', desc: '多渠道统一接入，秒级响应' },
  { icon: Brain, num: '02', title: '意图识别', desc: '大模型理解真实需求与情绪' },
  { icon: Search, num: '03', title: '知识检索', desc: '调用企业知识库与商品库' },
  { icon: Workflow, num: '04', title: '规则决策', desc: '结合店铺规则与促销策略' },
  { icon: Reply, num: '05', title: '回复与催单', desc: '专业回复并主动推动转化' },
  { icon: Database, num: '06', title: '数据学习', desc: '沉淀会话数据持续优化' },
];

function FlowSection() {
  return (
    <section className="relative py-24 sm:py-28 bg-gradient-to-br from-brand-600 to-brand-800 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid-bg" />
      </div>
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="服务闭环"
          title="从一次咨询，到一套持续优化的智能服务闭环"
          subtitle="理解客户需求，调用企业知识，执行店铺规则，主动推动转化——每一段对话都在持续学习。"
          light
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {flowSteps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-5 h-full">
                <div className="flex items-center justify-between">
                  <div className="grid place-items-center w-10 h-10 rounded-xl bg-white/15 text-white">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-extrabold text-white/30">{s.num}</span>
                </div>
                <h3 className="mt-4 text-sm font-bold text-white">{s.title}</h3>
                <p className="mt-1.5 text-xs text-blue-100/70 leading-relaxed">{s.desc}</p>
              </div>
              {i < flowSteps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-4 h-4 text-white/40" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-sm text-blue-100/80"
        >
          数据沉淀与反馈，驱动下一轮服务更精准
        </motion.p>
      </div>
    </section>
  );
}

/* ─────────────── 4. Core Solutions ─────────────── */

type Solution = {
  icon: LucideIcon;
  title: string;
  points: string[];
  mock: 'chat' | 'knowledge' | 'sales' | 'ops';
  accent: string;
};

const solutions: Solution[] = [
  { icon: MessageSquare, title: '智能接待', points: ['多渠道统一接入', '秒级自动应答', '人机无缝协同'], mock: 'chat', accent: 'from-brand-500 to-brand-600' },
  { icon: Search, title: '智能知识', points: ['企业知识库自动检索', '商品信息实时同步', '多维度标签管理'], mock: 'knowledge', accent: 'from-emerald-500 to-teal-600' },
  { icon: Lightbulb, title: '智能销售', points: ['客户画像与意向识别', '主动推荐与催单', '转化漏斗分析'], mock: 'sales', accent: 'from-orange-500 to-amber-600' },
  { icon: LineChart, title: '智能运营', points: ['服务数据看板', '会话质量评分', '策略效果复盘'], mock: 'ops', accent: 'from-purple-500 to-indigo-600' },
];

function SolutionMock({ type }: { type: Solution['mock'] }) {
  if (type === 'chat') {
    return (
      <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-2">
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-lg rounded-br-sm bg-brand-500 text-white text-[10px] px-2.5 py-1.5">
            这款补光灯有蓝光吗？
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-lg rounded-bl-sm bg-white border border-slate-200 text-slate-700 text-[10px] px-2.5 py-1.5">
            采用康宁护眼防蓝光膜，无蓝光伤害，为您推荐护眼款～
          </div>
        </div>
        <div className="flex justify-start">
          <div className="rounded-lg bg-white border border-slate-200 p-1.5 flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-300 to-brand-500" />
            <div>
              <p className="text-[10px] font-semibold text-slate-700">护眼补光灯 Pro</p>
              <p className="text-[10px] text-brand-600 font-bold">¥199</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === 'knowledge') {
    return (
      <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
        <div className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-2 py-1.5">
          <Search className="w-3 h-3 text-slate-400" />
          <span className="text-[10px] text-slate-400">搜索知识库…</span>
        </div>
        <div className="mt-2 space-y-1.5">
          {['退换货政策', '物流时效说明', '会员权益', '发票开具流程'].map((k) => (
            <div key={k} className="flex items-center gap-2 rounded-md bg-white border border-slate-100 px-2 py-1.5">
              <div className="w-1 h-1 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-slate-600">{k}</span>
              <CheckCircle2 className="w-3 h-3 text-emerald-400 ml-auto" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (type === 'sales') {
    return (
      <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-orange-100 grid place-items-center">
            <UserPlus className="w-3.5 h-3.5 text-orange-500" />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-slate-700">高意向客户</p>
            <p className="text-[9px] text-slate-400">浏览 3 次 · 加购未付款</p>
          </div>
          <span className="ml-auto text-[9px] font-bold text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded">热</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {['护眼补光灯', '直播环形灯'].map((p) => (
            <div key={p} className="rounded-md bg-white border border-slate-200 p-1.5">
              <div className="w-full h-8 rounded bg-gradient-to-br from-orange-200 to-amber-300" />
              <p className="mt-1 text-[9px] font-semibold text-slate-700">{p}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-slate-600">服务看板</span>
        <span className="text-[9px] text-emerald-600 font-bold">+12.4%</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { l: '响应时长', v: '1.2s', c: 'text-brand-600' },
          { l: '满意度', v: '98%', c: 'text-emerald-600' },
          { l: '转化率', v: '32%', c: 'text-orange-600' },
          { l: '会话量', v: '1,284', c: 'text-purple-600' },
        ].map((m) => (
          <div key={m.l} className="rounded-md bg-white border border-slate-100 p-1.5">
            <p className="text-[9px] text-slate-400">{m.l}</p>
            <p className={`text-sm font-bold ${m.c}`}>{m.v}</p>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1 h-10">
        {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-purple-300 to-purple-500" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

function SolutionsSection() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="核心方案"
          title="如意 AI 核心解决方案"
          subtitle="四大解决方案，覆盖接待、知识、销售、运营全流程"
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card hover:shadow-glow-soft transition-shadow"
            >
              <div className="grid grid-cols-2 gap-4 items-start">
                <div>
                  <div className={`grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-glow-soft`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{s.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <SolutionMock type={s.mock} />
              </div>

              {i === 0 && (
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <span className="text-[10px] text-slate-400">已接入：</span>
                  {[
                    { n: '微信', c: 'bg-emerald-100 text-emerald-600' },
                    { n: '抖音', c: 'bg-slate-100 text-slate-600' },
                    { n: '拼多多', c: 'bg-orange-100 text-orange-600' },
                    { n: '淘宝', c: 'bg-brand-100 text-brand-600' },
                  ].map((p) => (
                    <span key={p.n} className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${p.c}`}>
                      {p.n}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 5. Industry Scenes ─────────────── */

const industries = ['零售电商', '金融服务', '制造行业', '教育服务', '更多行业'];

const retailMetrics = [
  { label: '响应效率提升', value: '68%' },
  { label: '人工重复工作减少', value: '57%' },
  { label: '客户转化率提升', value: '32%' },
  { label: '客户满意度提升', value: '96%' },
];

function IndustrySection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 sm:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="行业场景"
          title="深入行业场景，提供更适合行业的服务策略"
          subtitle="针对不同行业的业务特点，定制专属知识库、话术与转化策略。"
        />

        {/* tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {industries.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === i
                  ? 'bg-brand-500 text-white shadow-glow-soft'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-300 hover:text-brand-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid lg:grid-cols-3 gap-6"
        >
          {/* left: description */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-card">
            <h3 className="text-xl font-bold text-slate-900">零售电商解决方案</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              覆盖售前咨询、售中转化、售后服务的全链路智能客服，帮助电商企业提升响应效率、降低人工成本、提高转化与复购。
            </p>
            <ul className="mt-5 space-y-3">
              {['商品知识自动同步', '促销规则智能应用', '多平台多店铺统一管理', '高意向客户主动跟进'].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:gap-2 transition-all">
              了解方案详情 <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* center: chat */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-card">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-full bg-brand-100 grid place-items-center">
                <MessageSquare className="w-4 h-4 text-brand-600" />
              </div>
              <span className="text-sm font-semibold text-slate-700">在线客服对话</span>
              <span className="ml-auto w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-xl rounded-br-sm bg-brand-500 text-white text-xs px-3 py-2">
                  这款补光灯有蓝光吗？全剖眼吗？
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-xl rounded-bl-sm bg-slate-50 border border-slate-200 text-slate-700 text-xs px-3 py-2 leading-relaxed">
                  这款采用康宁护眼防蓝光膜，有效过滤有害蓝光，保护视力不伤眼～
                  为您推荐同系列护眼款，现在下单立享满减优惠：
                </div>
              </div>
              <div className="flex justify-start">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-2.5 flex items-center gap-2.5 w-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-300 to-brand-500 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-700 truncate">护眼补光灯 Pro</p>
                    <p className="text-[10px] text-slate-400">防蓝光 · 护眼款</p>
                    <p className="text-xs font-bold text-brand-600">¥199 <span className="text-[10px] text-slate-400 line-through font-normal">¥299</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right: metrics */}
          <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 shadow-glow-soft text-white">
            <h3 className="text-lg font-bold">方案效果</h3>
            <p className="mt-1 text-xs text-blue-100/80">真实客户上线 3 个月后的数据表现</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {retailMetrics.map((m) => (
                <div key={m.label} className="rounded-xl bg-white/10 backdrop-blur-sm p-4">
                  <div className="flex items-center gap-1 text-emerald-300">
                    <ArrowUp className="w-3.5 h-3.5" />
                    <span className="text-2xl font-extrabold">{m.value}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-blue-100/80 leading-snug">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── 6. CTA Footer ─────────────── */

const ctaFeatures = [
  { icon: Rocket, text: '快速接入与配置' },
  { icon: Globe, text: '支持多平台和多店铺' },
  { icon: Headphones, text: '提供持续运营支持' },
  { icon: Lock, text: '数据安全与隐私保障' },
];

function CtaSection() {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-brand-200/40 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              为你的业务，配置一套
              <br />
              真正可执行的 <span className="text-gradient">AI 客服方案</span>
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-lg">
              告诉我们你的行业、平台与店铺规模，我们的解决方案顾问将为你提供匹配的产品方案与实施建议。
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 shadow-glow-soft hover:shadow-glow hover:scale-[1.02] transition-all">
                预约方案演示
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-brand-600 rounded-xl border border-brand-200 bg-white hover:border-brand-400 hover:scale-[1.02] transition-all">
                <Settings className="w-4 h-4" />
                联系解决方案顾问
              </button>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-3">
              {ctaFeatures.map((f) => (
                <li key={f.text} className="flex items-center gap-2 text-sm text-slate-600">
                  <f.icon className="w-4 h-4 text-brand-500" />
                  {f.text}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────── page ─────────────── */

export default function CasesPage() {
  return (
    <main>
      <HeroSection />
      <PainPointsSection />
      <FlowSection />
      <SolutionsSection />
      <IndustrySection />
      <CtaSection />
    </main>
  );
}
