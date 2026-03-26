/**
 * update-activities-grid.js
 * Cập nhật layout grid ảnh trong activities-content-0..3 theo thuật toán mới:
 * chẵn chia đều, lẻ hàng cuối tự lấp đầy chiều rộng
 */
require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGODB_URI || process.env.MONGO_URI;
if (!MONGO_URI) { console.error('MONGODB_URI not set'); process.exit(1); }

const Settings = mongoose.model('Settings', new mongoose.Schema({
  key: String, value: mongoose.Schema.Types.Mixed
}, { timestamps: true }));

// ── Layout algorithm (giống makeImgAutoGrid ở client) ──
function calcRows(n) {
  if (n <= 3) return [n];
  if (n === 4) return [2, 2];
  if (n === 9) return [3, 3, 3];
  const tc = n <= 6 ? 3 : 4;
  const rows = [];
  let r = n;
  while (r > tc) { rows.push(tc); r -= tc; }
  if (r > 0) rows.push(r);
  return rows;
}

function makeAutoGridHtml(urls) {
  if (!urls.length) return '';
  const rows = calcRows(urls.length);
  let idx = 0;
  let html = '<div style="margin:1.2rem 0">';
  rows.forEach(function(cols, ri) {
    const mb = ri < rows.length - 1 ? '.7rem' : '0';
    if (cols === 1) {
      html += `<img src="${urls[idx++]}" style="width:100%;border-radius:.5rem;display:block;margin-bottom:${mb}">`;
    } else {
      html += `<div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:.7rem;margin-bottom:${mb}">`;
      for (let c = 0; c < cols; c++) {
        html += `<img src="${urls[idx++]}" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:.5rem;display:block">`;
      }
      html += '</div>';
    }
  });
  html += '</div>';
  return html;
}

// ── Parse: tìm tất cả div grid cũ và extract img srcs ──
function rebuildGrids(html) {
  // Match div có display:grid trong style (single-level, không lồng nhau)
  // Pattern: <div style="display:grid;...">...(img tags)...</div>
  const result = html.replace(
    /<div style="display:grid;[^"]*">(<img[^>]*>)+<\/div>/g,
    function(match) {
      // Extract all src values
      const srcs = [];
      const imgRe = /<img[^>]+src="([^"]+)"/g;
      let m;
      while ((m = imgRe.exec(match)) !== null) {
        srcs.push(m[1]);
      }
      if (!srcs.length) return match;
      const newHtml = makeAutoGridHtml(srcs);
      console.log(`  Grid ${srcs.length} ảnh → rows: [${calcRows(srcs.length).join(',')}]`);
      return newHtml;
    }
  );
  return result;
}

async function run() {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB\n');

  const keys = ['activities-content-0', 'activities-content-1', 'activities-content-2', 'activities-content-3'];

  for (const key of keys) {
    const doc = await Settings.findOne({ key });
    if (!doc || !doc.value) {
      console.log(`${key}: không có nội dung, bỏ qua`);
      continue;
    }
    console.log(`${key}:`);
    const newHtml = rebuildGrids(doc.value);
    if (newHtml === doc.value) {
      console.log('  Không có thay đổi\n');
      continue;
    }
    doc.value = newHtml;
    await doc.save();
    console.log('  ✓ Đã cập nhật\n');
  }

  console.log('Xong!');
  await mongoose.disconnect();
}

run().catch(function(err) { console.error(err); process.exit(1); });
