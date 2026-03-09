// Script tạo dữ liệu mẫu ban đầu
// Chạy: node seed.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const User = require('./models/User');
const Product = require('./models/Product');
const Post = require('./models/Post');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Kết nối MongoDB thành công');

    // Xóa dữ liệu cũ
    await User.deleteMany();
    await Product.deleteMany();
    await Post.deleteMany();
    console.log('🗑️  Đã xóa dữ liệu cũ');

    // Tạo tài khoản Admin
    const admin = await User.create({
      name: 'Admin Vinapharma',
      email: 'admin@vinapharma.vn',
      password: 'Admin@123456',
      role: 'admin'
    });
    console.log('👤 Tạo admin:', admin.email);

    // Tạo sản phẩm (dùng create từng cái để pre-save chạy slug)
    const productList = [
      { name: 'VitaImmune Pro', brand: 'TH1', category: 'Tăng đề kháng', description: 'Tăng cường hệ miễn dịch với chiết xuất thảo dược tự nhiên', weight: '60 viên · 500mg', price: 350000, originalPrice: 420000, badge: 'Bán chạy', icon: '🫁', featured: true },
      { name: 'LiverCare Gold', brand: 'TH2', category: 'Khác', description: 'Bảo vệ và tái tạo tế bào gan hiệu quả', weight: '90 viên · 400mg', price: 420000, icon: '🍯', featured: true },
      { name: 'OmegaFlex Marine', brand: 'TH3', category: 'Xương khớp', description: 'Omega-3 từ cá biển sâu, hỗ trợ xương khớp linh hoạt', weight: '60 viên · 1000mg', price: 380000, badge: 'Mới', icon: '🌊' },
      { name: 'AquaCollagen Plus', brand: 'TH4', category: 'Làm đẹp', description: 'Collagen thủy phân kết hợp Vitamin C và Hyaluronic Acid', weight: '30 gói · 10g', price: 490000, originalPrice: 550000, icon: '💧', featured: true },
      { name: 'CardioGold Omega', brand: 'TH5', category: 'Tim mạch', description: 'Bảo vệ tim mạch toàn diện với CoQ10 và Omega-3', weight: '90 viên · 600mg', price: 520000, badge: 'Hot', icon: '⭐' },
      { name: 'SleepWell Natural', brand: 'TH1', category: 'Giấc ngủ', description: 'Cải thiện chất lượng giấc ngủ từ thảo dược tự nhiên', weight: '60 viên · 300mg', price: 290000, icon: '🌙' },
      { name: 'JointFlex Plus', brand: 'TH2', category: 'Xương khớp', description: 'Hỗ trợ tái tạo sụn khớp, giảm đau xương khớp', weight: '120 viên · 500mg', price: 450000, icon: '🦴' },
      { name: 'BrainBoost Elite', brand: 'TH3', category: 'Trí não', description: 'Tăng cường trí nhớ và khả năng tập trung', weight: '60 viên · 450mg', price: 390000, originalPrice: 480000, icon: '🧠' },
    ];
    for (const p of productList) await Product.create(p);
    console.log('📦 Tạo ' + productList.length + ' sản phẩm mẫu');

    // Tạo bài viết mẫu
    const postList = [
      { title: '5 thực phẩm chức năng thiết yếu cho người trên 40 tuổi', category: 'Dinh dưỡng', excerpt: 'Khi bước qua tuổi 40, cơ thể cần nhiều hỗ trợ dinh dưỡng hơn...', content: '<p>Khi bước qua tuổi 40, cơ thể bắt đầu có những thay đổi đáng kể...</p>', icon: '🌿', readTime: 5, author: admin._id, published: true, publishedAt: new Date('2026-02-15') },
      { title: 'Vitamin D va tam quan trong voi he mien dich mua he', category: 'Sức khỏe', excerpt: 'Người Việt dù sống ở xứ nhiệt đới vẫn có thể thiếu vitamin D...', content: '<p>Vitamin D đóng vai trò cực kỳ quan trọng...</p>', icon: '☀️', readTime: 4, author: admin._id, published: true, publishedAt: new Date('2026-02-08') },
      { title: 'Ket hop thuc pham chuc nang voi loi song lanh manh', category: 'Lối sống', excerpt: 'TPCN hiệu quả nhất khi được dùng đúng cách...', content: '<p>Để đạt hiệu quả tối ưu từ thực phẩm chức năng...</p>', icon: '🧘', readTime: 6, author: admin._id, published: true, publishedAt: new Date('2026-02-01') },
    ];
    for (const p of postList) await Post.create(p);
    console.log('📝 Tạo ' + postList.length + ' bài viết mẫu');

    console.log('\n✅ Seed data thành công!');
    console.log('─────────────────────────────');
    console.log('🔑 Tài khoản admin:');
    console.log('   Email:    admin@vinapharma.vn');
    console.log('   Password: Admin@123456');
    console.log('─────────────────────────────\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Lỗi seed data:', error.message);
    process.exit(1);
  }
};

seedData();
