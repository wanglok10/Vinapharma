// Seed 5 bài Góc Làm Đẹp — node seed-goc-lam-dep.js
if (require.main === module) {
  require('dotenv').config();
}
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');

const posts = [

  // ── BÀI 1: CHỐNG NẮNG ────────────────────────────────────────────────────
  {
    title: 'Chống nắng SPF: Bước skincare quan trọng nhất mà 90% người Việt đang bỏ qua',
    category: 'Góc làm đẹp', topic: 'Làm đẹp', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=80',
    excerpt: 'Các chuyên gia da liễu đồng thuận: nếu chỉ được dùng một sản phẩm skincare, hãy chọn kem chống nắng. Tuy vậy, hơn 90% người Việt dùng sai cách hoặc bỏ qua bước này hoàn toàn. Bài viết giải thích khoa học đằng sau SPF, PA, UVA/UVB và cách chọn kem chống nắng phù hợp với từng loại da.',
    readTime: 7, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Chống nắng', 'SPF', 'UVA UVB', 'Skincare', 'Chăm sóc da'],
    content: `<p>Theo Tổ chức Y tế Thế giới (WHO), tia UV là nguyên nhân hàng đầu gây <strong>lão hóa da sớm</strong>, đốm nám, và ung thư da. Đáng lo ngại, tia UVA — loại xuyên qua cả kính cửa sổ và mây — tấn công da suốt 365 ngày, ngay cả những ngày trời âm u.</p>

<img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=80" alt="Kem chống nắng SPF bảo vệ da" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>SPF và PA là gì? Hiểu đúng để chọn đúng</h2>
<p><strong>SPF (Sun Protection Factor)</strong> đo khả năng chặn tia UVB — loại tia gây cháy nắng và ung thư da. SPF 30 chặn 97% tia UVB; SPF 50 chặn 98%. Sự chênh lệch chỉ 1% nhưng ý nghĩa lâm sàng khá lớn với người có nguy cơ cao.</p>
<p><strong>PA (Protection Grade of UVA)</strong> là hệ thống Nhật Bản đo khả năng chặn tia UVA — loại gây nám, lão hóa và làm sạm da. PA+ đến PA++++ tương ứng mức bảo vệ tăng dần.</p>

<blockquote style="border-left:4px solid #e91e8c;padding:1rem 1.5rem;background:#fff0f7;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Kem chống nắng SPF 30 dùng đủ lượng và thoa lại đúng giờ hiệu quả hơn SPF 100 dùng sai cách. Lượng = 1/4 muỗng cà phê cho mặt, thoa lại mỗi 2 giờ."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#e91e8c">— TS. Henry Lim, Chủ tịch Hiệp hội Da liễu Hoa Kỳ</p>
</blockquote>

<h2>Sai lầm phổ biến khi dùng kem chống nắng</h2>
<ul>
<li><strong>Dùng quá ít:</strong> Nghiên cứu cho thấy hầu hết người chỉ thoa 20–50% lượng cần thiết, làm giảm hiệu quả chống nắng xuống còn SPF 3–7.</li>
<li><strong>Không thoa lại:</strong> Kem chống nắng mất hiệu quả sau 2 giờ, đặc biệt khi đổ mồ hôi hoặc tiếp xúc nước.</li>
<li><strong>Chỉ thoa khi ra ngoài nắng:</strong> Tia UVA xuyên qua kính — làm việc bên cửa sổ cả ngày vẫn cần chống nắng.</li>
<li><strong>Bỏ qua vùng cổ, tai, mu bàn tay:</strong> Đây là các vùng lão hóa nhanh nhất nhưng thường bị bỏ quên.</li>
</ul>

<img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&q=80" alt="Chăm sóc da mặt đúng cách" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Chọn kem chống nắng theo loại da</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5rem 0">
<tr style="background:#fce4ec">
<th style="padding:.75rem;text-align:left;border:1px solid #f8bbd0">Loại da</th>
<th style="padding:.75rem;text-align:left;border:1px solid #f8bbd0">Loại kem nên dùng</th>
<th style="padding:.75rem;text-align:left;border:1px solid #f8bbd0">Công thức phù hợp</th>
</tr>
<tr>
<td style="padding:.75rem;border:1px solid #f8bbd0">Da dầu, mụn</td>
<td style="padding:.75rem;border:1px solid #f8bbd0">Chemical / Hybrid</td>
<td style="padding:.75rem;border:1px solid #f8bbd0">Gel, fluid, kiềm dầu, niacinamide</td>
</tr>
<tr style="background:#fafafa">
<td style="padding:.75rem;border:1px solid #f8bbd0">Da khô, nhạy cảm</td>
<td style="padding:.75rem;border:1px solid #f8bbd0">Mineral (Zinc oxide)</td>
<td style="padding:.75rem;border:1px solid #f8bbd0">Cream, dưỡng ẩm, không cồn</td>
</tr>
<tr>
<td style="padding:.75rem;border:1px solid #f8bbd0">Da hỗn hợp</td>
<td style="padding:.75rem;border:1px solid #f8bbd0">Hybrid</td>
<td style="padding:.75rem;border:1px solid #f8bbd0">Lotion nhẹ, PA++++</td>
</tr>
</table>

<h2>Lượng kem cần dùng mỗi lần</h2>
<p>Quy tắc "<strong>hai ngón</strong>" (two-finger rule): bơm kem chống nắng dọc theo 2 ngón trỏ và giữa — đây là lượng đủ cho mặt và cổ. Với toàn thân, cần khoảng 30ml (1 muỗng canh đầy).</p>

<h2>Kem chống nắng có cần thiết vào mùa mưa?</h2>
<p>Có. Mây chỉ chặn được khoảng 20% tia UVA. Theo nghiên cứu đăng trên <em>Journal of the American Academy of Dermatology</em> (2020), 80% tia UV vẫn chạm đến da trong ngày trời mây. Thậm chí khi lái xe, tia UVA xuyên thẳng qua kính xe.</p>

<h2>Top thành phần chống nắng đáng tin</h2>
<ul>
<li><strong>Zinc Oxide:</strong> Khoáng chất an toàn, phổ rộng, phù hợp da nhạy cảm và phụ nữ mang thai</li>
<li><strong>Tinosorb S/M:</strong> Bộ lọc hóa học thế hệ mới, ổn định quang học cao</li>
<li><strong>Uvinul A Plus:</strong> Chặn UVA hiệu quả, phổ biến trong kem Châu Âu</li>
<li><strong>Mexoryl SX/XL:</strong> Công nghệ L'Oréal, chống UVA phổ rộng</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• WHO: "Ultraviolet radiation and skin cancer" (2023)<br/>
• American Academy of Dermatology: "Sunscreen FAQs" (2024)<br/>
• Lim H.W. et al.: "Current challenges in photoprotection" — JAAD (2017)<br/>
• Bộ Y tế Việt Nam: Hướng dẫn phòng chống ung thư da (2022)<br/>
• Journal of the American Academy of Dermatology: "UV exposure through car windows" (2020)</p>`
  },

  // ── BÀI 2: COLLAGEN ──────────────────────────────────────────────────────
  {
    title: 'Collagen cho da: Uống hay thoa ngoài da hiệu quả hơn? Sự thật khoa học bạn cần biết',
    category: 'Góc làm đẹp', topic: 'Làm đẹp', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80',
    excerpt: 'Thị trường collagen tại Việt Nam đạt hàng nghìn tỷ đồng mỗi năm, nhưng bao nhiêu người thực sự hiểu collagen hoạt động như thế nào? Bài viết phân tích khoa học về collagen peptide dạng uống, collagen thoa ngoài da và cách kích thích cơ thể tự sản sinh collagen hiệu quả nhất.',
    readTime: 8, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Collagen', 'Làm đẹp', 'Chống lão hóa', 'Skincare', 'Da đẹp'],
    content: `<p>Collagen là protein phổ biến nhất trong cơ thể người — chiếm 30% tổng lượng protein — đóng vai trò "giàn giáo" giữ cho da đàn hồi, xương chắc khỏe và khớp linh hoạt. Từ khoảng 25 tuổi, cơ thể bắt đầu giảm sản xuất collagen khoảng <strong>1% mỗi năm</strong>.</p>

<img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=80" alt="Collagen và làn da đẹp" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Collagen thoa ngoài da có thật sự hiệu quả?</h2>
<p>Đây là sự thật ít ai muốn nghe: <strong>collagen trong kem dưỡng da không thể thẩm thấu vào tầng bì</strong>. Phân tử collagen quá lớn (300.000 dalton) để xuyên qua hàng rào bảo vệ của da. Chúng chỉ tạo màng giữ ẩm trên bề mặt — không kích thích sinh collagen mới.</p>
<p>Các sản phẩm "chứa collagen" thực chất cung cấp tác dụng <em>moisturizing</em> (dưỡng ẩm) tạm thời. Không phải lừa dối — nhưng không phải phép màu.</p>

<h2>Collagen uống (Collagen Peptide) — khoa học nói gì?</h2>
<p>Collagen thủy phân (hydrolyzed collagen / collagen peptide) là collagen đã bị cắt nhỏ thành các đoạn 2–10 amino acid (khoảng 3.000–5.000 dalton). Chúng được hấp thu vào máu và có thể kích thích nguyên bào sợi (fibroblast) sản xuất collagen mới.</p>

<blockquote style="border-left:4px solid #e91e8c;padding:1rem 1.5rem;background:#fff0f7;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Các nghiên cứu lâm sàng cho thấy uống 2.5–10g collagen peptide mỗi ngày trong 8–12 tuần cải thiện đáng kể độ đàn hồi, độ ẩm da và giảm nếp nhăn."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#e91e8c">— Proksch E. et al., Skin Pharmacology and Physiology (2014)</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&q=80" alt="Thực phẩm tăng cường collagen tự nhiên" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Bằng chứng lâm sàng đáng chú ý</h2>
<ul>
<li>Nghiên cứu 2014 (Proksch et al.): 69 phụ nữ uống 2.5g collagen peptide/ngày trong 8 tuần — cải thiện độ đàn hồi da 15%, giảm khô da 12%</li>
<li>Nghiên cứu 2019 (Journal of Drugs in Dermatology): 10g/ngày trong 60 ngày giảm rõ rệt nếp nhăn quanh mắt</li>
<li>Meta-analysis 2021 (International Journal of Dermatology): Phân tích 19 nghiên cứu với 1.125 người — collagen peptide có tác dụng cải thiện da có ý nghĩa thống kê</li>
</ul>

<h2>Cách kích thích cơ thể tự sản sinh collagen</h2>
<p>Đây mới là chiến lược hiệu quả và tiết kiệm nhất:</p>
<ul>
<li><strong>Vitamin C:</strong> Là đồng yếu tố không thể thiếu trong tổng hợp collagen. Thiếu vitamin C → collagen không hình thành được. Dùng serum vitamin C 10–20% buổi sáng</li>
<li><strong>Retinol:</strong> Kích thích trực tiếp nguyên bào sợi tăng sản xuất collagen và giảm enzyme phân hủy collagen (MMP)</li>
<li><strong>Tránh tia UV:</strong> UV phá vỡ collagen hiện có và ức chế sản xuất collagen mới — đây là lý do chống nắng là ưu tiên số 1</li>
<li><strong>Không hút thuốc:</strong> Nicotine co mạch máu, giảm cung cấp dinh dưỡng cho da, đẩy nhanh phân hủy collagen</li>
<li><strong>Protein đầy đủ:</strong> Collagen được tổng hợp từ glycine, proline, hydroxyproline — cần ăn đủ thịt, cá, đậu</li>
</ul>

<h2>Thực phẩm giàu tiền chất collagen</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5rem 0">
<tr style="background:#fce4ec">
<th style="padding:.75rem;text-align:left;border:1px solid #f8bbd0">Thực phẩm</th>
<th style="padding:.75rem;text-align:left;border:1px solid #f8bbd0">Tác dụng</th>
</tr>
<tr><td style="padding:.75rem;border:1px solid #f8bbd0">Nước hầm xương</td><td style="padding:.75rem;border:1px solid #f8bbd0">Collagen Type I, II, III tự nhiên</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #f8bbd0">Ổi, cam, ớt chuông</td><td style="padding:.75rem;border:1px solid #f8bbd0">Vitamin C — kích thích tổng hợp collagen</td></tr>
<tr><td style="padding:.75rem;border:1px solid #f8bbd0">Trứng</td><td style="padding:.75rem;border:1px solid #f8bbd0">Proline — amino acid cấu tạo collagen</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #f8bbd0">Cá hồi, cá ngừ</td><td style="padding:.75rem;border:1px solid #f8bbd0">Omega-3 chống viêm, bảo vệ collagen</td></tr>
<tr><td style="padding:.75rem;border:1px solid #f8bbd0">Rau xanh đậm</td><td style="padding:.75rem;border:1px solid #f8bbd0">Chlorophyll, vitamin C, kẽm</td></tr>
</table>

<h2>Nên chọn collagen nào?</h2>
<p>Nếu muốn bổ sung collagen peptide: chọn loại <strong>thủy phân (hydrolyzed)</strong>, trọng lượng phân tử thấp (&lt;5000 dalton), nguồn gốc từ cá biển (marine collagen) có độ hấp thu cao hơn collagen bò. Dùng ít nhất 8–12 tuần mới thấy kết quả. Kết hợp vitamin C để tối ưu hiệu quả.</p>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Proksch E. et al.: "Oral supplementation of specific collagen peptides has beneficial effects on human skin physiology" — Skin Pharmacol Physiol (2014)<br/>
• Barati M. et al.: "Collagen supplementation for skin health" — J Drugs Dermatol (2020)<br/>
• Choi F.D. et al.: "Oral collagen supplementation: A systematic review" — Int J Dermatol (2019)<br/>
• León-López A. et al.: "Hydrolyzed collagen sources and applications" — Molecules (2019)</p>`
  },

  // ── BÀI 3: TÓC KHÔ GÃY RỤNG ─────────────────────────────────────────────
  {
    title: 'Tóc khô, gãy rụng nhiều: 7 nguyên nhân ẩn bên trong cơ thể và cách khắc phục từ gốc',
    category: 'Góc làm đẹp', topic: 'Làm đẹp', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80',
    excerpt: 'Rụng từ 50–100 sợi tóc mỗi ngày là bình thường. Nhưng nếu bạn thấy tóc đầy gối, bít lỗ thoát bồn tắm hay tóc ngày càng thưa dần — đây là tín hiệu cơ thể đang gửi đến bạn. 90% trường hợp rụng tóc bất thường có nguyên nhân có thể điều trị được.',
    readTime: 9, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Rụng tóc', 'Tóc khô', 'Chăm sóc tóc', 'Sức khỏe tóc', 'Làm đẹp'],
    content: `<p>Mỗi sợi tóc có vòng đời 2–7 năm, trải qua 3 giai đoạn: <strong>mọc (anagen)</strong> chiếm 85–90% số tóc, <strong>chuyển tiếp (catagen)</strong> và <strong>nghỉ (telogen)</strong>. Rụng tóc bất thường xảy ra khi chu kỳ này bị gián đoạn — và nguyên nhân thường đến từ bên trong cơ thể, không phải từ dầu gội.</p>

<img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80" alt="Chăm sóc tóc khỏe mạnh" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>7 nguyên nhân bên trong khiến tóc rụng nhiều</h2>

<h3>1. Thiếu sắt (Ferritin thấp)</h3>
<p>Ferritin là protein dự trữ sắt trong cơ thể — và nang tóc cần sắt để hoạt động. Nghiên cứu đăng trên <em>Journal of the American Academy of Dermatology</em> cho thấy ferritin &lt;30 ng/mL liên quan chặt chẽ đến rụng tóc ở phụ nữ. Xét nghiệm máu cơ bản có thể phát hiện điều này.</p>

<h3>2. Suy giáp / Cường giáp</h3>
<p>Hormone tuyến giáp điều tiết chu kỳ tóc. Cả suy giáp lẫn cường giáp đều gây rụng tóc toàn đầu, thường lan rộng và đồng đều. Kiểm tra TSH, T3, T4 nếu kèm theo mệt mỏi, tăng/giảm cân bất thường.</p>

<h3>3. Rối loạn hormone androgen</h3>
<p>DHT (dihydrotestosterone) là dạng testosterone hoạt động mạnh, gây thu nhỏ nang tóc theo thời gian. Ảnh hưởng cả nam lẫn nữ — ở nữ thường biểu hiện tóc thưa đỉnh đầu và đường chân tóc rộng ra.</p>

<h3>4. Thiếu Vitamin D</h3>
<p>Thụ thể vitamin D (VDR) có mặt trong nang tóc. Vitamin D thấp liên quan đến Telogen Effluvium — rụng tóc lan tỏa. Người Việt dù sống vùng nhiệt đới vẫn thiếu vitamin D vì ít ra nắng và dùng kem chống nắng.</p>

<h3>5. Stress mạn tính (Cortisol cao)</h3>
<p>Cortisol cao kéo dài đẩy nang tóc vào giai đoạn telogen sớm. Điều đặc biệt: tóc rụng thường xảy ra 3–6 tháng <em>sau</em> sự kiện gây stress, khiến nhiều người không nhận ra mối liên hệ.</p>

<blockquote style="border-left:4px solid #e91e8c;padding:1rem 1.5rem;background:#fff0f7;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Telogen Effluvium — rụng tóc do stress — là dạng rụng tóc phổ biến thứ hai ở phụ nữ. Tin tốt là tóc thường mọc lại hoàn toàn khi nguyên nhân được kiểm soát."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#e91e8c">— TS. Lynne Goldberg, Đại học Boston Medical Center</p>
</blockquote>

<h3>6. Thiếu kẽm và biotin</h3>
<p>Kẽm cần thiết cho tổng hợp protein tóc và phân chia tế bào nang tóc. Biotin (B7) hỗ trợ keratin — protein cấu tạo tóc. Cả hai đều cần từ chế độ ăn; thiếu phổ biến ở người ăn kiêng hoặc ăn chay không cân đối.</p>

<h3>7. Protein không đủ</h3>
<p>Tóc cấu tạo gần 95% là keratin — protein. Ăn kiêng thiếu protein, chế độ ăn thuần chay không đủ amino acid thiết yếu có thể khiến cơ thể "hy sinh" tóc để ưu tiên cho các cơ quan quan trọng hơn.</p>

<img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80" alt="Chế độ dinh dưỡng tốt cho tóc" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Phân biệt các dạng rụng tóc</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5rem 0">
<tr style="background:#fce4ec">
<th style="padding:.75rem;text-align:left;border:1px solid #f8bbd0">Dạng</th>
<th style="padding:.75rem;text-align:left;border:1px solid #f8bbd0">Biểu hiện</th>
<th style="padding:.75rem;text-align:left;border:1px solid #f8bbd0">Nguyên nhân chính</th>
</tr>
<tr><td style="padding:.75rem;border:1px solid #f8bbd0">Telogen Effluvium</td><td style="padding:.75rem;border:1px solid #f8bbd0">Rụng đều toàn đầu, đột ngột</td><td style="padding:.75rem;border:1px solid #f8bbd0">Stress, thiếu dinh dưỡng, hậu COVID</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #f8bbd0">Androgenetic Alopecia</td><td style="padding:.75rem;border:1px solid #f8bbd0">Tóc thưa đỉnh đầu, tiến triển chậm</td><td style="padding:.75rem;border:1px solid #f8bbd0">Di truyền + DHT</td></tr>
<tr><td style="padding:.75rem;border:1px solid #f8bbd0">Alopecia Areata</td><td style="padding:.75rem;border:1px solid #f8bbd0">Rụng thành mảng tròn</td><td style="padding:.75rem;border:1px solid #f8bbd0">Tự miễn</td></tr>
</table>

<h2>Chăm sóc tóc đúng cách từ bên ngoài</h2>
<ul>
<li><strong>Gội đúng tần suất:</strong> Da đầu dầu: 2–3 lần/tuần; da đầu khô: 1–2 lần/tuần</li>
<li><strong>Tránh nước nóng:</strong> Làm khô dầu tự nhiên, gây khô và gãy. Dùng nước ấm hoặc mát</li>
<li><strong>Không chải khi tóc ướt:</strong> Tóc ướt yếu hơn 30%, dễ đứt gãy. Dùng lược răng thưa</li>
<li><strong>Hạn chế nhiệt:</strong> Máy sấy, uốn, duỗi — luôn dùng serum nhiệt bảo vệ</li>
<li><strong>Massage da đầu:</strong> 5 phút/ngày kích thích tuần hoàn, tăng nuôi dưỡng nang tóc</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Almohanna H.M. et al.: "The Role of Vitamins and Minerals in Hair Loss" — Dermatol Ther (2019)<br/>
• Trüeb R.M.: "Serum Biotin Levels in Women Complaining of Hair Loss" — IJTS (2016)<br/>
• Goldberg L.J., Lenzy Y.: "Nutrition and hair" — Clin Dermatol (2010)<br/>
• Bệnh viện Da liễu TP.HCM: Hướng dẫn chẩn đoán và điều trị rụng tóc (2023)</p>`
  },

  // ── BÀI 4: DƯỠNG ẨM ─────────────────────────────────────────────────────
  {
    title: 'Dưỡng ẩm da đúng cách: Tại sao bạn thoa kem mãi mà da vẫn khô và cách khắc phục',
    category: 'Góc làm đẹp', topic: 'Làm đẹp', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=1200&q=80',
    excerpt: 'Da khô không phải do thiếu kem dưỡng — mà do dùng sai loại, sai thứ tự hoặc sai thời điểm. Hiểu cơ chế dưỡng ẩm theo khoa học giúp bạn chọn đúng sản phẩm và tiết kiệm chi phí đáng kể.',
    readTime: 7, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Dưỡng ẩm', 'Da khô', 'Skincare', 'Humectant', 'Chăm sóc da'],
    content: `<p>Hàng rào bảo vệ da (skin barrier) hoạt động như một lớp gạch-vữa: tế bào sừng là "gạch", lớp lipid (ceramide, cholesterol, fatty acid) là "vữa". Khi hàng rào này bị tổn thương, nước bốc hơi qua da (TEWL — transepidermal water loss) tăng cao, gây khô, bong tróc, kích ứng.</p>

<img src="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=900&q=80" alt="Dưỡng ẩm da đúng cách" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>3 loại thành phần dưỡng ẩm — và tại sao bạn cần cả 3</h2>

<h3>Humectants (Chất giữ ẩm)</h3>
<p>Hút nước từ không khí và tầng bì vào tầng biểu bì. Gồm: <strong>Hyaluronic acid, Glycerin, Panthenol, Aloe vera, Urea</strong>. Dùng trên da ẩm (sau rửa mặt, chưa lau khô hoàn toàn) để hút nước tốt hơn. Nhược điểm: nếu dùng một mình trong môi trường khô, có thể hút nước ngược từ da ra ngoài.</p>

<h3>Emollients (Chất làm mềm)</h3>
<p>Lấp đầy "khe hở" giữa các tế bào sừng, làm da mềm mịn và giảm TEWL. Gồm: <strong>Squalane, Jojoba oil, Ceramide, Fatty acid</strong>. Đây là thành phần tạo cảm giác da mềm ngay sau khi dùng.</p>

<h3>Occlusives (Chất khóa ẩm)</h3>
<p>Tạo màng vật lý trên bề mặt da, ngăn nước bốc hơi. Gồm: <strong>Petrolatum (vaseline), Beeswax, Dimethicone, Lanolin</strong>. Petrolatum hiệu quả nhất — giảm TEWL đến 99% — nhưng nhiều người ngại dùng vì texture nặng.</p>

<blockquote style="border-left:4px solid #e91e8c;padding:1rem 1.5rem;background:#fff0f7;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Công thức lý tưởng cho một sản phẩm dưỡng ẩm là kết hợp cả 3 loại: humectant hút nước vào, emollient làm mềm, occlusive giữ ẩm không thoát ra. Dùng riêng lẻ bất kỳ loại nào cũng kém hiệu quả hơn."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#e91e8c">— GS. Patricia Farris, Đại học Tulane, chuyên gia da liễu</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=900&q=80" alt="Sản phẩm dưỡng da" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Thứ tự dưỡng ẩm đúng</h2>
<p>Quy tắc: <strong>thoa từ loãng đến đặc</strong>, từ hoạt chất đến khóa ẩm.</p>
<ol>
<li>Toner / Essence (pH thấp, nước)</li>
<li>Serum (hyaluronic acid, vitamin C...)</li>
<li>Kem mắt (eye cream)</li>
<li>Moisturizer (kem dưỡng — kết hợp 3 loại)</li>
<li>Dầu dưỡng (facial oil — occlusive cuối cùng, ban đêm)</li>
<li>Kem chống nắng (buổi sáng, bước cuối)</li>
</ol>

<h2>Những lý do da vẫn khô dù dưỡng ẩm đều đặn</h2>
<ul>
<li><strong>Dùng sản phẩm có cồn denatured:</strong> Cồn biến tính bốc hơi nhanh, kéo nước từ da theo — cảm giác tươi mát tức thì nhưng gây khô lâu dài</li>
<li><strong>Rửa mặt quá kỹ / quá nhiều lần:</strong> Phá hủy lớp dầu tự nhiên và hàng rào lipid</li>
<li><strong>Thoa quá ít sản phẩm:</strong> Không đủ tạo hiệu ứng màng bảo vệ</li>
<li><strong>Không thoa khi da còn ẩm:</strong> Humectant kém hiệu quả khi da đã khô hoàn toàn</li>
<li><strong>Hàng rào da tổn thương:</strong> Tẩy tế bào chết quá nhiều, dùng retinol sai cách, dị ứng — cần phục hồi barrier trước</li>
<li><strong>Thiếu nước từ bên trong:</strong> Uống đủ 2–2.5L nước/ngày là nền tảng của mọi routine</li>
</ul>

<h2>Phục hồi hàng rào bảo vệ da (Skin Barrier Repair)</h2>
<p>Nếu da đang trong tình trạng kích ứng, bong tróc, châm chích — tạm ngừng tất cả hoạt chất, chỉ dùng:</p>
<ul>
<li>Sữa rửa mặt dịu nhẹ không sulfate, pH 4.5–5.5</li>
<li>Kem dưỡng chứa <strong>Ceramide + Cholesterol + Fatty acid</strong> (tỷ lệ vàng 3:1:1 theo nghiên cứu Elias et al.)</li>
<li>Tránh nước nóng, tránh tẩy da chết</li>
<li>Petrolatum hoặc vaseline phủ lên ban đêm (slugging)</li>
</ul>
<p>Hàng rào da thường phục hồi sau 2–4 tuần nếu được chăm sóc đúng cách.</p>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Elias P.M.: "Skin barrier function" — Current Allergy and Asthma Reports (2008)<br/>
• Sethi A. et al.: "Moisturizers: The Slippery Road" — Indian Journal of Dermatology (2016)<br/>
• Draelos Z.D.: "The science behind skin care: Moisturizers" — JAAD (2018)<br/>
• Bệnh viện Da liễu Hà Nội: Hướng dẫn chăm sóc da khô (2023)</p>`
  },

  // ── BÀI 5: LÀM ĐẸP TỪ BÊN TRONG ─────────────────────────────────────────
  {
    title: 'Làm đẹp từ bên trong: 8 thực phẩm khoa học chứng minh giúp da sáng khỏe tự nhiên',
    category: 'Góc làm đẹp', topic: 'Làm đẹp', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80',
    excerpt: 'Không có loại kem dưỡng nào bù đắp được chế độ ăn kém. Da là tấm gương phản chiếu sức khỏe nội tạng — và khoa học dinh dưỡng ngày càng chứng minh điều này. Khám phá 8 nhóm thực phẩm được nghiên cứu lâm sàng, thực sự mang lại làn da sáng khỏe từ bên trong.',
    readTime: 8, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Làm đẹp', 'Dinh dưỡng cho da', 'Da đẹp', 'Chống lão hóa', 'Thực phẩm'],
    content: `<p>Ngành dinh dưỡng da liễu (nutricosmetics) đang bùng nổ với hàng trăm nghiên cứu mỗi năm. Kết quả ngày càng rõ: những gì bạn ăn ảnh hưởng đến da nhiều hơn những gì bạn thoa lên mặt. Đây là 8 nhóm thực phẩm được hỗ trợ bởi bằng chứng lâm sàng.</p>

<img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80" alt="Thực phẩm làm đẹp da tự nhiên" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>1. Cà chua — Chống oxy hóa và bảo vệ khỏi UV</h2>
<p>Cà chua giàu <strong>lycopene</strong> — carotenoid mạnh nhất trong rau củ. Nghiên cứu của Stahl W. et al. (2001) cho thấy tiêu thụ 40g cà chua cô đặc mỗi ngày trong 10 tuần giảm 33% tổn thương da do UV. Lycopene hấp thu tốt hơn khi nấu chín và kết hợp dầu ô liu.</p>

<h2>2. Cá hồi và cá béo — Omega-3 chống viêm</h2>
<p>Omega-3 (EPA và DHA) ức chế cytokine gây viêm — nguyên nhân của mụn, đỏ da, và lão hóa da. Nghiên cứu đăng trên <em>American Journal of Clinical Nutrition</em> (2012): người ăn cá béo 3 lần/tuần có da đàn hồi tốt hơn và ít nếp nhăn hơn đáng kể sau 3 tháng.</p>

<h2>3. Quả bơ — Vitamin E và chất béo lành mạnh</h2>
<p>Bơ chứa vitamin E (chống oxy hóa bảo vệ màng tế bào), lutein (chống tia xanh), và chất béo không bão hòa đơn giúp hấp thu các vitamin tan trong dầu (A, D, E, K). Một nghiên cứu 2022 trên <em>Journal of Cosmetic Dermatology</em> kết luận: bổ sung bơ hàng ngày cải thiện độ đàn hồi và độ ẩm da sau 8 tuần.</p>

<blockquote style="border-left:4px solid #e91e8c;padding:1rem 1.5rem;background:#fff0f7;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Da là cơ quan chịu hậu quả cuối cùng của tình trạng dinh dưỡng. Khi cơ thể thiếu hụt, các cơ quan thiết yếu (tim, não, thận) được ưu tiên — da là nơi đầu tiên nhường nhịn."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#e91e8c">— GS. Rajani Katta, Đại học McGovern Medical School</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80" alt="Rau quả tươi tốt cho da" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>4. Rau lá xanh đậm — Vitamin C và folate</h2>
<p>Rau chân vịt, cải xoăn, bó xôi cung cấp vitamin C (tổng hợp collagen), folate (phân chia tế bào da), và beta-carotene (tiền chất vitamin A). Lutein và zeaxanthin trong rau lá xanh còn bảo vệ da khỏi tổn thương oxy hóa do ánh sáng xanh từ màn hình.</p>

<h2>5. Quả mọng (Berry) — Anthocyanin mạnh</h2>
<p>Việt quất, dâu tây, mâm xôi giàu anthocyanin — flavonoid có tác dụng chống viêm và bảo vệ collagen mạnh hơn vitamin C đến 20 lần ở một số nghiên cứu. Chúng còn ức chế enzyme MMP (matrix metalloproteinase) phân hủy collagen và elastin.</p>

<h2>6. Trà xanh — EGCG bảo vệ DNA</h2>
<p>EGCG (epigallocatechin gallate) là polyphenol đặc trưng của trà xanh. Nghiên cứu lâm sàng cho thấy uống 2–3 tách trà xanh/ngày trong 12 tuần cải thiện độ đàn hồi da, giảm đỏ da do UV và tăng độ ẩm da. EGCG còn ức chế sản xuất androgen — giảm nguy cơ mụn do hormone.</p>

<h2>7. Hạt óc chó và hạt bí — Kẽm và Selen</h2>
<p><strong>Kẽm</strong> cần thiết cho tổng hợp keratin, phân chia tế bào da và kiểm soát tuyến bã nhờn. Nghiên cứu trên bệnh nhân mụn trứng cá cho thấy bổ sung kẽm hỗ trợ cải thiện mụn mức độ nhẹ-vừa. <strong>Selen</strong> trong hạt Brazil (chỉ 2 hạt/ngày đủ nhu cầu) bảo vệ da khỏi tổn thương UV thông qua enzyme glutathione peroxidase.</p>

<h2>8. Nước và thực phẩm giàu nước</h2>
<p>Da cần nước từ bên trong: dưa hấu (92% nước), dưa leo (96%), cần tây. Uống đủ 2–2.5L nước/ngày (tương đương 8–10 ly) giúp duy trì độ ẩm da, thải độc và cải thiện tuần hoàn máu nuôi da.</p>

<h2>Thực phẩm cần hạn chế vì tác hại với da</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5rem 0">
<tr style="background:#fce4ec">
<th style="padding:.75rem;text-align:left;border:1px solid #f8bbd0">Thực phẩm</th>
<th style="padding:.75rem;text-align:left;border:1px solid #f8bbd0">Tác hại với da</th>
</tr>
<tr><td style="padding:.75rem;border:1px solid #f8bbd0">Đường tinh luyện, GI cao</td><td style="padding:.75rem;border:1px solid #f8bbd0">Glycation — collagen bị "đường hóa", cứng và dễ gãy</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #f8bbd0">Sữa bò (đặc biệt skim milk)</td><td style="padding:.75rem;border:1px solid #f8bbd0">Tăng IGF-1, kích thích tiết bã nhờn</td></tr>
<tr><td style="padding:.75rem;border:1px solid #f8bbd0">Thức ăn chế biến sẵn</td><td style="padding:.75rem;border:1px solid #f8bbd0">Omega-6 cao, gây viêm mạn tính</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #f8bbd0">Rượu bia</td><td style="padding:.75rem;border:1px solid #f8bbd0">Mất nước, giảm vitamin A, gây giãn mao mạch</td></tr>
</table>

<h2>Thực đơn mẫu "beauty diet" trong một ngày</h2>
<ul>
<li><strong>Sáng:</strong> Yến mạch + việt quất + hạt chia + sữa hạt</li>
<li><strong>Trưa:</strong> Cơm gạo lứt + cá hồi áp chảo + rau cải xào tỏi + salad bơ</li>
<li><strong>Tối:</strong> Súp bí đỏ + đậu phụ + rau xanh luộc + 2 hạt óc chó</li>
<li><strong>Snack:</strong> Trà xanh + cà chua bi + dâu tây tươi</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Stahl W. et al.: "Dietary tomato paste protects against ultraviolet light–induced erythema in humans" — JNutr (2001)<br/>
• Katta R., Desai S.P.: "Diet and dermatology: the role of dietary intervention in skin disease" — JClinAesthetDermatol (2014)<br/>
• Boelsma E. et al.: "Nutritional skin care" — AmJClinNutr (2001)<br/>
• Cao C. et al.: "Diet and skin aging—From the perspective of food nutrition" — Nutrients (2020)<br/>
• Bộ Y tế Việt Nam: Bảng nhu cầu dinh dưỡng khuyến nghị (2016)</p>`
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
