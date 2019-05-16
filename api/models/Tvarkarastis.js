const mongoose = require('mongoose');

const TvarkarastisSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  diena: { type: String },
  laikas: { type: String },
  adresas: { type: String },
  miestas: { type: String },
  dalykas: { type: String }
});

module.exports = mongoose.model('Tvarkarastis', TvarkarastisSchema);
