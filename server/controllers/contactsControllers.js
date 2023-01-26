import Contact from '../models/Contact.js';

const createContact = async (req, res) => {
  try {
    console.log('OK');
    const newContact = await Contact.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { contact: newContact },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export { createContact };
