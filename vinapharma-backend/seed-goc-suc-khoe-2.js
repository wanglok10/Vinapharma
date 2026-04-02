// Seed 5 bài Góc Sức Khỏe (phần 2) — node seed-goc-suc-khoe-2.js
// Có thể chạy: node seed-goc-suc-khoe-2.js
// Hoặc gọi qua API endpoint: POST /api/posts/admin-seed { seedKey: 'goc-suc-khoe-2' }
if (require.main === module) {
  require('dotenv').config();
}
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');

const posts = [

  // ── BÀI 1: XƯƠNG KHỚP / LOÃNG XƯƠNG ─────────────────────────────────────
  {
    title: 'Loãng xương thầm lặng: Dấu hiệu nhận biết sớm và 8 cách bảo vệ xương chắc khỏe suốt đời',
    category: 'Góc sức khỏe', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    excerpt: 'Loãng xương được gọi là "kẻ trộm thầm lặng" vì không gây đau đớn cho đến khi xương gãy. Tại Việt Nam, ước tính 3,6 triệu người mắc loãng xương, trong đó hơn 70% là phụ nữ sau mãn kinh. Bài viết giải mã cơ chế, dấu hiệu cảnh báo và chiến lược khoa học để bảo vệ xương từ hôm nay.',
    readTime: 8, published: true,
    publishedAt: new Date('2026-01-10'),
    tags: ['Loãng xương', 'Xương khớp', 'Canxi', 'Vitamin D', 'Phòng bệnh'],
    content: `<p>Mỗi năm tại Việt Nam có khoảng <strong>170.000 ca gãy xương do loãng xương</strong>, trong đó gãy cổ xương đùi có tỷ lệ tử vong lên đến 20–30% trong vòng một năm đầu. Đáng lo hơn, 80% người mắc loãng xương không biết mình có bệnh cho đến khi gãy xương xảy ra.</p>

<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80" alt="Sức khỏe xương khớp và loãng xương" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Loãng xương là gì và tại sao nguy hiểm?</h2>
<p>Xương không phải cơ quan tĩnh — chúng liên tục được <strong>tái tạo</strong> theo chu kỳ: tế bào hủy xương (osteoclast) phá vỡ xương cũ, tế bào tạo xương (osteoblast) xây dựng xương mới. Đến khoảng 30 tuổi, xương đạt mật độ tối đa. Sau đó, quá trình phá hủy dần vượt quá tái tạo — đặc biệt ở phụ nữ sau mãn kinh khi estrogen giảm mạnh.</p>
<p>Loãng xương xảy ra khi mật độ xương giảm đến mức cấu trúc xương trở nên xốp và dễ gãy, ngay cả với chấn thương nhẹ như vấp ngã, ho mạnh hoặc cúi người.</p>

<h2>Ai có nguy cơ cao?</h2>
<ul>
<li>Phụ nữ sau mãn kinh (nguy cơ cao nhất — mất đến 20% mật độ xương trong 5–7 năm đầu sau mãn kinh)</li>
<li>Nam giới trên 70 tuổi</li>
<li>Người ít vận động, ít tiếp xúc ánh nắng</li>
<li>Người dùng corticosteroid dài hạn</li>
<li>Người hút thuốc lá, uống nhiều rượu bia</li>
<li>Người có tiền sử gia đình gãy xương hông</li>
<li>Người mắc các bệnh nội tiết: cường giáp, tiểu đường type 1, suy thận</li>
</ul>

<img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80" alt="Bài tập thể dục tốt cho xương" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>8 chiến lược khoa học bảo vệ xương</h2>

<h3>1. Đảm bảo đủ canxi mỗi ngày</h3>
<p>Nhu cầu canxi theo độ tuổi (theo Hội Nội tiết – Loãng xương Việt Nam):</p>
<ul>
<li>Người trưởng thành 19–50 tuổi: <strong>1.000 mg/ngày</strong></li>
<li>Phụ nữ trên 50 và nam trên 70 tuổi: <strong>1.200 mg/ngày</strong></li>
</ul>
<p>Nguồn canxi tốt nhất từ thực phẩm: sữa và các chế phẩm từ sữa, cá nhỏ ăn cả xương (cá mòi, cá cơm), đậu phụ, rau lá xanh đậm (cải xanh, rau muống), hạt mè.</p>

<h3>2. Vitamin D — "chìa khóa" hấp thu canxi</h3>
<p>Vitamin D tăng hấp thu canxi từ ruột lên 30–40%. Thiếu vitamin D, canxi bạn ăn phần lớn bị thải ra ngoài. Nguồn vitamin D: ánh nắng mặt trời (15–20 phút/ngày, trước 10h sáng), cá béo, lòng đỏ trứng, gan bò. Nhiều người Việt Nam thiếu vitamin D dù sống ở vùng nhiệt đới do tránh nắng quá mức.</p>

<h3>3. Tập thể dục chịu trọng lượng</h3>
<p>Xương cần áp lực cơ học để kích thích tạo xương. Các bài tập tốt nhất: đi bộ, chạy bộ, khiêu vũ, tập tạ nhẹ, yoga. Bơi lội và đạp xe ít tác dụng cho xương vì không có trọng lực.</p>

<h3>4. Bỏ thuốc lá — hạn chế rượu bia</h3>
<p>Nicotine ức chế tế bào tạo xương và giảm hấp thu canxi. Rượu bia làm giảm sản xuất testosterone và estrogen — hai hormone bảo vệ xương. Uống quá 2 đơn vị rượu/ngày tăng nguy cơ gãy xương hông 40%.</p>

<h3>5. Hạn chế caffeine và muối</h3>
<p>Caffeine và natri (muối) đều làm tăng bài tiết canxi qua nước tiểu. Uống quá 3 tách cà phê/ngày kết hợp chế độ ăn ít canxi là "công thức" tăng tốc loãng xương.</p>

<h3>6. Đo mật độ xương (DEXA scan) khi đến tuổi</h3>
<p>Phụ nữ từ 65 tuổi (hoặc sớm hơn nếu có yếu tố nguy cơ) và nam từ 70 tuổi nên đo mật độ xương. Kết quả T-score dưới −2,5 chẩn đoán loãng xương, từ −1 đến −2,5 là thiếu xương (osteopenia) — giai đoạn cần can thiệp sớm.</p>

<h3>7. Phòng tránh té ngã ở người cao tuổi</h3>
<p>Với người cao tuổi đã có loãng xương, phòng tránh té ngã quan trọng không kém điều trị. Lắp đặt tay vịn trong phòng tắm, không để thảm trơn, đảm bảo ánh sáng đầy đủ về đêm, kiểm tra thị lực định kỳ.</p>

<h3>8. Tuân thủ điều trị nếu đã được chẩn đoán</h3>
<p>Các thuốc bisphosphonate (alendronate, zoledronic acid) được chứng minh giảm 40–70% nguy cơ gãy xương. Điều trị cần kiên trì nhiều năm và kết hợp với thay đổi lối sống.</p>

<blockquote style="border-left:4px solid #cc1f1f;padding:1rem 1.5rem;background:#fff5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Loãng xương là bệnh của cả đời người, không phải chỉ của người già. Mật độ xương bạn xây dựng ở tuổi 20–30 là 'vốn liếng' xương cả đời — đầu tư vào đó là đầu tư thông minh nhất."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#cc1f1f">— PGS.TS Lê Anh Thư, Chủ tịch Hội Loãng xương TP.HCM</p>
</blockquote>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Hội Loãng xương TP.HCM: Hướng dẫn chẩn đoán và điều trị loãng xương (2024)<br/>
• International Osteoporosis Foundation: "Osteoporosis Facts & Statistics" (2023)<br/>
• Kanis J.A. et al.: "Assessment of fracture risk and its application to screening for postmenopausal osteoporosis" — WHO Technical Report (2022)<br/>
• Bộ Y tế Việt Nam: Hướng dẫn quốc gia về loãng xương và phòng ngừa gãy xương (2022)<br/>
• New England Journal of Medicine: "Bisphosphonates for Prevention of Osteoporotic Fractures" (2020)</p>`
  },

  // ── BÀI 2: ĐƯỜNG HUYẾT / TIỂU ĐƯỜNG TYPE 2 ──────────────────────────────
  {
    title: 'Tiểu đường type 2 hoàn toàn có thể phòng ngừa: 7 thay đổi lối sống giảm nguy cơ đến 58%',
    category: 'Góc sức khỏe', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80',
    excerpt: 'Việt Nam đang trong "cơn bão" tiểu đường: hơn 7 triệu người mắc, 55% chưa được chẩn đoán. Nhưng nghiên cứu Diabetes Prevention Program nổi tiếng chứng minh: chỉ với thay đổi lối sống, nguy cơ mắc tiểu đường type 2 giảm đến 58% — hiệu quả hơn cả thuốc metformin.',
    readTime: 9, published: true,
    publishedAt: new Date('2026-01-18'),
    tags: ['Tiểu đường', 'Đường huyết', 'Insulin', 'Phòng bệnh', 'Lối sống'],
    content: `<p>Năm 2023, Liên đoàn Tiểu đường Quốc tế (IDF) xếp Việt Nam vào nhóm quốc gia có tốc độ gia tăng tiểu đường nhanh nhất châu Á — với <strong>7,1 triệu người mắc tiểu đường</strong> và thêm 2 triệu người tiền tiểu đường. Con số này dự báo tăng lên 10 triệu vào năm 2045.</p>
<p>Điều đáng lo hơn: <strong>55% người mắc chưa biết mình có bệnh</strong> — đang âm thầm bị tổn thương thận, mắt, thần kinh và mạch máu.</p>

<img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900&q=80" alt="Kiểm soát đường huyết và phòng ngừa tiểu đường" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Tiểu đường type 2 khác gì type 1?</h2>
<p>Tiểu đường <strong>type 1</strong> là bệnh tự miễn — tế bào tuyến tụy bị phá hủy, không tạo được insulin. Bệnh thường khởi phát ở trẻ em và người trẻ, cần dùng insulin suốt đời.</p>
<p>Tiểu đường <strong>type 2</strong> (chiếm 90–95% ca tiểu đường) là bệnh liên quan đến lối sống: cơ thể vẫn tạo được insulin nhưng tế bào kháng insulin — glucose không vào được tế bào và tích tụ trong máu. Type 2 có thể phòng ngừa và đảo ngược ở giai đoạn sớm.</p>

<h2>Ai là tiền tiểu đường?</h2>
<p>Tiền tiểu đường (prediabetes) là khi đường huyết cao hơn bình thường nhưng chưa đủ để chẩn đoán tiểu đường:</p>
<ul>
<li>Đường huyết lúc đói: <strong>100–125 mg/dL</strong></li>
<li>HbA1c: <strong>5,7–6,4%</strong></li>
<li>Đường huyết 2h sau uống glucose: <strong>140–199 mg/dL</strong></li>
</ul>
<p>Tiền tiểu đường không điều trị: 37% tiến triển thành tiểu đường type 2 trong 4 năm. Nhưng với can thiệp đúng, phần lớn trường hợp hoàn toàn có thể đảo ngược.</p>

<img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80" alt="Chế độ ăn kiểm soát đường huyết" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>7 thay đổi lối sống giảm 58% nguy cơ tiểu đường</h2>
<p>Nghiên cứu <strong>Diabetes Prevention Program (DPP)</strong> — thử nghiệm lâm sàng lớn nhất về phòng ngừa tiểu đường, theo dõi 3.234 người tiền tiểu đường trong 3 năm — cho thấy:</p>

<h3>1. Giảm 5–7% cân nặng nếu thừa cân</h3>
<p>Đây là thay đổi có tác động lớn nhất. Với người 70kg, chỉ cần giảm 3,5–5kg đã giảm đáng kể kháng insulin. Mỡ nội tạng (mỡ bụng) đặc biệt nguy hiểm — ảnh hưởng trực tiếp đến chức năng insulin của gan và tuyến tụy.</p>

<h3>2. Vận động 150 phút aerobic mỗi tuần</h3>
<p>Tập thể dục giúp cơ bắp sử dụng glucose ngay cả khi không có insulin — giảm đường huyết lập tức sau tập. Đi bộ nhanh 30 phút, 5 ngày/tuần là đủ để tạo ra sự khác biệt đáng kể về độ nhạy insulin.</p>

<h3>3. Ưu tiên thực phẩm chỉ số đường huyết thấp (GI thấp)</h3>
<p>Thực phẩm GI thấp (dưới 55) giải phóng glucose từ từ, tránh đường huyết tăng đột ngột sau ăn:</p>
<ul>
<li>✅ Gạo lứt, yến mạch, khoai lang, đậu các loại</li>
<li>✅ Rau xanh, salad, cà chua, bơ</li>
<li>❌ Bánh mì trắng, cơm trắng (ăn nhiều), nước ngọt, bánh kẹo</li>
</ul>

<h3>4. Tăng chất xơ trong bữa ăn</h3>
<p>Chất xơ làm chậm hấp thu glucose và tăng độ no. Mục tiêu: ít nhất <strong>25–30g chất xơ/ngày</strong>. Mỗi bữa ăn nên có ít nhất nửa đĩa rau củ.</p>

<h3>5. Hạn chế đường và tinh bột tinh chế</h3>
<p>Đồ uống có đường (trà sữa, nước ngọt có gas, nước ép đóng hộp) là nguồn cung glucose trực tiếp, đặc biệt nguy hiểm vì hấp thu rất nhanh. Một ly trà sữa có thể chứa đến 50–70g đường — vượt nhu cầu cả ngày.</p>

<h3>6. Ngủ đủ giấc và quản lý stress</h3>
<p>Thiếu ngủ và stress mạn tính đều làm tăng cortisol — hormone phá vỡ độ nhạy insulin. Người ngủ dưới 6 tiếng/đêm có nguy cơ tiểu đường type 2 cao hơn <strong>28%</strong> so với người ngủ 7–8 tiếng.</p>

<h3>7. Kiểm tra đường huyết định kỳ</h3>
<p>Sau 45 tuổi, hoặc sớm hơn nếu có yếu tố nguy cơ (thừa cân, ít vận động, tiền sử gia đình), nên xét nghiệm đường huyết lúc đói và HbA1c mỗi năm. Phát hiện sớm = điều trị hiệu quả hơn nhiều.</p>

<blockquote style="border-left:4px solid #cc1f1f;padding:1rem 1.5rem;background:#fff5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Tiểu đường type 2 không phải số phận. Với những người tiền tiểu đường, lối sống lành mạnh còn hiệu quả hơn thuốc — và không có tác dụng phụ."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#cc1f1f">— GS. William Knowler, Trưởng nhóm nghiên cứu DPP, NIH Hoa Kỳ</p>
</blockquote>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Knowler W.C. et al.: "Reduction in the Incidence of Type 2 Diabetes with Lifestyle Intervention or Metformin" — NEJM (2002, cập nhật 2020)<br/>
• International Diabetes Federation: "IDF Diabetes Atlas, 10th Edition" (2021)<br/>
• Bộ Y tế Việt Nam: Hướng dẫn chẩn đoán và điều trị đái tháo đường type 2 (2023)<br/>
• American Diabetes Association: "Standards of Medical Care in Diabetes 2024"<br/>
• Viện Nội tiết Trung ương: Báo cáo dịch tễ học đái tháo đường Việt Nam (2024)</p>`
  },

  // ── BÀI 3: SỨC KHỎE GAN ─────────────────────────────────────────────────
  {
    title: 'Gan nhiễm mỡ không do rượu (NAFLD): Nguyên nhân, dấu hiệu và cách phục hồi gan hoàn toàn tự nhiên',
    category: 'Góc sức khỏe', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80',
    excerpt: 'Gan nhiễm mỡ không do rượu (NAFLD) đang ảnh hưởng đến 25% dân số toàn cầu và 30% người Việt Nam trưởng thành. Điều đáng lo là bệnh không gây triệu chứng ở giai đoạn đầu, nhưng nếu không can thiệp có thể tiến triển thành xơ gan và ung thư gan. Tin tốt: ở giai đoạn sớm, gan hoàn toàn có thể phục hồi.',
    readTime: 8, published: true,
    publishedAt: new Date('2026-01-25'),
    tags: ['Gan nhiễm mỡ', 'NAFLD', 'Sức khỏe gan', 'Detox', 'Lối sống'],
    content: `<p>Gan là cơ quan duy nhất trong cơ thể có khả năng tự tái tạo. Nhưng khả năng phi thường này có giới hạn — và lối sống hiện đại đang đẩy gan đến giới hạn đó nhanh hơn bao giờ hết.</p>
<p>Theo khảo sát quốc gia năm 2024, khoảng <strong>30% người Việt Nam trưởng thành</strong> mắc gan nhiễm mỡ không do rượu (Non-Alcoholic Fatty Liver Disease — NAFLD), tăng gấp đôi so với 10 năm trước, chủ yếu liên quan đến thừa cân, ít vận động và chế độ ăn nhiều đường tinh chế.</p>

<img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80" alt="Thực phẩm lành mạnh bảo vệ gan" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>NAFLD là gì và tiến triển như thế nào?</h2>
<p>Gan nhiễm mỡ xảy ra khi mỡ tích tụ chiếm hơn 5% trọng lượng gan. NAFLD tiến triển qua 4 giai đoạn:</p>
<ul>
<li><strong>Giai đoạn 1 — Gan nhiễm mỡ đơn thuần (Steatosis):</strong> Mỡ tích tụ nhưng chưa gây viêm. Hoàn toàn hồi phục nếu can thiệp sớm.</li>
<li><strong>Giai đoạn 2 — Viêm gan nhiễm mỡ (NASH):</strong> Mỡ + viêm + tổn thương tế bào gan. Tiến triển chậm nhưng nguy hiểm.</li>
<li><strong>Giai đoạn 3 — Xơ hóa gan:</strong> Mô sẹo hình thành, ảnh hưởng chức năng gan. Có thể đảo ngược một phần.</li>
<li><strong>Giai đoạn 4 — Xơ gan và ung thư gan:</strong> Tổn thương không thể hồi phục, đe dọa tính mạng.</li>
</ul>

<h2>Dấu hiệu cảnh báo cần đi khám ngay</h2>
<p>NAFLD giai đoạn sớm thường <strong>không triệu chứng</strong>. Khi xuất hiện các dấu hiệu dưới đây, bệnh có thể đã tiến triển:</p>
<ul>
<li>Mệt mỏi kéo dài không rõ nguyên nhân</li>
<li>Cảm giác nặng nề, khó chịu hoặc đau âm ỉ vùng hạ sườn phải</li>
<li>Bụng phình to, nổi gân xanh trên bụng</li>
<li>Da và mắt vàng (dấu hiệu muộn — xơ gan)</li>
<li>Phù chân, nước tiểu sẫm màu</li>
</ul>
<p><strong>Xét nghiệm sàng lọc:</strong> Siêu âm bụng + xét nghiệm men gan (ALT, AST, GGT) là đủ để phát hiện sớm. Nên thực hiện mỗi năm nếu có yếu tố nguy cơ.</p>

<img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&q=80" alt="Rau xanh và thực phẩm tốt cho gan" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>6 cách phục hồi gan tự nhiên đã được chứng minh</h2>

<h3>1. Giảm cân từ từ (0,5–1kg/tuần)</h3>
<p>Giảm 7–10% cân nặng có thể giảm mỡ gan đến <strong>40%</strong> và cải thiện viêm gan. Lưu ý: giảm cân quá nhanh (nhịn ăn, ăn kiêng cực đoan) có thể làm tăng đột ngột axit béo tự do vào gan, tạm thời làm nặng thêm NAFLD.</p>

<h3>2. Cắt giảm đường fructose và tinh bột tinh chế</h3>
<p>Fructose (đường trong nước ngọt, trái cây chế biến, mật ong với lượng lớn) được chuyển hóa gần như toàn bộ tại gan — là nguyên nhân hàng đầu gây mỡ gan không do rượu. Cắt giảm nước ngọt, trà sữa và thực phẩm chế biến sẵn là bước đầu tiên quan trọng nhất.</p>

<h3>3. Tập thể dục đều đặn — kể cả không giảm cân</h3>
<p>Tập aerobic 30 phút/ngày, 5 ngày/tuần giảm mỡ gan ngay cả khi cân nặng không thay đổi. Tập tạ (resistance training) còn hiệu quả hơn — tăng khối cơ giúp đốt mỡ gan gián tiếp thông qua cải thiện độ nhạy insulin.</p>

<h3>4. Ăn nhiều thực phẩm bảo vệ gan</h3>
<ul>
<li><strong>Cà phê đen:</strong> 2–3 ly/ngày giảm nguy cơ xơ gan và ung thư gan lên đến 40% (không thêm đường, kem)</li>
<li><strong>Rau xanh đắng:</strong> Bông cải xanh, cải bẹ xanh, atiso kích thích sản xuất glutathione — chất chống oxy hóa mạnh nhất của gan</li>
<li><strong>Cá béo:</strong> Omega-3 từ cá hồi, cá thu giảm viêm và mỡ gan</li>
<li><strong>Nghệ:</strong> Curcumin trong nghệ có tính kháng viêm, bảo vệ tế bào gan trong nhiều nghiên cứu</li>
<li><strong>Tỏi:</strong> Allicin trong tỏi kích hoạt enzyme gan giải độc</li>
</ul>

<h3>5. Tuyệt đối hạn chế rượu bia</h3>
<p>Kể cả khi NAFLD không do rượu, uống rượu bia sẽ làm nặng thêm tình trạng viêm và xơ hóa. Với người đã có NAFLD, giới hạn an toàn là gần như không uống.</p>

<h3>6. Cẩn thận với thuốc và thực phẩm chức năng "detox gan"</h3>
<p>Nghịch lý: nhiều sản phẩm quảng cáo "thải độc gan" thực ra gây độc cho gan. Acetaminophen (paracetamol) dùng quá liều là nguyên nhân hàng đầu suy gan cấp. Hỏi bác sĩ trước khi dùng bất kỳ thuốc hoặc thực phẩm chức năng nào khi đã có bệnh gan.</p>

<blockquote style="border-left:4px solid #cc1f1f;padding:1rem 1.5rem;background:#fff5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Gan là cơ quan im lặng nhất và tha thứ nhất trong cơ thể — nhưng đừng lầm tưởng im lặng là ổn. Một khi gan lên tiếng, thường đã là quá muộn để dễ dàng điều trị."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#cc1f1f">— GS.TS Nguyễn Anh Tuấn, Bệnh viện Bạch Mai, Hà Nội</p>
</blockquote>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Younossi Z.M. et al.: "Global epidemiology of NAFLD" — Nature Reviews Gastroenterology & Hepatology (2023)<br/>
• European Association for the Study of the Liver (EASL): "NAFLD/NASH Guidelines" (2022)<br/>
• Hội Gan mật Việt Nam: Hướng dẫn chẩn đoán và điều trị bệnh gan nhiễm mỡ không do rượu (2023)<br/>
• Bộ Y tế Việt Nam: Báo cáo tình hình bệnh gan tại Việt Nam (2024)<br/>
• Vilar-Gomez E. et al.: "Weight Loss Through Lifestyle Modification Significantly Reduces Features of NASH" — Gastroenterology (2015)</p>`
  },

  // ── BÀI 4: ĐAU LƯNG MẠN TÍNH ────────────────────────────────────────────
  {
    title: 'Đau lưng mạn tính: Nguyên nhân thực sự, khi nào cần lo và phương pháp điều trị hiệu quả nhất 2024',
    category: 'Góc sức khỏe', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80',
    excerpt: 'Đau lưng là nguyên nhân gây mất khả năng lao động hàng đầu thế giới, ảnh hưởng 80% dân số ít nhất một lần trong đời. Nhưng phần lớn trường hợp đau lưng không cần phẫu thuật hay thuốc giảm đau mạnh — và nhiều người đang điều trị sai cách làm bệnh nặng hơn.',
    readTime: 9, published: true,
    publishedAt: new Date('2026-02-05'),
    tags: ['Đau lưng', 'Thoát vị đĩa đệm', 'Cột sống', 'Vật lý trị liệu', 'Tư thế'],
    content: `<p>Theo Tổ chức Y tế Thế giới (WHO), đau lưng dưới là nguyên nhân gây mất khả năng lao động số 1 toàn cầu — ảnh hưởng <strong>619 triệu người</strong> năm 2020, dự báo tăng lên 843 triệu vào 2050. Tại Việt Nam, ước tính 30% người đi khám bệnh cơ xương khớp có liên quan đến đau lưng.</p>
<p>Nghịch lý: dù phổ biến như vậy, đau lưng vẫn là chủ đề đầy hiểu lầm — khiến nhiều người điều trị sai cách, tốn kém và bệnh ngày càng nặng hơn.</p>

<img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80" alt="Đau lưng mạn tính và cách điều trị" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Phân loại đau lưng: Cấp tính vs Mạn tính</h2>
<ul>
<li><strong>Đau lưng cấp tính:</strong> Kéo dài dưới 6 tuần. 90% tự khỏi trong 4–6 tuần ngay cả không điều trị gì.</li>
<li><strong>Đau lưng bán cấp:</strong> 6–12 tuần. Thường cần can thiệp vật lý trị liệu.</li>
<li><strong>Đau lưng mạn tính:</strong> Trên 12 tuần. Đây là vấn đề phức tạp hơn, thường có yếu tố tâm lý và thần kinh trung ương.</li>
</ul>

<h2>5 nguyên nhân đau lưng phổ biến nhất</h2>

<h3>1. Đau lưng không đặc hiệu (chiếm 85–90% ca)</h3>
<p>Phần lớn đau lưng không có nguyên nhân cấu trúc rõ ràng — không phải thoát vị đĩa đệm, không phải gai xương. Nguyên nhân thực sự là: <strong>cơ lưng yếu, tư thế xấu, vận động không đúng cách và stress tâm lý</strong>. Điều trị bằng vận động và vật lý trị liệu hiệu quả hơn nhiều so với thuốc.</p>

<h3>2. Thoát vị đĩa đệm</h3>
<p>Đĩa đệm giữa các đốt sống bị lồi ra, chèn ép rễ thần kinh gây đau lan xuống chân (đau thần kinh tọa). Đây là nguyên nhân chỉ chiếm 5–10% ca đau lưng, nhưng hay bị "chẩn đoán thừa" trên MRI. Lưu ý quan trọng: <strong>trên 30% người không đau lưng vẫn có thoát vị đĩa đệm trên MRI</strong> — vì vậy hình ảnh học phải kết hợp với lâm sàng.</p>

<h3>3. Hội chứng khớp liên mấu (Facet joint syndrome)</h3>
<p>Viêm hoặc thoái hóa các khớp nhỏ sau cột sống, thường gây đau lưng dưới một bên, tăng khi ưỡn người ra sau.</p>

<h3>4. Đau cơ xơ hóa (Fibromyalgia)</h3>
<p>Đau lan tỏa toàn thân kèm mệt mỏi, rối loạn giấc ngủ và nhạy cảm với đau. Nguyên nhân liên quan đến rối loạn xử lý cảm giác đau ở não, không phải tổn thương mô.</p>

<h3>5. Nguyên nhân nghiêm trọng cần phát hiện sớm (Red flags)</h3>
<p>Các dấu hiệu sau đây cần đi khám cấp cứu ngay:</p>
<ul>
<li>Đau dữ dội xuất hiện đột ngột, không giảm khi nằm nghỉ</li>
<li>Đau kèm mất kiểm soát tiểu tiện hoặc đại tiện</li>
<li>Tê liệt, yếu chân tiến triển nhanh</li>
<li>Đau kèm sốt cao, sụt cân không rõ nguyên nhân</li>
<li>Tiền sử ung thư + đau lưng mới xuất hiện</li>
</ul>

<img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80" alt="Bài tập vật lý trị liệu đau lưng" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Điều trị đau lưng mạn tính: Bằng chứng khoa học nói gì?</h2>

<h3>✅ Hiệu quả cao — khuyến nghị đầu tay</h3>
<ul>
<li><strong>Vận động trị liệu (Exercise therapy):</strong> Bài tập tăng cường cơ cốt lõi (core strengthening), yoga, pilates — hiệu quả nhất cho đau lưng mạn tính.</li>
<li><strong>Vật lý trị liệu / Trị liệu thần kinh cột sống:</strong> Hiệu quả rõ rệt, đặc biệt kết hợp với bài tập tại nhà.</li>
<li><strong>Nhận thức hành vi trị liệu (CBT):</strong> Đặc biệt hiệu quả khi đau lưng liên quan đến lo âu, stress, và "nỗi sợ vận động" (kinesiophobia).</li>
</ul>

<h3>⚠️ Hiệu quả vừa phải — dùng thận trọng</h3>
<ul>
<li>NSAIDs (ibuprofen, naproxen): Giảm đau ngắn hạn, không điều trị nguyên nhân</li>
<li>Cơ giãn cơ: Tác dụng ngắn, nhiều tác dụng phụ</li>
<li>Tiêm corticosteroid ngoài màng cứng: Giảm đau tạm thời 4–6 tuần, không thay đổi tiến triển bệnh</li>
</ul>

<h3>❌ Ít/không hiệu quả cho đau lưng mạn tính — tránh lạm dụng</h3>
<ul>
<li>Nghỉ ngơi tại giường kéo dài (nghịch lý: làm bệnh nặng hơn)</li>
<li>Opioid (morphine, codeine): Không hiệu quả hơn NSAIDs, nghiện cao</li>
<li>Phẫu thuật (trừ khi có chỉ định rõ ràng như hội chứng đuôi ngựa)</li>
</ul>

<blockquote style="border-left:4px solid #cc1f1f;padding:1rem 1.5rem;background:#fff5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Tin nhắn quan trọng nhất với bệnh nhân đau lưng mạn tính: không có cấu trúc nào trong lưng của bạn 'gãy'. Đau lưng mạn tính phần lớn là vấn đề của thần kinh học đã được nhạy cảm hóa — và vận động, không phải nghỉ ngơi, là liều thuốc tốt nhất."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#cc1f1f">— GS. Gordon Waddell, tác giả "The Back Pain Revolution", Đại học Glasgow</p>
</blockquote>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• WHO: "Low Back Pain — Key Facts" (2023)<br/>
• Oliveira C.B. et al.: "Clinical practice guidelines for the management of non-specific low back pain in primary care" — European Spine Journal (2018)<br/>
• Foster N.E. et al.: "Prevention and treatment of low back pain" — Lancet (2018)<br/>
• Hội Thấp khớp học Việt Nam: Hướng dẫn điều trị đau lưng dưới mạn tính (2023)<br/>
• Qaseem A. et al.: "Noninvasive Treatments for Acute, Subacute, and Chronic Low Back Pain" — Annals of Internal Medicine (2022)</p>`
  },

  // ── BÀI 5: SỨC KHỎE MẮT ─────────────────────────────────────────────────
  {
    title: 'Bảo vệ mắt trong thời đại màn hình: Khô mắt, cận thị tiến triển và cách giữ thị lực tốt đến tuổi già',
    category: 'Góc sức khỏe', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1200&q=80',
    excerpt: 'Người Việt Nam dành trung bình 6,5 giờ/ngày nhìn màn hình. Hệ quả: tỷ lệ cận thị ở trẻ em tăng chóng mặt, hội chứng thị giác máy tính bùng phát và thoái hóa điểm vàng ngày càng trẻ hóa. Bài viết cung cấp hướng dẫn khoa học để bảo vệ đôi mắt trong môi trường kỹ thuật số.',
    readTime: 7, published: true,
    publishedAt: new Date('2026-02-14'),
    tags: ['Sức khỏe mắt', 'Cận thị', 'Khô mắt', 'Màn hình', 'Thị lực'],
    content: `<p>Theo báo cáo của Tổ chức Y tế Thế giới, đến năm 2050 sẽ có <strong>4,8 tỷ người cận thị</strong> — tương đương 50% dân số thế giới. Riêng tại Việt Nam, tỷ lệ cận thị ở học sinh tiểu học đã tăng từ 10% (2010) lên <strong>40–50%</strong> (2024) tại các thành phố lớn — phần lớn liên quan đến thời gian nhìn màn hình kéo dài và thiếu ánh sáng tự nhiên.</p>

<img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=900&q=80" alt="Bảo vệ mắt trước màn hình" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Hội chứng thị giác máy tính (Computer Vision Syndrome) là gì?</h2>
<p>CVS (Computer Vision Syndrome) hay "Digital Eye Strain" là nhóm triệu chứng xuất hiện sau khi nhìn màn hình kéo dài:</p>
<ul>
<li>Mỏi mắt, căng mắt, khó tập trung</li>
<li>Khô mắt, rát mắt, cảm giác có dị vật</li>
<li>Nhìn mờ tạm thời sau khi nhìn xa</li>
<li>Đau đầu vùng trán, thái dương</li>
<li>Đau cổ, vai, lưng (do tư thế)</li>
</ul>
<p>Theo American Optometric Association, <strong>hơn 60% người dùng màn hình</strong> có ít nhất một triệu chứng CVS. Nguyên nhân chính: khi nhìn màn hình, tốc độ nháy mắt giảm từ 15 lần/phút xuống còn 5–7 lần/phút — khiến bề mặt mắt bị khô.</p>

<h2>Cận thị tiến triển ở trẻ em: Tại sao nguy hiểm hơn cận thị thông thường?</h2>
<p>Cận thị tiến triển (myopia progression) là khi độ cận tăng nhanh hơn 0,75 diop/năm. Mắt cận nặng (trên -6 diop) có nguy cơ cao bị:</p>
<ul>
<li>Bong võng mạc (tăng 10 lần so với mắt bình thường)</li>
<li>Tăng nhãn áp (tăng 3 lần)</li>
<li>Thoái hóa điểm vàng (tăng 40 lần)</li>
<li>Đục thủy tinh thể sớm</li>
</ul>
<p>Vì vậy, kiểm soát cận thị ở trẻ em không chỉ là vấn đề thẩm mỹ hay đeo kính — mà là bảo vệ thị lực lâu dài.</p>

<img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=900&q=80" alt="Trẻ em và sức khỏe mắt" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Bảo vệ mắt khỏi màn hình: Quy tắc 20-20-20</h2>
<p>Quy tắc được Học viện Nhãn khoa Hoa Kỳ khuyến nghị:</p>
<blockquote style="border-left:4px solid #2563eb;padding:1rem 1.5rem;background:#eff6ff;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-weight:700;color:#1e40af">Mỗi 20 phút nhìn màn hình → Nhìn vào vật cách xa 20 feet (~6m) trong 20 giây</p>
</blockquote>
<p>Cơ chế: Nhìn xa cho phép cơ thể mi (ciliary muscle) điều tiết mắt được giãn nghỉ. Liên tục nhìn gần mà không nghỉ khiến cơ này co cứng — gây mỏi mắt và có thể thúc đẩy cận thị tiến triển.</p>

<h2>8 thói quen bảo vệ mắt toàn diện</h2>

<h3>1. Ra ngoài trời ít nhất 2 giờ mỗi ngày (đặc biệt với trẻ em)</h3>
<p>Ánh sáng tự nhiên kích thích giải phóng dopamine ở võng mạc, ức chế tăng trưởng trục nhãn cầu — cơ chế chính gây cận thị. Nghiên cứu tại Đài Loan cho thấy chương trình "Outdoor 120 phút/ngày" giảm <strong>54% tỷ lệ cận thị mới</strong> ở học sinh tiểu học.</p>

<h3>2. Điều chỉnh môi trường làm việc</h3>
<ul>
<li>Màn hình cách mắt 50–70cm (khoảng cánh tay)</li>
<li>Đỉnh màn hình ngang tầm mắt hoặc thấp hơn 5–10cm</li>
<li>Độ sáng màn hình bằng với ánh sáng xung quanh</li>
<li>Bật chế độ Night Mode / giảm ánh sáng xanh sau 8h tối</li>
<li>Dùng màn hình chống chói (anti-glare)</li>
</ul>

<h3>3. Nhỏ nước mắt nhân tạo khi cần</h3>
<p>Khô mắt khi dùng màn hình là bình thường và không đáng lo ngại nếu được xử lý kịp thời. Nước mắt nhân tạo không kê đơn (loại không chứa chất bảo quản benzalkonium chloride nếu dùng thường xuyên) giúp làm ẩm bề mặt mắt hiệu quả.</p>

<h3>4. Đội kính chống UV khi ra ngoài</h3>
<p>Tia UV từ mặt trời không chỉ gây ung thư da — nó còn gây đục thủy tinh thể và thoái hóa điểm vàng. Kính chống UV400 ngăn 99% tia UVA và UVB là đủ — không cần đắt tiền.</p>

<h3>5. Dinh dưỡng cho mắt</h3>
<p>Các vi chất quan trọng cho sức khỏe mắt:</p>
<ul>
<li><strong>Lutein và Zeaxanthin:</strong> Bảo vệ điểm vàng — có trong cải xanh, bó xôi, ngô vàng</li>
<li><strong>Omega-3 (DHA):</strong> Giảm khô mắt, cải thiện chất lượng lớp phim nước mắt</li>
<li><strong>Vitamin A:</strong> Thiếu gây quáng gà — có trong gan động vật, cà rốt, bí đỏ</li>
<li><strong>Vitamin C và E:</strong> Chống oxy hóa, giảm nguy cơ đục thủy tinh thể</li>
</ul>

<h3>6. Khám mắt định kỳ mỗi 1–2 năm</h3>
<p>Glaucoma (tăng nhãn áp) thường không có triệu chứng cho đến khi thị trường thu hẹp đáng kể. Thoái hóa điểm vàng giai đoạn đầu có thể điều trị hiệu quả. Phát hiện sớm qua khám định kỳ là cách duy nhất bảo vệ thị lực lâu dài.</p>

<h3>7. Kiểm soát đường huyết và huyết áp</h3>
<p>Tiểu đường là nguyên nhân hàng đầu gây mù lòa ở người trưởng thành. Bệnh võng mạc tiểu đường ảnh hưởng 40% bệnh nhân tiểu đường sau 20 năm. Kiểm soát đường huyết tốt giảm nguy cơ này đến 76%.</p>

<h3>8. Không hút thuốc</h3>
<p>Người hút thuốc lá có nguy cơ thoái hóa điểm vàng cao gấp 4 lần và đục thủy tinh thể cao gấp 2–3 lần người không hút. Hút thuốc làm giảm lưu thông máu đến võng mạc và tăng stress oxy hóa.</p>

<blockquote style="border-left:4px solid #cc1f1f;padding:1rem 1.5rem;background:#fff5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Chúng ta đã tiến hóa trong môi trường ánh sáng tự nhiên và không gian mở. Mắt của chúng ta không được thiết kế để nhìn màn hình 8 tiếng mỗi ngày — nhưng với một số điều chỉnh đơn giản, chúng ta hoàn toàn có thể thích nghi mà không đánh đổi thị lực."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#cc1f1f">— GS. Ian Morgan, Trung tâm Nghiên cứu Mắt Quốc gia Úc</p>
</blockquote>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• WHO: "World Report on Vision" (2023)<br/>
• American Academy of Ophthalmology: "Computer Vision Syndrome Guidelines" (2022)<br/>
• Wu P.C. et al.: "Outdoor Activity during Class Recess Reduces Myopia Onset and Progression" — Ophthalmology (2013)<br/>
• Holden B.A. et al.: "Global Prevalence of Myopia and High Myopia" — Ophthalmology (2016)<br/>
• Bệnh viện Mắt Trung ương: Báo cáo tình hình tật khúc xạ học đường Việt Nam (2024)<br/>
• Bộ Y tế Việt Nam: Chương trình chăm sóc mắt học đường 2021–2025</p>`
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
