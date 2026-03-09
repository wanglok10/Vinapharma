const express = require('express');
const router  = express.Router();
const Post    = require('../models/Post');
const { protect, adminOnly } = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query;
    const filter = { published: true };
    if (category) filter.category = category;
    if (search) filter.title = { $regex: search, $options: 'i' };
    const skip = (page - 1) * limit;
    const total = await Post.countDocuments(filter);
    const posts = await Post.find(filter).populate('author', 'name').sort({ publishedAt: -1 }).skip(skip).limit(Number(limit)).select('-content');
    res.json({ success: true, total, page: Number(page), totalPages: Math.ceil(total / limit), data: posts });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

router.get('/admin/all', protect, adminOnly, async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
    res.json({ success: true, total: posts.length, data: posts });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } }, { new: true }).populate('author', 'name');
    if (!post || !post.published) return res.status(404).json({ success: false, message: 'Không tìm thấy bài viết' });
    res.json({ success: true, data: post });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, author: req.user._id });
    res.status(201).json({ success: true, message: 'Đăng bài thành công', data: post });
  } catch (e) { res.status(400).json({ success: false, message: e.message }); }
});

router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!post) return res.status(404).json({ success: false, message: 'Không tìm thấy bài viết' });
    res.json({ success: true, message: 'Cập nhật thành công', data: post });
  } catch (e) { res.status(400).json({ success: false, message: e.message }); }
});

router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Đã xóa bài viết' });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
});

module.exports = router;
