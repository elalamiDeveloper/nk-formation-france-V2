import Formation from '../models/formationModel.js';

const createFormation = async (req, res, next) => {
  try {
    const newFormation = await Formation.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { newFormation },
    });
  } catch (err) {
    console.log(err.message);
  }
};

const getAllFormations = async (req, res, next) => {
  try {
    const formations = await Formation.find();
    console.log(formations);

    res.status(200).json({
      status: 'success',
      result: formations.length,
      data: { formations },
    });
  } catch (err) {
    console.log(err.message);
  }
};

const getFormation = async (req, res, next) => {
  try {
    const formationID = req.params.id;
    const formation = await Formation.findById(formationID);

    res.status(200).json({ status: 'success', data: { formation } });
  } catch (err) {
    console.log(err.message);
  }
};

const updateFormation = async (req, res, next) => {
  try {
    const formationID = req.params.id;
    const formation = await Tour.findByIdAndUpdate(formationID, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ status: 'success', data: { formation } });
  } catch (err) {
    console.log(err.message);
  }
};

const deleteFormation = async (req, res, next) => {
  try {
    const formationID = req.params.id;
    await Formation.findByIdAndDelete(formationID);

    res.status(204).json({
      status: 'success',
      data: { message: null },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export {
  createFormation,
  getAllFormations,
  getFormation,
  updateFormation,
  deleteFormation,
};
