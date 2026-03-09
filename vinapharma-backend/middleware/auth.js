const jwt  = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
      token = req.headers.authorization.split(' ')[1];
    if (!token)
      return res.status(401).json({ success: false, message: 'Vui lòng đăng nhập', code: 'NO_TOKEN' });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      if (!req.user)
        return res.status(401).json({ success: false, message: 'Tài khoản không tồn tại', code: 'USER_NOT_FOUND' });
      next();
    } catch (e) {
      if (e.name === 'TokenExpiredError')
        return res.status(401).json({ success: false, message: 'Access token hết hạn', code: 'TOKEN_EXPIRED' });
      return res.status(401).json({ success: false, message: 'Token không hợp lệ', code: 'INVALID_TOKEN' });
    }
  } catch (e) {
    res.status(401).json({ success: false, message: 'Lỗi xác thực', code: 'AUTH_ERROR' });
  }
};

exports.adminOnly = (req, res, next) => {
  if (req.user.role !== 'admin')
    return res.status(403).json({ success: false, message: 'Không có quyền admin' });
  next();
};
