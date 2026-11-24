import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, X } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/heritageData';
import { MuseumImage } from '../components/MuseumImage';
import { ArtifactCatalogSection } from '../components/ArtifactCatalogSection';

const GALLERY_FILTERS: Array<{ id: 'all' | GalleryItem['category']; label: string }> = [
  { id: 'all', label: 'Tất cả tư liệu' },
  { id: 'panorama', label: 'Toàn cảnh di tích' },
  { id: 'cells', label: 'Phòng giam' },
  { id: 'artifacts', label: 'Hiện vật' },
  { id: 'peach_tree', label: 'Cây đào Tô Hiệu' },
  { id: 'memorial', label: 'Khu tưởng niệm' },
  { id: 'architecture', label: 'Kiến trúc' },
];

export function GalleryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { hash } = useLocation();
  const [category, setCategory] = useState<'all' | GalleryItem['category']>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredItems =
    category === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === category);

  useEffect(() => {
    const itemId = searchParams.get('item');
    if (itemId) {
      const found = GALLERY_ITEMS.find((g) => g.id === itemId);
      if (found) setLightboxItem(found);
    }
    const artifactId = searchParams.get('artifact');
    if (artifactId || hash === '#ho-so-hien-vat') {
      setTimeout(() => {
        document.getElementById('ho-so-hien-vat')?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  }, [searchParams, hash]);

  useEffect(() => {
    if (!lightboxItem) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        stepLightbox(1);
      } else if (e.key === 'ArrowLeft') {
        stepLightbox(-1);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  const openLightbox = (item: GalleryItem) => {
    setIsZoomed(false);
    setLightboxItem(item);
    setSearchParams({ item: item.id });
  };

  const closeLightbox = () => {
    setLightboxItem(null);
    setIsZoomed(false);
    setSearchParams({});
  };

  const stepLightbox = (delta: number) => {
    if (!lightboxItem || filteredItems.length === 0) return;
    const idx = filteredItems.findIndex((i) => i.id === lightboxItem.id);
    const currentIdx = idx === -1 ? 0 : idx;
    const nextIdx = (currentIdx + delta + filteredItems.length) % filteredItems.length;
    const nextItem = filteredItems[nextIdx];
    setIsZoomed(false);
    setLightboxItem(nextItem);
    setSearchParams({ item: nextItem.id });
  };

  return (
    <div>
      <section className="bg-[#F3EBDD] dark:bg-[#221F1C] border-b border-[#DDD1BE] dark:border-[#332E29] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7A2929] dark:text-[#B89A62] font-semibold">
            Thư viện tư liệu hình ảnh
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252321] dark:text-[#FAF8F2] max-w-3xl [text-wrap:balance]">
            Kho ảnh di tích, hiện vật và không gian Nhà tù Sơn La
          </h1>
          <p className="text-base text-[#5C4033] dark:text-[#D6C9B4] max-w-2xl leading-relaxed">
            Chọn chủ đề để lọc tư liệu hoặc nhấn trực tiếp vào từng khung ảnh để xem toàn màn hình và phóng lớn chi tiết.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Phân loại thư viện ảnh">
              {GALLERY_FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={category === f.id}
                  onClick={() => setCategory(f.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                    category === f.id
                      ? 'bg-[#7A2929] text-[#FAF8F2] dark:bg-[#B89A62] dark:text-[#191715]'
                      : 'bg-[#FAF8F2] dark:bg-[#2B2723] text-[#5C4033] dark:text-[#D6C9B4] border border-[#D8CBB8] dark:border-[#3A342E] hover:border-[#7A2929]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <a
              href="#ho-so-hien-vat"
              className="text-xs font-semibold text-[#7A2929] dark:text-[#B89A62] underline underline-offset-4 whitespace-nowrap"
            >
              Tra cứu 20 hồ sơ hiện vật (Dublin Core) ↓
            </a>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 border-b border-[#DDD1BE] dark:border-[#332E29]">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <figure
              key={item.id}
              className="break-inside-avoid bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] rounded-lg overflow-hidden group"
            >
              <button
                type="button"
                onClick={() => openLightbox(item)}
                className="block w-full text-left focus-visible:outline-2 focus-visible:outline-[#7A2929]"
              >
                <div
                  className={`overflow-hidden bg-[#252321] ${
                    item.aspect === 'portrait'
                      ? 'aspect-[3/4]'
                      : item.aspect === 'wide'
                      ? 'aspect-[16/10]'
                      : 'aspect-[4/3]'
                  }`}
                >
                  <MuseumImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <figcaption className="p-5 space-y-1.5">
                  <p className="text-[11px] font-medium text-[#7A6B5B] dark:text-[#A89A86]">
                    <span className="font-mono font-semibold text-[#7A2929] dark:text-[#B89A62]">
                      {item.accessionId}
                    </span>
                    <span className="mx-1.5" aria-hidden="true">·</span>
                    <span>{item.categoryLabel}</span>
                  </p>
                  <h2 className="font-serif text-lg font-semibold text-[#252321] dark:text-[#FAF8F2] group-hover:text-[#7A2929] dark:group-hover:text-[#B89A62] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#5C4033] dark:text-[#C7B9A5] leading-relaxed">{item.caption}</p>
                  <p className="pt-1 text-[11px] italic text-[#8A7B6A]">Nguồn: {item.source}</p>
                </figcaption>
              </button>
            </figure>
          ))}
        </div>
      </section>

      <ArtifactCatalogSection />

      {/* Lightbox Fullscreen Viewer */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between gap-4 text-[#FAF8F2]"
          >
            <div className="text-xs">
              <span className="font-mono text-[#B89A62]">{lightboxItem.accessionId}</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>{lightboxItem.categoryLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsZoomed((z) => !z)}
                aria-label={isZoomed ? 'Thu nhỏ ảnh' : 'Phóng to ảnh'}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-white/10 hover:bg-white/20 text-xs font-medium"
              >
                {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                <span>{isZoomed ? 'Thu gọn' : 'Phóng to'}</span>
              </button>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Đóng trình xem ảnh"
                className="p-2 rounded bg-white/10 hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 my-4 flex items-center justify-center overflow-hidden"
          >
            <button
              type="button"
              onClick={() => stepLightbox(-1)}
              aria-label="Ảnh trước"
              className="absolute left-2 sm:left-4 z-10 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div
              className={`max-h-full max-w-5xl overflow-auto rounded transition-transform duration-300 ${
                isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed((z) => !z)}
            >
              <MuseumImage
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="max-h-[70vh] w-auto mx-auto object-contain rounded"
              />
            </div>

            <button
              type="button"
              onClick={() => stepLightbox(1)}
              aria-label="Ảnh tiếp theo"
              className="absolute right-2 sm:right-4 z-10 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl mx-auto text-center text-[#FAF8F2] space-y-1"
          >
            <h3 className="font-serif text-lg sm:text-xl font-semibold">{lightboxItem.title}</h3>
            <p className="text-xs sm:text-sm text-[#D6C9B4]">{lightboxItem.caption}</p>
            <p className="text-[11px] text-[#B89A62]">Nguồn: {lightboxItem.source}</p>
          </div>
        </div>
      )}
    </div>
  );
}
