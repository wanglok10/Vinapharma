require('dotenv').config();
const mongoose = require('mongoose');
const Post = require('./models/Post');

const AUTHOR_ID = '69b3a064e4ea0cc6bcbf931a';

const posts = [
  {
    title: 'Vinapharma ra mắt dòng sản phẩm Wellbeing 2025: Toàn diện — Tự nhiên — Khoa học',
    category: 'Truyền thông',
    topic: '',
    excerpt: 'Nhân dịp kỷ niệm thành lập, Vinapharma chính thức giới thiệu dòng sản phẩm Wellbeing 2025 với hơn 30 sản phẩm bổ sung dinh dưỡng và chăm sóc sức khỏe theo tiêu chuẩn quốc tế, đáp ứng nhu cầu ngày càng cao của người tiêu dùng Việt Nam.',
    thumbnail: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    content: `
<h2>Bộ sưu tập sản phẩm mới — Chăm sóc sức khỏe toàn diện</h2>
<p>Trong bối cảnh người tiêu dùng Việt Nam ngày càng quan tâm đến sức khỏe chủ động và phòng bệnh hơn chữa bệnh, Vinapharma cho ra mắt dòng sản phẩm Wellbeing 2025 — kết quả của hơn 2 năm nghiên cứu, phát triển và kiểm nghiệm lâm sàng.</p>

<img src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80" alt="Dòng sản phẩm Wellbeing Vinapharma" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Những điểm nổi bật của dòng Wellbeing 2025</h2>
<p>Dòng sản phẩm Wellbeing 2025 được xây dựng trên 3 trụ cột:</p>
<ul>
  <li><strong>Toàn diện:</strong> Bao phủ các nhu cầu sức khỏe từ miễn dịch, xương khớp, não bộ, tim mạch đến sắc đẹp từ bên trong</li>
  <li><strong>Tự nhiên:</strong> Ưu tiên chiết xuất từ thảo dược, thực phẩm thiên nhiên; không phẩm màu nhân tạo, không chất bảo quản không cần thiết</li>
  <li><strong>Khoa học:</strong> Mỗi sản phẩm được xây dựng dựa trên bằng chứng khoa học, sử dụng nguyên liệu đạt chuẩn USP/EP, sản xuất theo tiêu chuẩn GMP</li>
</ul>

<h2>Các nhóm sản phẩm chính</h2>
<ul>
  <li><strong>Miễn dịch & Năng lượng:</strong> Bổ sung vitamin D3+K2, Vitamin C liposomal, Zinc & Elderberry, B-Complex tổng hợp</li>
  <li><strong>Xương khớp:</strong> Collagen type II thủy phân, Canxi san hô hữu cơ, Glucosamine sulfate, Curcumin phytosome</li>
  <li><strong>Não bộ & Thần kinh:</strong> Omega-3 DHA/EPA cao cấp từ tảo biển, Phosphatidylserine, Bacopa monnieri, Ginkgo biloba</li>
  <li><strong>Tim mạch:</strong> CoQ10 ubiquinol, Omega-3 rTG form, Bergamot chiết xuất, Resveratrol</li>
  <li><strong>Sắc đẹp từ bên trong:</strong> Marine collagen peptide, Biotin, Astaxanthin, Glutathione liposomal</li>
</ul>

<img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80" alt="Tiêu chuẩn sản xuất GMP" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Cam kết chất lượng</h2>
<p>Tất cả sản phẩm Wellbeing 2025 đều:</p>
<ul>
  <li>Được kiểm nghiệm tại phòng lab độc lập theo tiêu chuẩn ISO 17025</li>
  <li>Công bố đầy đủ thành phần, nguồn gốc nguyên liệu và hàm lượng thực tế</li>
  <li>Có Giấy xác nhận công bố sản phẩm của Bộ Y tế Việt Nam</li>
  <li>Mã QR truy xuất nguồn gốc trên từng hộp sản phẩm</li>
</ul>

<h2>Chương trình ra mắt đặc biệt</h2>
<p>Nhân dịp ra mắt, Vinapharma triển khai chương trình ưu đãi dành cho khách hàng thân thiết và người mua lần đầu. Liên hệ hệ thống nhà thuốc đối tác hoặc website chính thức để tìm hiểu thêm.</p>
<p><em>Mọi thông tin chi tiết về sản phẩm và chương trình ưu đãi, quý khách vui lòng liên hệ hotline hoặc truy cập website Vinapharma.</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['vinapharma', 'sản phẩm mới', 'wellbeing', 'thực phẩm chức năng', 'truyền thông'],
    published: true,
    publishedAt: new Date('2025-09-15'),
  },
  {
    title: 'Vinapharma ký kết hợp tác chiến lược với các đối tác quốc tế tại triển lãm Vitafoods Châu Á 2025',
    category: 'Truyền thông',
    topic: '',
    excerpt: 'Tại triển lãm Vitafoods Asia 2025 diễn ra tại Singapore, Vinapharma chính thức ký kết 4 thỏa thuận hợp tác chiến lược với các đối tác từ Hàn Quốc, Nhật Bản và Đức — mở ra chương mới cho hệ sinh thái sản phẩm chăm sóc sức khỏe cao cấp tại Việt Nam.',
    thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    content: `
<h2>Vitafoods Asia 2025 — Sân chơi của ngành TPCN toàn cầu</h2>
<p>Vitafoods Asia là triển lãm quốc tế hàng đầu về thực phẩm chức năng, nguyên liệu dinh dưỡng và công nghệ sản xuất, quy tụ hơn 5.000 đại biểu từ 80 quốc gia mỗi năm. Sự hiện diện của Vinapharma tại sự kiện này đánh dấu bước hội nhập tích cực vào chuỗi cung ứng thực phẩm sức khỏe toàn cầu.</p>

<img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80" alt="Hội nghị và triển lãm quốc tế" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Các thỏa thuận hợp tác được ký kết</h2>
<ul>
  <li><strong>BioActives Korea (Hàn Quốc):</strong> Cung cấp độc quyền collagen peptide biển cấp dược phẩm và probiotics đặc chủng cho thị trường Việt Nam và Đông Nam Á</li>
  <li><strong>Nippon Zoki Pharmaceutical (Nhật Bản):</strong> Hợp tác phân phối dòng enzyme tiêu hóa nattokinase — sản phẩm đặc trưng của công nghệ lên men Nhật Bản</li>
  <li><strong>BASF Nutrition & Health (Đức):</strong> Sử dụng nguyên liệu omega-3 Pronova và vitamin E d-alpha tocopherol trong dòng sản phẩm cao cấp</li>
  <li><strong>DSM-Firmenich (Hà Lan):</strong> Ứng dụng công nghệ vi bao (microencapsulation) để cải thiện sinh khả dụng của các sản phẩm vitamin tan trong dầu</li>
</ul>

<h2>Ý nghĩa của các hợp tác này</h2>
<p>Các thỏa thuận này không chỉ mang ý nghĩa thương mại — đây là cam kết nâng cao chất lượng nguyên liệu đầu vào, tiếp cận công nghệ sản xuất tiên tiến, và đảm bảo tính minh bạch trong chuỗi cung ứng từ nguyên liệu đến sản phẩm cuối.</p>

<img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" alt="Đội ngũ Vinapharma tại hội nghị quốc tế" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Định hướng phát triển 2025–2027</h2>
<p>Sau sự kiện này, Vinapharma sẽ tập trung vào:</p>
<ul>
  <li>Hoàn thiện dây chuyền sản xuất đạt tiêu chuẩn GMP-WHO vào quý 3/2025</li>
  <li>Ra mắt nền tảng tư vấn sức khỏe trực tuyến tích hợp với hệ thống phân phối sản phẩm</li>
  <li>Mở rộng xuất khẩu sang thị trường Campuchia, Lào và Myanmar trong năm 2026</li>
  <li>Xây dựng trung tâm nghiên cứu và phát triển (R&D) chuyên ngành thực phẩm sức khỏe</li>
</ul>
<p><em>Vinapharma cam kết mang đến cho người tiêu dùng Việt Nam những sản phẩm chăm sóc sức khỏe đạt chuẩn quốc tế, với giá cả phù hợp và thông tin minh bạch.</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['vinapharma', 'hợp tác quốc tế', 'triển lãm', 'nguyên liệu', 'truyền thông'],
    published: true,
    publishedAt: new Date('2025-09-28'),
  },
  {
    title: 'Vinapharma đồng hành cùng chương trình "Sức khỏe học đường" tại 50 trường trên cả nước',
    category: 'Truyền thông',
    topic: '',
    excerpt: 'Với thông điệp "Học sinh khỏe — Tương lai vững", Vinapharma phối hợp cùng Bộ Giáo dục và Đào tạo triển khai chương trình giáo dục sức khỏe toàn diện tại 50 trường học, hướng tới xây dựng thế hệ trẻ Việt Nam có nền tảng sức khỏe bền vững.',
    thumbnail: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80',
    content: `
<h2>Vì sao cần chương trình sức khỏe học đường?</h2>
<p>Theo khảo sát của Viện Dinh dưỡng Quốc gia năm 2024, hơn 30% học sinh tiểu học và THCS tại Việt Nam đang đối mặt với ít nhất một vấn đề dinh dưỡng: thiếu vi chất (sắt, kẽm, vitamin D), thừa cân/béo phì đô thị, hoặc chế độ ăn không cân bằng. Đây là giai đoạn vàng để định hình thói quen sức khỏe suốt đời.</p>

<img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80" alt="Học sinh và chăm sóc sức khỏe" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Nội dung chương trình</h2>
<p>Chương trình "Sức khỏe học đường" được thiết kế thành 3 cấu phần đồng bộ:</p>
<ul>
  <li><strong>Giáo dục dinh dưỡng:</strong> Tích hợp vào môn học, cung cấp tài liệu sinh động về chế độ ăn cân bằng, đọc nhãn thực phẩm, và nhận biết thực phẩm lành mạnh so với thực phẩm siêu chế biến</li>
  <li><strong>Tầm soát sức khỏe:</strong> Đo chiều cao, cân nặng, và kiểm tra vi chất theo mùa học; gửi báo cáo cá nhân đến phụ huynh</li>
  <li><strong>Vận động thể chất:</strong> Hướng dẫn các bài tập vận động ngắn (5–10 phút) giữa các tiết học để giảm mệt mỏi và tăng tập trung</li>
</ul>

<h2>Kết quả khảo sát năm đầu triển khai</h2>
<p>Sau 1 năm học thí điểm tại 10 trường đầu tiên:</p>
<ul>
  <li>87% học sinh nhận biết được đúng nhóm thực phẩm lành mạnh (tăng từ 42%)</li>
  <li>73% phụ huynh thay đổi tích cực thói quen chuẩn bị bữa sáng và hộp cơm trưa</li>
  <li>Tỷ lệ học sinh uống đủ nước trong ngày học tăng từ 31% lên 68%</li>
  <li>Giảm 15% tỷ lệ nghỉ học do bệnh thông thường (cảm, sốt, tiêu chảy)</li>
</ul>

<img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80" alt="Khám sức khỏe học đường" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Mở rộng quy mô 2025–2026</h2>
<p>Dựa trên kết quả tích cực, chương trình sẽ mở rộng lên 50 trường trong năm học 2025–2026, bao gồm:</p>
<ul>
  <li>20 trường tại TP. Hồ Chí Minh</li>
  <li>15 trường tại Hà Nội</li>
  <li>15 trường tại các tỉnh Đồng Nai, Bình Dương, Cần Thơ và Đà Nẵng</li>
</ul>
<p>Vinapharma sẽ cung cấp toàn bộ tài liệu giáo dục, thiết bị tầm soát và đào tạo cho giáo viên y tế học đường tham gia chương trình.</p>

<h2>Lời chia sẻ từ Ban Giám hiệu trường tham gia</h2>
<blockquote style="border-left:4px solid var(--red,#c62828);padding-left:1rem;margin:1rem 0;font-style:italic">
  "Chương trình mang lại thay đổi rõ ràng không chỉ trong nhận thức của học sinh mà còn lan tỏa đến gia đình các em. Chúng tôi rất ủng hộ và mong chương trình tiếp tục dài hạn." — Hiệu trưởng Trường THCS Nguyễn Du, TP.HCM
</blockquote>
<p><em>Để biết thêm thông tin về chương trình hoặc đăng ký trường tham gia, vui lòng liên hệ phòng Quan hệ cộng đồng Vinapharma.</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['cộng đồng', 'học đường', 'dinh dưỡng', 'trẻ em', 'vinapharma'],
    published: true,
    publishedAt: new Date('2025-10-10'),
  },
  {
    title: 'Hội thảo khoa học "Dinh dưỡng và Sức khỏe người cao tuổi" — Vinapharma đồng tổ chức cùng Hội Lão khoa Việt Nam',
    category: 'Truyền thông',
    topic: '',
    excerpt: 'Hội thảo khoa học quy tụ hơn 200 bác sĩ, dược sĩ và chuyên gia dinh dưỡng thảo luận về chiến lược dinh dưỡng toàn diện cho người cao tuổi Việt Nam — nhóm dân số đang tăng trưởng nhanh nhất cả nước.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    content: `
<h2>Dân số cao tuổi Việt Nam — Thách thức và cơ hội</h2>
<p>Việt Nam đang bước vào giai đoạn "già hóa dân số" nhanh chưa từng thấy: đến năm 2030, số người từ 60 tuổi trở lên sẽ chiếm hơn 17% dân số, và năm 2050 con số này là 26%. Sức khỏe của người cao tuổi trở thành ưu tiên y tế công cộng hàng đầu, đặt ra yêu cầu cấp thiết về chiến lược dinh dưỡng phòng ngừa.</p>

<img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" alt="Hội thảo y tế và chuyên gia" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Các chủ đề khoa học tại hội thảo</h2>
<p>Hội thảo kéo dài hai ngày với 18 bài báo cáo khoa học, tập trung vào các vấn đề cấp thiết:</p>
<ul>
  <li><strong>Sarcopenia (teo cơ tuổi già):</strong> Vai trò của protein cao, vận động sức mạnh và leucine trong ngăn ngừa mất cơ</li>
  <li><strong>Loãng xương:</strong> Tầm soát sớm bằng DEXA scan; vai trò của canxi, vitamin D, vitamin K2 và isoflavone</li>
  <li><strong>Sức khỏe nhận thức:</strong> Dinh dưỡng MIND diet, omega-3 DHA, phosphatidylserine và các can thiệp phòng Alzheimer</li>
  <li><strong>Suy dinh dưỡng ở người cao tuổi:</strong> Nhận biết sớm bằng MNA (Mini Nutritional Assessment); can thiệp dinh dưỡng bệnh viện</li>
  <li><strong>Tương tác thuốc — dinh dưỡng:</strong> Các cặp tương tác thường gặp cần lưu ý ở bệnh nhân đa thuốc</li>
</ul>

<h2>Khuyến cáo chính từ hội đồng khoa học</h2>
<ul>
  <li>Nhu cầu protein cho người &gt;65 tuổi: 1,2–1,6g/kg/ngày — cao hơn đáng kể so với người trẻ</li>
  <li>Tầm soát vitamin D cho 100% người &gt;65 tuổi; bổ sung 1.500–2.000 IU/ngày nếu thiếu hụt</li>
  <li>Tầm soát suy dinh dưỡng định kỳ mỗi 6 tháng tại các cơ sở y tế</li>
  <li>Khuyến khích vận động sức mạnh ít nhất 2 lần/tuần, ngay cả ở người 70–80 tuổi</li>
  <li>Không khuyến cáo nhịn ăn gián đoạn (intermittent fasting) cho người cao tuổi mà không có chỉ định y tế</li>
</ul>

<img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" alt="Chăm sóc sức khỏe người cao tuổi" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Vinapharma giới thiệu giải pháp dinh dưỡng cho người cao tuổi</h2>
<p>Tại hội thảo, Vinapharma trình bày dòng sản phẩm Golden Age — được thiết kế riêng cho nhu cầu dinh dưỡng đặc thù của người cao tuổi:</p>
<ul>
  <li><strong>GoldenAge Protein+:</strong> Whey protein thủy phân với hàm lượng leucine cao, dễ tiêu hóa, không lactose</li>
  <li><strong>GoldenAge OsteoD:</strong> Canxi san hô hữu cơ + Vitamin D3 1000IU + Vitamin K2 MK-7</li>
  <li><strong>GoldenAge Brain+:</strong> Phosphatidylserine + DHA từ tảo biển + Ginkgo biloba</li>
  <li><strong>GoldenAge MultiVit:</strong> Đa vi chất công thức đặc biệt cho người &gt;60 tuổi với sắt thấp, folate methyl hóa và B12 methyl cobalamin</li>
</ul>
<p><em>Kỷ yếu hội thảo và tài liệu khoa học đầy đủ có thể được yêu cầu qua email chính thức của Vinapharma.</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['hội thảo', 'lão khoa', 'người cao tuổi', 'dinh dưỡng', 'vinapharma'],
    published: true,
    publishedAt: new Date('2025-10-20'),
  },
  {
    title: 'Vinapharma nhận chứng nhận "Thương hiệu Tin cậy — Chất lượng Vàng" năm 2025',
    category: 'Truyền thông',
    topic: '',
    excerpt: 'Lần thứ ba liên tiếp, Vinapharma được Hội Bảo vệ Người tiêu dùng Việt Nam trao tặng danh hiệu "Thương hiệu Tin cậy — Chất lượng Vàng" — ghi nhận cam kết bền vững về chất lượng sản phẩm, minh bạch thông tin và trách nhiệm với cộng đồng.',
    thumbnail: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80',
    content: `
<h2>Danh hiệu được trao sau quá trình đánh giá nghiêm ngặt</h2>
<p>Danh hiệu "Thương hiệu Tin cậy — Chất lượng Vàng" là sự công nhận uy tín từ phía người tiêu dùng và các tổ chức bảo vệ quyền lợi người tiêu dùng. Để được công nhận, doanh nghiệp phải vượt qua đánh giá toàn diện gồm: chất lượng sản phẩm kiểm nghiệm độc lập, khảo sát sự hài lòng của người tiêu dùng (n&gt;1.000), kiểm tra thực tế tại nhà máy sản xuất, và đánh giá minh bạch thông tin sản phẩm.</p>

<img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80" alt="Giải thưởng và công nhận chất lượng" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Kết quả đánh giá nổi bật</h2>
<ul>
  <li><strong>Chất lượng sản phẩm:</strong> 100% sản phẩm kiểm nghiệm đạt tiêu chuẩn công bố, không phát hiện sai lệch hàm lượng &gt;5%</li>
  <li><strong>Hài lòng của khách hàng:</strong> 94,7% người dùng hài lòng hoặc rất hài lòng với sản phẩm</li>
  <li><strong>Minh bạch thông tin:</strong> Điểm xuất sắc trong hạng mục công bố rõ ràng thành phần, nguồn gốc và hướng dẫn sử dụng</li>
  <li><strong>Dịch vụ khách hàng:</strong> Thời gian phản hồi trung bình 2,3 giờ; tỷ lệ giải quyết khiếu nại thành công 98,1%</li>
</ul>

<h2>Ý nghĩa với người tiêu dùng</h2>
<p>Trong bối cảnh thị trường thực phẩm chức năng ngày càng phức tạp với nhiều sản phẩm kém chất lượng và quảng cáo gây hiểu lầm, danh hiệu này giúp người tiêu dùng có thêm cơ sở để lựa chọn sản phẩm an toàn, hiệu quả và đúng với những gì nhà sản xuất cam kết.</p>

<img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" alt="Sự hài lòng của khách hàng" style="width:100%;border-radius:8px;margin:1rem 0"/>

<h2>Cam kết tiếp tục cải tiến</h2>
<p>Nhận giải thưởng không phải điểm đến — mà là động lực để tiếp tục nâng cao. Trong thời gian tới, Vinapharma sẽ:</p>
<ul>
  <li>Đầu tư thêm vào hệ thống kiểm soát chất lượng nội bộ và thiết bị phân tích hiện đại</li>
  <li>Mở rộng chương trình "Scan & Verify" — cho phép người tiêu dùng kiểm tra chứng nhận kiểm nghiệm của từng lô sản phẩm qua QR code</li>
  <li>Tăng cường nội dung giáo dục sức khỏe trên các nền tảng kỹ thuật số, giúp người tiêu dùng đưa ra lựa chọn thông minh hơn</li>
  <li>Xây dựng đội ngũ chuyên gia tư vấn sức khỏe trực tuyến 24/7</li>
</ul>
<blockquote style="border-left:4px solid var(--red,#c62828);padding-left:1rem;margin:1rem 0;font-style:italic">
  "Niềm tin của người tiêu dùng là tài sản quý giá nhất chúng tôi xây dựng qua từng ngày, từng sản phẩm. Danh hiệu này thuộc về đội ngũ Vinapharma và hơn 2 triệu khách hàng đã tin tưởng đồng hành cùng chúng tôi." — Tổng Giám đốc Vinapharma
</blockquote>
<p><em>Thông tin chi tiết về chương trình "Scan & Verify" và hệ thống kiểm soát chất lượng của Vinapharma có thể tham khảo trên website chính thức.</em></p>
    `,
    author: AUTHOR_ID,
    tags: ['vinapharma', 'giải thưởng', 'chất lượng', 'thương hiệu', 'người tiêu dùng'],
    published: true,
    publishedAt: new Date('2025-11-01'),
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
