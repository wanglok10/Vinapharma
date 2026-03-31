// Seed 5 bài Góc Sức Khỏe — node seed-goc-suc-khoe.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');

const posts = [

  // ── BÀI 1: SỨC KHỎE TIM MẠCH ──────────────────────────────────────────────
  {
    title: '7 thói quen hàng ngày giúp bảo vệ tim mạch mà bác sĩ tim khuyên làm ngay',
    category: 'Góc sức khỏe', topic: 'Sức khỏe', featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&q=80',
    excerpt: 'Bệnh tim mạch là nguyên nhân tử vong hàng đầu tại Việt Nam và toàn thế giới. Nhưng nghiên cứu chỉ ra rằng hơn 80% ca tử vong do tim mạch có thể phòng ngừa được chỉ bằng thay đổi lối sống. 7 thói quen đơn giản dưới đây nếu thực hiện đều đặn có thể bảo vệ trái tim bạn suốt đời.',
    readTime: 7, published: true,
    tags: ['Tim mạch', 'Huyết áp', 'Lối sống', 'Phòng bệnh'],
    content: `<p>Theo Tổ chức Y tế Thế giới (WHO), bệnh tim mạch cướp đi hơn <strong>17,9 triệu sinh mạng</strong> mỗi năm — chiếm 32% tổng số ca tử vong toàn cầu. Tại Việt Nam, con số này lên đến <strong>200.000 người/năm</strong>. Điều đáng lo nhưng cũng đáng mừng là: phần lớn các bệnh tim mạch hoàn toàn có thể phòng ngừa được.</p>

<img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900&q=80" alt="Sức khỏe tim mạch" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>1. Vận động ít nhất 30 phút mỗi ngày</h2>
<p>Tập thể dục aerobic (đi bộ nhanh, đạp xe, bơi lội, khiêu vũ) ít nhất <strong>150 phút/tuần</strong> giúp giảm 35% nguy cơ mắc bệnh tim mạch. Không cần phải tập gym cường độ cao — chỉ cần đi bộ 30 phút sau bữa tối mỗi ngày cũng tạo ra sự khác biệt đáng kể.</p>
<p>Cơ chế: Vận động đều đặn làm tăng "cholesterol tốt" HDL, giảm cholesterol xấu LDL và triglyceride, đồng thời giảm huyết áp và cải thiện độ nhạy insulin.</p>

<h2>2. Ăn theo mô hình Địa Trung Hải</h2>
<p>Chế độ ăn Địa Trung Hải được hơn 50 năm nghiên cứu xác nhận là tốt nhất cho tim mạch. Nguyên tắc cốt lõi:</p>
<ul>
<li>Nhiều rau củ quả, ngũ cốc nguyên hạt, các loại hạt và đậu</li>
<li>Dầu ôliu là nguồn chất béo chính</li>
<li>Cá béo (cá hồi, cá thu, cá mòi) 2–3 lần/tuần</li>
<li>Hạn chế thịt đỏ, đường và thực phẩm chế biến sẵn</li>
</ul>

<img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80" alt="Chế độ ăn lành mạnh cho tim" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>3. Kiểm soát muối trong bữa ăn</h2>
<p>WHO khuyến nghị không quá <strong>5g muối/ngày</strong> (khoảng 1 thìa cà phê). Người Việt Nam trung bình tiêu thụ 9,4g muối/ngày — gần gấp đôi mức an toàn. Muối dư thừa làm tăng huyết áp, tăng nguy cơ đột quỵ và suy tim.</p>
<p><strong>Mẹo thực tế:</strong> Thay nước mắm/muối bằng thảo mộc và gia vị tự nhiên (tiêu, tỏi, gừng, hành), hạn chế mì tôm, đồ hộp và thức ăn nhanh vốn chứa rất nhiều natri ẩn.</p>

<h2>4. Ngủ đủ 7–9 tiếng mỗi đêm</h2>
<p>Nghiên cứu trên 400.000 người của Đại học Birmingham (Anh) cho thấy ngủ dưới 6 tiếng/đêm tăng nguy cơ tử vong do tim mạch <strong>48%</strong>. Trong khi ngủ, tim được nghỉ ngơi, huyết áp giảm xuống mức thấp nhất trong ngày. Thiếu ngủ mạn tính làm tăng viêm, tăng cortisol và rối loạn nhịp tim.</p>

<h2>5. Không hút thuốc lá — và tránh khói thuốc thụ động</h2>
<p>Hút thuốc lá là nguyên nhân có thể phòng ngừa lớn nhất gây bệnh tim mạch. Các chất trong khói thuốc làm tổn thương nội mạc mạch máu, thúc đẩy hình thành mảng xơ vữa và tăng khả năng đông máu. <strong>Chỉ sau 1 năm bỏ thuốc</strong>, nguy cơ bệnh mạch vành giảm 50%.</p>

<h2>6. Quản lý stress hiệu quả</h2>
<p>Stress mạn tính làm tăng cortisol và adrenaline — hai hormone khi dư thừa dài hạn làm tăng huyết áp, tăng nhịp tim và gây viêm mạch máu. Thiền định, yoga, hít thở sâu chỉ 10–15 phút/ngày đã được chứng minh giảm huyết áp tâm thu trung bình 5 mmHg.</p>

<h2>7. Kiểm tra sức khỏe định kỳ — đặc biệt 3 chỉ số này</h2>
<p>Nhiều bệnh tim mạch nguy hiểm như tăng huyết áp, rối loạn mỡ máu hoàn toàn <strong>không có triệu chứng</strong> cho đến khi xảy ra biến cố. Vì vậy, cần kiểm tra định kỳ:</p>
<ul>
<li><strong>Huyết áp:</strong> Mục tiêu dưới 120/80 mmHg. Đo ít nhất mỗi 6 tháng.</li>
<li><strong>Mỡ máu (lipid profile):</strong> LDL dưới 100 mg/dL. Xét nghiệm mỗi 1–2 năm từ sau 35 tuổi.</li>
<li><strong>Đường huyết lúc đói:</strong> Dưới 100 mg/dL. Tiểu đường là yếu tố nguy cơ tim mạch độc lập.</li>
</ul>

<blockquote style="border-left:4px solid #cc1f1f;padding:1rem 1.5rem;background:#fff5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Trái tim không cần bạn yêu thương nó một cách đặc biệt — chỉ cần đừng bỏ mặc nó. Những thói quen nhỏ mỗi ngày tích lũy thành sức khỏe tim mạch cả đời."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#cc1f1f">— PGS.TS Nguyễn Lân Hiếu, Giám đốc Bệnh viện Đại học Y Hà Nội</p>
</blockquote>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• WHO: "Cardiovascular diseases — Key Facts" (2023)<br/>
• American Heart Association: "Life's Essential 8" (2022)<br/>
• New England Journal of Medicine: "Mediterranean Diet and Cardiovascular Disease" (PREDIMED Study)<br/>
• Hội Tim mạch học Việt Nam: Hướng dẫn chẩn đoán và điều trị tăng huyết áp (2022)<br/>
• Bộ Y tế Việt Nam: Chiến lược quốc gia phòng chống bệnh tim mạch 2025</p>`
  },

  // ── BÀI 2: GIẤC NGỦ ───────────────────────────────────────────────────────
  {
    title: 'Khoa học về giấc ngủ: Tại sao ngủ đủ giấc là "thuốc bổ" tốt nhất bạn không phải mua',
    category: 'Góc sức khỏe', topic: 'Lối sống', featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&q=80',
    excerpt: 'Ngủ đủ giấc không phải là "lãng phí thời gian" — đây là giai đoạn cơ thể thực hiện hàng loạt công việc sửa chữa, thanh lọc và tái tạo quan trọng nhất. Thiếu ngủ mạn tính liên quan đến béo phì, tiểu đường, bệnh tim, ung thư và Alzheimer. Giải mã khoa học để bạn ngủ ngon và khỏe hơn.',
    readTime: 8, published: true,
    tags: ['Giấc ngủ', 'Sức khỏe não bộ', 'Lối sống', 'Phục hồi'],
    content: `<p>Một phần ba cuộc đời con người dành cho giấc ngủ. Nhưng trong xã hội hiện đại, ngủ đủ giấc đang trở thành xa xỉ phẩm. Tại Việt Nam, một khảo sát năm 2024 cho thấy <strong>43% người trưởng thành ngủ dưới 6 tiếng/đêm</strong> — và phần lớn trong số đó không biết rằng họ đang làm hại bản thân một cách âm thầm.</p>

<img src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=900&q=80" alt="Khoa học giấc ngủ" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Điều gì xảy ra trong cơ thể khi bạn ngủ?</h2>
<p>Giấc ngủ không phải là trạng thái "tắt máy" — đây là giai đoạn hoạt động sôi nổi nhất của nhiều hệ thống trong cơ thể:</p>

<h3>🧠 Não bộ "dọn rác"</h3>
<p>Trong giấc ngủ sâu, hệ <strong>glymphatic</strong> — hệ thống thoát nước của não — hoạt động mạnh nhất. Nó bơm dịch não tủy để rửa sạch các chất độc tích tụ trong ngày, bao gồm <strong>beta-amyloid và tau</strong> — hai protein liên quan đến Alzheimer. Thiếu ngủ dẫn đến tích tụ các chất thải này theo thời gian.</p>

<h3>💪 Cơ bắp và mô tế bào phục hồi</h3>
<p>Hormone tăng trưởng (GH) được tiết ra chủ yếu trong giai đoạn ngủ sâu (slow-wave sleep). Hormone này kích thích sửa chữa mô cơ, tổng hợp protein và phân giải mỡ. Đó là lý do vận động viên và người tập thể hình cần ngủ đủ giấc để đạt kết quả tốt nhất.</p>

<h3>🛡️ Hệ miễn dịch củng cố</h3>
<p>Các tế bào lympho T — "lính" của hệ miễn dịch — tăng cường khả năng tấn công mầm bệnh trong khi ngủ. Một thí nghiệm kinh điển cho thấy người ngủ dưới 6 tiếng có nguy cơ bị cảm lạnh sau khi tiếp xúc rhinovirus <strong>cao gấp 4,2 lần</strong> so với người ngủ đủ 7+ tiếng.</p>

<img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80" alt="Phục hồi và giấc ngủ sâu" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Hậu quả của thiếu ngủ mạn tính</h2>
<p>Thiếu ngủ không chỉ gây mệt mỏi — đây là yếu tố nguy cơ độc lập của nhiều bệnh nghiêm trọng:</p>
<ul>
<li><strong>Tăng 48% nguy cơ bệnh tim</strong> (ngủ dưới 6h/đêm)</li>
<li><strong>Tăng 36% nguy cơ tiểu đường type 2</strong> do rối loạn insulin</li>
<li><strong>Tăng cân, béo phì</strong>: Thiếu ngủ tăng ghrelin (hormone đói) và giảm leptin (hormone no)</li>
<li><strong>Suy giảm nhận thức</strong>: Sau 17–19 giờ không ngủ, hiệu suất tương đương say rượu 0.05% cồn trong máu</li>
<li><strong>Trầm cảm và lo âu</strong>: Rối loạn giấc ngủ và sức khỏe tâm thần có mối liên hệ hai chiều</li>
</ul>

<h2>Bạn cần ngủ bao nhiêu tiếng?</h2>
<p>Nhu cầu ngủ thay đổi theo độ tuổi theo khuyến nghị của National Sleep Foundation:</p>
<ul>
<li><strong>Trẻ sơ sinh (0–3 tháng):</strong> 14–17 tiếng</li>
<li><strong>Trẻ em (6–13 tuổi):</strong> 9–11 tiếng</li>
<li><strong>Thanh thiếu niên (14–17 tuổi):</strong> 8–10 tiếng</li>
<li><strong>Người trưởng thành (18–64 tuổi):</strong> 7–9 tiếng</li>
<li><strong>Người cao tuổi (65+):</strong> 7–8 tiếng</li>
</ul>

<h2>8 nguyên tắc vệ sinh giấc ngủ để ngủ ngon hơn ngay tối nay</h2>
<ol>
<li><strong>Giữ giờ ngủ và thức cố định</strong> — kể cả cuối tuần. Đồng hồ sinh học cần tính nhất quán.</li>
<li><strong>Phòng ngủ mát, tối và yên tĩnh</strong> — nhiệt độ lý tưởng là 18–20°C.</li>
<li><strong>Tắt màn hình xanh 1 tiếng trước khi ngủ</strong> — ánh sáng xanh ức chế melatonin.</li>
<li><strong>Không cà phê sau 14:00</strong> — caffeine có thời gian bán hủy 5–6 giờ trong cơ thể.</li>
<li><strong>Tắm nước ấm 1–2 tiếng trước khi ngủ</strong> — giảm thân nhiệt sau tắm giúp buồn ngủ nhanh hơn.</li>
<li><strong>Không ăn quá no bữa tối</strong> — tiêu hóa tích cực sẽ làm gián đoạn giấc ngủ sâu.</li>
<li><strong>Giới hạn ngủ trưa dưới 20 phút</strong> — tránh ngủ trưa sau 15:00.</li>
<li><strong>Tập thể dục đều đặn</strong> — nhưng không tập nặng trong 2–3 tiếng trước khi ngủ.</li>
</ol>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Matthew Walker: "Why We Sleep" — Scribner (2017)<br/>
• National Sleep Foundation: Sleep Duration Recommendations (2023)<br/>
• Xie L. et al.: "Sleep drives metabolite clearance from the adult brain" — Science (2013)<br/>
• Prather A.A. et al.: "Sleep and susceptibility to the common cold" — Sleep (2015)<br/>
• Viện Sức khỏe Tâm thần Quốc gia Việt Nam: Khảo sát giấc ngủ người Việt 2024</p>`
  },

  // ── BÀI 3: HỆ MIỄN DỊCH ──────────────────────────────────────────────────
  {
    title: 'Tăng cường hệ miễn dịch tự nhiên: 10 cách hiệu quả nhất được khoa học chứng minh',
    category: 'Góc sức khỏe', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1547496502-affa22d38842?w=1200&q=80',
    excerpt: 'Hệ miễn dịch là "quân đội" bảo vệ cơ thể 24/7. Không có viên thuốc thần kỳ nào có thể thay thế các thói quen lành mạnh trong việc củng cố "hàng rào" này. Khám phá 10 cách được khoa học chứng minh giúp nâng cao sức đề kháng một cách tự nhiên và bền vững.',
    readTime: 7, published: true,
    tags: ['Miễn dịch', 'Sức đề kháng', 'Dinh dưỡng', 'Lối sống'],
    content: `<p>Hệ miễn dịch là mạng lưới phức tạp gồm hàng nghìn tỷ tế bào, mô, cơ quan và protein làm việc phối hợp để nhận diện và tiêu diệt mầm bệnh — từ vi khuẩn, virus đến tế bào ung thư. Không có "siêu thực phẩm" hay "thần dược" nào có thể tức thì tăng cường toàn bộ hệ miễn dịch. Nhưng lối sống lành mạnh là nền tảng không thể thiếu.</p>

<img src="https://images.unsplash.com/photo-1547496502-affa22d38842?w=900&q=80" alt="Tăng cường miễn dịch tự nhiên" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>1. Ngủ đủ giấc — nền tảng của miễn dịch</h2>
<p>Trong giấc ngủ, cơ thể sản xuất <strong>cytokines</strong> — các protein truyền tin giúp điều phối phản ứng miễn dịch. Thiếu ngủ làm giảm sản xuất cytokines và tế bào T, khiến cơ thể dễ bị nhiễm bệnh hơn. Ngủ đủ 7–9 tiếng/đêm là bước đơn giản nhất nhưng quan trọng nhất.</p>

<h2>2. Bổ sung đủ Vitamin C mỗi ngày</h2>
<p>Vitamin C là vi chất được nghiên cứu nhiều nhất về miễn dịch. Nó kích thích sản xuất bạch cầu, là chất chống oxy hóa bảo vệ tế bào miễn dịch khỏi tổn thương. Nhu cầu: <strong>75–90 mg/ngày</strong> cho người trưởng thành (tăng lên 200 mg/ngày khi ốm). Nguồn tự nhiên: ổi, kiwi, ớt chuông đỏ, bưởi, dâu tây.</p>

<h2>3. Đảm bảo lượng Vitamin D</h2>
<p>Hơn <strong>1 tỷ người</strong> trên thế giới thiếu vitamin D — và đây là yếu tố nguy cơ nghiêm trọng với bệnh nhiễm trùng hô hấp, bệnh tự miễn và ung thư. Vitamin D hoạt hóa tế bào T và macrophage — hai "chiến binh" chính của hệ miễn dịch. Tắm nắng 15–20 phút/ngày (trước 9h hoặc sau 16h) giúp cơ thể tự tổng hợp.</p>

<img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80" alt="Thực phẩm tăng cường miễn dịch" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>4. Ăn nhiều rau củ quả đa dạng màu sắc</h2>
<p>Mỗi màu sắc trong rau củ đại diện cho một nhóm phytochemicals khác nhau với tác dụng chống viêm và hỗ trợ miễn dịch riêng. Nguyên tắc "ăn cầu vồng": đỏ (cà chua, dưa hấu), cam (cà rốt, bí đỏ), vàng (nghệ, tiêu vàng), xanh lá (bông cải, rau cải), tím (nho, việt quất).</p>

<h2>5. Bổ sung Kẽm (Zinc)</h2>
<p>Kẽm cần thiết cho sự phát triển và hoạt động của tế bào miễn dịch. Thiếu kẽm làm giảm số lượng tế bào T và NK (Natural Killer) — "đặc nhiệm" diệt virus. Nguồn giàu kẽm: hàu, thịt bò, hạt bí, đậu lăng, hạt điều. Nhu cầu: 8–11 mg/ngày.</p>

<h2>6. Chăm sóc sức khỏe đường ruột</h2>
<p><strong>70% hệ miễn dịch nằm trong đường ruột</strong>. Hệ vi sinh đường ruột (microbiome) tương tác trực tiếp với tế bào miễn dịch niêm mạc, giúp "huấn luyện" chúng phân biệt mầm bệnh và thức ăn. Ăn nhiều chất xơ (prebiotics) và thực phẩm lên men (sữa chua, kefir, dưa cải) nuôi dưỡng vi khuẩn có lợi.</p>

<h2>7. Tập thể dục vừa phải và đều đặn</h2>
<p>Vận động vừa phải giúp tăng tuần hoàn bạch cầu và kháng thể, giảm viêm mạn tính. Tuy nhiên, tập quá sức (overtraining) có tác dụng ngược: ức chế miễn dịch tạm thời. Mục tiêu: 150 phút vận động cường độ trung bình/tuần.</p>

<h2>8. Giảm stress mạn tính</h2>
<p>Cortisol — hormone stress — ức chế hoạt động của tế bào miễn dịch khi duy trì ở mức cao dài hạn. Người bị stress mạn tính dễ mắc cảm cúm, nhiễm trùng hơn và hồi phục chậm hơn. Thiền, yoga, đi bộ thiên nhiên là những cách đơn giản để hạ cortisol.</p>

<h2>9. Không hút thuốc, hạn chế rượu bia</h2>
<p>Khói thuốc lá phá hủy màng nhầy đường hô hấp — hàng rào vật lý đầu tiên chống mầm bệnh. Rượu bia liều cao ức chế sản xuất bạch cầu và làm tổn thương hệ vi sinh đường ruột. Ngay cả việc uống rượu "vừa phải" đã có tác động tiêu cực đo lường được lên miễn dịch.</p>

<h2>10. Uống đủ nước — 2 lít mỗi ngày</h2>
<p>Nước cần thiết để vận chuyển lympho — dịch mang tế bào miễn dịch đi khắp cơ thể. Mất nước làm giảm sản xuất nước bọt và chất nhầy — hai "bẫy" đầu tiên bắt vi khuẩn và virus trước khi chúng xâm nhập sâu hơn.</p>

<blockquote style="border-left:4px solid #cc1f1f;padding:1rem 1.5rem;background:#fff5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Không có viên thuốc nào có thể thay thế giấc ngủ ngon, bữa ăn cân bằng và tập thể dục đều đặn trong việc bảo vệ hệ miễn dịch."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#cc1f1f">— GS. Sheldon Cohen, Đại học Carnegie Mellon, chuyên gia hàng đầu về tâm lý miễn dịch học</p>
</blockquote>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Harvard Medical School: "How to boost your immune system" (2023)<br/>
• Gombart A.F. et al.: "A review of micronutrients and the immune system" — Nutrients (2020)<br/>
• WHO: "Diet, Nutrition and the Prevention of Chronic Diseases" (2022)<br/>
• Viện Dinh dưỡng Quốc gia Việt Nam: Khuyến nghị dinh dưỡng 2022<br/>
• Báo Sức khỏe & Đời sống: "Tăng sức đề kháng đúng cách" (2024)</p>`
  },

  // ── BÀI 4: STRESS ─────────────────────────────────────────────────────────
  {
    title: 'Stress không phải kẻ thù: Hiểu đúng và kiểm soát stress để sống khỏe hơn',
    category: 'Góc sức khỏe', topic: 'Lối sống', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80',
    excerpt: 'Stress không hoàn toàn xấu — áp lực vừa phải giúp bạn tập trung và hoàn thành mục tiêu. Vấn đề là stress mạn tính không được giải phóng. Nghiên cứu cho thấy stress kéo dài ảnh hưởng đến gần 80% các bệnh thường gặp. Bài viết này giúp bạn hiểu đúng và có công cụ thực tế để kiểm soát.',
    readTime: 7, published: true,
    tags: ['Stress', 'Sức khỏe tâm thần', 'Lối sống', 'Thư giãn'],
    content: `<p>Theo nghiên cứu của Viện Y tế Quốc gia Mỹ (NIH), stress mạn tính có liên quan đến <strong>75–90% tất cả các bệnh</strong> mà người ta đến gặp bác sĩ — từ đau đầu, mất ngủ, tiêu hóa, đến bệnh tim mạch và ung thư. Tại Việt Nam, một khảo sát năm 2024 cho thấy <strong>58% người đi làm</strong> cảm thấy bị stress ở mức độ cao hoặc rất cao.</p>

<img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900&q=80" alt="Stress và sức khỏe tinh thần" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Stress tốt vs Stress xấu — Ranh giới quan trọng</h2>
<p><strong>Eustress (stress tích cực):</strong> Khi bạn chuẩn bị thuyết trình, chạy đua deadline, hay thi đấu thể thao — cơ thể tiết adrenaline và cortisol giúp bạn tập trung, tăng cường trí nhớ ngắn hạn và cơ bắp hoạt động hiệu quả hơn. Stress ngắn hạn này là cơ chế tiến hóa giúp con người sống sót và đạt thành tích cao.</p>
<p><strong>Distress (stress tiêu cực):</strong> Khi stress kéo dài mà không có thời gian phục hồi — áp lực công việc liên tục, xung đột gia đình, lo âu tài chính — mức cortisol duy trì cao dẫn đến chuỗi phản ứng có hại cho cơ thể.</p>

<h2>Stress mạn tính tàn phá cơ thể như thế nào?</h2>
<ul>
<li><strong>Não bộ:</strong> Cortisol cao mạn tính thu nhỏ vùng hippocampus (trí nhớ) và tiền trán (ra quyết định), đồng thời phì đại amygdala (cảm xúc lo sợ) — giải thích vì sao người stress lâu dài hay quên, khó tập trung và dễ nổi nóng.</li>
<li><strong>Hệ miễn dịch:</strong> Ức chế sản xuất bạch cầu, làm chậm lành vết thương, tăng nguy cơ nhiễm trùng.</li>
<li><strong>Tim mạch:</strong> Tăng nhịp tim và huyết áp mạn tính, tăng nguy cơ nhồi máu cơ tim.</li>
<li><strong>Tiêu hóa:</strong> Gây hội chứng ruột kích thích (IBS), loét dạ dày, táo bón/tiêu chảy xen kẽ.</li>
<li><strong>Nội tiết:</strong> Rối loạn chu kỳ kinh nguyệt, giảm ham muốn tình dục, tăng cân vùng bụng.</li>
</ul>

<img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80" alt="Thư giãn và kiểm soát stress" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>8 công cụ kiểm soát stress được khoa học chứng minh</h2>

<h3>1. Kỹ thuật thở 4-7-8</h3>
<p>Hít vào 4 giây, nín thở 7 giây, thở ra 8 giây. Thực hành 3–4 chu kỳ kích hoạt hệ thần kinh phó giao cảm (nghỉ ngơi-tiêu hóa), giảm nhịp tim và hạ cortisol trong vòng 5 phút. Phương pháp của GS. Andrew Weil — Đại học Arizona.</p>

<h3>2. Thiền chánh niệm (Mindfulness) 10 phút/ngày</h3>
<p>Chương trình MBSR (Mindfulness-Based Stress Reduction) của Đại học Massachusetts đã được nghiên cứu trên 20.000 bệnh nhân, chứng minh giảm lo âu 38%, giảm trầm cảm 30% sau 8 tuần thực hành.</p>

<h3>3. Vận động thể chất — "thuốc chống stress" rẻ nhất</h3>
<p>30 phút đi bộ nhanh tiêu thụ hết adrenaline và cortisol tích tụ trong ngày, đồng thời tiết endorphin — "hormone hạnh phúc" tự nhiên. Hiệu quả tương đương thuốc chống lo âu liều nhẹ trong nhiều nghiên cứu so sánh.</p>

<h3>4. Viết nhật ký cảm xúc (Expressive Writing)</h3>
<p>Dành 15–20 phút/ngày viết ra những lo lắng, suy nghĩ tiêu cực giúp não "xử lý" và giải phóng cảm xúc thay vì để chúng tích tụ. Nghiên cứu của GS. James Pennebaker cho thấy giảm đau đớn thể chất, cải thiện miễn dịch và sức khỏe tâm thần rõ rệt.</p>

<h3>5. Kết nối xã hội — "liều thuốc" bị đánh giá thấp</h3>
<p>Oxytocin — hormone kết nối xã hội — là chất đối kháng trực tiếp với cortisol. Dành thời gian với người thân, bạn bè, hoặc thú cưng giúp giảm stress nhanh chóng và hiệu quả.</p>

<h3>6. Giới hạn tin tức và mạng xã hội</h3>
<p>Các thuật toán mạng xã hội thiết kế để thu hút sự chú ý bằng nội dung gây lo âu. Đặt giới hạn thời gian sử dụng (screen time) dưới 2 tiếng/ngày và không xem tin tức/mạng xã hội trong 1 tiếng đầu và cuối ngày.</p>

<h3>7. Tắm nước ấm hoặc ngâm chân tối</h3>
<p>Nhiệt độ ấm làm giãn cơ, giảm nhịp tim và kích thích tiết melatonin. Tắm nước ấm 20 phút trước khi ngủ giảm thời gian đi vào giấc ngủ trung bình 10 phút và cải thiện chất lượng giấc ngủ sâu.</p>

<h3>8. Học cách nói "không"</h3>
<p>Quá tải công việc là nguyên nhân stress số 1 tại nơi làm việc. Xác định ưu tiên rõ ràng, học cách từ chối lịch sự các yêu cầu không phù hợp với khả năng hiện tại là kỹ năng sống thiết yếu.</p>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• American Psychological Association: "Stress in America" Report (2024)<br/>
• Kabat-Zinn J.: "Full Catastrophe Living" — MBSR Program, UMass Medical School<br/>
• Pennebaker J.W.: "Opening Up: The Healing Power of Expressing Emotions" (1997)<br/>
• Weil A.: "Breathing: The Master Key to Self-Healing" (2022)<br/>
• Viện Sức khỏe Tâm thần Quốc gia Việt Nam: Báo cáo sức khỏe tâm thần 2024<br/>
• VnExpress Sức Khỏe: "Người Việt và áp lực stress thời hiện đại" (2024)</p>`
  },

  // ── BÀI 5: SỨC KHỎE ĐƯỜNG RUỘT ───────────────────────────────────────────
  {
    title: 'Đường ruột — "bộ não thứ hai": Hiểu về microbiome để cải thiện toàn diện sức khỏe',
    category: 'Góc sức khỏe', topic: 'Sức khỏe', featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&q=80',
    excerpt: 'Hàng nghìn tỷ vi khuẩn sống trong đường ruột bạn không chỉ giúp tiêu hóa — chúng điều tiết hệ miễn dịch, sản xuất vitamin, ảnh hưởng đến tâm trạng và thậm chí hành vi. Khoa học về microbiome đang cách mạng hóa cách chúng ta hiểu về sức khỏe toàn thân.',
    readTime: 8, published: true,
    tags: ['Đường ruột', 'Microbiome', 'Tiêu hóa', 'Probiotics'],
    content: `<p>Trong cơ thể bạn có hơn <strong>38 nghìn tỷ vi khuẩn</strong> — nhiều hơn cả số tế bào người. Phần lớn trong số đó sống trong đại tràng, tạo thành một hệ sinh thái phức tạp gọi là <strong>microbiome đường ruột</strong>. Và trong thập kỷ qua, các nhà khoa học đã phát hiện ra rằng hệ sinh thái này ảnh hưởng đến gần như mọi khía cạnh sức khỏe — từ miễn dịch, tâm trạng đến nguy cơ ung thư.</p>

<img src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=900&q=80" alt="Sức khỏe đường ruột và microbiome" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Microbiome làm gì trong cơ thể?</h2>
<p>Vi khuẩn đường ruột thực hiện hàng trăm chức năng thiết yếu:</p>
<ul>
<li><strong>Tiêu hóa chất xơ:</strong> Lên men chất xơ thực phẩm thành axit béo chuỗi ngắn (SCFA) — đặc biệt là butyrate, nguồn năng lượng chính của tế bào niêm mạc đại tràng và có tác dụng chống viêm mạnh.</li>
<li><strong>Tổng hợp vitamin:</strong> Sản xuất vitamin K2, B12, B2, folate và biotin.</li>
<li><strong>Điều tiết miễn dịch:</strong> 70% mô lympho miễn dịch nằm dọc theo đường tiêu hóa. Vi khuẩn "dạy" hệ miễn dịch phân biệt bạn-thù.</li>
<li><strong>Bảo vệ niêm mạc ruột:</strong> Tạo lớp màng bảo vệ ngăn vi khuẩn có hại và độc tố xâm nhập vào máu.</li>
<li><strong>Sản xuất neurotransmitters:</strong> Khoảng <strong>90% serotonin</strong> — hormone điều tiết tâm trạng — được sản xuất tại đường ruột, không phải não.</li>
</ul>

<h2>Trục ruột-não (Gut-Brain Axis): Kết nối bí ẩn</h2>
<p>Đường ruột được kết nối với não qua <strong>dây thần kinh phế vị (vagus nerve)</strong> — đường truyền thông hai chiều quan trọng nhất giữa hai "bộ não". Đây là lý do bạn cảm thấy "bướm bay trong bụng" khi lo lắng, hoặc cảm thấy đói khi buồn.</p>
<p>Nghiên cứu trên chuột tại Viện Salk (Mỹ) cho thấy khi cấy vi khuẩn đường ruột từ chuột lo âu sang chuột bình thường, nhóm chuột nhận cấy bắt đầu có biểu hiện lo âu. Nghiên cứu trên người cũng đang xác nhận mối liên hệ giữa rối loạn microbiome và trầm cảm, lo âu, thậm chí tự kỷ.</p>

<img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80" alt="Thực phẩm tốt cho đường ruột" style="max-width:100%;border-radius:0.75rem;margin:1.5rem 0"/>

<h2>Dấu hiệu microbiome đang mất cân bằng (Dysbiosis)</h2>
<ul>
<li>Đầy hơi, chướng bụng thường xuyên sau bữa ăn</li>
<li>Táo bón hoặc tiêu chảy kéo dài</li>
<li>Dị ứng hoặc nhạy cảm thức ăn tăng đột ngột</li>
<li>Mệt mỏi mạn tính dù ngủ đủ giấc</li>
<li>Da nổi mẩn, eczema, mụn viêm không rõ nguyên nhân</li>
<li>Tâm trạng thất thường, lo âu hoặc trầm cảm nhẹ</li>
<li>Thèm ngọt và tinh bột quá mức (vi khuẩn có hại "yêu cầu" nguồn ăn)</li>
</ul>

<h2>Nuôi dưỡng microbiome: 7 nguyên tắc vàng</h2>

<h3>1. Ăn đa dạng — càng nhiều loại thực vật càng tốt</h3>
<p>Dự án American Gut Project phân tích microbiome 10.000 người và phát hiện: những người ăn <strong>30+ loại thực vật khác nhau mỗi tuần</strong> có microbiome đa dạng nhất và khỏe mạnh nhất. Đếm số loại rau, củ, quả, hạt và đậu bạn ăn trong 7 ngày — mục tiêu là 30.</p>

<h3>2. Ưu tiên chất xơ prebiotics</h3>
<p>Prebiotics là "thức ăn" của vi khuẩn có lợi. Nguồn giàu prebiotics: tỏi, hành, tỏi tây, chuối (hơi xanh), yến mạch, táo (cả vỏ), măng tây, actisô.</p>

<h3>3. Thêm thực phẩm lên men vào bữa ăn hàng ngày</h3>
<p>Thực phẩm lên men chứa vi khuẩn sống có lợi (probiotics): sữa chua (plain, không đường), kefir, kimchi, dưa cải muối, miso, tempeh. Một nghiên cứu của Đại học Stanford 2021 cho thấy ăn thực phẩm lên men trong 10 tuần tăng đáng kể độ đa dạng microbiome và giảm 19 chất đánh dấu viêm.</p>

<h3>4. Hạn chế đường và thực phẩm siêu chế biến</h3>
<p>Đường tinh luyện và thực phẩm ultra-processed (mì gói, bánh kẹo, đồ ăn nhanh) nuôi dưỡng vi khuẩn có hại và nấm Candida, đồng thời làm mòn lớp nhầy bảo vệ niêm mạc ruột.</p>

<h3>5. Không dùng kháng sinh tùy tiện</h3>
<p>Một đợt kháng sinh có thể tiêu diệt <strong>1/3 số loài vi khuẩn</strong> đường ruột, và phục hồi hoàn toàn có thể mất 6–12 tháng. Chỉ dùng kháng sinh khi có chỉ định của bác sĩ, và luôn bổ sung probiotics trong và sau đợt điều trị.</p>

<h3>6. Quản lý stress — ruột "cảm nhận" căng thẳng</h3>
<p>Stress kích hoạt phản ứng "chiến hay chạy", làm giảm lưu lượng máu đến ruột và ảnh hưởng đến nhu động ruột. Yoga, thiền và hít thở sâu kích hoạt trục ruột-não theo hướng tích cực.</p>

<h3>7. Vận động thể chất</h3>
<p>Tập thể dục đều đặn làm tăng độ đa dạng microbiome độc lập với chế độ ăn. Vận động kích thích sản xuất butyrate — chất bảo vệ niêm mạc đại tràng và giảm nguy cơ ung thư ruột kết.</p>

<blockquote style="border-left:4px solid #cc1f1f;padding:1rem 1.5rem;background:#fff5f5;border-radius:0 .5rem .5rem 0;margin:1.5rem 0">
<p style="margin:0;font-style:italic;color:#555">"Chúng ta đang bắt đầu hiểu rằng ruột không chỉ là ống tiêu hóa — nó là cơ quan nội tiết, cơ quan miễn dịch, và theo một nghĩa nào đó, là bộ não thứ hai của chúng ta."</p>
<p style="margin:.5rem 0 0;font-weight:700;color:#cc1f1f">— GS. Eran Segal, Viện Khoa học Weizmann, Israel</p>
</blockquote>

<hr style="margin:2rem 0;border:none;border-top:1px solid #eee"/>
<p style="font-size:.82rem;color:#888"><strong>Nguồn tham khảo:</strong><br/>
• Sonnenburg J. & Sonnenburg E.: "The Good Gut" — Penguin Press (2015)<br/>
• Wastyk H.C. et al.: "Gut-microbiota-targeted diets modulate human immune status" — Cell (2021)<br/>
• American Gut Project: McDonald et al., eLife (2018)<br/>
• Cryan J.F. et al.: "The Microbiota-Gut-Brain Axis" — Physiological Reviews (2019)<br/>
• Viện Dinh dưỡng Quốc gia Việt Nam: Hướng dẫn dinh dưỡng cho sức khỏe đường tiêu hóa (2023)<br/>
• Báo Sức khỏe & Đời sống: "Hệ vi sinh đường ruột và tầm quan trọng với người Việt" (2024)</p>`
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
