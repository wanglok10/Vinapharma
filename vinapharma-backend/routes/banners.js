const express  = require('express');
const router   = express.Router();
const multer   = require('multer');
const path     = require('path');
const fs       = require('fs');
const Banner   = require('../models/Banner');
const { protect, adminOnly } = require('../middleware/auth');

// Cấu hình lưu ảnh
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, 'banner-' + Date.now() + ext);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (/jpeg|jpg|png|webp|gif/.test(path.extname(file.originalname).toLowerCase())) cb(null, true);
    else cb(new Error('Chỉ cho phép ảnh JPG, PNG, WEBP'));
  }
});

// GET /api/banners?position=hero
router.get('/', async (req, res) => {
  try {
    const { position } = req.query;
    const filter = { active: true };
    if (position) filter.position = position;
    const banners = await Banner.find(filter).sort({ order: 1 });
    res.json({ success: true, data: banners });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// POST /api/banners - Upload banner mới (admin)
router.post('/', protect, adminOnly, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: 'Vui lòng upload ảnh' });
    const imageUrl = '/uploads/' + req.file.filename;
    const banner = await Banner.create({ ...req.body, image: imageUrl });
    res.status(201).json({ success: true, message: 'Thêm banner thành công', data: banner });
  } catch (e) { res.status(400).json({ success: false, message: e.message }); }
});

// PUT /api/banners/:id - Sửa banner (admin)
router.put('/:id', protect, adminOnly, upload.single('image'), async (req, res) => {
  try {
    const update = { ...req.body };
    if (req.file) update.image = '/uploads/' + req.file.filename;
    const banner = await Banner.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!banner) return res.status(404).json({ success: false, message: 'Không tìm thấy banner' });
    res.json({ success: true, message: 'Cập nhật thành công', data: banner });
  } catch (e) { res.status(400).json({ success: false, message: e.message }); }
});

// DELETE /api/banners/:id (admin)
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    const banner = await Banner.findByIdAndDelete(req.params.id);
    if (!banner) return res.status(404).json({ success: false, message: 'Không tìm thấy banner' });
    // Xóa file ảnh
    const filePath = path.join(__dirname, '..', banner.image);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    res.json({ success: true, message: 'Đã xóa banner' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

module.exports = router;
