const express  = require('express');
const router   = express.Router();
const Banner   = require('../models/Banner');
const { protect, adminOnly } = require('../middleware/auth');
const { createUpload } = require('../utils/cloudinaryUpload');

const upload = createUpload('banners', 5);
const uploadFields = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'imageMobile', maxCount: 1 }
]);

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
router.post('/', protect, adminOnly, uploadFields, async (req, res) => {
  try {
    const files = req.files || {};
    if (!files.image) return res.status(400).json({ success: false, message: 'Vui lòng upload ảnh' });
    const data = { ...req.body, image: files.image[0].path };
    if (files.imageMobile) data.imageMobile = files.imageMobile[0].path;
    const banner = await Banner.create(data);
    res.status(201).json({ success: true, message: 'Thêm banner thành công', data: banner });
  } catch (e) { res.status(400).json({ success: false, message: e.message }); }
});

// PUT /api/banners/:id - Sửa banner (admin)
router.put('/:id', protect, adminOnly, uploadFields, async (req, res) => {
  try {
    const files = req.files || {};
    const update = { ...req.body };
    if (files.image) update.image = files.image[0].path;
    if (files.imageMobile) update.imageMobile = files.imageMobile[0].path;
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
    res.json({ success: true, message: 'Đã xóa banner' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

module.exports = router;
