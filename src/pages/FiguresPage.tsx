import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, BookOpen, Search, X } from 'lucide-react';
import { HISTORICAL_FIGURES, HistoricalFigure } from '../data/heritageData';

export function FiguresPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterText, setFilterText] = useState('');
  const [activeFigure, setActiveFigure] = useState<HistoricalFigure | null>(null);

  useEffect(() => {
    const figureId = searchParams.get('figure');
    if (figureId) {
      const found = HISTORICAL_FIGURES.find((f) => f.id === figureId);
      if (found) setActiveFigure(found);
    }
  }, [searchParams]);

  const filtered = HISTORICAL_FIGURES.filter((fig) => {
    const q = filterText.trim().toLowerCase();
    if (!q) return true;
    return (
      fig.name.toLowerCase().includes(q) ||
      (fig.birthName && fig.birthName.toLowerCase().includes(q)) ||
      fig.roleInPrison.toLowerCase().includes(q) ||
      fig.sonLaImprint.toLowerCase().includes(q)
    );
  });

  const openModal = (fig: HistoricalFigure) => {
    setActiveFigure(fig);
    setSearchParams({ figure: fig.id });
  };

  const closeModal = () => {
    setActiveFigure(null);
    setSearchParams({});
  };

  return (
    <div>
      <section className="bg-[#F3EBDD] dark:bg-[#221F1C] border-b border-[#DDD1BE] dark:border-[#332E29] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7A2929] dark:text-[#B89A62] font-semibold">
            Hồ sơ nhân vật · Chiến sĩ cách mạng
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252321] dark:text-[#FAF8F2] max-w-3xl [text-wrap:balance]">
            Những nhân vật lịch sử tiêu biểu tại Nhà tù Sơn La
          </h1>
          <p className="text-base text-[#5C4033] dark:text-[#D6C9B4] max-w-2xl leading-relaxed">
            Tìm hiểu tiểu sử, quá trình hoạt động cách mạng và dấu ấn kiên trung của các chiến sĩ cộng sản từng bị
            giam giữ tại Nhà tù Sơn La.
          </p>

          <div className="pt-3 max-w-md relative">
            <Search
              className="w-4 h-4 text-[#8A7B6A] absolute left-3.5 top-1/2 -translate-y-1/2 mt-1.5"
              aria-hidden="true"
            />
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Lọc theo tên nhân vật hoặc vai trò..."
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-md border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#2B2723] text-[#252321] dark:text-[#FAF8F2] placeholder:text-[#8A7B6A] focus:outline-none focus:border-[#7A2929] dark:focus:border-[#B89A62]"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {filtered.length === 0 ? (
          <div className="p-10 text-center border border-[#D8CBB8] dark:border-[#3A342E] rounded-lg bg-[#F3EBDD]/50 dark:bg-[#221F1C]">
            <p className="text-sm text-[#5C4033] dark:text-[#D6C9B4]">
              Không tìm thấy hồ sơ nhân vật phù hợp với từ khóa "{filterText}".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((fig) => (
              <article
                key={fig.id}
                className="bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] rounded-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Archival Monograph Header Plate (Honest archival notice instead of synthetic likeness) */}
                <div className="bg-[#252321] text-[#FAF8F2] p-6 border-b border-[#3D3731] space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#B89A62]">
                    <span className="font-mono">{fig.accessionCode}</span>
                    <span className="font-mono tabular-nums">{fig.years}</span>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#FAF8F2]">{fig.name}</h2>
                    {fig.birthName && (
                      <p className="text-xs text-[#C7B9A5] mt-0.5">Tên khai sinh: {fig.birthName}</p>
                    )}
                  </div>
                  <p className="text-[11px] text-[#A89A86] pt-2 border-t border-[#3A3530]">
                    Ảnh chân dung tư liệu: Đang cập nhật từ kho lưu trữ Bảo tàng Sơn La
                  </p>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                  <div className="space-y-3">
                    <div className="text-xs text-[#7A6B5B] dark:text-[#A89A86]">
                      <span>Thời gian tại Sơn La: </span>
                      <span className="font-mono font-semibold text-[#7A2929] dark:text-[#B89A62] tabular-nums">
                        {fig.detentionPeriod}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-[#252321] dark:text-[#FAF8F2]">
                      {fig.roleInPrison}
                    </p>
                    <p className="text-sm text-[#5C4033] dark:text-[#C7B9A5] leading-relaxed">
                      {fig.sonLaImprint}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6DCCB] dark:border-[#332E29] flex items-center justify-between gap-3">
                    <span className="text-[11px] text-[#8A7B6A] line-clamp-1">{fig.laterRole}</span>
                    <button
                      type="button"
                      onClick={() => openModal(fig)}
                      className="shrink-0 min-h-[38px] px-3.5 py-2 rounded bg-[#7A2929] hover:bg-[#5C4033] dark:bg-[#B89A62] dark:hover:bg-[#cbb07b] text-[#FAF8F2] dark:text-[#191715] text-xs font-semibold transition-colors inline-flex items-center gap-1"
                    >
                      <span>Hồ sơ chi tiết</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Figure Biography Modal */}
      {activeFigure && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Hồ sơ nhân vật ${activeFigure.name}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] rounded-lg shadow-2xl"
          >
            <div className="p-6 sm:p-8 bg-[#252321] text-[#FAF8F2] flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <p className="text-xs font-mono text-[#B89A62] tabular-nums">
                  {activeFigure.accessionCode} · {activeFigure.years}
                </p>
                <h2 className="font-serif text-3xl font-bold">{activeFigure.name}</h2>
                {activeFigure.birthName && (
                  <p className="text-xs text-[#D6C9B4]">Tên khai sinh: {activeFigure.birthName}</p>
                )}
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Đóng hồ sơ nhân vật"
                className="p-2 rounded hover:bg-white/10 text-[#FAF8F2]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 text-sm">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-5 border-b border-[#E2D6C3] dark:border-[#332E29]">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[#8A7B6A]">Giai đoạn tại Sơn La</dt>
                  <dd className="mt-1 font-mono font-semibold text-[#7A2929] dark:text-[#B89A62] tabular-nums">
                    {activeFigure.detentionPeriod}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[#8A7B6A]">Cương vị sau này</dt>
                  <dd className="mt-1 font-medium text-[#252321] dark:text-[#FAF8F2]">
                    {activeFigure.laterRole}
                  </dd>
                </div>
              </dl>

              {activeFigure.quote && (
                <blockquote className="py-4 border-y border-[#E2D6C3] dark:border-[#332E29] font-serif italic text-lg text-[#7A2929] dark:text-[#B89A62]">
                  "{activeFigure.quote}"
                </blockquote>
              )}

              <div className="space-y-4 leading-relaxed text-[#3F362E] dark:text-[#D6C9B4]">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#252321] dark:text-[#FAF8F2] mb-1">
                    Tiểu sử
                  </h3>
                  <p>{activeFigure.biography}</p>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#252321] dark:text-[#FAF8F2] mb-1">
                    Quá trình hoạt động cách mạng
                  </h3>
                  <p>{activeFigure.revolutionaryActivity}</p>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#252321] dark:text-[#FAF8F2] mb-1">
                    Dấu ấn lịch sử tại Nhà tù Sơn La
                  </h3>
                  <p>{activeFigure.sonLaImprint}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2D6C3] dark:border-[#332E29] flex flex-wrap items-center justify-between gap-4 text-xs text-[#7A6B5B] dark:text-[#A89A86]">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Nguồn: {activeFigure.source}</span>
                </span>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded border border-[#D8CBB8] dark:border-[#3A342E] font-medium text-[#252321] dark:text-[#FAF8F2]"
                >
                  Đóng hồ sơ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
