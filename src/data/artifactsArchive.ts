export interface ArtifactAttachment {
  name: string;
  url: string;
  mimeType?: string;
  caption?: string;
}

export interface ArtifactRecord {
  identifier: string;
  title: string;
  creator: string;
  subject: string;
  description: string;
  publisher: string;
  contributor: string;
  date: string;
  type: string;
  format: string;
  source: string;
  language: string;
  relation: string;
  coverage: string;
  rights: string;
  current_location: string;
  original_location: string;
  display_version_type: string;
  original_condition: string;
  registration_number: string;
  authorized_by: string;
  unpublished_parts: string;
  verification_status: string;
  attachments: ArtifactAttachment[];
}

export const BASE_ARTIFACTS_D04_01_TO_15: ArtifactRecord[] = [
  {
    identifier: 'D04-00001',
    title: 'Xiềng chân sắt giam giữ tù chính trị tại Nhà tù Sơn La',
    creator: 'Chưa xác định cơ sở sản xuất thời thuộc địa',
    subject: 'Hiện vật lịch sử; Xiềng xích nhà tù; Nhà tù Sơn La',
    description:
      'Bộ cùm và xiềng chân bằng sắt rèn nặng dùng để khóa chân tù chính trị tại các phòng giam tập thể và khu xà lim Nhà tù Sơn La trong thời kỳ thực dân Pháp cai trị.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Giai đoạn 1930 – 1945; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật lịch sử',
    format: 'Sắt rèn; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Hồ sơ Di tích quốc gia đặc biệt Nhà tù Sơn La (Cục Di sản văn hóa dsvh.gov.vn)',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập hiện vật Nhà tù Sơn La giai đoạn 1930 – 1945',
    coverage: 'Nhà tù Sơn La, đồi Khau Cả, tỉnh Sơn La; Giai đoạn 1930 – 1945',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Nhà tù Sơn La, đồi Khau Cả, tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Ổn định: Bề mặt sắt có dấu vết oxy hóa theo thời gian, kết cấu vòng khóa còn nguyên dáng',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00001)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00002',
    title: 'Ca men sắt tráng men sinh hoạt của tù chính trị Nhà tù Sơn La',
    creator: 'Chưa xác định cơ sở sản xuất',
    subject: 'Hiện vật lịch sử; Đời sống tù chính trị; Nhà tù Sơn La',
    description:
      'Chiếc ca uống nước bằng sắt tráng men xanh sẫm, quai cầm gắn thân, lớp men bong tróc theo năm tháng, gắn với sinh hoạt thường nhật kham khổ của chiến sĩ cách mạng trong lao tù.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Giai đoạn 1939 – 1945; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật lịch sử',
    format: 'Sắt tráng men; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Hồ sơ Di tích quốc gia đặc biệt Nhà tù Sơn La (Cục Di sản văn hóa dsvh.gov.vn)',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập hiện vật Nhà tù Sơn La giai đoạn 1930 – 1945',
    coverage: 'Nhà tù Sơn La, đồi Khau Cả, tỉnh Sơn La; Giai đoạn 1939 – 1945',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Nhà tù Sơn La, đồi Khau Cả, tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Trung bình: Thân ca còn nguyên vẹn, lớp men tráng ngoài có vết sứt và gỉ sét nhẹ',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00002)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00003',
    title: 'Tư liệu về tờ báo bí mật "Suối Reo" của Chi bộ Nhà tù Sơn La',
    creator: 'Chi bộ Nhà tù Sơn La (Chủ bút Xuân Thủy và tập thể tù chính trị)',
    subject: 'Di sản tư liệu; Báo chí cách mạng; Chi bộ Nhà tù Sơn La',
    description:
      'Tài liệu nghiên cứu và bản trích nội dung về tờ báo viết tay bí mật "Suối Reo" ra đời trong Nhà tù Sơn La nhằm tuyên truyền lý luận, cổ vũ tinh thần lạc quan cách mạng.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Giai đoạn 1941 – 1944; Ngày số hóa: 21/11/2026',
    type: 'Di sản tư liệu (Tài liệu viết)',
    format: 'Giấy lưu trữ; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Hồ sơ Di tích quốc gia đặc biệt Nhà tù Sơn La (Cục Di sản văn hóa dsvh.gov.vn)',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập hiện vật Nhà tù Sơn La giai đoạn 1930 – 1945',
    coverage: 'Nhà tù Sơn La, tỉnh Sơn La; Giai đoạn 1941 – 1944',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Nhà tù Sơn La, đồi Khau Cả, tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Nội dung tư liệu phục dựng và trưng bày rõ chữ, bảo quản ổn định',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00003)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00004',
    title: 'Khóa sắt và chốt cửa khu xà lim Nhà tù Sơn La',
    creator: 'Chưa xác định cơ sở sản xuất thời thuộc địa',
    subject: 'Hiện vật lịch sử; Kiến trúc trại giam; Xà lim ngầm',
    description:
      'Bộ khóa sắt dày có then cài cỡ lớn tháo từ cửa phòng giam biệt lập, minh chứng cho chế độ giam cầm hà khắc của thực dân Pháp tại Sơn La.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Giai đoạn 1930 – 1945; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật lịch sử',
    format: 'Sắt đúc và sắt rèn; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Hồ sơ Di tích quốc gia đặc biệt Nhà tù Sơn La (Cục Di sản văn hóa dsvh.gov.vn)',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập hiện vật Nhà tù Sơn La giai đoạn 1930 – 1945',
    coverage: 'Nhà tù Sơn La, đồi Khau Cả, tỉnh Sơn La; Giai đoạn 1930 – 1945',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Khu xà lim, Nhà tù Sơn La, tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Ổn định: Thân khóa chắc chắn, bề mặt kim loại có lớp gỉ bảo quản',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00004)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00005',
    title: 'Tư liệu lịch sử về Cây đào Tô Hiệu trong khuôn viên Nhà tù Sơn La',
    creator: 'Bảo tàng tỉnh Sơn La và cơ quan nghiên cứu lịch sử Đảng',
    subject: 'Di sản tư liệu; Cây đào Tô Hiệu; Tô Hiệu',
    description:
      'Hồ sơ tư liệu ghi chép quá trình đồng chí Tô Hiệu trồng cây đào cạnh góc sân trại giam cùng hành trình bảo tồn di sản sống qua các thời kỳ chiến tranh.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Từ thập niên 1940 đến nay; Ngày số hóa: 21/11/2026',
    type: 'Di sản tư liệu',
    format: 'Tài liệu lưu trữ và ảnh tư liệu; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Cục Di sản văn hóa (dsvh.gov.vn)',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập hiện vật Nhà tù Sơn La giai đoạn 1930 – 1945',
    coverage: 'Nhà tù Sơn La, đồi Khau Cả, tỉnh Sơn La; Thập niên 1940 – nay',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Khuôn viên Nhà tù Sơn La, đồi Khau Cả, tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Hồ sơ tư liệu đầy đủ, cây di tích được chăm sóc sinh trưởng ổn định',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00005)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00006',
    title: 'Khăn piêu truyền thống của phụ nữ dân tộc Thái Sơn La',
    creator: 'Nghệ nhân dệt thêu dân tộc Thái tại Sơn La',
    subject: 'Hiện vật dân tộc học; Trang phục truyền thống; Văn hóa dân tộc Thái',
    description:
      'Khăn đội đầu dệt bằng sợi bông nhuộm chàm đen, hai đầu thêu hoa văn thổ cẩm nhiều màu sắc bằng chỉ tơ tằm, thể hiện nét tinh tế và bản sắc văn hóa phụ nữ Thái.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Thế kỷ XX; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật dân tộc học',
    format: 'Sợi bông, chỉ màu thổ cẩm; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Bảo tàng Văn hóa các dân tộc Việt Nam',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập Văn hóa 12 dân tộc tỉnh Sơn La',
    coverage: 'Tỉnh Sơn La; Thế kỷ XX',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Cộng đồng dân tộc Thái tại tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Sợi vải bền chắc, màu sắc hoa văn thêu rõ nét',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00006)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng thông tin cơ bản qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00007',
    title: 'Bộ trang phục truyền thống dân tộc Mông tại Sơn La',
    creator: 'Nghệ nhân thêu dệt dân tộc Mông tại Sơn La',
    subject: 'Hiện vật dân tộc học; Trang phục truyền thống; Văn hóa dân tộc Mông',
    description:
      'Trang phục gồm áo, váy xòe xếp nếp nhuộm chàm kết hợp kỹ thuật vẽ sáp ong và thêu tay họa tiết hình học đặc trưng của đồng bào Mông vùng cao Sơn La.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Thế kỷ XX; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật dân tộc học',
    format: 'Vải lanh, sáp ong, chỉ thêu; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Sách Địa chí Sơn La',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập Văn hóa 12 dân tộc tỉnh Sơn La',
    coverage: 'Tỉnh Sơn La; Thế kỷ XX',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Các bản làng dân tộc Mông tại tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Đường nếp váy và hoa văn sáp ong còn rõ ràng',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00007)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng thông tin cơ bản qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00008',
    title: 'Sách cổ chữ Thái cổ và chữ Nôm Dao lưu giữ tại Bảo tàng Sơn La',
    creator: 'Các thầy mo, nghệ nhân tri thức dân gian Thái và Dao tại Sơn La',
    subject: 'Di sản tư liệu; Thư tịch cổ; Chữ Thái cổ và Nôm Dao',
    description:
      'Tập bản thảo chép tay trên giấy dó truyền thống ghi lại sử thi, luật tục, tri thức y học dân gian và nghi lễ cổ truyền của đồng bào dân tộc Thái, Dao.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Thế kỷ XIX – đầu XX; Ngày số hóa: 21/11/2026',
    type: 'Di sản tư liệu (Thư tịch cổ)',
    format: 'Giấy dó, mực tàu; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Trung tâm Lưu trữ lịch sử tỉnh Sơn La',
    language: 'Chữ Thái cổ / Chữ Nôm Dao / Tiếng Việt',
    relation: 'Thuộc bộ sưu tập Văn hóa 12 dân tộc tỉnh Sơn La',
    coverage: 'Tỉnh Sơn La; Thế kỷ XIX – đầu XX',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Cộng đồng dân tộc Thái, Dao tại tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Trung bình: Giấy dó ngả màu tự nhiên, nét chữ mực vẫn đọc được rõ',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00008)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00009',
    title: 'Gùi mây tre đan thủ công của đồng bào vùng cao Sơn La',
    creator: 'Nghệ nhân đan lát truyền thống tại Sơn La',
    subject: 'Hiện vật dân tộc học; Thủ công mỹ nghệ; Sinh hoạt kinh tế',
    description:
      'Chiếc gùi đan nan lóng mốt, lóng đôi từ mây và tre già, có dây đeo trán hoặc đeo vai dùng để vận chuyển nông sản, củi và đồ dùng trên địa hình dốc núi.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Thế kỷ XX; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật dân tộc học (Công cụ sinh hoạt)',
    format: 'Mây, tre tự nhiên; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Sách Địa chí Sơn La (Thư viện tỉnh Sơn La)',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập Sinh hoạt kinh tế và sản xuất truyền thống tại Bảo tàng tỉnh Sơn La',
    coverage: 'Tỉnh Sơn La; Thế kỷ XX',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Các bản làng vùng cao tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Nan mây tre đan khít, kết cấu khung gùi nguyên vẹn',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00009)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00010',
    title: 'Khung cửi dệt vải thổ cẩm truyền thống dân tộc Thái Sơn La',
    creator: 'Nghệ nhân mộc và dệt vải dân tộc Thái tại Sơn La',
    subject: 'Hiện vật dân tộc học; Nghề dệt thủ công; Sinh hoạt kinh tế',
    description:
      'Khung cửi gỗ thủ công với thoi dệt, lược chải sợi và bàn đạp truyền thống, phản ánh kỹ nghệ dệt vải tự cung tự cấp lâu đời của phụ nữ dân tộc Thái.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Thế kỷ XX; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật dân tộc học (Công cụ sản xuất)',
    format: 'Gỗ, tre, sợi bông; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Sách Địa chí Sơn La (Thư viện tỉnh Sơn La)',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập Sinh hoạt kinh tế và sản xuất truyền thống tại Bảo tàng tỉnh Sơn La',
    coverage: 'Tỉnh Sơn La; Thế kỷ XX',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Các bản làng dân tộc Thái tại tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Khung gỗ chắc chắn, các bộ phận liên kết đầy đủ',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00010)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00011',
    title: 'Khèn bè truyền thống của dân tộc Thái Sơn La',
    creator: 'Nghệ nhân chế tác nhạc cụ dân tộc Thái tại Sơn La',
    subject: 'Hiện vật dân tộc học; Nhạc cụ hơi; Văn hóa dân tộc Thái',
    description:
      'Nhạc cụ hơi gồm nhiều ống nứa nhỏ ghép song song theo hai hàng trên bầu gỗ, gắn lưỡi gà đồng tạo âm thanh êm dịu đệm cho điệu xòe và hát giao duyên.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Thế kỷ XX; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật dân tộc học (Nhạc cụ hơi)',
    format: 'Tre nứa, gỗ, sáp ong, đồng lá; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Bảo tàng Văn hóa các dân tộc Việt Nam',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập Nhạc cụ truyền thống các dân tộc Sơn La',
    coverage: 'Tỉnh Sơn La; Thế kỷ XX',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Cộng đồng dân tộc Thái tại tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Các ống nứa thẳng, bầu gỗ kín khí',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00011)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng thông tin cơ bản qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00012',
    title: 'Khèn Mông trong sinh hoạt văn hóa dân tộc Mông Sơn La',
    creator: 'Nghệ nhân chế tác nhạc cụ dân tộc Mông tại Sơn La',
    subject: 'Hiện vật dân tộc học; Nhạc cụ hơi; Văn hóa dân tộc Mông',
    description:
      'Nhạc cụ đa thanh gồm bầu gỗ dài uốn cong và sáu ống trúc có độ dài khác nhau, gắn liền với nghi lễ truyền thống, lễ hội mùa xuân và nghệ thuật múa khèn của người Mông.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Thế kỷ XX; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật dân tộc học (Nhạc cụ hơi)',
    format: 'Gỗ pơ mu, trúc, đồng lá, vỏ đào rừng; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Bảo tàng Văn hóa các dân tộc Việt Nam',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập Nhạc cụ truyền thống các dân tộc Sơn La',
    coverage: 'Tỉnh Sơn La; Thế kỷ XX',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Cộng đồng dân tộc Mông tại tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Thân khèn và 6 ống trúc nguyên vẹn, không nứt gãy',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00012)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng thông tin cơ bản qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00013',
    title: 'Đàn tính tẩu của cộng đồng dân tộc Thái Sơn La',
    creator: 'Nghệ nhân chế tác nhạc cụ dân tộc Thái tại Sơn La',
    subject: 'Hiện vật dân tộc học; Nhạc cụ dây; Văn hóa dân tộc Thái',
    description:
      'Nhạc cụ dây gảy có hộp cộng hưởng làm từ quả bầu khô cắt nửa, cần đàn bằng gỗ nhẹ và dây đàn thanh mảnh, thường dùng trong diễn xướng dân gian Thái.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Thế kỷ XX; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật dân tộc học (Nhạc cụ dây)',
    format: 'Quả bầu khô, gỗ, dây tơ/cước; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Bảo tàng Văn hóa các dân tộc Việt Nam',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập Nhạc cụ truyền thống các dân tộc Sơn La',
    coverage: 'Tỉnh Sơn La; Thế kỷ XX',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Cộng đồng dân tộc Thái tại tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Bầu đàn nguyên vẹn, cần đàn thẳng và khóa lên dây đầy đủ',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00013)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng thông tin cơ bản qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00014',
    title: 'Pí pặp (sáo dọc đôi) truyền thống dân tộc Thái Sơn La',
    creator: 'Nghệ nhân nhạc cụ dân gian Thái tại Sơn La',
    subject: 'Hiện vật dân tộc học; Nhạc cụ hơi; Văn hóa dân tộc Thái',
    description:
      'Cặp sáo nứa ghép đôi có lưỡi gà đồng đặc trưng, tạo hòa âm hai bè trong trẻo trong các buổi sinh hoạt cộng đồng và dân ca Thái vùng Tây Bắc.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Thế kỷ XX; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật dân tộc học (Nhạc cụ hơi)',
    format: 'Nứa rừng, đồng lá; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Bảo tàng Văn hóa các dân tộc Việt Nam',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập Nhạc cụ truyền thống các dân tộc Sơn La',
    coverage: 'Tỉnh Sơn La; Thế kỷ XX',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Cộng đồng dân tộc Thái tại tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Ống sáo và lỗ bấm còn nguyên vẹn, không nứt vỡ',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00014)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng thông tin cơ bản qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00015',
    title: 'Trống da truyền thống dùng trong lễ hội các dân tộc Sơn La',
    creator: 'Nghệ nhân làm trống thủ công tại Sơn La',
    subject: 'Hiện vật dân tộc học; Nhạc cụ gõ; Lễ hội truyền thống',
    description:
      'Trống thân gỗ khoét rỗng căng hai mặt da trâu bằng chốt tre, giữ nhịp chủ đạo cho các vòng xòe cộng đồng và lễ hội văn hóa truyền thống tại Sơn La.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Thế kỷ XX; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật dân tộc học (Nhạc cụ gõ)',
    format: 'Gỗ tự nhiên, da trâu; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Bảo tàng Văn hóa các dân tộc Việt Nam',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập Nhạc cụ truyền thống các dân tộc Sơn La',
    coverage: 'Tỉnh Sơn La; Thế kỷ XX',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Cộng đồng các dân tộc tại tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Thân trống chắc chắn, hai mặt da căng ổn định',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00015)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng thông tin cơ bản qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
];

export const NEW_ARTIFACTS_D04_16_TO_20: ArtifactRecord[] = [
  {
    identifier: 'D04-00016',
    title: 'Chiêng đồng của cộng đồng dân tộc Thái Sơn La',
    creator: 'Nghệ nhân đúc đồng truyền thống (chưa xác định cá nhân)',
    subject: 'Hiện vật dân tộc học; Nhạc cụ gõ; Văn hóa dân tộc Thái',
    description:
      'Chiêng đồng mặt phẳng có núm gõ nổi ở giữa, âm thanh vang trầm, thường sử dụng trong các lễ hội truyền thống, nghi lễ cộng đồng và sinh hoạt văn hóa dân gian của người Thái tại Sơn La.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Thế kỷ XX; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật dân tộc học (Nhạc cụ gõ)',
    format: 'Hợp kim đồng; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Bảo tàng Văn hóa các dân tộc Việt Nam',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập Nhạc cụ truyền thống các dân tộc Sơn La (tiếp nối D04-00001 đến D04-00015)',
    coverage: 'Tỉnh Sơn La; Thế kỷ XX',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Cộng đồng dân tộc Thái tại tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Mặt chiêng phẳng, núm gõ nguyên vẹn, âm vang rõ',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00016)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng thông tin cơ bản qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00017',
    title: 'Bàn là than của tù chính trị tại Nhà tù Sơn La',
    creator: 'Chưa xác định cơ sở sản xuất',
    subject: 'Hiện vật lịch sử; Đời sống tù chính trị; Nhà tù Sơn La',
    description:
      'Bàn là bằng kim loại có khoang chứa than nóng bên trong và tay cầm cách nhiệt, gắn liền với sinh hoạt tập thể và hoạt động cải thiện đời sống của các chiến sĩ cách mạng bị giam cầm tại Nhà tù Sơn La.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Giai đoạn 1930 – 1945; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật lịch sử',
    format: 'Kim loại; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Hồ sơ Di tích quốc gia đặc biệt Nhà tù Sơn La (Cục Di sản văn hóa dsvh.gov.vn)',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập hiện vật Nhà tù Sơn La giai đoạn 1930 – 1945',
    coverage: 'Nhà tù Sơn La, tỉnh Sơn La; Giai đoạn 1930 – 1945',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Nhà tù Sơn La, đồi Khau Cả, tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Thân bàn là và tay cầm còn đầy đủ, bề mặt kim loại ổn định',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00017)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00018',
    title: 'Dụng cụ lao động sản xuất nông nghiệp truyền thống (Cày, bừa, cuốc bản)',
    creator: 'Cư dân nông nghiệp các dân tộc tỉnh Sơn La',
    subject: 'Hiện vật dân tộc học; Canh tác nương ruộng; Kinh tế truyền thống',
    description:
      'Nhóm công cụ canh tác làm từ gỗ, tre và lưỡi rèn kim loại phản ánh phương thức làm ruộng nước và làm nương truyền thống của đồng bào các dân tộc tại Sơn La.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Thế kỷ XX; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật dân tộc học (Công cụ sản xuất)',
    format: 'Gỗ, tre, sắt rèn; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Sách Địa chí Sơn La (Thư viện tỉnh Sơn La)',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập Sinh hoạt kinh tế và sản xuất truyền thống tại Bảo tàng tỉnh Sơn La',
    coverage: 'Tỉnh Sơn La; Thế kỷ XX',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Các bản làng nông nghiệp tại tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Kết cấu khung gỗ và lưỡi kim loại còn chắc chắn',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00018)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00019',
    title: 'Tư liệu ảnh và hiện vật lịch sử xây dựng Thủy điện Sơn La',
    creator: 'Cơ quan, đơn vị tham gia xây dựng công trình Thủy điện Sơn La và Bảo tàng tỉnh Sơn La',
    subject: 'Di sản tư liệu; Hiện vật lịch sử hiện đại; Thủy điện Sơn La',
    description:
      'Khối tư liệu ảnh và hiện vật gắn với quá trình khảo sát, thi công, di dân tái định cư và vận hành Nhà máy Thủy điện Sơn La – công trình trọng điểm trên sông Đà.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Giai đoạn 2005 – 2012; Ngày số hóa: 21/11/2026',
    type: 'Di sản tư liệu (Ảnh) và Hiện vật lịch sử',
    format: 'Giấy ảnh/tệp số, hiện vật công trình; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Trung tâm Lưu trữ lịch sử tỉnh Sơn La',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập Lịch sử hiện đại và phát triển kinh tế – xã hội tỉnh Sơn La',
    coverage: 'Huyện Mường La, tỉnh Sơn La; Giai đoạn 2005 – 2012',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Khu vực công trình Thủy điện Sơn La, tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Hình ảnh và hiện vật trưng bày rõ nét, bảo quản ổn định',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00019)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
  {
    identifier: 'D04-00020',
    title: 'Đồ trang sức bạc truyền thống của phụ nữ các dân tộc Sơn La',
    creator: 'Nghệ nhân kim hoàn truyền thống (Thái, Mông, Dao tại Sơn La)',
    subject: 'Hiện vật dân tộc học; Trang sức bạc; Nghệ thuật kim hoàn',
    description:
      'Sưu tập vòng tay, vòng cổ, xà tích và hoa tai chế tác từ bạc với hoa văn chạm khắc tinh xảo, mang ý nghĩa thẩm mỹ, tín ngưỡng và tích lũy tài sản trong đời sống gia đình.',
    publisher: 'Sản phẩm thực tập Đợt 15, IMTA TECH x FPT Polytechnic',
    contributor: 'Phùng Đức Anh (tổng hợp và biên tập dữ liệu số)',
    date: 'Niên đại tư liệu: Thế kỷ XIX – XX; Ngày số hóa: 21/11/2026',
    type: 'Hiện vật dân tộc học',
    format: 'Bạc; Dữ liệu mô tả số (JSON/Web)',
    source: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn); Viện Dân tộc học',
    language: 'Tiếng Việt',
    relation: 'Thuộc bộ sưu tập Văn hóa 12 dân tộc tỉnh Sơn La',
    coverage: 'Tỉnh Sơn La; Thế kỷ XIX – XX',
    rights: 'Tư liệu công bố công khai bởi Bảo tàng tỉnh Sơn La, sử dụng cho mục đích học tập, nghiên cứu phi lợi nhuận theo Điều 88 Luật Di sản văn hóa 2024',
    current_location: 'Bảo tàng tỉnh Sơn La, phường Tô Hiệu, tỉnh Sơn La',
    original_location: 'Cộng đồng các dân tộc tại tỉnh Sơn La',
    display_version_type: 'Bản số (tổng hợp từ tư liệu đã công bố bởi Bảo tàng tỉnh Sơn La)',
    original_condition: 'Tốt: Hoa văn chạm bạc rõ nét, không biến dạng',
    registration_number: 'Không có (sử dụng mã tham khảo D04-00020)',
    authorized_by: 'Cổng thông tin điện tử Bảo tàng tỉnh Sơn La (baotangsonla.vn) - Công bố công khai',
    unpublished_parts: 'Không có',
    verification_status: 'Đã kiểm chứng qua cổng thông tin Bảo tàng tỉnh Sơn La',
    attachments: [],
  },
];

/**
 * Gộp các bản ghi mới vào tập dữ liệu hiện có mà không trùng mã định danh (identifier).
 * Nếu trùng mã, bản ghi mới nhất sẽ cập nhật thông tin mà vẫn giữ nguyên thứ tự chuẩn.
 */
export function mergeArtifactRecords(
  baseRecords: ArtifactRecord[],
  incomingRecords: ArtifactRecord[]
): ArtifactRecord[] {
  const byId = new Map<string, ArtifactRecord>();
  for (const record of baseRecords) {
    byId.set(record.identifier, record);
  }
  for (const record of incomingRecords) {
    byId.set(record.identifier, record);
  }
  return Array.from(byId.values());
}

export const ARTIFACTS_ARCHIVE: ArtifactRecord[] = mergeArtifactRecords(
  BASE_ARTIFACTS_D04_01_TO_15,
  NEW_ARTIFACTS_D04_16_TO_20
);

export function getCollectionGroup(relation: string): string {
  const normalized = relation.toLowerCase();
  if (normalized.includes('nhạc cụ truyền thống')) {
    return 'Nhạc cụ truyền thống các dân tộc Sơn La';
  }
  if (normalized.includes('nhà tù sơn la')) {
    return 'Hiện vật Nhà tù Sơn La (1930 – 1945)';
  }
  if (normalized.includes('văn hóa 12 dân tộc')) {
    return 'Văn hóa 12 dân tộc tỉnh Sơn La';
  }
  if (normalized.includes('sinh hoạt kinh tế')) {
    return 'Sinh hoạt kinh tế & Sản xuất truyền thống';
  }
  if (normalized.includes('lịch sử hiện đại')) {
    return 'Lịch sử hiện đại & Phát triển kinh tế – xã hội';
  }
  return relation;
}

export function getConditionGroup(condition: string): string {
  const prefix = condition.split(':')[0]?.trim();
  return prefix || condition;
}

export function getSourceList(source: string): string[] {
  return source
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);
}
