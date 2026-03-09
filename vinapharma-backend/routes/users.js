const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const { protect, adminOnly } = require('../middleware/auth');

// GET all users (admin)
router.get('/', protect, adminOnly, async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json({ success: true, data: users });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// PUT update user (admin)
router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const { name, email, phone, role } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { name, email, phone, role }, { new: true });
    if (!user) return res.status(404).json({ success: false, message: 'Không tìm thấy user' });
    res.json({ success: true, data: user });
  } catch (e) { res.status(400).json({ success: false, message: e.message }); }
});

// DELETE user (admin)
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Đã xóa người dùng' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

// PUT update own profile
router.put('/me/profile', protect, async (req, res) => {
  try {
    const { name, phone, address } = req.body;
    const user = await User.findByIdAndUpdate(req.user._id, { name, phone, address }, { new: true });
    res.json({ success: true, data: user });
  } catch (e) { res.status(400).json({ success: false, message: e.message }); }
});

module.exports = router;
