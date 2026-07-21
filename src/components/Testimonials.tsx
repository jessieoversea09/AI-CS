import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { SectionHeader } from './Features';

const testimonials = [
  {
    quote: 'AI问答推送功能超精准！我们的转化率直接涨了3%。',
    name: '@电商运营小林',
    location: '杭州',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    quote: '百问百答解决了我们80%的重复问题，客户不用等，客服不用烦，效率翻倍！',
    name: '@客服主管王姐',
    location: '广州',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    quote: '策略设置超灵活！大促时自动回复话术，客服效率提升三倍。',
    name: '@店主小李',
    location: '义乌',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    quote: '用了AI客服，响应速度从3分钟变成5秒，客服也不加班了！',
    name: '@电商经理阿杰',
    location: '深圳',
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
];

const logos = [
  'CloudMart', 'FinTech+', 'SaaSCo', 'RetailX', 'EduPro', 'HealthGo',
  'LogiFlow', 'DataSync', 'PayLink', 'ShopMax',
];

function Marquee() {
  return (
    <div className="relative mt-6 overflow-hidden group">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex w-max">
        <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
          {logos.map((l) => (
            <div
              key={l}
              className="flex-shrink-0 mx-3 grid place-items-center h-14 w-36 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-400 hover:text-brand-600 hover:border-brand-200 transition-colors cursor-default"
            >
              {l}
            </div>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused]"
          aria-hidden
        >
          {logos.map((l, i) => (
            <div
              key={`dup-${i}`}
              className="flex-shrink-0 mx-3 grid place-items-center h-14 w-36 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-400 hover:text-brand-600 hover:border-brand-200 transition-colors cursor-default"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-brand-50/30 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="客户案例"
          title="被数百家企业信赖的智能客服平台"
          subtitle="覆盖电商、金融、教育、医疗等多个行业，帮助企业构建以 AI 为核心的现代客户服务体系。"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-card hover:shadow-glow-soft transition-shadow"
            >
              <Quote className="w-8 h-8 text-brand-200" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-slate-700 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto pt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <p className="text-center text-xs font-medium uppercase tracking-widest text-slate-400">
            值得信赖 · 已服务超过 500 家企业客户
          </p>
          <Marquee />
        </motion.div>
      </div>
    </section>
  );
}
