import mongoose from 'mongoose';

const opcoSchema = new mongoose.Schema({
  opcosName: {
    type: String,
    required: true,
    trim: true,
  },

  idcc: {
    type: Array,
  },
});

const Opco = mongoose.model('Opco', opcoSchema);

export default Opco;
