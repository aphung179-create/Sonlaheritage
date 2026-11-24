import { useState } from 'react';
import { Compass, MapPin, Navigation } from 'lucide-react';
import { SITE_METADATA } from '../data/heritageData';

interface MapPinItem {
  id: string;
  label: string;
  x: number;
  y: number;
  note: string;
}

const SITE_PINS: MapPinItem[] = [
  {
    id: 'gate',
    label: 'Cổng Di tích Nhà tù Sơn La',
    x: 240,
    y: 235,
    note: 'Điểm đón khách và lối vào chính từ triền đồi Khau Cả, Tổ 9, phường Tô Hiệu.',
  },
  {
    id: 'peach',
    label: 'Cây đào Tô Hiệu',
    x: 345,
    y: 175,
    note: 'Nằm bên góc sân trại giam trong, ngay cạnh cửa vòm đá vào khu phòng giam.',
  },
  {
    id: 'cells',
    label: 'Trại giam tập thể & Xà lim ngầm',
    x: 425,
    y: 135,
    note: 'Khu vực lõi kiến trúc giam giữ được bảo tồn và phục dựng trên đỉnh đồi.',
  },
  {
    id: 'memorial',
    label: 'Khu Tưởng niệm Liệt sĩ',
    x: 310,
    y: 88,
    note: 'Bia ghi công các Anh hùng liệt sĩ và dấu tích tường thành lưu dấu bom đạn.',
  },
  {
    id: 'museum',
    label: 'Nhà trưng bày Bảo tàng Sơn La',
    x: 505,
    y: 205,
    note: 'Không gian trưng bày hiện vật lịch sử, văn hóa các dân tộc tỉnh Sơn La và báo Suối Reo.',
  },
];

export function SiteOrientationMap() {
  const [selectedPin, setSelectedPin] = useState<MapPinItem>(SITE_PINS[0]);

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${SITE_METADATA.coordinates.lat},${SITE_METADATA.coordinates.lng}`;

  return (
    <div className="bg-[#F3EBDD] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-7 p-4 sm:p-6 bg-[#EBE2D1] dark:bg-[#1C1A17] border-b lg:border-b-0 lg:border-r border-[#D8CBB8] dark:border-[#3A342E]">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2 text-xs font-medium text-[#5C4033] dark:text-[#D6C9B4]">
              <Compass className="w-4 h-4 text-[#7A2929] dark:text-[#B89A62]" aria-hidden="true" />
              <span>Sơ đồ định hướng Đồi Khau Cả · TP. Sơn La</span>
            </div>
            <span className="font-mono text-[11px] text-[#7A6B5B] dark:text-[#A89A86] tabular-nums">
              {SITE_METADATA.coordinates.label}
            </span>
          </div>

          <div className="relative w-full aspect-[16/10] bg-[#FAF8F2] dark:bg-[#252321] border border-[#D4C5AE] dark:border-[#3D3731] rounded overflow-hidden">
            <svg
              viewBox="0 0 640 360"
              className="w-full h-full"
              role="img"
              aria-label="Sơ đồ định hướng khuôn viên Di tích Nhà tù Sơn La và Bảo tàng Sơn La"
            >
              {/* Topographic contour lines for Khau Ca hill */}
              <path
                d="M70,290 C130,190 220,90 360,70 C500,50 560,140 580,240 C595,310 480,335 330,330 C180,325 45,330 70,290 Z"
                fill="none"
                stroke="currentColor"
                className="text-[#D8CBB8] dark:text-[#3A342E]"
                strokeWidth="1.2"
              />
              <path
                d="M125,265 C175,180 245,105 355,92 C465,80 520,150 532,225 C542,280 450,300 330,296 C210,292 95,300 125,265 Z"
                fill="none"
                stroke="currentColor"
                className="text-[#D8CBB8] dark:text-[#3A342E]"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
              <path
                d="M195,225 C225,165 280,120 355,115 C430,110 475,160 475,210 C475,255 415,265 340,265 C265,265 170,260 195,225 Z"
                fill="currentColor"
                className="text-[#F3EBDD]/70 dark:text-[#2D2824]"
                stroke="currentColor"
                strokeWidth="1"
              />

              {/* Road access line */}
              <path
                d="M35,332 Q155,310 240,240 T345,175 T425,135"
                fill="none"
                stroke="currentColor"
                className="text-[#B89A62]"
                strokeWidth="2.5"
                strokeDasharray="6 4"
              />
              <text
                x="48"
                y="314"
                className="fill-[#7A6B5B] dark:fill-[#A89A86] text-[11px] font-sans"
              >
                Hướng từ Quảng trường Tây Bắc / Đường Tô Hiệu
              </text>

              {/* Prison perimeter outline */}
              <rect
                x="265"
                y="112"
                width="185"
                height="112"
                rx="4"
                fill="none"
                stroke="currentColor"
                className="text-[#5C4033] dark:text-[#B89A62]"
                strokeWidth="2"
              />

              {/* Museum building outline */}
              <rect
                x="472"
                y="175"
                width="74"
                height="58"
                rx="3"
                fill="currentColor"
                className="text-[#E5DAC8] dark:text-[#35302B]"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              {/* Interactive Pins */}
              {SITE_PINS.map((pin, idx) => {
                const isSelected = selectedPin.id === pin.id;
                return (
                  <g
                    key={pin.id}
                    onClick={() => setSelectedPin(pin)}
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label={pin.label}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedPin(pin);
                      }
                    }}
                  >
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={isSelected ? 17 : 13}
                      className={
                        isSelected
                          ? 'fill-[#7A2929] dark:fill-[#B89A62]'
                          : 'fill-[#5C4033] dark:fill-[#3D3731] hover:fill-[#7A2929]'
                      }
                    />
                    <text
                      x={pin.x}
                      y={pin.y + 4}
                      textAnchor="middle"
                      className={`text-[11px] font-mono font-bold ${
                        isSelected
                          ? 'fill-[#FAF8F2] dark:fill-[#191715]'
                          : 'fill-[#FAF8F2]'
                      }`}
                    >
                      0{idx + 1}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <p className="mt-3 text-xs text-[#7A6B5B] dark:text-[#A89A86]">
            Nhấn vào từng điểm đánh số (01–05) trên sơ đồ để xem mô tả định vị các khu vực trong khuôn viên.
          </p>
        </div>

        <div className="lg:col-span-5 p-6 flex flex-col justify-between gap-6">
          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7A2929] dark:text-[#B89A62]">
                Vị trí &amp; Chỉ đường
              </p>
              <h3 className="mt-1 font-serif text-xl font-semibold text-[#252321] dark:text-[#FAF8F2]">
                {SITE_METADATA.monumentName}
              </h3>
              <p className="mt-2 text-sm text-[#5C4033] dark:text-[#D6C9B4] flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#7A2929] dark:text-[#B89A62]" aria-hidden="true" />
                <span>{SITE_METADATA.address}</span>
              </p>
            </div>

            <div className="pt-4 border-t border-[#DDD1BE] dark:border-[#3A342E]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A7B6A]">
                Điểm đang chọn trên sơ đồ
              </p>
              <p className="mt-1 font-serif text-lg font-medium text-[#252321] dark:text-[#FAF8F2]">
                {selectedPin.label}
              </p>
              <p className="mt-1.5 text-sm text-[#5C4033] dark:text-[#C7B9A5] leading-relaxed">
                {selectedPin.note}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 pt-2">
              {SITE_PINS.map((pin, idx) => (
                <button
                  key={pin.id}
                  type="button"
                  onClick={() => setSelectedPin(pin)}
                  className={`text-left px-2.5 py-2 rounded text-xs transition-colors border ${
                    selectedPin.id === pin.id
                      ? 'bg-[#7A2929] text-[#FAF8F2] border-[#7A2929] dark:bg-[#B89A62] dark:text-[#191715] dark:border-[#B89A62]'
                      : 'bg-[#FAF8F2] dark:bg-[#2B2723] text-[#5C4033] dark:text-[#D6C9B4] border-[#D8CBB8] dark:border-[#3A342E] hover:border-[#7A2929]'
                  }`}
                >
                  <span className="font-mono mr-1.5">0{idx + 1}.</span>
                  <span className="line-clamp-1 inline">{pin.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#DDD1BE] dark:border-[#3A342E]">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#7A2929] hover:bg-[#5C4033] dark:bg-[#B89A62] dark:hover:bg-[#cbb07b] text-[#FAF8F2] dark:text-[#191715] text-sm font-semibold transition-colors"
            >
              <Navigation className="w-4 h-4" aria-hidden="true" />
              <span>Chỉ đường đến di tích</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
