import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  LayoutDashboard,
  BookOpen,
  Target,
  SlidersHorizontal,
  Flame,
  MessageSquareText,
  BarChart3,
  MonitorDot,
  Settings,
  Boxes,
  Search,
  Bell,
  Pencil,
  Trash2,
  Brain,
  Lightbulb,
  Wand2,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import AIServiceIntro from '../components/AIServiceIntro';
import AppShowcaseSection from '../components/AppShowcaseSection';
import AIRulesEngine from '../components/AIRulesEngine';
import HeroBackground from '../components/HeroBackground';

/* ─────────────── 数据 ─────────────── */

const sidebarMenu: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: '数据总览', icon: LayoutDashboard },
  { label: '客服总览', icon: BookOpen },
  { label: '店铺总览', icon: Target },
  { label: '薪酬总览', icon: SlidersHorizontal },
  { label: '聊天记录', icon: Flame },
  { label: '产品分析', icon: MessageSquareText },
  { label: '策略设置', icon: BarChart3 },
  { label: '百问百答', icon: MonitorDot, active: true },
  { label: '通知中心', icon: Settings },
  { label: 'AI反馈', icon: MessageSquareText },
  { label: 'AI配置', icon: BarChart3 },
];

type QA = { q: string; a: string; count: number; date: string; enabled: boolean };

const initialPending: QA[] = [
  {
    q: '店铺信息在系统里安全吗？会不会泄露？',
    a: '您好，我们严守店铺与用户隐私安全：数据采用银行级加密，存于国内合规云服务器，防泄露丢失；店铺数据、聊天记录仅限本人及授权子账号查阅，绝不挪作他用。聊天、配置数据永久留存，支持后台导出、自主手动删除，数据所有权完全归您掌控。',
    count: 37,
    date: '2026-07-02',
    enabled: true,
  },
  {
    q: '如何开通会员权益？',
    a: '您好！开通会员非常简单，进入个人中心后点击"会员权益"页面，选择适合您的套餐后按照提示完成支付即可立即生效。如需了解不同套餐的具体权益内容，欢迎随时咨询我们的在线客服，我们将为您详细介绍。',
    count: 28,
    date: '2026-07-01',
    enabled: false,
  },
];

const initialAuthorized: QA[] = [
  {
    q: '使用过程中 AI 应答不准确，有售后人员帮忙优化吗？',
    a: '有的，我们提供专属售后运维服务，您可以通过系统后台联系在线技术支持，工作人员会协助您优化百问百答知识库、调整回复话术。工作日 9:00-18:00 内 1 小时内响应，保障系统使用效果。',
    count: 2,
    date: '2026-07-02',
    enabled: true,
  },
  {
    q: '下单付款后多久能发货？多久可以开始用？',
    a: '付款成功后系统将自动开通服务，通常 5 分钟内即可登录使用。如遇节假日或特殊情况，最长不超过 1 个工作日完成开通，请耐心等待或联系客服跟进进度。',
    count: 1,
    date: '2026-07-02',
    enabled: true,
  },
];

const leftNodes: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Brain, title: '智能经验沉淀', desc: '自动分析金牌客服对话，提炼高转化话术模板' },
  { icon: Lightbulb, title: '热点问题挖掘', desc: '实时监测店铺咨询动态，智能识别高频问题TOP100' },
  { icon: Wand2, title: '持续优化升级', desc: '基于历史最佳回复，自动生成优质应答方案' },
  { icon: TrendingUp, title: '轻松部署启用', desc: '简单配置即可启用，无需专业技术知识' },
];

/* ─────────────── 子组件 ─────────────── */

function Toggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative w-9 h-5 rounded-full transition-colors shrink-0 ${on ? 'bg-brand-500' : 'bg-slate-200'}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${on ? 'translate-x-4' : ''}`}
      />
    </button>
  );
}

function QACard({ item, onToggle }: { item: QA; onToggle: () => void }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-card transition-shadow">
      {/* Question row */}
      <div className="flex items-start gap-2 mb-3">
        <span className="mt-0.5 grid place-items-center w-5 h-5 rounded-md bg-brand-500 text-white text-[10px] font-bold shrink-0">Q</span>
        <p className="flex-1 text-sm font-semibold text-slate-800 leading-snug">{item.q}</p>
      </div>

      {/* Answer */}
      <div className="ml-7 mb-3">
        <div className="flex items-start gap-2">
          <span className="mt-0.5 grid place-items-center w-5 h-5 rounded-md bg-emerald-500 text-white text-[10px] font-bold shrink-0">A</span>
          <p className="text-xs text-slate-600 leading-relaxed">{item.a}</p>
        </div>
      </div>

      {/* Meta row */}
      <div className="ml-7 flex items-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-xs text-slate-500">
          回复数量 {item.count}
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-xs text-slate-500">
          创建时间 {item.date}
        </span>
        <div className="ml-auto flex items-center gap-2">
          <button className="grid place-items-center w-7 h-7 rounded-lg hover:bg-brand-50 text-slate-400 hover:text-brand-500 transition-colors">
            <Pencil className="w-3.5 h-3.5" />
          </button>
          <button className="grid place-items-center w-7 h-7 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors">
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <Toggle on={item.enabled} onClick={onToggle} />
        </div>
      </div>
    </div>
  );
}

function DashboardMock() {
  const [pending, setPending] = useState(initialPending);
  const [authorized, setAuthorized] = useState(initialAuthorized);

  const togglePending = (i: number) =>
    setPending((prev) => prev.map((r, idx) => (idx === i ? { ...r, enabled: !r.enabled } : r)));
  const toggleAuthorized = (i: number) =>
    setAuthorized((prev) => prev.map((r, idx) => (idx === i ? { ...r, enabled: !r.enabled } : r)));

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white shadow-card overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 bg-slate-50/60">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="ml-3 flex-1 max-w-xs flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-xs text-slate-400">搜索问题或关键词…</span>
        </div>
        <Bell className="w-4 h-4 text-slate-400 ml-auto" />
      </div>

      <div className="flex min-h-0">
        {/* Sidebar */}
        <aside className="hidden sm:flex flex-col w-44 shrink-0 border-r border-slate-100 bg-slate-50/40 py-4">
          <div className="px-3 mb-4 flex items-center gap-2">
            <div className="grid place-items-center w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white shrink-0">
              <Boxes className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-slate-800 leading-tight">
              百问百答<br />智能配置系统
            </span>
          </div>
          <nav className="flex flex-col gap-0.5 px-2">
            {sidebarMenu.map((m) => (
              <div
                key={m.label}
                className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-[11px] font-medium transition-colors ${
                  m.active
                    ? 'bg-brand-500 text-white shadow-glow-soft'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <m.icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{m.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main: left–right split, no tabs */}
        <div className="flex-1 min-w-0 p-4 overflow-auto">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-900">TOP100 问题管理</h3>
            <span className="text-[11px] text-slate-400">实时更新</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Pending column */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-500" />
                <span className="text-xs font-semibold text-slate-700">
                  待授权问题（{pending.length}）
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {pending.map((item, i) => (
                  <QACard key={item.q} item={item} onToggle={() => togglePending(i)} />
                ))}
              </div>
              <p className="mt-2 text-[11px] text-slate-400">共 {pending.length} 条，第 1/1 页</p>
            </div>

            {/* Authorized column */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-slate-700">
                  已授权问题（{authorized.length}）
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {authorized.map((item, i) => (
                  <QACard key={item.q} item={item} onToggle={() => toggleAuthorized(i)} />
                ))}
              </div>
              <p className="mt-2 text-[11px] text-slate-400">共 {authorized.length} 条，第 1/1 页</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── 侧边功能节点卡片 ─────────────── */

function SideCard({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card hover:shadow-glow-soft transition-shadow"
    >
      <div className="flex items-center gap-2">
        <div className="grid place-items-center w-8 h-8 rounded-lg bg-brand-50 text-brand-600 shrink-0">
          <Icon className="w-4 h-4" />
        </div>
        <h4 className="text-sm font-bold text-slate-900">{title}</h4>
      </div>
      <p className="mt-2 ml-10 text-xs text-slate-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

/* ─────────────── CTA ─────────────── */

const ctaTags = ['极速接入与配置', '输送行业最佳实践', '全面协助业务提效'];

function FeaturesCTA() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-blue-50/40 to-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Main title */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            智能客服，
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              AI
            </span>{' '}
            用如意
          </h2>

          {/* Sub title */}
          <p className="mt-5 text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            联系我们，如意 AI 效能顾问将为您提供全方位支持
          </p>

          {/* Feature tags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {ctaTags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all">
              联系我们
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-blue-600 border border-blue-300 hover:bg-blue-50 transition-all">
              预约演示
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── 页面 ─────────────── */

export default function FeaturesPage() {
  return (
    <main>
      {/* ── 新一代企业级 AI 智能客服平台 介绍页（第一页）── */}
      <AIServiceIntro />

      {/* ── 企业级工作台 界面展示（第二页）── */}
      <AppShowcaseSection />

      {/* ── Hero ── */}
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
              产品功能
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
              金牌客服经验
              <br />
              沉淀为可复用的智能规则
            </h1>
            <p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              智能经验沉淀，热点问题挖掘，持续优化升级，轻松部署启用
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Dashboard showcase ── */}
      <section className="relative pb-8 sm:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-start">

            {/* Left column: AI cube card + 4 nodes */}
            <div className="lg:col-span-3 flex lg:flex-col gap-4 order-2 lg:order-1">
              {/* AI cube card — top of left column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-gradient-to-b from-brand-50 to-white p-4 shadow-card overflow-hidden relative"
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-brand-200/40 blur-2xl pointer-events-none" />
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    className="relative w-12 h-12 grid place-items-center shrink-0"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-glow opacity-90" />
                    <Boxes className="relative w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">从对话中学习</p>
                    <p className="text-sm font-bold text-gradient leading-tight">从经验中成长</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                  数据驱动决策，让服务更高效
                </p>
              </motion.div>

              {/* 4 feature nodes */}
              {leftNodes.map((n, i) => (
                <SideCard
                  key={n.title}
                  icon={n.icon}
                  title={n.title}
                  desc={n.desc}
                  delay={(i + 1) * 0.1}
                />
              ))}
            </div>

            {/* Center: full-width dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-9 order-1 lg:order-2"
            >
              <DashboardMock />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 柔和雾化过渡 ── */}
      <div
        aria-hidden="true"
        style={{
          position: "relative",
          height: "160px",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* 横向椭圆光晕 */}
        <span
          style={{
            position: "absolute",
            left: "10%",
            right: "10%",
            top: "50%",
            height: "120px",
            transform: "translateY(-50%)",
            background:
              "linear-gradient(90deg,rgba(239,246,255,0) 0%,rgba(225,238,255,0.72) 20%,rgba(234,242,255,0.9) 50%,rgba(225,238,255,0.72) 80%,rgba(239,246,255,0) 100%)",
            filter: "blur(28px)",
            borderRadius: "999px",
            WebkitMaskImage:
              "linear-gradient(90deg,transparent 0%,black 18%,black 82%,transparent 100%)",
            maskImage:
              "linear-gradient(90deg,transparent 0%,black 18%,black 82%,transparent 100%)",
          }}
        />
        {/* 上下方向柔化层 */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(238,245,255,0.45) 40%,rgba(238,245,255,0.45) 60%,rgba(255,255,255,0) 100%)",
            filter: "blur(18px)",
          }}
        />
      </div>

      {/* ── AI 规则引擎 展示页（最后一页）── */}
      <AIRulesEngine />

      {/* ── CTA ── */}
      <FeaturesCTA />
    </main>
  );
}
