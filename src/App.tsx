import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { UtilityBar } from './components/UtilityBar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { CuratorChatbot } from './components/CuratorChatbot';
import { HomePage } from './pages/HomePage';
import { HistoryPage } from './pages/HistoryPage';
import { ExhibitionPage } from './pages/ExhibitionPage';
import { FiguresPage } from './pages/FiguresPage';
import { GalleryPage } from './pages/GalleryPage';
import { VirtualTourPage } from './pages/VirtualTourPage';
import { VisitPage } from './pages/VisitPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('sonla-theme') === 'dark';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('sonla-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F2] text-[#252321] dark:bg-[#191715] dark:text-[#F3EBDD] transition-colors duration-200">
        <Header
          isDark={isDark}
          onToggleTheme={() => setIsDark((prev) => !prev)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
        <UtilityBar
          isDark={isDark}
          onToggleTheme={() => setIsDark((prev) => !prev)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lich-su" element={<HistoryPage />} />
            <Route path="/khong-gian" element={<ExhibitionPage />} />
            <Route path="/nhan-vat" element={<FiguresPage />} />
            <Route path="/thu-vien" element={<GalleryPage />} />
            <Route path="/kham-pha" element={<VirtualTourPage />} />
            <Route path="/tham-quan" element={<VisitPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <CuratorChatbot />
      </div>
    </BrowserRouter>
  );
}
