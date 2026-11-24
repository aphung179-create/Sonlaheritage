import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import {
  TIMELINE_EVENTS,
  EXHIBITION_ZONES,
  HISTORICAL_FIGURES,
  GALLERY_ITEMS,
  TOUR_SCENES,
  VISIT_INFO,
  SITE_METADATA,
} from './src/data/heritageData.ts';
import { ARTIFACTS_ARCHIVE } from './src/data/artifactsArchive.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '1mb' }));

interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  organization: string;
  visitDate: string;
  groupSize: string;
  message: string;
  createdAt: string;
}

const contactSubmissions: ContactSubmission[] = [];

// Initialize Gemini client lazily on server side only
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    monument: SITE_METADATA.monumentName,
    artifactCount: ARTIFACTS_ARCHIVE.length,
  });
});

app.get('/api/heritage', (_req, res) => {
  res.json({
    metadata: SITE_METADATA,
    visitInfo: VISIT_INFO,
    timeline: TIMELINE_EVENTS,
    zones: EXHIBITION_ZONES,
    figures: HISTORICAL_FIGURES,
    gallery: GALLERY_ITEMS,
    tourScenes: TOUR_SCENES,
    artifacts: ARTIFACTS_ARCHIVE,
    artifactCount: ARTIFACTS_ARCHIVE.length,
  });
});

app.get('/api/search', (req, res) => {
  const rawQuery = typeof req.query.q === 'string' ? req.query.q : '';
  const query = rawQuery.trim().toLowerCase();

  if (!query) {
    res.json({ results: [] });
    return;
  }

  const results: Array<{
    type: 'artifact' | 'timeline' | 'zone' | 'figure' | 'gallery';
    typeLabel: string;
    id: string;
    title: string;
    subtitle: string;
    route: string;
  }> = [];

  for (const artifact of ARTIFACTS_ARCHIVE) {
    if (
      artifact.identifier.toLowerCase().includes(query) ||
      artifact.title.toLowerCase().includes(query) ||
      artifact.subject.toLowerCase().includes(query) ||
      artifact.description.toLowerCase().includes(query) ||
      artifact.creator.toLowerCase().includes(query) ||
      artifact.type.toLowerCase().includes(query) ||
      artifact.relation.toLowerCase().includes(query) ||
      artifact.source.toLowerCase().includes(query) ||
      artifact.current_location.toLowerCase().includes(query) ||
      artifact.original_condition.toLowerCase().includes(query)
    ) {
      results.push({
        type: 'artifact',
        typeLabel: `Hồ sơ hiện vật · ${artifact.identifier}`,
        id: artifact.identifier,
        title: `${artifact.identifier} — ${artifact.title}`,
        subtitle: `${artifact.type} · ${artifact.current_location} · ${artifact.display_version_type}`,
        route: `/thu-vien?artifact=${encodeURIComponent(artifact.identifier)}`,
      });
    }
  }

  for (const item of TIMELINE_EVENTS) {
    if (
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.year.toLowerCase().includes(query) ||
      item.details.toLowerCase().includes(query)
    ) {
      results.push({
        type: 'timeline',
        typeLabel: 'Dòng thời gian',
        id: item.id,
        title: `${item.year} — ${item.title}`,
        subtitle: item.summary,
        route: `/lich-su#${item.id}`,
      });
    }
  }

  for (const zone of EXHIBITION_ZONES) {
    if (
      zone.name.toLowerCase().includes(query) ||
      zone.shortDesc.toLowerCase().includes(query) ||
      zone.description.toLowerCase().includes(query)
    ) {
      results.push({
        type: 'zone',
        typeLabel: 'Không gian di tích',
        id: zone.id,
        title: zone.name,
        subtitle: zone.shortDesc,
        route: `/khong-gian?zone=${encodeURIComponent(zone.id)}`,
      });
    }
  }

  for (const fig of HISTORICAL_FIGURES) {
    if (
      fig.name.toLowerCase().includes(query) ||
      (fig.birthName && fig.birthName.toLowerCase().includes(query)) ||
      fig.sonLaImprint.toLowerCase().includes(query) ||
      fig.biography.toLowerCase().includes(query) ||
      fig.roleInPrison.toLowerCase().includes(query)
    ) {
      results.push({
        type: 'figure',
        typeLabel: 'Nhân vật lịch sử',
        id: fig.id,
        title: `${fig.name} (${fig.years})`,
        subtitle: fig.roleInPrison,
        route: `/nhan-vat?figure=${encodeURIComponent(fig.id)}`,
      });
    }
  }

  for (const gal of GALLERY_ITEMS) {
    if (
      gal.title.toLowerCase().includes(query) ||
      gal.caption.toLowerCase().includes(query) ||
      gal.categoryLabel.toLowerCase().includes(query)
    ) {
      results.push({
        type: 'gallery',
        typeLabel: 'Thư viện ảnh',
        id: gal.id,
        title: gal.title,
        subtitle: gal.caption,
        route: `/thu-vien?item=${encodeURIComponent(gal.id)}`,
      });
    }
  }

  res.json({ results: results.slice(0, 30) });
});

app.post('/api/contact', (req, res) => {
  const body = req.body ?? {};
  const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const organization = typeof body.organization === 'string' ? body.organization.trim() : '';
  const visitDate = typeof body.visitDate === 'string' ? body.visitDate.trim() : '';
  const groupSize = typeof body.groupSize === 'string' ? body.groupSize.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!fullName || fullName.length < 2 || fullName.length > 120) {
    res.status(400).json({ error: 'Vui lòng nhập họ tên hợp lệ (từ 2 đến 120 ký tự).' });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email) || email.length > 160) {
    res.status(400).json({ error: 'Vui lòng nhập địa chỉ email hợp lệ.' });
    return;
  }

  if (!message || message.length < 5 || message.length > 2000) {
    res.status(400).json({ error: 'Vui lòng nhập nội dung liên hệ hoặc yêu cầu tham quan.' });
    return;
  }

  const submission: ContactSubmission = {
    id: `REG-${Date.now()}`,
    fullName,
    email,
    organization: organization.slice(0, 160),
    visitDate: visitDate.slice(0, 40),
    groupSize: groupSize.slice(0, 40),
    message,
    createdAt: new Date().toISOString(),
  };

  contactSubmissions.push(submission);
  res.status(201).json({
    ok: true,
    referenceId: submission.id,
    message:
      'Đã ghi nhận thông tin đăng ký/liên hệ của quý khách. Lưu ý: Mọi xác nhận lịch tiếp đoàn chính thức sẽ tuân theo thông báo trực tiếp từ Bảo tàng tỉnh Sơn La.',
  });
});

app.post('/api/chat', async (req, res) => {
  const body = req.body ?? {};
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const history = Array.isArray(body.history) ? body.history : [];

  if (!message || message.length > 1500) {
    res.status(400).json({ error: 'Câu hỏi không hợp lệ hoặc vượt quá 1.500 ký tự.' });
    return;
  }

  const ai = getGeminiClient();
  if (!ai) {
    res.status(503).json({
      error:
        'Dịch vụ Trợ lý AI hiện chưa có cấu hình khóa API trên máy chủ. Vui lòng thiết lập GEMINI_API_KEY trong phần Secrets để kích hoạt.',
    });
    return;
  }

  const artifactsDigest = ARTIFACTS_ARCHIVE.map(
    (a) =>
      `- [${a.identifier}] ${a.title} | Loại: ${a.type} | Bộ sưu tập: ${a.relation} | Niên đại/Số hóa: ${a.date} | Mô tả: ${a.description} | Chất liệu: ${a.format} | Nơi lưu giữ hiện nay: ${a.current_location} | Nơi lưu giữ ban đầu: ${a.original_location} | Loại bản hiển thị: ${a.display_version_type} | Tình trạng gốc: ${a.original_condition} | Kiểm chứng: ${a.verification_status} | Nguồn: ${a.source} | Quyền: ${a.rights} | Phần không công bố: ${a.unpublished_parts} | Số đính kèm: ${a.attachments.length}`
  ).join('\n');

  const systemInstruction = `Bạn là Trợ lý Tra cứu Hiện vật và Lịch sử của Bảo tàng tỉnh Sơn La – Di tích lịch sử Quốc gia đặc biệt Nhà tù Sơn La (SON LA HERITAGE).
NGUYÊN TẮC BẮT BUỘC:
1. Trả lời bằng tiếng Việt có dấu (UTF-8), trang trọng, chuẩn mực, chính xác tuyệt đối theo dữ liệu đã nạp.
2. Khi trả lời về bất kỳ hiện vật/tư liệu nào trong cơ sở dữ liệu (${ARTIFACTS_ARCHIVE.length} bản ghi từ D04-00001 đến D04-00020), LUÔN nêu rõ đủ 3 thông tin:
   - Mã bản ghi (ví dụ: D04-00016)
   - Nơi lưu giữ hiện nay (current_location)
   - Loại bản đang hiển thị (display_version_type)
3. Nếu thông tin người dùng hỏi KHÔNG có trong tập dữ liệu hiện vật (${ARTIFACTS_ARCHIVE.length} bản ghi) hoặc hồ sơ lịch sử xác thực dưới đây, PHẢI trả lời rõ ràng là "Chưa có tư liệu" (cụ thể: "Chưa có tư liệu về nội dung này trong cơ sở dữ liệu hiện có của Bảo tàng tỉnh Sơn La."), tuyệt đối không tự suy diễn hoặc bịa đặt số liệu, giá vé, giờ mở cửa hay thông tin chưa xác minh.
4. Dữ liệu di tích Nhà tù Sơn La xác thực: xây dựng năm 1908 trên đồi Khau Cả (P. Tô Hiệu, TP. Sơn La), mở rộng ~2.170 m², Chi bộ thành lập 12/1939, tờ báo bí mật Suối Reo, đồng chí Tô Hiệu hy sinh 7/3/1944 và Cây đào Tô Hiệu, cuộc vượt ngục năm 1943; các chiến sĩ tiêu biểu: Tô Hiệu, Lê Đức Thọ, Trường Chinh, Nguyễn Lương Bằng, Xuân Thủy, Trần Huy Liệu; bị bom phá hoại năm 1952 và 1965; xếp hạng Quốc gia năm 1962 và Di tích Quốc gia đặc biệt theo Quyết định 2408/QĐ-TTg ngày 31/12/2014. Giờ mở cửa, giá vé, điện thoại và email liên hệ chính thức đang ghi nhận là "Đang cập nhật".

TOÀN BỘ TẬP DỮ LIỆU HIỆN VẬT / TƯ LIỆU ĐÃ GỘP (${ARTIFACTS_ARCHIVE.length} BẢN GHI: D04-00001 ĐẾN D04-00020):
${artifactsDigest}`;

  const sanitizedHistory = history
    .slice(-8)
    .filter(
      (item: unknown): item is { role: 'user' | 'model'; text: string } =>
        Boolean(item) &&
        typeof item === 'object' &&
        ((item as { role?: string }).role === 'user' || (item as { role?: string }).role === 'model') &&
        typeof (item as { text?: string }).text === 'string'
    )
    .map((item: { role: 'user' | 'model'; text: string }) => ({
      role: item.role,
      parts: [{ text: item.text.slice(0, 1200) }],
    }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-4-hydrogen',
      contents: [
        ...sanitizedHistory,
        {
          role: 'user',
          parts: [{ text: message }],
        },
      ],
      config: {
        systemInstruction,
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
      },
    });

    const reply = response.text?.trim();
    if (!reply) {
      res.status(502).json({ error: 'Không nhận được phản hồi từ hệ thống AI. Vui lòng thử lại.' });
      return;
    }

    res.json({ reply });
  } catch (err) {
    console.error('Gemini API error:', err);
    res.status(502).json({
      error: 'Không thể kết nối Trợ lý Lịch sử vào lúc này. Vui lòng kiểm tra khóa GEMINI_API_KEY hoặc thử lại sau.',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SON LA HERITAGE server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
