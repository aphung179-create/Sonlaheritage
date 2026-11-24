import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { TIMELINE_EVENTS, TimelineEvent } from '../data/heritageData';
import { MuseumImage } from '../components/MuseumImage';

const ERA_FILTERS: Array<{ id: 'all' | TimelineEvent['era']; label: string }> = [
  { id: 'all', label: 'Tất cả giai đoạn' },
  { id: 'construction', label: 'Khởi dựng (1908)' },
  { id: 'expansion', label: 'Mở rộng giam giữ' },
  { id: 'struggle', label: 'Trường học cách mạng' },
  { id: 'preservation', label: 'Chiến tranh & Bảo tồn' },
];

export function HistoryPage() {
  const [selectedEra, setSelectedEra] = useState<'all' | TimelineEvent['era']>('all');
  const [activeId, setActiveId] = useState<string>(TIMELINE_EVENTS[0].id);
  const { hash } = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, restDelta: 0.001 });

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      setSelectedEra('all');
      setActiveId(targetId);
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [hash]);

  const filteredEvents =
    selectedEra === 'all'
      ? TIMELINE_EVENTS
      : TIMELINE_EVENTS.filter((ev) => ev.era === selectedEra);

  return (
    <div className="relative">
      {/* Subtle top reading progress line */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-16 left-0 right-0 h-[2px] bg-[#7A2929] dark:bg-[#B89A62] origin-left z-30"
      />

      {/* Page Header */}
      <section className="bg-[#F3EBDD] dark:bg-[#221F1C] border-b border-[#DDD1BE] dark:border-[#332E29] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7A2929] dark:text-[#B89A62] font-semibold">
            Biên niên sử · 1908 – Nay
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252321] dark:text-[#FAF8F2] max-w-3xl [text-wrap:balance]">
            Lịch sử hình thành và phát triển Nhà tù Sơn La
          </h1>
          <p className="text-base text-[#5C4033] dark:text-[#D6C9B4] max-w-2xl leading-relaxed">
            Hành trình hơn một thế kỷ từ công trình giam cầm thời thuộc địa năm 1908 trở thành trường học cách mạng và
            Di tích lịch sử Quốc gia đặc biệt của dân tộc Việt Nam.
          </p>

          {/* Interactive Era Filter Tabs */}
          <div className="pt-4 flex flex-wrap gap-2" role="tablist" aria-label="Lọc giai đoạn lịch sử">
            {ERA_FILTERS.map((era) => (
              <button
                key={era.id}
                type="button"
                role="tab"
                aria-selected={selectedEra === era.id}
                onClick={() => setSelectedEra(era.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  selectedEra === era.id
                    ? 'bg-[#7A2929] text-[#FAF8F2] dark:bg-[#B89A62] dark:text-[#191715]'
                    : 'bg-[#FAF8F2] dark:bg-[#2B2723] text-[#5C4033] dark:text-[#D6C9B4] border border-[#D8CBB8] dark:border-[#3A342E] hover:border-[#7A2929]'
                }`}
              >
                {era.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Timeline Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Timeline Index Rail (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-2 border-r border-[#E2D6C3] dark:border-[#332E29] pr-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8A7B6A] mb-4">
                Mục lục niên biểu
              </p>
              {filteredEvents.map((ev) => (
                <a
                  key={ev.id}
                  href={`#${ev.id}`}
                  onClick={() => setActiveId(ev.id)}
                  className={`block py-2 text-sm transition-colors ${
                    activeId === ev.id
                      ? 'text-[#7A2929] dark:text-[#B89A62] font-semibold'
                      : 'text-[#5C4033] dark:text-[#C7B9A5] hover:text-[#252321] dark:hover:text-[#FAF8F2]'
                  }`}
                >
                  <span className="font-mono text-xs mr-2 tabular-nums">{ev.year}</span>
                  <span className="line-clamp-1">{ev.eraLabel}</span>
                </a>
              ))}
            </div>
          </aside>

          {/* Timeline Cards */}
          <div className="lg:col-span-9 space-y-14">
            {filteredEvents.map((ev, index) => (
              <motion.article
                key={ev.id}
                id={ev.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                onViewportEnter={() => setActiveId(ev.id)}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-[#E2D6C3] dark:border-[#332E29] last:border-b-0"
              >
                <div className="md:col-span-7 space-y-3">
                  <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#7A6B5B] dark:text-[#A89A86]">
                    <span className="font-mono font-bold text-sm text-[#7A2929] dark:text-[#B89A62] tabular-nums">
                      {ev.year}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="uppercase tracking-wider font-medium">{ev.eraLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">0{index + 1}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#252321] dark:text-[#FAF8F2]">
                    {ev.title}
                  </h2>
                  <p className="text-sm font-medium text-[#7A2929] dark:text-[#B89A62]">{ev.subtitle}</p>
                  <p className="text-base text-[#252321] dark:text-[#F3EBDD] leading-relaxed">
                    {ev.summary}
                  </p>
                  <p className="text-sm text-[#5C4033] dark:text-[#C7B9A5] leading-relaxed">{ev.details}</p>
                  <p className="pt-2 text-xs italic text-[#7A6B5B] dark:text-[#9E907F]">
                    Nguồn tham khảo: {ev.source}
                  </p>
                </div>

                <figure className="md:col-span-5 space-y-2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#D8CBB8] dark:border-[#3A342E] bg-[#252321]">
                    <MuseumImage src={ev.image} alt={ev.imageCaption} />
                  </div>
                  <figcaption className="text-xs font-serif italic text-[#6B5A48] dark:text-[#A89A86]">
                    Hình {index + 1} — {ev.imageCaption}
                  </figcaption>
                </figure>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
