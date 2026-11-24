import { FormEvent, useState } from 'react';
import { CheckCircle2, Clock, Compass, Info, Mail, MapPin, Phone, Ticket } from 'lucide-react';
import { VISIT_INFO } from '../data/heritageData';
import { SiteOrientationMap } from '../components/SiteOrientationMap';

export function VisitPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<{ referenceId: string; message: string } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          organization,
          visitDate,
          groupSize,
          message,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Không thể gửi biểu mẫu liên hệ.');
      }
      setSubmitSuccess({ referenceId: data.referenceId, message: data.message });
      setFullName('');
      setEmail('');
      setOrganization('');
      setVisitDate('');
      setGroupSize('');
      setMessage('');
    } catch (err) {
      setSubmitError((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-[#F3EBDD] dark:bg-[#221F1C] border-b border-[#DDD1BE] dark:border-[#332E29] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7A2929] dark:text-[#B89A62] font-semibold">
            Hướng dẫn khách tham quan
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252321] dark:text-[#FAF8F2] max-w-3xl [text-wrap:balance]">
            Thông tin tham quan Bảo tàng &amp; Di tích Nhà tù Sơn La
          </h1>
          <p className="text-base text-[#5C4033] dark:text-[#D6C9B4] max-w-2xl leading-relaxed">
            Chuẩn bị hành trình tìm về địa chỉ đỏ trên đồi Khau Cả, thành phố Sơn La với chỉ dẫn đường đi, lưu ý
            trang phục và cổng đăng ký thông tin đoàn tham quan.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 space-y-16">
        {/* Verified Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Địa chỉ chính thức</span>
            </div>
            <p className="text-sm font-medium text-[#252321] dark:text-[#FAF8F2] leading-relaxed">
              {VISIT_INFO.address}
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>Giờ mở cửa</span>
            </div>
            <p className="text-sm text-[#5C4033] dark:text-[#D6C9B4] leading-relaxed">
              {VISIT_INFO.openingHours}
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
              <Ticket className="w-4 h-4" aria-hidden="true" />
              <span>Giá vé tham quan</span>
            </div>
            <p className="text-sm text-[#5C4033] dark:text-[#D6C9B4] leading-relaxed">
              {VISIT_INFO.ticketPrice}
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Điện thoại liên hệ</span>
            </div>
            <p className="text-sm text-[#5C4033] dark:text-[#D6C9B4]">{VISIT_INFO.phone}</p>
          </div>

          <div className="p-6 rounded-lg bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Thư điện tử chính thức</span>
            </div>
            <p className="text-sm text-[#5C4033] dark:text-[#D6C9B4]">{VISIT_INFO.email}</p>
          </div>

          <div className="p-6 rounded-lg bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
              <Info className="w-4 h-4" aria-hidden="true" />
              <span>Minh bạch thông tin</span>
            </div>
            <p className="text-xs text-[#5C4033] dark:text-[#C7B9A5] leading-relaxed">
              Các thông tin vận hành chưa có văn bản xác nhận chính thức được ghi rõ "Đang cập nhật" nhằm đảm bảo độ
              chính xác tuyệt đối cho du khách.
            </p>
          </div>
        </div>

        {/* Orientation Map + Directions */}
        <div className="space-y-6">
          <SiteOrientationMap />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            <div className="p-6 rounded-lg bg-[#F3EBDD]/60 dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
                <Compass className="w-4 h-4" aria-hidden="true" />
                <span>Hướng dẫn di chuyển</span>
              </div>
              <div className="space-y-3 text-sm text-[#3F362E] dark:text-[#D6C9B4] leading-relaxed">
                <p>
                  <strong className="text-[#252321] dark:text-[#FAF8F2]">Tuyến từ Hà Nội: </strong>
                  {VISIT_INFO.directionsFromHanoi}
                </p>
                <p>
                  <strong className="text-[#252321] dark:text-[#FAF8F2]">Tại TP. Sơn La: </strong>
                  {VISIT_INFO.localAccess}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#F3EBDD]/60 dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7A2929] dark:text-[#B89A62]">
                Lưu ý khi tham quan di tích
              </p>
              <ul className="space-y-2.5 text-sm text-[#3F362E] dark:text-[#D6C9B4] list-disc pl-5 leading-relaxed">
                {VISIT_INFO.visitorNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Group Visit Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-6 border-t border-[#D8CBB8] dark:border-[#3A342E]">
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#7A2929] dark:text-[#B89A62] font-semibold">
              Liên hệ &amp; Đăng ký thông tin
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#252321] dark:text-[#FAF8F2]">
              Gửi yêu cầu tìm hiểu hoặc đăng ký tham quan theo đoàn
            </h2>
            <p className="text-sm text-[#5C4033] dark:text-[#C7B9A5] leading-relaxed">
              Quý khách, nhà trường hoặc cơ quan có thể để lại thông tin dự kiến tham quan hoặc câu hỏi tư liệu qua biểu
              mẫu bên cạnh. Hệ thống sẽ ghi nhận mã hồ sơ để hỗ trợ phản hồi.
            </p>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-lg bg-[#F3EBDD]/70 dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs font-semibold text-[#252321] dark:text-[#FAF8F2]">
                    Họ và tên *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3.5 py-2.5 text-sm rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#252321] text-[#252321] dark:text-[#FAF8F2] focus:outline-none focus:border-[#7A2929]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-semibold text-[#252321] dark:text-[#FAF8F2]">
                    Email liên hệ *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#252321] text-[#252321] dark:text-[#FAF8F2] focus:outline-none focus:border-[#7A2929]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="organization"
                    className="block text-xs font-semibold text-[#252321] dark:text-[#FAF8F2]"
                  >
                    Đơn vị / Trường học
                  </label>
                  <input
                    id="organization"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Không bắt buộc"
                    className="w-full px-3.5 py-2.5 text-sm rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#252321] text-[#252321] dark:text-[#FAF8F2] focus:outline-none focus:border-[#7A2929]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="visitDate" className="block text-xs font-semibold text-[#252321] dark:text-[#FAF8F2]">
                    Ngày dự kiến
                  </label>
                  <input
                    id="visitDate"
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#252321] text-[#252321] dark:text-[#FAF8F2] focus:outline-none focus:border-[#7A2929]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="groupSize" className="block text-xs font-semibold text-[#252321] dark:text-[#FAF8F2]">
                    Số lượng khách
                  </label>
                  <input
                    id="groupSize"
                    type="text"
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                    placeholder="VD: 25 người"
                    className="w-full px-3.5 py-2.5 text-sm rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#252321] text-[#252321] dark:text-[#FAF8F2] focus:outline-none focus:border-[#7A2929]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-semibold text-[#252321] dark:text-[#FAF8F2]">
                  Nội dung yêu cầu *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Nhập câu hỏi về tư liệu lịch sử hoặc thông tin đoàn tham quan..."
                  className="w-full px-3.5 py-2.5 text-sm rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#252321] text-[#252321] dark:text-[#FAF8F2] focus:outline-none focus:border-[#7A2929]"
                />
              </div>

              {submitError && (
                <p className="p-3 rounded bg-[#7A2929]/10 border border-[#7A2929]/40 text-xs text-[#7A2929] dark:text-[#E89B9B]">
                  {submitError}
                </p>
              )}

              {submitSuccess && (
                <div className="p-4 rounded bg-emerald-900/10 border border-emerald-700/30 text-xs text-[#252321] dark:text-[#FAF8F2] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">Mã tiếp nhận: {submitSuccess.referenceId}</p>
                    <p>{submitSuccess.message}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="min-h-[44px] px-6 py-3 rounded-md bg-[#7A2929] hover:bg-[#5C4033] disabled:opacity-50 dark:bg-[#B89A62] dark:hover:bg-[#cbb07b] text-[#FAF8F2] dark:text-[#191715] text-sm font-semibold transition-colors"
              >
                {submitting ? 'Đang gửi thông tin...' : 'Gửi thông tin liên hệ'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
