import { Link } from 'react-router-dom';
import { SITE_METADATA, VISIT_INFO } from '../data/heritageData';

export function Footer() {
  return (
    <footer className="bg-[#252321] text-[#F3EBDD] border-t border-[#3A3530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block font-serif text-2xl font-bold tracking-tight text-[#FAF8F2]">
              SON LA HERITAGE
            </Link>
            <p className="text-sm text-[#D6C9B4] leading-relaxed max-w-md">
              Cổng thông tin giới thiệu Bảo tàng Sơn La và Di tích lịch sử Quốc gia đặc biệt Nhà tù Sơn La —
              nơi lưu giữ ký ức lịch sử và tinh thần kiên trung của các chiến sĩ cách mạng Việt Nam trên mảnh đất Tây Bắc.
            </p>
            <div className="pt-2 text-xs text-[#B89A62] space-y-1">
              <p>{SITE_METADATA.firstRecognition}</p>
              <p>{SITE_METADATA.nationalRecognition}</p>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#B89A62]">
              Chuyên mục
            </h3>
            <ul className="space-y-2 text-sm text-[#E5DAC8]">
              <li>
                <Link to="/" className="hover:text-[#B89A62] transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/lich-su" className="hover:text-[#B89A62] transition-colors">
                  Lịch sử hình thành
                </Link>
              </li>
              <li>
                <Link to="/khong-gian" className="hover:text-[#B89A62] transition-colors">
                  Không gian di tích
                </Link>
              </li>
              <li>
                <Link to="/nhan-vat" className="hover:text-[#B89A62] transition-colors">
                  Nhân vật lịch sử
                </Link>
              </li>
              <li>
                <Link to="/thu-vien" className="hover:text-[#B89A62] transition-colors">
                  Thư viện tư liệu
                </Link>
              </li>
              <li>
                <Link to="/kham-pha" className="hover:text-[#B89A62] transition-colors">
                  Khám phá di tích 360°
                </Link>
              </li>
              <li>
                <Link to="/tham-quan" className="hover:text-[#B89A62] transition-colors">
                  Thông tin tham quan
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#B89A62]">
              Thông tin địa điểm
            </h3>
            <dl className="space-y-2.5 text-sm text-[#E5DAC8]">
              <div>
                <dt className="text-xs text-[#A89A86]">Địa chỉ di tích</dt>
                <dd>{VISIT_INFO.address}</dd>
              </div>
              <div>
                <dt className="text-xs text-[#A89A86]">Tọa độ</dt>
                <dd className="font-mono text-xs tabular-nums">{SITE_METADATA.coordinates.label}</dd>
              </div>
              <div>
                <dt className="text-xs text-[#A89A86]">Giờ mở cửa &amp; Giá vé</dt>
                <dd className="text-xs text-[#D6C9B4]">{VISIT_INFO.openingHours}</dd>
              </div>
              <div>
                <dt className="text-xs text-[#A89A86]">Nguồn tư liệu</dt>
                <dd className="text-xs text-[#D6C9B4]">
                  Bảo tàng tỉnh Sơn La · Cục Di sản Văn hóa (Bộ VHTTDL)
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#3A3530] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A89A86]">
          <p>© {new Date().getFullYear()} SON LA HERITAGE – Dấu Ấn Lịch Sử.</p>
          <p>Nội dung tôn trọng dữ liệu lịch sử đã xác thực · Thông tin chưa xác minh được ghi chú "Đang cập nhật".</p>
        </div>
      </div>
    </footer>
  );
}
