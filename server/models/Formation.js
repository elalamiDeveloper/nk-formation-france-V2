import mongoose from 'mongoose';

const formationSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  duration: {
    type: Number,
    required: true,
  },

  public: {
    type: [String],
    required: true,
  },

  preRequis: {
    type: [String],
    required: true,
  },

  objectifs: {
    type: [String],
    default: [],
  },

  chapitres: {
    type: [{}],
    default: [],
  },
});

const Formation = mongoose.model('Formation', formationSchema);

export default Formation;
