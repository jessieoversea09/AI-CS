import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  ShoppingBag,
  Truck,
  Headset,
  ChevronRight,
  ArrowRight,
  MessageSquare,
  Layers,
  Target,
  Medal,
  Zap,
  Filter,
  MessageCircleQuestion,
  ListOrdered,
  Crown,
  Cpu,
  CheckCheck,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Stage = '售前' | '售中' | '售后';

const stageStyles: Record<
  Stage,
  { dot: string; text: string; softBg: string; softBorder: string; iconBg: string; iconText: string; badge: string }
> = {
  售前: {
    dot: 'bg-blue-500',
    text: 'text-blue-600',
    softBg: 'bg-blue-50/60',
    softBorder: 'border-blue-100',
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-600',
    badge: 'bg-blue-100 text-blue-700',
  },
  售中: {
    dot: 'bg-emerald-500',
    text: 'text-emerald-600',
    softBg: 'bg-emerald-50/60',
    softBorder: 'border-emerald-100',
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-600',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  售后: {
    dot: 'bg-orange-500',
    text: 'text-orange-600',
    softBg: 'bg-orange-50/60',
    softBorder: 'border-orange-100',
    iconBg: 'bg-orange-100',
    iconText: 'text-orange-600',
    badge: 'bg-orange-100 text-orange-700',
  },
};

const ruleCards: {
  stage: Stage;
  icon: LucideIcon;
  title: string;
  items: string[];
}[] = [
  {
    stage: '售前',
    icon: ShoppingBag,
    title: '售前规则',
    items: ['商品库存咨询', '优惠价格咨询', '商品推荐策略'],
  },
  {
    stage: '售中',
    icon: Truck,
    title: '售中规则',
    items: ['支付状态查询', '发货进度查询', '物流异常处理'],
  },
  {
    stage: '售后',
    icon: Headset,
    title: '售后规则',
    items: ['退款申请', '退换货处理', '投诉升级'],
  },
];

const flowSteps: {
  icon: LucideIcon;
  title: string;
  desc: string;
  iconBg: string;
  iconText: string;
}[] = [
  { icon: MessageSquare, title: '识别咨询意图', desc: '理解客户问题', iconBg: 'bg-blue-100', iconText: 'text-blue-600' },
  { icon: Layers, title: '判断服务阶段', desc: '售前 / 售中 / 售后', iconBg: 'bg-emerald-100', iconText: 'text-emerald-600' },
  { icon: Target, title: '匹配触发条件', desc: '匹配店铺规则', iconBg: 'bg-violet-100', iconText: 'text-violet-600' },
  { icon: Medal, title: '优先级排序', desc: '优先级高者优先', iconBg: 'bg-orange-100', iconText: 'text-orange-600' },
  { icon: Zap, title: '自动执行回复', desc: 'AI回复 / 转人工', iconBg: 'bg-blue-100', iconText: 'text-blue-600' },
];

const attributeTags: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: MessageCircleQuestion, label: '触发场景', value: '客户问题场景' },
  { icon: MessageSquare, label: '回复逻辑', value: '自动回复内容' },
  { icon: ListOrdered, label: '优先级', value: '数值越小越优先' },
  { icon: Bot, label: 'AI自动回复', value: '或转人工处理' },
];

const examples: Record<
  Stage,
  { user: string; ai: string; rule: string; priority: number; method: string }
> = {
  售前: {
    user: '这款产品还有现货吗？大概多久能到？',
    ai: '您好，该商品目前有现货，下单后24小时内即可发出，预计2-3天送达您手中。',
    rule: '商品库存与发货时效咨询',
    priority: 2,
    method: 'AI自动回复',
  },
  售中: {
    user: '我的订单什么时候发货？',
    ai: '您好，您的订单已付款成功，预计今天18:00前发出，发货后会第一时间同步物流单号。',
    rule: '订单物流进度查询',
    priority: 1,
    method: 'AI自动回复',
  },
  售后: {
    user: '收到的商品有破损，想申请退换货。',
    ai: '很抱歉给您带来不便，已为您登记售后工单，请在订单页申请退换货并上传照片，我们将在1小时内审核处理。',
    rule: '退换货处理流程',
    priority: 1,
    method: 'AI自动回复 + 转人工',
  },
};

const bottomFeatures: {
  icon: LucideIcon;
  iconBg: string;
  iconText: string;
  title: string;
  desc: string;
}[] = [
  {
    icon: Filter,
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-600',
    title: '全流程规则覆盖',
    desc: '覆盖售前、售中、售后全链路场景，服务更完整，体验更统一。',
  },
  {
    icon: Filter,
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-600',
    title: '灵活触发条件',
    desc: '支持多种触发场景与条件组合，精准匹配客户真实需求。',
  },
  {
    icon: Crown,
    iconBg: 'bg-violet-100',
    iconText: 'text-violet-600',
    title: '多规则优先级',
    desc: '优先级自动排序，确保最合适的规则优先生效。',
  },
  {
    icon: Cpu,
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-600',
    title: 'AI自动执行',
    desc: '自动执行回复或转人工，提升效率，降低人工成本。',
  },
];

export default function AIRulesEngine() {
  const [activeStage, setActiveStage] = useState<Stage>('售中');
  const ex = examples[activeStage];
  const s = stageStyles[activeStage];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* ── 背景：浅蓝灰渐变，顶部/底部柔和消失 ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg,rgba(240,246,255,0) 0%,rgba(236,244,255,0.72) 12%,rgba(232,242,255,0.88) 40%,rgba(232,242,255,0.88) 60%,rgba(236,244,255,0.72) 88%,rgba(240,246,255,0) 100%)",
        }}
      />
      {/* 左右两侧柔和收边 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%,rgba(214,233,255,0.30) 0%,rgba(214,233,255,0) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200 bg-brand-50/80 text-brand-700 text-sm font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            产品功能
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
            一套规则，覆盖客户服务全流程
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed max-w-3xl">
            将售前、售中、售后的服务规范配置为店铺规则，AI 自动识别客户意图并执行对应策略，让回复更准确、更统一、更高效。
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
              <ShoppingBag className="w-3.5 h-3.5" />
              售前主动促单
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium">
              <Truck className="w-3.5 h-3.5" />
              售中及时跟进
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-medium">
              <Headset className="w-3.5 h-3.5" />
              售后规范处理
            </span>
          </div>
        </motion.div>

        {/* ── Main grid 3 : 5 : 4 ── */}
        <div className="mt-12 grid grid-cols-12 gap-4">
          {/* Left column — rule categories */}
          <div className="col-span-12 lg:col-span-2 flex flex-col gap-4">
            {ruleCards.map((c, i) => {
              const cs = stageStyles[c.stage];
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl border ${cs.softBorder} ${cs.softBg} bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`grid place-items-center w-9 h-9 rounded-xl ${cs.iconBg} ${cs.iconText} shrink-0`}>
                        <c.icon className="w-4.5 h-4.5" />
                      </span>
                      <h3 className="text-sm font-bold text-gray-900">{c.title}</h3>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className={`w-1.5 h-1.5 rounded-full ${cs.dot} shrink-0`} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Center column — AI rule engine visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden h-full">
              {/* soft blue halo */}
              <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

              <div className="relative flex flex-col items-center text-center">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-glow-soft">
                  <Bot className="w-6 h-6" />
                </span>
                <h3 className="mt-3 text-xl font-bold text-gray-900">AI规则引擎</h3>
                <p className="mt-1 text-xs text-gray-500">智能识别 · 精准匹配 · 自动执行</p>
              </div>

              {/* Flow steps */}
              <div className="relative mt-8 flex items-start justify-between gap-1">
                {flowSteps.map((step, i) => (
                  <div key={step.title} className="flex items-start">
                    <div className="flex flex-col items-center text-center">
                      <span className={`grid place-items-center w-10 h-10 rounded-full ${step.iconBg} ${step.iconText}`}>
                        <step.icon className="w-5 h-5" />
                      </span>
                      <p className="mt-2 text-[11px] font-semibold text-gray-800 leading-tight whitespace-nowrap">{step.title}</p>
                      <p className="mt-0.5 text-[10px] text-gray-500 leading-tight whitespace-nowrap">{step.desc}</p>
                    </div>
                    {i < flowSteps.length - 1 && (
                      <ArrowRight className="mt-3 w-4 h-4 text-gray-300 shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Attribute tags */}
              <div className="relative mt-8 grid grid-cols-2 gap-3">
                {attributeTags.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-start gap-2.5 rounded-xl border border-gray-100 bg-gray-50/50 p-3"
                  >
                    <span className="grid place-items-center w-7 h-7 rounded-lg bg-white text-gray-400 shrink-0 border border-gray-100">
                      <a.icon className="w-3.5 h-3.5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-gray-700">{a.label}</p>
                      <p className="text-[11px] text-gray-500 leading-relaxed">{a.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column — demo & hit rule */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-3"
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] h-full flex flex-col">
              {/* Tabs */}
              <div className="flex items-center gap-2">
                {(['售前', '售中', '售后'] as Stage[]).map((st) => {
                  const active = st === activeStage;
                  return (
                    <button
                      key={st}
                      onClick={() => setActiveStage(st)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        active
                          ? 'bg-blue-500 text-white shadow-sm'
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      {st}示例
                    </button>
                  );
                })}
              </div>

              {/* Chat bubbles */}
              <div className="mt-5 space-y-3">
                {/* User bubble — right */}
                <div className="flex items-start justify-end gap-2">
                  <div className="max-w-[80%]">
                    <div className="rounded-2xl rounded-tr-sm bg-blue-500 text-white px-3.5 py-2.5 text-xs leading-relaxed">
                      {ex.user}
                    </div>
                    <p className="mt-1 text-[10px] text-gray-400 text-right">10:30</p>
                  </div>
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 shrink-0 text-[11px] font-semibold">
                    我
                  </span>
                </div>

                {/* AI bubble — left */}
                <div className="flex items-start justify-start gap-2">
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 shrink-0">
                    <Bot className="w-4 h-4" />
                  </span>
                  <div className="max-w-[80%]">
                    <div className="rounded-2xl rounded-tl-sm bg-blue-50 text-gray-700 px-3.5 py-2.5 text-xs leading-relaxed">
                      {ex.ai}
                    </div>
                    <div className="mt-1 flex items-center justify-start gap-1 text-[10px] text-gray-400">
                      <span>10:30</span>
                      <CheckCheck className="w-3 h-3 text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hit rule panel */}
              <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50/60 p-4">
                <p className="text-xs font-bold text-gray-800 mb-3">本次咨询命中规则</p>
                <dl className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <dt className="text-xs text-gray-500">服务阶段</dt>
                    <dd>
                      <span className={`inline-flex px-2 py-0.5 rounded-md text-[11px] font-semibold ${s.badge}`}>
                        {activeStage}
                      </span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-xs text-gray-500">命中规则</dt>
                    <dd className="text-xs font-medium text-gray-800">{ex.rule}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-xs text-gray-500">优先级</dt>
                    <dd className="text-xs font-semibold text-gray-800">{ex.priority}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-xs text-gray-500">处理方式</dt>
                    <dd className="text-xs font-medium text-gray-800">{ex.method}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom features grid ── */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
          {bottomFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-start gap-3">
                <span className={`grid place-items-center w-10 h-10 rounded-xl ${f.iconBg} ${f.iconText} shrink-0`}>
                  <f.icon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-gray-900">{f.title}</h4>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
