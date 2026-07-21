import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Loader2 } from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────
type MessageKind = 'text' | 'product';

interface BaseMessage {
  id: number;
  role: 'user' | 'assistant';
}

interface TextMessage extends BaseMessage {
  kind: 'text';
  content: string;
}

interface ProductMessage extends BaseMessage {
  kind: 'product';
  content: {
    image: string;
    title: string;
    price: string;
  };
}

type Message = TextMessage | ProductMessage;

// ── Preset conversation ────────────────────────────────────────────────────────
const INITIAL_MESSAGES: Omit<Message, 'id'>[] = [
  {
    role: 'user',
    kind: 'product',
    content: {
      image:
        'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=240&h=240&dpr=1',
      title: '2025新版小学奥数举一反三（3~6年级）',
      price: '¥ 26.80',
    },
  },
  {
    role: 'assistant',
    kind: 'text',
    content:
      '您好！我是如意AI智能客服，很高兴为您服务。请问关于这款「2025新版小学奥数举一反三」您想了解什么呢？',
  },
  {
    role: 'user',
    kind: 'text',
    content: '这本书适合几年级的孩子？',
  },
  {
    role: 'assistant',
    kind: 'text',
    content:
      '适合小学 3～6 年级学生使用，内容从基础到提高循序渐进，每章配有经典例题与举一反三练习，是培养奥数思维的优质教辅材料。',
  },
];

const AI_REPLIES = [
  '已为您记录该问题，稍后会有专属顾问跟进，请放心。',
  '根据您的需求，推荐搭配「同步练习册」一起使用，学习效果更佳。',
  '好的，我帮您查询一下库存与物流情况，请稍等片刻。',
  '我们支持 7 天无理由退换货，让您购物无忧。',
  '已为您备注，如有任何问题随时联系我，祝您购物愉快！',
];

// ── Avatars ────────────────────────────────────────────────────────────────────
function UserAvatar() {
  return (
    <div className="w-9 h-9 rounded-full shrink-0 overflow-hidden ring-2 ring-white shadow-sm">
      <img
        src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1"
        alt="买家头像"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function AiAvatar() {
  return (
    <div className="w-9 h-9 rounded-full shrink-0 overflow-hidden ring-2 ring-white shadow-sm bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
      <Sparkles className="w-4 h-4 text-white" />
    </div>
  );
}

// ── Product card bubble ────────────────────────────────────────────────────────
function ProductBubble({ card }: { card: { image: string; title: string; price: string } }) {
  return (
    <div className="flex flex-col bg-white rounded-lg rounded-tl-sm shadow-[0_2px_14px_rgba(0,0,0,0.08)] overflow-hidden w-[220px]">
      <img src={card.image} alt={card.title} className="w-full h-28 object-cover" />
      <div className="px-3 py-2.5">
        <p className="text-[13px] font-semibold text-slate-800 leading-snug line-clamp-2">
          {card.title}
        </p>
        <p className="mt-1.5 text-[15px] font-bold text-red-500">{card.price}</p>
      </div>
    </div>
  );
}

// ── Message bubble ─────────────────────────────────────────────────────────────
function Bubble({ msg }: { msg: Message }) {
  const isUser = msg.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`flex items-end gap-2.5 ${isUser ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {isUser ? <UserAvatar /> : <AiAvatar />}

      <div className={`flex flex-col gap-1 max-w-[74%] ${isUser ? 'items-start' : 'items-end'}`}>
        <span className="text-[11px] text-slate-400 px-1 font-medium">
          {isUser ? '买家' : '如意AI客服'}
        </span>

        {msg.kind === 'product' ? (
          <ProductBubble card={msg.content} />
        ) : (
          <div
            className={
              isUser
                ? 'px-3.5 py-2.5 rounded-lg rounded-tl-sm bg-white text-slate-800 shadow-[0_2px_14px_rgba(0,0,0,0.08)] text-[14px] leading-relaxed'
                : 'px-3.5 py-2.5 rounded-lg rounded-tr-sm bg-brand-600 text-white text-[14px] leading-relaxed shadow-[0_2px_14px_rgba(31,99,240,0.25)]'
            }
          >
            {msg.content}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Typing indicator ───────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="flex items-end gap-2.5 flex-row-reverse"
    >
      <AiAvatar />
      <div className="flex flex-col items-end gap-1">
        <span className="text-[11px] text-slate-400 px-1 font-medium">如意AI客服</span>
        <div className="px-4 py-3 rounded-lg rounded-tr-sm bg-brand-600 flex gap-1.5 items-center">
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
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputVal, setInputVal] = useState('');

  // Stable unique id generator — ref avoids stale-closure duplication bugs.
  const idRef = useRef(0);
  const nextId = useCallback(() => {
    idRef.current += 1;
    return idRef.current;
  }, []);

  const bottomRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const phaseRef = useRef(0);

  // Staggered reveal of preset messages.
  useEffect(() => {
    const delays = [300, 1100, 2100, 3100];
    INITIAL_MESSAGES.forEach((msg, i) => {
      const t = setTimeout(() => {
        setMessages(prev => [...prev, { ...msg, id: nextId() } as Message]);
      }, delays[i] ?? i * 1000);
      timersRef.current.push(t);
    });
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll to newest message / typing indicator.
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, isLoading]);

  function sendMessage() {
    if (isLoading) return; // hard lock — one question at a time
    const text = inputVal.trim();
    if (!text) return;

    const userMsg: Message = {
      id: nextId(),
      role: 'user',
      kind: 'text',
      content: text,
    };
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsLoading(true);

    // Simulate AI latency, then push a single reply.
    const t = setTimeout(() => {
      const reply = AI_REPLIES[phaseRef.current % AI_REPLIES.length];
      phaseRef.current += 1;
      const aiMsg: Message = {
        id: nextId(),
        role: 'assistant',
        kind: 'text',
        content: reply,
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsLoading(false);
    }, 1400);
    timersRef.current.push(t);
  }

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(30,58,138,0.12)] border border-slate-200/70 bg-slate-50">
        {/* Header */}
        <div
          className="flex items-center gap-3 px-5 py-3.5 border-b border-white/60"
          style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(16px)' }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-slate-800 leading-none">如意AI智能客服</p>
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
        <div className="flex flex-col gap-4 px-4 py-5 h-[360px] overflow-y-auto overscroll-contain">
          <AnimatePresence initial={false}>
            {messages.map(msg => (
              <Bubble key={msg.id} msg={msg} />
            ))}
            {isLoading && <TypingIndicator key="typing" />}
          </AnimatePresence>
          <div ref={bottomRef} />
        </div>

        {/* Input area */}
        <div
          className="px-4 py-3 border-t border-white/60"
          style={{ background: 'rgba(255,255,255,0.50)', backdropFilter: 'blur(20px)' }}
        >
          <div className="flex items-center gap-2 bg-white/80 rounded-2xl pl-4 pr-2 py-2 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-white">
            <input
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') sendMessage();
              }}
              placeholder="AI 推荐答案..."
              disabled={isLoading}
              className="flex-1 bg-transparent text-[14px] text-slate-700 placeholder-slate-400 outline-none min-w-0 disabled:opacity-50"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !inputVal.trim()}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-40 disabled:scale-95 hover:scale-105 active:scale-95 bg-brand-600 shadow-glow-soft"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 text-white animate-spin" />
              ) : (
                <Send className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-400">
            由 <span className="font-semibold text-brand-600">如意AI</span> 提供支持 · 回复仅供演示
          </p>
        </div>
      </div>
    </div>
  );
}
