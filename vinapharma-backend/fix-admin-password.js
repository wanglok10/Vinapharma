/**
 * Script reset password admin
 * Chạy: node fix-admin-password.js
 */
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');

async function fix() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('✅ Kết nối MongoDB');

  const col    = mongoose.connection.db.collection('users');
  const hashed = await bcrypt.hash('vinapharma123456', 12);

  // Cập nhật tất cả user có password plain text
  const users = await col.find({}).toArray();
  let fixed = 0;

  for (const u of users) {
    if (u.password && !u.password.startsWith('$2')) {
      await col.updateOne({ _id: u._id }, { $set: { password: hashed } });
      console.log(`✅ Fixed: ${u.email || u.name}`);
      fixed++;
    }
  }

  if (fixed === 0) console.log('ℹ️  Không có password nào cần fix');
  else console.log(`✅ Đã fix ${fixed} tài khoản → password: vinapharma123456`);

  process.exit(0);
}

fix().catch(e => { console.error('❌', e.message); process.exit(1); });
