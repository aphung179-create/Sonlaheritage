import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2 } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const SUGGESTED_QUESTIONS = [
  'Cho biết thông tin bản ghi D04-00016 (Chiêng đồng) và D04-00017 (Bàn là than).',
  'Tư liệu Thủy điện Sơn La (D04-00019) và Đồ trang sức bạc (D04-00020) lưu giữ ở đâu?',
  'Tóm tắt các hiện vật thuộc bộ sưu tập Nhà tù Sơn La từ D04-00001 đến D04-00020.',
  'Ý nghĩa lịch sử của Cây đào Tô Hiệu và tờ báo bí mật Suối Reo?',
];

export function CuratorChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Xin chào quý khách. Tôi là trợ lý giải đáp tư liệu về Bảo tàng Sơn La và Di tích lịch sử Quốc gia đặc biệt Nhà tù Sơn La. Quý khách muốn tìm hiểu giai đoạn, khu vực hay nhân vật lịch sử nào?',
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, loading]);

  const sendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', text: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: messages.slice(1),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Không thể nhận phản hồi từ trợ lý lịch sử.');
      }
      setMessages((prev) => [...prev, { role: 'model', text: data.reply }]);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Mở trợ lý hỏi đáp lịch sử Nhà tù Sơn La"
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-lg bg-[#7A2929] hover:bg-[#5C4033] dark:bg-[#B89A62] dark:hover:bg-[#cbb07b] text-[#FAF8F2] dark:text-[#191715] shadow-lg transition-colors duration-150 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A2929]"
        >
          <MessageSquare className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span className="whitespace-nowrap">Hỏi đáp lịch sử</span>
        </button>
      )}

      {isOpen && (
        <aside
          aria-label="Trợ lý giải đáp lịch sử Nhà tù Sơn La"
          className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] sm:w-[390px] h-[520px] max-h-[82vh] flex flex-col bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3D3731] rounded-lg shadow-2xl overflow-hidden"
        >
          <div className="px-4 py-3 bg-[#252321] text-[#FAF8F2] flex items-center justify-between gap-3">
            <div>
              <h2 className="font-serif text-base font-semibold">Thuyết minh viên Lịch sử AI</h2>
              <p className="text-[11px] text-[#B89A62]">Di tích Quốc gia đặc biệt Nhà tù Sơn La</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Đóng hộp thoại hỏi đáp"
              className="p-2 rounded hover:bg-white/10 text-[#FAF8F2]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-lg leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-[#7A2929] text-[#FAF8F2] dark:bg-[#B89A62] dark:text-[#191715]'
                      : 'bg-[#F3EBDD] dark:bg-[#2E2925] text-[#252321] dark:text-[#F3EBDD] border border-[#E2D6C3] dark:border-[#3D3731]'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {messages.length === 1 && !loading && (
              <div className="pt-2 space-y-2">
                <p className="text-xs font-medium text-[#8A7B6A]">Câu hỏi gợi ý:</p>
                <div className="flex flex-col gap-1.5">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => sendMessage(q)}
                      className="text-left text-xs px-3 py-2 rounded border border-[#D8CBB8] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#2B2723] text-[#5C4033] dark:text-[#E5DAC8] hover:border-[#7A2929] dark:hover:border-[#B89A62] transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-[#8A7B6A]">
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>Đang tra cứu tư liệu lịch sử...</span>
              </div>
            )}

            {error && (
              <div className="p-3 rounded border border-[#7A2929]/40 bg-[#7A2929]/10 text-xs text-[#7A2929] dark:text-[#E89B9B]">
                {error}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="p-3 border-t border-[#E5DAC8] dark:border-[#332E29] bg-[#F3EBDD]/60 dark:bg-[#1C1A17] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Đặt câu hỏi về Nhà tù Sơn La..."
              className="flex-1 px-3 py-2 text-sm rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#252321] text-[#252321] dark:text-[#FAF8F2] placeholder:text-[#8A7B6A] focus:outline-none focus:border-[#7A2929] dark:focus:border-[#B89A62]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Gửi câu hỏi"
              className="min-h-[40px] min-w-[40px] inline-flex items-center justify-center rounded bg-[#7A2929] hover:bg-[#5C4033] disabled:opacity-40 text-[#FAF8F2] dark:bg-[#B89A62] dark:text-[#191715] transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </aside>
      )}
    </>
  );
}
