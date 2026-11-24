export interface TimelineEvent {
  id: string;
  year: string;
  era: 'construction' | 'expansion' | 'struggle' | 'preservation';
  eraLabel: string;
  title: string;
  subtitle: string;
  summary: string;
  details: string;
  image: string;
  imageCaption: string;
  source: string;
}

export interface ExhibitionZone {
  id: string;
  code: string;
  category: 'architecture' | 'detention' | 'memorial' | 'artifacts';
  categoryLabel: string;
  name: string;
  shortDesc: string;
  description: string;
  historicalValue: string;
  architecturalNotes: string;
  image: string;
  imageCaption: string;
  tourSceneId: string;
}

export interface HistoricalFigure {
  id: string;
  accessionCode: string;
  name: string;
  birthName?: string;
  years: string;
  detentionPeriod: string;
  roleInPrison: string;
  laterRole: string;
  biography: string;
  revolutionaryActivity: string;
  sonLaImprint: string;
  quote?: string;
  source: string;
}

export interface GalleryItem {
  id: string;
  accessionId: string;
  title: string;
  category: 'panorama' | 'cells' | 'artifacts' | 'peach_tree' | 'memorial' | 'architecture';
  categoryLabel: string;
  image: string;
  caption: string;
  source: string;
  aspect: 'landscape' | 'portrait' | 'wide';
}

export interface TourHotspot {
  id: string;
  xPercent: number;
  yPercent: number;
  title: string;
  description: string;
}

export interface TourScene {
  id: string;
  order: string;
  name: string;
  subtitle: string;
  image: string;
  mapX: number;
  mapY: number;
  description: string;
  historicalContext: string;
  hotspots: TourHotspot[];
}

export const HERITAGE_IMAGES = {
  hero: '/src/assets/images/sonla_prison_hero_1795259562294.jpg',
  peachTree: '/src/assets/images/sonla_peach_tree_1795259561379.jpg',
  prisonCell: '/src/assets/images/sonla_prison_cell_1795259560936.jpg',
  undergroundSolitary: '/src/assets/images/sonla_underground_solitary_1795259561239.jpg',
  museumArtifacts: '/src/assets/images/sonla_museum_artifacts_1795259561361.jpg',
  memorialCourtyard: '/src/assets/images/sonla_memorial_courtyard_1795259562287.jpg',
} as const;

export const SITE_METADATA = {
  title: 'SON LA HERITAGE – DẤU ẤN LỊCH SỬ',
  monumentName: 'Di tích lịch sử Quốc gia đặc biệt Nhà tù Sơn La',
  museumName: 'Bảo tàng Sơn La',
  address: 'Đồi Khau Cả, Tổ 9, phường Tô Hiệu, thành phố Sơn La, tỉnh Sơn La',
  coordinates: {
    lat: 21.3264,
    lng: 103.9141,
    label: '21.3264° N, 103.9141° E',
  },
  nationalRecognition: 'Quyết định số 2408/QĐ-TTg ngày 31/12/2014 của Thủ tướng Chính phủ',
  firstRecognition: 'Xếp hạng Di tích lịch sử cấp Quốc gia năm 1962',
};

export const VISIT_INFO = {
  address: 'Đồi Khau Cả, Tổ 9, phường Tô Hiệu, thành phố Sơn La, tỉnh Sơn La',
  openingHours: 'Đang cập nhật theo thông báo chính thức của Bảo tàng tỉnh Sơn La',
  ticketPrice: 'Đang cập nhật theo quy định hiện hành của tỉnh Sơn La',
  phone: 'Đang cập nhật',
  email: 'Đang cập nhật',
  website: 'Đang cập nhật',
  directionsFromHanoi:
    'Từ Hà Nội di chuyển theo Quốc lộ 6 qua Hòa Bình – Mộc Châu – Yên Châu – Mai Sơn để đến trung tâm thành phố Sơn La (quãng đường khoảng 300 km). Di tích nằm trên đồi Khau Cả thuộc phường Tô Hiệu, khu vực trung tâm thành phố.',
  localAccess:
    'Từ Quảng trường Tây Bắc hoặc trung tâm phường Tô Hiệu, du khách đi theo trục đường Tô Hiệu – Khau Cả để lên khuôn viên Bảo tàng và Di tích Nhà tù Sơn La.',
  visitorNotes: [
    'Giữ trang phục lịch sự, thái độ trang nghiêm khi dâng hương tại Khu tưởng niệm các Anh hùng liệt sĩ.',
    'Không chạm tay trực tiếp vào các mảng tường đá cổ, nền móng di tích gốc hoặc hiện vật ngoài trời nhạy cảm.',
    'Tuân thủ hướng dẫn của cán bộ Bảo tàng Sơn La khi tham quan khu vực xà lim ngầm và phòng trưng bày.',
    'Thời điểm hoa đào Tô Hiệu thường nở rộ là vào dịp cuối đông – đầu xuân (khoảng tháng 1 đến tháng 2 dương lịch).',
  ],
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'tl-1908',
    year: '1908',
    era: 'construction',
    eraLabel: 'Khởi dựng',
    title: 'Xây dựng Nhà tù Sơn La trên đồi Khau Cả',
    subtitle: 'Diện tích ban đầu khoảng 500 m²',
    summary:
      'Thực dân Pháp cho xây dựng Nhà tù Sơn La trên đỉnh đồi Khau Cả nhằm giam giữ tù nhân và đối phó phong trào kháng chiến tại vùng núi Tây Bắc.',
    details:
      'Công trình ban đầu có quy mô khoảng 500 m² với kết cấu tường đá hộc dày, vật liệu thô sơ, vị trí biệt lập trên đồi cao nhìn xuống thung lũng Sơn La nhằm ngăn chặn khả năng liên lạc và vượt ngục của tù nhân.',
    image: HERITAGE_IMAGES.hero,
    imageCaption: 'Toàn cảnh khu di tích Nhà tù Sơn La trên đồi Khau Cả',
    source: 'Tư liệu Bảo tàng Sơn La & Cục Di sản Văn hóa',
  },
  {
    id: 'tl-1930',
    year: '1930 – 1939',
    era: 'expansion',
    eraLabel: 'Mở rộng giam giữ',
    title: 'Mở rộng quy mô và đày ải chiến sĩ cách mạng',
    subtitle: 'Tổng diện tích mở rộng lên khoảng 2.170 m²',
    summary:
      'Sau cao trào cách mạng 1930–1931, thực dân Pháp mở rộng nhà tù thành nơi giam cầm biệt lập các chiến sĩ cộng sản, kết hợp hệ thống xà lim ngầm và phòng giam tập thể.',
    details:
      'Chế độ cai trị khắc nghiệt, xiềng xích nặng nề, lao dịch khổ sai cùng khí hậu sơn cước ẩm lạnh và dịch sốt rét rừng khiến Nhà tù Sơn La được mệnh danh là một trong những "địa ngục trần gian" thời thuộc địa.',
    image: HERITAGE_IMAGES.undergroundSolitary,
    imageCaption: 'Hành lang xà lim ngầm với kết cấu đá dày kiên cố',
    source: 'Tư liệu Bảo tàng tỉnh Sơn La',
  },
  {
    id: 'tl-1939',
    year: '12 / 1939',
    era: 'struggle',
    eraLabel: 'Trường học cách mạng',
    title: 'Thành lập Chi bộ Đảng trong Nhà tù Sơn La',
    subtitle: 'Biến nhà tù đế quốc thành trường học cách mạng',
    summary:
      'Tháng 12/1939, Chi bộ Nhà tù Sơn La được thành lập để thống nhất lãnh đạo phong trào đấu tranh chính trị, giữ vững khí tiết và bồi dưỡng lý luận cho tù nhân.',
    details:
      'Các chiến sĩ tổ chức dạy văn hóa, lý luận Mác – Lênin, ngoại ngữ, biên tập tài liệu tay và xuất bản tờ báo bí mật "Suối Reo" ngay trong chốn lao tù, biến nơi giam cầm thành trung tâm đào tạo nhiều cán bộ cốt cán cho cách mạng Việt Nam.',
    image: HERITAGE_IMAGES.prisonCell,
    imageCaption: 'Không gian trại giam tập thể – nơi diễn ra các lớp học chính trị bí mật',
    source: 'Hồ sơ Di tích Quốc gia đặc biệt Nhà tù Sơn La',
  },
  {
    id: 'tl-1940-1943',
    year: '1940 – 1943',
    era: 'struggle',
    eraLabel: 'Đấu tranh & Báo Suối Reo',
    title: 'Thời kỳ Bí thư Chi bộ Tô Hiệu và cuộc vượt ngục 1943',
    subtitle: 'Lan tỏa tinh thần bất khuất qua từng trang báo Suối Reo',
    summary:
      'Đồng chí Tô Hiệu giữ cương vị Bí thư Chi bộ Nhà tù Sơn La từ năm 1940, lãnh đạo phong trào đấu tranh bền bỉ và tổ chức cuộc vượt ngục năm 1943.',
    details:
      'Năm 1943, dưới sự tổ chức chặt chẽ của Chi bộ, cuộc vượt ngục lịch sử đưa các đồng chí Nguyễn Lương Bằng, Trần Đăng Ninh, Lưu Đức Hiểu, Nguyễn Văn Trân thoát khỏi lao tù trở về hoạt động, bổ sung lực lượng lãnh đạo cho Trung ương Đảng.',
    image: HERITAGE_IMAGES.museumArtifacts,
    imageCaption: 'Không gian trưng bày tư liệu báo Suối Reo và hiện vật tù chính trị',
    source: 'Bảo tàng tỉnh Sơn La',
  },
  {
    id: 'tl-1944',
    year: '07 / 03 / 1944',
    era: 'struggle',
    eraLabel: 'Biểu tượng bất tử',
    title: 'Đồng chí Tô Hiệu hy sinh và dấu ấn Cây đào Tô Hiệu',
    subtitle: 'Ngọn lửa kiên trung giữa núi rừng Tây Bắc',
    summary:
      'Sau nhiều năm bị giam cầm và bệnh lao phổi nặng trong điều kiện thiếu thốn, đồng chí Tô Hiệu anh dũng hy sinh ngày 7/3/1944 tại Nhà tù Sơn La khi mới 32 tuổi.',
    details:
      'Cây đào do đồng chí trồng cạnh góc sân trại giam vẫn sống qua nắng gió khắc nghiệt và bom đạn chiến tranh, trở thành biểu tượng văn hóa – lịch sử thiêng liêng mang tên Cây đào Tô Hiệu.',
    image: HERITAGE_IMAGES.peachTree,
    imageCaption: 'Cây đào Tô Hiệu nở hoa bên bức tường đá cổ Nhà tù Sơn La',
    source: 'Tư liệu Bảo tàng Sơn La',
  },
  {
    id: 'tl-1945',
    year: '1945',
    era: 'struggle',
    eraLabel: 'Giải phóng',
    title: 'Giải phóng tù chính trị trong Cách mạng Tháng Tám',
    subtitle: 'Góp phần giành chính quyền tại Sơn La và cả nước',
    summary:
      'Khi thời cơ Cách mạng Tháng Tám 1945 đến gần và nổ ra khởi nghĩa, các chiến sĩ cách mạng tại Sơn La được giải phóng và tham gia lãnh đạo giành chính quyền.',
    details:
      'Từ mái trường cách mạng Sơn La, nhiều đồng chí trưởng thành đã đảm nhiệm những trọng trách lớn của Đảng, Nhà nước và Quân đội nhân dân Việt Nam trong hai cuộc kháng chiến và công cuộc kiến thiết đất nước.',
    image: HERITAGE_IMAGES.hero,
    imageCaption: 'Khuôn viên đồi Khau Cả – chứng nhân của thắng lợi cách mạng năm 1945',
    source: 'Cục Di sản Văn hóa',
  },
  {
    id: 'tl-1952-1965',
    year: '1952 & 1965',
    era: 'preservation',
    eraLabel: 'Biến cố chiến tranh',
    title: 'Sự tàn phá của bom đạn chiến tranh',
    subtitle: 'Dấu tích đổ nát được giữ gìn làm chứng tích lịch sử',
    summary:
      'Năm 1952 thực dân Pháp ném bom phá hủy một phần nhà tù trước khi rút chạy; đến năm 1965 bom đạn không quân Mỹ tiếp tục làm hư hại nhiều hạng mục.',
    details:
      'Những mảng tường gạch đá vỡ, nền móng cháy sém và dấu tích công trình bị đánh phá đã được giữ lại nguyên trạng ở nhiều phân khu như một lời nhắc nhở chân thực về giá trị của hòa bình và độc lập.',
    image: HERITAGE_IMAGES.memorialCourtyard,
    imageCaption: 'Những bức tường đổ nát còn lưu dấu bom đạn trong khuôn viên di tích',
    source: 'Bảo tàng tỉnh Sơn La',
  },
  {
    id: 'tl-1962-2014',
    year: '1962 & 2014',
    era: 'preservation',
    eraLabel: 'Di sản Quốc gia đặc biệt',
    title: 'Xếp hạng Di tích Quốc gia đặc biệt',
    subtitle: 'Quyết định số 2408/QĐ-TTg ngày 31/12/2014',
    summary:
      'Được xếp hạng Di tích lịch sử cấp Quốc gia năm 1962; đến ngày 31/12/2014, Thủ tướng Chính phủ công nhận Nhà tù Sơn La là Di tích Quốc gia đặc biệt.',
    details:
      'Di tích được tu bổ, bảo tồn song hành cùng hệ thống trưng bày của Bảo tàng Sơn La, Đền thờ Liệt sĩ và Nhà tưởng niệm, trở thành địa chỉ đỏ giáo dục truyền thống cho các thế hệ.',
    image: HERITAGE_IMAGES.memorialCourtyard,
    imageCaption: 'Khu tưởng niệm và bia ghi công các Anh hùng liệt sĩ tại Nhà tù Sơn La',
    source: 'Quyết định số 2408/QĐ-TTg & Cục Di sản Văn hóa',
  },
];

export const EXHIBITION_ZONES: ExhibitionZone[] = [
  {
    id: 'zone-gate',
    code: 'KHU 01',
    category: 'architecture',
    categoryLabel: 'Kiến trúc & Cảnh quan',
    name: 'Cổng trại, Tháp canh & Khuôn viên Đồi Khau Cả',
    shortDesc:
      'Hệ thống tường bao bằng đá hộc dày, cổng chính và tháp canh kiểm soát toàn bộ sườn đồi Khau Cả.',
    description:
      'Nằm trên vị trí cao ráo của đồi Khau Cả, cổng trại và tuyến tường đá bao quanh từng tạo nên vành đai cô lập kiên cố giữa lòng chảo Sơn La. Hiện nay khuôn viên xanh mát với lối đi lát đá dẫn khách tham quan qua từng phân khu di tích.',
    historicalValue:
      'Phản ánh rõ tính chất quân sự hóa và ý đồ giam cầm biệt lập của bộ máy thực dân tại vùng Tây Bắc đầu thế kỷ XX.',
    architecturalNotes:
      'Tường đá hộc xây vữa truyền thống kết hợp tháp canh góc có lỗ châu mai quan sát toàn khu trại.',
    image: HERITAGE_IMAGES.hero,
    imageCaption: 'Tháp canh đá và vành đai tường bao quanh Di tích Nhà tù Sơn La',
    tourSceneId: 'scene-panorama',
  },
  {
    id: 'zone-cells',
    code: 'KHU 02',
    category: 'detention',
    categoryLabel: 'Không gian giam giữ',
    name: 'Hệ thống Phòng giam tập thể (Trại Lớn & Trại Chéo)',
    shortDesc:
      'Nơi giam giữ đông đảo tù chính trị với bệ nằm gỗ dài, cùm chân sắt và ô cửa sổ song sắt trên cao.',
    description:
      'Các phòng giam tập thể là nơi sinh hoạt, chịu đựng xiềng xích nhưng đồng thời cũng là "lớp học cách mạng" sôi nổi nhất của Chi bộ Nhà tù Sơn La. Giữa điều kiện thiếu ánh sáng và chật hẹp, các chiến sĩ vẫn giữ vững kỷ luật và niềm tin chiến thắng.',
    historicalValue:
      'Chứng tích trực tiếp về đời sống lao tù khắc nghiệt và tinh thần đoàn kết, học tập lý luận của các chiến sĩ cộng sản.',
    architecturalNotes:
      'Nền đá xanh, bệ nằm gỗ ghép ván liền dãy có hệ thống cùm sắt cố định dọc mép bệ.',
    image: HERITAGE_IMAGES.prisonCell,
    imageCaption: 'Phục dựng không gian phòng giam tập thể với ánh sáng qua khung cửa song sắt',
    tourSceneId: 'scene-cell',
  },
  {
    id: 'zone-solitary',
    code: 'KHU 03',
    category: 'detention',
    categoryLabel: 'Không gian giam giữ',
    name: 'Khu Xà lim ngầm & Phòng giam biệt lập',
    shortDesc:
      'Những phòng giam tối tăm, ẩm thấp dùng để biệt giam và trừng phạt những chiến sĩ kiên trung nhất.',
    description:
      'Khu xà lim được xây sâu và tách biệt, tường đá dày, cửa sắt nặng gần như bít kín ánh sáng tự nhiên. Đây là nơi thực dân Pháp dùng để khuất phục ý chí của những tù nhân lãnh đạo phong trào đấu tranh trong trại giam.',
    historicalValue:
      'Minh chứng cho sự tàn bạo của chế độ nhà tù thực dân và bản lĩnh thép của những người cộng sản không chịu khuất phục.',
    architecturalNotes:
      'Hành lang hẹp vòm cuốn, cửa sắt tán đinh và ô thông gió nhỏ ở phần đỉnh tường.',
    image: HERITAGE_IMAGES.undergroundSolitary,
    imageCaption: 'Hành lang khu xà lim ngầm với cửa sắt nguyên mẫu phục dựng',
    tourSceneId: 'scene-solitary',
  },
  {
    id: 'zone-peach-tree',
    code: 'KHU 04',
    category: 'memorial',
    categoryLabel: 'Biểu tượng & Tưởng niệm',
    name: 'Cây đào Tô Hiệu',
    shortDesc:
      'Cây đào do đồng chí Tô Hiệu trồng bên góc sân trại giam, nở hoa qua bao mùa bom đạn lịch sử.',
    description:
      'Dù bị chiến tranh và thời gian thử thách khắc nghiệt, Cây đào Tô Hiệu vẫn bám rễ bên bức tường đá rêu phong, đơm hoa mỗi độ xuân về. Đây là điểm dừng chân giàu cảm xúc nhất của mọi đoàn khách khi đến với Nhà tù Sơn La.',
    historicalValue:
      'Biểu tượng bất tử của tinh thần lạc quan cách mạng, lòng yêu nước và sự tưởng nhớ dành cho Bí thư Chi bộ Tô Hiệu.',
    architecturalNotes:
      'Nằm ngay cạnh lối vào khu trại giam trong, được bảo vệ và chăm sóc đặc biệt trong khuôn viên di tích.',
    image: HERITAGE_IMAGES.peachTree,
    imageCaption: 'Cây đào Tô Hiệu khoe sắc hồng bên cổng vòm đá trại giam',
    tourSceneId: 'scene-peach',
  },
  {
    id: 'zone-artifacts',
    code: 'KHU 05',
    category: 'artifacts',
    categoryLabel: 'Trưng bày & Tư liệu',
    name: 'Không gian Trưng bày Hiện vật & Tư liệu Bảo tàng Sơn La',
    shortDesc:
      'Lưu giữ hiện vật sinh hoạt tù nhân, xiềng xích, bản thảo và tư liệu về tờ báo bí mật Suối Reo.',
    description:
      'Hệ thống phòng trưng bày giúp khách tham quan tiếp cận các hiện vật gốc, tài liệu viết tay, dụng cụ lao dịch, vật dụng sinh hoạt giản dị của tù chính trị cùng tư liệu lịch sử về Chi bộ Nhà tù Sơn La.',
    historicalValue:
      'Bổ trợ góc nhìn tư liệu xác thực, kết nối di tích ngoài trời với chiều sâu lịch sử văn hóa các dân tộc tỉnh Sơn La.',
    architecturalNotes:
      'Hệ thống tủ kính trưng bày chuyên dụng với chiếu sáng bảo tồn hiện vật.',
    image: HERITAGE_IMAGES.museumArtifacts,
    imageCaption: 'Tủ kính trưng bày hiện vật và tài liệu lưu trữ tại Bảo tàng Sơn La',
    tourSceneId: 'scene-museum',
  },
  {
    id: 'zone-memorial',
    code: 'KHU 06',
    category: 'memorial',
    categoryLabel: 'Biểu tượng & Tưởng niệm',
    name: 'Khu Tưởng niệm & Dấu tích Đổ nát Bảo tồn',
    shortDesc:
      'Bia tưởng niệm các Anh hùng liệt sĩ cùng những mảng tường gạch đá còn lưu dấu bom đạn năm 1952 và 1965.',
    description:
      'Không gian trang nghiêm nơi nhân dân cả nước và du khách dâng hương tưởng niệm các chiến sĩ đã hy sinh tại Nhà tù Sơn La, bao quanh là các phế tích tường đá phủ rêu xanh được bảo tồn nguyên trạng.',
    historicalValue:
      'Địa điểm giáo dục truyền thống uống nước nhớ nguồn và lưu giữ chứng tích lịch sử của hai cuộc kháng chiến.',
    architecturalNotes:
      'Sân lát đá xanh trên nền cao, bia đá khắc ghi công lao các liệt sĩ kết hợp phế tích kiến trúc cũ.',
    image: HERITAGE_IMAGES.memorialCourtyard,
    imageCaption: 'Khu tưởng niệm và dấu tích tường thành cổ trên đồi Khau Cả',
    tourSceneId: 'scene-memorial',
  },
];

export const HISTORICAL_FIGURES: HistoricalFigure[] = [
  {
    id: 'fig-to-hieu',
    accessionCode: 'NV-SL-01',
    name: 'Tô Hiệu',
    years: '1912 – 1944',
    detentionPeriod: '1940 – 1944',
    roleInPrison: 'Bí thư Chi bộ Nhà tù Sơn La (1940 – 1944)',
    laterRole: 'Liệt sĩ cách mạng tiêu biểu của Đảng Cộng sản Việt Nam',
    biography:
      'Đồng chí Tô Hiệu sinh năm 1912 tại tỉnh Hưng Yên. Sớm giác ngộ cách mạng từ thời thanh niên, đồng chí tham gia hoạt động sôi nổi tại Hà Nội, Hải Phòng và nhiều địa phương Bắc Bộ trước khi bị thực dân Pháp bắt và kết án đày lên Nhà tù Sơn La.',
    revolutionaryActivity:
      'Trước khi bị đày lên Sơn La, đồng chí từng bị giam ở Côn Đảo (1930–1934), sau đó giữ trọng trách Thành ủy viên Hải Phòng, Xứ ủy viên Bắc Kỳ.',
    sonLaImprint:
      'Trên cương vị Bí thư Chi bộ Nhà tù Sơn La từ năm 1940, dù mắc bệnh lao phổi nặng, đồng chí vẫn kiên trì tổ chức huấn luyện cán bộ, chỉ đạo ra báo Suối Reo và chuẩn bị cho cuộc vượt ngục năm 1943. Đồng chí hy sinh ngày 7/3/1944; cây đào đồng chí trồng tại sân trại giam trở thành biểu tượng bất tử mang tên Cây đào Tô Hiệu.',
    quote: 'Biến nhà tù đế quốc thành trường học cách mạng.',
    source: 'Tư liệu Bảo tàng tỉnh Sơn La & Từ điển Lịch sử Việt Nam',
  },
  {
    id: 'fig-le-duc-tho',
    accessionCode: 'NV-SL-02',
    name: 'Lê Đức Thọ',
    birthName: 'Phan Đình Khải',
    years: '1911 – 1990',
    detentionPeriod: '1939 – 1944',
    roleInPrison: 'Ủy viên Chi bộ Nhà tù Sơn La, tham gia công tác tư tưởng và huấn luyện',
    laterRole: 'Ủy viên Bộ Chính trị, Cố vấn đặc biệt tại Hội nghị Paris (1973)',
    biography:
      'Đồng chí Lê Đức Thọ (tên khai sinh Phan Đình Khải), quê tỉnh Nam Định (nay thuộc Nam Định/Ninh Bình vùng đồng bằng Bắc Bộ; nguyên quán xã Địch Lễ, huyện Mỹ Lộc, tỉnh Nam Định). Đồng chí tham gia cách mạng từ năm 1926.',
    revolutionaryActivity:
      'Bị thực dân Pháp bắt giam nhiều lần tại các nhà tù Hỏa Lò, Sơn La. Sau năm 1945, đồng chí giữ nhiều trọng trách quan trọng của Trung ương Đảng, đặc biệt là Trưởng ban Tổ chức Trung ương và Cố vấn đặc biệt Đoàn đàm phán Việt Nam Dân chủ Cộng hòa tại Hội nghị Paris.',
    sonLaImprint:
      'Trong thời gian bị giam tại Nhà tù Sơn La (1939–1944), đồng chí sát cánh cùng đồng chí Tô Hiệu xây dựng tổ chức Chi bộ, viết bài cho tờ báo bí mật Suối Reo và trực tiếp tham gia giảng dạy lý luận chính trị trong tù.',
    source: 'Hồ sơ Di tích Quốc gia đặc biệt Nhà tù Sơn La',
  },
  {
    id: 'fig-truong-chinh',
    accessionCode: 'NV-SL-03',
    name: 'Trường Chinh',
    birthName: 'Đặng Xuân Khu',
    years: '1907 – 1988',
    detentionPeriod: '1931 – 1936',
    roleInPrison: 'Chiến sĩ cộng sản kiên trung trong giai đoạn đầu giam giữ tù chính trị tại Sơn La',
    laterRole: 'Tổng Bí thư Đảng Cộng sản Việt Nam, Chủ tịch Hội đồng Nhà nước',
    biography:
      'Đồng chí Trường Chinh (tên thật Đặng Xuân Khu), sinh năm 1907 tại làng Hành Thiện, huyện Xuân Trường, tỉnh Nam Định. Đồng chí là nhà lý luận, nhà báo và nhà lãnh đạo kiệt xuất của cách mạng Việt Nam.',
    revolutionaryActivity:
      'Tham gia Hội Việt Nam Cách mạng Thanh niên và phong trào 1930–1931; bị bắt cuối năm 1930, giam tại Hỏa Lò rồi bị đày lên Nhà tù Sơn La đến năm 1936 được trả tự do trong phong trào Mặt trận Dân chủ.',
    sonLaImprint:
      'Trong những năm bị giam giữ khắc nghiệt tại Nhà tù Sơn La đầu thập niên 1930, đồng chí tích cực đấu tranh đòi cải thiện chế độ nhà tù, tự học và truyền bá tri thức cách mạng cho bạn tù.',
    source: 'Tư liệu Bảo tàng Sơn La & Văn kiện Đảng',
  },
  {
    id: 'fig-nguyen-luong-bang',
    accessionCode: 'NV-SL-04',
    name: 'Nguyễn Lương Bằng',
    years: '1904 – 1979',
    detentionPeriod: '1933 – 1943',
    roleInPrison: 'Chiến sĩ cách mạng trụ cột, tham gia Ban lãnh đạo đấu tranh và vượt ngục 1943',
    laterRole: 'Phó Chủ tịch nước Việt Nam Dân chủ Cộng hòa / CHXHCN Việt Nam',
    biography:
      'Đồng chí Nguyễn Lương Bằng (thường gọi là "Anh Cả"), sinh năm 1904 tại tỉnh Hải Dương. Đồng chí là một trong những học trò xuất sắc của Chủ tịch Hồ Chí Minh và là chiến sĩ cách mạng tiền bối mẫu mực.',
    revolutionaryActivity:
      'Hoạt động trong Hội Việt Nam Cách mạng Thanh niên từ những năm 1920. Sau nhiều lần bị bắt giam và vượt ngục, đồng chí đảm nhiệm nhiều cương vị lãnh đạo chủ chốt của Mặt trận Việt Minh, Chính phủ và Nhà nước.',
    sonLaImprint:
      'Bị giam tại Nhà tù Sơn La suốt gần một thập kỷ (1933–1943), đồng chí là tấm gương về ý chí bền bỉ, đồng thời là một trong bốn chiến sĩ thực hiện cuộc vượt ngục lịch sử năm 1943 do Chi bộ Nhà tù Sơn La tổ chức.',
    source: 'Bảo tàng tỉnh Sơn La',
  },
  {
    id: 'fig-xuan-thuy',
    accessionCode: 'NV-SL-05',
    name: 'Xuân Thủy',
    birthName: 'Nguyễn Trọng Nhâm',
    years: '1912 – 1985',
    detentionPeriod: '1939 – 1944',
    roleInPrison: 'Chủ bút tờ báo bí mật "Suối Reo" tại Nhà tù Sơn La',
    laterRole: 'Bộ trưởng Bộ Ngoại giao, Trưởng đoàn đàm phán tại Hội nghị Paris',
    biography:
      'Đồng chí Xuân Thủy (tên khai sinh Nguyễn Trọng Nhâm), sinh năm 1912 tại huyện Hoài Đức, tỉnh Hà Đông (nay thuộc Hà Nội). Đồng chí là nhà ngoại giao xuất sắc, nhà thơ và nhà báo cách mạng.',
    revolutionaryActivity:
      'Sau khi ra tù năm 1944–1945, đồng chí lãnh đạo báo Cứu Quốc, giữ nhiều chức vụ quan trọng như Bộ trưởng Ngoại giao, Bí thư Trung ương Đảng, Phó Chủ tịch Quốc hội.',
    sonLaImprint:
      'Tại Nhà tù Sơn La, đồng chí Xuân Thủy trực tiếp làm Chủ bút tờ báo bí mật "Suối Reo" – cơ quan ngôn luận truyền lửa lạc quan, cổ vũ văn hóa, thơ ca và tinh thần đấu tranh trong chốn lao tù.',
    source: 'Tư liệu Bảo tàng Sơn La',
  },
  {
    id: 'fig-tran-huy-lieu',
    accessionCode: 'NV-SL-06',
    name: 'Trần Huy Liệu',
    years: '1901 – 1969',
    detentionPeriod: '1939 – 1945',
    roleInPrison: 'Nhà báo, nhà sử học cách mạng tham gia viết và biên tập báo trong tù',
    laterRole: 'Viện trưởng Viện Sử học Việt Nam, Phó Chủ tịch Ủy ban Thường vụ Quốc hội',
    biography:
      'Đồng chí Trần Huy Liệu sinh năm 1901 tại tỉnh Nam Định, là nhà văn, nhà báo và nhà sử học đặt nền móng cho nền sử học cách mạng Việt Nam hiện đại.',
    revolutionaryActivity:
      'Tham gia cách mạng từ thập niên 1920, năm 1945 đại diện phái đoàn Chính phủ lâm thời vào Huế tiếp nhận sự thoái vị của vua Bảo Đại, sau này là Viện trưởng đầu tiên của Viện Sử học.',
    sonLaImprint:
      'Trong thời gian bị giam giữ tại Sơn La (1939–1945), đồng chí đóng góp tích cực vào phong trào học tập văn hóa, nghiên cứu lịch sử và sáng tác báo chí cách mạng cùng tập thể tù chính trị.',
    source: 'Tư liệu Bảo tàng tỉnh Sơn La',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-01',
    accessionId: 'TL-01',
    title: 'Toàn cảnh Di tích Nhà tù Sơn La trên đồi Khau Cả',
    category: 'panorama',
    categoryLabel: 'Toàn cảnh di tích',
    image: HERITAGE_IMAGES.hero,
    caption: 'Góc nhìn bao quát hệ thống tường đá, tháp canh và mái trại giam giữa núi rừng Sơn La.',
    source: 'Lưu trữ tư liệu Di tích Quốc gia đặc biệt Nhà tù Sơn La',
    aspect: 'wide',
  },
  {
    id: 'gal-02',
    accessionId: 'TL-02',
    title: 'Cây đào Tô Hiệu bên vòm cửa đá',
    category: 'peach_tree',
    categoryLabel: 'Cây đào Tô Hiệu',
    image: HERITAGE_IMAGES.peachTree,
    caption: 'Sắc hoa đào mùa xuân bên góc sân trại giam, gắn liền với kỷ niệm của đồng chí Tô Hiệu.',
    source: 'Tư liệu Bảo tàng tỉnh Sơn La',
    aspect: 'landscape',
  },
  {
    id: 'gal-03',
    accessionId: 'TL-03',
    title: 'Không gian phòng giam tập thể và bệ nằm gỗ',
    category: 'cells',
    categoryLabel: 'Phòng giam',
    image: HERITAGE_IMAGES.prisonCell,
    caption: 'Ánh sáng xuyên qua khung cửa sổ cao có song sắt xuống dãy bệ nằm của tù chính trị.',
    source: 'Phòng trưng bày di tích gốc Nhà tù Sơn La',
    aspect: 'landscape',
  },
  {
    id: 'gal-04',
    accessionId: 'TL-04',
    title: 'Hành lang khu xà lim ngầm',
    category: 'cells',
    categoryLabel: 'Phòng giam',
    image: HERITAGE_IMAGES.undergroundSolitary,
    caption: 'Các buồng biệt giam tường đá dày và cửa sắt nặng nơi giam giữ tù nhân kiên trung.',
    source: 'Phân khu xà lim – Di tích Nhà tù Sơn La',
    aspect: 'landscape',
  },
  {
    id: 'gal-05',
    accessionId: 'TL-05',
    title: 'Hiện vật và bản thảo báo chí cách mạng trong tù',
    category: 'artifacts',
    categoryLabel: 'Hiện vật',
    image: HERITAGE_IMAGES.museumArtifacts,
    caption: 'Xiềng xích sắt, ca men sinh hoạt và tư liệu giấy viết tay được bảo quản trong tủ kính bảo tàng.',
    source: 'Bộ sưu tập hiện vật Bảo tàng Sơn La',
    aspect: 'landscape',
  },
  {
    id: 'gal-06',
    accessionId: 'TL-06',
    title: 'Khu tưởng niệm và dấu tích tường thành đổ nát',
    category: 'memorial',
    categoryLabel: 'Khu tưởng niệm',
    image: HERITAGE_IMAGES.memorialCourtyard,
    caption: 'Bia tưởng niệm Anh hùng liệt sĩ và các bức tường đá mang dấu tích chiến tranh.',
    source: 'Khu tưởng niệm – Đồi Khau Cả, Sơn La',
    aspect: 'wide',
  },
  {
    id: 'gal-07',
    accessionId: 'TL-07',
    title: 'Chi tiết kết cấu tường đá và tháp canh phía Bắc',
    category: 'architecture',
    categoryLabel: 'Tư liệu kiến trúc',
    image: HERITAGE_IMAGES.hero,
    caption: 'Kỹ thuật xây tường đá hộc dày nhằm cô lập tuyệt đối khu trại giam trên sườn đồi.',
    source: 'Hồ sơ khảo sát kiến trúc di tích',
    aspect: 'landscape',
  },
  {
    id: 'gal-08',
    accessionId: 'TL-08',
    title: 'Lối đi vào khu trại giam trong dưới tán đào xuân',
    category: 'peach_tree',
    categoryLabel: 'Cây đào Tô Hiệu',
    image: HERITAGE_IMAGES.peachTree,
    caption: 'Không gian lắng đọng nơi du khách dừng chân tìm hiểu câu chuyện đồng chí Tô Hiệu.',
    source: 'Tư liệu giới thiệu điểm tham quan Sơn La',
    aspect: 'portrait',
  },
];

export const TOUR_SCENES: TourScene[] = [
  {
    id: 'scene-panorama',
    order: '01',
    name: 'Toàn cảnh Đồi Khau Cả & Cổng trại',
    subtitle: 'Điểm khởi đầu hành trình tham quan',
    image: HERITAGE_IMAGES.hero,
    mapX: 22,
    mapY: 74,
    description:
      'Đứng từ triền đồi Khau Cả nhìn toàn bộ cụm tường bao bằng đá hộc, tháp canh cao và khuôn viên bên trong Nhà tù Sơn La.',
    historicalContext:
      'Thực dân Pháp chọn đỉnh đồi Khau Cả làm nơi xây nhà tù từ năm 1908 vì địa thế cô lập, dễ kiểm soát mọi hướng tiếp cận.',
    hotspots: [
      {
        id: 'hs-tower',
        xPercent: 41,
        yPercent: 42,
        title: 'Tháp canh đá trung tâm',
        description:
          'Vị trí lính gác quan sát toàn bộ khu trại giam và vùng thung lũng xung quanh để ngăn chặn vượt ngục.',
      },
      {
        id: 'hs-wall',
        xPercent: 62,
        yPercent: 66,
        title: 'Tường bao đá hộc',
        description:
          'Xây dựng bằng đá địa phương với độ dày lớn, mở rộng trong giai đoạn 1930–1940.',
      },
      {
        id: 'hs-ward',
        xPercent: 58,
        yPercent: 48,
        title: 'Khu trại giam phục dựng',
        description:
          'Khối nhà mái ngói nơi tái hiện cấu trúc các phòng giam tập thể xưa.',
      },
    ],
  },
  {
    id: 'scene-peach',
    order: '02',
    name: 'Góc sân Cây đào Tô Hiệu',
    subtitle: 'Biểu tượng tinh thần bất khuất',
    image: HERITAGE_IMAGES.peachTree,
    mapX: 42,
    mapY: 56,
    description:
      'Khu vực sân trong bên cạnh vòm cửa đá dẫn vào phòng giam, nơi cây đào do đồng chí Tô Hiệu trồng vẫn nở hoa mỗi độ xuân về.',
    historicalContext:
      'Cây đào trở thành kỷ vật sống động về Bí thư Chi bộ Tô Hiệu (1912–1944) và niềm lạc quan của những người chiến sĩ cộng sản.',
    hotspots: [
      {
        id: 'hs-peach-trunk',
        xPercent: 46,
        yPercent: 55,
        title: 'Thân đào cổ thụ',
        description:
          'Gắn liền với giai đoạn hoạt động của Chi bộ Nhà tù Sơn La đầu thập niên 1940.',
      },
      {
        id: 'hs-arch-door',
        xPercent: 79,
        yPercent: 60,
        title: 'Cửa vòm vào trại giam',
        description:
          'Lối dẫn từ sân sinh hoạt vào hệ thống phòng giam bên trong bức tường đá.',
      },
    ],
  },
  {
    id: 'scene-cell',
    order: '03',
    name: 'Phòng giam tập thể',
    subtitle: 'Trường học cách mạng trong lao tù',
    image: HERITAGE_IMAGES.prisonCell,
    mapX: 56,
    mapY: 44,
    description:
      'Không gian phòng giam dài với nền đá, bệ nằm gỗ liền dãy và các ô cửa sổ cao có song sắt.',
    historicalContext:
      'Chính tại những gian phòng chật hẹp này, Chi bộ Nhà tù Sơn La đã tổ chức các lớp học lý luận, học văn hóa và truyền tay tờ báo Suối Reo.',
    hotspots: [
      {
        id: 'hs-window',
        xPercent: 14,
        yPercent: 26,
        title: 'Cửa sổ song sắt trên cao',
        description:
          'Thiết kế cao khỏi tầm với để hạn chế tầm nhìn ra bên ngoài nhưng vẫn đủ lấy ánh sáng và không khí.',
      },
      {
        id: 'hs-bunk',
        xPercent: 72,
        yPercent: 64,
        title: 'Dãy bệ nằm gỗ và cùm sắt',
        description:
          'Mô phỏng chỗ nằm san sát của hàng chục tù nhân với thanh sắt cùm chân dọc thành bệ.',
      },
    ],
  },
  {
    id: 'scene-solitary',
    order: '04',
    name: 'Khu Xà lim ngầm',
    subtitle: 'Chốn biệt giam khắc nghiệt nhất',
    image: HERITAGE_IMAGES.undergroundSolitary,
    mapX: 68,
    mapY: 36,
    description:
      'Hành lang đá sâu tối với những cánh cửa sắt nặng nề dẫn vào từng buồng xà lim chật hẹp.',
    historicalContext:
      'Dùng để biệt giam các chiến sĩ lãnh đạo đấu tranh hoặc trừng phạt tù nhân không chịu khuất phục trước chế độ lao tù.',
    hotspots: [
      {
        id: 'hs-iron-door',
        xPercent: 28,
        yPercent: 54,
        title: 'Cánh cửa sắt xà lim',
        description:
          'Kết cấu sắt dày có then cài ngoài và ô nhỏ để cai ngục kiểm tra tù nhân.',
      },
      {
        id: 'hs-corridor',
        xPercent: 66,
        yPercent: 48,
        title: 'Vòm cuốn hành lang đá',
        description:
          'Tạo độ cách âm và không gian ẩm lạnh đặc trưng của khu biệt giam.',
      },
    ],
  },
  {
    id: 'scene-museum',
    order: '05',
    name: 'Không gian Trưng bày Bảo tàng',
    subtitle: 'Hiện vật gốc & Báo Suối Reo',
    image: HERITAGE_IMAGES.museumArtifacts,
    mapX: 80,
    mapY: 58,
    description:
      'Khu trưng bày các hiện vật sinh hoạt, xiềng xích và tài liệu lịch sử giúp khách tham quan đối chiếu trực quan.',
    historicalContext:
      'Lưu giữ nhiều tư liệu quý về đời sống tù chính trị, cuộc vượt ngục năm 1943 và phong trào đấu tranh tại Sơn La.',
    hotspots: [
      {
        id: 'hs-manuscript',
        xPercent: 38,
        yPercent: 52,
        title: 'Tư liệu báo chí & bản thảo',
        description:
          'Gợi nhắc tinh thần làm báo cách mạng trong lao tù với tờ báo bí mật Suối Reo.',
      },
      {
        id: 'hs-shackles',
        xPercent: 62,
        yPercent: 56,
        title: 'Xiềng chân sắt & ca men',
        description:
          'Những hiện vật phản ánh sự đối lập giữa gông cùm thực dân và đời sống giản dị của người chiến sĩ.',
      },
    ],
  },
  {
    id: 'scene-memorial',
    order: '06',
    name: 'Khu Tưởng niệm Liệt sĩ',
    subtitle: 'Điểm tri ân cuối hành trình',
    image: HERITAGE_IMAGES.memorialCourtyard,
    mapX: 48,
    mapY: 22,
    description:
      'Sân tưởng niệm trang nghiêm trên đỉnh đồi với bia ghi công các Anh hùng liệt sĩ và những bức tường đá lưu dấu bom đạn.',
    historicalContext:
      'Nơi tri ân những chiến sĩ đã ngã xuống tại Nhà tù Sơn La và lưu giữ nguyên trạng phế tích chiến tranh năm 1952, 1965.',
    hotspots: [
      {
        id: 'hs-stele',
        xPercent: 50,
        yPercent: 46,
        title: 'Bia tưởng niệm trung tâm',
        description:
          'Nơi các đoàn khách dâng hương, tưởng nhớ công lao của các Anh hùng liệt sĩ.',
      },
      {
        id: 'hs-ruins',
        xPercent: 77,
        yPercent: 48,
        title: 'Tường gạch đá lưu dấu chiến tranh',
        description:
          'Phế tích chịu tác động bom đạn trong hai cuộc kháng chiến, được giữ gìn làm chứng tích lịch sử.',
      },
    ],
  },
];
