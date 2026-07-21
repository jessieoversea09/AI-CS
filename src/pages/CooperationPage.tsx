import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Play,
  GraduationCap,
  Globe,
  Brain,
  Briefcase,
  Handshake,
  Building,
  Users,
  Rocket,
  Check,
  MessageSquare,
  FileText,
  Cog,
  Headphones,
  Box,
  Send,
  Calendar,
} from 'lucide-react';

import HeroBackground from '../components/HeroBackground';

/* ───────────────────── Shared bits ───────────────────── */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm mb-4">
      {children}
    </span>
  );
}

function SectionTitle({ badge, title }: { badge: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <Badge>{badge}</Badge>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">{title}</h2>
    </div>
  );
}

function IconBadge({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <span className="inline-flex shrink-0 items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white p-3 rounded-xl shadow-md shadow-blue-500/30">
      <Icon className="w-6 h-6" />
    </span>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

/* ───────────────────── Section 1: Hero ───────────────────── */

function HeroSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      <HeroBackground />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center text-center"
        >
          <Badge>
            <Sparkles className="w-3.5 h-3.5" />
            开放 · 共赢 · 长期合作
          </Badge>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="text-gray-900">源自顶尖科研团队，专注 AI 客服</span>
            <br />
            <span className="text-blue-500">助力企业创造更大商业价值</span>
          </h1>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-2xl">
            如意 AI 致力于与合作伙伴携手，共同探索 AI 技术在更多行业的创新应用。秉持开放、共赢的理念，期待与您共创智能未来。
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button className="group inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-7 py-3.5 rounded-full font-medium shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40">
              联系合作
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-7 py-3.5 rounded-full font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
              <Play className="w-4 h-4 text-blue-500" />
              预约演示
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── Section 2: Team ───────────────────── */

const teamCards = [
  { icon: GraduationCap, title: '顶尖学府背景', desc: '毕业于全球知名高校，汇聚博士与硕士人才' },
  { icon: Globe, title: '国际化团队', desc: '来自世界多地，具备全球化视野与协作能力' },
  { icon: Brain, title: '多元专业背景', desc: '覆盖 AI、NLP、数据、产品、运营等领域' },
  { icon: Briefcase, title: '丰富产业经验', desc: '深耕智能客服、电商等行业，具备落地实践' },
];

function TeamSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle badge="团队实力" title="汇聚全球顶尖人才" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {teamCards.map((c, i) => (
            <motion.div
              key={c.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="group bg-white rounded-3xl p-7 shadow-[0_2px_20px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-5"
            >
              <IconBadge icon={c.icon} />
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Section 3: Research ───────────────────── */

const researchMetrics = ['20+ 核心成员', '多项科研专利', '顶会论文发表', '行业落地案例'];

const orbitalNodes = [
  { className: 'top-2 left-1/2 -translate-x-1/2 -translate-x-1/2', lines: ['大语言模型', 'LLM'] },
  { className: 'left-0 top-1/3', lines: ['自然语言处理', 'NLP'] },
  { className: 'right-0 top-1/4', lines: ['数据融合与分析', 'DATA'] },
  { className: 'bottom-10 left-6', lines: ['智能客服与', '智能销售'] },
  { className: 'bottom-14 right-6', lines: ['产业应用落地', 'APP'] },
];

function OrbitalTopology() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
      {/* Orbital rings */}
      <div className="absolute inset-0 m-auto w-[95%] h-[95%] rounded-full border border-dashed border-blue-200 animate-[spin_30s_linear_infinite]" />
      <div className="absolute inset-0 m-auto w-[68%] h-[68%] rounded-full border border-dashed border-blue-200" />
      <div className="absolute inset-0 m-auto w-[42%] h-[42%] rounded-full border border-dashed border-blue-100" />

      {/* Center hub */}
      <div className="relative z-10 flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl px-5 py-4 shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-bounce">
        <Box className="w-10 h-10 text-white" />
        <span className="mt-1.5 text-sm font-bold text-white">科研创新</span>
      </div>

      {/* Floating badges */}
      {orbitalNodes.map((n) => (
        <div
          key={n.lines.join('|')}
          className={`absolute ${n.className} bg-white text-center rounded-full px-4 py-2 sm:px-5 sm:py-2 shadow-lg border border-blue-50 text-xs sm:text-sm`}
        >
          {n.lines.map((l, idx) => (
            <span
              key={l}
              className={
                idx === 1 && n.lines.length > 1 && /^[A-Z]+$/.test(n.lines[1])
                  ? 'block text-blue-500 font-semibold'
                  : 'block text-gray-700'
              }
            >
              {l}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function ResearchSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-50/50 to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-left"
          >
            <Badge>科研实力</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              前沿技术，商业化落地
            </h2>

            <p className="mt-5 text-gray-500 leading-relaxed">
              团队成员长期深耕自然语言处理、大模型与知识图谱等前沿方向，持续将科研成果转化为可落地的产品能力。
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              我们相信技术的价值在于应用。通过将顶尖科研能力与真实业务场景深度结合，如意 AI 已在智能客服、电商运营等领域实现规模化落地。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {researchMetrics.map((m) => (
                <span
                  key={m}
                  className="inline-flex items-center gap-1.5 bg-white border border-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm shadow-sm"
                >
                  <Check className="w-4 h-4 text-blue-500" />
                  {m}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: orbital topology */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <OrbitalTopology />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Section 4: Cooperation ───────────────────── */

const cooperationCards = [
  { icon: Handshake, title: '联合解决方案', desc: '面向零售、电商、服务业联合打造 AI 客服与经营提效方案' },
  { icon: Building, title: '行业合作', desc: '针对垂直行业共建知识库、业务规则与应用场景景' },
  { icon: Users, title: '渠道合作', desc: '与生态伙伴共同推广产品与服务，扩大市场覆盖' },
  { icon: Rocket, title: '产学研协同', desc: '推动技术研发、成果转化与创新落地' },
];

function CooperationSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle badge="合作模式" title="多维合作，共建生态" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {cooperationCards.map((c, i) => (
            <motion.div
              key={c.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="group bg-white rounded-3xl p-7 shadow-[0_2px_20px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-5"
            >
              <IconBadge icon={c.icon} />
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Section 5: Process ───────────────────── */

const processSteps = [
  { icon: MessageSquare, num: 1, title: '需求沟通', desc: '了解合作意向与业务场景' },
  { icon: FileText, num: 2, title: '方案对接', desc: '定制合作方案与技术对接' },
  { icon: Cog, num: 3, title: '联合推进', desc: '协同落地实施与联调测试' },
  { icon: Headphones, num: 4, title: '持续服务', desc: '长期运维与迭代优化' },
];

function ProcessSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-50/50 to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle badge="服务流程" title="标准规范的对接流程" />

        <div className="mt-10 relative">
          {/* Dashed connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-blue-200 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="flex flex-col items-center text-center relative"
              >
                <span className="relative inline-flex items-center justify-center bg-blue-500 text-white p-3 rounded-xl shadow-lg shadow-blue-500/30">
                  <s.icon className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 grid place-items-center w-5 h-5 rounded-full bg-white text-blue-600 text-xs font-bold border border-blue-100">
                    {s.num}
                  </span>
                </span>
                <h3 className="mt-5 text-base font-bold text-gray-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed max-w-[200px]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Section 6: CTA ───────────────────── */

function CTASection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-16 md:px-12"
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-blue-300/20 blur-2xl pointer-events-none" />

          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Left: text */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                携手共创智能客服与智能经营新体验
              </h2>
              <p className="text-base text-blue-100 leading-relaxed max-w-2xl">
                无论您是企业用户、行业合作伙伴，还是学术与研究机构，如意 AI 都期待与您携手，共创智能未来。
              </p>
            </div>

            {/* Right: buttons */}
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 shadow-lg shadow-blue-900/20">
                <Send className="w-5 h-5" />
                立即洽谈合作
              </button>
              <button className="inline-flex items-center gap-2 bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                <Calendar className="w-5 h-5" />
                申请产品演示
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── Page ───────────────────── */

export default function CooperationPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 pt-16">
      <HeroSection />
      <TeamSection />
      <ResearchSection />
      <CooperationSection />
      <ProcessSection />
      <CTASection />
    </main>
  );
}
