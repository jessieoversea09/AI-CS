import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, Layers } from 'lucide-react';
import { SectionHeader } from './Features';

const stats = [
  { value: 10, suffix: 'M+', label: 'Tasks Automated' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
  { value: 500, suffix: '+', label: 'Enterprise Clients' },
  { value: 24, suffix: '/7', label: 'Support' },
];

const values = [
  {
    icon: Shield,
    title: 'Security',
    desc: '企业级数据加密与隐私保护，SOC 2 Type II 认证，让你的数据始终安全无虑。',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: '持续迭代的前沿 AI 模型，每季度推出新功能，始终保持技术领先优势。',
  },
  {
    icon: Layers,
    title: 'Simplicity',
    desc: '极简的产品设计哲学，让复杂的 AI 能力通过最直觉的交互触手可及。',
  },
];

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const rafRef = useRef<number>(0);

  const start = () => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(target % 1 !== 0 ? 1 : 0)));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return { count, start };
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, start } = useCountUp(value);

  return (
    <motion.div
      className="text-center"
      onViewportEnter={start}
      viewport={{ once: true }}
    >
      <p className="text-5xl font-extrabold text-blue-600 tabular-nums tracking-tight">
        {value % 1 !== 0 ? count.toFixed(1) : Math.round(count)}{suffix}
      </p>
      <p className="mt-2 text-sm text-slate-500">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-slate-50/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="关于我们"
          title="科研与产业并重，推动 AI 从技术走向应用"
          subtitle="我们致力于通过顶尖的 AI 技术，将人类从繁琐的重复劳动中解放出来，专注于更有创造力的工作。"
        />

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>

        {/* Vision image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="relative rounded-2xl border border-slate-200 overflow-hidden shadow-card bg-gradient-to-br from-slate-100 to-brand-50/60 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="团队协作"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6">
              <p className="text-white font-semibold text-lg drop-shadow">
                以 AI 为驱动，与客户共同成长
              </p>
              <p className="text-white/75 text-sm mt-1 drop-shadow">
                成立于 2023 年 · 总部位于深圳
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-glow-soft transition-all"
            >
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-blue-50 text-blue-600">
                <v.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
