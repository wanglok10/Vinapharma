const express  = require('express');
const router   = express.Router();
const Settings = require('../models/Settings');
const { protect, adminOnly } = require('../middleware/auth');
const { createUpload } = require('../utils/cloudinaryUpload');

const upload   = createUpload('about', 5);
const uploadBg = createUpload('backgrounds', 10);

// GET /api/settings/:key  — public
router.get('/:key', async (req, res) => {
  try {
    const doc = await Settings.findOne({ key: req.params.key });
    res.json({ success: true, data: doc ? doc.value : null });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// PUT /api/settings/:key  — admin, update hoặc tạo mới
router.put('/:key', protect, adminOnly, async (req, res) => {
  try {
    const doc = await Settings.findOneAndUpdate(
      { key: req.params.key },
      { value: req.body.value },
      { new: true, upsert: true }
    );
    res.json({ success: true, data: doc.value });
  } catch (e) { res.status(400).json({ success: false, message: e.message }); }
});

// POST /api/settings/upload-image  — upload ảnh về Cloudinary
router.post('/upload-image', protect, adminOnly, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: 'Không có file' });
    res.json({ success: true, url: req.file.path });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// POST /api/settings/upload-bg  — upload hình nền (background) về Cloudinary & lưu vào Settings
router.post('/upload-bg', protect, adminOnly, uploadBg.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: 'Không có file' });
    const key = req.body.key || 'hero_bg';
    await Settings.findOneAndUpdate(
      { key },
      { value: req.file.path },
      { new: true, upsert: true }
    );
    res.json({ success: true, url: req.file.path });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

module.exports = router;
