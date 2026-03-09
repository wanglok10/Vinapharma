const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  ho_ten: {
    type: String,
    required: [true, 'Vui lòng nhập họ tên'],
    trim: true
  },
  dien_thoai: {
    type: String,
    required: [true, 'Vui lòng nhập số điện thoại'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Vui lòng nhập email'],
    lowercase: true,
    trim: true
  },
  chu_de: {
    type: String,
    enum: ['Tư vấn sản phẩm', 'Đặt hàng số lượng lớn', 'Đăng ký đại lý', 'Khiếu nại / Phản hồi', 'Khác'],
    default: 'Tư vấn sản phẩm'
  },
  noi_dung: {
    type: String,
    required: [true, 'Vui lòng nhập nội dung'],
    trim: true
  },
  status: {
    type: String,
    enum: ['Chưa xử lý', 'Đang xử lý', 'Đã xử lý'],
    default: 'Chưa xử lý'
  },
  note: {
    type: String // Ghi chú nội bộ của admin
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', contactSchema);
