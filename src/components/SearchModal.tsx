import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchResultItem {
  type: 'artifact' | 'timeline' | 'zone' | 'figure' | 'gallery';
  typeLabel: string;
  id: string;
  title: string;
  subtitle: string;
  route: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUGGESTED_QUERIES = [
  'D04-00016',
  'Chiêng đồng',
  'Bàn là than',
  'Thủy điện Sơn La',
  'Trang sức bạc',
  'Tô Hiệu',
  'Suối Reo',
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;
    setTimeout(() => inputRef.current?.focus(), 60);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const trimmed = query.trim();
    if (!trimmed) {
      setResults([]);
      setError(null);
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(trimmed)}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error('Không thể thực hiện tìm kiếm.');
        const data = await res.json();
        setResults(Array.isArray(data.results) ? data.results : []);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setError('Không thể tải kết quả tìm kiếm. Vui lòng thử lại.');
        }
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, isOpen]);

  if (!isOpen) return null;

  const handleSelect = (route: string) => {
    onClose();
    navigate(route);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Tìm kiếm nội dung di tích"
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 sm:pt-20"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3D3731] rounded-lg shadow-2xl overflow-hidden"
      >
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#E5DAC8] dark:border-[#332E29]">
          <Search className="w-5 h-5 text-[#7A2929] dark:text-[#B89A62] shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm mốc thời gian, nhân vật lịch sử, phân khu, hiện vật..."
            className="w-full bg-transparent text-sm sm:text-base text-[#252321] dark:text-[#FAF8F2] placeholder:text-[#8A7B6A] focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng cửa sổ tìm kiếm"
            className="p-2 rounded hover:bg-[#EFE6D5] dark:hover:bg-[#312C27] text-[#5C4033] dark:text-[#D6C9B4]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-4">
          {!query.trim() && (
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A7B6A]">
                Từ khóa gợi ý
              </p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_QUERIES.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 text-xs font-medium rounded border border-[#D8CBB8] dark:border-[#3D3731] bg-[#F3EBDD] dark:bg-[#2B2723] text-[#5C4033] dark:text-[#E5DAC8] hover:border-[#7A2929] dark:hover:border-[#B89A62] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {loading && (
            <p className="py-6 text-center text-sm text-[#8A7B6A]">Đang tra cứu kho tư liệu...</p>
          )}

          {error && (
            <p className="py-6 text-center text-sm text-[#7A2929] dark:text-[#E07A7A]">{error}</p>
          )}

          {!loading && !error && query.trim() && results.length === 0 && (
            <p className="py-6 text-center text-sm text-[#8A7B6A]">
              Không tìm thấy tư liệu phù hợp cho "{query}".
            </p>
          )}

          {!loading && results.length > 0 && (
            <ul className="divide-y divide-[#E6DCCB] dark:divide-[#332E29]">
              {results.map((item) => (
                <li key={`${item.type}-${item.id}`}>
                  <button
                    type="button"
                    onClick={() => handleSelect(item.route)}
                    className="w-full text-left py-3 px-2 rounded hover:bg-[#F3EBDD] dark:hover:bg-[#2B2723] transition-colors flex items-start justify-between gap-4 group"
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
                        {item.typeLabel}
                      </span>
                      <p className="font-serif text-base font-semibold text-[#252321] dark:text-[#FAF8F2]">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#5C4033] dark:text-[#C7B9A5] line-clamp-2">
                        {item.subtitle}
                      </p>
                    </div>
                    <ArrowRight
                      className="w-4 h-4 mt-2 shrink-0 text-[#8A7B6A] group-hover:text-[#7A2929] dark:group-hover:text-[#B89A62] transition-colors"
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
