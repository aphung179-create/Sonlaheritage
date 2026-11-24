import { useState } from 'react';
import { Moon, Search, Share2, Sun, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UtilityBarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
}

export function UtilityBar({ isDark, onToggleTheme, onOpenSearch }: UtilityBarProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: 'Tìm hiểu Bảo tàng Sơn La – Di tích lịch sử Quốc gia đặc biệt Nhà tù Sơn La.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    } catch {
      // User dismissed native share dialog
    }
  };

  return (
    <div className="bg-[#F3EBDD] dark:bg-[#221F1C] border-b border-[#DDD1BE] dark:border-[#332E29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3 text-xs text-[#5C4033] dark:text-[#C7B9A5]">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-medium text-[#252321] dark:text-[#FAF8F2]">
            Di tích Quốc gia đặc biệt Nhà tù Sơn La
          </span>
          <span aria-hidden="true">·</span>
          <span>Đồi Khau Cả, P. Tô Hiệu, TP. Sơn La</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <Link
            to="/tham-quan"
            className="hidden sm:inline underline underline-offset-4 hover:text-[#7A2929] dark:hover:text-[#B89A62]"
          >
            Giờ mở cửa &amp; Giá vé: Đang cập nhật
          </Link>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenSearch}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#2B2723] text-[#252321] dark:text-[#FAF8F2] hover:border-[#7A2929] dark:hover:border-[#B89A62] transition-colors whitespace-nowrap shrink-0"
          >
            <Search className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Tìm kiếm</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            aria-label="Chia sẻ trang này"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#2B2723] text-[#252321] dark:text-[#FAF8F2] hover:border-[#7A2929] dark:hover:border-[#B89A62] transition-colors whitespace-nowrap shrink-0"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-[#7A2929] dark:text-[#B89A62]" aria-hidden="true" />
            ) : (
              <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
            )}
            <span>{copied ? 'Đã sao chép' : 'Chia sẻ'}</span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#2B2723] text-[#252321] dark:text-[#FAF8F2] hover:border-[#7A2929] dark:hover:border-[#B89A62] transition-colors whitespace-nowrap shrink-0"
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 text-[#B89A62]" aria-hidden="true" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-[#5C4033]" aria-hidden="true" />
            )}
            <span className="hidden sm:inline">{isDark ? 'Sáng' : 'Tối'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
