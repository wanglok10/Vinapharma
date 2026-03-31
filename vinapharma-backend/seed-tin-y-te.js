// Seed 5 bài Tin Y Tế — node seed-tin-y-te.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');

const posts = [

  // ── BÀI 1: VACCINE mRNA CHỐNG UNG THƯ ──────────────────────────────────────
  {
    title: 'Vaccine mRNA cá nhân hóa: Cuộc cách mạng mới trong điều trị ung thư',
    category: 'Tin Y tế', topic: 'Sức khỏe', featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1576765608866-5b51046452be?w=1200&q=80',
    excerpt: 'Công nghệ mRNA — nền tảng tạo nên vaccine COVID-19 — đang được ứng dụng để tạo ra vaccine ung thư cá nhân hóa cho từng bệnh nhân. Thử nghiệm lâm sàng giai đoạn 2b cho kết quả đột phá: giảm 44% nguy cơ tái phát hoặc tử vong ở bệnh nhân ung thư hắc tố.',
    readTime: 7, published: true,
    tags: ['Vaccine', 'Ung thư', 'mRNA', 'Nghiên cứu y học'],
    content: `<p>Trong nhiều thập kỷ, ung thư vẫn là một trong những thách thức y học lớn nhất của nhân loại. Nhưng từ thành công vang dội của vaccine COVID-19 mRNA, các nhà khoa học đã nhận ra tiềm năng to lớn của công nghệ này trong cuộc chiến chống ung thư — và kết quả ban đầu đang khiến cả giới y khoa sửng sốt.</p>

<img src="https://images.unsplash.com/photo-1576765608866-5b51046452be?w=900&q=80" alt="Vaccine mRNA nghiên cứu ung thư" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Vaccine mRNA ung thư hoạt động như thế nào?</h2>
<p>Không giống vaccine truyền thống sử dụng chung một công thức, vaccine mRNA ung thư được <strong>thiết kế riêng cho từng bệnh nhân</strong>. Quy trình gồm 3 bước:</p>
<ol>
<li><strong>Giải trình tự gen:</strong> Mẫu mô ung thư của bệnh nhân được phân tích để xác định các đột biến đặc hiệu (neoantigens) — những "dấu hiệu" chỉ có trên tế bào ung thư, không có trên tế bào lành.</li>
<li><strong>Thiết kế vaccine cá nhân:</strong> Thuật toán trí tuệ nhân tạo chọn lọc tối đa 34 neoantigens có khả năng kích hoạt miễn dịch mạnh nhất, sau đó tổng hợp đoạn mRNA tương ứng.</li>
<li><strong>Huấn luyện hệ miễn dịch:</strong> Vaccine được tiêm vào cơ thể, mRNA hướng dẫn tế bào sản xuất các mảnh protein ung thư. Hệ miễn dịch "học" nhận diện và tấn công tế bào ung thư mang những protein này.</li>
</ol>

<img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80" alt="Phòng thí nghiệm nghiên cứu vaccine" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Kết quả thử nghiệm lâm sàng KEYNOTE-942</h2>
<p>Thử nghiệm giai đoạn 2b do <strong>Moderna phối hợp với Merck</strong> thực hiện trên bệnh nhân ung thư hắc tố (melanoma) giai đoạn III/IV sau phẫu thuật cho thấy:</p>
<ul>
<li>Nhóm dùng vaccine mRNA-4157 kết hợp pembrolizumab (thuốc miễn dịch): <strong>giảm 44% nguy cơ tái phát hoặc tử vong</strong> so với nhóm chỉ dùng pembrolizumab đơn thuần.</li>
<li>Hiệu quả duy trì sau 3 năm theo dõi với mức giảm nguy cơ lên đến <strong>49%</strong>.</li>
<li>Kết quả được công bố trên tạp chí <em>New England Journal of Medicine</em> và trình bày tại hội nghị ASCO 2024.</li>
</ul>
<p>Thử nghiệm giai đoạn 3 hiện đang được triển khai trên hàng nghìn bệnh nhân tại nhiều quốc gia, mở rộng sang các loại ung thư khác như ung thư phổi, thận và bàng quang.</p>

<h2>Ứng dụng tại Việt Nam — còn bao xa?</h2>
<p>Hiện tại, vaccine mRNA ung thư cá nhân hóa vẫn đang trong giai đoạn thử nghiệm và chưa được phê duyệt thương mại tại bất kỳ quốc gia nào. Tuy nhiên, chi phí sản xuất đang giảm dần nhờ công nghệ tự động hóa, và các chuyên gia kỳ vọng vaccine này có thể tiếp cận bệnh nhân rộng rãi hơn trong vòng 5–10 năm tới.</p>
<p>Tại Việt Nam, Bệnh viện Ung Bướu TP.HCM và Bệnh viện K (Hà Nội) đang theo dõi sát các kết quả thử nghiệm quốc tế để chuẩn bị hạ tầng triển khai liệu pháp miễn dịch thế hệ mới.</p>

<blockquote style="border-left:4px solid #cc1f1f;padding:1rem 1.5rem;background:#fff5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Đây là bước ngoặt trong lịch sử điều trị ung thư. Lần đầu tiên chúng ta có thể dạy hệ miễn dịch nhận biết và tiêu diệt tế bào ung thư của chính bệnh nhân đó."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#cc1f1f">— GS. Stéphane Bancel, CEO Moderna</p>
</blockquote>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Moderna/Merck KEYNOTE-942 Trial Results, <em>New England Journal of Medicine</em>, 2024<br/>
• American Society of Clinical Oncology (ASCO) Annual Meeting 2024<br/>
• Nature Medicine: "Personalized mRNA vaccine for melanoma" (2024)<br/>
• VnExpress Sức Khỏe: "Vaccine mRNA cá nhân hóa — tương lai của điều trị ung thư" (2024)<br/>
• WHO Cancer Research Programme Update, 2025</p>`
  },

  // ── BÀI 2: CẤY GHÉP THẬN LỢN BIẾN ĐỔI GEN ──────────────────────────────────
  {
    title: 'Lần đầu tiên cấy ghép thận lợn biến đổi gen thành công vào người còn sống',
    category: 'Tin Y tế', topic: 'Sức khỏe', featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&q=80',
    excerpt: 'Một bước ngoặt lịch sử trong y học: các bác sĩ tại Bệnh viện Đa khoa Massachusetts (Mỹ) đã cấy ghép thành công quả thận từ lợn biến đổi gen vào cơ thể người bệnh đang sống — mở ra hy vọng cho hàng trăm nghìn bệnh nhân suy thận đang chờ ghép tạng trên toàn thế giới.',
    readTime: 8, published: true,
    tags: ['Cấy ghép tạng', 'Y học tái tạo', 'Suy thận', 'Đột phá y học'],
    content: `<p>Hàng năm, hàng trăm nghìn bệnh nhân trên thế giới tử vong trong khi chờ đợi tạng ghép phù hợp. Riêng tại Mỹ, mỗi ngày có khoảng 17 người chết vì không có tạng ghép kịp thời. Nhưng một ca phẫu thuật lịch sử diễn ra vào tháng 3/2024 tại Boston đã thắp lên hy vọng mới cho hàng triệu bệnh nhân toàn cầu.</p>

<img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=900&q=80" alt="Phòng mổ ghép tạng" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Ca phẫu thuật lịch sử tại MGH</h2>
<p>Ngày 16/3/2024, ông <strong>Richard Slayman</strong>, 62 tuổi, bệnh nhân suy thận giai đoạn cuối tại bang Massachusetts (Mỹ), đã trở thành người đầu tiên trên thế giới nhận thận lợn biến đổi gen còn sống và hoạt động. Ekip phẫu thuật gồm 65 chuyên gia của <strong>Bệnh viện Đa khoa Massachusetts (MGH)</strong> đã thực hiện ca mổ kéo dài gần 4 tiếng.</p>
<p>Quả thận được lấy từ lợn do công ty công nghệ sinh học <strong>eGenesis</strong> nuôi, đã được chỉnh sửa tới <strong>69 gen</strong>: xóa bỏ các gen lợn có thể kích hoạt phản ứng đào thải, đưa vào 7 gen người để tăng khả năng tương thích sinh học, và vô hiệu hóa retroviruses nội sinh tiềm ẩn trong ADN lợn.</p>

<img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80" alt="Phẫu thuật nội soi" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Kết quả và tiến triển</h2>
<p>Chỉ sau <strong>2 tuần</strong>, ông Slayman đã được xuất viện với quả thận lợn hoạt động tốt, lọc máu bình thường. Đây là thành công vượt bậc so với các thử nghiệm trước đây chỉ ghép trên bệnh nhân chết não.</p>
<p>Tiếp sau đó, tháng 4/2024, bà <strong>Lisa Pisano</strong> tại Bệnh viện NYU Langone nhận cùng lúc một quả thận lợn và máy hỗ trợ tim nhân tạo — ca ghép tạng phức tạp nhất từ trước đến nay.</p>
<p>Đến tháng 11/2024, bà <strong>Towana Looney</strong>, 53 tuổi, tại Đại học Alabama nhận thận lợn và được xuất viện sau 5 ngày — thời gian phục hồi nhanh kỷ lục.</p>

<h2>Ý nghĩa với Việt Nam</h2>
<p>Tại Việt Nam, theo số liệu Bộ Y tế năm 2024, có khoảng <strong>26.000 bệnh nhân</strong> đang chạy thận nhân tạo và hàng nghìn người đang trong danh sách chờ ghép thận. Nguồn tạng từ người hiến tặng còn rất hạn chế. Công nghệ xenotransplantation (ghép tạng dị loài) nếu được hoàn thiện có thể giải quyết căn bản bài toán thiếu hụt tạng ghép này.</p>
<p>PGS.TS Nguyễn Tiến Quyết — nguyên Giám đốc Bệnh viện Việt Đức — nhận xét: "Đây là hướng đi tất yếu của y học ghép tạng thế giới. Việt Nam cần sớm đào tạo nhân lực và xây dựng khung pháp lý để tiếp cận công nghệ này."</p>

<blockquote style="border-left:4px solid #cc1f1f;padding:1rem 1.5rem;background:#fff5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Tôi đồng ý phẫu thuật không chỉ để cứu bản thân, mà còn để truyền hy vọng cho hàng trăm nghìn người khác đang chờ tạng ghép."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#cc1f1f">— Richard Slayman, bệnh nhân đầu tiên nhận thận lợn biến đổi gen</p>
</blockquote>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Massachusetts General Hospital Press Release, tháng 3/2024<br/>
• New England Journal of Medicine: "Xenotransplantation of a Genetically Edited Pig Kidney" (2024)<br/>
• NYU Langone Health: "Patient Receives Gene-Edited Pig Kidney and Mechanical Heart Pump" (2024)<br/>
• VnExpress: "Ghép thận lợn vào người thành công lần đầu trên thế giới" (2024)<br/>
• Báo Sức khỏe & Đời sống: "Triển vọng ghép tạng dị loài cho Việt Nam" (2024)</p>`
  },

  // ── BÀI 3: CỨU SỐNG TRẺ SINH NON 22 TUẦN ────────────────────────────────────
  {
    title: 'Kỳ tích y học: Cứu sống bé sinh non 22 tuần tuổi, nặng chỉ 421 gram',
    category: 'Tin Y tế', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=80',
    excerpt: 'Các bác sĩ tại Bệnh viện Phụ sản Trung ương và nhiều cơ sở y tế trên thế giới liên tiếp ghi nhận kỳ tích cứu sống trẻ sinh cực non — những em bé chào đời khi mới 22–23 tuần tuổi, nặng chưa đầy 500 gram. Những ca bệnh tưởng như không thể này đang thay đổi ranh giới của y học hiện đại.',
    readTime: 6, published: true,
    tags: ['Sinh non', 'Nhi khoa', 'NICU', 'Kỳ tích y học'],
    content: `<p>Ranh giới sống còn của trẻ sinh non đang ngày càng được đẩy lùi nhờ những tiến bộ vượt bậc trong công nghệ hồi sức sơ sinh. Nếu trước đây, trẻ sinh trước 28 tuần hầu như không có cơ hội sống sót, thì nay các bệnh viện hàng đầu thế giới đã có thể nuôi sống những em bé chào đời từ tuần thứ 22.</p>

<img src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=900&q=80" alt="Trẻ sơ sinh non tháng trong lồng ấp" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Ca bệnh kỷ lục tại Mỹ và thế giới</h2>
<p>Bé <strong>Curtis Means</strong> (Alabama, Mỹ) được sinh ra vào tháng 7/2020 khi mới <strong>21 tuần 1 ngày</strong> — chỉ bằng một nửa thời gian thai kỳ bình thường. Nặng 420 gram, bé phải gắn máy thở ngay từ giây đầu tiên. Sau 275 ngày trong đơn vị chăm sóc sơ sinh đặc biệt (NICU), Curtis đã được về nhà khỏe mạnh và được Guinness World Records công nhận là <strong>người sinh non nhất thế giới còn sống</strong>.</p>
<p>Năm 2024, bệnh viện <strong>Karolinska (Thụy Điển)</strong> công bố nghiên cứu trên 1.800 trẻ sinh non từ tuần 22–26: tỷ lệ sống sót của trẻ 22 tuần đã tăng lên <strong>27%</strong>, và trẻ 23 tuần đạt <strong>54%</strong> — những con số tưởng chừng không tưởng cách đây 10 năm.</p>

<h2>Tại Việt Nam — những kỳ tích trong nước</h2>
<p>Bệnh viện Phụ sản Trung ương (Hà Nội) và Bệnh viện Từ Dũ (TP.HCM) là hai cơ sở hàng đầu Việt Nam về cứu sống trẻ sinh cực non. Năm 2023, Bệnh viện Phụ sản Trung ương đã cứu sống thành công bé trai <strong>sinh non 25 tuần, nặng 650 gram</strong> — kỳ tích hiếm gặp tại Đông Nam Á.</p>

<img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900&q=80" alt="Bác sĩ nhi khoa chăm sóc trẻ sơ sinh" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Công nghệ NICU hiện đại — chìa khóa của kỳ tích</h2>
<p>Các tiến bộ công nghệ đã biến những ca bệnh "vô vọng" thành có thể:</p>
<ul>
<li><strong>Surfactant nhân tạo:</strong> Tiêm thẳng vào phổi, giúp phổi chưa hoàn thiện có thể trao đổi khí.</li>
<li><strong>Máy thở dao động tần số cao (HFOV):</strong> Thở 600–900 lần/phút với thể tích khí cực nhỏ, tránh tổn thương phổi non yếu.</li>
<li><strong>Nhiệt độ ổn định:</strong> Lồng ấp công nghệ cao duy trì thân nhiệt 37°C và độ ẩm 80–90%.</li>
<li><strong>Dinh dưỡng tĩnh mạch toàn phần (TPN):</strong> Cung cấp đủ năng lượng qua đường truyền khi bé chưa thể bú.</li>
<li><strong>Phương pháp Kangaroo:</strong> Da kề da với mẹ giúp điều hòa nhịp tim, nhịp thở và tăng cân nhanh hơn.</li>
</ul>

<h2>Thách thức còn phía trước</h2>
<p>Dù tỷ lệ sống sót tăng, nhiều trẻ sinh cực non vẫn đối mặt với nguy cơ dị tật dài hạn: tổn thương não, mù lòa do bệnh võng mạc sinh non, bại não, hoặc chậm phát triển tâm thần. Theo dõi và can thiệp sớm sau xuất viện là yếu tố then chốt để tối ưu hóa sự phát triển của trẻ.</p>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Guinness World Records: "Most premature baby to survive" — Curtis Means (2021)<br/>
• Karolinska Institutet: "Extremely preterm birth outcomes in Sweden" — NEJM (2024)<br/>
• Bệnh viện Phụ sản Trung ương: Báo cáo thường niên 2023<br/>
• Báo Tuổi Trẻ: "Cứu sống bé sinh non 25 tuần tại Hà Nội" (2023)<br/>
• World Health Organization: "Born Too Soon: Decade of Action on Preterm Birth" (2023)</p>`
  },

  // ── BÀI 4: BIẾN CHỦNG COVID XEC ──────────────────────────────────────────────
  {
    title: 'Biến chủng XEC và làn sóng COVID mới: Những gì bạn cần biết để bảo vệ sức khỏe',
    category: 'Tin Y tế', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=1200&q=80',
    excerpt: 'Biến chủng XEC — thế hệ kế tiếp của Omicron — đã lan rộng trên 27 quốc gia từ cuối năm 2024. Trong khi đó tại Việt Nam, các chuyên gia ghi nhận số ca COVID tăng trở lại vào đầu 2025. Đâu là điểm khác biệt của XEC và cần làm gì để phòng ngừa?',
    readTime: 6, published: true,
    tags: ['COVID-19', 'Biến chủng', 'Phòng dịch', 'Sức khỏe cộng đồng'],
    content: `<p>Kể từ khi SARS-CoV-2 xuất hiện vào cuối năm 2019, virus này chưa bao giờ "ngủ yên". Sau các biến chủng Delta, Omicron và các nhánh con JN.1, KP.2... đến cuối năm 2024, biến chủng <strong>XEC</strong> nổi lên như một mối lo mới, đặc biệt tại châu Âu và Bắc Mỹ.</p>

<img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=900&q=80" alt="Virus COVID-19 dưới kính hiển vi" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>XEC là gì?</h2>
<p>XEC là biến chủng tái tổ hợp (recombinant) — có nghĩa là nó được hình thành khi <strong>hai biến chủng Omicron khác nhau</strong> (KS.1.1 và KP.3.3) cùng lây nhiễm một tế bào và hoán đổi vật liệu di truyền. Quá trình này tạo ra một biến chủng mới với đặc điểm lai ghép từ cả hai "cha mẹ".</p>
<p>Biến chủng XEC lần đầu được phát hiện tại Đức vào tháng 6/2024. Đến tháng 10/2024, nó đã trở thành biến chủng chiếm ưu thế tại Anh, Đức, Pháp và lan rộng sang 27 quốc gia.</p>

<h2>XEC nguy hiểm hơn Omicron không?</h2>
<p>Theo dữ liệu từ WHO và ECDC (Trung tâm Kiểm soát Dịch bệnh châu Âu):</p>
<ul>
<li><strong>Lây lan nhanh hơn:</strong> XEC có lợi thế lây lan so với các biến chủng JN.1 trước đó nhờ đột biến trên protein gai (spike protein) giúp bám vào tế bào người hiệu quả hơn.</li>
<li><strong>Không nặng hơn:</strong> Các ca bệnh do XEC không ghi nhận độc lực tăng. Triệu chứng tương tự Omicron: sốt, đau họng, mệt mỏi, nghẹt mũi.</li>
<li><strong>Miễn dịch vẫn có tác dụng:</strong> Vaccine cập nhật 2024–2025 và miễn dịch tự nhiên từ nhiễm Omicron vẫn bảo vệ tốt trước bệnh nặng và tử vong.</li>
</ul>

<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80" alt="Xét nghiệm COVID và phòng dịch" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Tình hình tại Việt Nam đầu 2025</h2>
<p>Theo Cục Y tế dự phòng — Bộ Y tế, từ tháng 1/2025, số ca COVID-19 được ghi nhận tại các bệnh viện tuyến trung ương có xu hướng tăng nhẹ, chủ yếu ở người cao tuổi và người có bệnh nền. Tuy nhiên, số ca nặng vẫn ở mức thấp nhờ tỷ lệ tiêm phủ vaccine cao.</p>
<p>TS.BS Nguyễn Trung Cấp — Phó Giám đốc Bệnh viện Bệnh nhiệt đới Trung ương khuyến cáo: "COVID chưa biến mất. Người cao tuổi, người có bệnh nền cần tiêm nhắc vaccine mũi bổ sung theo hướng dẫn của Bộ Y tế và không nên chủ quan."</p>

<h2>Khuyến cáo phòng ngừa</h2>
<ul>
<li>✅ Tiêm vaccine nhắc lại nếu đã quá 12 tháng kể từ mũi cuối (đặc biệt người trên 60 tuổi, người có bệnh nền)</li>
<li>✅ Đeo khẩu trang ở nơi đông người, không gian kín</li>
<li>✅ Rửa tay thường xuyên với xà phòng hoặc dung dịch sát khuẩn</li>
<li>✅ Thông gió tốt nơi làm việc và nhà ở</li>
<li>✅ Xét nghiệm nhanh khi có triệu chứng để tránh lây lan</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• WHO COVID-19 Epidemiological Update, tháng 10/2024<br/>
• ECDC: "XEC variant risk assessment" (2024)<br/>
• UK Health Security Agency: Variant Technical Briefing (2024)<br/>
• Cục Y tế dự phòng — Bộ Y tế Việt Nam: Báo cáo dịch tễ COVID-19, Q1/2025<br/>
• VnExpress: "Biến chủng XEC đã xuất hiện tại Việt Nam" (2024)<br/>
• Báo Nhân Dân: "Chuyên gia cảnh báo về làn sóng COVID mùa đông" (2024)</p>`
  },

  // ── BÀI 5: THUỐC ALZHEIMER LECANEMAB ────────────────────────────────────────
  {
    title: 'Đột phá lịch sử: Thuốc Lecanemab và Donanemab được phê duyệt — Alzheimer không còn vô phương cứu chữa?',
    category: 'Tin Y tế', topic: 'Sức khỏe', featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80',
    excerpt: 'Sau hơn 20 năm thất bại liên tiếp, y học thế giới cuối cùng đã có hai loại thuốc được FDA chính thức phê duyệt có thể làm chậm tiến triển của bệnh Alzheimer. Đây được xem là bước đột phá lớn nhất trong lịch sử điều trị căn bệnh mất trí nhớ phổ biến nhất thế giới.',
    readTime: 8, published: true,
    tags: ['Alzheimer', 'Sa sút trí tuệ', 'Thần kinh học', 'Thuốc mới'],
    content: `<p>Alzheimer là nguyên nhân hàng đầu gây sa sút trí tuệ (dementia), ảnh hưởng đến hơn <strong>55 triệu người</strong> trên toàn thế giới. Trong hơn hai thập kỷ qua, hơn 200 thử nghiệm thuốc cho căn bệnh này đã thất bại. Nhưng năm 2023–2024 đánh dấu bước ngoặt khi hai loại thuốc hoàn toàn mới lần đầu tiên chứng minh được khả năng làm chậm tiến trình suy giảm nhận thức.</p>

<img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80" alt="Hình ảnh não bộ MRI" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Lecanemab (Leqembi) — FDA phê duyệt tháng 7/2023</h2>
<p>Lecanemab, phát triển bởi <strong>Eisai và Biogen</strong>, là kháng thể đơn dòng nhắm vào và loại bỏ các mảng amyloid-beta tích tụ trong não — được coi là nguyên nhân chính gây Alzheimer. FDA đã cấp phép đầy đủ vào tháng 7/2023 dựa trên thử nghiệm CLARITY AD với 1.795 bệnh nhân:</p>
<ul>
<li>Làm chậm suy giảm nhận thức <strong>27%</strong> so với giả dược</li>
<li>Giảm amyloid trong não lên đến <strong>59%</strong></li>
<li>Hiệu quả rõ nhất ở giai đoạn sớm (mild cognitive impairment hoặc Alzheimer nhẹ)</li>
</ul>

<h2>Donanemab (Kisunla) — FDA phê duyệt tháng 7/2024</h2>
<p>Tiếp nối thành công của lecanemab, <strong>Eli Lilly</strong> nhận phê duyệt FDA cho donanemab vào tháng 7/2024. Thử nghiệm TRAILBLAZER-ALZ 2 trên 1.736 bệnh nhân cho kết quả ấn tượng hơn:</p>
<ul>
<li>Làm chậm suy giảm nhận thức <strong>35%</strong> ở nhóm amyloid thấp-trung bình</li>
<li><strong>47% bệnh nhân</strong> đạt mức amyloid não trở về bình thường sau điều trị</li>
<li>Tiêm truyền mỗi 4 tuần thay vì 2 tuần như lecanemab — tiện lợi hơn cho bệnh nhân</li>
</ul>

<img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80" alt="Bác sĩ tư vấn bệnh nhân cao tuổi" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Tác dụng phụ cần lưu ý</h2>
<p>Cả hai thuốc đều có thể gây ra <strong>ARIA</strong> (Amyloid-Related Imaging Abnormalities) — phù não hoặc xuất huyết vi thể phát hiện qua MRI. Đây là tác dụng phụ quan trọng nhất:</p>
<ul>
<li>ARIA xảy ra ở khoảng <strong>21–37%</strong> bệnh nhân dùng lecanemab và <strong>24%</strong> dùng donanemab</li>
<li>Phần lớn không có triệu chứng và tự hồi phục</li>
<li>Cần theo dõi MRI định kỳ trong quá trình điều trị</li>
<li>Chống chỉ định với người dùng thuốc chống đông máu</li>
</ul>

<h2>Alzheimer tại Việt Nam — thực trạng và triển vọng</h2>
<p>Theo nghiên cứu của Bệnh viện Lão khoa Trung ương, Việt Nam hiện có khoảng <strong>500.000 người</strong> mắc sa sút trí tuệ, trong đó Alzheimer chiếm khoảng 60–70%. Con số này dự kiến tăng gấp đôi vào năm 2040 do dân số già hóa nhanh.</p>
<p>Hiện tại, lecanemab và donanemab chưa được cấp phép tại Việt Nam và chi phí còn rất cao (khoảng 26.500 USD/năm tại Mỹ cho lecanemab). Tuy nhiên, GS.TS Nguyễn Thanh Bình — Trưởng khoa Thần kinh, Bệnh viện Bạch Mai — cho biết: "Chúng tôi đang theo dõi sát và sẽ đề xuất Bộ Y tế xem xét cấp phép khi có đủ dữ liệu an toàn từ thực tiễn lâm sàng quốc tế."</p>

<blockquote style="border-left:4px solid #cc1f1f;padding:1rem 1.5rem;background:#fff5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Đây không phải thuốc chữa khỏi Alzheimer, nhưng là lần đầu tiên trong lịch sử chúng ta có công cụ can thiệp vào tiến trình bệnh. Đó là bước tiến khổng lồ."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#cc1f1f">— GS. David Knopman, Mayo Clinic, thành viên hội đồng cố vấn FDA</p>
</blockquote>

<h2>Dấu hiệu nhận biết Alzheimer sớm</h2>
<p>Vì hai loại thuốc trên chỉ hiệu quả ở giai đoạn sớm, việc phát hiện kịp thời là cực kỳ quan trọng. Các dấu hiệu cần chú ý:</p>
<ul>
<li>Quên thường xuyên, đặc biệt là sự kiện vừa xảy ra</li>
<li>Khó khăn trong lập kế hoạch hoặc giải quyết vấn đề</li>
<li>Lạc đường ở những nơi quen thuộc</li>
<li>Thay đổi tính cách, dễ lo lắng hoặc trầm cảm</li>
<li>Khó tìm từ khi nói chuyện</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• FDA: "FDA Grants Traditional Approval to Leqembi for Alzheimer's Disease" (tháng 7/2023)<br/>
• FDA: "FDA Approves Treatment for Adults with Alzheimer's Disease" — Donanemab (tháng 7/2024)<br/>
• New England Journal of Medicine: "Lecanemab in Early Alzheimer's Disease" (2023)<br/>
• JAMA: "Donanemab in Early Symptomatic Alzheimer's Disease — TRAILBLAZER-ALZ 2" (2024)<br/>
• Bệnh viện Lão khoa Trung ương: Báo cáo nghiên cứu sa sút trí tuệ Việt Nam (2023)<br/>
• Báo Sức khỏe & Đời sống: "Thuốc điều trị Alzheimer mới — kỳ vọng lớn cho bệnh nhân Việt" (2024)<br/>
• VnExpress: "FDA phê duyệt thuốc Alzheimer đột phá" (2024)</p>`
  }

];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  const admin = await User.findOne({ role: 'admin' });
  if (!admin) { console.error('Không tìm thấy admin user'); process.exit(1); }

  let added = 0;
  for (const p of posts) {
    const exists = await Post.findOne({ title: p.title });
    if (exists) { console.log('Bỏ qua (đã tồn tại):', p.title); continue; }
    await Post.create({ ...p, author: admin._id });
    console.log('✅ Đã thêm:', p.title);
    added++;
  }
  console.log(`\nHoàn thành: thêm ${added}/${posts.length} bài`);
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });
