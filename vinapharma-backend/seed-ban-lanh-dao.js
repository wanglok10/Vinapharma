// Seed nội dung trang Ban lãnh đạo vào Settings (about-content-3)
require('dotenv').config();
const mongoose = require('mongoose');
const Settings = require('./models/Settings');

const html = `<h2>Chief Executive Officer</h2>
<p>Ông Nguyễn Tấn Đạt – Giám đốc điều hành (CEO).</p>
<p>Trong vai trò Chief Executive Officer, Ông Nguyễn Tấn Đạt giữ trọng trách dẫn dắt định hướng phát triển của VinaPharma trên nền tảng chuyên nghiệp, minh bạch và bền vững. Dưới sự điều hành của ông, công ty kiên định theo đuổi chiến lược xây dựng năng lực phân phối có chiều sâu, phát triển hệ thống đối tác đáng tin cậy và lựa chọn những giá trị chăm sóc sức khỏe phù hợp với nhu cầu thị trường Việt Nam.</p>
<p>Tại VinaPharma, vai trò của CEO không chỉ giới hạn trong việc hoạch định chiến lược kinh doanh, mà còn là người định hình tư duy phát triển dài hạn cho doanh nghiệp. Điều đó được thể hiện qua sự chú trọng vào chất lượng danh mục, tính nhất quán trong hợp tác và định hướng tạo dựng niềm tin bền vững với nhà thuốc, đối tác và cộng đồng.</p>
<p>Với tinh thần điều hành lấy trách nhiệm làm nền tảng, Ông Nguyễn Tấn Đạt cùng VinaPharma tiếp tục theo đuổi mục tiêu xây dựng một doanh nghiệp phân phối đáng tin cậy trong lĩnh vực chăm sóc sức khỏe, góp phần mang những giải pháp chất lượng đến gần hơn với người Việt.</p>

<h2>Thông điệp từ CEO</h2>
<blockquote style="background:#fff5f5;border-left:4px solid #cc1f1f;border-radius:0 .75rem .75rem 0;padding:1.5rem 1.8rem;margin:1.5rem 0;font-style:italic;color:#444;line-height:1.9">
  "Chúng tôi tin rằng giá trị bền vững trong lĩnh vực chăm sóc sức khỏe phải được xây dựng từ niềm tin. Niềm tin vào chất lượng sản phẩm, niềm tin trong hợp tác và niềm tin mà thị trường dành cho một doanh nghiệp luôn theo đuổi sự minh bạch, chuyên nghiệp và trách nhiệm. Tại VinaPharma, chúng tôi lựa chọn phát triển trên nền tảng của sự chọn lọc và đồng hành dài hạn. Mỗi bước đi của công ty đều hướng đến việc kết nối những giải pháp chăm sóc sức khỏe chất lượng với hệ thống nhà thuốc Việt Nam một cách đúng đắn, hiệu quả và bền vững hơn. Chúng tôi trân trọng sự tin tưởng của đối tác, của đội ngũ dược sĩ và của thị trường trong suốt hành trình phát triển. Đó cũng chính là động lực để VinaPharma tiếp tục nỗ lực, tiếp tục hoàn thiện và tiếp tục theo đuổi mục tiêu vì một Việt Nam khỏe đẹp hơn."
  <br><br><strong style="color:#cc1f1f;font-style:normal">Ông Nguyễn Tấn Đạt – Giám đốc điều hành</strong>
</blockquote>

<h2>Vai trò lãnh đạo trong định hướng phát triển</h2>
<p>Dưới sự dẫn dắt của CEO, VinaPharma theo đuổi một mô hình phát triển có trọng tâm, trong đó chất lượng, tính bền vững và giá trị dài hạn luôn được đặt lên trước tốc độ mở rộng đơn thuần. Cách tiếp cận này giúp công ty duy trì sự nhất quán trong lựa chọn sản phẩm, trong xây dựng hệ thống phân phối và trong phát triển quan hệ hợp tác với thị trường.</p>
<p>Vai trò lãnh đạo tại VinaPharma được thể hiện qua việc giữ vững định hướng phát triển rõ ràng, điều phối các trụ cột hoạt động theo cùng một hệ giá trị và bảo đảm rằng mỗi quyết định kinh doanh đều gắn với uy tín thương hiệu. Đây là nền tảng để công ty tiếp tục mở rộng hiện diện mà vẫn giữ được bản sắc của một doanh nghiệp phân phối đáng tin cậy.</p>
<p>Thông qua định hướng lãnh đạo đó, VinaPharma không chỉ đặt mục tiêu tăng trưởng, mà còn hướng đến việc tạo ra tác động tích cực hơn cho đối tác, hệ thống nhà thuốc và cộng đồng.</p>

<h2>Triết lý lãnh đạo</h2>
<p>Triết lý lãnh đạo tại VinaPharma được xây dựng trên ba nền tảng: chính trực trong hợp tác, kỷ luật trong vận hành và bền vững trong phát triển. Đây là những nguyên tắc xuyên suốt giúp công ty giữ vững sự rõ ràng trong định hướng và sự nhất quán trong hành động.</p>
<p>Trong một thị trường đòi hỏi ngày càng cao về chất lượng và trách nhiệm, VinaPharma lựa chọn cách phát triển chắc chắn, lấy niềm tin làm nền tảng thay vì theo đuổi những kết quả ngắn hạn. Từ việc chọn lựa thương hiệu, phát triển hệ thống đối tác cho đến triển khai thị trường, triết lý lãnh đạo luôn hướng đến giá trị thực và lợi ích lâu dài cho tất cả các bên đồng hành.</p>
<p>Chính sự nhất quán trong tư duy lãnh đạo đã góp phần định hình nên phong cách phát triển của VinaPharma: điềm tĩnh, chuẩn mực, chuyên nghiệp và có trách nhiệm với thị trường.</p>

<h2>Định hướng trong giai đoạn tiếp theo</h2>
<p>Trong giai đoạn tiếp theo, Ban lãnh đạo VinaPharma tiếp tục tập trung vào việc củng cố chất lượng danh mục, mở rộng chiều sâu hợp tác với hệ thống nhà thuốc và nâng cao năng lực phân phối trên nền tảng bền vững. Đây là định hướng giúp công ty giữ vững bản sắc của một doanh nghiệp phát triển bằng sự chọn lọc, trách nhiệm và giá trị dài hạn.</p>
<p>Cùng với đó, VinaPharma sẽ tiếp tục hoàn thiện hơn nữa nền tảng vận hành, gia tăng hiệu quả phối hợp với đối tác và mở rộng tác động tích cực đến thị trường chăm sóc sức khỏe tại Việt Nam. Mục tiêu của chúng tôi không chỉ là tăng trưởng quy mô, mà là xây dựng một hành trình phát triển đủ vững để được tin cậy lâu dài.</p>`;

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  await Settings.findOneAndUpdate(
    { key: 'about-content-3' },
    { key: 'about-content-3', value: html },
    { upsert: true, new: true }
  );
  console.log('Saved about-content-3 (Ban lãnh đạo)');
  await mongoose.disconnect();
}

seed().catch(e => { console.error(e); process.exit(1); });
