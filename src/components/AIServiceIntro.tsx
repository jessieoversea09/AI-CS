import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MessageCircle,
  Package,
  Megaphone,
  FileQuestion,
  Users,
  BookOpen,
  Bot,
  Clock,
  Zap,
  CheckCircle2,
  MoreHorizontal,
  Sparkles,
  ArrowRight,
  Play,
} from 'lucide-react';

/* ─── Data ─── */

const KNOWLEDGE = [
  { icon: MessageCircle, label: '聊天记录' },
  { icon: Package,       label: '商品详情' },
  { icon: Megaphone,     label: '活动信息' },
  { icon: FileQuestion,  label: '页面 FAQ' },
  { icon: Users,         label: '粉丝提问沉淀' },
  { icon: BookOpen,      label: '客服话术类' },
];

type PlatformImg  = { kind: 'img';   src: string; name: string };
type PlatformColor= { kind: 'color'; color: string; text: string; name: string };
type PlatformDots = { kind: 'dots' };
type Platform = PlatformImg | PlatformColor | PlatformDots;

const PLATFORMS: Platform[] = [
  { kind: 'img',   src: '/assets/logos/淘宝.png',          name: '淘宝' },
  { kind: 'img',   src: '/assets/logos/京东.jpeg',          name: '京东' },
  { kind: 'img',   src: '/assets/logos/抖音.png',           name: '抖店' },
  { kind: 'img',   src: '/assets/logos/拼多多 copy.jpg',    name: '拼多多' },
  { kind: 'img',   src: '/assets/logos/快手.png',           name: '快手' },
  { kind: 'img',   src: '/assets/logos/京麦.png',           name: '京麦' },
  { kind: 'img',   src: '/assets/logos/微信.webp',          name: '微信小店' },
  { kind: 'color', color: '#FF6A00', text: '1688',          name: '1688' },
  { kind: 'dots' },
];

/* ─── Orbital geometry: 9 items on a circle, 40° apart, starting at top ─── */
const ORB_R       = 90;
const ORB_CX      = 125;
const ORB_CY      = 125;
const ORB_SIZE    = 250;

function orbPos(i: number): { x: number; y: number } {
  const rad = ((-90 + i * 40) * Math.PI) / 180;
  return {
    x: ORB_CX + ORB_R * Math.cos(rad),
    y: ORB_CY + ORB_R * Math.sin(rad),
  };
}

/* ─── Shared sub-components ─── */

function DashedCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-dashed border-slate-200 bg-white p-5 ${className}`}>
      {children}
    </div>
  );
}

function StepLabel({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="mt-5 px-1">
      <div className="flex items-center gap-2 text-[11px] mb-2 font-semibold tracking-wide">
        <span className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #60a5fa)' }} />
        <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">Step {n}</span>
        <span className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, #60a5fa)' }} />
      </div>
      <h3 className="text-[15px] font-bold text-slate-900 mb-1.5 leading-snug">{title}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

/* Horizontal dotted connector between columns (xl only) */
function Connector() {
  return (
    <div className="hidden xl:flex shrink-0 items-start pt-[88px] px-2">
      <div className="flex items-center gap-[3px]">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="w-1 h-px bg-slate-300" />
        ))}
        <span className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-slate-300" />
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export default function AIServiceIntro() {
  const ref   = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const card  = (delay: number, children: React.ReactNode, className?: string) => (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={`flex-1 min-w-0 flex flex-col ${className ?? ''}`}
    >
      {children}
    </motion.div>
  );

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Grid texture + radial glow — same as 金牌客服 hero */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-brand-200/40 via-brand-100/20 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200 bg-brand-50/80 text-brand-700 text-sm font-medium mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            新一代企业级 AI 智能客服平台
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-sky-400 bg-clip-text text-transparent">4步构建 AI 智能客服</span>
            <br />
          </h2>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            从店铺知识学习、自动搭建、自动测试到全平台服务，帮助商家快速上线更懂电商的 AI 客服。
          </p>
          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 shadow-glow-soft hover:shadow-glow hover:scale-[1.02] transition-all">
              立即体验
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-brand-300 hover:text-brand-600 transition-all">
              <Play className="w-4 h-4" />
              观看产品演示
            </button>
          </div>
        </motion.div>

        {/* ── 4-column flow ── */}
        <div className="flex flex-col xl:flex-row items-stretch gap-6 xl:gap-0 mt-14">

          {/* ── Module 1: 店铺知识 ── */}
          {card(0.12,
            <>
              <DashedCard className="flex-1 flex flex-col">
                <p className="text-sm font-bold text-slate-700 mb-4 self-start">
                  店铺知识
                </p>

                {/* Top node: 自主学习 */}
                <div className="flex justify-center mb-4">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-slate-500" />
                    </div>
                    {/* dotted line down */}
                    <span className="w-px h-3 border-l border-dashed border-slate-300" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  {KNOWLEDGE.map((k) => (
                    <div
                      key={k.label}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors cursor-default"
                    >
                      <k.icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="text-[13px] text-slate-600 font-medium">{k.label}</span>
                    </div>
                  ))}
                </div>
              </DashedCard>
              <StepLabel n={1} title="1小时自主学习" desc="自动摄取店铺聊天记录、商品详情及话术，快速建立专属知识库。" />
            </>
          )}

          <Connector />

          {/* ── Module 2: 客服 Agent ── */}
          {card(0.22,
            <>
              <DashedCard className="flex-1 flex flex-col items-center justify-center text-center py-8 gap-5">
                <p className="self-start text-sm font-bold text-slate-700 w-full text-left">
                  客服 Agent
                </p>

                {/* Connection nodes — mimic Fig 1 center card */}
                <div className="flex w-full justify-around">
                  {['在线服务', '智能应答'].map((lbl) => (
                    <div key={lbl} className="flex flex-col items-center gap-1.5">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                      <span className="text-[9px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {lbl}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Dotted lines converging to bot icon */}
                <div className="flex w-full items-end justify-center relative" style={{ height: 28 }}>
                  <span className="absolute left-1/4 bottom-0 w-px h-5 border-l border-dashed border-slate-300" />
                  <span className="absolute left-3/4 bottom-0 w-px h-5 border-l border-dashed border-slate-300" />
                </div>

                {/* Bot icon */}
                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg">
                  <Bot className="w-8 h-8 text-white" />
                </div>

                {/* Stats */}
                <div className="w-full flex flex-col gap-2 mt-1">
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="text-xs text-slate-600 font-medium">7×24h 在线</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100">
                    <Zap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="text-xs text-slate-600 font-medium">1秒响应推荐客户</span>
                  </div>
                </div>
              </DashedCard>
              <StepLabel n={2} title="1分钟自动构建" desc="基于学习结果，AI 自动生成对话策略与应答逻辑，一键部署到位。" />
            </>
          )}

          <Connector />

          {/* ── Module 3: 自动测试 ── */}
          {card(0.32,
            <>
              <DashedCard className="flex-1 flex flex-col">
                <p className="text-sm font-bold text-slate-700 mb-4 self-start">
                  自动测试
                </p>

                {/* Status node row */}
                <div className="flex justify-around mb-4">
                  {['对话测试', '质量校验', '压力验证'].map((lbl) => (
                    <div key={lbl} className="flex flex-col items-center gap-1.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        {lbl}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Dotted lines down */}
                <div className="flex w-full justify-center mb-3">
                  <span className="w-px h-4 border-l border-dashed border-slate-300" />
                </div>

                {/* Central AI badge */}
                <div className="flex justify-center mb-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 shadow-md">
                    <Bot className="w-3.5 h-3.5 text-white shrink-0" />
                    <span className="text-[11px] text-white font-semibold">AI 品质检测</span>
                  </div>
                </div>

                {/* Detail items */}
                <div className="flex flex-col gap-2">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[12px] font-semibold text-slate-800 mb-0.5">自动对话测试优化</p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">智能模拟真实对话场景</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[12px] font-semibold text-slate-800 mb-0.5">模拟处理量实时达上亿次</p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">高并发压力测试验证</p>
                  </div>
                </div>
              </DashedCard>
              <StepLabel n={3} title="15分钟自动测试" desc="模拟海量真实对话，自动检验回复准确率与系统稳定性。" />
            </>
          )}

          <Connector />

          {/* ── Module 4: 全平台聚合 — Orbital ── */}
          {card(0.42,
            <>
              <DashedCard className="flex-1 flex flex-col items-center py-5 px-3">
                <p className="self-start w-full text-left text-sm font-bold text-slate-700 mb-4">
                  多平台聚合管理
                </p>

                {/* Orbital */}
                <div className="relative mx-auto" style={{ width: ORB_SIZE, height: ORB_SIZE }}>
                  {/* Outer ring */}
                  <div
                    className="absolute rounded-full border border-dashed border-slate-200"
                    style={{
                      width:  ORB_R * 2,
                      height: ORB_R * 2,
                      left:   ORB_CX - ORB_R,
                      top:    ORB_CY - ORB_R,
                    }}
                  />

                  {/* Center button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="px-3 py-2 rounded-full bg-slate-900 text-white text-[10px] font-semibold shadow-lg leading-tight text-center whitespace-nowrap hover:bg-slate-700 transition-colors">
                      信息统一处理<br />身份无缝切换
                    </button>
                  </div>

                  {/* Platform icons on orbit */}
                  {PLATFORMS.map((p, i) => {
                    const { x, y } = orbPos(i);
                    const name = p.kind !== 'dots' ? p.name : '更多';
                    return (
                      <div
                        key={i}
                        className="absolute flex flex-col items-center gap-[5px]"
                        style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                      >
                        {p.kind === 'dots' ? (
                          <div className="w-9 h-9 flex items-center justify-center">
                            <MoreHorizontal className="w-5 h-5 text-slate-400" />
                          </div>
                        ) : p.kind === 'color' ? (
                          <div
                            className="w-9 h-9 rounded-full flex items-center justify-center shadow-md ring-2 ring-white"
                            style={{ backgroundColor: p.color }}
                          >
                            <span className="text-white text-[8px] font-bold leading-none">{p.text}</span>
                          </div>
                        ) : (
                          <div className="w-9 h-9 rounded-full overflow-hidden shadow-md ring-2 ring-white bg-white">
                            <img src={p.src} alt={p.name} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <span className="text-[8px] text-slate-500 font-medium whitespace-nowrap leading-none">
                          {name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </DashedCard>
              <StepLabel n={4} title="全平台自动服务" desc="一次配置，全渠道覆盖，7×24 小时不间断为买家提供智能服务。" />
            </>
          )}
        </div>

        {/* ── Bottom tag strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            '更懂电商的 AI 客服，让服务更高效，让客户更满意',
            '7 × 24 小时在线服务',
            '秒级响应更高效',
            '降本增效更省心',
          ].map((tag, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
              <span className="text-sm font-medium text-slate-600">{tag}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
