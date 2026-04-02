// Seed 5 bài Vấn đề thường gặp — node seed-van-de-thuong-gap.js
if (require.main === module) {
  require('dotenv').config();
}
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');

const posts = [

  // ── BÀI 1: MẤT NGỦ ──────────────────────────────────────────────────────
  {
    title: 'Mất ngủ kéo dài: Nguyên nhân thực sự và 6 phương pháp điều trị không cần thuốc hiệu quả',
    category: 'Vấn đề thường gặp', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&q=80',
    excerpt: 'Hơn 30% người Việt trưởng thành bị mất ngủ ít nhất 3 đêm mỗi tuần. Uống thuốc ngủ chỉ là giải pháp tạm thời và có thể gây lệ thuộc. Liệu pháp hành vi nhận thức (CBT-I) được WHO và APA xếp hạng là điều trị bậc nhất cho mất ngủ mạn tính — không cần một viên thuốc nào.',
    readTime: 8, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Mất ngủ', 'Giấc ngủ', 'Insomnia', 'CBT-I', 'Sức khỏe'],
    content: `<p>Mất ngủ mạn tính (chronic insomnia) được định nghĩa là khó vào giấc, khó duy trì giấc hoặc thức dậy quá sớm, xảy ra ít nhất 3 lần/tuần trong hơn 3 tháng, gây ảnh hưởng đến chức năng ban ngày. Đây không chỉ là vấn đề khó chịu — thiếu ngủ mạn tính liên quan đến tăng huyết áp, tiểu đường, béo phì, trầm cảm và giảm tuổi thọ.</p>

<img src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=900&q=80" alt="Mất ngủ và cách điều trị" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Vòng xoáy mất ngủ — tại sao bạn càng cố ngủ càng khó ngủ?</h2>
<p>Khi mất ngủ, nhiều người bắt đầu <strong>lo lắng về giấc ngủ</strong> — nằm trên giường cố ép bản thân ngủ, kiểm tra đồng hồ, tính toán xem còn bao nhiêu giờ trước khi thức dậy. Chính sự lo lắng này kích hoạt hệ thần kinh giao cảm (fight-or-flight), tăng cortisol và adrenaline — hoàn toàn ngược với trạng thái thư giãn cần thiết để ngủ. Đây gọi là <em>hyperarousal</em> — cơ chế duy trì mất ngủ mạn tính.</p>

<h2>6 phương pháp không cần thuốc được khoa học chứng minh</h2>

<h3>1. Liệu pháp hành vi nhận thức cho mất ngủ (CBT-I)</h3>
<p>CBT-I là tiêu chuẩn vàng điều trị mất ngủ mạn tính theo Hiệp hội Y học Giấc ngủ Mỹ và Hiệp hội Tâm lý học Mỹ. Hiệu quả 70–80% bệnh nhân sau 6–8 tuần, duy trì lâu dài hơn thuốc ngủ. Gồm các kỹ thuật:</p>
<ul>
<li><strong>Sleep restriction therapy:</strong> Rút ngắn thời gian nằm trên giường để tăng áp lực ngủ</li>
<li><strong>Stimulus control:</strong> Chỉ dùng giường để ngủ, không xem phim/điện thoại trên giường</li>
<li><strong>Cognitive restructuring:</strong> Thay đổi suy nghĩ tiêu cực về giấc ngủ</li>
</ul>

<h3>2. Vệ sinh giấc ngủ (Sleep Hygiene)</h3>
<ul>
<li>Ngủ và thức dậy đúng giờ mỗi ngày — kể cả cuối tuần</li>
<li>Phòng ngủ tối, mát (18–20°C), yên tĩnh</li>
<li>Tránh caffeine sau 14:00, tránh rượu (gây phân mảnh giấc ngủ)</li>
<li>Không ăn quá no trong vòng 2 giờ trước khi ngủ</li>
</ul>

<h3>3. Kỹ thuật thư giãn</h3>
<p><strong>Thở 4-7-8:</strong> Hít vào 4 giây, nín thở 7 giây, thở ra 8 giây. Kích hoạt hệ thần kinh phó giao cảm, giảm nhịp tim và cortisol trong vòng vài phút.</p>
<p><strong>Progressive Muscle Relaxation (PMR):</strong> Căng và thả lỏng từng nhóm cơ từ chân lên đầu — giảm căng thẳng cơ thể tích lũy trong ngày.</p>

<blockquote style="border-left:4px solid #7b1fa2;padding:1rem 1.5rem;background:#f3e5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"CBT-I hiệu quả hơn thuốc ngủ về lâu dài, không có tác dụng phụ và không gây lệ thuộc. Vấn đề duy nhất là cần thời gian và sự kiên trì — nhưng kết quả là giấc ngủ tự nhiên, không phụ thuộc vào bất cứ thứ gì."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#7b1fa2">— Morin C.M., Đại học Laval, chuyên gia CBT-I hàng đầu thế giới</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80" alt="Thư giãn và cải thiện giấc ngủ" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h3>4. Ánh sáng ban ngày và bóng tối ban đêm</h3>
<p>Nhịp sinh học (circadian rhythm) được điều tiết bởi ánh sáng. Ra ngoài ánh sáng mặt trời 10–30 phút trong vòng 1 giờ sau khi thức dậy giúp đồng bộ đồng hồ sinh học. Tối về, giảm ánh sáng xanh từ 20:00 — bật chế độ Night Mode, dùng đèn vàng ấm.</p>

<h3>5. Vận động thể chất — nhưng đúng thời điểm</h3>
<p>Tập thể dục cải thiện chất lượng giấc ngủ rõ rệt, nhưng tập cường độ cao trong vòng 3 giờ trước khi ngủ có thể gây ngược lại. Lý tưởng nhất: tập buổi sáng hoặc chiều tối (trước 19:00).</p>

<h3>6. Melatonin — dùng đúng cách</h3>
<p>Melatonin không phải thuốc ngủ — đây là hormone tín hiệu "đêm đến". Hiệu quả nhất với <strong>jet lag và rối loạn nhịp sinh học</strong>, ít hiệu quả hơn với mất ngủ tâm lý. Liều thấp 0.5–1mg (không phải 5–10mg như nhiều sản phẩm ghi) uống trước ngủ 30–60 phút.</p>

<h2>Khi nào cần đến bác sĩ?</h2>
<ul>
<li>Ngủ ngáy to, thở ngắt quãng, thức giấc nhiều lần — có thể là ngưng thở khi ngủ (sleep apnea)</li>
<li>Cảm giác kiến bò trong chân khi nằm xuống — hội chứng chân không yên</li>
<li>Mất ngủ kèm trầm cảm nặng, lo âu không kiểm soát được</li>
<li>Đã thực hiện CBT-I và vệ sinh giấc ngủ đúng cách mà không cải thiện sau 4 tuần</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Qaseem A. et al.: "Management of Chronic Insomnia Disorder in Adults" — Annals of Internal Medicine (2016)<br/>
• Morin C.M. et al.: "Cognitive Behavior Therapy, Singly and Combined with Medication, for Persistent Insomnia" — JAMA (2009)<br/>
• Walker M.: "Why We Sleep" — Scribner (2017)<br/>
• Bệnh viện Bạch Mai: Hướng dẫn điều trị mất ngủ không dùng thuốc (2023)</p>`
  },

  // ── BÀI 2: ĐAU ĐẦU ──────────────────────────────────────────────────────
  {
    title: 'Đau đầu thường xuyên: Phân biệt đau đầu căng thẳng, migraine và dấu hiệu nguy hiểm cần đi cấp cứu ngay',
    category: 'Vấn đề thường gặp', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=1200&q=80',
    excerpt: 'Đau đầu là triệu chứng phổ biến thứ 3 toàn cầu — hơn 50% người trưởng thành bị ít nhất một lần mỗi tháng. Nhưng không phải cơn đau đầu nào cũng giống nhau. Phân biệt đúng loại giúp điều trị hiệu quả hơn và biết khi nào cần đi cấp cứu ngay.',
    readTime: 7, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Đau đầu', 'Migraine', 'Đau đầu căng thẳng', 'Sức khỏe', 'Vấn đề thường gặp'],
    content: `<p>Không phải mọi cơn đau đầu đều cần uống thuốc — và không phải mọi cơn đau đầu đều có thể bỏ qua. Điều quan trọng nhất là biết <strong>bạn đang bị loại đau đầu nào</strong> để xử trí đúng cách.</p>

<img src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=900&q=80" alt="Đau đầu nguyên nhân và cách xử trí" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>3 loại đau đầu phổ biến nhất</h2>

<h3>1. Đau đầu căng thẳng (Tension-type headache) — 90% ca đau đầu</h3>
<p><strong>Đặc điểm:</strong> Cảm giác như đai thít quanh đầu, áp lực hai bên thái dương, không nhói, không buồn nôn, không nặng hơn khi vận động. Cường độ nhẹ đến vừa.</p>
<p><strong>Nguyên nhân:</strong> Căng cơ cổ/vai/đầu do ngồi sai tư thế, stress, mệt mỏi, mất nước.</p>
<p><strong>Xử trí:</strong> Nghỉ ngơi, uống nước, massage cổ vai, paracetamol hoặc ibuprofen liều thấp nếu cần.</p>

<h3>2. Migraine (Đau nửa đầu) — 15% dân số</h3>
<p><strong>Đặc điểm:</strong> Đau nhói một bên đầu (có thể cả hai), cường độ vừa đến nặng, kéo dài 4–72 giờ. Kèm theo buồn nôn/nôn, nhạy cảm với ánh sáng (photophobia) và tiếng ồn (phonophobia). Nặng hơn khi vận động. Khoảng 25% có aura trước đau (nhìn thấy đốm sáng, đường zíc-zắc).</p>
<p><strong>Nguyên nhân:</strong> Thay đổi thần kinh và mạch máu phức tạp, có yếu tố di truyền. Trigger phổ biến: thiếu ngủ, bỏ bữa, thay đổi nội tiết tố, rượu, ánh sáng mạnh, mùi nồng.</p>
<p><strong>Xử trí:</strong> Nghỉ trong phòng tối yên tĩnh, triptans (thuốc đặc trị migraine), ibuprofen sớm. Phòng ngừa bằng topiramate, propranolol, amitriptyline nếu &gt;4 lần/tháng.</p>

<h3>3. Đau đầu cụm (Cluster headache) — hiếm nhưng rất nặng</h3>
<p><strong>Đặc điểm:</strong> Đau dữ dội một bên mắt/thái dương như "dao đâm", kéo dài 15–180 phút, xảy ra theo chuỗi nhiều lần/ngày trong vài tuần. Kèm chảy nước mắt, sụp mí, ngạt mũi cùng bên. Người bệnh thường bứt rứt, không thể nằm yên.</p>
<p><strong>Xử trí:</strong> Cần bác sĩ chuyên khoa. Điều trị cấp: thở oxy 100%, sumatriptan tiêm. Phòng ngừa: verapamil.</p>

<blockquote style="border-left:4px solid #7b1fa2;padding:1rem 1.5rem;background:#f3e5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Migraine không phải chỉ là đau đầu nặng — đây là bệnh thần kinh mạn tính ảnh hưởng đến chất lượng cuộc sống nghiêm trọng. Việc chẩn đoán và điều trị đúng có thể giảm 50–70% số cơn đau."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#7b1fa2">— GS. Peter Goadsby, Đại học King's College London, chuyên gia đau đầu</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80" alt="Điều trị đau đầu đúng cách" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Dấu hiệu nguy hiểm — đi cấp cứu NGAY</h2>
<p>Những đặc điểm sau có thể báo hiệu xuất huyết não, viêm màng não hoặc u não:</p>
<ul>
<li><strong>"Cơn đau đầu tệ nhất đời"</strong> khởi phát đột ngột như sét đánh (thunderclap headache)</li>
<li>Đau đầu kèm sốt cao, cứng cổ, sợ ánh sáng — nghi viêm màng não</li>
<li>Đau đầu kèm yếu liệt tay/chân, méo miệng, nói ngọng — nghi đột quỵ</li>
<li>Đau đầu sau chấn thương đầu</li>
<li>Đau đầu ngày càng tăng dần không đáp ứng thuốc</li>
<li>Đau đầu kèm thay đổi ý thức, lú lẫn</li>
</ul>

<h2>Đau đầu do thuốc giảm đau (Medication Overuse Headache)</h2>
<p>Nghịch lý: dùng thuốc giảm đau quá thường xuyên (hơn 10–15 ngày/tháng) gây <strong>đau đầu do thuốc</strong> — một trong những nguyên nhân đau đầu mạn tính phổ biến nhất. Nếu bạn đang uống thuốc giảm đau hơn 3 lần/tuần cho đau đầu, cần gặp bác sĩ để được tư vấn.</p>

<h2>Phòng ngừa đau đầu căng thẳng và migraine</h2>
<ul>
<li>Ngủ đủ giờ, đều đặn — không ngủ bù cuối tuần quá nhiều</li>
<li>Không bỏ bữa, uống đủ nước (1.5–2L/ngày)</li>
<li>Hạn chế caffeine hoặc dùng đều đặn (dao động caffeine là trigger migraine)</li>
<li>Giảm stress: yoga, thiền, vận động nhẹ</li>
<li>Ghi nhật ký đau đầu để xác định trigger cá nhân</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• International Headache Society: "ICHD-3 Classification" (2018)<br/>
• Diener H.C. et al.: "Medication-overuse headache" — Nature Reviews Neurology (2019)<br/>
• GBD 2016 Headache Collaborators: "Global, regional, and national burden of migraine" — Lancet Neurol (2018)<br/>
• Bệnh viện Bạch Mai: Hướng dẫn chẩn đoán và điều trị đau đầu (2023)</p>`
  },

  // ── BÀI 3: TRÀO NGƯỢC DẠ DÀY ────────────────────────────────────────────
  {
    title: 'Trào ngược dạ dày thực quản (GERD): Nguyên nhân, triệu chứng và cách điều trị dứt điểm',
    category: 'Vấn đề thường gặp', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&q=80',
    excerpt: 'Ợ nóng, ợ chua sau bữa ăn không chỉ là khó chịu tạm thời — nếu xảy ra hơn 2 lần/tuần, đây có thể là GERD (trào ngược dạ dày thực quản) cần điều trị. Bệnh không được điều trị có thể dẫn đến viêm thực quản, Barrett thực quản và tăng nguy cơ ung thư thực quản.',
    readTime: 7, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Trào ngược dạ dày', 'GERD', 'Ợ nóng', 'Tiêu hóa', 'Vấn đề thường gặp'],
    content: `<p>GERD (Gastroesophageal Reflux Disease) xảy ra khi van cơ vòng thực quản dưới (LES) suy yếu, cho phép acid dạ dày trào ngược lên thực quản. Niêm mạc thực quản không có lớp bảo vệ như dạ dày — acid gây kích ứng, viêm và về lâu dài có thể làm biến đổi tế bào (Barrett thực quản).</p>

<img src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=900&q=80" alt="Trào ngược dạ dày thực quản điều trị" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Triệu chứng điển hình và không điển hình</h2>

<h3>Triệu chứng điển hình</h3>
<ul>
<li><strong>Ợ nóng (heartburn):</strong> Cảm giác bỏng rát sau xương ức, lan lên cổ họng, thường sau ăn 30–60 phút hoặc khi nằm xuống</li>
<li><strong>Trào ngược acid:</strong> Vị chua hoặc đắng trong miệng, ợ chua, đôi khi có thức ăn trào lên</li>
</ul>

<h3>Triệu chứng không điển hình (thường bị bỏ qua)</h3>
<ul>
<li>Ho mạn tính về đêm không rõ nguyên nhân</li>
<li>Khàn giọng buổi sáng</li>
<li>Cảm giác có gì đó mắc trong cổ (globus sensation)</li>
<li>Đau ngực không phải tim (quan trọng: cần loại trừ tim mạch trước)</li>
<li>Viêm xoang, viêm họng tái phát</li>
<li>Mòn men răng ở mặt trong răng</li>
</ul>

<h2>Nguyên nhân và yếu tố nguy cơ</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5rem 0">
<tr style="background:#f3e5f5">
<th style="padding:.75rem;text-align:left;border:1px solid #e1bee7">Yếu tố</th>
<th style="padding:.75rem;text-align:left;border:1px solid #e1bee7">Cơ chế</th>
</tr>
<tr><td style="padding:.75rem;border:1px solid #e1bee7">Thừa cân, béo bụng</td><td style="padding:.75rem;border:1px solid #e1bee7">Tăng áp lực ổ bụng, đẩy acid lên</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #e1bee7">Mang thai</td><td style="padding:.75rem;border:1px solid #e1bee7">Áp lực tử cung + progesterone giãn LES</td></tr>
<tr><td style="padding:.75rem;border:1px solid #e1bee7">Hút thuốc lá</td><td style="padding:.75rem;border:1px solid #e1bee7">Giảm trương lực LES, giảm tiết nước bọt</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #e1bee7">Ăn quá no, nằm ngay sau ăn</td><td style="padding:.75rem;border:1px solid #e1bee7">Tăng áp lực dạ dày</td></tr>
<tr><td style="padding:.75rem;border:1px solid #e1bee7">Thoát vị hoành</td><td style="padding:.75rem;border:1px solid #e1bee7">Dạ dày trượt lên ngực, LES mất hỗ trợ</td></tr>
</table>

<h2>Thực phẩm làm nặng thêm GERD</h2>
<ul>
<li>Cà phê, trà đặc, nước ngọt có gas</li>
<li>Rượu bia</li>
<li>Socola, bạc hà (giãn LES)</li>
<li>Thức ăn cay, chua, nhiều dầu mỡ</li>
<li>Cà chua, cam, chanh</li>
<li>Hành tây, tỏi</li>
</ul>

<blockquote style="border-left:4px solid #7b1fa2;padding:1rem 1.5rem;background:#f3e5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"GERD không điều trị trong 5–10 năm có 10–15% nguy cơ tiến triển thành Barrett thực quản — tổn thương tiền ung thư. Điều trị đúng và đủ thời gian là đầu tư cho sức khỏe dài hạn."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#7b1fa2">— TS. Nguyễn Duy Thắng, Bệnh viện Nhân dân 115 TP.HCM</p>
</blockquote>

<h2>Điều trị GERD — từ thay đổi lối sống đến thuốc</h2>

<h3>Bước 1: Thay đổi lối sống (nền tảng)</h3>
<ul>
<li>Giảm cân nếu thừa cân (giảm 5–10% cân nặng giảm triệu chứng rõ rệt)</li>
<li>Ăn bữa tối nhỏ, kết thúc ít nhất 3 giờ trước khi ngủ</li>
<li>Kê cao đầu giường 15–20cm (không phải cao gối)</li>
<li>Mặc quần áo rộng rãi, không bó bụng</li>
<li>Bỏ thuốc lá</li>
</ul>

<h3>Bước 2: Thuốc (khi cần)</h3>
<ul>
<li><strong>Antacid (Maalox, Gaviscon):</strong> Trung hòa acid nhanh, hiệu quả tức thì nhưng ngắn</li>
<li><strong>H2 blocker (Famotidine):</strong> Giảm tiết acid 6–12 giờ, phù hợp triệu chứng nhẹ</li>
<li><strong>PPI (Omeprazole, Pantoprazole):</strong> Hiệu quả nhất, dùng trước ăn sáng 30 phút. Liệu trình 4–8 tuần</li>
</ul>
<p><strong>Lưu ý:</strong> Không tự dùng PPI dài hạn mà không có chỉ định bác sĩ — có thể ảnh hưởng hấp thu magie, canxi và tăng nguy cơ nhiễm trùng ruột.</p>

<h2>Khi nào cần nội soi?</h2>
<ul>
<li>Triệu chứng không đáp ứng PPI sau 4–8 tuần</li>
<li>Khó nuốt, đau khi nuốt</li>
<li>Sụt cân không rõ nguyên nhân</li>
<li>Nôn ra máu hoặc đi ngoài phân đen</li>
<li>GERD kéo dài &gt;5 năm cần tầm soát Barrett thực quản</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Katz P.O. et al.: "ACG Clinical Guideline for the Diagnosis and Management of GERD" — Am J Gastroenterol (2022)<br/>
• Richter J.E., Rubenstein J.H.: "Presentation and Epidemiology of Gastroesophageal Reflux Disease" — Gastroenterology (2018)<br/>
• Bộ Y tế Việt Nam: Hướng dẫn chẩn đoán và điều trị bệnh GERD (2023)</p>`
  },

  // ── BÀI 4: VIÊM XOANG ────────────────────────────────────────────────────
  {
    title: 'Viêm xoang mạn tính: Khi nào cần phẫu thuật và các phương pháp điều trị hiệu quả hiện nay',
    category: 'Vấn đề thường gặp', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80',
    excerpt: 'Viêm xoang ảnh hưởng đến khoảng 15% dân số Việt Nam, trong đó nhiều người bị viêm xoang mạn tính tái đi tái lại hàng năm. Kháng sinh không phải lúc nào cũng cần — và không phải ai cũng cần phẫu thuật. Hướng dẫn phân biệt viêm xoang cấp, mạn tính và chọn phác đồ điều trị đúng.',
    readTime: 7, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Viêm xoang', 'Xoang', 'Tai mũi họng', 'Sức khỏe', 'Vấn đề thường gặp'],
    content: `<p>Xoang là các hốc rỗng trong xương sọ, được lót bởi niêm mạc tiết dịch nhầy. Khi niêm mạc bị viêm và phù nề — do virus, vi khuẩn, nấm hoặc dị ứng — dịch nhầy ứ đọng, tạo môi trường cho vi khuẩn phát triển. Người Việt đặc biệt hay bị viêm xoang do khí hậu nóng ẩm, ô nhiễm không khí và tập quán dùng kháng sinh sai cách.</p>

<img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&q=80" alt="Viêm xoang điều trị và phòng ngừa" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Phân biệt viêm xoang cấp và mạn tính</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5rem 0">
<tr style="background:#f3e5f5">
<th style="padding:.75rem;text-align:left;border:1px solid #e1bee7">Đặc điểm</th>
<th style="padding:.75rem;text-align:left;border:1px solid #e1bee7">Viêm xoang cấp</th>
<th style="padding:.75rem;text-align:left;border:1px solid #e1bee7">Viêm xoang mạn tính</th>
</tr>
<tr><td style="padding:.75rem;border:1px solid #e1bee7">Thời gian</td><td style="padding:.75rem;border:1px solid #e1bee7">&lt;4 tuần</td><td style="padding:.75rem;border:1px solid #e1bee7">&gt;12 tuần</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #e1bee7">Nguyên nhân chính</td><td style="padding:.75rem;border:1px solid #e1bee7">Virus (90%), vi khuẩn (10%)</td><td style="padding:.75rem;border:1px solid #e1bee7">Đa yếu tố: viêm, polyp, dị ứng</td></tr>
<tr><td style="padding:.75rem;border:1px solid #e1bee7">Triệu chứng nổi bật</td><td style="padding:.75rem;border:1px solid #e1bee7">Sốt, đau mặt dữ dội, chảy mũi vàng/xanh</td><td style="padding:.75rem;border:1px solid #e1bee7">Nghẹt mũi dai dẳng, giảm/mất ngửi, áp lực mặt</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #e1bee7">Kháng sinh</td><td style="padding:.75rem;border:1px solid #e1bee7">Chỉ khi có dấu hiệu vi khuẩn</td><td style="padding:.75rem;border:1px solid #e1bee7">Ít vai trò, tránh lạm dụng</td></tr>
</table>

<h2>90% viêm xoang cấp do virus — không cần kháng sinh</h2>
<p>Đây là sự thật quan trọng nhất: <strong>phần lớn viêm xoang cấp do virus</strong> (rhinovirus, influenza) và tự khỏi trong 7–10 ngày. Kháng sinh không có tác dụng với virus và lạm dụng góp phần vào kháng kháng sinh. Chỉ dùng kháng sinh khi có:</p>
<ul>
<li>Triệu chứng nặng: đau mặt dữ dội, sốt &gt;39°C</li>
<li>Triệu chứng xấu đi sau 5 ngày ban đầu cải thiện ("double-sickening")</li>
<li>Triệu chứng kéo dài hơn 10 ngày không cải thiện</li>
</ul>

<blockquote style="border-left:4px solid #7b1fa2;padding:1rem 1.5rem;background:#f3e5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Kháng sinh không rút ngắn thời gian hồi phục của viêm xoang virus và có thể gây tác hại nhiều hơn lợi. Điều trị triệu chứng đúng cách — rửa mũi, xịt mũi corticoid, thuốc thông mũi — hiệu quả hơn kháng sinh không cần thiết."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#7b1fa2">— Chow A.W. et al., Infectious Diseases Society of America Guidelines (2012)</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=80" alt="Rửa mũi phòng viêm xoang" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Điều trị viêm xoang hiệu quả theo từng giai đoạn</h2>

<h3>Viêm xoang cấp do virus (tự điều trị)</h3>
<ul>
<li><strong>Rửa mũi nước muối sinh lý</strong> 2–4 lần/ngày: Làm sạch dịch nhầy, giảm phù nề hiệu quả nhất</li>
<li><strong>Xịt mũi oxymetazoline</strong> (Otrivin): Thông mũi nhanh, dùng tối đa 3–5 ngày tránh viêm mũi thuốc</li>
<li>Uống nhiều nước, xông hơi</li>
<li>Paracetamol hoặc ibuprofen giảm đau, hạ sốt</li>
</ul>

<h3>Viêm xoang mạn tính</h3>
<ul>
<li><strong>Corticoid xịt mũi</strong> (Nasonex, Avamys): Nền tảng điều trị, cần dùng liên tục 4–8 tuần</li>
<li><strong>Rửa mũi bằng bình Neti pot</strong>: Hiệu quả hơn xịt đơn thuần</li>
<li><strong>Kháng histamine</strong> nếu có thành phần dị ứng</li>
<li><strong>Điều trị dị ứng căn bản</strong> (nếu nguyên nhân là dị ứng)</li>
</ul>

<h2>Khi nào cần phẫu thuật?</h2>
<p>Phẫu thuật nội soi xoang (FESS — Functional Endoscopic Sinus Surgery) được xem xét khi:</p>
<ul>
<li>Viêm xoang mạn tính không đáp ứng điều trị nội khoa đủ liều trong 12 tuần</li>
<li>Polyp mũi xoang gây tắc nghẽn</li>
<li>Lệch vách ngăn mũi gây tắc nghẽn dẫn lưu xoang</li>
<li>Biến chứng: viêm mô tế bào hốc mắt, abces nội sọ</li>
</ul>
<p>FESS hiện đại ít xâm lấn, thực hiện qua đường mũi, không để lại sẹo ngoài. Tỷ lệ thành công 85–90% với bệnh nhân được chọn lọc phù hợp.</p>

<h2>Phòng ngừa tái phát</h2>
<ul>
<li>Rửa mũi nước muối mỗi sáng — thói quen duy trì niêm mạc khỏe mạnh</li>
<li>Điều trị triệt để dị ứng nếu là nguyên nhân</li>
<li>Tránh khói thuốc, ô nhiễm, hóa chất bay hơi</li>
<li>Giữ ẩm trong nhà 40–50% (máy tạo độ ẩm nếu cần)</li>
<li>Tiêm vắc-xin cúm hàng năm giảm nguy cơ viêm xoang bội nhiễm</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Fokkens W.J. et al.: "EPOS 2020: European Position Paper on Rhinosinusitis" — Rhinology (2020)<br/>
• Chow A.W. et al.: "IDSA Clinical Practice Guideline for Acute Bacterial Rhinosinusitis" — Clin Infect Dis (2012)<br/>
• Bệnh viện Tai Mũi Họng TP.HCM: Hướng dẫn điều trị viêm xoang (2023)</p>`
  },

  // ── BÀI 5: ĐAU LƯNG VĂN PHÒNG ───────────────────────────────────────────
  {
    title: 'Đau lưng dưới khi ngồi văn phòng: Nguyên nhân ergonomic và bài tập khắc phục tại chỗ làm',
    category: 'Vấn đề thường gặp', topic: 'Lối sống', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1616391182219-e080b4d1042a?w=1200&q=80',
    excerpt: 'Đau lưng dưới là lý do hàng đầu khiến người đi làm phải nghỉ bệnh toàn cầu. Người ngồi văn phòng 8 tiếng/ngày có áp lực lên đĩa đệm thắt lưng cao hơn 40% so với đứng. 5 bài tập đơn giản thực hiện ngay tại bàn làm việc giúp giảm đau và phòng ngừa mạn tính.',
    readTime: 7, published: true,
    publishedAt: new Date('2026-04-02'),
    tags: ['Đau lưng', 'Văn phòng', 'Ergonomic', 'Cột sống', 'Vấn đề thường gặp'],
    content: `<p>Nghiên cứu đăng trên <em>The Lancet</em> (2018) xác định đau lưng dưới là <strong>nguyên nhân hàng đầu gây khuyết tật</strong> toàn cầu — vượt qua cả trầm cảm và tiểu đường. Tại Việt Nam, tỷ lệ nhân viên văn phòng bị đau lưng ít nhất một lần trong năm lên đến 60–70%.</p>

<img src="https://images.unsplash.com/photo-1616391182219-e080b4d1042a?w=900&q=80" alt="Đau lưng văn phòng nguyên nhân và điều trị" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Tại sao ngồi lại gây đau lưng?</h2>
<p>Trực quan mà nói: ngồi có vẻ "nghỉ ngơi" — nhưng thực ra áp lực lên đĩa đệm thắt lưng L4-L5 khi ngồi cúi người về trước <strong>cao hơn 40% so với đứng thẳng</strong>. Ngồi lâu còn:</p>
<ul>
<li>Rút ngắn cơ háng (hip flexors) → kéo xương chậu đổ ra trước → tăng đường cong thắt lưng</li>
<li>Làm yếu cơ mông (glutes) — "cơ bảo vệ" cột sống số một</li>
<li>Kéo căng cơ dọc cột sống khi ngồi gù</li>
<li>Giảm tuần hoàn máu đến đĩa đệm (đĩa đệm không có mạch máu — nhận dinh dưỡng qua vận động)</li>
</ul>

<h2>Thiết lập ergonomic đúng chuẩn</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5rem 0">
<tr style="background:#f3e5f5">
<th style="padding:.75rem;text-align:left;border:1px solid #e1bee7">Yếu tố</th>
<th style="padding:.75rem;text-align:left;border:1px solid #e1bee7">Chuẩn ergonomic</th>
</tr>
<tr><td style="padding:.75rem;border:1px solid #e1bee7">Ghế ngồi</td><td style="padding:.75rem;border:1px solid #e1bee7">Chân chạm sàn, đùi song song đất, tựa lưng hỗ trợ đường cong thắt lưng</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #e1bee7">Màn hình</td><td style="padding:.75rem;border:1px solid #e1bee7">Mắt ngang viền trên màn hình, cách mắt 50–70cm</td></tr>
<tr><td style="padding:.75rem;border:1px solid #e1bee7">Bàn phím/chuột</td><td style="padding:.75rem;border:1px solid #e1bee7">Khuỷu tay 90°, cổ tay thẳng, không gồng vai</td></tr>
<tr style="background:#fafafa"><td style="padding:.75rem;border:1px solid #e1bee7">Điện thoại</td><td style="padding:.75rm;border:1px solid #e1bee7">Dùng tai nghe, không kẹp điện thoại giữa vai và tai</td></tr>
</table>

<blockquote style="border-left:4px solid #7b1fa2;padding:1rem 1.5rem;background:#f3e5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Tư thế ngồi hoàn hảo không tồn tại — tư thế tốt nhất là tư thế tiếp theo. Cơ thể cần được di chuyển, thay đổi vị trí thường xuyên. Đứng dậy 2 phút mỗi 30 phút ngồi có tác động lớn hơn 1 giờ tập gym cuối ngày."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#7b1fa2">— GS. Stuart McGill, Đại học Waterloo, chuyên gia cột sống hàng đầu</p>
</blockquote>

<img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80" alt="Bài tập giảm đau lưng tại văn phòng" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>5 bài tập thực hiện ngay tại bàn làm việc</h2>

<h3>1. Căng cơ háng đứng (Hip Flexor Stretch) — 2 phút</h3>
<p>Bước một chân ra trước, gối sau thẳng. Đẩy hông ra trước cho đến khi cảm thấy căng ở đùi trước của chân sau. Giữ 30 giây, đổi bên. Làm 2–3 hiệp mỗi giờ.</p>

<h3>2. Xoay cột sống ngồi (Seated Spinal Twist) — 1 phút</h3>
<p>Ngồi thẳng, xoay người sang phải, tay trái đặt lên đùi phải. Giữ 20–30 giây, thở sâu. Đổi bên. Giải phóng áp lực đĩa đệm và tăng linh hoạt cột sống.</p>

<h3>3. Cúi đầu kéo căng cổ (Chin Tuck) — 1 phút</h3>
<p>Ngồi thẳng, thu cằm vào trong (như tạo "cổ đôi"). Giữ 5 giây, lặp 10 lần. Chỉnh lại tư thế đầu cổ, giảm căng cơ thang.</p>

<h3>4. Siết cơ mông đứng (Standing Glute Squeeze) — 1 phút</h3>
<p>Đứng dậy, siết chặt hai cơ mông trong 5 giây, thả ra. Lặp 15–20 lần. Kích hoạt cơ mông — "cơ bảo vệ" cột sống bị teo do ngồi nhiều.</p>

<h3>5. Vươn tay lên cao (Overhead Reach) — 30 giây</h3>
<p>Đứng hoặc ngồi thẳng, đan hai tay và đưa thẳng lên trên đầu, kéo dài cột sống. Nghiêng nhẹ sang trái rồi phải. Kéo căng toàn bộ cơ hai bên thân.</p>

<h2>Quy tắc 20-20-20 mở rộng</h2>
<p>Mỗi 20 phút: đứng dậy, đi lại ít nhất 20 bước và làm 1–2 bài tập trên trong 20 giây. Cài đặt nhắc nhở trên điện thoại hoặc dùng app như <em>Stand Up!</em> hoặc <em>Move</em>.</p>

<h2>Khi nào cần đến bác sĩ?</h2>
<ul>
<li>Đau lan xuống mông, đùi, cẳng chân theo đường thẳng (nghi thoát vị đĩa đệm chèn thần kinh tọa)</li>
<li>Tê bì, yếu cơ chân</li>
<li>Đau không giảm sau nghỉ ngơi hoặc giảm đau thông thường</li>
<li>Đau kèm sốt, sụt cân — loại trừ nguyên nhân nghiêm trọng</li>
</ul>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• GBD 2017 Disease and Injury Incidence and Prevalence Collaborators — The Lancet (2018)<br/>
• Hartvigsen J. et al.: "What low back pain is and why we need to pay attention" — The Lancet (2018)<br/>
• McGill S.: "Back Mechanic" — Backfitpro Inc. (2015)<br/>
• Bệnh viện Chấn thương Chỉnh hình TP.HCM: Hướng dẫn phòng ngừa đau lưng nghề nghiệp (2023)</p>`
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
