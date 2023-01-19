import Formation from '../models/formationModel.js';

const getAllFormations = (req, res, next) => {
  const formations = [1, 2, 3];

  res.status(200).json({
    status: 'success',
    result: formations.length,
    data: { formations },
  });
};

const createFormation = async (req, res, next) => {
  const newFormation = await Formation.create(req.body);

  res.status(200).json({
    status: 'success',
    data: { newFormation },
  });
};

export { getAllFormations, createFormation };
