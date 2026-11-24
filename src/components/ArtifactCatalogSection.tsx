import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Archive,
  CheckCircle2,
  Download,
  FileJson,
  FileSpreadsheet,
  Paperclip,
  RotateCcw,
  Search,
  X,
} from 'lucide-react';
import {
  ARTIFACTS_ARCHIVE,
  ArtifactRecord,
  getCollectionGroup,
  getConditionGroup,
  getSourceList,
} from '../data/artifactsArchive';

const CSV_HEADERS: Array<{ key: keyof ArtifactRecord; label: string }> = [
  { key: 'identifier', label: 'identifier' },
  { key: 'title', label: 'title' },
  { key: 'creator', label: 'creator' },
  { key: 'subject', label: 'subject' },
  { key: 'description', label: 'description' },
  { key: 'publisher', label: 'publisher' },
  { key: 'contributor', label: 'contributor' },
  { key: 'date', label: 'date' },
  { key: 'type', label: 'type' },
  { key: 'format', label: 'format' },
  { key: 'source', label: 'source' },
  { key: 'language', label: 'language' },
  { key: 'relation', label: 'relation' },
  { key: 'coverage', label: 'coverage' },
  { key: 'rights', label: 'rights' },
  { key: 'current_location', label: 'current_location' },
  { key: 'original_location', label: 'original_location' },
  { key: 'display_version_type', label: 'display_version_type' },
  { key: 'original_condition', label: 'original_condition' },
  { key: 'registration_number', label: 'registration_number' },
  { key: 'authorized_by', label: 'authorized_by' },
  { key: 'unpublished_parts', label: 'unpublished_parts' },
  { key: 'verification_status', label: 'verification_status' },
  { key: 'attachments', label: 'attachments' },
];

function escapeCsvCell(value: unknown): string {
  const raw = Array.isArray(value)
    ? value.map((item) => (typeof item === 'object' && item !== null ? JSON.stringify(item) : String(item))).join(' | ')
    : value == null
    ? ''
    : String(value);
  const needsQuotes = /[",\n\r]/.test(raw);
  const escaped = raw.replace(/"/g, '""');
  return needsQuotes ? `"${escaped}"` : escaped;
}

export function ArtifactCatalogSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [selectedSource, setSelectedSource] = useState('all');
  const [activeRecord, setActiveRecord] = useState<ArtifactRecord | null>(null);
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  useEffect(() => {
    const artifactId = searchParams.get('artifact');
    if (artifactId) {
      const found = ARTIFACTS_ARCHIVE.find(
        (item) => item.identifier.toLowerCase() === artifactId.toLowerCase()
      );
      if (found) setActiveRecord(found);
    }
  }, [searchParams]);

  const typeOptions = useMemo(
    () => Array.from(new Set(ARTIFACTS_ARCHIVE.map((item) => item.type))),
    []
  );

  const collectionOptions = useMemo(
    () => Array.from(new Set(ARTIFACTS_ARCHIVE.map((item) => getCollectionGroup(item.relation)))),
    []
  );

  const conditionOptions = useMemo(
    () => Array.from(new Set(ARTIFACTS_ARCHIVE.map((item) => getConditionGroup(item.original_condition)))),
    []
  );

  const sourceOptions = useMemo(() => {
    const set = new Set<string>();
    for (const item of ARTIFACTS_ARCHIVE) {
      for (const src of getSourceList(item.source)) {
        set.add(src);
      }
    }
    return Array.from(set);
  }, []);

  const filteredRecords = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTIFACTS_ARCHIVE.filter((record) => {
      if (selectedType !== 'all' && record.type !== selectedType) return false;
      if (selectedCollection !== 'all' && getCollectionGroup(record.relation) !== selectedCollection) {
        return false;
      }
      if (selectedCondition !== 'all' && getConditionGroup(record.original_condition) !== selectedCondition) {
        return false;
      }
      if (selectedSource !== 'all' && !getSourceList(record.source).includes(selectedSource)) {
        return false;
      }
      if (!q) return true;

      return (
        record.identifier.toLowerCase().includes(q) ||
        record.title.toLowerCase().includes(q) ||
        record.subject.toLowerCase().includes(q) ||
        record.description.toLowerCase().includes(q) ||
        record.creator.toLowerCase().includes(q) ||
        record.relation.toLowerCase().includes(q) ||
        record.source.toLowerCase().includes(q) ||
        record.current_location.toLowerCase().includes(q)
      );
    });
  }, [query, selectedType, selectedCollection, selectedCondition, selectedSource]);

  const stats = useMemo(() => {
    const total = ARTIFACTS_ARCHIVE.length;
    const verified = ARTIFACTS_ARCHIVE.filter((r) =>
      r.verification_status.toLowerCase().includes('đã kiểm chứng')
    ).length;
    const collections = collectionOptions.length;
    const newlyAdded = ARTIFACTS_ARCHIVE.filter((r) => {
      const num = Number(r.identifier.split('-')[1] || 0);
      return num >= 16 && num <= 20;
    }).length;
    return { total, verified, collections, newlyAdded };
  }, [collectionOptions.length]);

  const resetFilters = () => {
    setQuery('');
    setSelectedType('all');
    setSelectedCollection('all');
    setSelectedCondition('all');
    setSelectedSource('all');
  };

  const openRecord = (record: ArtifactRecord) => {
    setActiveRecord(record);
    setSearchParams({ artifact: record.identifier });
  };

  const closeRecord = () => {
    setActiveRecord(null);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('artifact');
    setSearchParams(nextParams);
  };

  const triggerDownload = (blob: Blob, filename: string, feedbackText: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setExportNotice(feedbackText);
    setTimeout(() => setExportNotice(null), 3500);
  };

  const handleExportJson = () => {
    const payload = JSON.stringify(ARTIFACTS_ARCHIVE, null, 2);
    const blob = new Blob([payload], { type: 'application/json;charset=utf-8' });
    triggerDownload(
      blob,
      `bao-tang-son-la-du-lieu-hien-vat-${ARTIFACTS_ARCHIVE.length}-ban-ghi.json`,
      `Đã xuất tệp JSON gồm toàn bộ ${ARTIFACTS_ARCHIVE.length} bản ghi (D04-00001 đến D04-00020).`
    );
  };

  const handleExportCsv = () => {
    const headerRow = CSV_HEADERS.map((h) => escapeCsvCell(h.label)).join(',');
    const dataRows = ARTIFACTS_ARCHIVE.map((record) =>
      CSV_HEADERS.map((h) => escapeCsvCell(record[h.key])).join(',')
    );
    const csvContent = '\uFEFF' + [headerRow, ...dataRows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    triggerDownload(
      blob,
      `bao-tang-son-la-du-lieu-hien-vat-${ARTIFACTS_ARCHIVE.length}-ban-ghi.csv`,
      `Đã xuất tệp CSV (UTF-8) gồm toàn bộ ${ARTIFACTS_ARCHIVE.length} bản ghi.`
    );
  };

  const hasActiveFilter =
    query.trim() !== '' ||
    selectedType !== 'all' ||
    selectedCollection !== 'all' ||
    selectedCondition !== 'all' ||
    selectedSource !== 'all';

  return (
    <section
      id="ho-so-hien-vat"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 border-b border-[#DDD1BE] dark:border-[#332E29]"
    >
      {/* Section Header & Export Actions */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div className="space-y-2 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] text-[#7A2929] dark:text-[#B89A62] font-semibold">
            Kho dữ liệu số chuẩn Dublin Core · D04-00001 – D04-00020
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#252321] dark:text-[#FAF8F2]">
            Hồ sơ Hiện vật &amp; Tư liệu Bảo tàng tỉnh Sơn La
          </h2>
          <p className="text-sm sm:text-base text-[#5C4033] dark:text-[#D6C9B4] leading-relaxed">
            Tra cứu toàn bộ {stats.total} bản ghi đã kiểm chứng theo chuẩn Dublin Core cùng thông tin lưu giữ, tình
            trạng bản gốc và phạm vi công bố theo Luật Di sản văn hóa 2024.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleExportJson}
            className="min-h-[42px] inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#2B2723] hover:border-[#7A2929] dark:hover:border-[#B89A62] text-xs font-semibold text-[#252321] dark:text-[#FAF8F2] transition-colors whitespace-nowrap"
          >
            <FileJson className="w-4 h-4 text-[#7A2929] dark:text-[#B89A62]" aria-hidden="true" />
            <span>Xuất JSON ({stats.total} bản ghi)</span>
          </button>
          <button
            type="button"
            onClick={handleExportCsv}
            className="min-h-[42px] inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#7A2929] hover:bg-[#5C4033] dark:bg-[#B89A62] dark:hover:bg-[#cbb07b] text-xs font-semibold text-[#FAF8F2] dark:text-[#191715] transition-colors whitespace-nowrap"
          >
            <FileSpreadsheet className="w-4 h-4" aria-hidden="true" />
            <span>Xuất CSV ({stats.total} bản ghi)</span>
          </button>
        </div>
      </div>

      {exportNotice && (
        <div
          role="status"
          className="mb-6 px-4 py-3 rounded-md bg-[#F3EBDD] dark:bg-[#2B2723] border border-[#B89A62] text-xs font-medium text-[#252321] dark:text-[#FAF8F2] flex items-center gap-2"
        >
          <Download className="w-4 h-4 text-[#7A2929] dark:text-[#B89A62] shrink-0" aria-hidden="true" />
          <span>{exportNotice}</span>
        </div>
      )}

      {/* Live Statistics Strip */}
      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-lg bg-[#F3EBDD]/70 dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E]">
          <dt className="text-xs text-[#6B5A48] dark:text-[#A89A86]">Tổng số bản ghi</dt>
          <dd className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#252321] dark:text-[#FAF8F2] tabular-nums">
            {stats.total}
          </dd>
          <p className="mt-0.5 text-[11px] font-mono text-[#7A2929] dark:text-[#B89A62] tabular-nums">
            D04-00001 → D04-00020
          </p>
        </div>

        <div className="p-4 rounded-lg bg-[#F3EBDD]/70 dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E]">
          <dt className="text-xs text-[#6B5A48] dark:text-[#A89A86]">Đã kiểm chứng</dt>
          <dd className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#252321] dark:text-[#FAF8F2] tabular-nums">
            {stats.verified} / {stats.total}
          </dd>
          <p className="mt-0.5 text-[11px] text-[#6B5A48] dark:text-[#A89A86]">
            Qua cổng Bảo tàng Sơn La
          </p>
        </div>

        <div className="p-4 rounded-lg bg-[#F3EBDD]/70 dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E]">
          <dt className="text-xs text-[#6B5A48] dark:text-[#A89A86]">Bộ sưu tập</dt>
          <dd className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#252321] dark:text-[#FAF8F2] tabular-nums">
            {stats.collections}
          </dd>
          <p className="mt-0.5 text-[11px] text-[#6B5A48] dark:text-[#A89A86]">
            Chuyên đề trưng bày
          </p>
        </div>

        <div className="p-4 rounded-lg bg-[#F3EBDD]/70 dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E]">
          <dt className="text-xs text-[#6B5A48] dark:text-[#A89A86]">Đang hiển thị theo lọc</dt>
          <dd className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#7A2929] dark:text-[#B89A62] tabular-nums">
            {filteredRecords.length}
          </dd>
          <p className="mt-0.5 text-[11px] text-[#6B5A48] dark:text-[#A89A86] tabular-nums">
            Bao gồm {stats.newlyAdded} bản ghi bổ sung
          </p>
        </div>
      </dl>

      {/* Multi-Facet Search & Filter Bar */}
      <div className="p-5 rounded-lg bg-[#F3EBDD]/60 dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] space-y-4 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-4 relative">
            <label htmlFor="artifact-search" className="block text-[11px] font-semibold uppercase tracking-wider text-[#6B5A48] dark:text-[#A89A86] mb-1">
              Tìm kiếm theo mã, nhan đề, chủ đề
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-[#8A7B6A] absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
              <input
                id="artifact-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="VD: D04-00016, Chiêng đồng, Bàn là than..."
                className="w-full pl-9 pr-3 py-2 text-sm rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#252321] text-[#252321] dark:text-[#FAF8F2] placeholder:text-[#8A7B6A] focus:outline-none focus:border-[#7A2929]"
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="filter-type" className="block text-[11px] font-semibold uppercase tracking-wider text-[#6B5A48] dark:text-[#A89A86] mb-1">
              Loại hiện vật/tư liệu
            </label>
            <select
              id="filter-type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#252321] text-[#252321] dark:text-[#FAF8F2] focus:outline-none focus:border-[#7A2929]"
            >
              <option value="all">Tất cả loại ({typeOptions.length})</option>
              {typeOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="filter-collection" className="block text-[11px] font-semibold uppercase tracking-wider text-[#6B5A48] dark:text-[#A89A86] mb-1">
              Bộ sưu tập
            </label>
            <select
              id="filter-collection"
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#252321] text-[#252321] dark:text-[#FAF8F2] focus:outline-none focus:border-[#7A2929]"
            >
              <option value="all">Tất cả bộ sưu tập</option>
              {collectionOptions.map((col) => (
                <option key={col} value={col}>
                  {col}
                </option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="filter-condition" className="block text-[11px] font-semibold uppercase tracking-wider text-[#6B5A48] dark:text-[#A89A86] mb-1">
              Tình trạng bản gốc
            </label>
            <select
              id="filter-condition"
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#252321] text-[#252321] dark:text-[#FAF8F2] focus:outline-none focus:border-[#7A2929]"
            >
              <option value="all">Tất cả tình trạng</option>
              {conditionOptions.map((cond) => (
                <option key={cond} value={cond}>
                  {cond}
                </option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="filter-source" className="block text-[11px] font-semibold uppercase tracking-wider text-[#6B5A48] dark:text-[#A89A86] mb-1">
              Nguồn tư liệu
            </label>
            <select
              id="filter-source"
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded border border-[#D4C5AE] dark:border-[#3D3731] bg-[#FAF8F2] dark:bg-[#252321] text-[#252321] dark:text-[#FAF8F2] focus:outline-none focus:border-[#7A2929]"
            >
              <option value="all">Tất cả nguồn</option>
              {sourceOptions.map((src) => (
                <option key={src} value={src}>
                  {src}
                </option>
              ))}
            </select>
          </div>
        </div>

        {hasActiveFilter && (
          <div className="flex items-center justify-between pt-2 border-t border-[#DFD3C0] dark:border-[#332E29] text-xs">
            <span className="text-[#5C4033] dark:text-[#C7B9A5]">
              Tìm thấy <strong className="tabular-nums">{filteredRecords.length}</strong> / {stats.total} bản ghi phù hợp
            </span>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 font-semibold text-[#7A2929] dark:text-[#B89A62] hover:underline"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Đặt lại bộ lọc</span>
            </button>
          </div>
        )}
      </div>

      {/* Record Grid */}
      {filteredRecords.length === 0 ? (
        <div className="p-10 text-center rounded-lg border border-[#D8CBB8] dark:border-[#3A342E] bg-[#F3EBDD]/40 dark:bg-[#221F1C]">
          <p className="text-sm text-[#5C4033] dark:text-[#D6C9B4]">
            Không tìm thấy hồ sơ hiện vật hoặc tư liệu phù hợp với điều kiện lọc hiện tại.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRecords.map((record) => (
            <article
              key={record.identifier}
              className="bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] rounded-lg p-6 flex flex-col justify-between gap-4 hover:border-[#7A2929] dark:hover:border-[#B89A62] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#7A6B5B] dark:text-[#A89A86]">
                  <span className="font-mono font-bold text-[#7A2929] dark:text-[#B89A62] tabular-nums">
                    {record.identifier}
                  </span>
                  <span className="text-right">{record.type}</span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#252321] dark:text-[#FAF8F2]">
                  {record.title}
                </h3>

                <p className="text-sm text-[#5C4033] dark:text-[#C7B9A5] leading-relaxed">
                  {record.description}
                </p>

                <dl className="pt-3 border-t border-[#E6DCCB] dark:border-[#332E29] space-y-1.5 text-xs">
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="font-semibold text-[#252321] dark:text-[#FAF8F2]">Bộ sưu tập:</dt>
                    <dd className="text-[#5C4033] dark:text-[#C7B9A5]">{record.relation}</dd>
                  </div>
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="font-semibold text-[#252321] dark:text-[#FAF8F2]">Nơi lưu giữ hiện nay:</dt>
                    <dd className="text-[#5C4033] dark:text-[#C7B9A5]">{record.current_location}</dd>
                  </div>
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="font-semibold text-[#252321] dark:text-[#FAF8F2]">Loại bản hiển thị:</dt>
                    <dd className="text-[#5C4033] dark:text-[#C7B9A5]">{record.display_version_type}</dd>
                  </div>
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="font-semibold text-[#252321] dark:text-[#FAF8F2]">Tình trạng bản gốc:</dt>
                    <dd className="text-[#5C4033] dark:text-[#C7B9A5]">{record.original_condition}</dd>
                  </div>
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="font-semibold text-[#252321] dark:text-[#FAF8F2]">Tệp đính kèm:</dt>
                    <dd className="text-[#5C4033] dark:text-[#C7B9A5]">
                      {record.attachments.length > 0
                        ? `${record.attachments.length} tệp`
                        : 'Không có tệp đính kèm (chỉ mô tả số)'}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="pt-3 border-t border-[#E6DCCB] dark:border-[#332E29] flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-[#5C4033] dark:text-[#B89A62]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7A2929] dark:text-[#B89A62] shrink-0" aria-hidden="true" />
                  <span>{record.verification_status}</span>
                </span>
                <button
                  type="button"
                  onClick={() => openRecord(record)}
                  className="min-h-[38px] px-4 py-2 rounded bg-[#7A2929] hover:bg-[#5C4033] dark:bg-[#B89A62] dark:hover:bg-[#cbb07b] text-[#FAF8F2] dark:text-[#191715] text-xs font-semibold transition-colors whitespace-nowrap"
                >
                  Xem đủ trường Dublin Core
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Full Dublin Core & Provenance Detail Modal */}
      {activeRecord && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Hồ sơ chi tiết ${activeRecord.identifier}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={closeRecord}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FAF8F2] dark:bg-[#221F1C] border border-[#D8CBB8] dark:border-[#3A342E] rounded-lg shadow-2xl"
          >
            <div className="sticky top-0 z-10 px-6 py-4 bg-[#252321] text-[#FAF8F2] flex items-start justify-between gap-4 border-b border-[#3A3530]">
              <div>
                <p className="text-xs font-mono text-[#B89A62] tabular-nums">
                  MÃ ĐỊNH DANH: {activeRecord.identifier} · {activeRecord.type}
                </p>
                <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold">{activeRecord.title}</h3>
              </div>
              <button
                type="button"
                onClick={closeRecord}
                aria-label="Đóng hồ sơ chi tiết"
                className="p-2 rounded hover:bg-white/10 text-[#FAF8F2]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-8 text-sm">
              {/* Group 1: 15 Dublin Core Standard Fields */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#D8CBB8] dark:border-[#3A342E]">
                  <Archive className="w-4 h-4 text-[#7A2929] dark:text-[#B89A62]" aria-hidden="true" />
                  <h4 className="font-serif text-lg font-semibold text-[#252321] dark:text-[#FAF8F2]">
                    I. Mô tả chuẩn Dublin Core (15 trường)
                  </h4>
                </div>

                <dl className="divide-y divide-[#E6DCCB] dark:divide-[#332E29]">
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Mã định danh (Identifier)
                    </dt>
                    <dd className="sm:col-span-8 font-mono text-[#252321] dark:text-[#FAF8F2]">
                      {activeRecord.identifier}
                    </dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Nhan đề (Title)
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.title}</dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Tác giả / Người tạo (Creator)
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.creator}</dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Chủ đề (Subject)
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.subject}</dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Mô tả (Description)
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2] leading-relaxed">
                      {activeRecord.description}
                    </dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Đơn vị phát hành (Publisher)
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.publisher}</dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Người đóng góp (Contributor)
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.contributor}</dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Niên đại &amp; Ngày số hóa (Date)
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.date}</dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Loại hình (Type)
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.type}</dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Chất liệu / Định dạng (Format)
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.format}</dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Nguồn tư liệu (Source)
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.source}</dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Ngôn ngữ (Language)
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.language}</dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Liên kết bộ sưu tập (Relation)
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.relation}</dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Phạm vi (Coverage)
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.coverage}</dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Quyền sử dụng (Rights)
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.rights}</dd>
                  </div>
                </dl>
              </div>

              {/* Group 2: Supplementary Provenance, Preservation & Legal Fields */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#D8CBB8] dark:border-[#3A342E]">
                  <CheckCircle2 className="w-4 h-4 text-[#7A2929] dark:text-[#B89A62]" aria-hidden="true" />
                  <h4 className="font-serif text-lg font-semibold text-[#252321] dark:text-[#FAF8F2]">
                    II. Thông tin Lưu giữ, Kiểm chứng &amp; Công bố bổ sung
                  </h4>
                </div>

                <dl className="divide-y divide-[#E6DCCB] dark:divide-[#332E29]">
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Nơi lưu giữ hiện nay
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">
                      {activeRecord.current_location}
                    </dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Nơi lưu giữ tại thời điểm tư liệu
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">
                      {activeRecord.original_location}
                    </dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Loại bản đang hiển thị
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">
                      {activeRecord.display_version_type}
                    </dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Tình trạng bản gốc
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">
                      {activeRecord.original_condition}
                    </dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Số đăng ký/tham khảo
                    </dt>
                    <dd className="sm:col-span-8 font-mono text-[#252321] dark:text-[#FAF8F2]">
                      {activeRecord.registration_number}
                    </dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Người cho phép công bố
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">
                      {activeRecord.authorized_by}
                    </dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Phạm vi được phép
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.rights}</dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Phần không công bố
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">
                      {activeRecord.unpublished_parts}
                    </dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Mức kiểm chứng
                    </dt>
                    <dd className="sm:col-span-8 font-medium text-[#7A2929] dark:text-[#B89A62]">
                      {activeRecord.verification_status}
                    </dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62]">
                      Nguồn tư liệu
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">{activeRecord.source}</dd>
                  </div>
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <dt className="sm:col-span-4 font-semibold text-[#5C4033] dark:text-[#B89A62] flex items-center gap-1.5">
                      <Paperclip className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Danh sách tệp đính kèm</span>
                    </dt>
                    <dd className="sm:col-span-8 text-[#252321] dark:text-[#FAF8F2]">
                      {activeRecord.attachments.length === 0 ? (
                        <span className="text-[#6B5A48] dark:text-[#A89A86]">
                          Không có tệp đính kèm (bản ghi dữ liệu mô tả số, không dùng ảnh minh họa tự tạo).
                        </span>
                      ) : (
                        <ul className="list-disc pl-5 space-y-1">
                          {activeRecord.attachments.map((att, idx) => (
                            <li key={idx}>
                              <a
                                href={att.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#7A2929] dark:text-[#B89A62]"
                              >
                                {att.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="pt-4 border-t border-[#D8CBB8] dark:border-[#3A342E] flex justify-end">
                <button
                  type="button"
                  onClick={closeRecord}
                  className="px-5 py-2.5 rounded-md bg-[#7A2929] hover:bg-[#5C4033] dark:bg-[#B89A62] dark:text-[#191715] text-[#FAF8F2] text-xs font-semibold transition-colors"
                >
                  Đóng hồ sơ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
