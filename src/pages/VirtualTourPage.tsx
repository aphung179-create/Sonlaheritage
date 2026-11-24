import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Compass, Info, Maximize2, Minimize2, MoveHorizontal } from 'lucide-react';
import { TOUR_SCENES, TourHotspot } from '../data/heritageData';
import { MuseumImage } from '../components/MuseumImage';

export function VirtualTourPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSceneId = searchParams.get('scene') || TOUR_SCENES[0].id;
  const [activeSceneId, setActiveSceneId] = useState<string>(initialSceneId);
  const [selectedHotspot, setSelectedHotspot] = useState<TourHotspot | null>(null);
  const [panPercent, setPanPercent] = useState<number>(50);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);

  const currentIndex = Math.max(
    0,
    TOUR_SCENES.findIndex((s) => s.id === activeSceneId)
  );
  const currentScene = TOUR_SCENES[currentIndex] || TOUR_SCENES[0];

  useEffect(() => {
    const paramScene = searchParams.get('scene');
    if (paramScene && TOUR_SCENES.some((s) => s.id === paramScene)) {
      setActiveSceneId(paramScene);
    }
  }, [searchParams]);

  useEffect(() => {
    setSelectedHotspot(currentScene.hotspots[0] || null);
    setPanPercent(50);
  }, [currentScene.id]);

  const selectScene = (sceneId: string) => {
    setActiveSceneId(sceneId);
    setSearchParams({ scene: sceneId });
  };

  const stepScene = (delta: number) => {
    const nextIdx = (currentIndex + delta + TOUR_SCENES.length) % TOUR_SCENES.length;
    selectScene(TOUR_SCENES[nextIdx].id);
  };

  const toggleFullscreen = async () => {
    if (!stageRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await stageRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      // Fullscreen unavailable in restricted iframe
    }
  };

  return (
    <div>
      <section className="bg-[#F3EBDD] dark:bg-[#221F1C] border-b border-[#DDD1BE] dark:border-[#332E29] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7A2929] dark:text-[#B89A62] font-semibold">
            Tham quan trực tuyến · Đồi Khau Cả
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252321] dark:text-[#FAF8F2]">
            Khám phá không gian di tích Nhà tù Sơn La
          </h1>
          <p className="text-sm sm:text-base text-[#5C4033] dark:text-[#D6C9B4] max-w-3xl leading-relaxed">
            Trải nghiệm tham quan toàn cảnh tương tác theo 6 điểm dừng tiêu biểu. Chạm vào các điểm đánh dấu trên ảnh
            hoặc trên sơ đồ để đọc thuyết minh chi tiết từng hạng mục di tích.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-8">
        {/* Interactive Panoramic Viewport */}
        <div
          ref={stageRef}
          className="bg-[#191715] border border-[#3A342E] rounded-lg overflow-hidden shadow-xl"
        >
          {/* Top Scene HUD */}
          <div className="px-4 sm:px-6 py-3.5 bg-[#252321] border-b border-[#3A342E] flex flex-wrap items-center justify-between gap-3 text-[#FAF8F2]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-[#B89A62] tabular-nums">
                ĐIỂM {currentScene.order} / 0{TOUR_SCENES.length}
              </span>
              <span aria-hidden="true" className="text-[#5C4033]">|</span>
              <h2 className="font-serif text-base sm:text-lg font-semibold">{currentScene.name}</h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => stepScene(-1)}
                aria-label="Điểm tham quan trước"
                className="min-h-[36px] px-3 py-1.5 rounded bg-[#322D28] hover:bg-[#443E37] text-xs font-medium inline-flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Trước</span>
              </button>
              <button
                type="button"
                onClick={() => stepScene(1)}
                aria-label="Điểm tham quan tiếp theo"
                className="min-h-[36px] px-3 py-1.5 rounded bg-[#7A2929] hover:bg-[#5C4033] text-xs font-medium inline-flex items-center gap-1"
              >
                <span className="hidden sm:inline">Tiếp theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? 'Thoát toàn màn hình' : 'Xem toàn màn hình'}
                className="min-h-[36px] px-2.5 py-1.5 rounded bg-[#322D28] hover:bg-[#443E37]"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Panoramic Image Stage with Hotspots */}
          <div className="relative w-full h-[50vh] sm:h-[62vh] overflow-hidden bg-[#12100E]">
            <div
              className="relative w-[135%] sm:w-[115%] h-full transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${((panPercent - 50) / 100) * 18 + 6}%)`,
              }}
            >
              <MuseumImage
                src={currentScene.image}
                alt={currentScene.name}
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none"
              />

              {/* Hotspot Pins */}
              {currentScene.hotspots.map((spot) => {
                const isActive = selectedHotspot?.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setSelectedHotspot(spot)}
                    style={{ left: `${spot.xPercent}%`, top: `${spot.yPercent}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#B89A62] text-[#191715] scale-105 ring-4 ring-[#B89A62]/30'
                        : 'bg-[#252321]/90 text-[#FAF8F2] border border-[#B89A62]/70 hover:bg-[#7A2929]'
                    }`}
                  >
                    <Info className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span className="whitespace-nowrap">{spot.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Hotspot Annotation Overlay */}
            {selectedHotspot && (
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-[#191715]/90 backdrop-blur-md border border-[#B89A62]/50 rounded-lg p-4 text-[#FAF8F2] shadow-xl">
                <p className="text-[11px] uppercase tracking-wider text-[#B89A62] font-semibold">
                  Điểm thuyết minh
                </p>
                <h3 className="font-serif text-base sm:text-lg font-semibold mt-0.5">
                  {selectedHotspot.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#E5DAC8] leading-relaxed">
                  {selectedHotspot.description}
                </p>
              </div>
            )}
          </div>

          {/* Panorama Horizontal Pan Control */}
          <div className="px-4 sm:px-6 py-3 bg-[#252321] border-t border-[#3A342E] flex items-center gap-4 text-xs text-[#D6C9B4]">
            <span className="inline-flex items-center gap-1.5 shrink-0">
              <MoveHorizontal className="w-4 h-4 text-[#B89A62]" aria-hidden="true" />
              <span>Quét góc nhìn:</span>
            </span>
            <input
              type="range"
              min={0}
              max={100}
              value={panPercent}
              onChange={(e) => setPanPercent(Number(e.target.value))}
              aria-label="Điều chỉnh góc nhìn toàn cảnh"
              className="flex-1 accent-[#B89A62] cursor-pointer"
            />
            <span className="font-mono tabular-nums w-10 text-right">{panPercent}%</span>
          </div>
        </div>

        {/* Lower Split: Scene Details & Interactive Tour Floorplan Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Scene Context & Stops */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-lg bg-[#F3EBDD]/70 dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-4">
              <p className="text-xs uppercase tracking-widest text-[#7A2929] dark:text-[#B89A62] font-semibold">
                Thuyết minh điểm tham quan {currentScene.order}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#252321] dark:text-[#FAF8F2]">
                {currentScene.name}
              </h3>
              <p className="text-base text-[#252321] dark:text-[#F3EBDD] leading-relaxed">
                {currentScene.description}
              </p>
              <div className="pt-4 border-t border-[#DFD3C0] dark:border-[#332E29]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#5C4033] dark:text-[#B89A62]">
                  Bối cảnh lịch sử
                </p>
                <p className="mt-1.5 text-sm text-[#5C4033] dark:text-[#C7B9A5] leading-relaxed">
                  {currentScene.historicalContext}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TOUR_SCENES.map((scene) => {
                const isSelected = scene.id === currentScene.id;
                return (
                  <button
                    key={scene.id}
                    type="button"
                    onClick={() => selectScene(scene.id)}
                    className={`text-left p-4 rounded-lg border transition-colors ${
                      isSelected
                        ? 'bg-[#7A2929] text-[#FAF8F2] border-[#7A2929] dark:bg-[#B89A62] dark:text-[#191715] dark:border-[#B89A62]'
                        : 'bg-[#FAF8F2] dark:bg-[#221F1C] text-[#252321] dark:text-[#FAF8F2] border-[#D8CBB8] dark:border-[#3A342E] hover:border-[#7A2929]'
                    }`}
                  >
                    <p
                      className={`font-mono text-xs font-semibold ${
                        isSelected ? 'text-[#F3EBDD] dark:text-[#252321]' : 'text-[#7A2929] dark:text-[#B89A62]'
                      }`}
                    >
                      ĐIỂM {scene.order}
                    </p>
                    <p className="font-serif text-base font-semibold mt-0.5">{scene.name}</p>
                    <p
                      className={`text-xs mt-1 ${
                        isSelected ? 'text-[#E6DCCB] dark:text-[#3A342E]' : 'text-[#7A6B5B] dark:text-[#A89A86]'
                      }`}
                    >
                      {scene.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Spatial Tour Map */}
          <div className="lg:col-span-5 p-6 rounded-lg bg-[#F3EBDD] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>Sơ đồ tuyến tham quan di tích</span>
            </div>

            <div className="relative aspect-[4/3] bg-[#FAF8F2] dark:bg-[#191715] border border-[#D4C5AE] dark:border-[#3A342E] rounded overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Trail Path */}
                <path
                  d="M 22 74 L 42 56 L 56 44 L 68 36 L 80 58 L 48 22"
                  fill="none"
                  stroke="#B89A62"
                  strokeWidth="1.2"
                  strokeDasharray="2.5 2"
                />
                {/* Prison perimeter guide */}
                <rect
                  x="32"
                  y="28"
                  width="42"
                  height="36"
                  rx="2"
                  fill="none"
                  stroke="currentColor"
                  className="text-[#D8CBB8] dark:text-[#3A342E]"
                  strokeWidth="0.8"
                />

                {TOUR_SCENES.map((scene) => {
                  const isActive = scene.id === currentScene.id;
                  return (
                    <g
                      key={scene.id}
                      onClick={() => selectScene(scene.id)}
                      className="cursor-pointer"
                      role="button"
                      tabIndex={0}
                      aria-label={`Chuyển đến ${scene.name}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          selectScene(scene.id);
                        }
                      }}
                    >
                      <circle
                        cx={scene.mapX}
                        cy={scene.mapY}
                        r={isActive ? 5.2 : 4}
                        className={
                          isActive
                            ? 'fill-[#7A2929] dark:fill-[#B89A62]'
                            : 'fill-[#5C4033] dark:fill-[#3D3731] hover:fill-[#7A2929]'
                        }
                      />
                      <text
                        x={scene.mapX}
                        y={scene.mapY + 1.3}
                        textAnchor="middle"
                        className="fill-[#FAF8F2] dark:fill-[#191715] text-[3.5px] font-mono font-bold"
                      >
                        {scene.order}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <p className="text-xs text-[#5C4033] dark:text-[#C7B9A5] leading-relaxed">
              Nhấn trực tiếp vào các điểm 01–06 trên sơ đồ để di chuyển tức thời giữa các không gian di tích trên đồi
              Khau Cả.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
