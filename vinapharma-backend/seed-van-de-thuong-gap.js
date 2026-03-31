require('dotenv').config();
const mongoose = require('mongoose');
const Post = require('./models/Post');

const AUTHOR_ID = '69b3a064e4ea0cc6bcbf931a';

const posts = [
  {
    title: 'Đau đầu và đau nửa đầu: Phân biệt, nguyên nhân và khi nào cần gặp bác sĩ',
    category: 'Vấn đề thường gặp',
    topic: '',
    excerpt: 'Đau đầu là một trong những triệu chứng phổ biến nhất, nhưng không phải cơn đau đầu nào cũng giống nhau. Hiểu sự khác biệt giữa đau đầu căng thẳng, đau nửa đầu (migraine) và đau đầu cụm giúp bạn xử lý đúng cách và biết khi nào cần thăm khám.',
    thumbnail: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&q=80',
    content: `
<h2>Không phải đau đầu nào cũng như nhau</h2>
<p>Hơn 90% dân số từng bị đau đầu. Dù phổ biến, nhiều người vẫn nhầm lẫn giữa các loại đau đầu khác nhau và không biết khi nào cần lo lắng. Việc nhận diện đúng loại đau đầu giúp điều trị hiệu quả và tránh lạm dụng thuốc giảm đau.</p>

<img src="https://images.unsplash.com/photo-1521075486433-bf4052bb37bc?w=800&q=80" alt="Đau đầu và căng thẳng" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Đau đầu do căng thẳng (Tension-type headache) — phổ biến nhất</h2>
<p>Chiếm 70–80% các ca đau đầu. Đặc điểm nhận biết:</p>
<ul>
  <li><strong>Vị trí:</strong> Hai bên đầu, cảm giác như bị siết chặt hoặc đeo vòng</li>
  <li><strong>Cường độ:</strong> Nhẹ đến vừa, không theo nhịp đập</li>
  <li><strong>Kèm theo:</strong> Đau cổ, vai gáy; không buồn nôn; không nhạy cảm với ánh sáng/âm thanh (hoặc chỉ nhẹ)</li>
  <li><strong>Thời gian:</strong> 30 phút – 7 ngày</li>
  <li><strong>Nguyên nhân:</strong> Căng thẳng, mệt mỏi, tư thế xấu, mắt mỏi, thiếu ngủ, bỏ bữa</li>
</ul>
<p><strong>Điều trị:</strong> Nghỉ ngơi, giảm stress, paracetamol hoặc ibuprofen. Nếu xảy ra &gt;15 ngày/tháng trong 3 tháng → đau đầu mãn tính, cần gặp bác sĩ.</p>

<h2>Migraine (Đau nửa đầu) — phức tạp hơn nhiều</h2>
<p>Migraine ảnh hưởng 12–15% dân số, phụ nữ gặp nhiều gấp 3 lần nam giới. Không chỉ là "đau đầu nặng" — đây là bệnh thần kinh có cơ chế phức tạp.</p>
<ul>
  <li><strong>Vị trí:</strong> Thường một bên đầu (không nhất thiết), đôi khi lan ra toàn bộ</li>
  <li><strong>Cường độ:</strong> Trung bình đến nặng, theo nhịp đập</li>
  <li><strong>Kèm theo:</strong> Buồn nôn, nôn, rất nhạy cảm với ánh sáng (photophobia), âm thanh (phonophobia), mùi</li>
  <li><strong>Thời gian:</strong> 4–72 giờ nếu không điều trị</li>
  <li><strong>Aura (20–30% bệnh nhân):</strong> Rối loạn thị giác (đốm sáng, đường ziczac), tê bì hoặc yếu tay/mặt trước cơn đau 20–60 phút</li>
</ul>
<p><strong>Trigger phổ biến:</strong> Thiếu ngủ, bỏ bữa, rượu (đặc biệt vang đỏ), caffeine (thừa hoặc thiếu đột ngột), kinh nguyệt, ánh sáng chói, mùi mạnh, thay đổi thời tiết.</p>
<p><strong>Điều trị:</strong> Triptan (đặc trị migraine), NSAIDs, nghỉ trong phòng tối yên tĩnh. Nếu &gt;4 cơn/tháng cần thuốc phòng ngừa.</p>

<h2>Đau đầu cụm (Cluster headache) — hiếm nhưng đau dữ dội nhất</h2>
<p>Được mệnh danh là "cơn đau của tự sát" — đây là loại đau đầu đau nhất y học biết đến. Hiếm gặp (0,1% dân số), chủ yếu ở nam giới 20–50 tuổi.</p>
<ul>
  <li><strong>Vị trí:</strong> Quanh một mắt, đau cực kỳ dữ dội và sắc nét</li>
  <li><strong>Kèm theo:</strong> Mắt đỏ, chảy nước mắt, nghẹt mũi cùng bên, mí mắt sụp</li>
  <li><strong>Thời gian:</strong> 15–180 phút, nhưng xảy ra theo "cụm" (1–8 lần/ngày trong vài tuần)</li>
</ul>
<p><strong>Điều trị:</strong> Oxy 100% qua mặt nạ, sumatriptan tiêm. Cần điều trị chuyên khoa.</p>

<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="Gặp bác sĩ khi đau đầu nghiêm trọng" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Dấu hiệu cần đi cấp cứu ngay</h2>
<p>Những loại đau đầu sau có thể là dấu hiệu của tình trạng nguy hiểm tính mạng:</p>
<ul>
  <li><strong>"Thunderclap headache":</strong> Đau đầu dữ dội xuất hiện đột ngột và đạt đỉnh trong vài giây — nguy cơ xuất huyết dưới nhện</li>
  <li>Đau đầu kèm sốt cao, cứng cổ, sợ ánh sáng — nghi viêm màng não</li>
  <li>Đau đầu sau chấn thương đầu</li>
  <li>Đau đầu kèm yếu liệt, nói khó, nhìn đôi, mất ý thức — nguy cơ đột quỵ</li>
  <li>Đau đầu mới xuất hiện ở người trên 50 tuổi hoặc bệnh nhân ung thư/HIV</li>
  <li>Đau đầu ngày càng nặng hơn theo thời gian dù đã dùng thuốc</li>
</ul>

<h2>Phòng ngừa đau đầu tái phát</h2>
<ul>
  <li>Ngủ đủ giờ, duy trì giờ ngủ nhất quán kể cả cuối tuần</li>
  <li>Uống đủ nước — mất nước là trigger phổ biến bị bỏ qua</li>
  <li>Không bỏ bữa, nhất là bữa sáng</li>
  <li>Giảm caffeine từ từ nếu muốn cai — đừng dừng đột ngột</li>
  <li>Theo dõi "nhật ký đau đầu" để nhận diện trigger cá nhân</li>
  <li>Hạn chế dùng thuốc giảm đau &gt;10 ngày/tháng (nguy cơ "medication overuse headache")</li>
</ul>
<p><em>Nguồn tham khảo: International Headache Society – ICHD-3 Classification; WHO Headache Disorders Factsheet</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['đau đầu', 'migraine', 'đau nửa đầu', 'sức khỏe', 'thần kinh'],
    published: true,
    publishedAt: new Date('2025-10-08'),
  },
  {
    title: 'Trào ngược dạ dày thực quản (GERD): Hiểu đúng để điều trị đúng',
    category: 'Vấn đề thường gặp',
    topic: '',
    excerpt: 'Ợ nóng sau bữa ăn tưởng chừng bình thường nhưng nếu xảy ra thường xuyên có thể là dấu hiệu của GERD — bệnh lý ảnh hưởng đến 20–30% dân số và có thể dẫn đến biến chứng nghiêm trọng nếu không điều trị.',
    thumbnail: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    content: `
<h2>GERD — không chỉ là "ợ chua" thông thường</h2>
<p>Gastroesophageal Reflux Disease (GERD) xảy ra khi acid dạ dày trào ngược lên thực quản thường xuyên, gây kích ứng niêm mạc và các triệu chứng khó chịu. Khác với ợ nóng thỉnh thoảng sau bữa ăn nhiều dầu mỡ, GERD là bệnh mãn tính cần được quản lý lâu dài.</p>

<img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" alt="Đau dạ dày và trào ngược" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Triệu chứng của GERD</h2>
<p><strong>Triệu chứng điển hình:</strong></p>
<ul>
  <li><strong>Ợ nóng (heartburn):</strong> Cảm giác nóng rát từ bụng trên lan lên ngực, cổ — thường sau ăn, nằm xuống hoặc cúi người</li>
  <li><strong>Trào ngược:</strong> Acid hoặc thức ăn trào lên miệng, vị chua hoặc đắng</li>
</ul>
<p><strong>Triệu chứng không điển hình (thường bị bỏ qua):</strong></p>
<ul>
  <li>Ho mãn tính, đặc biệt về đêm — không rõ nguyên nhân</li>
  <li>Khàn giọng, viêm họng tái phát</li>
  <li>Hen suyễn khó kiểm soát (acid kích thích đường thở)</li>
  <li>Khó nuốt, cảm giác có gì đó mắc kẹt trong họng</li>
  <li>Đau ngực — dễ nhầm với đau tim (cần loại trừ trước)</li>
  <li>Mòn men răng do acid</li>
</ul>

<h2>Nguyên nhân và yếu tố nguy cơ</h2>
<p>GERD xảy ra khi cơ vòng thực quản dưới (LES — lower esophageal sphincter) bị yếu hoặc giãn ra bất thường, cho phép acid trào lên.</p>
<p><strong>Yếu tố làm nặng hơn:</strong></p>
<ul>
  <li>Thừa cân, béo phì — tăng áp lực ổ bụng</li>
  <li>Mang thai</li>
  <li>Hút thuốc lá — làm yếu LES</li>
  <li>Thực phẩm: chocolate, cà phê, rượu, thức ăn cay, cà chua, bạc hà</li>
  <li>Ăn bữa lớn, nằm ngay sau ăn</li>
  <li>Một số thuốc: aspirin, ibuprofen, amlodipine, thuốc trầm cảm</li>
  <li>Thoát vị hoành (hiatal hernia)</li>
</ul>

<h2>Biến chứng nguy hiểm nếu không điều trị</h2>
<ul>
  <li><strong>Viêm thực quản:</strong> Niêm mạc bị viêm, loét — gây đau và khó nuốt</li>
  <li><strong>Hẹp thực quản:</strong> Sẹo do viêm tái phát gây thu hẹp lòng thực quản</li>
  <li><strong>Barrett's esophagus:</strong> Niêm mạc thực quản thay đổi thành niêm mạc dạng ruột — nguy cơ ung thư thực quản tăng 30–40 lần</li>
</ul>

<img src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=800&q=80" alt="Thay đổi lối sống điều trị GERD" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Điều trị GERD</h2>
<p><strong>Thay đổi lối sống (nền tảng):</strong></p>
<ul>
  <li>Giảm cân nếu thừa cân</li>
  <li>Ăn bữa nhỏ hơn, thường xuyên hơn</li>
  <li>Không ăn trong 3 giờ trước khi ngủ</li>
  <li>Kê cao đầu giường 15–20cm (không chỉ kê gối cao)</li>
  <li>Bỏ thuốc lá, hạn chế rượu</li>
  <li>Tránh thực phẩm trigger cá nhân</li>
</ul>
<p><strong>Thuốc điều trị:</strong></p>
<ul>
  <li><strong>Antacid (Gaviscon, Maalox):</strong> Tác dụng nhanh, ngắn — phù hợp triệu chứng nhẹ, không thường xuyên</li>
  <li><strong>H2 blockers (famotidine):</strong> Giảm tiết acid hiệu quả hơn antacid</li>
  <li><strong>PPI — Proton pump inhibitor (omeprazole, esomeprazole, pantoprazole):</strong> Mạnh nhất, dùng trước ăn sáng 30–60 phút. Không nên dùng dài hạn tự ý vì có tác dụng phụ (giảm hấp thu Mg, Ca, B12; tăng nguy cơ nhiễm Clostridium difficile)</li>
</ul>
<p><strong>Khi nào cần nội soi:</strong> Không đáp ứng điều trị sau 4–8 tuần, khó nuốt, sụt cân không rõ nguyên nhân, nôn ra máu hoặc phân đen.</p>
<p><em>Nguồn tham khảo: American College of Gastroenterology – GERD Guidelines 2022; ACG Clinical Guideline</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['GERD', 'trào ngược', 'dạ dày', 'ợ nóng', 'tiêu hóa'],
    published: true,
    publishedAt: new Date('2025-10-15'),
  },
  {
    title: 'Huyết áp cao (tăng huyết áp): Kẻ giết người thầm lặng và cách kiểm soát',
    category: 'Vấn đề thường gặp',
    topic: '',
    excerpt: 'Huyết áp cao ảnh hưởng đến 1/3 người trưởng thành Việt Nam nhưng hơn 50% không biết mình bị bệnh. Không triệu chứng không có nghĩa là an toàn — tăng huyết áp âm thầm phá hủy tim, thận và não trong nhiều năm.',
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    content: `
<h2>Tại sao gọi là "kẻ giết người thầm lặng"?</h2>
<p>Tăng huyết áp (hypertension) hiếm khi gây triệu chứng rõ ràng cho đến khi đã gây tổn thương nghiêm trọng các cơ quan. Đại đa số bệnh nhân không biết mình bị bệnh cho đến khi đo huyết áp tình cờ hoặc khi đã xảy ra biến chứng (đột quỵ, nhồi máu cơ tim, suy thận).</p>
<p>Tại Việt Nam, theo Điều tra Quốc gia năm 2023: tỷ lệ tăng huyết áp ở người &gt;25 tuổi là 26,2% — nhưng chỉ 37% trong số này được điều trị, và chỉ 23% kiểm soát được huyết áp.</p>

<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="Đo huyết áp" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Hiểu con số huyết áp</h2>
<p>Huyết áp được đo bằng mmHg, gồm 2 chỉ số:</p>
<ul>
  <li><strong>Systolic (tâm thu) — số trên:</strong> Áp lực khi tim co bóp</li>
  <li><strong>Diastolic (tâm trương) — số dưới:</strong> Áp lực khi tim nghỉ giữa các nhịp</li>
</ul>
<table style="width:100%;border-collapse:collapse;margin:1rem 0">
  <thead><tr style="background:#f5f5f5"><th style="padding:8px;text-align:left;border:1px solid #ddd">Phân loại</th><th style="padding:8px;border:1px solid #ddd">Tâm thu (mmHg)</th><th style="padding:8px;border:1px solid #ddd">Tâm trương (mmHg)</th></tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #ddd">Bình thường</td><td style="padding:8px;border:1px solid #ddd">&lt;120</td><td style="padding:8px;border:1px solid #ddd">&lt;80</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">Cao hơn bình thường</td><td style="padding:8px;border:1px solid #ddd">120–129</td><td style="padding:8px;border:1px solid #ddd">&lt;80</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">Tăng HA độ 1</td><td style="padding:8px;border:1px solid #ddd">130–139</td><td style="padding:8px;border:1px solid #ddd">80–89</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">Tăng HA độ 2</td><td style="padding:8px;border:1px solid #ddd">≥140</td><td style="padding:8px;border:1px solid #ddd">≥90</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">Khủng hoảng HA</td><td style="padding:8px;border:1px solid #ddd">&gt;180</td><td style="padding:8px;border:1px solid #ddd">&gt;120</td></tr>
  </tbody>
</table>

<h2>Nguyên nhân và yếu tố nguy cơ</h2>
<p><strong>Tăng huyết áp nguyên phát (90–95%):</strong> Không có nguyên nhân đơn lẻ rõ ràng — do tổng hợp di truyền, tuổi tác, lối sống:</p>
<ul>
  <li>Thừa muối (người Việt trung bình ăn 9–11g muối/ngày, khuyến nghị &lt;5g)</li>
  <li>Béo phì, đặc biệt mỡ bụng</li>
  <li>Ít vận động</li>
  <li>Hút thuốc, uống nhiều rượu bia</li>
  <li>Căng thẳng mãn tính</li>
  <li>Tiền sử gia đình tăng huyết áp</li>
</ul>
<p><strong>Tăng huyết áp thứ phát (5–10%):</strong> Có nguyên nhân cụ thể — bệnh thận, cường aldosterone, ngưng thở khi ngủ, thuốc (thuốc tránh thai, NSAIDs, corticoid).</p>

<h2>Biến chứng của tăng huyết áp không kiểm soát</h2>
<img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80" alt="Biến chứng tim mạch" style="width:100%;border-radius:8px;margin:1rem 0"/>
<ul>
  <li><strong>Tim:</strong> Phì đại cơ tim, suy tim, nhồi máu cơ tim, rối loạn nhịp</li>
  <li><strong>Não:</strong> Đột quỵ (tăng huyết áp là nguyên nhân số 1 đột quỵ), sa sút trí tuệ</li>
  <li><strong>Thận:</strong> Bệnh thận mãn tính, suy thận</li>
  <li><strong>Mắt:</strong> Tổn thương võng mạc (retinopathy), mù lòa</li>
  <li><strong>Động mạch:</strong> Xơ vữa động mạch, phình động mạch chủ</li>
</ul>

<h2>Điều trị và kiểm soát huyết áp</h2>
<p><strong>Thay đổi lối sống — hiệu quả không kém thuốc nhẹ:</strong></p>
<ul>
  <li>Giảm muối: từ 9g xuống 5g/ngày có thể giảm 4–5 mmHg tâm thu</li>
  <li>Chế độ ăn DASH: nhiều rau củ, trái cây, sữa ít béo, ít muối — giảm 8–14 mmHg</li>
  <li>Vận động aerobic 30 phút/ngày, 5 ngày/tuần — giảm 5–8 mmHg</li>
  <li>Giảm cân 5kg — giảm 4–5 mmHg</li>
  <li>Bỏ thuốc lá, giới hạn rượu bia</li>
</ul>
<p><strong>Thuốc hạ áp:</strong> ACE inhibitor, ARB, thiazide, calcium channel blocker, beta blocker — bác sĩ lựa chọn tùy bệnh đi kèm. Phải uống đúng giờ mỗi ngày, không tự ngừng thuốc khi thấy huyết áp bình thường.</p>
<p><strong>Mục tiêu kiểm soát:</strong> &lt;130/80 mmHg với hầu hết bệnh nhân; &lt;140/90 mmHg với người &gt;65 tuổi hoặc có bệnh đi kèm nhất định.</p>
<p><em>Nguồn tham khảo: Hội Tim mạch Việt Nam – Khuyến cáo 2022; ACC/AHA Hypertension Guidelines 2017</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['huyết áp', 'tăng huyết áp', 'tim mạch', 'đột quỵ', 'sức khỏe'],
    published: true,
    publishedAt: new Date('2025-10-22'),
  },
  {
    title: 'Tiểu đường type 2: Phòng ngừa, phát hiện sớm và sống khỏe với bệnh',
    category: 'Vấn đề thường gặp',
    topic: '',
    excerpt: 'Tiểu đường type 2 đang gia tăng nhanh ở Việt Nam với hơn 7 triệu người mắc bệnh. Điều đáng lo ngại là 70% không biết mình bị bệnh. Nhận biết sớm và thay đổi lối sống có thể đảo ngược tiền tiểu đường và kiểm soát hiệu quả tiểu đường type 2.',
    thumbnail: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80',
    content: `
<h2>Tiểu đường type 2 — dịch bệnh của thế kỷ 21</h2>
<p>Diabetes mellitus type 2 (DM2) là bệnh chuyển hóa đặc trưng bởi đường huyết cao mãn tính do kháng insulin và/hoặc suy giảm chức năng tế bào beta tụy. Khác với type 1 (tự miễn, cần tiêm insulin từ đầu), type 2 phát triển từ từ trong nhiều năm và có thể ngăn ngừa hoặc trì hoãn bằng thay đổi lối sống.</p>

<img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80" alt="Kiểm tra đường huyết" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Dấu hiệu nhận biết — và tại sao nhiều người không nhận ra</h2>
<p>Giai đoạn sớm của DM2 thường không có triệu chứng rõ ràng. Khi có triệu chứng, bệnh đã ở giai đoạn muộn hơn:</p>
<ul>
  <li>Khát nước nhiều, uống nhiều</li>
  <li>Đi tiểu thường xuyên, đặc biệt ban đêm</li>
  <li>Mệt mỏi không giải thích được</li>
  <li>Nhìn mờ (thủy tinh thể thay đổi do đường huyết dao động)</li>
  <li>Vết thương lâu lành, hay bị nhiễm trùng (nấm, vi khuẩn)</li>
  <li>Tê bì, ngứa ran bàn tay, bàn chân</li>
  <li>Sụt cân không rõ lý do (giai đoạn nặng)</li>
</ul>

<h2>Tiêu chuẩn chẩn đoán</h2>
<table style="width:100%;border-collapse:collapse;margin:1rem 0">
  <thead><tr style="background:#f5f5f5"><th style="padding:8px;text-align:left;border:1px solid #ddd">Xét nghiệm</th><th style="padding:8px;border:1px solid #ddd">Bình thường</th><th style="padding:8px;border:1px solid #ddd">Tiền ĐTĐ</th><th style="padding:8px;border:1px solid #ddd">Tiểu đường</th></tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #ddd">Đường huyết đói (FPG)</td><td style="padding:8px;border:1px solid #ddd">&lt;100 mg/dL</td><td style="padding:8px;border:1px solid #ddd">100–125</td><td style="padding:8px;border:1px solid #ddd">≥126</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">HbA1c</td><td style="padding:8px;border:1px solid #ddd">&lt;5,7%</td><td style="padding:8px;border:1px solid #ddd">5,7–6,4%</td><td style="padding:8px;border:1px solid #ddd">≥6,5%</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd">Đường huyết 2h sau uống 75g glucose</td><td style="padding:8px;border:1px solid #ddd">&lt;140</td><td style="padding:8px;border:1px solid #ddd">140–199</td><td style="padding:8px;border:1px solid #ddd">≥200</td></tr>
  </tbody>
</table>
<p><strong>HbA1c</strong> phản ánh đường huyết trung bình trong 3 tháng — không cần nhịn ăn, tiện lợi cho theo dõi dài hạn.</p>

<h2>Yếu tố nguy cơ — bạn có nên tầm soát không?</h2>
<p>Nên xét nghiệm đường huyết nếu có ≥1 yếu tố sau:</p>
<ul>
  <li>Thừa cân (BMI ≥23 với người châu Á)</li>
  <li>Người thân trực tiếp (cha/mẹ/anh/chị em) bị tiểu đường</li>
  <li>Tiền sử tiểu đường thai kỳ hoặc sinh con nặng &gt;4kg</li>
  <li>Tăng huyết áp, rối loạn lipid máu</li>
  <li>Hội chứng buồng trứng đa nang</li>
  <li>Ít vận động thể lực</li>
  <li>Trên 45 tuổi</li>
</ul>

<img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" alt="Chế độ ăn lành mạnh cho người tiểu đường" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Điều trị và quản lý tiểu đường type 2</h2>
<p><strong>Nền tảng — thay đổi lối sống:</strong></p>
<ul>
  <li>Giảm 5–7% cân nặng nếu thừa cân có thể cải thiện đáng kể đường huyết</li>
  <li>Vận động aerobic 150 phút/tuần + tập sức mạnh 2–3 lần/tuần</li>
  <li>Chế độ ăn: ưu tiên thực phẩm GI thấp, nhiều chất xơ, ít đường tinh luyện và carb đơn</li>
  <li>Tiền tiểu đường: thay đổi lối sống giảm 58% nguy cơ tiến triển thành DM2 (Diabetes Prevention Program)</li>
</ul>
<p><strong>Thuốc:</strong></p>
<ul>
  <li><strong>Metformin:</strong> Thuốc đầu tay, giảm sản xuất glucose ở gan, rẻ, an toàn</li>
  <li><strong>SGLT2 inhibitor (dapagliflozin, empagliflozin):</strong> Bảo vệ tim và thận — ưu tiên khi có bệnh tim mạch hoặc suy thận</li>
  <li><strong>GLP-1 agonist (semaglutide, liraglutide):</strong> Giảm cân, bảo vệ tim — semaglutide dạng uống đang thay đổi điều trị DM2</li>
  <li><strong>Insulin:</strong> Khi thuốc uống không đủ kiểm soát, hoặc HbA1c rất cao lúc chẩn đoán</li>
</ul>
<p><strong>Mục tiêu kiểm soát:</strong> HbA1c &lt;7% với hầu hết bệnh nhân; đường huyết đói 80–130 mg/dL; đường huyết sau ăn &lt;180 mg/dL.</p>
<p><em>Nguồn tham khảo: ADA Standards of Care in Diabetes 2024; Hội Nội tiết và Đái tháo đường Việt Nam</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['tiểu đường', 'đái tháo đường', 'đường huyết', 'insulin', 'sức khỏe'],
    published: true,
    publishedAt: new Date('2025-10-29'),
  },
  {
    title: 'Đau lưng: Nguyên nhân thường gặp, cách tự hỗ trợ và khi nào cần can thiệp y tế',
    category: 'Vấn đề thường gặp',
    topic: '',
    excerpt: 'Đau lưng là nguyên nhân hàng đầu gây giảm khả năng lao động toàn cầu. 80% người trưởng thành sẽ bị đau lưng ít nhất một lần trong đời. Hiểu đúng giúp bạn tự điều trị hiệu quả và tránh những can thiệp không cần thiết.',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    content: `
<h2>Đau lưng — gánh nặng sức khỏe toàn cầu</h2>
<p>Đau lưng dưới (low back pain) là nguyên nhân số 1 gây giảm khả năng lao động và nghỉ ốm tại nơi làm việc trên toàn thế giới. Tin tốt: đại đa số (90%) trường hợp đau lưng cấp tính sẽ tự khỏi trong 4–6 tuần và không cần can thiệp phức tạp.</p>

<img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80" alt="Đau lưng và làm việc" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Phân loại đau lưng</h2>
<p><strong>Theo thời gian:</strong></p>
<ul>
  <li><strong>Cấp tính:</strong> &lt;4 tuần — thường do chấn thương, căng cơ, tư thế xấu</li>
  <li><strong>Bán cấp:</strong> 4–12 tuần</li>
  <li><strong>Mãn tính:</strong> &gt;12 tuần — phức tạp hơn, cần đánh giá toàn diện</li>
</ul>
<p><strong>Theo nguyên nhân:</strong></p>
<ul>
  <li><strong>Cơ học (85–90%):</strong> Căng cơ, bong gân, thoát vị đĩa đệm, thoái hóa cột sống — không nguy hiểm đến tính mạng</li>
  <li><strong>Thần kinh:</strong> Chèn ép rễ thần kinh gây đau lan xuống chân (đau dây thần kinh tọa)</li>
  <li><strong>Viêm:</strong> Viêm cột sống dính khớp — đau buổi sáng, giảm khi vận động</li>
  <li><strong>Nguyên nhân khác (hiếm nhưng quan trọng):</strong> Ung thư di căn, nhiễm trùng cột sống, phình động mạch chủ</li>
</ul>

<h2>Dấu hiệu "cờ đỏ" — cần đi khám ngay</h2>
<p>Hầu hết đau lưng không nguy hiểm, nhưng cần cảnh báo với các dấu hiệu sau:</p>
<ul>
  <li>Đau sau chấn thương mạnh (tai nạn, ngã từ cao)</li>
  <li>Đau kèm mất kiểm soát tiểu tiện/đại tiện (hội chứng đuôi ngựa — cấp cứu)</li>
  <li>Tê bì hoặc yếu liệt cả hai chân</li>
  <li>Đau về đêm khiến không ngủ được, không liên quan tư thế</li>
  <li>Sốt kèm đau lưng (nghi nhiễm trùng)</li>
  <li>Sụt cân không giải thích được</li>
  <li>Tiền sử ung thư, dùng corticoid lâu dài, loãng xương</li>
  <li>Người dưới 20 hoặc trên 55 tuổi bị đau lưng lần đầu</li>
</ul>

<h2>Điều trị đau lưng cấp tính tại nhà</h2>
<img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Tập thể dục phục hồi lưng" style="width:100%;border-radius:8px;margin:1rem 0"/>
<ul>
  <li><strong>Tiếp tục vận động nhẹ:</strong> Nghỉ ngơi tại giường KHÔNG được khuyến cáo — vận động nhẹ như đi bộ thực sự giúp phục hồi nhanh hơn</li>
  <li><strong>Chườm nóng/lạnh:</strong> 48h đầu chườm lạnh; sau đó chườm nóng 15–20 phút/lần</li>
  <li><strong>Thuốc:</strong> Paracetamol, ibuprofen/naproxen (tốt hơn cho đau do viêm). Dùng liều đủ, đúng giờ, không vượt 7–10 ngày</li>
  <li><strong>Tránh:</strong> Nằm liên tục, tư thế cong vẹo, mang vác nặng khi đau cấp</li>
</ul>

<h2>Đau thần kinh tọa (Sciatica) — khi đau lan xuống chân</h2>
<p>Đau dây thần kinh tọa xảy ra khi rễ thần kinh L4-S1 bị chèn ép (thường do thoát vị đĩa đệm). Đặc trưng: đau lan từ mông xuống mặt sau đùi, bắp chân, có thể đến bàn chân; kèm tê bì, kiến bò, yếu cơ chân.</p>
<ul>
  <li>90% tự khỏi trong 6–12 tuần</li>
  <li>Vật lý trị liệu (physical therapy) — hiệu quả nhất cho phục hồi dài hạn</li>
  <li>Tiêm steroid ngoài màng cứng — khi đau nặng, không đáp ứng điều trị thông thường</li>
  <li>Phẫu thuật — chỉ khi có yếu liệt nặng, hoặc không cải thiện sau 6 tuần điều trị bảo tồn</li>
</ul>

<h2>Phòng ngừa đau lưng tái phát</h2>
<ul>
  <li>Tập luyện đều đặn — đặc biệt các bài tập tăng sức mạnh cơ core (plank, bridge, dead bug)</li>
  <li>Duy trì cân nặng hợp lý — mỗi kg thừa cân tăng áp lực đáng kể lên cột sống</li>
  <li>Tư thế đúng khi ngồi làm việc: lưng thẳng, màn hình ngang tầm mắt, chân chạm sàn</li>
  <li>Đứng dậy và vươn vai mỗi 30–45 phút khi ngồi lâu</li>
  <li>Nâng vật đúng cách: cúi gối, giữ lưng thẳng, không vặn người</li>
</ul>
<p><em>Nguồn tham khảo: NICE Guidelines – Low Back Pain 2016; Lancet Series on Low Back Pain 2018</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['đau lưng', 'cột sống', 'thần kinh tọa', 'cơ xương khớp', 'sức khỏe'],
    published: true,
    publishedAt: new Date('2025-11-05'),
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
