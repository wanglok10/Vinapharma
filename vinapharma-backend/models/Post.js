const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Vui lòng nhập tiêu đề bài viết'],
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Dinh dưỡng', 'Sức khỏe', 'Lối sống', 'Thể hình', 'Làm đẹp', 'Tim mạch', 'Khác']
  },
  excerpt: {
    type: String, // Tóm tắt ngắn
    required: [true, 'Vui lòng nhập tóm tắt']
  },
  content: {
    type: String, // Nội dung đầy đủ (HTML)
    required: [true, 'Vui lòng nhập nội dung']
  },
  thumbnail: {
    type: String, // URL ảnh bìa
    default: ''
  },
  icon: {
    type: String, // emoji fallback
    default: '📰'
  },
  readTime: {
    type: Number, // phút đọc
    default: 5
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  published: {
    type: Boolean,
    default: false
  },
  publishedAt: {
    type: Date
  },
  views: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Tự tạo slug từ tiêu đề
postSchema.pre('save', function() {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  // Tự set publishedAt khi publish
  if (this.isModified('published') && this.published && !this.publishedAt) {
    this.publishedAt = new Date();
  }
});

module.exports = mongoose.model('Post', postSchema);
