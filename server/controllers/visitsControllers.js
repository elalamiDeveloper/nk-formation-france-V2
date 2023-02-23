import Visit from '../models/Visit.js';

const createVisit = async (req, res, next) => {
  try {
    const newVisit = await Visit.create(req.body);

    res.status(201).json({
      status: 'success',
      body: newVisit,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

export { createVisit };

// // Créer une route pour suivre les visites
// app.get('/track', (req, res) => {
//   const { ip, country, city, browser } = req.body;

//   // Enregistrer la visite dans la base de données
//   const visit = new Visit({ ip, country, city, browser });
//   visit.save();

//   res.sendStatus(200);
// });
