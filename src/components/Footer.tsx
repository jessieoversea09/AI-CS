import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const columns = [
  {
    title: '产品',
    links: ['产品功能', '定价', '下载客户端', '更新日志', 'API 文档'],
  },
  {
    title: '公司',
    links: ['关于我们', '客户案例', '合作与支持', '加入我们', '联系我们'],
  },
];

const CONTACT = [
  { icon: Mail,   text: '1404615699@qq.com' },
  { icon: Phone,  text: '15736014399' },
  { icon: MapPin, text: '深圳市南山区粤海街道高新区社区粤兴一道8号香港城市大学产学研大楼203C' },
];

type SocialId = 'wechat' | 'xhs';

interface Social {
  id: SocialId;
  label: string;
  logo: string;
  qr?: string;
  qrLabel?: string;
}

const SOCIALS: Social[] = [
  {
    id: 'wechat',
    label: '微信',
    logo: '/assets/logos/wechat-logo.png',
    qr: '/assets/images/image.png',
    qrLabel: '扫码添加微信',
  },
  {
    id: 'xhs',
    label: '小红书',
    logo: '/assets/logos/XiaohongshuLOGO.png',
  },
];

export default function Footer() {
  const [active, setActive] = useState<SocialId | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActive(null);
      }
    }
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  function toggle(id: SocialId) {
    setActive((prev) => (prev === id ? null : id));
  }

  return (
    <footer className="relative bg-slate-900 text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-12">

          {/* ── Brand ── */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <img src="/assets/logos/logo.png" alt="如意AI客服" className="h-9 w-auto brightness-0 invert" />
              <span className="text-lg font-extrabold tracking-tight text-white whitespace-nowrap">
                如意AI 智能客服
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
              新一代企业级 AI 智能客服平台，让每一次客户对话都如你所愿。助力企业构建以 AI 为核心的现代客户服务体系。
            </p>

            {/* Social icons */}
            <div ref={containerRef} className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => {
                const isActive = active === s.id;
                return (
                  <div key={s.id} className="relative">
                    {/* QR popover — floats above the icon row */}
                    {isActive && s.qr && (
                      <div
                        className="absolute z-50 flex flex-col items-center p-3 bg-white rounded-2xl shadow-2xl"
                        style={{ bottom: 'calc(100% + 12px)', left: '50%', transform: 'translateX(-50%)' }}
                      >
                        <img
                          src={s.qr}
                          alt={`${s.label}二维码`}
                          className="w-44 h-44 object-contain rounded-lg"
                        />
                        {s.qrLabel && (
                          <p className="mt-1.5 text-[11px] text-slate-500 font-medium">{s.qrLabel}</p>
                        )}
                        {/* Down arrow */}
                        <span
                          className="absolute w-3 h-3 bg-white rotate-45"
                          style={{ bottom: '-6px', left: '50%', transform: 'translateX(-50%) rotate(45deg)' }}
                        />
                      </div>
                    )}

                    <button
                      onClick={() => toggle(s.id)}
                      aria-label={s.label}
                      className="group relative w-10 h-10 rounded-xl transition-transform duration-200 hover:scale-110 focus:outline-none"
                    >
                      {/* Grayscale (white-ish) by default → full colour on hover / active */}
                      <img
                        src={s.logo}
                        alt={s.label}
                        className={`w-full h-full object-cover rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'grayscale-0 opacity-100'
                            : 'grayscale brightness-150 opacity-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100'
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Link columns ── */}
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-slate-400 hover:text-brand-400 transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Contact info ── */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white">联系我们</h4>
            <ul className="mt-4 space-y-3">
              {CONTACT.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-400 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} 翌东寰球(深圳)数字科技有限公司 粤ICP备2022040200号-2
          </p>
        </div>
      </div>
    </footer>
  );
}
