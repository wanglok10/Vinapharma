// Seed 5 bài Góc Làm Đẹp — node seed-goc-lam-dep.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');

const posts = [

  // ── BÀI 1: KEM CHỐNG NẮNG ─────────────────────────────────────────────────
  {
    title: 'Sự thật về SPF: Cách chọn và dùng kem chống nắng đúng để bảo vệ da thực sự',
    category: 'Góc làm đẹp', topic: 'Làm đẹp', featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=1200&q=80',
    excerpt: 'Kem chống nắng là bước skincare quan trọng nhất — quan trọng hơn cả serum hay kem dưỡng đắt tiền. Nhưng phần lớn mọi người dùng sai cách, sai lượng, hoặc chọn sai loại. Giải mã khoa học đằng sau con số SPF và cách bảo vệ da hiệu quả nhất trước lão hóa và ung thư da.',
    readTime: 7, published: true,
    tags: ['Chống nắng', 'SPF', 'Chăm sóc da', 'Chống lão hóa'],
    content: `<p>Các chuyên gia da liễu đồng thuận: nếu chỉ được chọn <strong>một</strong> sản phẩm skincare duy nhất, đó phải là kem chống nắng. 90% các dấu hiệu lão hóa da sớm — nếp nhăn, đốm nâu, da chảy xệ — là do tia UV từ mặt trời, không phải do tuổi tác. Tuy nhiên, theo khảo sát 2024, chỉ <strong>31% người Việt Nam</strong> dùng kem chống nắng đúng cách hàng ngày.</p>

<img src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=900&q=80" alt="Kem chống nắng và bảo vệ da" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>SPF là gì và con số đó thực sự có nghĩa gì?</h2>
<p>SPF (Sun Protection Factor) đo khả năng chống tia <strong>UVB</strong> — loại tia gây cháy nắng và ung thư da tế bào vảy. Cách đọc đúng:</p>
<ul>
<li><strong>SPF 15:</strong> Chặn ~93% tia UVB</li>
<li><strong>SPF 30:</strong> Chặn ~97% tia UVB</li>
<li><strong>SPF 50:</strong> Chặn ~98% tia UVB</li>
<li><strong>SPF 100:</strong> Chặn ~99% tia UVB</li>
</ul>
<p>Lưu ý: Không có sản phẩm nào chặn 100% tia UV. Và sự chênh lệch giữa SPF 50 và SPF 100 chỉ là 1% — nhỏ hơn nhiều người nghĩ.</p>

<h2>UVA vs UVB — Tại sao cần "Broad Spectrum"?</h2>
<p>SPF chỉ đo bảo vệ khỏi UVB. Nhưng <strong>UVA</strong> — chiếm 95% bức xạ UV chạm đến mặt đất — mới là thủ phạm chính gây:</p>
<ul>
<li>Lão hóa sớm (photoaging): nếp nhăn, đốm nâu, da sần sùi</li>
<li>Ung thư da tế bào hắc tố (melanoma) — loại nguy hiểm nhất</li>
<li>Tia UVA xuyên qua kính cửa sổ và mây — nghĩa là bạn vẫn bị tác động khi ngồi trong nhà cạnh cửa sổ</li>
</ul>
<p>Vì vậy, luôn chọn kem chống nắng ghi nhãn <strong>"Broad Spectrum"</strong> hoặc bảo vệ cả UVA + UVB.</p>

<img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80" alt="Chăm sóc da đúng cách" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Sai lầm phổ biến nhất: Bôi quá ít</h2>
<p>Để đạt mức SPF ghi trên nhãn, bạn cần bôi <strong>2mg/cm²</strong> — tương đương khoảng:</p>
<ul>
<li>¼ thìa cà phê (1,25ml) cho mặt và cổ</li>
<li>1 thìa canh (15ml) cho toàn thân</li>
</ul>
<p>Nghiên cứu cho thấy hầu hết mọi người chỉ bôi <strong>25–50%</strong> lượng cần thiết — có nghĩa là SPF 50 của bạn thực chất chỉ đang hoạt động ở mức SPF 7–12!</p>

<h2>Hóa học (Chemical) vs Khoáng chất (Mineral) — Chọn loại nào?</h2>
<p><strong>Chống nắng hóa học</strong> (avobenzone, oxybenzone, octinoxate): Thấm vào da, hấp thụ tia UV và chuyển thành nhiệt. Kết cấu nhẹ, dễ thấm, phù hợp da dầu. Nhược điểm: có thể gây kích ứng da nhạy cảm, cần bôi 20 phút trước khi ra nắng.</p>
<p><strong>Chống nắng khoáng chất</strong> (zinc oxide, titanium dioxide): Tạo lớp phản chiếu vật lý trên bề mặt da. An toàn hơn cho da nhạy cảm và trẻ em, hiệu quả ngay lập tức, ít gây kích ứng. Nhược điểm: dễ để lại vệt trắng (white cast).</p>

<h2>Quy tắc bôi lại — nhiều người bỏ qua</h2>
<p>Kem chống nắng cần được <strong>bôi lại mỗi 2 tiếng</strong> khi ở ngoài nắng — dù là loại chống nước. Mồ hôi, chà sát và tiếp xúc ánh sáng làm giảm hiệu quả dần. Nếu không muốn bôi lại kem nền, có thể dùng dạng xịt (spray) hoặc phấn chống nắng để dặm lên.</p>

<h2>5 nguyên tắc dùng kem chống nắng đúng</h2>
<ol>
<li>Dùng SPF 30+ hàng ngày, kể cả ngày mây hoặc trong nhà</li>
<li>Bôi đủ lượng (¼ thìa cà phê cho mặt)</li>
<li>Bôi lại sau mỗi 2 tiếng khi ra ngoài</li>
<li>Không bỏ qua cổ, tai, mu bàn tay</li>
<li>Chọn Broad Spectrum để bảo vệ cả UVA + UVB</li>
</ol>

<blockquote style="border-left:4px solid #cc1f1f;padding:1rem 1.5rem;background:#fff5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Nếu bạn chỉ làm được một điều cho làn da, hãy dùng kem chống nắng. Đây là bằng chứng chống lão hóa mạnh nhất mà khoa học da liễu có được."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#cc1f1f">— GS. Henry Lim, Chủ tịch Hiệp hội Da liễu Hoa Kỳ</p>
</blockquote>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• American Academy of Dermatology: "Sunscreen FAQs" (2024)<br/>
• Skin Cancer Foundation: "Sun Protection" (2024)<br/>
• Lim H.W. et al.: "Sunscreen in the prevention of skin cancer" — Photodermatology (2023)<br/>
• WHO: "Radiation: Ultraviolet (UV) radiation" (2024)<br/>
• Bệnh viện Da liễu TP.HCM: Hướng dẫn chăm sóc da vùng nhiệt đới (2023)</p>`
  },

  // ── BÀI 2: RETINOL VÀ THÀNH PHẦN ACTIVE ────────────────────────────────────
  {
    title: 'Retinol, Niacinamide, AHA/BHA: Hướng dẫn toàn diện về các thành phần skincare hot nhất',
    category: 'Góc làm đẹp', topic: 'Làm đẹp', featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=80',
    excerpt: 'Thị trường skincare ngập tràn các thành phần "thần kỳ" với lời hứa cải thiện da trong vài tuần. Nhưng không phải tất cả đều có bằng chứng khoa học vững chắc. Đây là hướng dẫn dựa trên bằng chứng về các thành phần dưỡng da thực sự hiệu quả — và cách dùng chúng đúng.',
    readTime: 9, published: true,
    tags: ['Retinol', 'Niacinamide', 'AHA BHA', 'Skincare', 'Thành phần mỹ phẩm'],
    content: `<p>Kệ dưỡng da của bạn có đang chứa đúng thứ? Trong hàng nghìn thành phần skincare, chỉ một số ít được nghiên cứu lâm sàng đủ mạnh để khẳng định hiệu quả. Hiểu đúng về từng thành phần giúp bạn đầu tư thông minh hơn và tránh được nhiều sai lầm gây hại cho da.</p>

<img src="https://images.unsplash.com/photo-1601612628452-9e99ced43a45?w=900&q=80" alt="Các thành phần skincare hiệu quả" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Retinol (Vitamin A) — "Vàng" của chống lão hóa</h2>
<p>Retinol là dẫn xuất của Vitamin A và là <strong>thành phần chống lão hóa được nghiên cứu nhiều nhất và chứng minh hiệu quả nhất</strong> trong lịch sử da liễu. FDA (Mỹ) chính thức công nhận là thành phần duy nhất được cấp phép ghi nhãn "chống lão hóa".</p>
<p><strong>Cơ chế:</strong> Retinol chuyển hóa thành retinoic acid trong da, kích thích sản xuất collagen, tăng tốc chu kỳ đổi mới tế bào da (cell turnover), thu nhỏ lỗ chân lông và giảm sắc tố melanin.</p>
<p><strong>Hiệu quả đã được chứng minh:</strong></p>
<ul>
<li>Giảm nếp nhăn nông và sâu sau 12–24 tuần dùng đều đặn</li>
<li>Mờ đốm nâu, tàn nhang, vết thâm sau mụn</li>
<li>Cải thiện kết cấu da, thu nhỏ lỗ chân lông</li>
<li>Giảm mụn trứng cá (dạng kê đơn tretinoin được FDA phê duyệt điều trị mụn)</li>
</ul>
<p><strong>Cách dùng đúng:</strong> Bắt đầu với nồng độ thấp (0,025–0,05%), dùng 2–3 lần/tuần vào buổi tối. Tăng dần tần suất sau 4–6 tuần. Luôn dùng kem chống nắng ban ngày vì retinol làm da nhạy cảm hơn với ánh sáng. Tránh dùng đồng thời với AHA/BHA, vitamin C hoặc benzoyl peroxide cho đến khi da quen.</p>

<img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80" alt="Quy trình skincare khoa học" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Niacinamide (Vitamin B3) — "Đa năng" nhất trong skincare</h2>
<p>Niacinamide là một trong những thành phần skincare được nghiên cứu nhiều nhất với phổ ứng dụng rộng nhất — và ít tác dụng phụ nhất. Phù hợp với hầu hết mọi loại da.</p>
<p><strong>Lợi ích đã được chứng minh:</strong></p>
<ul>
<li><strong>Làm sáng da:</strong> Ức chế chuyển melanin từ tế bào sắc tố sang tế bào sừng, giảm đốm nâu sau 4–8 tuần ở nồng độ 4–5%</li>
<li><strong>Thu nhỏ lỗ chân lông</strong> và kiểm soát dầu nhờn</li>
<li><strong>Củng cố hàng rào bảo vệ da</strong> bằng cách tăng cường ceramide và fatty acid</li>
<li><strong>Chống viêm</strong>, phù hợp da mụn và da nhạy cảm</li>
<li><strong>Kết hợp được với hầu hết thành phần khác</strong> — kể cả retinol, AHA, Vitamin C</li>
</ul>
<p><strong>Nồng độ hiệu quả:</strong> 2–5% cho hầu hết mục đích. Trên 10% có thể gây đỏ và kích ứng ở một số người.</p>

<h2>AHA & BHA — Exfoliation khoa học</h2>
<p><strong>AHA (Alpha Hydroxy Acid)</strong> — gồm glycolic acid, lactic acid, mandelic acid — là acid hòa tan hoạt động trên <em>bề mặt da</em>, phá vỡ liên kết giữa các tế bào chết. Phù hợp với da khô, da lão hóa, da xỉn màu.</p>
<p><strong>BHA (Beta Hydroxy Acid)</strong> — chủ yếu là salicylic acid — tan trong dầu, xâm nhập <em>sâu vào lỗ chân lông</em>, làm sạch bã nhờn và tế bào chết bên trong. Là lựa chọn tốt nhất cho da dầu mụn.</p>
<p><strong>Lưu ý quan trọng:</strong> Không dùng AHA/BHA cùng lúc với retinol trong một buổi tối (gây kích ứng). Luôn dùng SPF sau khi tẩy da chết hóa học. Bắt đầu 1–2 lần/tuần, không lạm dụng.</p>

<h2>Vitamin C — Chống oxy hóa và làm sáng da</h2>
<p>L-ascorbic acid (dạng Vitamin C ổn định nhất) ở nồng độ 10–20% giúp trung hòa gốc tự do từ UV, ức chế melanin và kích thích tổng hợp collagen. Tuy nhiên, Vitamin C rất dễ oxy hóa (chuyển cam/nâu) khi tiếp xúc ánh sáng và không khí. Bảo quản trong tủ lạnh, dùng buổi sáng trước kem chống nắng.</p>

<h2>Thứ tự ưu tiên cho người mới bắt đầu</h2>
<p>Nếu bạn đang xây dựng routine skincare, thứ tự ưu tiên:</p>
<ol>
<li>☀️ <strong>Kem chống nắng SPF 30+</strong> (sáng) — quan trọng nhất</li>
<li>💧 <strong>Kem dưỡng ẩm</strong> (ngày và đêm) — nền tảng</li>
<li>🌙 <strong>Retinol</strong> (tối, 2–3 lần/tuần) — chống lão hóa</li>
<li>✨ <strong>Niacinamide</strong> — làm sáng, kiểm soát dầu</li>
<li>🍊 <strong>Vitamin C serum</strong> (sáng) — chống oxy hóa</li>
</ol>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Zasada M. & Budzisz E.: "Retinoids: active molecules influencing skin structure formation" — Advances in Dermatology (2019)<br/>
• Gehring W.: "Nicotinic acid/niacinamide and the skin" — Journal of Cosmetic Dermatology (2004)<br/>
• American Academy of Dermatology: "Skin care on a budget" (2024)<br/>
• Cosmetic Ingredient Review (CIR): Safety Assessment of Salicylic Acid (2023)<br/>
• Hiệp hội Da liễu Việt Nam: Hướng dẫn chăm sóc da vùng nhiệt đới (2024)</p>`
  },

  // ── BÀI 3: MỤN TRỨNG CÁ ────────────────────────────────────────────────────
  {
    title: 'Mụn trứng cá: Nguyên nhân thực sự và phác đồ điều trị hiệu quả theo khoa học',
    category: 'Góc làm đẹp', topic: 'Làm đẹp', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=1200&q=80',
    excerpt: 'Mụn trứng cá ảnh hưởng đến 85% người trong độ tuổi 12–24 và ngày càng phổ biến ở người trưởng thành. Nhiều người điều trị sai cách hàng năm trời không khỏi vì không hiểu đúng cơ chế. Bài viết này phân tích khoa học về mụn và con đường điều trị hiệu quả nhất.',
    readTime: 8, published: true,
    tags: ['Mụn trứng cá', 'Chăm sóc da', 'Da dầu', 'Điều trị da'],
    content: `<p>Mụn trứng cá (acne vulgaris) là bệnh da liễu phổ biến nhất thế giới, ảnh hưởng đến khoảng <strong>650 triệu người</strong> ở mọi độ tuổi. Dù vẻ ngoài có vẻ đơn giản, cơ chế hình thành mụn thực ra là một chuỗi phản ứng sinh hóa phức tạp — và hiểu đúng là chìa khóa để điều trị thành công.</p>

<img src="https://images.unsplash.com/photo-1559181567-c3190ca9d5db?w=900&q=80" alt="Chăm sóc da mụn" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Cơ chế hình thành mụn — 4 yếu tố cốt lõi</h2>
<p>Mụn không phải do "ăn nhiều đồ ngọt" hay "không rửa mặt sạch" đơn thuần. Đây là kết quả của sự tương tác 4 yếu tố:</p>
<ol>
<li><strong>Tăng tiết bã nhờn (sebum):</strong> Tuyến bã nhờn hoạt động quá mức, thường do hormone androgen kích thích — giải thích vì sao mụn bùng phát mạnh ở tuổi dậy thì và trước kỳ kinh nguyệt.</li>
<li><strong>Tắc nghẽn nang lông:</strong> Tế bào chết và bã nhờn tích tụ bịt kín lỗ chân lông, tạo nhân mụn (comedone). Nhân mụn hở = đầu đen (blackhead), nhân mụn kín = đầu trắng (whitehead).</li>
<li><strong>Vi khuẩn <em>Cutibacterium acnes</em>:</strong> Vi khuẩn thường trú trong nang lông sinh sôi trong môi trường bã nhờn, tiết ra enzyme phân giải triglyceride thành axit béo gây viêm.</li>
<li><strong>Viêm:</strong> Hệ miễn dịch phản ứng với vi khuẩn và các sản phẩm của chúng, tạo ra mụn viêm đỏ, mụn mủ, mụn nang và mụn bọc.</li>
</ol>

<h2>Các loại mụn và cách nhận biết</h2>
<ul>
<li><strong>Mụn đầu đen (blackhead):</strong> Nhân mụn hở, oxy hóa thành màu đen. Không phải do bẩn!</li>
<li><strong>Mụn đầu trắng (whitehead):</strong> Nhân mụn kín dưới da, màu trắng.</li>
<li><strong>Mụn sẩn (papule):</strong> Nốt đỏ nhỏ, cứng, không có mủ — giai đoạn viêm ban đầu.</li>
<li><strong>Mụn mủ (pustule):</strong> Có đầu trắng/vàng chứa mủ — tập hợp bạch cầu chết.</li>
<li><strong>Mụn nang (nodule/cyst):</strong> To, sâu, đau — nguy cơ để lại sẹo cao nhất. Cần điều trị bởi bác sĩ da liễu.</li>
</ul>

<img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80" alt="Routine chăm sóc da mụn" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Những "thủ phạm" kích hoạt mụn ít được biết</h2>
<ul>
<li><strong>Sữa bò và sản phẩm từ sữa:</strong> Các nghiên cứu gần đây cho thấy mối liên hệ giữa tiêu thụ sữa (đặc biệt sữa tách béo) và mụn trứng cá, có thể do IGF-1 trong sữa kích thích sản xuất bã nhờn.</li>
<li><strong>Chỉ số đường huyết (GI) cao:</strong> Thực phẩm GI cao (bánh mì trắng, nước ngọt, kẹo) làm tăng insulin và IGF-1, kích thích tuyến bã nhờn.</li>
<li><strong>Stress:</strong> Cortisol kích thích tuyến bã nhờn và phản ứng viêm.</li>
<li><strong>Mỹ phẩm comedogenic:</strong> Nhiều sản phẩm trang điểm và kem dưỡng chứa thành phần bịt lỗ chân lông.</li>
<li><strong>Ma sát cơ học:</strong> Điện thoại áp vào má, đội mũ bảo hiểm, tì tay lên mặt.</li>
</ul>

<h2>Phác đồ điều trị theo mức độ mụn</h2>
<h3>Mụn nhẹ — tự điều trị</h3>
<ul>
<li><strong>Benzoyl peroxide 2,5–5%:</strong> Tiêu diệt vi khuẩn C. acnes, giảm viêm. Ít gây kháng thuốc hơn kháng sinh.</li>
<li><strong>Salicylic acid 0,5–2% (BHA):</strong> Làm sạch sâu lỗ chân lông, phù hợp mụn đầu đen và đầu trắng.</li>
<li><strong>Niacinamide 4–5%:</strong> Giảm viêm và kiểm soát bã nhờn.</li>
<li>Rửa mặt 2 lần/ngày với sữa rửa mặt dịu nhẹ (không xà phòng). Không rửa quá nhiều — làm da tiết thêm dầu bù.</li>
</ul>

<h3>Mụn trung bình đến nặng — cần bác sĩ</h3>
<ul>
<li><strong>Tretinoin (Retin-A):</strong> Dạng kê đơn mạnh hơn retinol, chuẩn vàng điều trị mụn và lão hóa.</li>
<li><strong>Kháng sinh tại chỗ</strong> (clindamycin, erythromycin): Thường kết hợp benzoyl peroxide để giảm kháng thuốc.</li>
<li><strong>Isotretinoin (Accutane):</strong> Trường hợp mụn nặng kháng trị — hiệu quả cao nhưng nhiều tác dụng phụ, cần theo dõi chặt.</li>
</ul>

<h2>Điều không bao giờ được làm với mụn</h2>
<ul>
<li>❌ <strong>Nặn mụn bằng tay bẩn</strong> — đẩy vi khuẩn sâu hơn, tăng nguy cơ sẹo rỗ</li>
<li>❌ <strong>Chà mạnh da</strong> — kích thích viêm thêm</li>
<li>❌ <strong>Thay sản phẩm liên tục</strong> — da cần ít nhất 4–8 tuần để thấy kết quả</li>
<li>❌ <strong>Dùng đồng thời quá nhiều thành phần active</strong> — gây kích ứng và phá vỡ hàng rào da</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Zaenglein A.L. et al.: "Guidelines of care for the management of acne vulgaris" — JAAD (2016)<br/>
• Adebamowo C.A.: "Dairy consumption and acne in schoolgirls" — Dermatology Online Journal (2006)<br/>
• American Academy of Dermatology: "Acne: Diagnosis and Treatment" (2024)<br/>
• Bệnh viện Da liễu Trung ương: Hướng dẫn điều trị mụn trứng cá (2023)<br/>
• VnExpress Sức Khỏe: "Sai lầm phổ biến khi tự điều trị mụn tại nhà" (2024)</p>`
  },

  // ── BÀI 4: CHĂM SÓC DA BAN ĐÊM ─────────────────────────────────────────────
  {
    title: 'Chu kỳ phục hồi da ban đêm: Tại sao skincare tối quan trọng hơn skincare sáng',
    category: 'Góc làm đẹp', topic: 'Làm đẹp', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200&q=80',
    excerpt: 'Trong khi bạn ngủ, da không nghỉ ngơi — đây là lúc quá trình sửa chữa, tái tạo tế bào và hấp thu dưỡng chất diễn ra mạnh nhất. Xây dựng routine ban đêm đúng cách có thể tăng hiệu quả skincare lên 2–3 lần so với chỉ chăm sóc ban ngày.',
    readTime: 6, published: true,
    tags: ['Skincare tối', 'Dưỡng da ban đêm', 'Tái tạo da', 'Night cream'],
    content: `<p>Nhiều người đầu tư nhiều vào routine buổi sáng nhưng bỏ qua buổi tối. Đây là sai lầm lớn. Khoa học da liễu cho thấy <strong>ban đêm là "giờ vàng" của làn da</strong> — lúc da hoạt động theo cách hoàn toàn khác với ban ngày, và cũng là lúc dưỡng chất được hấp thu hiệu quả nhất.</p>

<img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80" alt="Chăm sóc da ban đêm" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Khoa học đằng sau "đồng hồ sinh học" của da</h2>
<p>Da có nhịp sinh học (circadian rhythm) riêng, điều tiết bởi gen đồng hồ CLOCK và BMAL1:</p>
<ul>
<li><strong>Ban ngày:</strong> Da ưu tiên chế độ <em>bảo vệ</em> — tăng cường hàng rào bảo vệ, tăng sản xuất sebum để chống mất nước, tăng nhạy cảm với ánh sáng UV.</li>
<li><strong>Ban đêm (đặc biệt 23:00–4:00):</strong> Da chuyển sang chế độ <em>sửa chữa và tái tạo</em> — tăng tốc phân chia tế bào (lên đến 8 lần so với ban ngày), sản xuất collagen và elastin, tiêu diệt các tổn thương DNA do UV.</li>
</ul>
<p>Đồng thời, nhiệt độ da tăng nhẹ về đêm làm tăng khả năng thấm thấu (permeability) của các thành phần dưỡng chất — nghĩa là các sản phẩm dưỡng da thấm vào và hoạt động hiệu quả hơn.</p>

<h2>Mất nước qua da (TEWL) về đêm</h2>
<p>Một thực tế ít được biết: da mất nhiều nước hơn vào ban đêm do nhiệt độ cơ thể tăng nhẹ trong giấc ngủ. Đây là lý do tại sao buổi sáng thức dậy da thường khô hơn — đặc biệt trong phòng điều hòa. Dưỡng ẩm buổi tối không chỉ là tùy chọn — đây là nhu cầu sinh lý thực sự.</p>

<img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80" alt="Routine skincare tối đúng cách" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Routine ban đêm lý tưởng — theo thứ tự</h2>
<h3>Bước 1: Tẩy trang (nếu có trang điểm hoặc kem chống nắng)</h3>
<p>Dùng dầu tẩy trang (cleansing oil/balm) cho da khô-trung bình, micellar water cho da nhạy cảm. Tẩy trang trước khi rửa mặt — không bỏ qua bước này dù chỉ đeo kem chống nắng.</p>

<h3>Bước 2: Rửa mặt</h3>
<p>Sữa rửa mặt dịu nhẹ, không xà phòng, pH 4,5–6,5 (gần với pH tự nhiên của da). Rửa bằng nước ấm — không nước nóng (làm khô da) hoặc nước lạnh (không làm sạch tốt).</p>

<h3>Bước 3: Toner/Essence (tùy chọn)</h3>
<p>Cân bằng pH da sau khi rửa mặt, chuẩn bị da hấp thu các bước tiếp theo. Ưu tiên toner dạng kem hoặc essence giàu dưỡng chất cho buổi tối.</p>

<h3>Bước 4: Serum/Treatment — "nhân vật chính" của buổi tối</h3>
<p>Đây là bước quan trọng nhất ban đêm. Gợi ý theo mục tiêu:</p>
<ul>
<li><strong>Chống lão hóa:</strong> Retinol serum (bắt đầu 0,025%, tăng dần)</li>
<li><strong>Làm sáng/mờ thâm:</strong> Niacinamide 5% hoặc tranexamic acid</li>
<li><strong>Phục hồi da yếu:</strong> Ceramide serum, centella asiatica (rau má)</li>
<li><strong>Mụn:</strong> Benzoyl peroxide 2,5% hoặc salicylic acid</li>
</ul>
<p><em>Lưu ý: Không dùng retinol cùng AHA/BHA trong cùng một tối khi da chưa quen.</em></p>

<h3>Bước 5: Dưỡng ẩm/Night cream</h3>
<p>Buổi tối ưu tiên kem dưỡng kết cấu dày hơn ban ngày — chứa ceramide, hyaluronic acid, shea butter để "khóa ẩm" và hỗ trợ sửa chữa hàng rào da. Kỹ thuật "skin flooding" (bôi serum khi da còn ẩm rồi khóa ngay bằng kem) tăng độ ẩm đáng kể.</p>

<h3>Bước 6: Mặt nạ ngủ (1–2 lần/tuần)</h3>
<p>Sleeping mask tạo lớp màng bán thẩm thấu giảm TEWL đến 40%, tăng cường hấp thu dưỡng chất suốt đêm dài.</p>

<h2>Điều kiện môi trường để da phục hồi tốt nhất</h2>
<ul>
<li><strong>Độ ẩm phòng 40–60%:</strong> Máy tạo độ ẩm trong phòng ngủ giúp giảm TEWL đáng kể</li>
<li><strong>Thay vỏ gối mỗi 2–3 ngày:</strong> Vi khuẩn tích tụ trên vỏ gối là nguyên nhân mụn hay bị bỏ qua</li>
<li><strong>Ngủ ngửa hoặc dùng gối lụa/satin:</strong> Giảm nếp nhăn cơ học do áp lực gối</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Matsui M.S. et al.: "Biological rhythms in the skin" — International Journal of Molecular Sciences (2016)<br/>
• Reinberg A. et al.: "Circadian rhythms of skin and barrier function" — Chronobiology (2023)<br/>
• Elias P.M.: "Skin barrier function" — Current Allergy and Asthma Reports (2008)<br/>
• Bệnh viện Da liễu TP.HCM: Tư vấn chăm sóc da ban đêm (2024)<br/>
• Cosmetic Dermatology: "Nighttime skin care: The science behind it" (2023)</p>`
  },

  // ── BÀI 5: HORMONE VÀ LÀN DA ────────────────────────────────────────────────
  {
    title: 'Hormone và làn da: Tại sao da thay đổi theo từng giai đoạn cuộc đời và cách ứng phó',
    category: 'Góc làm đẹp', topic: 'Làm đẹp', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80',
    excerpt: 'Mụn trước kỳ kinh, da thay đổi sau sinh, da khô sần khi mãn kinh — hormone điều tiết da của bạn suốt cả cuộc đời. Hiểu rõ mối quan hệ này giúp bạn điều chỉnh skincare đúng thời điểm và không "đổ lỗi" oan cho sản phẩm dưỡng da.',
    readTime: 7, published: true,
    tags: ['Hormone', 'Làn da', 'Estrogen', 'Mãn kinh', 'Chu kỳ kinh nguyệt'],
    content: `<p>Da không chỉ phản ánh những gì bạn bôi lên nó — da phản ánh cả những gì đang xảy ra bên trong cơ thể. Và không có gì ảnh hưởng đến da mạnh mẽ hơn hormone. Từ tuổi dậy thì đến mãn kinh, mỗi giai đoạn hormone tương ứng với một "phiên bản da" hoàn toàn khác nhau.</p>

<img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=80" alt="Chăm sóc da theo từng giai đoạn cuộc đời" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Hormone nào ảnh hưởng đến da?</h2>
<ul>
<li><strong>Estrogen:</strong> "Hormone trẻ hóa" — kích thích sản xuất collagen, elastin và hyaluronic acid tự nhiên. Giữ da dày, đàn hồi, ẩm mịn. Giảm dần từ sau 25–30 tuổi.</li>
<li><strong>Androgen (testosterone, DHT):</strong> Kích thích tuyến bã nhờn tiết dầu — nguyên nhân chính gây mụn ở tuổi dậy thì và trước kỳ kinh.</li>
<li><strong>Progesterone:</strong> Tăng trong nửa sau chu kỳ kinh nguyệt, làm da dày hơn và tăng tiết bã nhờn.</li>
<li><strong>Cortisol:</strong> Hormone stress — kích thích bã nhờn, gây viêm và phá hủy collagen khi dư thừa mạn tính.</li>
<li><strong>Insulin và IGF-1:</strong> Tăng tiết bã nhờn, liên quan đến mụn trứng cá.</li>
</ul>

<h2>Da theo chu kỳ kinh nguyệt — lịch skincare tối ưu</h2>
<p>Hiểu chu kỳ 28 ngày giúp bạn điều chỉnh skincare chủ động:</p>
<p><strong>Ngày 1–7 (hành kinh):</strong> Estrogen và progesterone thấp nhất. Da thường nhạy cảm, dễ kích ứng. Ưu tiên sản phẩm dịu nhẹ, tăng cường dưỡng ẩm, hạn chế tẩy da chết.</p>
<p><strong>Ngày 8–14 (nang noãn):</strong> Estrogen tăng mạnh — đây là tuần da đẹp nhất! Da sáng, ẩm, ít dầu. Thời điểm tốt nhất để thử thành phần mới hoặc tẩy da chết.</p>
<p><strong>Ngày 15–21 (rụng trứng và hoàng thể sớm):</strong> Progesterone tăng, da bắt đầu tiết dầu nhiều hơn. Tăng cường BHA để kiểm soát lỗ chân lông.</p>
<p><strong>Ngày 22–28 (trước kinh):</strong> Cả estrogen và progesterone giảm, androgen tương đối nổi trội. Mụn nội tiết xuất hiện (thường ở cằm, quanh miệng). Dùng spot treatment với salicylic acid hoặc benzoyl peroxide.</p>

<img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80" alt="Hormone và chăm sóc da" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Da sau sinh — thách thức ít được nói đến</h2>
<p>Sau sinh, estrogen và progesterone giảm đột ngột từ mức rất cao xuống rất thấp trong vài ngày. Hệ quả với da:</p>
<ul>
<li><strong>Mụn bùng phát</strong> (postpartum acne): Thường xuất hiện sau 2–4 tuần và có thể kéo dài 3–6 tháng</li>
<li><strong>Da khô và nhạy cảm</strong>: Giảm collagen và hyaluronic acid tạm thời</li>
<li><strong>Nám/tàn nhang</strong>: Tăng sắc tố melanin do biến động hormone — thường mờ dần sau 6–12 tháng</li>
<li><strong>Rụng tóc</strong> (telogen effluvium): Phổ biến 3–6 tháng sau sinh, thường tự phục hồi</li>
</ul>
<p><em>Lưu ý: Nếu đang cho con bú, nhiều thành phần skincare cần tránh — đặc biệt retinol, salicylic acid liều cao. Tham khảo bác sĩ trước khi dùng.</em></p>

<h2>Da và mãn kinh — thay đổi lớn nhất</h2>
<p>Mãn kinh đánh dấu sự suy giảm estrogen đột ngột và kéo dài. Trong <strong>5 năm đầu sau mãn kinh</strong>, da mất khoảng <strong>30% collagen</strong> — giải thích tại sao nhiều phụ nữ thấy da thay đổi đột ngột ở giai đoạn này.</p>
<p>Các vấn đề da phổ biến:</p>
<ul>
<li>Da khô, mỏng, dễ bị kích ứng hơn</li>
<li>Nếp nhăn sâu hơn, da chảy xệ (giảm elastin)</li>
<li>Tăng sắc tố (age spots)</li>
<li>Ngược lại, mụn giảm đáng kể do androgen cũng giảm theo</li>
</ul>

<h2>Điều chỉnh skincare theo giai đoạn hormone</h2>
<p><strong>Cho da mãn kinh:</strong></p>
<ul>
<li>Tăng cường retinol (kích thích collagen mạnh hơn)</li>
<li>Dưỡng ẩm đậm với ceramide và peptides</li>
<li>SPF nghiêm ngặt hơn (da mỏng hơn = dễ tổn thương hơn)</li>
<li>Cân nhắc liệu pháp hormone thay thế (HRT) — tham khảo bác sĩ, có bằng chứng cải thiện da rõ rệt</li>
</ul>

<blockquote style="border-left:4px solid #cc1f1f;padding:1rem 1.5rem;background:#fff5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Skincare hiệu quả nhất là skincare hiểu được nhịp sinh học và hormone của cơ thể bạn, không chỉ đơn thuần là bôi sản phẩm đắt tiền."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#cc1f1f">— GS. Fayne Frey, Hội Da liễu Hoa Kỳ</p>
</blockquote>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Thornton M.J.: "Estrogens and aging skin" — Dermato-Endocrinology (2013)<br/>
• Choi E.H. et al.: "Skin aging and barrier function" — British Journal of Dermatology (2022)<br/>
• Kucharska A. et al.: "Significance of diet in treated and untreated acne vulgaris" — Advances in Dermatology (2016)<br/>
• Bệnh viện Phụ sản Trung ương: Tư vấn chăm sóc da sau sinh (2024)<br/>
• VnExpress Sức Khỏe: "Hormone và da phụ nữ theo từng giai đoạn" (2024)<br/>
• Hiệp hội Da liễu Việt Nam: Hội thảo Da học và nội tiết (2023)</p>`
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
