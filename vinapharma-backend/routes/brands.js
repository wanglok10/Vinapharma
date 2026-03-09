const express  = require('express');
const router   = express.Router();
const Brand    = require('../models/Brand');
const { protect, adminOnly } = require('../middleware/auth');

// GET /api/brands — public
router.get('/', async (req, res) => {
  try {
    const brands = await Brand.find().sort({ code: 1 });
    res.json({ success: true, data: brands });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/brands — admin
router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const { code, name, description, active } = req.body;
    if (!code || !name) return res.status(400).json({ success: false, message: 'Thiếu code hoặc tên' });
    const brand = await Brand.create({ code: code.toUpperCase(), name, description, active });
    res.json({ success: true, data: brand });
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ success: false, message: 'Mã thương hiệu đã tồn tại' });
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT /api/brands/:id — admin
router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const { code, name, description, active } = req.body;
    const brand = await Brand.findByIdAndUpdate(
      req.params.id,
      { code: code?.toUpperCase(), name, description, active },
      { new: true, runValidators: true }
    );
    if (!brand) return res.status(404).json({ success: false, message: 'Không tìm thấy' });
    res.json({ success: true, data: brand });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE /api/brands/:id — admin
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    await Brand.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Đã xóa thương hiệu' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
