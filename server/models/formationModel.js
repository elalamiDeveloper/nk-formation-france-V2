import mongoose, { mongo } from 'mongoose';
import validator from 'validator';

const formationSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  duration: { type: Number, required: true },

  public: { type: [String] },

  preRequis: { type: [String] },

  objectifs: { type: [String] },

  chapitres: { type: [{}] },
});

const Formation = mongoose.model('Formation', formationSchema);

export default Formation;
