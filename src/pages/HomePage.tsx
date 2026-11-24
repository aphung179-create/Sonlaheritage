import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Clock, MapPin } from 'lucide-react';
import {
  EXHIBITION_ZONES,
  GALLERY_ITEMS,
  HERITAGE_IMAGES,
  HISTORICAL_FIGURES,
  SITE_METADATA,
  TIMELINE_EVENTS,
  VISIT_INFO,
} from '../data/heritageData';
import { ARTIFACTS_ARCHIVE } from '../data/artifactsArchive';
import { MuseumImage } from '../components/MuseumImage';
import { SiteOrientationMap } from '../components/SiteOrientationMap';

export function HomePage() {
  const featuredMilestones = [
    TIMELINE_EVENTS[0],
    TIMELINE_EVENTS[2],
    TIMELINE_EVENTS[4],
    TIMELINE_EVENTS[7],
  ];
  const featuredZones = EXHIBITION_ZONES.slice(0, 4);
  const featuredGallery = GALLERY_ITEMS.slice(0, 4);
  const featuredFigures = HISTORICAL_FIGURES.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[76vh] lg:min-h-[82vh] flex items-end bg-[#191715] overflow-hidden">
        <div className="absolute inset-0">
          <MuseumImage
            src={HERITAGE_IMAGES.hero}
            alt="Toàn cảnh Di tích lịch sử Quốc gia đặc biệt Nhà tù Sơn La trên đồi Khau Cả"
            className="w-full h-full object-cover"
            priority
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#191715]/95 via-[#191715]/55 to-[#191715]/25"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-5"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#B89A62] font-medium">
              Bảo tàng Sơn La · Di tích lịch sử Quốc gia đặc biệt
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FAF8F2] leading-[1.12] [text-wrap:balance]">
              NHÀ TÙ SƠN LA – CHỨNG NHÂN LỊCH SỬ
            </h1>
            <p className="text-base sm:text-lg text-[#E6DCCB] leading-relaxed max-w-2xl">
              Nơi ghi dấu ý chí kiên cường và tinh thần bất khuất của những người chiến sĩ cách mạng Việt Nam.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/kham-pha"
                className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#7A2929] hover:bg-[#5C4033] text-[#FAF8F2] text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <Compass className="w-4 h-4" aria-hidden="true" />
                <span>Khám phá di tích</span>
              </Link>
              <Link
                to="/lich-su"
                className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#B89A62]/70 bg-[#191715]/60 hover:bg-[#252321] text-[#FAF8F2] text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <span>Hành trình lịch sử</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Overview & Archival Key Figures */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.18em] text-[#7A2929] dark:text-[#B89A62] font-semibold">
                01 · Tổng quan di sản
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252321] dark:text-[#FAF8F2] [text-wrap:balance]">
                Từ chốn lao tù thực dân đến trường học cách mạng bất diệt
              </h2>
            </div>

            <div className="space-y-4 text-[#3F362E] dark:text-[#D6C9B4] text-base leading-relaxed max-w-prose">
              <p className="drop-cap">
                Tọa lạc trên đỉnh đồi Khau Cả thuộc phường Tô Hiệu, thành phố Sơn La, Nhà tù Sơn La được thực dân Pháp
                khởi dựng vào năm 1908 và mở rộng quy mô trong những năm 1930–1940 nhằm giam cầm, đày ải các chiến sĩ
                yêu nước và đảng viên cộng sản Việt Nam giữa núi rừng Tây Bắc khắc nghiệt.
              </p>
              <p>
                Vượt lên xiềng xích và bệnh tật, Chi bộ Nhà tù Sơn La thành lập tháng 12/1939 đã biến chốn "địa ngục
                trần gian" thành một trường học cách mạng thực thụ — nơi ươm mầm lý tưởng, xuất bản tờ báo bí mật
                <em> Suối Reo</em> và rèn luyện nhiều nhà lãnh đạo kiệt xuất của dân tộc.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/lich-su"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A2929] dark:text-[#B89A62] hover:underline underline-offset-4"
              >
                <span>Đọc toàn bộ biên niên sử di tích</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#F3EBDD] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] rounded-lg p-6 sm:p-8 space-y-6">
            <h3 className="font-serif text-xl font-semibold text-[#252321] dark:text-[#FAF8F2] pb-3 border-b border-[#D8CBB8] dark:border-[#3A342E]">
              Hồ sơ định danh di tích
            </h3>
            <dl className="divide-y divide-[#DFD3C0] dark:divide-[#332E29] text-sm">
              <div className="py-3 flex items-baseline justify-between gap-4">
                <dt className="text-[#5C4033] dark:text-[#A89A86]">Năm khởi dựng</dt>
                <dd className="font-mono font-semibold text-[#252321] dark:text-[#FAF8F2] tabular-nums">1908</dd>
              </div>
              <div className="py-3 flex items-baseline justify-between gap-4">
                <dt className="text-[#5C4033] dark:text-[#A89A86]">Quy mô mở rộng</dt>
                <dd className="font-mono font-semibold text-[#252321] dark:text-[#FAF8F2] tabular-nums">
                  ~2.170 m²
                </dd>
              </div>
              <div className="py-3 flex items-baseline justify-between gap-4">
                <dt className="text-[#5C4033] dark:text-[#A89A86]">Thành lập Chi bộ</dt>
                <dd className="font-mono font-semibold text-[#252321] dark:text-[#FAF8F2] tabular-nums">
                  12 / 1939
                </dd>
              </div>
              <div className="py-3 flex items-baseline justify-between gap-4">
                <dt className="text-[#5C4033] dark:text-[#A89A86]">Di tích Quốc gia</dt>
                <dd className="font-mono font-semibold text-[#252321] dark:text-[#FAF8F2] tabular-nums">1962</dd>
              </div>
              <div className="py-3 flex items-baseline justify-between gap-4">
                <dt className="text-[#5C4033] dark:text-[#A89A86]">Quốc gia đặc biệt</dt>
                <dd className="font-mono font-semibold text-[#7A2929] dark:text-[#B89A62] tabular-nums">
                  31/12/2014
                </dd>
              </div>
            </dl>
            <p className="text-xs text-[#6B5A48] dark:text-[#A89A86] leading-relaxed">
              {SITE_METADATA.nationalRecognition}.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Highlighted Historical Milestones */}
      <section className="bg-[#F3EBDD] dark:bg-[#221F1C] border-y border-[#DDD1BE] dark:border-[#332E29] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#7A2929] dark:text-[#B89A62] font-semibold">
                02 · Dấu mốc lịch sử
              </p>
              <h2 className="mt-1 font-serif text-3xl font-semibold text-[#252321] dark:text-[#FAF8F2]">
                Những chặng đường lịch sử tiêu biểu
              </h2>
            </div>
            <Link
              to="/lich-su"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7A2929] dark:text-[#B89A62] hover:underline underline-offset-4 whitespace-nowrap"
            >
              <span>Xem dòng thời gian đầy đủ</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMilestones.map((item) => (
              <Link
                key={item.id}
                to={`/lich-su#${item.id}`}
                className="group bg-[#FAF8F2] dark:bg-[#2A2622] border border-[#D8CBB8] dark:border-[#3A342E] rounded-lg p-6 flex flex-col justify-between hover:border-[#7A2929] dark:hover:border-[#B89A62] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-mono font-semibold text-[#7A2929] dark:text-[#B89A62] tabular-nums">
                      {item.year}
                    </span>
                    <span className="text-[#7A6B5B] dark:text-[#A89A86]">{item.eraLabel}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#252321] dark:text-[#FAF8F2] group-hover:text-[#7A2929] dark:group-hover:text-[#B89A62] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5C4033] dark:text-[#C7B9A5] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[#7A2929] dark:text-[#B89A62]">
                  Chi tiết giai đoạn <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Featured Exhibition Zones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#7A2929] dark:text-[#B89A62] font-semibold">
              03 · Không gian di tích
            </p>
            <h2 className="mt-1 font-serif text-3xl font-semibold text-[#252321] dark:text-[#FAF8F2]">
              Các khu vực tham quan tiêu biểu
            </h2>
          </div>
          <Link
            to="/khong-gian"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7A2929] dark:text-[#B89A62] hover:underline underline-offset-4 whitespace-nowrap"
          >
            <span>Khám phá 6 phân khu</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredZones.map((zone) => (
            <article
              key={zone.id}
              className="bg-[#F3EBDD]/60 dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] rounded-lg overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#252321]">
                <MuseumImage
                  src={zone.image}
                  alt={zone.imageCaption}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-xs text-[#7A6B5B] dark:text-[#A89A86]">
                    <span className="font-mono font-semibold text-[#7A2929] dark:text-[#B89A62]">
                      {zone.code}
                    </span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <span>{zone.categoryLabel}</span>
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-[#252321] dark:text-[#FAF8F2]">
                    {zone.name}
                  </h3>
                  <p className="text-sm text-[#5C4033] dark:text-[#C7B9A5] leading-relaxed">
                    {zone.shortDesc}
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between gap-4 border-t border-[#E2D6C3] dark:border-[#332E29]">
                  <Link
                    to={`/khong-gian?zone=${encodeURIComponent(zone.id)}`}
                    className="text-xs font-semibold text-[#7A2929] dark:text-[#B89A62] hover:underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    <span>Xem chi tiết phân khu</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <Link
                    to={`/kham-pha?scene=${encodeURIComponent(zone.tourSceneId)}`}
                    className="text-xs font-medium text-[#5C4033] dark:text-[#D6C9B4] hover:text-[#252321] dark:hover:text-[#FAF8F2]"
                  >
                    Mở trong Tour 360°
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 4: Historical Figures */}
      <section className="bg-[#252321] text-[#FAF8F2] py-16 lg:py-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#B89A62] font-semibold">
                04 · Nhân vật lịch sử
              </p>
              <h2 className="mt-1 font-serif text-3xl font-semibold text-[#FAF8F2]">
                Những người chiến sĩ cách mạng kiên trung
              </h2>
            </div>
            <Link
              to="/nhan-vat"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B89A62] hover:underline underline-offset-4 whitespace-nowrap"
            >
              <span>Xem hồ sơ nhân vật</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFigures.map((fig) => (
              <Link
                key={fig.id}
                to={`/nhan-vat?figure=${encodeURIComponent(fig.id)}`}
                className="group bg-[#2F2B27] border border-[#423C36] hover:border-[#B89A62] rounded-lg p-6 flex flex-col justify-between transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#B89A62]">
                    <span className="font-mono">{fig.accessionCode}</span>
                    <span className="font-mono tabular-nums">{fig.years}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#FAF8F2] group-hover:text-[#B89A62] transition-colors">
                    {fig.name}
                  </h3>
                  <p className="text-xs text-[#D6C9B4] font-medium">{fig.roleInPrison}</p>
                  <p className="text-sm text-[#C4B7A4] leading-relaxed line-clamp-3">
                    {fig.sonLaImprint}
                  </p>
                </div>
                <span className="mt-5 pt-3 border-t border-[#423C36] inline-flex items-center gap-1 text-xs font-semibold text-[#B89A62]">
                  Đọc tiểu sử &amp; dấu ấn <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Curated Gallery & Educational Value */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-20">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#7A2929] dark:text-[#B89A62] font-semibold">
                05 · Thư viện tư liệu
              </p>
              <h2 className="mt-1 font-serif text-3xl font-semibold text-[#252321] dark:text-[#FAF8F2]">
                Bộ sưu tập hình ảnh di tích &amp; hiện vật
              </h2>
            </div>
            <Link
              to="/thu-vien"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7A2929] dark:text-[#B89A62] hover:underline underline-offset-4 whitespace-nowrap"
            >
              <span>Mở toàn bộ thư viện</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredGallery.map((item) => (
              <Link
                key={item.id}
                to={`/thu-vien?item=${encodeURIComponent(item.id)}`}
                className="group space-y-2.5"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#D8CBB8] dark:border-[#3A342E] bg-[#252321]">
                  <MuseumImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-medium text-[#7A2929] dark:text-[#B89A62]">
                    <span className="font-mono">{item.accessionId}</span>
                    <span className="mx-1.5" aria-hidden="true">·</span>
                    <span>{item.categoryLabel}</span>
                  </p>
                  <h3 className="font-serif text-base font-semibold text-[#252321] dark:text-[#FAF8F2] group-hover:text-[#7A2929] dark:group-hover:text-[#B89A62] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-lg bg-[#F3EBDD]/70 dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-mono font-semibold text-[#7A2929] dark:text-[#B89A62] tabular-nums">
                KHO DỮ LIỆU SỐ DUBLIN CORE · {ARTIFACTS_ARCHIVE.length} BẢN GHI (D04-00001 → D04-00020)
              </p>
              <p className="text-sm text-[#3F362E] dark:text-[#D6C9B4]">
                Tra cứu hồ sơ chi tiết, bộ sưu tập nhạc cụ, hiện vật Nhà tù Sơn La, tư liệu Thủy điện Sơn La và xuất
                dữ liệu JSON/CSV.
              </p>
            </div>
            <Link
              to="/thu-vien#ho-so-hien-vat"
              className="shrink-0 min-h-[42px] inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#7A2929] hover:bg-[#5C4033] dark:bg-[#B89A62] dark:hover:bg-[#cbb07b] text-[#FAF8F2] dark:text-[#191715] text-xs font-semibold transition-colors whitespace-nowrap"
            >
              <span>Tra cứu {ARTIFACTS_ARCHIVE.length} hồ sơ hiện vật</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Cultural & Educational Value Quote Band */}
        <div className="border-y border-[#D8CBB8] dark:border-[#3A342E] py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[#7A2929] dark:text-[#B89A62] font-semibold">
              06 · Giá trị văn hóa &amp; giáo dục
            </p>
            <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#252321] dark:text-[#FAF8F2] leading-snug">
              "Nhà tù Sơn La là biểu tượng bất diệt của chủ nghĩa anh hùng cách mạng Việt Nam — nơi tinh thần yêu nước
              và ý chí tự do đã chiến thắng gông cùm thực dân."
            </blockquote>
          </div>
          <div className="lg:col-span-5 space-y-4 text-sm text-[#5C4033] dark:text-[#D6C9B4] leading-relaxed">
            <p>
              Ngày nay, quần thể Bảo tàng Sơn La và Di tích Quốc gia đặc biệt Nhà tù Sơn La không chỉ là điểm đến du
              lịch văn hóa – lịch sử trọng điểm của vùng Tây Bắc mà còn là không gian giáo dục truyền thống cách mạng,
              bồi đắp lòng tự hào dân tộc cho thế hệ trẻ.
            </p>
            <Link
              to="/tham-quan"
              className="inline-flex items-center gap-1.5 font-semibold text-[#7A2929] dark:text-[#B89A62] hover:underline underline-offset-4"
            >
              <span>Xem hướng dẫn tham quan di tích</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Section 7: Visit Information & Orientation Map */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#7A2929] dark:text-[#B89A62] font-semibold">
                07 · Thông tin tham quan &amp; bản đồ
              </p>
              <h2 className="mt-1 font-serif text-3xl font-semibold text-[#252321] dark:text-[#FAF8F2]">
                Lên kế hoạch đến với Đồi Khau Cả
              </h2>
            </div>
            <Link
              to="/tham-quan"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7A2929] dark:text-[#B89A62] hover:underline underline-offset-4 whitespace-nowrap"
            >
              <span>Xem đầy đủ thông tin &amp; đăng ký đoàn</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg bg-[#F3EBDD]/70 dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Địa chỉ di tích</span>
              </div>
              <p className="text-sm text-[#252321] dark:text-[#FAF8F2] leading-relaxed">{VISIT_INFO.address}</p>
            </div>
            <div className="p-5 rounded-lg bg-[#F3EBDD]/70 dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>Giờ mở cửa</span>
              </div>
              <p className="text-sm text-[#5C4033] dark:text-[#D6C9B4] leading-relaxed">
                {VISIT_INFO.openingHours}
              </p>
            </div>
            <div className="p-5 rounded-lg bg-[#F3EBDD]/70 dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
                <span>Giá vé tham quan</span>
              </div>
              <p className="text-sm text-[#5C4033] dark:text-[#D6C9B4] leading-relaxed">{VISIT_INFO.ticketPrice}</p>
            </div>
          </div>

          <SiteOrientationMap />
        </div>
      </section>
    </div>
  );
}
