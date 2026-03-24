/**
 * Fix toàn bộ vi phạm luật quảng cáo & dược phẩm VN
 * Áp dụng cho tất cả sản phẩm trong DB
 * Chạy: node fix-compliance-all.js
 */
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

// ─────────────────────────────────────────────
// BẢNG THAY THẾ — từ cụ thể → chung
// ─────────────────────────────────────────────
const replacements = [

  // ── VI PHẠM NẶNG: từ "điều trị" ──────────────────────────
  [/hỗ trợ điều trị/gi,                 'hỗ trợ cải thiện'],
  [/giúp điều trị/gi,                   'hỗ trợ cải thiện'],
  [/điều trị/gi,                        'cải thiện'],

  // ── VI PHẠM NẶNG: "chữa" ─────────────────────────────────
  [/chữa bệnh/gi,                       'cải thiện sức khỏe'],
  [/chữa/gi,                            'cải thiện'],
  [/hỗ trợ trị/gi,                      'hỗ trợ cải thiện'],

  // ── ĐỘT QUỴ — không được tuyên bố phòng ngừa ─────────────
  [/phòng ngừa đột quỵ/gi,              'hỗ trợ tuần hoàn máu não'],
  [/ngăn ngừa đột quỵ/gi,               'hỗ trợ tuần hoàn máu não'],
  [/hỗ trợ phòng ngừa đột quỵ/gi,       'hỗ trợ tuần hoàn máu não'],

  // ── BÉO PHÌ — không được tuyên bố phòng ngừa bệnh ────────
  [/phòng ngừa béo phì/gi,              'hỗ trợ duy trì cân nặng ổn định'],
  [/ngăn ngừa béo phì/gi,               'hỗ trợ duy trì cân nặng ổn định'],

  // ── KHÁNG VIÊM / KHÁNG NẤM — đặc tính thuốc, không phải TPCN
  [/kháng viêm, kháng nấm/gi,           'hỗ trợ cân bằng môi trường tự nhiên'],
  [/kháng viêm và kháng nấm/gi,         'hỗ trợ cân bằng môi trường tự nhiên'],
  [/giúp kháng viêm/gi,                 'hỗ trợ giảm nguy cơ viêm'],
  [/kháng viêm/gi,                      'hỗ trợ giảm nguy cơ viêm'],
  [/kháng nấm/gi,                       'hỗ trợ cân bằng môi trường'],
  [/tiêu diệt vi khuẩn/gi,              'hỗ trợ giảm vi khuẩn có hại'],
  [/ức chế vi khuẩn/gi,                 'hỗ trợ kiểm soát vi khuẩn'],

  // ── BỆNH CỤ THỂ — không được dùng tên bệnh trực tiếp ─────
  [/trẻ em ADHD/gi,                     'trẻ em cần hỗ trợ tập trung'],
  [/người bệnh tiểu đường/gi,           'người có đường huyết cao'],
  [/bệnh nhân/gi,                       'người dùng'],

  // ── "NGĂN NGỪA" → "HỖ TRỢ PHÒNG NGỪA" ──────────────────
  [/ngăn ngừa/gi,                       'hỗ trợ phòng ngừa'],
  [/ngăn chặn/gi,                       'hỗ trợ giảm'],

  // ── "PHÒNG NGỪA BỆNH" → "HỖ TRỢ GIẢM NGUY CƠ" ──────────
  [/phòng ngừa bệnh/gi,                 'hỗ trợ giảm nguy cơ'],

  // ── ĐIỀU HÒA (liên quan bệnh) → "HỖ TRỢ ỔN ĐỊNH" ────────
  [/điều hòa huyết áp/gi,               'hỗ trợ ổn định huyết áp'],
  [/điều hòa đường huyết/gi,            'hỗ trợ ổn định đường huyết'],
  [/điều hòa cholesterol/gi,            'hỗ trợ ổn định cholesterol'],
  [/điều hòa hấp thu Glucose/gi,        'hỗ trợ hấp thu Glucose'],
  [/điều hòa trương lực mạch máu/gi,    'hỗ trợ trương lực mạch máu'],
  [/điều hòa hormon tuyến giáp/gi,      'hỗ trợ cân bằng hormon tuyến giáp'],
  [/điều hòa hormon/gi,                 'hỗ trợ cân bằng hormon'],
  [/tái tạo Insulin/gi,                 'hỗ trợ hoạt động của Insulin'],

  // ── "CẢI THIỆN" ĐỨC ĐẦU CÂU không có "hỗ trợ" ───────────
  // (chỉ áp dụng khi bắt đầu câu/dòng hoặc sau dấu •)
  [/(^|• )Cải thiện /gm,                '$1Hỗ trợ cải thiện '],
  [/(^|• )Tăng cường /gm,               '$1Hỗ trợ tăng cường '],
  [/(^|• )Giảm /gm,                     '$1Hỗ trợ giảm '],
  [/(^|• )Phòng ngừa /gm,               '$1Hỗ trợ phòng ngừa '],
  [/(^|• )Bảo vệ /gm,                   '$1Hỗ trợ bảo vệ '],

  // ── DƯ "HỖ TRỢ HỖ TRỢ" sau các lần thay thế ─────────────
  [/hỗ trợ hỗ trợ/gi,                   'hỗ trợ'],
];

function fixText(text) {
  if (!text) return text;
  let result = text;
  for (const [pattern, replacement] of replacements) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('✅ Kết nối MongoDB\n');

  const products = await Product.find({});
  console.log(`📦 Tổng sản phẩm: ${products.length}\n`);

  let updated = 0;

  for (const p of products) {
    const newDesc = fixText(p.description);
    const newUses = fixText(p.uses);
    const newIngredients = fixText(p.ingredients);
    const newDosage = fixText(p.dosage);

    const changed =
      newDesc !== p.description ||
      newUses !== p.uses ||
      newIngredients !== p.ingredients ||
      newDosage !== p.dosage;

    if (changed) {
      const updateObj = {};
      if (newDesc !== p.description)        updateObj.description  = newDesc;
      if (newUses !== p.uses)               updateObj.uses         = newUses;
      if (newIngredients !== p.ingredients) updateObj.ingredients  = newIngredients;
      if (newDosage !== p.dosage)           updateObj.dosage       = newDosage;

      await Product.findByIdAndUpdate(p._id, updateObj);
      console.log(`✏️  ${p.name}`);

      // In chi tiết thay đổi
      if (newDesc !== p.description) {
        console.log(`   description: "${p.description?.substring(0, 80)}..."`);
        console.log(`             → "${newDesc?.substring(0, 80)}..."`);
      }
      if (newUses !== p.uses) {
        console.log(`   uses: đã sửa`);
      }
      updated++;
    }
  }

  console.log(`\n✅ Hoàn tất! Đã cập nhật: ${updated} / ${products.length} sản phẩm`);
  await mongoose.disconnect();
}

main().catch(e => { console.error('❌', e.message); process.exit(1); });
