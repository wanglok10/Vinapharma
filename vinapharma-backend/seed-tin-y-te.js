// Seed 5 bài Tin Y tế — node seed-tin-y-te.js
if (require.main === module) {
  require('dotenv').config();
}
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');

const posts = [

  // ── BÀI 1: VACCINE CÚM ───────────────────────────────────────────────────
  {
    title: 'Vắc-xin cúm mùa 2025–2026: Ai cần tiêm, tiêm khi nào và những điều cần biết trước khi tiêm',
    category: 'Tin Y tế', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80',
    excerpt: 'Cúm mùa gây ra 650.000 ca tử vong mỗi năm trên toàn thế giới theo WHO. Tại Việt Nam, mùa cúm thường đỉnh điểm vào tháng 9–11 và tháng 3–4. Vắc-xin cúm là biện pháp phòng ngừa hiệu quả nhất — nhưng cần tiêm đúng thời điểm, đúng đối tượng.',
    readTime: 7, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Vắc-xin cúm', 'Phòng bệnh', 'Cúm mùa', 'Tiêm chủng', 'Tin Y tế'],
    content: `<p>Cúm (influenza) không phải cảm thông thường — đây là bệnh nhiễm khuẩn đường hô hấp cấp tính do virus influenza A hoặc B gây ra. Các triệu chứng nặng hơn nhiều: sốt cao đột ngột 39–40°C, đau cơ toàn thân, mệt lả trong 1–2 tuần. Với người cao tuổi, trẻ nhỏ và người có bệnh nền, cúm có thể dẫn đến viêm phổi, nhập viện và tử vong.</p>

<img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=80" alt="Tiêm vắc-xin cúm phòng bệnh" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Vắc-xin cúm hoạt động như thế nào?</h2>
<p>Virus cúm biến đổi liên tục — đặc biệt là protein bề mặt Hemagglutinin (H) và Neuraminidase (N). Đó là lý do vắc-xin cúm cần <strong>cập nhật thành phần mỗi năm</strong> dựa trên dự báo của WHO về chủng virus lưu hành mùa tới. Vắc-xin kích thích hệ miễn dịch tạo kháng thể — khi virus thật xâm nhập, cơ thể nhận diện và tiêu diệt nhanh hơn.</p>

<h2>Ai cần tiêm vắc-xin cúm?</h2>
<p>Bộ Y tế Việt Nam và CDC Hoa Kỳ khuyến nghị <strong>tất cả mọi người từ 6 tháng tuổi trở lên</strong> nên tiêm cúm hàng năm. Ưu tiên đặc biệt cho:</p>
<ul>
<li>Phụ nữ mang thai (bất kỳ giai đoạn nào của thai kỳ)</li>
<li>Trẻ em từ 6 tháng đến 5 tuổi</li>
<li>Người cao tuổi từ 65 tuổi trở lên</li>
<li>Người có bệnh mạn tính: tiểu đường, tim mạch, phổi mạn tính, suy thận, HIV</li>
<li>Nhân viên y tế</li>
<li>Người sống cùng hoặc chăm sóc các đối tượng nguy cơ cao</li>
</ul>

<blockquote style="border-left:4px solid #1976d2;padding:1rem 1.5rem;background:#e3f2fd;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Vắc-xin cúm giảm 40–60% nguy cơ mắc bệnh trong các mùa khi thành phần vắc-xin phù hợp với virus lưu hành. Dù hiệu quả không tuyệt đối, người đã tiêm khi bị nhiễm sẽ có triệu chứng nhẹ hơn và ít phải nhập viện hơn đáng kể."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#1976d2">— CDC Hoa Kỳ: "Vaccine Effectiveness — How well do flu vaccines work?" (2024)</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80" alt="Phòng ngừa bệnh cúm mùa" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Tiêm vắc-xin cúm khi nào là tốt nhất?</h2>
<p>Tại Việt Nam, nên tiêm vắc-xin cúm <strong>trước mùa cúm 2–4 tuần</strong> để cơ thể kịp tạo kháng thể. Lý tưởng nhất là tiêm vào tháng 8–9 (trước mùa cúm thu đông) và tháng 1–2 (trước mùa cúm xuân hè). Hiệu quả bảo vệ kéo dài khoảng 6–12 tháng.</p>

<h2>Tác dụng phụ thường gặp</h2>
<ul>
<li><strong>Tại chỗ tiêm:</strong> Đau, đỏ, sưng nhẹ — tự khỏi trong 1–2 ngày</li>
<li><strong>Toàn thân:</strong> Sốt nhẹ, mệt mỏi, đau đầu — thường trong 24–48 giờ</li>
<li><strong>Phản ứng nặng (hiếm gặp):</strong> Dị ứng nặng xảy ra trong vòng 15–30 phút — vì vậy cần ở lại cơ sở y tế 30 phút sau tiêm</li>
</ul>

<h2>Có thể tiêm cúm khi đang bệnh không?</h2>
<p>Không nên tiêm khi đang sốt hoặc mắc bệnh cấp tính. Hoãn tiêm đến khi hồi phục. Các trường hợp cảm nhẹ, không sốt có thể tiêm bình thường. Người dị ứng nặng với trứng cần tham khảo bác sĩ trước (hầu hết vắc-xin cúm được nuôi cấy trên trứng gà).</p>

<h2>Phòng ngừa cúm không cần vắc-xin</h2>
<ul>
<li>Rửa tay thường xuyên với xà phòng, ít nhất 20 giây</li>
<li>Đeo khẩu trang nơi đông người trong mùa cúm</li>
<li>Tránh chạm tay vào mắt, mũi, miệng</li>
<li>Ở nhà khi có triệu chứng để tránh lây lan</li>
<li>Tăng cường miễn dịch: ngủ đủ giấc, ăn đủ dinh dưỡng, tập thể dục vừa phải</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• WHO: "Influenza (Seasonal) Fact Sheet" (2023)<br/>
• CDC: "Vaccine Effectiveness — How well do flu vaccines work?" (2024)<br/>
• Bộ Y tế Việt Nam: Hướng dẫn tiêm chủng phòng bệnh cúm mùa (2024)<br/>
• Viện Vệ sinh Dịch tễ Trung ương: Báo cáo giám sát cúm Việt Nam 2023–2024</p>`
  },

  // ── BÀI 2: KHÁNG SINH ────────────────────────────────────────────────────
  {
    title: 'Kháng kháng sinh — mối đe dọa y tế lớn nhất thế kỷ 21: Việt Nam đang ở đâu trên bản đồ nguy cơ?',
    category: 'Tin Y tế', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=1200&q=80',
    excerpt: 'WHO cảnh báo kháng kháng sinh có thể gây ra 10 triệu ca tử vong mỗi năm vào 2050 — vượt qua cả ung thư. Việt Nam nằm trong nhóm quốc gia có tỷ lệ kháng kháng sinh cao nhất khu vực. Tại sao và chúng ta cần làm gì ngay bây giờ?',
    readTime: 8, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Kháng kháng sinh', 'Tin Y tế', 'Sức khỏe cộng đồng', 'Kháng sinh', 'AMR'],
    content: `<p>Năm 2023, một nghiên cứu lớn đăng trên <em>The Lancet</em> ước tính kháng kháng sinh (Antimicrobial Resistance — AMR) trực tiếp gây ra <strong>1.27 triệu ca tử vong</strong> mỗi năm toàn cầu — và liên quan đến gần 5 triệu ca tử vong khác. Con số này đã vượt qua AIDS và sốt rét cộng lại.</p>

<img src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=900&q=80" alt="Kháng kháng sinh mối đe dọa y tế" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Kháng kháng sinh xảy ra như thế nào?</h2>
<p>Vi khuẩn tiến hóa liên tục. Khi tiếp xúc với kháng sinh, phần lớn vi khuẩn chết — nhưng một số ít mang đột biến gen cho phép chúng sống sót và nhân lên. Những vi khuẩn "siêu kháng thuốc" này sau đó lây lan sang người khác.</p>
<p>Vấn đề: <strong>chúng ta đang dùng kháng sinh quá nhiều, quá bừa bãi</strong>, tạo áp lực tiến hóa liên tục lên vi khuẩn. Trong khi đó, các hãng dược ít đầu tư phát triển kháng sinh mới vì lợi nhuận thấp — "đường ống" kháng sinh mới gần như cạn kiệt.</p>

<h2>Việt Nam — điểm nóng kháng kháng sinh</h2>
<p>Nhiều nghiên cứu chỉ ra Việt Nam có tỷ lệ kháng kháng sinh thuộc hàng cao nhất Đông Nam Á:</p>
<ul>
<li>Hơn <strong>70% kháng sinh bán không cần đơn thuốc</strong> tại các nhà thuốc (nghiên cứu 2020)</li>
<li>Tỷ lệ vi khuẩn E. coli kháng fluoroquinolone lên đến 60–70%</li>
<li>Klebsiella pneumoniae kháng carbapenem (kháng sinh "cuối cùng") đang gia tăng trong bệnh viện</li>
<li>Kháng sinh được dùng rộng rãi trong nuôi trồng thủy sản và chăn nuôi, phát tán vào môi trường và thực phẩm</li>
</ul>

<blockquote style="border-left:4px solid #1976d2;padding:1rem 1.5rem;background:#e3f2fd;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Nếu không hành động ngay, chúng ta sẽ đối mặt với kịch bản hậu kháng sinh — nơi các ca phẫu thuật thông thường, điều trị ung thư hay sinh con đều trở nên nguy hiểm chết người vì nhiễm trùng không thể kiểm soát."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#1976d2">— Dr. Tedros Adhanom Ghebreyesus, Tổng Giám đốc WHO (2023)</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80" alt="Thuốc kháng sinh sử dụng đúng cách" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Những sai lầm phổ biến của người dùng kháng sinh tại Việt Nam</h2>
<ul>
<li><strong>Tự mua kháng sinh không cần đơn</strong> khi bị cảm, ho, tiêu chảy — phần lớn do virus, kháng sinh không có tác dụng</li>
<li><strong>Uống nửa liều rồi bỏ</strong> khi thấy đỡ — vi khuẩn chưa chết hết có cơ hội phát triển đề kháng</li>
<li><strong>Dùng lại kháng sinh cũ</strong> từ lần bệnh trước cho bệnh khác</li>
<li><strong>Yêu cầu bác sĩ kê kháng sinh</strong> dù không cần thiết</li>
</ul>

<h2>Nguyên tắc dùng kháng sinh an toàn</h2>
<ul>
<li>Chỉ dùng kháng sinh khi có chỉ định của bác sĩ sau thăm khám</li>
<li>Uống <strong>đúng liều, đúng thời gian</strong> theo đơn — không tự ý bỏ dở</li>
<li>Không chia sẻ kháng sinh của bạn cho người khác</li>
<li>Không giữ kháng sinh thừa để dùng lần sau</li>
<li>Hỏi bác sĩ: "Bệnh này có thực sự cần kháng sinh không?"</li>
</ul>

<h2>Việt Nam đang làm gì?</h2>
<p>Bộ Y tế Việt Nam đã ban hành Kế hoạch hành động quốc gia về chống kháng thuốc giai đoạn 2023–2030, với mục tiêu: yêu cầu đơn thuốc cho tất cả kháng sinh, tăng cường giám sát vi khuẩn kháng thuốc trong bệnh viện và giảm 30% kháng sinh trong chăn nuôi vào 2030.</p>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Murray C.J.L. et al.: "Global burden of bacterial antimicrobial resistance in 2019" — The Lancet (2022)<br/>
• WHO: "Antimicrobial Resistance Global Report on Surveillance" (2023)<br/>
• Nguyen K.V. et al.: "Antibiotic use and resistance in emerging economies" — BMC Health Serv Res (2020)<br/>
• Bộ Y tế Việt Nam: Kế hoạch hành động quốc gia về chống kháng thuốc 2023–2030</p>`
  },

  // ── BÀI 3: UNG THƯ PHỔI ─────────────────────────────────────────────────
  {
    title: 'Ung thư phổi tại Việt Nam: Tăng mạnh ở người không hút thuốc và những dấu hiệu cảnh báo sớm',
    category: 'Tin Y tế', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=80',
    excerpt: 'Ung thư phổi là nguyên nhân gây tử vong do ung thư hàng đầu tại Việt Nam với hơn 23.000 ca mới mỗi năm. Đáng lo ngại, tỷ lệ ung thư phổi ở người không hút thuốc — đặc biệt phụ nữ — đang tăng mạnh do ô nhiễm không khí và khói bếp. Phát hiện sớm có thể tăng tỷ lệ sống 5 năm lên 5 lần.',
    readTime: 8, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Ung thư phổi', 'Ung thư', 'Tin Y tế', 'Phòng bệnh', 'Tầm soát'],
    content: `<p>Theo GLOBOCAN 2022, ung thư phổi là loại ung thư <strong>phổ biến thứ 2</strong> và là nguyên nhân tử vong do ung thư hàng đầu tại Việt Nam, với khoảng 23.667 ca mới và 20.892 ca tử vong mỗi năm. Điều đáng lo ngại: ngày càng nhiều bệnh nhân là phụ nữ và người không bao giờ hút thuốc.</p>

<img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80" alt="Phòng ngừa ung thư phổi" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Tại sao người không hút thuốc vẫn bị ung thư phổi?</h2>
<p>Khoảng 15–20% ca ung thư phổi xảy ra ở người chưa bao giờ hút thuốc. Tại châu Á — và đặc biệt ở phụ nữ Việt Nam — tỷ lệ này còn cao hơn. Các nguyên nhân chính:</p>
<ul>
<li><strong>Ô nhiễm không khí:</strong> Hạt bụi mịn PM2.5 thâm nhập sâu vào phổi. Hà Nội và TP.HCM thường xuyên có chỉ số AQI ở mức không lành mạnh</li>
<li><strong>Khói bếp củi/than:</strong> Phụ nữ nấu ăn bằng bếp truyền thống tiếp xúc khói độc hàng ngày — tương đương hút 2 bao thuốc/ngày</li>
<li><strong>Khí Radon:</strong> Khí phóng xạ tự nhiên từ đất đá, tích tụ trong nhà thông gió kém — nguyên nhân hàng đầu ung thư phổi ở người không hút thuốc</li>
<li><strong>Đột biến gen EGFR:</strong> Phổ biến hơn ở người châu Á không hút thuốc — tin tốt là nhóm này đáp ứng tốt với thuốc nhắm trúng đích</li>
</ul>

<blockquote style="border-left:4px solid #1976d2;padding:1rem 1.5rem;background:#e3f2fd;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Ung thư phổi phát hiện ở giai đoạn I có tỷ lệ sống 5 năm lên đến 70–90%. Phát hiện ở giai đoạn IV chỉ còn 5–10%. Đây chính là lý do tầm soát sớm bằng CT liều thấp có ý nghĩa sống còn."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#1976d2">— TS. Nguyễn Việt Long, Bệnh viện Phổi Trung ương</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&q=80" alt="Khám tầm soát ung thư phổi" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Dấu hiệu cảnh báo sớm — đừng bỏ qua</h2>
<p>Ung thư phổi giai đoạn sớm thường <strong>không có triệu chứng</strong>. Khi triệu chứng xuất hiện, bệnh thường đã tiến triển. Tuy nhiên, hãy đi khám ngay nếu có:</p>
<ul>
<li>Ho kéo dài hơn 3 tuần, đặc biệt ho ra máu dù chỉ một lần</li>
<li>Khó thở không giải thích được dù không vận động nhiều</li>
<li>Đau ngực liên tục, đặc biệt khi hít thở sâu</li>
<li>Khàn giọng kéo dài</li>
<li>Sụt cân không rõ nguyên nhân (&gt;5% trong 1 tháng)</li>
<li>Mệt mỏi mạn tính, ăn không ngon</li>
</ul>

<h2>Ai nên tầm soát ung thư phổi?</h2>
<p>Theo hướng dẫn của Mỹ (USPSTF) và đang được áp dụng tại Việt Nam, tầm soát bằng <strong>CT liều thấp (LDCT)</strong> hàng năm được khuyến nghị cho:</p>
<ul>
<li>Tuổi 50–80</li>
<li>Hút thuốc &gt;20 gói-năm (1 gói/ngày × 20 năm)</li>
<li>Đang hút hoặc bỏ thuốc dưới 15 năm</li>
</ul>
<p>Nghiên cứu NLST cho thấy LDCT giảm 20% tử vong do ung thư phổi ở nhóm nguy cơ cao so với X-quang thông thường.</p>

<h2>Tiến bộ điều trị mới nhất 2024–2025</h2>
<ul>
<li><strong>Liệu pháp nhắm trúng đích (Targeted therapy):</strong> EGFR inhibitors (osimertinib), ALK inhibitors — hiệu quả vượt trội với đột biến gen đặc hiệu</li>
<li><strong>Miễn dịch trị liệu (Immunotherapy):</strong> PD-1/PD-L1 inhibitors như pembrolizumab đã được Bộ Y tế Việt Nam phê duyệt</li>
<li><strong>SBRT (Stereotactic Body Radiotherapy):</strong> Xạ trị định vị thân chính xác cao, ít tác dụng phụ cho bệnh nhân không phẫu thuật được</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• GLOBOCAN 2022: "Global Cancer Statistics" — CA Cancer J Clin (2024)<br/>
• USPSTF: "Lung Cancer Screening Recommendation Statement" (2021)<br/>
• National Lung Screening Trial Research Team: "Reduced Lung-Cancer Mortality with Low-Dose Computed Tomographic Screening" — NEJM (2011)<br/>
• Bộ Y tế Việt Nam: Hướng dẫn chẩn đoán và điều trị ung thư phổi (2023)<br/>
• Bệnh viện Phổi Trung ương: Báo cáo tình hình ung thư phổi Việt Nam 2024</p>`
  },

  // ── BÀI 4: SỨC KHỎE TÂM THẦN ────────────────────────────────────────────
  {
    title: 'Sức khỏe tâm thần tại Việt Nam 2025: Khủng hoảng thầm lặng và hướng tiếp cận mới',
    category: 'Tin Y tế', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=1200&q=80',
    excerpt: 'Hơn 15% dân số Việt Nam mắc rối loạn tâm thần theo WHO, nhưng chỉ khoảng 20% trong số đó được tiếp cận dịch vụ chăm sóc phù hợp. Kỳ thị xã hội vẫn là rào cản lớn nhất. Bài viết cập nhật tình hình và những thay đổi tích cực trong chính sách y tế tâm thần tại Việt Nam.',
    readTime: 7, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Sức khỏe tâm thần', 'Trầm cảm', 'Lo âu', 'Tin Y tế', 'Tâm lý'],
    content: `<p>Theo Báo cáo Sức khỏe Tâm thần Toàn cầu của WHO (2022), <strong>1 trong 8 người trên thế giới</strong> sống chung với rối loạn tâm thần. Tại Việt Nam, ước tính khoảng 15 triệu người — tương đương 15% dân số — đang đối mặt với các vấn đề tâm thần từ nhẹ đến nặng. Hậu COVID-19, con số này tăng đáng kể.</p>

<img src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=900&q=80" alt="Sức khỏe tâm thần cộng đồng" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Những rối loạn tâm thần phổ biến nhất tại Việt Nam</h2>
<ul>
<li><strong>Trầm cảm:</strong> Ước tính 3–5% dân số, phổ biến hơn ở phụ nữ (tỷ lệ 2:1), thường không được chẩn đoán vì biểu hiện bằng các triệu chứng thể chất (đau đầu, mệt mỏi, rối loạn tiêu hóa)</li>
<li><strong>Rối loạn lo âu:</strong> 4–6% dân số, tăng mạnh ở giới trẻ 18–35 tuổi</li>
<li><strong>Rối loạn sau sang chấn (PTSD):</strong> Liên quan đến các sự kiện gây sang chấn, tai nạn, thiên tai</li>
<li><strong>Rối loạn sử dụng chất:</strong> Nghiện rượu phổ biến ở nam giới, ước tính 5–7% nam trưởng thành</li>
</ul>

<blockquote style="border-left:4px solid #1976d2;padding:1rem 1.5rem;background:#e3f2fd;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Khoảng cách điều trị (treatment gap) tại Việt Nam rất lớn: chỉ 1 bác sĩ tâm thần trên 100.000 dân, so với mức khuyến nghị là 3–5 bác sĩ. Điều này có nghĩa hầu hết người cần hỗ trợ không thể tiếp cận dịch vụ."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#1976d2">— Báo cáo Sức khỏe Tâm thần Việt Nam, WHO Hà Nội (2023)</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=900&q=80" alt="Tư vấn tâm lý hỗ trợ sức khỏe tâm thần" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Kỳ thị — rào cản lớn nhất</h2>
<p>Khảo sát của Viện Sức khỏe Tâm thần Quốc gia (2023): hơn <strong>60% người Việt</strong> cảm thấy xấu hổ khi chia sẻ vấn đề tâm lý với người thân, 45% sợ bị kỳ thị nếu đi khám tâm thần. Nhiều người tìm đến thầy bói, cúng bái hoặc chịu đựng trong im lặng trước khi đến cơ sở y tế — thường đã ở giai đoạn muộn.</p>

<h2>Dấu hiệu cần tìm kiếm hỗ trợ chuyên nghiệp</h2>
<ul>
<li>Buồn bã, trống rỗng hoặc vô vọng kéo dài hơn 2 tuần</li>
<li>Mất hứng thú với những thứ từng yêu thích</li>
<li>Rối loạn giấc ngủ (mất ngủ hoặc ngủ quá nhiều)</li>
<li>Khó tập trung, trí nhớ giảm sút ảnh hưởng công việc</li>
<li>Có suy nghĩ về cái chết hoặc tự làm hại bản thân — <strong>cần hỗ trợ khẩn cấp ngay</strong></li>
</ul>

<h2>Tiến bộ trong chính sách y tế tâm thần Việt Nam 2024–2025</h2>
<ul>
<li>Bộ Y tế đưa sức khỏe tâm thần vào Chương trình Sức khỏe Quốc gia giai đoạn 2023–2030</li>
<li>Mở rộng mạng lưới tư vấn tâm lý học đường tại 63 tỉnh/thành</li>
<li>Triển khai dịch vụ tư vấn tâm lý trực tuyến và qua điện thoại</li>
<li>Đường dây hỗ trợ sức khỏe tâm thần miễn phí: <strong>1800 599 920</strong> (Bộ Y tế)</li>
</ul>

<h2>Tự chăm sóc sức khỏe tâm thần hàng ngày</h2>
<ul>
<li><strong>Vận động thể chất:</strong> 30 phút đi bộ/ngày có hiệu quả chống trầm cảm tương đương một số thuốc ở mức độ nhẹ-vừa</li>
<li><strong>Kết nối xã hội:</strong> Duy trì các mối quan hệ ý nghĩa — yếu tố bảo vệ mạnh nhất</li>
<li><strong>Giới hạn mạng xã hội:</strong> &lt;2 giờ/ngày, đặc biệt trước khi ngủ</li>
<li><strong>Thiền và mindfulness:</strong> Bằng chứng lâm sàng cho thấy hiệu quả giảm lo âu và trầm cảm</li>
<li><strong>Ngủ đủ giấc:</strong> Rối loạn giấc ngủ và rối loạn tâm thần có mối quan hệ hai chiều</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• WHO: "World Mental Health Report: Transforming Mental Health for All" (2022)<br/>
• Viện Sức khỏe Tâm thần Quốc gia: Báo cáo tình hình sức khỏe tâm thần Việt Nam (2023)<br/>
• Blumenthal J.A. et al.: "Exercise and Pharmacotherapy in the Treatment of Major Depressive Disorder" — Psychosom Med (2007)<br/>
• Bộ Y tế Việt Nam: Chương trình Sức khỏe Tâm thần Quốc gia 2023–2030</p>`
  },

  // ── BÀI 5: ĐÁI THÁO ĐƯỜNG TYPE 2 ────────────────────────────────────────
  {
    title: 'Việt Nam đứng thứ 10 thế giới về tiểu đường: Báo động tình trạng tiền đái tháo đường ở người trẻ',
    category: 'Tin Y tế', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80',
    excerpt: 'Gần 7 triệu người Việt Nam mắc đái tháo đường và 55% chưa được chẩn đoán. Đáng lo hơn, tiền đái tháo đường đang bùng phát ở nhóm 25–45 tuổi do thay đổi lối sống. Phát hiện và can thiệp sớm có thể đảo ngược hoàn toàn tình trạng tiền đái tháo đường.',
    readTime: 8, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Tiểu đường', 'Đái tháo đường', 'Tin Y tế', 'Đường huyết', 'Phòng bệnh'],
    content: `<p>Theo Liên đoàn Đái tháo đường Quốc tế (IDF) năm 2023, Việt Nam có khoảng <strong>6.9 triệu người mắc đái tháo đường</strong> — xếp thứ 10 tại châu Á Thái Bình Dương. Điều đặc biệt lo ngại: 55% bệnh nhân chưa được chẩn đoán, và tỷ lệ tiền đái tháo đường đang tăng nhanh ở người trẻ tuổi lao động.</p>

<img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80" alt="Kiểm soát đường huyết phòng tiểu đường" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Tiền đái tháo đường — giai đoạn vàng để can thiệp</h2>
<p>Tiền đái tháo đường (prediabetes) là trạng thái đường huyết cao hơn bình thường nhưng chưa đạt ngưỡng đái tháo đường. Theo IDF, ước tính <strong>30–40% người Việt trưởng thành</strong> đang ở giai đoạn này mà không biết.</p>

<table style="width:100%;border-collapse:collapse;margin:1.5rem 0">
<tr style="background:#e3f2fd">
<th style="padding:.75rem;text-align:left;border:1px solid #bbdefb">Chỉ số</th>
<th style="padding:.75rem;text-align:left;border:1px solid #bbdefb">Bình thường</th>
<th style="padding:.75rem;text-align:left;border:1px solid #bbdefb">Tiền ĐTĐ</th>
<th style="padding:.75rem;text-align:left;border:1px solid #bbdefb">Đái tháo đường</th>
</tr>
<tr><td style="padding:.75rem;border:1px solid #bbdefb">Đường huyết lúc đói</td><td style="padding:.75rem;border:1px solid #bbdefb">&lt;100 mg/dL</td><td style="padding:.75rem;border:1px solid #bbdefb">100–125 mg/dL</td><td style="padding:.75rem;border:1px solid #bbdefb">≥126 mg/dL</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #bbdefb">HbA1c</td><td style="padding:.75rem;border:1px solid #bbdefb">&lt;5.7%</td><td style="padding:.75rem;border:1px solid #bbdefb">5.7–6.4%</td><td style="padding:.75rem;border:1px solid #bbdefb">≥6.5%</td></tr>
<tr><td style="padding:.75rem;border:1px solid #bbdefb">Đường huyết 2h sau nghiệm pháp</td><td style="padding:.75rem;border:1px solid #bbdefb">&lt;140 mg/dL</td><td style="padding:.75rem;border:1px solid #bbdefb">140–199 mg/dL</td><td style="padding:.75rem;border:1px solid #bbdefb">≥200 mg/dL</td></tr>
</table>

<p><strong>Tin tốt:</strong> Nghiên cứu DPP (Diabetes Prevention Program) của NIH Mỹ — theo dõi 3.234 người tiền đái tháo đường — chứng minh can thiệp lối sống (giảm 5–7% cân nặng + 150 phút/tuần vận động vừa) giảm <strong>58% nguy cơ tiến triển thành đái tháo đường thật</strong>, hiệu quả hơn cả thuốc metformin (31%).</p>

<blockquote style="border-left:4px solid #1976d2;padding:1rem 1.5rem;background:#e3f2fd;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Tiền đái tháo đường hoàn toàn có thể đảo ngược. Một người giảm được 7% cân nặng và duy trì vận động 150 phút/tuần có thể đưa đường huyết về vùng bình thường và duy trì như vậy nhiều năm."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#1976d2">— Knowler W.C. et al., New England Journal of Medicine (2002)</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80" alt="Vận động thể chất phòng tiểu đường" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Tại sao người trẻ Việt ngày càng mắc tiền đái tháo đường?</h2>
<ul>
<li><strong>Đô thị hóa nhanh:</strong> Chuyển từ lao động chân tay sang văn phòng — ít vận động hơn nhiều</li>
<li><strong>Chế độ ăn thay đổi:</strong> Tăng tiêu thụ đồ ăn nhanh, nước ngọt, cơm trắng GI cao</li>
<li><strong>Béo phì trung tâm:</strong> Người châu Á có nguy cơ kháng insulin ngay cả ở BMI "bình thường" nếu mỡ tập trung ở bụng</li>
<li><strong>Thiếu ngủ mạn tính:</strong> Ngủ &lt;6 giờ/đêm tăng nguy cơ kháng insulin 33%</li>
</ul>

<h2>Ai nên xét nghiệm tầm soát?</h2>
<p>Bộ Y tế và ADA (Hiệp hội Đái tháo đường Mỹ) khuyến nghị xét nghiệm đường huyết lúc đói và HbA1c với:</p>
<ul>
<li>Người từ 35 tuổi trở lên (xét nghiệm mỗi 3 năm nếu bình thường)</li>
<li>Thừa cân/béo phì (BMI ≥23 với người châu Á)</li>
<li>Cha/mẹ/anh chị em ruột mắc tiểu đường</li>
<li>Phụ nữ từng mắc đái tháo đường thai kỳ</li>
<li>Tăng huyết áp, rối loạn mỡ máu, tiền sử bệnh tim mạch</li>
</ul>

<h2>Cập nhật điều trị đái tháo đường type 2 tại Việt Nam 2025</h2>
<ul>
<li><strong>GLP-1 receptor agonists</strong> (semaglutide, liraglutide): Được Bộ Y tế phê duyệt, giảm đường huyết + giảm cân + bảo vệ tim mạch</li>
<li><strong>SGLT-2 inhibitors</strong> (empagliflozin, dapagliflozin): Bảo vệ thận và tim mạch, giảm nhập viện vì suy tim</li>
<li><strong>Công nghệ theo dõi đường huyết liên tục (CGM):</strong> Ngày càng phổ biến và giảm chi phí tại Việt Nam</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• IDF Diabetes Atlas 10th Edition (2021)<br/>
• Knowler W.C. et al.: "Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin" — NEJM (2002)<br/>
• Bộ Y tế Việt Nam: Hướng dẫn chẩn đoán và điều trị đái tháo đường type 2 (2023)<br/>
• Bệnh viện Nội tiết Trung ương: Báo cáo tình hình đái tháo đường Việt Nam 2023–2024<br/>
• American Diabetes Association: "Standards of Care in Diabetes" (2025)</p>`
  }

];

module.exports = { SEED_DATA: posts };

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
  console.log(`\nHoàn tất: ${added} bài đã thêm.`);
  process.exit(0);
}

if (require.main === module) {
  seed().catch(e => { console.error(e); process.exit(1); });
}
