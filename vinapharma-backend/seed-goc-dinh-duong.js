// Seed 5 bài Góc Dinh Dưỡng — node seed-goc-dinh-duong.js
if (require.main === module) {
  require('dotenv').config();
}
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');

const posts = [

  // ── BÀI 1: ĂN SÁNG ──────────────────────────────────────────────────────
  {
    title: 'Bỏ bữa sáng có thực sự giúp giảm cân? Sự thật khoa học và tác hại ít ai biết',
    category: 'Góc dinh dưỡng', topic: 'Dinh dưỡng', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1200&q=80',
    excerpt: 'Nhiều người bỏ bữa sáng để giảm cân, nhưng nghiên cứu khoa học hiện đại cho thấy điều ngược lại. Bỏ bữa sáng có thể làm tăng cảm giác đói vào buổi chiều, rối loạn đường huyết và thậm chí tăng nguy cơ bệnh tim mạch. Tìm hiểu sự thật và cách ăn sáng khoa học.',
    readTime: 7, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Ăn sáng', 'Giảm cân', 'Dinh dưỡng', 'Đường huyết', 'Sức khỏe'],
    content: `<p>Bữa sáng được mệnh danh là "bữa ăn quan trọng nhất trong ngày" — nhưng liệu điều này có đúng với khoa học? Câu trả lời không đơn giản là có hoặc không, và phụ thuộc rất nhiều vào <strong>bạn ăn gì</strong> chứ không chỉ là <strong>có ăn hay không</strong>.</p>

<img src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=900&q=80" alt="Bữa sáng dinh dưỡng" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Nghiên cứu nói gì về bỏ bữa sáng?</h2>
<p>Một phân tích tổng hợp 2019 đăng trên <em>BMJ</em> phân tích 13 nghiên cứu ngẫu nhiên có đối chứng kết luận: <strong>bỏ bữa sáng không nhất thiết giúp giảm cân</strong> — và ở một số người, có thể làm tăng cân do ăn bù nhiều hơn vào buổi chiều tối.</p>
<p>Tuy nhiên, Intermittent Fasting (nhịn ăn gián đoạn) — trong đó có bỏ bữa sáng — lại có hiệu quả với nhiều người khác. Sự khác biệt nằm ở <strong>tổng lượng calo nạp vào cả ngày</strong>, không phải thời điểm ăn.</p>

<h2>Tác hại thực sự của bỏ bữa sáng không đúng cách</h2>

<h3>1. Hạ đường huyết buổi sáng</h3>
<p>Sau 8–12 tiếng nhịn ăn qua đêm, cơ thể đang ở trạng thái đường huyết thấp. Não bộ tiêu thụ đến 20% glucose của cơ thể — không nạp năng lượng buổi sáng ảnh hưởng trực tiếp đến tập trung, trí nhớ và tốc độ phản ứng.</p>

<h3>2. Tăng cortisol và stress</h3>
<p>Cortisol (hormone stress) đạt đỉnh vào buổi sáng. Nhịn ăn kéo dài làm cortisol tăng cao hơn, đặc biệt với người có lịch làm việc căng thẳng — dẫn đến tích mỡ bụng về lâu dài.</p>

<h3>3. Rối loạn nhịp sinh học tiêu hóa</h3>
<p>Hệ tiêu hóa hoạt động theo đồng hồ sinh học. Bỏ bữa sáng thường xuyên làm gián đoạn nhịp tiết acid dịch vị, tăng nguy cơ viêm loét dạ dày và hội chứng ruột kích thích.</p>

<blockquote style="border-left:4px solid #4caf50;padding:1rem 1.5rem;background:#f1f8e9;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Bữa sáng quan trọng không phải vì nó là bữa đầu tiên trong ngày — mà vì nó thiết lập nhịp chuyển hóa và hormone cho cả ngày. Một bữa sáng giàu protein và chất xơ giúp kiểm soát cảm giác thèm ăn tốt hơn bất kỳ chế độ ăn kiêng nào."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#4caf50">— GS. David Katz, Đại học Yale, chuyên gia dinh dưỡng</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=900&q=80" alt="Bữa sáng lành mạnh giàu protein" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Bữa sáng lý tưởng trông như thế nào?</h2>
<p>Nghiên cứu của ĐH Missouri (2015) cho thấy bữa sáng giàu protein (35g protein) giúp giảm cảm giác thèm ăn suốt ngày và giảm snacking tối hơn 30% so với bữa sáng ít protein.</p>

<table style="width:100%;border-collapse:collapse;margin:1.5rem 0">
<tr style="background:#e8f5e9">
<th style="padding:.75rem;text-align:left;border:1px solid #c8e6c9">Thành phần</th>
<th style="padding:.75rem;text-align:left;border:1px solid #c8e6c9">Vai trò</th>
<th style="padding:.75rem;text-align:left;border:1px solid #c8e6c9">Ví dụ thực phẩm</th>
</tr>
<tr><td style="padding:.75rem;border:1px solid #c8e6c9">Protein (20–35g)</td><td style="padding:.75rem;border:1px solid #c8e6c9">Kiểm soát cảm giác no, duy trì cơ</td><td style="padding:.75rem;border:1px solid #c8e6c9">Trứng, sữa chua Hy Lạp, đậu phụ</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #c8e6c9">Chất xơ (8–12g)</td><td style="padding:.75rem;border:1px solid #c8e6c9">Ổn định đường huyết, nuôi vi khuẩn có lợi</td><td style="padding:.75rem;border:1px solid #c8e6c9">Yến mạch, rau xanh, hạt chia</td></tr>
<tr><td style="padding:.75rem;border:1px solid #c8e6c9">Chất béo tốt</td><td style="padding:.75rem;border:1px solid #c8e6c9">Hấp thu vitamin, tăng cảm giác no</td><td style="padding:.75rem;border:1px solid #c8e6c9">Bơ, hạt, dầu ô liu</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #c8e6c9">Tinh bột phức (tùy chọn)</td><td style="padding:.75rem;border:1px solid #c8e6c9">Năng lượng bền vững</td><td style="padding:.75rem;border:1px solid #c8e6c9">Bánh mì nguyên cám, khoai lang</td></tr>
</table>

<h2>Nếu bạn thực hành Intermittent Fasting</h2>
<p>Nếu bỏ bữa sáng trong khuôn khổ IF 16:8 (ăn trong khung 10:00–18:00), hãy đảm bảo:</p>
<ul>
<li>Bù đủ protein trong 2 bữa còn lại (ít nhất 1.2–1.6g/kg cân nặng/ngày)</li>
<li>Không ăn bù quá mức — tổng calo vẫn cần kiểm soát</li>
<li>Uống đủ nước buổi sáng, có thể dùng cà phê đen hoặc trà xanh</li>
<li>Không áp dụng nếu có tiểu đường, hạ đường huyết, hoặc phụ nữ mang thai</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Sievert K. et al.: "Effect of breakfast on weight and energy intake: systematic review and meta-analysis of randomised controlled trials" — BMJ (2019)<br/>
• Leidy H.J. et al.: "Beneficial effects of a higher-protein breakfast on appetite" — Am J Clin Nutr (2013)<br/>
• Rong S. et al.: "Association of Skipping Breakfast with Cardiovascular and All-Cause Mortality" — JACC (2019)<br/>
• Viện Dinh dưỡng Quốc gia Việt Nam: Khuyến nghị dinh dưỡng 2023</p>`
  },

  // ── BÀI 2: ĐƯỜNG VÀ SỨC KHỎE ────────────────────────────────────────────
  {
    title: 'Đường ẩn trong thực phẩm: Cách nhận biết và kiểm soát lượng đường hàng ngày hiệu quả',
    category: 'Góc dinh dưỡng', topic: 'Dinh dưỡng', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=1200&q=80',
    excerpt: 'WHO khuyến nghị chỉ nên nạp dưới 25g đường tự do mỗi ngày — nhưng người Việt trung bình tiêu thụ gấp 3 lần con số đó mà không hề hay biết. Đường ẩn trong nước ép, sốt, bánh mì, sữa chua và hàng trăm sản phẩm "healthy" khác.',
    readTime: 8, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Đường', 'Đường huyết', 'Dinh dưỡng', 'Béo phì', 'Tiểu đường'],
    content: `<p>Nếu bạn uống một lon nước ngọt 330ml, bạn vừa nạp khoảng <strong>35g đường</strong> — vượt mức khuyến nghị cả ngày của WHO chỉ trong một lần uống. Nhưng điều đáng lo hơn là đường ẩn trong các thực phẩm bạn nghĩ là lành mạnh.</p>

<img src="https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=900&q=80" alt="Đường ẩn trong thực phẩm" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Tại sao đường thêm vào (added sugar) nguy hiểm hơn đường tự nhiên?</h2>
<p>Đường trong trái cây đi kèm chất xơ, vitamin và phytochemical — chất xơ làm chậm hấp thu đường, ổn định đường huyết. Đường tự do (added sugar, honey, syrup) không có "gói kèm" này — được hấp thu thẳng vào máu, làm đường huyết tăng vọt, kích thích insulin, và khi dư thừa được chuyển thành mỡ gan.</p>

<h2>Đường ẩn trong những thực phẩm "tưởng lành mạnh"</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5rem 0">
<tr style="background:#e8f5e9">
<th style="padding:.75rem;text-align:left;border:1px solid #c8e6c9">Thực phẩm</th>
<th style="padding:.75rem;text-align:left;border:1px solid #c8e6c9">Lượng đường ẩn</th>
</tr>
<tr><td style="padding:.75rem;border:1px solid #c8e6c9">Sữa chua hương trái cây (200g)</td><td style="padding:.75rem;border:1px solid #c8e6c9">20–28g</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #c8e6c9">Nước ép cam đóng hộp (250ml)</td><td style="padding:.75rem;border:1px solid #c8e6c9">22–26g</td></tr>
<tr><td style="padding:.75rem;border:1px solid #c8e6c9">Sốt cà chua (2 muỗng canh)</td><td style="padding:.75rem;border:1px solid #c8e6c9">6–8g</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #c8e6c9">Granola (50g)</td><td style="padding:.75rem;border:1px solid #c8e6c9">12–18g</td></tr>
<tr><td style="padding:.75rem;border:1px solid #c8e6c9">Bánh mì sandwich (2 lát)</td><td style="padding:.75rem;border:1px solid #c8e6c9">4–6g</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #c8e6c9">Sốt salad ít béo (2 muỗng)</td><td style="padding:.75rem;border:1px solid #c8e6c9">5–7g</td></tr>
</table>

<blockquote style="border-left:4px solid #4caf50;padding:1rem 1.5rem;background:#f1f8e9;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Công nghiệp thực phẩm đã thêm đường vào hơn 74% các sản phẩm đóng gói bán lẻ — không chỉ để tạo vị ngọt mà còn để kéo dài hạn sử dụng, cải thiện màu sắc và che giấu vị đắng của chất bảo quản."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#4caf50">— Lustig R.H., Đại học UCSF, tác giả "Fat Chance"</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=900&q=80" alt="Đọc nhãn thực phẩm để tránh đường ẩn" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Cách đọc nhãn để phát hiện đường ẩn</h2>
<p>Đường ẩn dưới hơn <strong>60 tên gọi khác nhau</strong> trên nhãn thực phẩm. Những cái tên phổ biến cần chú ý:</p>
<ul>
<li>Fructose, glucose, sucrose, maltose, lactose</li>
<li>Corn syrup, high-fructose corn syrup (HFCS)</li>
<li>Dextrose, maltodextrin</li>
<li>Agave nectar, rice syrup, barley malt</li>
<li>Fruit juice concentrate</li>
</ul>
<p><strong>Mẹo:</strong> Nếu bất kỳ dạng đường nào xuất hiện trong 3 thành phần đầu tiên trên nhãn, sản phẩm đó chứa rất nhiều đường.</p>

<h2>Tác hại lâu dài của tiêu thụ đường dư thừa</h2>
<ul>
<li><strong>Gan nhiễm mỡ:</strong> Fructose dư thừa được chuyển hóa thành triglyceride tại gan — nguyên nhân chính của NAFLD không liên quan rượu</li>
<li><strong>Kháng insulin:</strong> Đường huyết cao mạn tính làm tế bào kém nhạy cảm với insulin, tiền đề của tiểu đường type 2</li>
<li><strong>Viêm mạn tính:</strong> Đường cao làm tăng cytokine viêm, liên quan đến bệnh tim, ung thư và lão hóa sớm</li>
<li><strong>Glycation:</strong> Đường gắn vào protein (collagen, hemoglobin) làm chúng bị hỏng — da lão hóa nhanh, thận tổn thương</li>
</ul>

<h2>Giảm đường mà không mất ngon</h2>
<ul>
<li>Thay nước ngọt bằng nước lọc có lát chanh, dưa leo hoặc bạc hà</li>
<li>Dùng sữa chua nguyên chất + thêm trái cây tươi thay vì sữa chua hương vị</li>
<li>Nấu sốt cà chua tự làm — kiểm soát hoàn toàn lượng đường</li>
<li>Chọn socola đen &gt;70% cacao thay vì socola sữa</li>
<li>Dùng quế, vani, hoặc erythritol thay thế một phần đường trong công thức nấu ăn</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• WHO: "Guideline: Sugars intake for adults and children" (2023)<br/>
• Lustig R.H. et al.: "The toxic truth about sugar" — Nature (2012)<br/>
• Stanhope K.L.: "Sugar consumption, metabolic disease and obesity" — Crit Rev Clin Lab Sci (2016)<br/>
• Viện Dinh dưỡng Quốc gia: Tình trạng tiêu thụ đường tại Việt Nam (2022)</p>`
  },

  // ── BÀI 3: PROTEIN ───────────────────────────────────────────────────────
  {
    title: 'Protein: Bạn đang ăn đủ chưa? Cách tính nhu cầu và nguồn protein tốt nhất cho người Việt',
    category: 'Góc dinh dưỡng', topic: 'Dinh dưỡng', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=1200&q=80',
    excerpt: 'Protein không chỉ dành cho người tập gym. Nó là nguyên liệu xây dựng cơ bắp, hormone, enzyme, kháng thể và hầu hết mọi cấu trúc trong cơ thể. Hướng dẫn khoa học giúp bạn tính nhu cầu protein cá nhân và lựa chọn nguồn protein phù hợp với văn hóa ăn uống Việt Nam.',
    readTime: 8, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Protein', 'Dinh dưỡng', 'Cơ bắp', 'Thực phẩm', 'Sức khỏe'],
    content: `<p>Khuyến nghị RDA (Recommended Dietary Allowance) cho protein là 0.8g/kg cân nặng/ngày — nhưng đây là mức <em>tối thiểu để không thiếu hụt</em>, không phải mức tối ưu. Với người muốn duy trì cơ bắp, kiểm soát cân nặng hoặc hoạt động thể chất, nhu cầu thực tế cao hơn đáng kể.</p>

<img src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=900&q=80" alt="Nguồn thực phẩm giàu protein" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Nhu cầu protein theo từng nhóm</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5rem 0">
<tr style="background:#e8f5e9">
<th style="padding:.75rem;text-align:left;border:1px solid #c8e6c9">Nhóm đối tượng</th>
<th style="padding:.75rem;text-align:left;border:1px solid #c8e6c9">Nhu cầu protein</th>
</tr>
<tr><td style="padding:.75rem;border:1px solid #c8e6c9">Người trưởng thành ít vận động</td><td style="padding:.75rem;border:1px solid #c8e6c9">0.8–1.0 g/kg/ngày</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #c8e6c9">Người vận động vừa (3–5 buổi/tuần)</td><td style="padding:.75rem;border:1px solid #c8e6c9">1.2–1.6 g/kg/ngày</td></tr>
<tr><td style="padding:.75rem;border:1px solid #c8e6c9">Vận động viên, tập nặng</td><td style="padding:.75rem;border:1px solid #c8e6c9">1.6–2.2 g/kg/ngày</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #c8e6c9">Người cao tuổi (>65 tuổi)</td><td style="padding:.75rem;border:1px solid #c8e6c9">1.2–1.5 g/kg/ngày</td></tr>
<tr><td style="padding:.75rem;border:1px solid #c8e6c9">Phụ nữ mang thai</td><td style="padding:.75rem;border:1px solid #c8e6c9">+25g/ngày so với bình thường</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #c8e6c9">Người đang giảm cân</td><td style="padding:.75rem;border:1px solid #c8e6c9">1.6–2.4 g/kg/ngày (bảo vệ cơ)</td></tr>
</table>

<p><strong>Ví dụ thực tế:</strong> Người 60kg, văn phòng, tập thể dục 3 buổi/tuần → cần khoảng 72–96g protein/ngày.</p>

<blockquote style="border-left:4px solid #4caf50;padding:1rem 1.5rem;background:#f1f8e9;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Người cao tuổi đặc biệt cần protein cao hơn để chống sarcopenia (teo cơ). Mất 3–8% khối lượng cơ mỗi thập kỷ sau 30 tuổi có thể phòng ngừa được bằng protein đủ + tập kháng lực."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#4caf50">— Morton R.W. et al., British Journal of Sports Medicine (2018)</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80" alt="Bữa ăn cân bằng protein" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Nguồn protein tốt nhất trong ẩm thực Việt</h2>

<h3>Protein động vật (đầy đủ amino acid thiết yếu)</h3>
<ul>
<li><strong>Trứng:</strong> 6g protein/quả, PDCAAS = 1.0 (điểm tối đa), rẻ và dễ chế biến</li>
<li><strong>Cá tra, cá basa:</strong> 18–20g protein/100g, omega-3, giá phải chăng</li>
<li><strong>Tôm:</strong> 20g protein/100g, ít béo, giàu selenium và iod</li>
<li><strong>Thịt gà (ức):</strong> 31g protein/100g, ít chất béo bão hòa</li>
<li><strong>Sữa chua Hy Lạp:</strong> 10g protein/100g, probiotic tốt cho ruột</li>
</ul>

<h3>Protein thực vật (cần kết hợp)</h3>
<ul>
<li><strong>Đậu phụ:</strong> 8–15g protein/100g tùy loại, isoflavone tốt cho tim mạch</li>
<li><strong>Đậu nành, đậu đen, đậu xanh:</strong> 7–9g protein/100g chín</li>
<li><strong>Hạt chia, hạt hemp:</strong> 5–10g protein/2 muỗng canh, đầy đủ amino acid</li>
<li><strong>Quinoa:</strong> 8g protein/100g chín — một trong ít thực vật có protein hoàn chỉnh</li>
</ul>

<h2>Phân bổ protein trong ngày</h2>
<p>Nghiên cứu cho thấy <strong>phân bổ đều</strong> protein qua các bữa ăn (25–40g/bữa) hiệu quả hơn ăn dồn một bữa. Cơ thể chỉ tổng hợp cơ tối đa với ~25–40g protein mỗi lần — phần dư bị oxy hóa làm năng lượng hoặc thải ra.</p>

<h2>Dấu hiệu thiếu protein</h2>
<ul>
<li>Tóc rụng, móng yếu, da xỉn màu</li>
<li>Vết thương lành chậm</li>
<li>Mệt mỏi, khó tập trung</li>
<li>Teo cơ, sức mạnh giảm</li>
<li>Phù nề (thiếu protein nặng — protein duy trì áp suất thẩm thấu)</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Morton R.W. et al.: "A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength" — Br J Sports Med (2018)<br/>
• Stokes T. et al.: "Recent perspectives regarding the role of dietary protein for the promotion of muscle hypertrophy" — Nutrients (2018)<br/>
• Paddon-Jones D., Rasmussen B.B.: "Dietary protein recommendations and the prevention of sarcopenia" — Curr Opin Clin Nutr Metab Care (2009)<br/>
• Viện Dinh dưỡng Quốc gia: Nhu cầu dinh dưỡng khuyến nghị cho người Việt Nam (2016)</p>`
  },

  // ── BÀI 4: CHẤT XƠ ───────────────────────────────────────────────────────
  {
    title: 'Chất xơ — dưỡng chất bị lãng quên: Tại sao 95% người Việt ăn không đủ và hậu quả ra sao',
    category: 'Góc dinh dưỡng', topic: 'Dinh dưỡng', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80',
    excerpt: 'WHO khuyến nghị 25–38g chất xơ mỗi ngày nhưng người Việt trung bình chỉ nạp 10–15g. Thiếu chất xơ liên quan đến táo bón, ung thư đại tràng, tiểu đường, bệnh tim và thậm chí trầm cảm. Hướng dẫn thực tế để đạt đủ chất xơ mỗi ngày.',
    readTime: 7, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Chất xơ', 'Dinh dưỡng', 'Ruột', 'Microbiome', 'Táo bón'],
    content: `<p>Chất xơ là phần thực vật mà enzyme tiêu hóa của người không thể phân giải — nghe có vẻ "vô dụng", nhưng thực ra đây là <strong>nhiên liệu cho hàng tỷ vi khuẩn có lợi trong đường ruột</strong> của bạn. Và sức khỏe của hệ vi sinh đường ruột ảnh hưởng đến gần như mọi khía cạnh của sức khỏe tổng thể.</p>

<img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&q=80" alt="Thực phẩm giàu chất xơ" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Chất xơ hòa tan vs không hòa tan — khác nhau như thế nào?</h2>

<h3>Chất xơ hòa tan (Soluble fiber)</h3>
<p>Tan trong nước, tạo gel nhớt trong ruột → làm chậm hấp thu glucose (ổn định đường huyết), giảm cholesterol LDL, nuôi vi khuẩn có lợi (prebiotic). Có trong: yến mạch, đậu, táo, lê, chuối chưa chín, khoai lang.</p>

<h3>Chất xơ không hòa tan (Insoluble fiber)</h3>
<p>Không tan trong nước, tăng khối lượng phân, đẩy nhanh nhu động ruột → phòng táo bón, giảm thời gian tiếp xúc của chất độc với thành ruột. Có trong: cám lúa mì, rau xanh, vỏ hoa quả, ngũ cốc nguyên hạt.</p>

<blockquote style="border-left:4px solid #4caf50;padding:1rem 1.5rem;background:#f1f8e9;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Mỗi 8g chất xơ bổ sung vào chế độ ăn hàng ngày giảm 19% nguy cơ ung thư đại trực tràng và 15% nguy cơ bệnh tim mạch. Đây là một trong những mối liên hệ nhân-quả rõ ràng nhất trong dinh dưỡng học."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#4caf50">— Reynolds A. et al., The Lancet (2019)</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&q=80" alt="Rau củ quả giàu chất xơ" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Chất xơ và hệ vi sinh đường ruột (Microbiome)</h2>
<p>Vi khuẩn có lợi trong ruột lên men chất xơ tạo ra <strong>Short-Chain Fatty Acids (SCFAs)</strong> — đặc biệt là butyrate, propionate và acetate. Butyrate là nguồn năng lượng chính của tế bào niêm mạc đại tràng, có tác dụng chống ung thư, giảm viêm và tăng cường miễn dịch.</p>
<p>Chế độ ăn ít chất xơ làm suy giảm đa dạng vi khuẩn đường ruột, liên quan đến béo phì, viêm ruột mạn tính, tiểu đường type 2 và thậm chí trầm cảm (qua trục ruột-não).</p>

<h2>Top thực phẩm giàu chất xơ theo ẩm thực Việt</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5rem 0">
<tr style="background:#e8f5e9">
<th style="padding:.75rem;text-align:left;border:1px solid #c8e6c9">Thực phẩm</th>
<th style="padding:.75rem;text-align:left;border:1px solid #c8e6c9">Chất xơ</th>
<th style="padding:.75rem;text-align:left;border:1px solid #c8e6c9">Ghi chú</th>
</tr>
<tr><td style="padding:.75rem;border:1px solid #c8e6c9">Đậu đen (100g chín)</td><td style="padding:.75rem;border:1px solid #c8e6c9">8.7g</td><td style="padding:.75rem;border:1px solid #c8e6c9">Cả hòa tan lẫn không hòa tan</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #c8e6c9">Yến mạch (80g khô)</td><td style="padding:.75rem;border:1px solid #c8e6c9">8g</td><td style="padding:.75rem;border:1px solid #c8e6c9">Beta-glucan hòa tan, tốt cho tim mạch</td></tr>
<tr><td style="padding:.75rem;border:1px solid #c8e6c9">Rau muống (100g)</td><td style="padding:.75rem;border:1px solid #c8e6c9">2.1g</td><td style="padding:.75rem;border:1px solid #c8e6c9">Thực phẩm Việt phổ biến, giàu sắt</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #c8e6c9">Khoai lang (150g)</td><td style="padding:.75rem;border:1px solid #c8e6c9">3.8g</td><td style="padding:.75rem;border:1px solid #c8e6c9">GI thấp, beta-carotene cao</td></tr>
<tr><td style="padding:.75rem;border:1px solid #c8e6c9">Chuối chưa chín (1 quả)</td><td style="padding:.75rem;border:1px solid #c8e6c9">3.1g</td><td style="padding:.75rem;border:1px solid #c8e6c9">Tinh bột kháng — prebiotic tốt</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #c8e6c9">Gạo lứt (100g chín)</td><td style="padding:.75rem;border:1px solid #c8e6c9">1.8g</td><td style="padding:.75rem;border:1px solid #c8e6c9">Gấp 3 lần gạo trắng</td></tr>
</table>

<h2>Cách tăng chất xơ từ từ — tránh đầy hơi</h2>
<p>Tăng chất xơ đột ngột gây đầy hơi, chướng bụng vì vi khuẩn ruột cần thời gian thích nghi. Quy tắc: <strong>tăng 5g mỗi tuần</strong> cho đến khi đạt 25–30g/ngày, đồng thời uống nhiều nước hơn (chất xơ cần nước để hoạt động).</p>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Reynolds A. et al.: "Carbohydrate quality and human health: a series of systematic reviews and meta-analyses" — The Lancet (2019)<br/>
• Sonnenburg J.L., Bäckhed F.: "Diet–microbiota interactions as moderators of human metabolism" — Nature (2016)<br/>
• Dahl W.J., Stewart M.L.: "Position of the Academy of Nutrition and Dietetics: Health Implications of Dietary Fiber" — J Acad Nutr Diet (2015)<br/>
• Viện Dinh dưỡng Quốc gia: Khảo sát tình trạng dinh dưỡng Việt Nam (2020)</p>`
  },

  // ── BÀI 5: ĂN UỐNG THEO VÙNG ĐỊA TRUNG HẢI ─────────────────────────────
  {
    title: 'Chế độ ăn Địa Trung Hải: Bí quyết sống thọ 90+ của người Ý và Hy Lạp áp dụng tại Việt Nam',
    category: 'Góc dinh dưỡng', topic: 'Dinh dưỡng', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80',
    excerpt: 'Chế độ ăn Địa Trung Hải liên tục dẫn đầu bảng xếp hạng "chế độ ăn tốt nhất thế giới" nhiều năm liền theo US News & World Report. Không phải vì nguyên liệu đắt tiền, mà vì nguyên tắc đơn giản có thể áp dụng ngay với thực phẩm Việt Nam.',
    readTime: 9, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Địa Trung Hải', 'Chế độ ăn', 'Sống thọ', 'Tim mạch', 'Dinh dưỡng'],
    content: `<p>Tại đảo Sardinia (Ý) và Ikaria (Hy Lạp) — hai trong số "Blue Zones" (vùng trường thọ) nổi tiếng thế giới — tỷ lệ người sống đến 100 tuổi cao gấp 10 lần mức trung bình toàn cầu. Nghiên cứu kéo dài nhiều thập kỷ chỉ ra: <strong>chế độ ăn là yếu tố quan trọng nhất</strong>, không phải gen di truyền.</p>

<img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80" alt="Chế độ ăn Địa Trung Hải" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Bằng chứng khoa học ấn tượng nhất</h2>
<p>Nghiên cứu PREDIMED (2013) — một trong những thử nghiệm lâm sàng dinh dưỡng lớn nhất lịch sử với 7.447 người tham gia tại Tây Ban Nha — cho thấy chế độ ăn Địa Trung Hải giảm <strong>30% nguy cơ biến cố tim mạch nghiêm trọng</strong> (nhồi máu cơ tim, đột quỵ, tử vong do tim) so với chế độ ăn ít béo thông thường.</p>

<h2>Nguyên tắc cốt lõi của chế độ ăn Địa Trung Hải</h2>

<h3>Ăn nhiều (hàng ngày)</h3>
<ul>
<li>Rau củ đa dạng — ít nhất 3–4 khẩu phần/ngày</li>
<li>Trái cây tươi — 2–3 khẩu phần/ngày</li>
<li>Ngũ cốc nguyên hạt — bánh mì nguyên cám, gạo lứt, yến mạch</li>
<li>Đậu các loại — đậu lăng, đậu gà, đậu đen</li>
<li>Dầu ô liu extra virgin — nguồn chất béo chính</li>
<li>Thảo mộc và gia vị — thay muối khi có thể</li>
</ul>

<h3>Ăn vừa phải (hàng tuần)</h3>
<ul>
<li>Cá và hải sản — 2–3 lần/tuần</li>
<li>Gia cầm, trứng, pho mát — 1–2 lần/tuần</li>
<li>Rượu vang đỏ — nếu có uống, giới hạn 1 ly/ngày (tùy chọn)</li>
</ul>

<h3>Hạn chế tối đa (hàng tháng)</h3>
<ul>
<li>Thịt đỏ và thịt chế biến</li>
<li>Đồ ngọt, bánh kẹo, nước ngọt</li>
<li>Thực phẩm chiên rán trong dầu mỡ nhiều</li>
</ul>

<blockquote style="border-left:4px solid #4caf50;padding:1rem 1.5rem;background:#f1f8e9;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Không có thực phẩm 'siêu việt' nào trong chế độ ăn Địa Trung Hải — sức mạnh nằm ở sự kết hợp và tính nhất quán. Đây là lối sống, không phải chế độ kiêng."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#4caf50">— Estruch R. et al., New England Journal of Medicine (2018)</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&q=80" alt="Bữa ăn lành mạnh rau củ cá" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Áp dụng tại Việt Nam — thay thế thông minh</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5rem 0">
<tr style="background:#e8f5e9">
<th style="padding:.75rem;text-align:left;border:1px solid #c8e6c9">Địa Trung Hải gốc</th>
<th style="padding:.75rem;text-align:left;border:1px solid #c8e6c9">Thay thế Việt Nam</th>
</tr>
<tr><td style="padding:.75rem;border:1px solid #c8e6c9">Dầu ô liu</td><td style="padding:.75rem;border:1px solid #c8e6c9">Dầu mè, dầu lạc ép lạnh (thêm dầu ô liu khi nấu nguội)</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #c8e6c9">Cá hồi, cá mòi</td><td style="padding:.75rem;border:1px solid #c8e6c9">Cá tra, cá thu, cá ngừ, cá bạc má</td></tr>
<tr><td style="padding:.75rem;border:1px solid #c8e6c9">Đậu lăng, đậu gà</td><td style="padding:.75rem;border:1px solid #c8e6c9">Đậu xanh, đậu đen, đậu đỏ</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #c8e6c9">Bánh mì nguyên cám</td><td style="padding:.75rem;border:1px solid #c8e6c9">Gạo lứt, khoai lang, bánh mì đen</td></tr>
<tr><td style="padding:.75rem;border:1px solid #c8e6c9">Pho mát, sữa chua Hy Lạp</td><td style="padding:.75rem;border:1px solid #c8e6c9">Đậu phụ non, sữa chua không đường</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #c8e6c9">Thảo mộc Địa Trung Hải</td><td style="padding:.75rem;border:1px solid #c8e6c9">Rau mùi, húng quế, sả, gừng, nghệ</td></tr>
</table>

<h2>Lợi ích được chứng minh khoa học</h2>
<ul>
<li><strong>Tim mạch:</strong> Giảm 30% nguy cơ biến cố tim mạch (PREDIMED, 2013/2018)</li>
<li><strong>Tiểu đường:</strong> Giảm 52% nguy cơ tiểu đường type 2 (Salas-Salvadó, 2011)</li>
<li><strong>Ung thư:</strong> Giảm 14% nguy cơ tử vong do ung thư (Schwingshackl, 2017)</li>
<li><strong>Não bộ:</strong> Giảm 35% nguy cơ Alzheimer (Morris, 2015)</li>
<li><strong>Trầm cảm:</strong> Ăn theo MedDiet giảm 33% nguy cơ trầm cảm (Lassale, 2019)</li>
</ul>

<h2>Bắt đầu từ đâu — 3 thay đổi đơn giản nhất</h2>
<ol>
<li>Thay cơm trắng buổi tối bằng cơm gạo lứt hoặc khoai lang</li>
<li>Ăn cá ít nhất 2 lần/tuần thay vì thịt heo</li>
<li>Thêm một bát rau xanh vào mỗi bữa chính</li>
</ol>
<p>Ba thay đổi này thôi đã đưa bạn tiến đáng kể theo hướng chế độ ăn Địa Trung Hải — không cần nguyên liệu nhập khẩu đắt tiền.</p>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Estruch R. et al.: "Primary Prevention of Cardiovascular Disease with a Mediterranean Diet Supplemented with Extra-Virgin Olive Oil or Nuts" — NEJM (2018)<br/>
• Sofi F. et al.: "Adherence to Mediterranean diet and health status: meta-analysis" — BMJ (2008)<br/>
• Buettner D.: "The Blue Zones Solution" — National Geographic Society (2015)<br/>
• Lassale C. et al.: "Healthy dietary indices and risk of depressive outcomes" — Mol Psychiatry (2019)<br/>
• Viện Dinh dưỡng Quốc gia: Hướng dẫn dinh dưỡng Việt Nam (2023)</p>`
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
