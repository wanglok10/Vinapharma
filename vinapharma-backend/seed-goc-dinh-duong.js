require('dotenv').config();
const mongoose = require('mongoose');
const Post = require('./models/Post');

const AUTHOR_ID = '69b3a064e4ea0cc6bcbf931a';

const posts = [
  {
    title: 'Chỉ số GI và GL: Bí quyết chọn carb thông minh để kiểm soát đường huyết',
    category: 'Góc dinh dưỡng',
    topic: 'Dinh dưỡng',
    excerpt: 'Chỉ số đường huyết (GI) và tải lượng đường huyết (GL) là công cụ khoa học giúp bạn chọn đúng loại carbohydrate, kiểm soát cân nặng và giảm nguy cơ tiểu đường type 2.',
    thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    content: `
<h2>Carbohydrate không phải kẻ thù — nhưng cần biết chọn đúng</h2>
<p>Nhiều người sợ carb sau khi nghe về "đường huyết tăng vọt". Tuy nhiên, không phải mọi carbohydrate đều ảnh hưởng đến cơ thể theo cùng một cách. Đây là lúc chỉ số GI (Glycemic Index) và GL (Glycemic Load) trở nên hữu ích.</p>

<img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" alt="Thực phẩm giàu carbohydrate" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Chỉ số GI là gì?</h2>
<p>GI (Glycemic Index) đo tốc độ một thực phẩm làm tăng đường huyết so với glucose nguyên chất (GI = 100). Thang phân loại:</p>
<ul>
  <li><strong>GI thấp (&lt;55):</strong> Yến mạch, đậu lăng, táo, sữa chua — hấp thu chậm, đường huyết tăng từ từ</li>
  <li><strong>GI trung bình (56–69):</strong> Gạo lứt, bánh mì nguyên cám, ngô, chuối chín</li>
  <li><strong>GI cao (≥70):</strong> Bánh mì trắng, cơm trắng, khoai tây nướng, nước ngọt — tăng đường huyết nhanh và mạnh</li>
</ul>

<h2>Tại sao GL quan trọng hơn chỉ GI?</h2>
<p>GI có một hạn chế: nó không tính đến <em>lượng</em> carb thực tế bạn ăn. Dưa hấu có GI = 72 (cao), nhưng GL chỉ là 4 (thấp) vì trong 100g dưa hấu chứa rất ít carb. Ngược lại, cơm trắng có GI = 64 (trung bình) nhưng GL = 28 (cao) vì bạn ăn cả tô.</p>
<p><strong>Công thức:</strong> GL = (GI × lượng carb thực tế trong khẩu phần) ÷ 100</p>
<ul>
  <li>GL thấp: &lt;10</li>
  <li>GL trung bình: 11–19</li>
  <li>GL cao: ≥20</li>
</ul>

<h2>Yếu tố ảnh hưởng đến GI của thực phẩm</h2>
<p>GI không cố định — nó thay đổi tùy vào:</p>
<ul>
  <li><strong>Mức độ chín:</strong> Chuối xanh có GI = 30, chuối chín hoàn toàn GI = 62</li>
  <li><strong>Cách chế biến:</strong> Mì ống nấu al dente có GI thấp hơn mì nấu nhừ. Khoai tây hấp có GI thấp hơn khoai nghiền</li>
  <li><strong>Độ mịn của tinh bột:</strong> Bột ngũ cốc nghiền mịn hấp thu nhanh hơn ngũ cốc nguyên hạt</li>
  <li><strong>Chất béo và chất xơ:</strong> Ăn carb cùng chất béo, chất xơ hoặc protein giúp giảm GI bữa ăn tổng thể</li>
</ul>

<h2>Ứng dụng thực tiễn: Xây dựng bữa ăn GL thấp</h2>
<img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80" alt="Bữa ăn cân bằng dinh dưỡng" style="width:100%;border-radius:8px;margin:1rem 0"/>
<ul>
  <li>Thay cơm trắng bằng gạo lứt hoặc ăn cơm trắng ít hơn, ăn thêm rau xanh</li>
  <li>Ăn trái cây nguyên quả thay vì uống nước ép — chất xơ trong trái cây giảm tốc độ hấp thu đường</li>
  <li>Kết hợp protein (cá, thịt, đậu hũ) và rau trong mỗi bữa ăn có carb</li>
  <li>Chọn bánh mì nguyên cám, yến mạch nguyên hạt thay vì bánh mì trắng, granola chế biến sẵn</li>
  <li>Nấu mì pasta al dente (còn độ cứng nhất định) thay vì nấu nhừ</li>
</ul>

<h2>Ai cần đặc biệt chú ý GI/GL?</h2>
<p>Dù hữu ích cho tất cả mọi người, chế độ ăn GI/GL thấp đặc biệt quan trọng với:</p>
<ul>
  <li>Người tiểu đường type 1 và type 2</li>
  <li>Người tiền tiểu đường hoặc kháng insulin</li>
  <li>Phụ nữ bị hội chứng buồng trứng đa nang (PCOS)</li>
  <li>Người muốn kiểm soát cân nặng lâu dài</li>
</ul>

<h2>Lời khuyên từ chuyên gia dinh dưỡng</h2>
<p>Chỉ số GI/GL là công cụ hữu ích nhưng không phải là tất cả. Một chế độ ăn lành mạnh cần tính đến tổng thể: mật độ dinh dưỡng, chất xơ, vi chất, và thói quen ăn uống lâu dài. Không cần loại bỏ hoàn toàn thực phẩm GI cao — hãy ăn chúng với liều lượng nhỏ hơn và kết hợp thông minh.</p>
<p><em>Nguồn tham khảo: Harvard T.H. Chan School of Public Health – The Nutrition Source; American Diabetes Association 2024 Standards of Care</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['dinh dưỡng', 'đường huyết', 'carbohydrate', 'GI', 'tiểu đường'],
    published: true,
    publishedAt: new Date('2025-11-05'),
  },
  {
    title: 'Protein: Nhu cầu thực sự của cơ thể và cách đáp ứng từ thực phẩm hằng ngày',
    category: 'Góc dinh dưỡng',
    topic: 'Dinh dưỡng',
    excerpt: 'Protein không chỉ dành cho người tập gym. Tìm hiểu nhu cầu protein theo lứa tuổi, hoạt động, nguồn protein chất lượng cao và cách phân bổ hợp lý trong ngày để tối ưu sức khỏe.',
    thumbnail: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=800&q=80',
    content: `
<h2>Protein — nền tảng của mọi tế bào sống</h2>
<p>Protein tham gia vào hầu hết mọi quá trình sinh học: xây dựng và sửa chữa cơ bắp, sản xuất enzyme và hormone, vận chuyển oxy (hemoglobin), bảo vệ miễn dịch (kháng thể) và duy trì cấu trúc da, tóc, móng. Thiếu protein ảnh hưởng toàn diện đến sức khỏe — không chỉ cơ bắp.</p>

<img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80" alt="Nguồn thực phẩm giàu protein" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Nhu cầu protein theo từng đối tượng</h2>
<p>Mức khuyến nghị cơ bản của WHO là <strong>0,8g protein/kg cân nặng/ngày</strong> cho người trưởng thành ít vận động. Nhưng nhiều nghiên cứu hiện đại cho thấy mức này còn thấp so với nhu cầu thực tế:</p>
<ul>
  <li><strong>Người trưởng thành ít vận động:</strong> 0,8–1,0 g/kg/ngày</li>
  <li><strong>Người vận động thể thao trung bình:</strong> 1,2–1,6 g/kg/ngày</li>
  <li><strong>Người tập luyện cường độ cao, xây dựng cơ bắp:</strong> 1,6–2,2 g/kg/ngày</li>
  <li><strong>Người cao tuổi (≥65 tuổi):</strong> 1,2–1,6 g/kg/ngày để ngăn teo cơ (sarcopenia)</li>
  <li><strong>Phụ nữ mang thai:</strong> Thêm 25g/ngày so với nhu cầu bình thường</li>
  <li><strong>Phụ nữ cho con bú:</strong> Thêm 20g/ngày</li>
</ul>

<h2>Ví dụ thực tế: Người 60kg cần bao nhiêu protein?</h2>
<ul>
  <li>Ít vận động: 48–60g/ngày</li>
  <li>Vận động vừa: 72–96g/ngày</li>
  <li>Tập luyện tích cực: 96–132g/ngày</li>
</ul>
<p>Để đạt 60g protein: 200g ức gà (~46g) + 2 quả trứng (~12g) + 100ml sữa (~3,5g) = khoảng 61,5g</p>

<h2>Chất lượng protein: PDCAAS và DIAAS</h2>
<p>Không phải mọi protein đều như nhau. Điểm DIAAS (Digestible Indispensable Amino Acid Score) đánh giá chất lượng protein dựa trên khả năng tiêu hóa và thành phần acid amin thiết yếu:</p>
<ul>
  <li><strong>Protein động vật (DIAAS cao):</strong> Trứng (1,20), thịt bò (1,10), cá (1,05), sữa (1,18) — chứa đủ 9 acid amin thiết yếu với tỷ lệ lý tưởng</li>
  <li><strong>Protein thực vật (DIAAS thấp hơn):</strong> Đậu nành (0,91), đậu đỏ (0,75), lúa mì (0,45) — thường thiếu một số acid amin (lysine, methionine)</li>
  <li><strong>Kết hợp thực vật:</strong> Cơm + đậu = protein hoàn chỉnh hơn (bổ sung acid amin cho nhau)</li>
</ul>

<img src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80" alt="Thực phẩm protein đa dạng" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Phân bổ protein trong ngày — yếu tố thường bị bỏ qua</h2>
<p>Nghiên cứu cho thấy cơ thể có thể tổng hợp cơ tối ưu khi nhận 0,4g protein/kg/bữa, chia đều 3–4 bữa. Ăn hết 100g protein vào một bữa tối không hiệu quả bằng chia 25g cho mỗi 4 bữa.</p>
<ul>
  <li><strong>Bữa sáng:</strong> Trứng, sữa, sữa chua Hy Lạp, đậu phụ</li>
  <li><strong>Bữa trưa:</strong> Cá, ức gà, thịt nạc, đậu lăng</li>
  <li><strong>Bữa tối:</strong> Hải sản, đậu hũ, thịt bò nạc</li>
  <li><strong>Bữa phụ:</strong> Hạt điều, phô mai tươi, sữa chua</li>
</ul>

<h2>Nguồn protein phổ biến tại Việt Nam và hàm lượng</h2>
<table style="width:100%;border-collapse:collapse;margin:1rem 0">
  <thead><tr style="background:#f5f5f5"><th style="padding:8px;text-align:left;border:1px solid #ddd">Thực phẩm (100g)</th><th style="padding:8px;border:1px solid #ddd">Protein (g)</th></tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #ddd">Ức gà</td><td style="padding:8px;border:1px solid #ddd">23</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">Cá tra, cá basa</td><td style="padding:8px;border:1px solid #ddd">18</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">Tôm</td><td style="padding:8px;border:1px solid #ddd">20</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">Đậu phụ cứng</td><td style="padding:8px;border:1px solid #ddd">8</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">Trứng gà (1 quả ~60g)</td><td style="padding:8px;border:1px solid #ddd">7</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">Sữa tươi (200ml)</td><td style="padding:8px;border:1px solid #ddd">7</td></tr>
  </tbody>
</table>

<p><em>Nguồn tham khảo: FAO 2013 – Dietary Protein Quality Evaluation; ISSN Position Stand on Protein and Exercise 2017</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['protein', 'dinh dưỡng', 'cơ bắp', 'acid amin', 'sức khỏe'],
    published: true,
    publishedAt: new Date('2025-11-12'),
  },
  {
    title: 'Vi chất dinh dưỡng: Những "nhân vật nhỏ bé" quyết định sức khỏe lớn',
    category: 'Góc dinh dưỡng',
    topic: 'Dinh dưỡng',
    excerpt: 'Vitamin và khoáng chất chỉ chiếm phần nhỏ trong khẩu phần ăn nhưng đóng vai trò sống còn. Thiếu vi chất ngầm âm ỉ — không gây triệu chứng rõ ràng nhưng ảnh hưởng sâu đến sức khỏe lâu dài.',
    thumbnail: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
    content: `
<h2>Thiếu vi chất — vấn đề dinh dưỡng ẩn</h2>
<p>Theo WHO, hơn 2 tỷ người trên thế giới bị thiếu vi chất dinh dưỡng — còn gọi là "nạn đói ẩn". Đặc biệt nguy hiểm vì không có triệu chứng rõ ràng trong giai đoạn đầu, chỉ phát hiện khi đã ảnh hưởng nghiêm trọng đến sức khỏe. Tại Việt Nam, thiếu vitamin D, sắt, kẽm và iod vẫn còn phổ biến.</p>

<img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80" alt="Rau củ quả nhiều màu sắc giàu vi chất" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Vitamin D — vi chất của "ánh mặt trời"</h2>
<p>Việt Nam nằm ở vùng nhiệt đới nhưng tỷ lệ thiếu vitamin D đáng ngạc nhiên cao — khoảng 50–60% dân số theo một số nghiên cứu — do thói quen tránh nắng, kem chống nắng và thời gian làm việc trong nhà.</p>
<ul>
  <li><strong>Vai trò:</strong> Hấp thu canxi, sức khỏe xương, điều hòa miễn dịch, hỗ trợ chức năng cơ bắp, giảm nguy cơ một số ung thư</li>
  <li><strong>Thiếu hụt gây ra:</strong> Còi xương (trẻ em), loãng xương (người lớn), yếu cơ, tăng nguy cơ nhiễm trùng, mệt mỏi mãn tính</li>
  <li><strong>Nguồn bổ sung:</strong> Ánh nắng trực tiếp 10–20 phút/ngày (buổi sáng sớm), cá hồi, cá thu, lòng đỏ trứng, nấm phơi nắng</li>
  <li><strong>Nhu cầu:</strong> 600–800 IU/ngày cho người trưởng thành; 1500–2000 IU nếu thiếu hụt</li>
</ul>

<h2>Sắt — vị anh hùng vận chuyển oxy</h2>
<p>Thiếu máu thiếu sắt ảnh hưởng đến 25% dân số toàn cầu, phổ biến nhất ở phụ nữ trong độ tuổi sinh sản và trẻ em.</p>
<ul>
  <li><strong>Sắt heme (dễ hấp thu):</strong> Thịt đỏ, gan, hải sản — hấp thu 15–35%</li>
  <li><strong>Sắt non-heme (khó hấp thu hơn):</strong> Rau bina, đậu lăng, hạt bí — hấp thu 2–20%</li>
  <li><strong>Tăng hấp thu sắt:</strong> Ăn cùng vitamin C (cam, chanh, ớt chuông)</li>
  <li><strong>Giảm hấp thu sắt:</strong> Canxi, tanin trong trà, axit phytic trong ngũ cốc — không uống trà khi ăn bữa giàu sắt</li>
</ul>

<h2>Kẽm — "người giữ cổng" miễn dịch</h2>
<p>Kẽm tham gia vào hơn 300 phản ứng enzyme, cần thiết cho miễn dịch, vết thương lành nhanh, vị giác, khứu giác và phát triển của trẻ.</p>
<ul>
  <li><strong>Dấu hiệu thiếu kẽm:</strong> Hay ốm vặt, vết thương lâu lành, rụng tóc, mất vị giác, chậm lớn ở trẻ</li>
  <li><strong>Nguồn giàu kẽm:</strong> Hàu (giàu nhất!), thịt bò, hạt bí ngô, đậu nành, các loại hạt</li>
  <li><strong>Nhu cầu:</strong> Nam 11mg/ngày, nữ 8mg/ngày</li>
</ul>

<img src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?w=800&q=80" alt="Bổ sung vitamin và khoáng chất" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Iod — "nhiên liệu" của tuyến giáp</h2>
<p>Thiếu iod là nguyên nhân hàng đầu gây suy giáp và chậm phát triển trí tuệ ở trẻ em có thể phòng ngừa được trên toàn cầu.</p>
<ul>
  <li><strong>Nguồn tốt nhất:</strong> Hải sản (cá biển, rong biển, tôm), muối iod</li>
  <li><strong>Lưu ý:</strong> Nấu chín có thể làm mất 20–50% iod trong thực phẩm</li>
  <li><strong>Nhu cầu:</strong> 150μg/ngày (người trưởng thành), 220μg (mang thai), 290μg (cho con bú)</li>
</ul>

<h2>Chiến lược ăn "cầu vồng" để bổ sung vi chất đa dạng</h2>
<p>Nguyên tắc đơn giản nhất: ăn đa dạng màu sắc thực phẩm. Mỗi màu chứa nhóm vi chất và phytochemical đặc trưng:</p>
<ul>
  <li><strong>Đỏ/cam:</strong> Lycopene, beta-carotene, vitamin C (cà chua, cà rốt, ớt chuông đỏ)</li>
  <li><strong>Xanh lá đậm:</strong> Sắt, folate, vitamin K, lutein (rau bina, cải xanh, bông cải xanh)</li>
  <li><strong>Tím/xanh:</strong> Anthocyanin, resveratrol (việt quất, nho đen, cà tím)</li>
  <li><strong>Vàng/trắng:</strong> Quercetin, allicin, kali (tỏi, hành, chuối)</li>
</ul>
<p>Mục tiêu: ít nhất 5 loại rau củ quả/ngày với ≥3 màu khác nhau.</p>
<p><em>Nguồn tham khảo: WHO Global Nutrition Report 2023; Viện Dinh dưỡng Quốc gia Việt Nam</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['vi chất', 'vitamin D', 'sắt', 'kẽm', 'iod', 'dinh dưỡng'],
    published: true,
    publishedAt: new Date('2025-11-20'),
  },
  {
    title: 'Chế độ ăn Địa Trung Hải: Lý do khoa học đằng sau chế độ ăn lành mạnh nhất thế giới',
    category: 'Góc dinh dưỡng',
    topic: 'Dinh dưỡng',
    excerpt: 'Được xếp hạng là chế độ ăn tốt nhất nhiều năm liên tiếp, chế độ ăn Địa Trung Hải không phải là "kiêng" mà là lối sống ăn uống bền vững với bằng chứng khoa học vững chắc về tim mạch, não bộ và tuổi thọ.',
    thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    content: `
<h2>Tại sao chế độ ăn Địa Trung Hải đứng đầu bảng?</h2>
<p>Nghiên cứu PREDIMED (Prevention with Mediterranean Diet) theo dõi hơn 7.000 người Tây Ban Nha trong gần 5 năm cho thấy: chế độ ăn Địa Trung Hải giảm 30% nguy cơ biến cố tim mạch nghiêm trọng (nhồi máu cơ tim, đột quỵ) so với chế độ ăn ít béo thông thường. Đây là bằng chứng lâm sàng mạnh nhất từ trước đến nay về chế độ ăn và bệnh tim.</p>

<img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80" alt="Thực phẩm Địa Trung Hải" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Kim tự tháp thực phẩm Địa Trung Hải</h2>
<p><strong>Nền tảng (ăn hằng ngày):</strong></p>
<ul>
  <li>Rau, củ, quả đa dạng — ít nhất 5 phần/ngày</li>
  <li>Ngũ cốc nguyên hạt: bánh mì nguyên cám, yến mạch, gạo lứt</li>
  <li>Đậu các loại: đậu lăng, đậu gà, đậu đen</li>
  <li>Hạt dinh dưỡng: hạnh nhân, óc chó, hạt lanh</li>
  <li>Dầu olive nguyên chất (extra virgin) — chất béo chính</li>
  <li>Thảo mộc và gia vị: tỏi, húng quế, oregano, nghệ, quế</li>
</ul>
<p><strong>Thường xuyên (vài lần/tuần):</strong></p>
<ul>
  <li>Cá và hải sản: cá hồi, cá thu, cá mòi, tôm — ít nhất 2 lần/tuần</li>
  <li>Gia cầm (gà, vịt): 2–4 lần/tuần</li>
  <li>Sữa chua Hy Lạp, phô mai nhẹ: hằng ngày với lượng vừa phải</li>
  <li>Trứng: 3–4 quả/tuần</li>
</ul>
<p><strong>Thỉnh thoảng (vài lần/tháng):</strong></p>
<ul>
  <li>Thịt đỏ: thịt bò, thịt cừu — dưới 4 lần/tháng</li>
  <li>Thức uống có cồn: rượu vang đỏ 1–2 ly/ngày (không bắt buộc)</li>
</ul>
<p><strong>Hạn chế tối đa:</strong></p>
<ul>
  <li>Thực phẩm chế biến sẵn, fast food, nước ngọt</li>
  <li>Thịt chế biến: xúc xích, thịt xông khói, chả lụa</li>
  <li>Đường tinh luyện và bánh kẹo</li>
</ul>

<h2>Lợi ích sức khỏe được chứng minh</h2>
<img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80" alt="Sức khỏe tim mạch và não bộ" style="width:100%;border-radius:8px;margin:1rem 0"/>
<ul>
  <li><strong>Tim mạch:</strong> Giảm LDL-cholesterol, hạ huyết áp, giảm viêm (CRP), giảm tỷ lệ tử vong do tim mạch</li>
  <li><strong>Não bộ và nhận thức:</strong> Nghiên cứu MIND Diet cho thấy giảm 35% nguy cơ Alzheimer; cải thiện trí nhớ và tốc độ xử lý thông tin</li>
  <li><strong>Chống ung thư:</strong> Giảm nguy cơ ung thư đại tràng, vú và dạ dày thông qua tác dụng chống viêm và chống oxy hóa</li>
  <li><strong>Tiểu đường:</strong> Cải thiện độ nhạy insulin, kiểm soát đường huyết sau ăn</li>
  <li><strong>Sức khỏe tâm thần:</strong> Liên quan đến giảm tỷ lệ trầm cảm và lo âu</li>
  <li><strong>Tuổi thọ:</strong> Nghiên cứu Blue Zones cho thấy người sống lâu nhất (100+ tuổi) ở vùng Sardinia, Ikaria (Địa Trung Hải) ăn tương tự mô hình này</li>
</ul>

<h2>Cơ chế hoạt động: Tại sao chế độ này hiệu quả?</h2>
<p>Không có một "siêu chất" duy nhất làm nên điều kỳ diệu — mà là sự kết hợp toàn diện:</p>
<ul>
  <li><strong>Omega-3 từ cá:</strong> Chống viêm, bảo vệ tim và não</li>
  <li><strong>Polyphenol trong dầu olive:</strong> Oleocanthal có tác dụng chống viêm tương tự ibuprofen</li>
  <li><strong>Chất xơ từ đậu và ngũ cốc:</strong> Nuôi dưỡng vi khuẩn đường ruột có lợi</li>
  <li><strong>Lycopene, anthocyanin, flavonoid:</strong> Chống oxy hóa, bảo vệ tế bào</li>
  <li><strong>Ít thực phẩm chế biến:</strong> Giảm tiếp xúc với muối, đường ẩn, phụ gia</li>
</ul>

<h2>Áp dụng vào bữa ăn Việt Nam</h2>
<p>Bạn không cần ăn pizza hay hummus để theo chế độ Địa Trung Hải. Nguyên lý có thể áp dụng với thực phẩm Việt:</p>
<ul>
  <li>Dùng dầu ô-liu hoặc dầu mè cho món xào thay vì dầu hướng dương công nghiệp</li>
  <li>Ăn nhiều cá hơn thịt: cá thu, cá hồi, cá basa, tôm</li>
  <li>Đậu trong canh, cháo, salad thay vì chỉ ăn như thức ăn phụ</li>
  <li>Rau xanh trong mỗi bữa: rau muống, cải xanh, bông cải, rau đắng</li>
  <li>Hạt hỗn hợp (hạnh nhân, điều, óc chó) thay vì bánh snack</li>
</ul>
<p><em>Nguồn tham khảo: Estruch R et al., NEJM 2013 – PREDIMED Trial; Morris MC et al. – MIND Diet Study 2015</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['địa trung hải', 'chế độ ăn', 'tim mạch', 'dinh dưỡng', 'sức khỏe'],
    published: true,
    publishedAt: new Date('2025-11-28'),
  },
  {
    title: 'Ăn uống theo đồng hồ sinh học: Chrono-nutrition và ảnh hưởng đến cân nặng, chuyển hóa',
    category: 'Góc dinh dưỡng',
    topic: 'Dinh dưỡng',
    excerpt: 'Không chỉ "ăn gì" mà còn "ăn khi nào" — đồng hồ sinh học điều phối hầu hết quá trình chuyển hóa trong cơ thể. Hiểu chrono-nutrition giúp tối ưu hóa hiệu quả của chế độ ăn mà không cần thay đổi thực đơn.',
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    content: `
<h2>Đồng hồ sinh học và hệ thống tiêu hóa</h2>
<p>Cơ thể người hoạt động theo nhịp sinh học 24 giờ (circadian rhythm), điều phối bởi ánh sáng mặt trời và đồng hồ nội tại trong từng tế bào. Không chỉ chu kỳ ngủ/thức — đồng hồ này kiểm soát tiết insulin, cortisol, acid dạ dày, tốc độ chuyển hóa, và thậm chí cảm giác no/đói. Chrono-nutrition là khoa học nghiên cứu sự tương tác giữa thời gian ăn và đồng hồ sinh học.</p>

<img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Nhịp sinh học và dinh dưỡng" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Cơ thể xử lý thức ăn khác nhau theo giờ</h2>
<p>Nghiên cứu cho thấy cùng một bữa ăn có thể ảnh hưởng đến cân nặng và đường huyết rất khác nhau tùy giờ ăn:</p>
<ul>
  <li><strong>Buổi sáng (6–10h):</strong> Độ nhạy insulin cao nhất → cơ thể xử lý carb và đường hiệu quả nhất. Bữa sáng lớn ít tích mỡ hơn bữa tối lớn cùng lượng calo</li>
  <li><strong>Buổi trưa (12–14h):</strong> Chuyển hóa tốt, nhiệt độ cơ thể đạt đỉnh. Bữa ăn chính nên ở đây</li>
  <li><strong>Buổi chiều tối (17–19h):</strong> Độ nhạy insulin giảm dần, tiêu hóa chậm hơn</li>
  <li><strong>Sau 20h:</strong> Insulin kém hiệu quả nhất, tốc độ chuyển hóa thấp, cơ thể có xu hướng tích trữ mỡ nhiều hơn từ cùng lượng calo</li>
</ul>

<h2>Time-Restricted Eating (TRE) — ăn trong khung giờ</h2>
<p>TRE không phải nhịn ăn hoàn toàn mà chỉ giới hạn thời gian ăn uống trong một khung giờ nhất định, để cơ thể có thời gian nghỉ ngơi và sửa chữa (autophagy).</p>
<ul>
  <li><strong>TRE 8:16:</strong> Ăn trong 8 giờ, nhịn 16 giờ (phổ biến nhất). Ví dụ: ăn từ 8h–16h hoặc 10h–18h</li>
  <li><strong>TRE 10:14:</strong> Ăn trong 10 giờ — nhẹ nhàng hơn, dễ duy trì</li>
  <li><strong>TRE 6:18:</strong> Chỉ phù hợp với người đã quen, dưới sự hướng dẫn chuyên gia</li>
</ul>
<p>Nghiên cứu của Satchidananda Panda (Salk Institute) cho thấy TRE 8–10 giờ giảm cân, cải thiện đường huyết, lipid máu và huyết áp mà không cần thay đổi lượng calo.</p>

<h2>Bữa sáng: Ăn như vua hay bỏ qua?</h2>
<p>Tranh luận về bữa sáng vẫn còn. Điều thực sự quan trọng:</p>
<ul>
  <li>Nếu ăn sáng: ưu tiên protein (trứng, sữa chua) và chất xơ, tránh bánh ngọt và nước ngọt — không bắt đầu ngày bằng carb tinh luyện</li>
  <li>Nếu bỏ sáng (TRE): hãy chắc chắn bữa trưa là bữa ăn đầy đủ nhất, không bù lại bằng ăn nhiều hơn vào buổi tối</li>
  <li>Không ổn định > ổn định: ăn sáng hôm nay, bỏ hôm sau làm rối loạn đồng hồ sinh học</li>
</ul>

<img src="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=800&q=80" alt="Bữa sáng lành mạnh" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Ăn tối muộn — tác hại thực sự</h2>
<p>Ăn bữa tối lớn sau 20h liên kết với:</p>
<ul>
  <li>Tăng glucose máu sau ăn cao hơn 18% so với ăn cùng bữa lúc 13h</li>
  <li>Trào ngược dạ dày thực quản (GERD)</li>
  <li>Chất lượng giấc ngủ kém do quá trình tiêu hóa cạnh tranh với quá trình phục hồi giấc ngủ</li>
  <li>Tích mỡ bụng nhiều hơn theo thời gian</li>
</ul>
<p><strong>Khuyến nghị:</strong> Ngừng ăn ít nhất 2–3 tiếng trước giờ ngủ. Nếu cần ăn tối muộn, chọn bữa nhỏ và nhẹ (canh rau, sữa chua, trứng luộc).</p>

<h2>Thực hành chrono-nutrition trong cuộc sống</h2>
<ul>
  <li>Ăn bữa sáng/trưa là bữa nhiều calo nhất, bữa tối nhẹ hơn</li>
  <li>Ăn bữa đầu tiên trong ngày sau ít nhất 1 tiếng sau khi thức dậy (để cortisol ổn định)</li>
  <li>Tránh ăn đêm — nếu đói, uống nước hoặc ăn nhẹ chứa protein</li>
  <li>Giữ khung giờ ăn nhất quán mỗi ngày kể cả cuối tuần</li>
  <li>Nhịn ăn thực phẩm sau 20h dù bất kỳ thứ gì (không có "bữa ăn đêm vô hại")</li>
</ul>
<p><em>Nguồn tham khảo: Panda S. – "The Circadian Code" 2019; Jakubowicz D et al. – Obesity 2013 (Big Breakfast vs Big Dinner study)</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['chrono-nutrition', 'đồng hồ sinh học', 'nhịn ăn gián đoạn', 'chuyển hóa', 'cân nặng'],
    published: true,
    publishedAt: new Date('2025-12-05'),
  },
];

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  let count = 0;
  for (const p of posts) {
    const exists = await Post.findOne({ title: p.title });
    if (exists) { console.log(`⏭️  Đã tồn tại: ${p.title}`); continue; }
    await Post.create(p);
    console.log(`✅ Đã thêm: ${p.title}`);
    count++;
  }
  console.log(`\nHoàn thành: thêm ${count}/${posts.length} bài`);
  await mongoose.disconnect();
}

main().catch(err => { console.error(err); process.exit(1); });
