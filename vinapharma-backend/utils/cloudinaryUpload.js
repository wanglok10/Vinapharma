const multer = require('multer');
const path   = require('path');
const fs     = require('fs');

function createUpload(folder, sizeMB = 20) {
  const uploadDir = path.join(__dirname, '..', 'uploads', folder);
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
      const ext  = path.extname(file.originalname);
      const name = Date.now() + '-' + Math.round(Math.random() * 1e6) + ext;
      cb(null, name);
    },
  });

  return multer({ storage, limits: { fileSize: sizeMB * 1024 * 1024 } });
}

// Helper dùng trong routes để lấy URL
function fileUrl(req, file, folder) {
  return `${req.protocol}://${req.get('host')}/uploads/${folder}/${file.filename}`;
}

module.exports = { createUpload, fileUrl };
