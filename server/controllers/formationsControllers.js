import Formation from '../models/Formation.js';

const createFormation = async (req, res, next) => {
  try {
    const newFormation = await Formation.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { formation: newFormation },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const getAllFormations = async (req, res, next) => {
  try {
    const formations = await Formation.find();

    res.status(200).json({
      status: 'success',
      result: formations.length,
      data: { formations },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const getFormationById = async (req, res, next) => {
  try {
    const formationID = req.params.id;
    const formation = await Formation.findById(formationID);

    res.status(200).json({
      status: 'success',
      data: { formation },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const updateFormation = async (req, res, next) => {
  try {
    const formationID = req.params.id;
    const formation = await Formation.findByIdAndUpdate(formationID, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: { formation },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const deleteFormation = async (req, res, next) => {
  try {
    const formationID = req.params.id;
    await Formation.findByIdAndDelete(formationID);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

export {
  createFormation,
  getAllFormations,
  getFormationById,
  updateFormation,
  deleteFormation,
};
