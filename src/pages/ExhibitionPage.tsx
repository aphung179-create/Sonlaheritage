import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Compass, X } from 'lucide-react';
import { EXHIBITION_ZONES, ExhibitionZone } from '../data/heritageData';
import { MuseumImage } from '../components/MuseumImage';

const ZONE_FILTERS: Array<{ id: 'all' | ExhibitionZone['category']; label: string }> = [
  { id: 'all', label: 'Tất cả không gian' },
  { id: 'architecture', label: 'Kiến trúc & Cảnh quan' },
  { id: 'detention', label: 'Phòng giam & Xà lim' },
  { id: 'memorial', label: 'Biểu tượng & Tưởng niệm' },
  { id: 'artifacts', label: 'Trưng bày hiện vật' },
];

export function ExhibitionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState<'all' | ExhibitionZone['category']>('all');
  const [activeZone, setActiveZone] = useState<ExhibitionZone | null>(null);

  useEffect(() => {
    const zoneParam = searchParams.get('zone');
    if (zoneParam) {
      const found = EXHIBITION_ZONES.find((z) => z.id === zoneParam);
      if (found) setActiveZone(found);
    }
  }, [searchParams]);

  const filteredZones =
    category === 'all'
      ? EXHIBITION_ZONES
      : EXHIBITION_ZONES.filter((zone) => zone.category === category);

  const openDetail = (zone: ExhibitionZone) => {
    setActiveZone(zone);
    setSearchParams({ zone: zone.id });
  };

  const closeDetail = () => {
    setActiveZone(null);
    setSearchParams({});
  };

  return (
    <div>
      <section className="bg-[#F3EBDD] dark:bg-[#221F1C] border-b border-[#DDD1BE] dark:border-[#332E29] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7A2929] dark:text-[#B89A62] font-semibold">
            Không gian di tích · Đồi Khau Cả
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252321] dark:text-[#FAF8F2] max-w-3xl [text-wrap:balance]">
            Các phân khu kiến trúc và trưng bày tại Nhà tù Sơn La
          </h1>
          <p className="text-base text-[#5C4033] dark:text-[#D6C9B4] max-w-2xl leading-relaxed">
            Tìm hiểu từng hạng mục được bảo tồn và phục dựng trong khuôn viên Di tích Quốc gia đặc biệt Nhà tù Sơn La
            cùng không gian trưng bày của Bảo tàng Sơn La.
          </p>

          <div className="pt-4 flex flex-wrap gap-2" role="tablist" aria-label="Phân loại không gian di tích">
            {ZONE_FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={category === item.id}
                onClick={() => setCategory(item.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  category === item.id
                    ? 'bg-[#7A2929] text-[#FAF8F2] dark:bg-[#B89A62] dark:text-[#191715]'
                    : 'bg-[#FAF8F2] dark:bg-[#2B2723] text-[#5C4033] dark:text-[#D6C9B4] border border-[#D8CBB8] dark:border-[#3A342E] hover:border-[#7A2929]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredZones.map((zone) => (
            <article
              key={zone.id}
              className="bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] rounded-lg overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#252321]">
                <MuseumImage
                  src={zone.image}
                  alt={zone.imageCaption}
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-2.5">
                  <p className="text-xs text-[#7A6B5B] dark:text-[#A89A86]">
                    <span className="font-mono font-semibold text-[#7A2929] dark:text-[#B89A62]">
                      {zone.code}
                    </span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <span>{zone.categoryLabel}</span>
                  </p>
                  <h2 className="font-serif text-xl font-semibold text-[#252321] dark:text-[#FAF8F2]">
                    {zone.name}
                  </h2>
                  <p className="text-sm text-[#5C4033] dark:text-[#C7B9A5] leading-relaxed">
                    {zone.description}
                  </p>
                  <div className="pt-2 border-t border-[#E6DCCB] dark:border-[#332E29]">
                    <p className="text-xs font-semibold text-[#252321] dark:text-[#FAF8F2]">Giá trị lịch sử:</p>
                    <p className="mt-1 text-xs text-[#5C4033] dark:text-[#C7B9A5] leading-relaxed">
                      {zone.historicalValue}
                    </p>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => openDetail(zone)}
                    className="min-h-[40px] px-4 py-2 rounded-md bg-[#7A2929] hover:bg-[#5C4033] dark:bg-[#B89A62] dark:hover:bg-[#cbb07b] text-[#FAF8F2] dark:text-[#191715] text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                  <Link
                    to={`/kham-pha?scene=${encodeURIComponent(zone.tourSceneId)}`}
                    className="text-xs font-medium text-[#5C4033] dark:text-[#D6C9B4] hover:text-[#7A2929] dark:hover:text-[#B89A62] inline-flex items-center gap-1"
                  >
                    <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Tham quan 360°</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Zone Detail Modal */}
      {activeZone && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeZone.name}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4"
          onClick={closeDetail}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] rounded-lg shadow-2xl"
          >
            <div className="relative aspect-[16/9] bg-[#252321]">
              <MuseumImage src={activeZone.image} alt={activeZone.imageCaption} />
              <button
                type="button"
                onClick={closeDetail}
                aria-label="Đóng chi tiết phân khu"
                className="absolute top-3 right-3 w-10 h-10 rounded-md bg-black/70 text-white hover:bg-black flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <p className="text-xs text-[#7A6B5B] dark:text-[#A89A86]">
                  <span className="font-mono font-semibold text-[#7A2929] dark:text-[#B89A62]">
                    {activeZone.code}
                  </span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span>{activeZone.categoryLabel}</span>
                </p>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#252321] dark:text-[#FAF8F2]">
                  {activeZone.name}
                </h2>
              </div>

              <p className="text-base text-[#252321] dark:text-[#F3EBDD] leading-relaxed">
                {activeZone.description}
              </p>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E2D6C3] dark:border-[#332E29] text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
                    Giá trị lịch sử
                  </dt>
                  <dd className="mt-1.5 text-[#5C4033] dark:text-[#D6C9B4] leading-relaxed">
                    {activeZone.historicalValue}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
                    Đặc điểm kiến trúc &amp; Bảo tồn
                  </dt>
                  <dd className="mt-1.5 text-[#5C4033] dark:text-[#D6C9B4] leading-relaxed">
                    {activeZone.architecturalNotes}
                  </dd>
                </div>
              </dl>

              <div className="pt-4 border-t border-[#E2D6C3] dark:border-[#332E29] flex flex-wrap items-center justify-between gap-4">
                <Link
                  to={`/kham-pha?scene=${encodeURIComponent(activeZone.tourSceneId)}`}
                  onClick={closeDetail}
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#7A2929] hover:bg-[#5C4033] dark:bg-[#B89A62] dark:hover:bg-[#cbb07b] text-[#FAF8F2] dark:text-[#191715] text-sm font-semibold transition-colors"
                >
                  <Compass className="w-4 h-4" aria-hidden="true" />
                  <span>Khám phá điểm này trên Tour 360°</span>
                </Link>
                <button
                  type="button"
                  onClick={closeDetail}
                  className="px-4 py-2 text-sm font-medium text-[#5C4033] dark:text-[#D6C9B4] hover:text-[#252321]"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
