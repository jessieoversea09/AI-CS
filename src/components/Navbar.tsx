import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: '产品功能', href: '/features' },
  { label: '解决方案', href: '/cases' },
  { label: '定价', href: '/pricing' },
  { label: '帮助中心', href: '/help' },
  { label: '商务合作', href: '/cooperation' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? 'mt-2' : 'mt-4'
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl border border-slate-200/80 px-4 sm:px-6 py-2.5 transition-all duration-300 ${
            scrolled ? 'glass shadow-card' : 'bg-white/70 backdrop-blur-md'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/logos/logo.png"
              alt="如意AI客服 Logo"
              className="h-9 w-auto"
            />
            <span className="text-lg font-extrabold tracking-tight text-brand-600 whitespace-nowrap">
              如意AI 智能客服
            </span>
          </Link>

          {/* Center nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => {
              const active = location.pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      active
                        ? 'text-brand-600 bg-brand-50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-brand-600 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              下载客户端
            </a>
            <button className="px-4 py-2 text-sm font-medium text-slate-700 rounded-lg border border-slate-200 hover:border-brand-400 hover:text-brand-600 hover:shadow-sm transition-all">
              联系销售
            </button>
            <button className="px-5 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 shadow-glow-soft hover:shadow-glow hover:scale-[1.02] transition-all">
              登录 / 注册
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden grid place-items-center w-10 h-10 rounded-lg border border-slate-200 text-slate-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 rounded-2xl border border-slate-200 glass shadow-card p-4"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((l) => {
                  const active = location.pathname === l.href;
                  return (
                    <li key={l.href}>
                      <Link
                        to={l.href}
                        className={`block w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                          active
                            ? 'text-brand-600 bg-brand-50'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-3 flex flex-col gap-2">
                <button className="px-4 py-2.5 text-sm font-medium text-slate-700 rounded-lg border border-slate-200">
                  联系销售
                </button>
                <button className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 shadow-glow-soft">
                  登录 / 注册
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
