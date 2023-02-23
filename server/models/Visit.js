import mongoose from 'mongoose';

// Créer un modèle pour les visites
const visitSchema = new mongoose.Schema({
  ip: String,
  country: String,
  city: String,
  browser: String,
  date: { type: Date, default: Date.now },
});

const Visit = mongoose.model('Visit', visitSchema);

export default Visit;
