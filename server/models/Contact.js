import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  prenom: {
    type: String,
    required: true,
    trim: true,
  },

  nom: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
  },

  tel: {
    type: Number,
    required: true,
    trim: true,
  },

  formationSouhaite: {
    type: String,
    required: true,
  },

  soldeCPF: {
    type: String,
    required: true,
    trim: true,
  },

  dateRappel: {
    type: Date,
    required: true,
  },

  heureRappel: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;
