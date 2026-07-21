import { motion } from 'framer-motion';
import {
  Minus,
  Square,
  X,
  LayoutDashboard,
  Headset,
  Store,
  Wallet,
  MessagesSquare,
  BarChart3,
  Settings,
  HelpCircle,
  Bell,
  Bot,
  Cog,
  Share2,
  CreditCard,
  UserCircle,
  ChevronDown,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: '数据总览' },
  { icon: Headset, label: '客服总览' },
  { icon: Store, label: '店铺总览' },
  { icon: Wallet, label: '薪酬总览' },
  { icon: MessagesSquare, label: '聊天记录' },
  { icon: BarChart3, label: '产品分析' },
  { icon: Settings, label: '策略设置', active: true },
  { icon: HelpCircle, label: '百问百答', badge: 9 },
  { icon: Bell, label: '通知中心' },
  { icon: Bot, label: 'AI反馈' },
  { icon: Cog, label: 'AI配置' },
];

const tabs = ['欢迎语配置', '跟单配置', '超时未回复策略', '催付策略', '付款后策略'];

const toggleCards = [
  { title: '新客回复', text: '你好，我是如意人工客服，有什么可以帮你？' },
  { title: '老客回复', text: '欢迎回来，我是如意人工客服，有什么可以帮你？' },
  { title: '时间问候', text: '示例：(早上好)，请问有什么能够帮到您的呢？' },
  { title: '转接欢迎语', text: '我是如意人工客服，很高兴为你服务' },
];

function Toggle() {
  return (
    <button
      type="button"
      className="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full bg-brand-500 transition-colors"
    >
      <span className="inline-block h-4 w-4 translate-x-4 rounded-full bg-white shadow transition-transform" />
    </button>
  );
}

export default function AppShowcaseSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Subtle background glow */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-brand-200/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200 bg-brand-50/80 text-brand-700 text-sm font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            全流程智能策略引擎
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
            一个平台，掌控全局
          </h2>
          <p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            直观易用的管理工作台，让团队管理者都能高效协作、精准配置。让每个服务环节都精准高效从咨询到售
后全程智能化
          </p>
        </motion.div>

        {/* App interface showcase */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Glow halo behind card */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-300/20 via-brand-200/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

          {/* Floating Widget — bottom-left */}
          <div className="absolute -bottom-6 -left-6 sm:-left-15 z-20 w-64 pointer-events-none select-none">
            <div className="rounded-2xl bg-white/90 backdrop-blur-sm p-5 shadow-[0_8px_30px_rgb(0,0,0,0.10)] border border-slate-100">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-orange-100">
                  <span className="w-2 h-2 rounded-full bg-orange-400 block" />
                </span>
                <p className="text-gray-800 font-semibold text-base leading-none">策略可视化配置</p>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                可视化策略编辑器，企业级权限管理。从加购到售后全流程自动化，智能催付+跟单+关怀
              </p>
            </div>
          </div>

          {/* Floating Widget — top-right */}
          <div className="absolute -top-1 -right-6 sm:-right-10 z-20 w-72 pointer-events-none select-none">
            <div className="rounded-2xl bg-white/90 backdrop-blur-sm p-5 shadow-[0_8px_30px_rgb(0,0,0,0.10)] border border-slate-100">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-blue-100">
                  <span className="w-2 h-2 rounded-full bg-blue-400 block" />
                </span>
                <p className="text-gray-800 font-semibold text-base leading-none">智能客户分层</p>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                新老客自动识别，触发个性化欢迎语，提升客户体验和复购率。
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl border border-slate-200 bg-white shadow-card overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-glow-soft">
            {/* Window bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/80">
              <span className="text-xs text-slate-400 font-mono">企业版 工作台</span>
              <div className="flex items-center gap-2">
                <span className="grid place-items-center w-6 h-6 rounded-md hover:bg-slate-200 text-slate-400">
                  <Minus className="w-3.5 h-3.5" />
                </span>
                <span className="grid place-items-center w-6 h-6 rounded-md hover:bg-slate-200 text-slate-400">
                  <Square className="w-3 h-3" />
                </span>
                <span className="grid place-items-center w-6 h-6 rounded-md hover:bg-red-50 hover:text-red-500 text-slate-400">
                  <X className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div className="grid grid-cols-12 min-h-[560px]">
              {/* Sidebar */}
              <div className="col-span-3 bg-[#1e293b] p-3 hidden sm:block">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li
                      key={item.label}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium ${
                        item.active
                          ? 'bg-brand-500 text-white'
                          : 'text-slate-300 hover:bg-slate-700/60'
                      }`}
                    >
                      <item.icon className="w-4 h-4 shrink-0" />
                      <span className="flex-1 truncate">{item.label}</span>
                      {item.badge && (
                        <span className="grid place-items-center min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] font-bold">
                          {item.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main */}
              <div className="col-span-12 sm:col-span-9 bg-white flex flex-col">
                {/* Top bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100">
                  <h3 className="text-sm font-bold text-slate-800">策略配置</h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1 hover:text-brand-600 cursor-pointer">
                      <Share2 className="w-3.5 h-3.5" />
                      分享
                    </span>
                    <span className="inline-flex items-center gap-1 hover:text-brand-600 cursor-pointer">
                      <CreditCard className="w-3.5 h-3.5" />
                      充值
                    </span>
                    <span className="inline-flex items-center gap-1 hover:text-brand-600 cursor-pointer">
                      <UserCircle className="w-3.5 h-3.5" />
                      账号
                    </span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 px-5 pt-3 overflow-x-auto">
                  {tabs.map((t, i) => (
                    <button
                      key={t}
                      className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                        i === 0
                          ? 'bg-brand-50 text-brand-600 border border-brand-200'
                          : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* Body */}
                <div className="flex-1 px-5 py-4 space-y-4 overflow-y-auto">
                  {/* Base info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">
                        策略状态
                      </label>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-green-50 text-green-600 text-xs font-semibold border border-green-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        已启用
                      </span>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">
                        生效用户
                      </label>
                      <div className="flex items-center justify-between px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs text-slate-700">
                        全部用户
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">
                        回复时长
                      </label>
                      <div className="flex items-center rounded-lg border border-slate-200 bg-white overflow-hidden">
                        <button className="px-2.5 py-2 text-slate-400 hover:bg-slate-50 text-sm">−</button>
                        <input
                          type="text"
                          defaultValue="30"
                          readOnly
                          className="w-full text-center py-2 text-xs text-slate-700 outline-none"
                        />
                        <button className="px-2.5 py-2 text-slate-400 hover:bg-slate-50 text-sm">+</button>
                      </div>
                    </div>
                  </div>

                  {/* Toggle cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {toggleCards.map((c) => (
                      <div
                        key={c.title}
                        className="rounded-xl border border-slate-200 bg-slate-50/40 p-3.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-700">{c.title}</span>
                          <Toggle />
                        </div>
                        <textarea
                          readOnly
                          defaultValue={c.text}
                          rows={2}
                          className="mt-2.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 leading-relaxed resize-none outline-none"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 px-5 py-4 border-t border-slate-100">
                  <button className="px-4 py-2 text-xs font-semibold text-white rounded-lg bg-brand-500 hover:bg-brand-600 transition-colors">
                    修改策略
                  </button>
                  <button className="px-4 py-2 text-xs font-semibold text-white rounded-lg bg-orange-500 hover:bg-orange-600 transition-colors">
                    禁用策略
                  </button>
                  <button className="px-4 py-2 text-xs font-semibold text-white rounded-lg bg-red-500 hover:bg-red-600 transition-colors">
                    删除策略
                  </button>
                  <button className="px-4 py-2 text-xs font-semibold text-white rounded-lg bg-green-500 hover:bg-green-600 transition-colors">
                    复用策略
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
