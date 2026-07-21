import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────────
type ProductCard = {
  kind: 'product';
  image: string;
  title: string;
  price: string;
};

type TextMsg = {
  kind: 'text';
  text: string;
};

type Payload = ProductCard | TextMsg;

interface Message {
  id: number;
  role: 'user' | 'ai';
  payload: Payload;
}

// ── Preset conversation ────────────────────────────────────────────────────────
const INITIAL: Omit<Message, 'id'>[] = [
  {
    role: 'user',
    payload: {
      kind: 'product',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1',
      title: '2025新版小学奥数举一反三（3~6年级）',
      price: '¥ 26.80',
    },
  },
  {
    role: 'ai',
    payload: {
      kind: 'text',
      text: '您好！我是福客AI智能客服 😊 很高兴为您服务！请问关于这款「2025新版小学奥数举一反三」您有什么问题呢？',
    },
  },
  {
    role: 'user',
    payload: { kind: 'text', text: '这本书适合几年级的孩子？' },
  },
  {
    role: 'ai',
    payload: {
      kind: 'text',
      text: '适合小学 3～6 年级学生使用，内容从基础到提高循序渐进，每章配有经典例题和举一反三练习，是培养奥数思维的优质教辅材料 📚',
    },
  },
  {
    role: 'user',
    payload: { kind: 'text', text: '有没有配套的视频讲解？' },
  },
  {
    role: 'ai',
    payload: {
      kind: 'text',
      text: '有的！购买本书可免费获赠 30 节配套视频讲解，扫描书中二维码即可观看。如需完整课程套装，现在报名享 8 折优惠 🎉',
    },
  },
];

const AI_REPLIES = [
  '感谢您的提问！这个问题我已记录，稍后会有专属顾问为您跟进 💼',
  '明白了！根据您的需求，我推荐搭配「同步练习册」一起使用，效果更佳 ✨',
  '好的，我这边帮您查询一下库存情况，请稍等片刻 🔍',
  '当然可以！我们支持 7 天无理由退换货，购物无忧 🛡️',
  '已为您备注，如有任何问题随时联系我，祝您购物愉快 😊',
];

// ── Sub-components ─────────────────────────────────────────────────────────────
function UserAvatar() {
  return (
    <div className="w-9 h-9 rounded-full shrink-0 overflow-hidden ring-2 ring-white shadow-sm">
      <img
        src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1"
        alt="用户头像"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function AiAvatar() {
  return (
    <div className="w-9 h-9 rounded-full shrink-0 overflow-hidden ring-2 ring-white shadow-sm bg-gradient-to-br from-[#2A36B1] to-[#4F6BFF] flex items-center justify-center">
      <Sparkles className="w-4 h-4 text-white" />
    </div>
  );
}

function ProductBubble({ card }: { card: ProductCard }) {
  return (
    <div className="flex flex-col gap-0 bg-white rounded-2xl rounded-tl-sm shadow-[0_2px_16px_rgba(0,0,0,0.08)] overflow-hidden w-[220px]">
      <img src={card.image} alt={card.title} className="w-full h-28 object-cover" />
      <div className="px-3 py-2.5">
        <p className="text-[13px] font-semibold text-gray-800 leading-snug line-clamp-2">{card.title}</p>
        <p className="mt-1.5 text-[13px] font-bold text-red-500">{card.price}</p>
      </div>
    </div>
  );
}

function Bubble({ msg }: { msg: Message }) {
  const isUser = msg.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-end gap-2.5 ${isUser ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {isUser ? <UserAvatar /> : <AiAvatar />}

      <div className={`flex flex-col gap-1 max-w-[72%] ${isUser ? 'items-start' : 'items-end'}`}>
        {!isUser && (
          <span className="text-[11px] text-gray-400 px-1 font-medium">福客AI智能客服</span>
        )}
        {msg.payload.kind === 'product' ? (
          <ProductBubble card={msg.payload} />
        ) : (
          <div
            className={
              isUser
                ? 'px-4 py-2.5 rounded-2xl rounded-tl-sm bg-white text-gray-800 shadow-[0_2px_16px_rgba(0,0,0,0.08)] text-[14px] leading-relaxed'
                : 'px-4 py-2.5 rounded-2xl rounded-tr-sm text-white text-[14px] leading-relaxed'
            }
            style={!isUser ? { background: 'linear-gradient(135deg,#2A36B1 0%,#3D52D5 100%)' } : undefined}
          >
            {msg.payload.text}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25 }}
      className="flex items-end gap-2.5 flex-row-reverse"
    >
      <AiAvatar />
      <div className="flex flex-col items-end gap-1">
        <span className="text-[11px] text-gray-400 px-1 font-medium">福客AI智能客服</span>
        <div
          className="px-4 py-3 rounded-2xl rounded-tr-sm flex gap-1.5 items-center"
          style={{ background: 'linear-gradient(135deg,#2A36B1 0%,#3D52D5 100%)' }}
        >
          {[0, 0.18, 0.36].map((d, i) => (
            <motion.span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white/70"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: d, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function ChatDemo() {
  const [visible, setVisible] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [nextId, setNextId] = useState(INITIAL.length);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const phaseRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Staggered reveal of preset messages
  useEffect(() => {
    const delays = [400, 1200, 2200, 3300, 4200, 5300];
    INITIAL.forEach((msg, i) => {
      timerRef.current = setTimeout(() => {
        setVisible(prev => [...prev, { ...msg, id: i }]);
      }, delays[i] ?? i * 1000);
    });
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [visible, isTyping]);

  function sendMessage() {
    const text = inputVal.trim();
    if (!text) return;
    setInputVal('');

    const userMsg: Message = {
      id: nextId,
      role: 'user',
      payload: { kind: 'text', text },
    };
    setNextId(n => n + 2);
    setVisible(prev => [...prev, userMsg]);

    // Simulate AI typing then reply
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const reply = AI_REPLIES[phaseRef.current % AI_REPLIES.length];
      phaseRef.current += 1;
      setVisible(prev => [
        ...prev,
        { id: nextId + 1, role: 'ai', payload: { kind: 'text', text: reply } },
      ]);
    }, 1400);
  }

  return (
    <div className="w-full flex justify-center px-4">
      {/* Outer shell */}
      <div
        className="w-full max-w-[480px] rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(60,50,120,0.18)] border border-white/60"
        style={{
          background: 'linear-gradient(160deg, #EDE8F8 0%, #E6EEF8 55%, #DFF0F7 100%)',
        }}
      >
        {/* Header bar */}
        <div
          className="flex items-center gap-3 px-5 py-3.5 border-b border-white/50"
          style={{
            background: 'rgba(255,255,255,0.55)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2A36B1] to-[#4F6BFF] flex items-center justify-center shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-gray-800 leading-none">福客AI智能客服</p>
            <p className="mt-0.5 text-[11px] text-emerald-500 font-medium leading-none flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              在线
            </p>
          </div>
          <div className="flex gap-1.5">
            {['bg-red-400', 'bg-amber-400', 'bg-emerald-400'].map(c => (
              <span key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
            ))}
          </div>
        </div>

        {/* Message list */}
        <div className="flex flex-col gap-4 px-4 py-5 h-[360px] overflow-y-auto overscroll-contain scroll-smooth">
          <AnimatePresence initial={false}>
            {visible.map(msg => (
              <Bubble key={msg.id} msg={msg} />
            ))}
            {isTyping && <TypingIndicator key="typing" />}
          </AnimatePresence>
          <div ref={bottomRef} />
        </div>

        {/* Input area */}
        <div
          className="px-4 py-3 border-t border-white/50"
          style={{
            background: 'rgba(255,255,255,0.50)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex items-center gap-2 bg-white/80 rounded-2xl px-4 py-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-white">
            <input
              ref={inputRef}
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="AI想听到的话题是什么？"
              className="flex-1 bg-transparent text-[14px] text-gray-700 placeholder-gray-400 outline-none min-w-0"
            />
            <button
              onClick={sendMessage}
              disabled={!inputVal.trim()}
              className="w-8 h-8 rounded-xl flex items-center justify-center transition-all disabled:opacity-30 disabled:scale-95 hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg,#2A36B1 0%,#3D52D5 100%)' }}
            >
              <Send className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
          <p className="mt-2 text-center text-[11px] text-gray-400">
            由 <span className="font-semibold text-[#2A36B1]">如意AI</span> 提供支持 · 回复仅供演示
          </p>
        </div>
      </div>
    </div>
  );
}
