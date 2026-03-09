const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  code:        { type: String, required: true, unique: true, trim: true }, // VD: TH1
  name:        { type: String, required: true, trim: true },               // VD: VitaNature
  description: { type: String, default: '' },
  logo:        { type: String, default: '' },
  active:      { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Brand', brandSchema);
