import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Search, Sun, Moon, X } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
}

const NAV_LINKS = [
  { to: '/lich-su', label: 'Lịch sử' },
  { to: '/khong-gian', label: 'Không gian' },
  { to: '/nhan-vat', label: 'Nhân vật' },
  { to: '/thu-vien', label: 'Thư viện' },
  { to: '/tham-quan', label: 'Tham quan' },
];

export function Header({ isDark, onToggleTheme, onOpenSearch }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-16 bg-[#FAF8F2]/95 dark:bg-[#191715]/95 backdrop-blur-md border-b border-[#D8CBB8] dark:border-[#332E29]">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#252321] dark:text-[#FAF8F2] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7A2929]"
        >
          SON LA HERITAGE
        </Link>

        {/* Zone 2: 5 concise single-line text nav links */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5C4033] dark:text-[#D6C9B4]"
        >
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7A2929] ${
                  isActive
                    ? 'border-[#7A2929] text-[#7A2929] dark:border-[#B89A62] dark:text-[#B89A62]'
                    : 'border-transparent hover:text-[#252321] dark:hover:text-[#FAF8F2] hover:border-[#B89A62]/60'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA on desktop, hamburger trigger on mobile */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/kham-pha"
            className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide bg-[#7A2929] text-[#FAF8F2] hover:bg-[#5C4033] dark:bg-[#B89A62] dark:text-[#191715] dark:hover:bg-[#cbb07b] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A2929]"
          >
            Khám phá 360°
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-[#D8CBB8] dark:border-[#3A342E] text-[#252321] dark:text-[#FAF8F2] hover:bg-[#F3EBDD] dark:hover:bg-[#2A2622] transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-[#FAF8F2] dark:bg-[#191715] border-t border-[#D8CBB8] dark:border-[#332E29] overflow-y-auto px-6 py-6">
          <nav aria-label="Menu di động" className="flex flex-col divide-y divide-[#E6DCCB] dark:divide-[#2E2925]">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="py-3.5 text-base font-serif font-semibold text-[#252321] dark:text-[#FAF8F2]"
            >
              Trang chủ
            </Link>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 text-base font-medium text-[#5C4033] dark:text-[#D6C9B4] hover:text-[#7A2929] dark:hover:text-[#B89A62]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kham-pha"
              onClick={() => setMobileOpen(false)}
              className="py-3.5 text-base font-semibold text-[#7A2929] dark:text-[#B89A62]"
            >
              Khám phá di tích 360°
            </Link>
          </nav>

          <div className="mt-6 pt-6 border-t border-[#D8CBB8] dark:border-[#332E29] flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenSearch();
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-[#D8CBB8] dark:border-[#3A342E] bg-[#F3EBDD] dark:bg-[#252321] text-sm font-medium text-[#252321] dark:text-[#FAF8F2]"
            >
              <Search className="w-4 h-4" />
              <span>Tìm kiếm tư liệu</span>
            </button>
            <button
              type="button"
              onClick={onToggleTheme}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-[#D8CBB8] dark:border-[#3A342E] text-sm font-medium text-[#5C4033] dark:text-[#D6C9B4]"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span>{isDark ? 'Chuyển giao diện Sáng' : 'Chuyển giao diện Tối'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
