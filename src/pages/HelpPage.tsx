import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  Video,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  Rocket,
  Calendar,
  Check,
  ShoppingBag,
  Truck,
  Headset,
  Settings,
  MessageCircle,
  Ticket,
  Phone,
  Bot,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ───────────────────── Section 1: Hero ───────────────────── */

function HeroSection() {
  return (
    <section className="relative pt-20 pb-8 sm:pt-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-100/40 via-blue-50/20 to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-left"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-left">
              <span className="text-gray-900">如意 AI</span>{' '}
              <span className="text-blue-500">帮助中心</span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed max-w-2xl text-left">
              快速上手如意 AI，探索产品功能、使用教程与最佳实践
            </p>
          </motion.div>

          {/* Right: compact floating robot illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="hidden lg:flex shrink-0"
          >
            <div className="relative animate-bounce">
              <div className="absolute inset-0 rounded-full bg-blue-200/30 blur-2xl scale-110 pointer-events-none" />
              <div className="relative grid place-items-center w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <Bot className="w-16 h-16 text-blue-500" />
                <span className="absolute -top-2 -right-2 grid place-items-center w-8 h-8 rounded-xl bg-white border border-blue-100 shadow-sm">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Section 2: Quick Start ───────────────────── */

const quickStartCards: {
  icon: LucideIcon;
  title: string;
  desc: string;
  iconBg: string;
  iconText: string;
  arrow: string;
}[] = [
  { icon: Sparkles, title: '新手入门', desc: '快速了解如意 AI 的核心功能与入门指引', iconBg: 'bg-blue-50', iconText: 'text-blue-600', arrow: 'text-blue-500' },
  { icon: BookOpen, title: '功能教程', desc: '详细的功能使用教学与操作图文', iconBg: 'bg-emerald-50', iconText: 'text-emerald-600', arrow: 'text-emerald-500' },
  { icon: Video, title: '视频教程', desc: '通过视频更直观地学习产品使用方法', iconBg: 'bg-violet-50', iconText: 'text-violet-600', arrow: 'text-violet-500' },
  { icon: HelpCircle, title: '常见问题', desc: '解答使用过程中遇到的各类问题', iconBg: 'bg-orange-50', iconText: 'text-orange-600', arrow: 'text-orange-500' },
];

function QuickStartSection() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {quickStartCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] cursor-pointer"
            >
              <span className={`grid place-items-center w-12 h-12 rounded-xl ${c.iconBg} ${c.iconText}`}>
                <c.icon className="w-6 h-6" />
              </span>
              <h3 className="mt-3 text-base font-bold text-gray-900">{c.title}</h3>
              <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              <div className={`mt-3 flex items-center gap-1 text-sm font-medium ${c.arrow}`}>
                <span>查看详情</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Section 3: By Business Scenario ───────────────────── */

const scenarioCards: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  items: string[];
  iconBg: string;
  iconText: string;
}[] = [
  {
    icon: ShoppingBag,
    title: '售前咨询',
    subtitle: '主动促单与商品推荐',
    items: ['商品咨询与推荐', '优惠活动说明', '库存与价格查询', '促单话术配置'],
    iconBg: 'bg-blue-50',
    iconText: 'text-blue-600',
  },
  {
    icon: Truck,
    title: '售中跟进',
    subtitle: '订单与物流实时跟进',
    items: ['支付状态查询', '发货进度同步', '物流异常处理', '催发货提醒'],
    iconBg: 'bg-emerald-50',
    iconText: 'text-emerald-600',
  },
  {
    icon: Headset,
    title: '售后服务',
    subtitle: '规范处理售后问题',
    items: ['退款申请处理', '退换货流程', '投诉升级流转', '售后满意度回访'],
    iconBg: 'bg-violet-50',
    iconText: 'text-violet-600',
  },
  {
    icon: Settings,
    title: '店铺设置',
    subtitle: '店铺与机器人配置',
    items: ['机器人基础配置', '自动回复规则', '客服排班设置', '数据看板配置'],
    iconBg: 'bg-orange-50',
    iconText: 'text-orange-600',
  },
];

function ScenarioSection() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title with decorative dots */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-200" />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">按业务场景查找帮助</h2>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-200" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-5">
          {scenarioCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] cursor-pointer flex flex-col"
            >
              <span className={`grid place-items-center w-12 h-12 rounded-xl ${c.iconBg} ${c.iconText}`}>
                <c.icon className="w-6 h-6" />
              </span>
              <h3 className="mt-3 text-base font-bold text-gray-900">{c.title}</h3>
              <p className="mt-1 text-xs text-gray-400">{c.subtitle}</p>

              <div className="my-3 h-px bg-gray-100" />

              <ul className="space-y-2 flex-1">
                {c.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-500 group-hover:text-blue-700 transition-colors">
                <span>查看全部</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Section 4: Popular Help & Contact ───────────────────── */

const popularHelp: { title: string; desc: string; answer: string }[] = [
  {
    title: '如何创建和配置 AI 机器人？',
    desc: '从零开始搭建你的专属客服机器人',
    answer:
      '进入「机器人管理」页面，点击「新建机器人」，填写名称并选择服务场景（售前/售中/售后），随后在配置页中设置欢迎语、知识库与回复风格，保存后即可上线。',
  },
  {
    title: '如何设置自动回复规则？',
    desc: '配置售前售中售后全流程自动回复',
    answer:
      '在「规则引擎」中新建规则，选择触发关键词与匹配方式（精确/模糊），再配置回复话术或转人工条件。支持按服务阶段分别设置，保存后实时生效。',
  },
  {
    title: '如何接入多平台店铺？',
    desc: '一键绑定淘宝、京东、拼多多等平台',
    answer:
      '前往「店铺管理 → 接入平台」，选择对应平台并授权登录，系统将自动同步商品与订单信息。接入完成后可在统一看板中管理所有平台会话。',
  },
  {
    title: '如何查看客服数据报表？',
    desc: '实时监控响应率、满意度等核心指标',
    answer:
      '在「数据分析」模块中选择时间范围，即可查看响应率、满意度、会话量、转人工率等核心指标的趋势图表，支持导出 Excel 进行深度分析。',
  },
  {
    title: 'AI 回复不准确怎么办？',
    desc: '优化知识库与规则提升回复准确率',
    answer:
      '建议先在「知识库」中补充常见问答对，并在「规则引擎」中设置兜底回复。同时可查看「会话记录」中标记为「未命中」的对话，针对性补充知识条目。',
  },
  {
    title: '如何配置转人工规则？',
    desc: '复杂问题自动转接人工客服处理',
    answer:
      '在「规则引擎」中新建转人工规则，设置触发条件（如关键词、情绪识别、连续未命中次数），并指定接收的客服组。触发后系统将自动创建转接工单。',
  },
];

const contactWays: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: MessageCircle, title: '在线客服', desc: '7×12 小时实时在线' },
  { icon: Ticket, title: '提交工单', desc: '24 小时内响应处理' },
  { icon: Phone, title: '电话支持', desc: '专属客户成功经理' },
];

function PopularHelpSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left: popular help accordion */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold text-gray-900">热门帮助</h2>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularHelp.map((h, i) => {
                const isOpen = openIdx === i;
                return (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className={`group rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 cursor-pointer ${
                      isOpen
                        ? 'border-blue-200 shadow-[0_8px_30px_rgb(51,128,255,0.10)]'
                        : 'border-gray-100 hover:bg-blue-50/50 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3
                          className={`text-sm font-semibold transition-colors ${
                            isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-700'
                          }`}
                        >
                          {h.title}
                        </h3>
                        <p className="mt-1 text-xs text-gray-400">{h.desc}</p>
                      </div>
                      <ChevronRight
                        className={`mt-0.5 w-5 h-5 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-90 text-blue-600' : 'text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1'
                        }`}
                      />
                    </div>

                    {/* Smooth expand via grid-template-rows */}
                    <div
                      className="grid transition-all duration-300 ease-in-out"
                      style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <p className="border-t border-gray-100 pt-3 mt-3 text-sm text-gray-600 leading-relaxed">
                          {h.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: need more help */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-blue-50/80 p-5 h-full">
              <h3 className="text-lg font-bold text-gray-900">需要更多帮助？</h3>
              <p className="mt-1 text-sm text-gray-500">我们的支持团队随时为您提供专业服务</p>

              <div className="mt-5 space-y-2">
                {contactWays.map((c) => (
                  <div
                    key={c.title}
                    className="group/contact flex items-center gap-3 rounded-lg p-2 transition-all duration-300 hover:bg-white hover:shadow-sm cursor-pointer"
                  >
                    <span className="grid place-items-center w-10 h-10 rounded-full bg-blue-500 text-white shrink-0 transition-transform duration-300 group-hover/contact:scale-110">
                      <c.icon className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900">{c.title}</p>
                      <p className="text-xs text-gray-400">{c.desc}</p>
                    </div>
                    <ChevronRight className="ml-auto w-4 h-4 text-gray-300 transition-all duration-300 group-hover/contact:text-blue-600 group-hover/contact:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Section 5: Bottom CTA ───────────────────── */

function CTASection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 px-8 py-16 sm:px-16 sm:py-20 shadow-glow"
        >
          {/* decorative */}
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-brand-300/30 blur-3xl" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                还没有使用如意 AI？
              </h2>
              <p className="mt-4 text-base sm:text-lg text-brand-100">
                立即体验智能客服的强大能力，让 7×24 小时智能接待为您的业务提效，让销售线索不再流失。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-brand-700 rounded-xl bg-white shadow-lg hover:scale-[1.02] transition-all">
                <Rocket className="w-4 h-4" />
                免费体验如意 AI
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-xl border border-white/40 hover:bg-white/10 transition-all">
                <Calendar className="w-4 h-4" />
                预约产品演示
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── Page ───────────────────── */

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 pt-16">
      <HeroSection />
      <QuickStartSection />
      <ScenarioSection />
      <PopularHelpSection />
      <CTASection />
    </main>
  );
}
