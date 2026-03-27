// Seed 14 bài viết cho 7 danh mục mới — node seed-posts-2026-new.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');

const posts = [

  // ── GÓC SỨC KHỎE ──────────────────────────────────────────────────────────
  {
    title: '5 thói quen buổi sáng giúp tăng cường sức khỏe toàn diện',
    category: 'Góc sức khỏe', topic: 'Lối sống', featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
    excerpt: 'Buổi sáng là "giờ vàng" để khởi động cơ thể. 5 thói quen đơn giản này không tốn tiền nhưng có thể thay đổi hoàn toàn chất lượng sức khỏe của bạn.',
    content: `<p>Nhiều nghiên cứu chỉ ra rằng những người có thói quen buổi sáng nhất quán thường có sức khỏe thể chất lẫn tinh thần tốt hơn so với những người không có thói quen. Không cần thức dậy lúc 5 giờ sáng hay tập gym 2 tiếng — chỉ cần bắt đầu bằng 5 thói quen nhỏ dưới đây.</p>

<h2>1. Uống một ly nước lọc ngay khi thức dậy</h2>
<p>Sau 7–8 tiếng ngủ, cơ thể bạn đã mất nước đáng kể qua hơi thở và mồ hôi. Uống 200–300ml nước ấm ngay khi thức dậy giúp kích thích hệ tiêu hóa, thúc đẩy quá trình trao đổi chất và "đánh thức" các cơ quan nội tạng hoạt động hiệu quả hơn.</p>
<p><strong>Mẹo nhỏ:</strong> Để sẵn một ly nước bên cạnh giường trước khi đi ngủ, bạn sẽ không cần phải nhớ hay cố gắng.</p>

<h2>2. Vươn vai và tập thở sâu 5 phút</h2>
<p>Sau một đêm nằm, cột sống và các khớp cần được "làm nóng" từ từ. Dành 5 phút vươn vai, xoay cổ nhẹ nhàng và thực hành hít thở bụng giúp tăng lưu thông oxy lên não, giảm căng thẳng và chuẩn bị tâm lý tốt cho ngày mới.</p>

<h2>3. Ăn sáng đủ chất với protein</h2>
<p>Bỏ bữa sáng là một trong những thói quen tệ nhất với sức khỏe. Bữa sáng giàu protein — trứng, sữa, đậu — giúp duy trì đường huyết ổn định, giảm cảm giác thèm ăn buổi chiều và tăng khả năng tập trung trong buổi sáng.</p>

<h2>4. Tắm nắng 10–15 phút</h2>
<p>Ánh nắng mặt trời buổi sáng (trước 8:30 sáng) là nguồn Vitamin D tự nhiên và miễn phí tốt nhất. Nó còn giúp điều chỉnh đồng hồ sinh học, cải thiện tâm trạng và tăng cường hệ miễn dịch. Đứng gần cửa sổ hoặc ra ban công trong 15 phút là đủ.</p>

<h2>5. Lập danh sách 3 việc quan trọng nhất cần làm hôm nay</h2>
<p>Sức khỏe tinh thần cũng là một phần của sức khỏe toàn diện. Viết ra 3 việc ưu tiên nhất trong ngày giúp não bộ tập trung, giảm cảm giác áp lực và tạo ra cảm giác kiểm soát được cuộc sống — yếu tố quan trọng để giảm stress mãn tính.</p>

<h2>Bắt đầu từ hôm nay</h2>
<p>Đừng cố thay đổi mọi thứ cùng một lúc. Hãy chọn 1 trong 5 thói quen trên và duy trì trong 21 ngày. Sau đó thêm thói quen thứ 2. Sức khỏe là hành trình dài — điều quan trọng là tính nhất quán, không phải sự hoàn hảo.</p>
<p><em>Nguồn tham khảo: Harvard Health Publishing, Mayo Clinic Health Letter</em></p>`,
    tags: ['Lối sống', 'Thói quen buổi sáng', 'Sức khỏe toàn diện'], readTime: 5, published: true,
  },

  {
    title: 'Giấc ngủ chất lượng: Chìa khóa vàng cho sức khỏe và tuổi thọ',
    category: 'Góc sức khỏe', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&q=80',
    excerpt: 'Chúng ta dành 1/3 cuộc đời để ngủ — nhưng bao nhiêu người thực sự ngủ đúng cách? Giấc ngủ không chỉ là nghỉ ngơi, đó là quá trình tái tạo cơ thể từ tế bào.',
    content: `<p>Trong khi bạn ngủ, não bộ "dọn dẹp" các độc tố tích tụ trong ngày, hệ miễn dịch sản xuất các tế bào chiến đấu với bệnh tật, cơ thể tiết hormone tăng trưởng để sửa chữa mô và tế bào. Thiếu ngủ không chỉ khiến bạn mệt mỏi — nó thực sự làm ngắn tuổi thọ.</p>

<h2>Ngủ bao nhiêu tiếng là đủ?</h2>
<p>Theo Tổ chức Y tế Thế giới (WHO) và Viện Giấc ngủ Hoa Kỳ:</p>
<ul>
<li>Người trưởng thành (18–64 tuổi): <strong>7–9 tiếng/đêm</strong></li>
<li>Người cao tuổi (65+): <strong>7–8 tiếng/đêm</strong></li>
<li>Thanh thiếu niên (14–17 tuổi): <strong>8–10 tiếng/đêm</strong></li>
</ul>
<p>Ngủ ít hơn 6 tiếng liên tục trong nhiều tháng làm tăng nguy cơ tiểu đường type 2 lên 28%, nguy cơ tim mạch lên 23% và suy giảm trí nhớ đáng kể.</p>

<h2>5 bí quyết cải thiện chất lượng giấc ngủ</h2>
<p><strong>1. Ngủ và thức đúng giờ cố định</strong> — kể cả cuối tuần. Cơ thể hoạt động theo nhịp sinh học 24 giờ, và việc thay đổi giờ ngủ cuối tuần giống như "jet lag tự tạo".</p>
<p><strong>2. Tắt màn hình 1 tiếng trước khi ngủ</strong> — Ánh sáng xanh từ điện thoại ức chế melatonin, hormone giúp cơ thể nhận tín hiệu "đã đến giờ ngủ".</p>
<p><strong>3. Giữ phòng ngủ mát và tối</strong> — Nhiệt độ lý tưởng là 18–22°C. Cơ thể cần hạ thân nhiệt để vào giấc ngủ sâu.</p>
<p><strong>4. Tránh caffeine sau 14:00</strong> — Caffeine có thời gian bán hủy 5–6 tiếng, nghĩa là một ly cà phê uống lúc 15:00 vẫn còn 50% tác dụng khi bạn đi ngủ lúc 22:00.</p>
<p><strong>5. Tạo nghi thức thư giãn trước khi ngủ</strong> — Đọc sách, thiền 10 phút, uống trà hoa cúc. Não bộ học theo thói quen — cùng một nghi thức sẽ gửi tín hiệu "đến giờ nghỉ ngơi".</p>

<h2>Khi nào cần gặp bác sĩ?</h2>
<p>Nếu bạn khó ngủ hơn 3 đêm/tuần kéo dài trên 3 tháng, thường xuyên ngáy to hoặc ngừng thở khi ngủ, hãy gặp chuyên gia. Rối loạn giấc ngủ là bệnh lý cần được điều trị, không phải tình trạng phải "sống chung với lũ".</p>`,
    tags: ['Giấc ngủ', 'Sức khỏe', 'Thói quen lành mạnh'], readTime: 6, published: true,
  },

  // ── GÓC LÀM ĐẸP ───────────────────────────────────────────────────────────
  {
    title: 'Chăm sóc da từ thiên nhiên: Bí quyết để da luôn tươi sáng và ẩm mịn',
    category: 'Góc làm đẹp', topic: 'Làm đẹp', featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80',
    excerpt: 'Da là tấm gương phản chiếu sức khỏe bên trong. Thay vì chi hàng triệu đồng cho mỹ phẩm cao cấp, hãy thử những phương pháp chăm sóc da từ thiên nhiên đã được chứng minh hiệu quả.',
    content: `<p>Ngành công nghiệp làm đẹp toàn cầu trị giá hơn 500 tỷ USD mỗi năm — nhưng nhiều chuyên gia da liễu đồng ý rằng chìa khóa cho làn da đẹp thực sự bắt đầu từ bên trong và những thói quen đơn giản hàng ngày.</p>

<h2>Nước — "Mỹ phẩm" rẻ nhất và hiệu quả nhất</h2>
<p>Uống đủ 2–2.5 lít nước mỗi ngày giúp da duy trì độ ẩm từ bên trong, giảm nếp nhăn và giúp da săn chắc hơn. Nghiên cứu từ Đại học Edinburgh (UK) cho thấy những người uống đủ nước có lớp bì ngoài da dày hơn và khỏe mạnh hơn đáng kể.</p>

<h2>Chống nắng — Bước quan trọng nhất trong routine làm đẹp</h2>
<p>80% dấu hiệu lão hóa da (nám, đồi mồi, nếp nhăn) đến từ tia UV. Sử dụng kem chống nắng SPF 30+ mỗi ngày — kể cả ngày흐리 mây — là bước duy nhất mà mọi bác sĩ da liễu đều đồng thuận.</p>

<h2>Vitamin C từ thực phẩm cho da sáng khỏe</h2>
<p>Vitamin C là dưỡng chất thiết yếu để da sản xuất collagen — protein giữ da căng mọng và đàn hồi. Các thực phẩm giàu Vitamin C tốt cho da:</p>
<ul>
<li>Ổi: 228mg Vitamin C/100g (gấp 4 lần cam)</li>
<li>Ớt chuông đỏ: 190mg/100g</li>
<li>Kiwi: 93mg/100g</li>
<li>Dâu tây: 59mg/100g</li>
</ul>

<h2>Mặt nạ từ nguyên liệu tự nhiên</h2>
<p><strong>Mật ong + Sữa chua</strong> (da khô): Trộn 1 thìa mật ong nguyên chất với 2 thìa sữa chua không đường. Đắp 15 phút, rửa sạch. Mật ong có đặc tính kháng khuẩn, sữa chua chứa axit lactic nhẹ giúp làm mềm da.</p>
<p><strong>Nha đam</strong> (da dầu/mụn): Gel nha đam tươi chứa aloesin giúp làm dịu viêm, giảm đỏ và dưỡng ẩm nhẹ nhàng mà không gây bít lỗ chân lông.</p>

<h2>Ngủ đủ giấc — Giờ "vàng" phục hồi da</h2>
<p>Từ 22:00 đến 2:00 sáng, cơ thể tiết lượng hormone tăng trưởng cao nhất, kích thích tái tạo tế bào da. Đây là lý do các sản phẩm night cream thường hiệu quả hơn — không phải vì thành phần, mà vì thời điểm sử dụng.</p>`,
    tags: ['Chăm sóc da', 'Làm đẹp tự nhiên', 'Skincare'], readTime: 6, published: true,
  },

  {
    title: 'Dinh dưỡng cho mái tóc: Từ bên trong ra ngoài',
    category: 'Góc làm đẹp', topic: 'Làm đẹp', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80',
    excerpt: 'Tóc rụng nhiều, khô xơ và gãy dễ thường không phải do dầu gội hay điều kiện — mà do thiếu hụt dinh dưỡng. Hãy tìm hiểu cách nuôi dưỡng mái tóc từ bữa ăn hàng ngày.',
    content: `<p>Mỗi ngày chúng ta rụng 50–100 sợi tóc — đây là bình thường. Nhưng khi tóc rụng thành chùm, mỏng dần ở đỉnh đầu, hay mọc chậm và khô xơ, đó thường là dấu hiệu cơ thể đang thiếu hụt một số dưỡng chất thiết yếu.</p>

<h2>Protein — Nền tảng cấu trúc tóc</h2>
<p>Tóc được cấu thành từ 95% keratin — một loại protein. Khi chế độ ăn thiếu protein, cơ thể ưu tiên sử dụng protein cho các cơ quan quan trọng hơn và "cắt bớt" nguồn cung cho tóc. Kết quả: tóc mỏng, dễ gãy và rụng nhiều hơn.</p>
<p><strong>Nguồn protein tốt cho tóc:</strong> Trứng (đặc biệt lòng đỏ), thịt gà, cá hồi, đậu lăng, hạt bí</p>

<h2>Sắt — Dưỡng chất thường bị bỏ qua</h2>
<p>Thiếu sắt là một trong những nguyên nhân phổ biến nhất gây rụng tóc ở phụ nữ, đặc biệt phụ nữ trong độ tuổi sinh sản. Sắt cần thiết để vận chuyển oxy đến nang tóc — thiếu oxy, nang tóc "đói" và tóc rụng sớm.</p>
<p><strong>Thực phẩm giàu sắt:</strong> Thịt bò, gan, rau cải bó xôi, đậu đen, hạt mè</p>

<h2>Biotin (Vitamin B7) — "Vitamin tóc" nổi tiếng</h2>
<p>Biotin tham gia vào quá trình tổng hợp keratin. Mặc dù thiếu biotin nghiêm trọng khá hiếm, nhưng bổ sung biotin ở mức độ phù hợp giúp cải thiện độ dày và sức mạnh của tóc.</p>
<p><strong>Nguồn Biotin tự nhiên:</strong> Trứng (đặc biệt lòng đỏ), các loại hạt, chuối, khoai lang</p>

<h2>Omega-3 — Dưỡng ẩm từ bên trong</h2>
<p>Axit béo Omega-3 nuôi dưỡng nang tóc, giữ tóc bóng mượt và giảm viêm da đầu. Người ăn chay hoặc không ăn cá thường thiếu Omega-3 và có tóc khô hơn.</p>

<h2>Zinc — Ít biết nhưng cực kỳ quan trọng</h2>
<p>Zinc kiểm soát tuyến dầu quanh nang tóc và tham gia vào quá trình phát triển, sửa chữa mô tóc. Thiếu Zinc có thể gây rụng tóc theo mảng và gàu.</p>
<p><strong>Nguồn Zinc:</strong> Hàu, thịt bò, hạt bí ngô, hạt điều</p>

<h2>Lưu ý quan trọng</h2>
<p>Bổ sung đơn độc một dưỡng chất thường không đủ nếu chế độ ăn tổng thể mất cân đối. Hãy tập trung vào một bữa ăn đa dạng và cân bằng trước khi tìm đến các loại thực phẩm chức năng.</p>`,
    tags: ['Chăm sóc tóc', 'Dinh dưỡng', 'Làm đẹp'], readTime: 5, published: true,
  },

  // ── GÓC DINH DƯỠNG ────────────────────────────────────────────────────────
  {
    title: 'Omega-3: Dưỡng chất vàng cho tim mạch và não bộ',
    category: 'Góc dinh dưỡng', topic: 'Dinh dưỡng', featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80',
    excerpt: 'Omega-3 là một trong số ít dưỡng chất có bằng chứng khoa học rõ ràng về lợi ích sức khỏe. Từ tim mạch đến não bộ, từ chống viêm đến sức khỏe tâm thần — Omega-3 thực sự là dưỡng chất đáng đầu tư.',
    content: `<p>Omega-3 là nhóm axit béo không bão hòa đa mà cơ thể người không tự tổng hợp được — nghĩa là chúng ta bắt buộc phải lấy từ thực phẩm hoặc thực phẩm chức năng. Có 3 dạng Omega-3 quan trọng nhất:</p>
<ul>
<li><strong>EPA (Eicosapentaenoic acid)</strong> — chủ yếu trong cá biển, có tác dụng chống viêm mạnh</li>
<li><strong>DHA (Docosahexaenoic acid)</strong> — thiết yếu cho não bộ và thị lực, chiếm 40% chất béo trong não</li>
<li><strong>ALA (Alpha-linolenic acid)</strong> — có trong hạt lanh, hạt chia; cơ thể chuyển đổi thành EPA/DHA nhưng tỷ lệ rất thấp (~5%)</li>
</ul>

<h2>Lợi ích được chứng minh bởi khoa học</h2>
<p><strong>1. Sức khỏe tim mạch</strong><br/>
Omega-3 giúp hạ triglyceride trong máu từ 15–30%, giảm huyết áp nhẹ, ngăn ngừa cục máu đông và làm chậm quá trình hình thành mảng xơ vữa động mạch. Nghiên cứu REDUCE-IT (2019) trên 8.000 bệnh nhân cho thấy liều cao EPA giảm 25% nguy cơ biến cố tim mạch.</p>

<p><strong>2. Sức khỏe não bộ</strong><br/>
DHA là thành phần cấu trúc chính của não. Thiếu DHA trong giai đoạn phát triển làm suy giảm nhận thức. Ở người trưởng thành, bổ sung Omega-3 liên kết với cải thiện trí nhớ và giảm nguy cơ sa sút trí tuệ.</p>

<p><strong>3. Chống viêm toàn thân</strong><br/>
Viêm mãn tính là căn nguyên của hầu hết bệnh mãn tính — từ tiểu đường đến ung thư. EPA và DHA chuyển đổi thành các phân tử chống viêm (resolvins, protectins) giúp "tắt" phản ứng viêm một cách tự nhiên.</p>

<p><strong>4. Sức khỏe tâm thần</strong><br/>
Meta-analysis từ 26 nghiên cứu cho thấy bổ sung Omega-3 (đặc biệt EPA > 60% hỗn hợp) có hiệu quả đáng kể trong hỗ trợ điều trị trầm cảm.</p>

<h2>Nguồn Omega-3 tốt nhất</h2>
<p><strong>Từ thực phẩm (khuyến nghị ưu tiên):</strong></p>
<ul>
<li>Cá hồi: 2.2g EPA+DHA/100g</li>
<li>Cá thu: 2.6g/100g</li>
<li>Cá trích: 1.7g/100g</li>
<li>Hạt chia: 5g ALA/28g</li>
<li>Hạt lanh xay: 6.4g ALA/28g</li>
<li>Óc chó: 2.5g ALA/28g</li>
</ul>

<h2>Liều bổ sung khuyến nghị</h2>
<p>WHO khuyến nghị: <strong>250–500mg EPA+DHA/ngày</strong> cho người khỏe mạnh. Với người có vấn đề tim mạch, bác sĩ có thể chỉ định liều cao hơn (1–4g/ngày) dưới giám sát y tế.</p>`,
    tags: ['Omega-3', 'Tim mạch', 'Dinh dưỡng', 'Não bộ'], readTime: 7, published: true,
  },

  {
    title: 'Protein — Nền tảng xây dựng cơ thể: Bao nhiêu là đủ?',
    category: 'Góc dinh dưỡng', topic: 'Dinh dưỡng', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80',
    excerpt: 'Protein không chỉ dành cho người tập gym. Nó tham gia vào mọi chức năng sống trong cơ thể — từ hệ miễn dịch đến hormone, từ enzyme đến cơ bắp. Vậy bạn đang ăn đủ protein chưa?',
    content: `<p>Protein là đại phân tử sinh học cấu thành từ các axit amin — "những viên gạch xây dựng sự sống". Trong cơ thể người, có hơn 100.000 loại protein khác nhau, mỗi loại thực hiện một chức năng riêng biệt.</p>

<h2>Cơ thể cần protein để làm gì?</h2>
<ul>
<li><strong>Xây dựng và sửa chữa mô cơ</strong> — đặc biệt quan trọng sau tập luyện và chấn thương</li>
<li><strong>Sản xuất enzyme và hormone</strong> — insulin, hemoglobin, các enzyme tiêu hóa đều là protein</li>
<li><strong>Hệ miễn dịch</strong> — kháng thể là protein; thiếu protein = miễn dịch suy yếu</li>
<li><strong>Vận chuyển chất</strong> — hemoglobin vận chuyển oxy; albumin vận chuyển thuốc và chất dinh dưỡng</li>
<li><strong>Nguồn năng lượng dự phòng</strong> — khi thiếu carb và chất béo, cơ thể dùng protein</li>
</ul>

<h2>Bao nhiêu protein là đủ?</h2>
<p>Khuyến nghị chung từ WHO và các tổ chức dinh dưỡng lớn:</p>
<ul>
<li>Người ít vận động: <strong>0.8g/kg cân nặng/ngày</strong></li>
<li>Người vận động vừa: <strong>1.2–1.6g/kg/ngày</strong></li>
<li>Người tập thể thao cường độ cao: <strong>1.6–2.2g/kg/ngày</strong></li>
<li>Người cao tuổi (65+): <strong>1.0–1.2g/kg/ngày</strong> (cần nhiều hơn để chống sarcopenia)</li>
</ul>
<p><em>Ví dụ: Người 60kg ít vận động cần ~48g protein/ngày. Một quả trứng có ~6g protein, 100g ức gà có ~31g protein.</em></p>

<h2>Dấu hiệu thiếu protein</h2>
<ul>
<li>Phù nề (đặc biệt ở chân, mắt cá)</li>
<li>Vết thương lành chậm</li>
<li>Tóc rụng nhiều, móng giòn dễ gãy</li>
<li>Dễ ốm vặt, hồi phục lâu</li>
<li>Mất cơ, yếu ớt dù không giảm cân</li>
</ul>

<h2>Nguồn protein chất lượng cao</h2>
<p><strong>Động vật:</strong> Trứng (protein "vàng chuẩn"), ức gà, cá hồi, thịt bò nạc, sữa và các sản phẩm từ sữa</p>
<p><strong>Thực vật:</strong> Đậu hũ, tempeh, đậu lăng, đậu chickpea, hạt quinoa (protein hoàn chỉnh hiếm gặp ở thực vật)</p>

<h2>Protein có gây hại thận không?</h2>
<p>Đây là lo ngại phổ biến nhưng không có cơ sở với người khỏe mạnh. Nghiên cứu không tìm thấy bằng chứng protein ở mức 2g/kg/ngày gây hại thận ở người không có bệnh thận từ trước. Nếu bạn đã có vấn đề thận, hãy tham khảo bác sĩ về lượng protein phù hợp.</p>`,
    tags: ['Protein', 'Dinh dưỡng', 'Cơ thể khỏe mạnh'], readTime: 6, published: true,
  },

  // ── VẤN ĐỀ THƯỜNG GẶP ────────────────────────────────────────────────────
  {
    title: 'Mất ngủ mãn tính: Nguyên nhân, hậu quả và giải pháp hiệu quả',
    category: 'Vấn đề thường gặp', topic: 'Sức khỏe', featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&q=80',
    excerpt: '1/3 dân số thế giới gặp vấn đề về giấc ngủ. Mất ngủ không chỉ gây mệt mỏi — nghiên cứu chỉ ra nó là yếu tố nguy cơ độc lập với bệnh tim mạch, tiểu đường và trầm cảm.',
    content: `<p>Mất ngủ (insomnia) được định nghĩa là khó đi vào giấc ngủ, khó duy trì giấc ngủ, hoặc thức dậy sớm hơn mong muốn — và tình trạng này ảnh hưởng đến chất lượng cuộc sống ban ngày. Khi kéo dài trên 3 tháng, đây là mất ngủ mãn tính và cần được điều trị y tế.</p>

<h2>Các nguyên nhân phổ biến</h2>
<p><strong>Căng thẳng và lo âu</strong> là nguyên nhân #1. Khi não bộ đang "xử lý" các vấn đề chưa giải quyết, nó rất khó "tắt nguồn" để đi vào giấc ngủ sâu.</p>
<p><strong>Thói quen ngủ kém</strong> (sleep hygiene): Màn hình trước giờ ngủ, giờ ngủ không cố định, ngủ ngày quá nhiều, phòng ngủ sáng và ồn ào.</p>
<p><strong>Caffeine và rượu</strong>: Nhiều người nghĩ rượu giúp dễ ngủ — đúng là dễ vào giấc hơn, nhưng rượu phá vỡ cấu trúc giấc ngủ, làm giảm REM và khiến bạn thức giấc nửa đêm.</p>
<p><strong>Bệnh lý kèm theo</strong>: Đau mãn tính, trào ngược dạ dày, hội chứng chân bồn chồn, ngưng thở khi ngủ.</p>
<p><strong>Thuốc</strong>: Một số thuốc điều trị huyết áp, hen suyễn, thuốc chống trầm cảm có thể gây mất ngủ như tác dụng phụ.</p>

<h2>Hậu quả của mất ngủ mãn tính</h2>
<ul>
<li>Tăng 48% nguy cơ mắc bệnh tim mạch vành</li>
<li>Tăng nguy cơ tiểu đường type 2 (giảm nhạy cảm insulin)</li>
<li>Suy giảm trí nhớ, khó tập trung, phản xạ chậm</li>
<li>Tăng cortisol → tích mỡ bụng, khó giảm cân</li>
<li>Hệ miễn dịch suy yếu (giảm 70% tế bào NK chỉ sau 1 đêm ngủ ít)</li>
</ul>

<h2>Giải pháp không dùng thuốc (ưu tiên hàng đầu)</h2>
<p><strong>CBT-I (Cognitive Behavioral Therapy for Insomnia)</strong> được WHO và FDA công nhận là phương pháp điều trị mất ngủ hiệu quả nhất về lâu dài — hiệu quả hơn thuốc ngủ và không có tác dụng phụ. Tuy nhiên cần được thực hiện với chuyên gia tâm lý hoặc qua ứng dụng được chứng nhận.</p>
<p><strong>Hạn chế giấc ngủ (Sleep restriction)</strong>: Nghịch lý nhưng hiệu quả — giảm thời gian trên giường xuống bằng đúng thời gian ngủ thực để tăng "áp lực ngủ".</p>
<p><strong>Kiểm soát kích thích (Stimulus control)</strong>: Chỉ dùng giường để ngủ — không xem phim, không làm việc, không ăn trên giường.</p>

<h2>Khi nào cần gặp bác sĩ?</h2>
<p>Nếu mất ngủ kéo dài trên 1 tháng và ảnh hưởng đến công việc, học tập hay quan hệ xã hội, hãy gặp bác sĩ. Không nên tự ý dùng thuốc ngủ không kê đơn vì nguy cơ phụ thuộc và tác dụng phụ.</p>`,
    tags: ['Mất ngủ', 'Giấc ngủ', 'Sức khỏe tâm thần'], readTime: 7, published: true,
  },

  {
    title: 'Đau đầu thường xuyên — Dấu hiệu nào cần đến bác sĩ ngay?',
    category: 'Vấn đề thường gặp', topic: 'Tim mạch', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1502101872923-d48509bff386?w=1200&q=80',
    excerpt: 'Đau đầu là một trong những phàn nàn y tế phổ biến nhất — 90% dân số trải qua ít nhất một lần đau đầu trong đời. Nhưng khi nào thì đau đầu là "báo động đỏ" cần cấp cứu?',
    content: `<p>Phần lớn các cơn đau đầu (khoảng 90%) là "đau đầu nguyên phát" — nghĩa là bản thân đau đầu là bệnh, không phải triệu chứng của bệnh khác. Nhưng 10% còn lại có thể là dấu hiệu của những tình trạng nghiêm trọng cần được chú ý.</p>

<h2>Các loại đau đầu phổ biến</h2>
<p><strong>Đau đầu căng thẳng (Tension headache)</strong> — chiếm 70% ca đau đầu. Cảm giác như bị "siết chặt" quanh đầu, thường 2 bên. Nguyên nhân: căng thẳng, mỏi cơ cổ vai, ngồi sai tư thế, nhìn màn hình quá lâu.</p>
<p><strong>Đau nửa đầu (Migraine)</strong> — chiếm 12% dân số. Đau mạch, thường 1 bên đầu, kèm buồn nôn, nhạy cảm với ánh sáng và âm thanh. Có thể kéo dài 4–72 giờ.</p>
<p><strong>Đau đầu do caffeine</strong> — xuất hiện khi bỏ đột ngột cà phê sau thói quen uống hàng ngày.</p>

<h2>Các "dấu hiệu đỏ" — Đến bệnh viện ngay</h2>
<p>Gọi cấp cứu hoặc đến phòng cấp cứu ngay nếu bạn trải qua:</p>
<ul>
<li><strong>"Đau đầu tồi tệ nhất cuộc đời"</strong> — khởi phát đột ngột và đạt đỉnh trong vài giây đến vài phút (thunderclap headache) — có thể là dấu hiệu xuất huyết não</li>
<li>Đau đầu kèm <strong>sốt cao, cứng cổ, phát ban</strong> — nghi ngờ viêm màng não</li>
<li>Đau đầu sau <strong>chấn thương đầu</strong></li>
<li>Đau đầu kèm <strong>liệt mặt, tay chân, mờ mắt, khó nói</strong> — nghi ngờ đột quỵ</li>
<li>Đau đầu <strong>mới xuất hiện ở người trên 50 tuổi</strong></li>
<li>Đau đầu ngày càng <strong>nặng hơn dù đã dùng thuốc</strong></li>
</ul>

<h2>Kiểm soát đau đầu căng thẳng tại nhà</h2>
<p><strong>Uống đủ nước:</strong> Mất nước là nguyên nhân phổ biến của đau đầu. Uống thêm 2–3 ly nước ngay khi đau đầu.</p>
<p><strong>Xoa bóp và chườm:</strong> Chườm lạnh lên trán (giảm viêm) hoặc chườm ấm lên cổ sau (giảm co cơ).</p>
<p><strong>Nghỉ ngơi trong bóng tối yên tĩnh.</strong></p>
<p><strong>Thuốc:</strong> Paracetamol hoặc Ibuprofen liều thông thường có hiệu quả với đau đầu căng thẳng. <em>Lưu ý: Không dùng thuốc giảm đau quá 15 ngày/tháng — có thể gây "đau đầu do dùng thuốc quá mức".</em></p>

<h2>Phòng ngừa dài hạn</h2>
<p>Giữ nhật ký đau đầu để xác định các yếu tố kích hoạt (trigger): thức ăn (rượu vang đỏ, phô mai, chocolate), căng thẳng, thay đổi thời tiết, chu kỳ kinh nguyệt. Tránh trigger là cách phòng ngừa hiệu quả nhất.</p>`,
    tags: ['Đau đầu', 'Sức khỏe', 'Cấp cứu'], readTime: 6, published: true,
  },

  // ── TIN Y TẾ ──────────────────────────────────────────────────────────────
  {
    title: 'Vitamin D — "Vitamin ánh nắng" và tầm quan trọng toàn diện với sức khỏe',
    category: 'Tin Y tế', topic: 'Sức khỏe', featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80',
    excerpt: 'Nghiên cứu gần đây cho thấy hơn 1 tỷ người trên thế giới thiếu Vitamin D — kể cả những người sống ở vùng nhiệt đới nhiều nắng như Việt Nam. Dưỡng chất này ảnh hưởng đến hơn 2.000 gene trong cơ thể.',
    content: `<p>Vitamin D là một trong số ít vitamin mà cơ thể có thể tự tổng hợp — khi da tiếp xúc với ánh nắng mặt trời (tia UVB). Tuy nhiên, nó cũng hoạt động như một hormone, tham gia vào điều chỉnh hàng nghìn chức năng sinh lý.</p>

<h2>Tại sao người Việt Nam vẫn thiếu Vitamin D?</h2>
<p>Mặc dù Việt Nam có ánh nắng quanh năm, nhiều người vẫn thiếu Vitamin D vì:</p>
<ul>
<li>Dùng kem chống nắng SPF cao hoặc che chắn toàn thân</li>
<li>Làm việc trong văn phòng từ 8–18 giờ</li>
<li>Da sẫm màu (cần nhiều thời gian phơi nắng hơn)</li>
<li>Ô nhiễm không khí chặn tia UVB</li>
<li>Chế độ ăn ít thực phẩm giàu Vitamin D</li>
</ul>

<h2>Vitamin D quan trọng như thế nào?</h2>
<p><strong>Xương và cơ:</strong> Vitamin D giúp hấp thụ Canxi từ ruột. Thiếu Vitamin D → Canxi không được hấp thụ dù ăn đủ → xương yếu, loãng xương, còi xương ở trẻ em.</p>
<p><strong>Hệ miễn dịch:</strong> Các tế bào miễn dịch (lymphocyte T, tế bào B, đại thực bào) đều có receptor Vitamin D. Nghiên cứu liên kết thiếu Vitamin D với tăng nguy cơ nhiễm trùng đường hô hấp.</p>
<p><strong>Sức khỏe tâm thần:</strong> Thụ thể Vitamin D tập trung cao ở vùng não kiểm soát tâm trạng. Thiếu Vitamin D liên quan đến trầm cảm theo mùa và trầm cảm nói chung.</p>
<p><strong>Phòng ngừa một số bệnh:</strong> Nghiên cứu cho thấy mức Vitamin D đầy đủ liên kết với giảm nguy cơ một số loại ung thư, tiểu đường type 2 và bệnh tự miễn.</p>

<h2>Dấu hiệu thiếu Vitamin D</h2>
<ul>
<li>Mệt mỏi và yếu cơ không rõ nguyên nhân</li>
<li>Đau xương và khớp lan tỏa</li>
<li>Hay ốm vặt, hồi phục chậm</li>
<li>Tâm trạng uể oải, dễ trầm cảm</li>
<li>Rụng tóc nhiều hơn bình thường</li>
</ul>

<h2>Nguồn Vitamin D và liều bổ sung</h2>
<p><strong>Ánh nắng:</strong> 15–20 phút/ngày (trước 9 giờ sáng hoặc sau 16 giờ chiều), để lộ tay chân. Không qua kính cửa sổ (kính lọc UVB).</p>
<p><strong>Thực phẩm:</strong> Cá hồi (600–1000 IU/100g), lòng đỏ trứng (40 IU), nấm phơi nắng, sữa tăng cường Vitamin D.</p>
<p><strong>Thực phẩm chức năng:</strong> Liều phổ biến 1000–2000 IU/ngày cho người lớn. Xét nghiệm 25(OH)D máu để biết chính xác mức hiện tại trước khi bổ sung liều cao.</p>`,
    tags: ['Vitamin D', 'Sức khỏe xương', 'Miễn dịch'], readTime: 7, published: true,
  },

  {
    title: 'Tăng huyết áp — Kẻ thù thầm lặng và chiến lược phòng ngừa hiệu quả',
    category: 'Tin Y tế', topic: 'Tim mạch', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    excerpt: 'Tăng huyết áp được gọi là "kẻ giết người thầm lặng" vì không có triệu chứng rõ ràng cho đến khi gây ra biến chứng nghiêm trọng. Hơn 25% người Việt Nam trưởng thành mắc bệnh này.',
    content: `<p>Theo Hội Tim mạch Việt Nam, có đến 26,2% người trưởng thành Việt Nam mắc tăng huyết áp — tương đương khoảng 17 triệu người. Đáng lo ngại hơn, hơn 50% trong số đó không biết mình mắc bệnh.</p>

<h2>Huyết áp bao nhiêu là bình thường?</h2>
<ul>
<li><strong>Bình thường:</strong> Dưới 120/80 mmHg</li>
<li><strong>Tiền tăng huyết áp:</strong> 120–129/dưới 80 mmHg</li>
<li><strong>Tăng huyết áp độ 1:</strong> 130–139/80–89 mmHg</li>
<li><strong>Tăng huyết áp độ 2:</strong> ≥140/≥90 mmHg</li>
<li><strong>Cơn tăng huyết áp cấp cứu:</strong> >180/120 mmHg</li>
</ul>

<h2>Tại sao tăng huyết áp nguy hiểm?</h2>
<p>Áp lực máu cao liên tục làm tổn thương thành mạch máu, buộc tim phải làm việc nhiều hơn để bơm máu. Theo thời gian, điều này dẫn đến:</p>
<ul>
<li>Nhồi máu cơ tim và suy tim</li>
<li>Đột quỵ não (80% đột quỵ liên quan tăng huyết áp)</li>
<li>Suy thận mãn tính</li>
<li>Tổn thương thị lực, mù lòa</li>
<li>Rối loạn cương dương ở nam giới</li>
</ul>

<h2>Các yếu tố nguy cơ</h2>
<p>Không thay đổi được: Tuổi tác (>55 nam, >65 nữ), di truyền, chủng tộc</p>
<p>Thay đổi được: Thừa cân/béo phì, ăn nhiều muối, ít vận động, hút thuốc, uống rượu nhiều, căng thẳng mãn tính, đái tháo đường</p>

<h2>Chiến lược phòng ngừa và kiểm soát</h2>
<p><strong>Giảm muối xuống &lt;5g/ngày</strong> (1 muỗng cà phê). Nhiều người Việt ăn đến 9–10g muối/ngày qua nước mắm, tương, đồ ăn chế biến sẵn. Giảm muối 3g/ngày có thể hạ 2–8 mmHg huyết áp tâm thu.</p>
<p><strong>Chế độ ăn DASH</strong> — giàu rau củ quả, ngũ cốc nguyên hạt, ít chất béo bão hòa. Được chứng minh hạ huyết áp hiệu quả tương đương một số thuốc huyết áp ở mức nhẹ.</p>
<p><strong>Vận động aerobic 150 phút/tuần</strong> — đi bộ nhanh, bơi lội, đạp xe. Mỗi 1kg giảm cân → giảm ~1 mmHg huyết áp.</p>
<p><strong>Đo huyết áp tại nhà thường xuyên</strong> — tốt hơn đo tại phòng khám vì tránh "hội chứng áo choàng trắng". Đo vào buổi sáng trước khi ăn, uống thuốc.</p>`,
    tags: ['Huyết áp', 'Tim mạch', 'Phòng ngừa'], readTime: 7, published: true,
  },

  // ── TIN TUYỂN DỤNG ────────────────────────────────────────────────────────
  {
    title: 'Vinapharma tuyển dụng: Cơ hội nghề nghiệp trong ngành dược phẩm và sức khỏe',
    category: 'Tin Tuyển dụng', topic: 'Khác', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80',
    excerpt: 'Vinapharma đang mở rộng đội ngũ nhằm thực hiện sứ mệnh "Vì một Việt Nam khỏe đẹp". Chúng tôi tìm kiếm những cá nhân đam mê sức khỏe, sáng tạo và muốn tạo ra giá trị thực sự cho cộng đồng.',
    content: `<p>Vinapharma là đơn vị phân phối và tư vấn các sản phẩm chăm sóc sức khỏe chất lượng cao, kết nối người tiêu dùng Việt Nam với các thương hiệu dược phẩm và thực phẩm chức năng uy tín trong nước và quốc tế.</p>

<h2>Tại sao làm việc tại Vinapharma?</h2>
<ul>
<li><strong>Ý nghĩa trong công việc:</strong> Mỗi ngày, bạn đang góp phần cải thiện sức khỏe của hàng nghìn người Việt</li>
<li><strong>Môi trường học hỏi:</strong> Tiếp cận kiến thức y học, dinh dưỡng và chăm sóc sức khỏe từ các chuyên gia</li>
<li><strong>Đội ngũ trẻ, năng động:</strong> Làm việc cùng những người cùng chung đam mê với sức khỏe cộng đồng</li>
<li><strong>Cơ hội phát triển:</strong> Công ty đang trong giai đoạn mở rộng — nhiều cơ hội thăng tiến cho người xuất sắc</li>
</ul>

<h2>Vị trí đang tuyển dụng</h2>
<p><strong>Chuyên viên Tư vấn Sức khỏe</strong><br/>
Tư vấn sản phẩm và giải pháp sức khỏe cho khách hàng; xây dựng và duy trì quan hệ khách hàng lâu dài.<br/>
<em>Yêu cầu:</em> Tốt nghiệp ngành Dược, Y, Dinh dưỡng hoặc có kinh nghiệm liên quan. Kỹ năng giao tiếp tốt.</p>

<p><strong>Chuyên viên Marketing Sức khỏe</strong><br/>
Lên kế hoạch và triển khai các chiến dịch truyền thông sức khỏe trên digital và offline.<br/>
<em>Yêu cầu:</em> Kinh nghiệm marketing 1+ năm. Có kiến thức về sức khỏe là lợi thế lớn.</p>

<p><strong>Nhân viên Kinh doanh</strong><br/>
Phát triển kênh phân phối, tìm kiếm đối tác và khách hàng mới cho các sản phẩm Vinapharma.<br/>
<em>Yêu cầu:</em> Năng động, có khả năng tự tổ chức công việc, yêu thích kinh doanh.</p>

<h2>Chế độ đãi ngộ</h2>
<ul>
<li>Lương cơ bản + hoa hồng/thưởng theo kết quả</li>
<li>Bảo hiểm xã hội, y tế đầy đủ theo quy định</li>
<li>Sản phẩm sức khỏe nội bộ ưu đãi</li>
<li>Đào tạo liên tục về kiến thức sức khỏe và kỹ năng chuyên môn</li>
<li>Team building và hoạt động ngoại khóa thường xuyên</li>
</ul>

<h2>Cách ứng tuyển</h2>
<p>Gửi CV và thư xin việc qua email hoặc liên hệ trực tiếp qua trang Liên hệ của Vinapharma. Chúng tôi trân trọng mọi ứng viên và cam kết phản hồi trong vòng 3–5 ngày làm việc.</p>
<p><em>"Nếu bạn tin rằng sức khỏe là tài sản quý giá nhất — hãy cùng chúng tôi chia sẻ niềm tin đó với cộng đồng Việt Nam."</em></p>`,
    tags: ['Tuyển dụng', 'Vinapharma', 'Nghề nghiệp'], readTime: 4, published: true,
  },

  // ── TRUYỀN THÔNG ──────────────────────────────────────────────────────────
  {
    title: 'Vinapharma và hành trình đồng hành sức khỏe cộng đồng Việt Nam',
    category: 'Truyền thông', topic: 'Khác', featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80',
    excerpt: 'Với sứ mệnh "Vì một Việt Nam khỏe đẹp", Vinapharma không chỉ là đơn vị phân phối sản phẩm — chúng tôi là người bạn đồng hành tin cậy trên hành trình chăm sóc sức khỏe của mỗi gia đình Việt.',
    content: `<p>Trong bối cảnh người Việt Nam ngày càng quan tâm đến sức khỏe và chất lượng cuộc sống, Vinapharma được thành lập với một sứ mệnh rõ ràng: kết nối người tiêu dùng Việt Nam với những sản phẩm chăm sóc sức khỏe chất lượng cao, đáng tin cậy và phù hợp với nhu cầu thực tế.</p>

<h2>Câu chuyện khởi đầu</h2>
<p>Vinapharma ra đời từ nhận thức rằng thị trường thực phẩm chức năng và sản phẩm sức khỏe Việt Nam đang tràn ngập những sản phẩm kém chất lượng, thông tin sai lệch và quảng cáo thiếu trung thực. Chúng tôi chọn một con đường khác: minh bạch về thành phần, trung thực về tác dụng, và luôn đặt lợi ích của người dùng lên hàng đầu.</p>

<h2>Danh mục sản phẩm đa dạng</h2>
<p>Vinapharma hợp tác với các thương hiệu uy tín trong và ngoài nước, bao gồm các thương hiệu đã được kiểm chứng như HB Wellness, No1EU, No1USA, ACTIVLAB, VIN và nhiều thương hiệu khác — mỗi thương hiệu được lựa chọn kỹ lưỡng dựa trên tiêu chí chất lượng, minh bạch về thành phần và hiệu quả được chứng minh.</p>

<h2>Cam kết với cộng đồng</h2>
<p>Ngoài cung cấp sản phẩm, Vinapharma cam kết:</p>
<ul>
<li><strong>Giáo dục sức khỏe:</strong> Chia sẻ kiến thức y học, dinh dưỡng chính xác và khoa học qua các kênh truyền thông</li>
<li><strong>Tư vấn miễn phí:</strong> Đội ngũ chuyên gia sẵn sàng tư vấn và giải đáp thắc mắc về sức khỏe</li>
<li><strong>Hoạt động cộng đồng:</strong> Tham gia các chương trình khám sức khỏe miễn phí, hỗ trợ người có hoàn cảnh khó khăn tiếp cận sản phẩm sức khỏe</li>
</ul>

<h2>Tầm nhìn phía trước</h2>
<p>Vinapharma hướng đến trở thành nền tảng sức khỏe toàn diện số 1 Việt Nam — nơi mỗi người dân có thể tiếp cận thông tin sức khỏe chính xác, sản phẩm chất lượng và dịch vụ tư vấn chuyên nghiệp một cách dễ dàng và tin cậy.</p>
<p>"<em>Sức khỏe không phải là điểm đến — đó là hành trình. Và chúng tôi vinh dự được đồng hành cùng bạn trên hành trình đó.</em>"</p>
<p>— Ban lãnh đạo Vinapharma</p>`,
    tags: ['Vinapharma', 'Sứ mệnh', 'Cộng đồng'], readTime: 5, published: true,
  },

];

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  const admin = await User.findOne({ role: 'admin' });
  if (!admin) { console.error('No admin user found'); process.exit(1); }
  console.log('Author:', admin.email || admin.name);

  let created = 0, skipped = 0;
  for (const p of posts) {
    const exists = await Post.findOne({ title: p.title });
    if (exists) { console.log('  SKIP:', p.title); skipped++; continue; }
    await Post.create({ ...p, author: admin._id, publishedAt: new Date() });
    console.log('  OK:', p.title);
    created++;
  }

  console.log(`\nDone: ${created} created, ${skipped} skipped`);
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
