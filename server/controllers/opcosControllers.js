import Opco from '../models/Opco.js';

const getAllOpcos = async (req, res, next) => {
  try {
    const opcos = await Opco.find();

    res.status(200).json({
      status: 'success',
      result: opcos.length,
      data: { opcos },
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    });
  }
};

export { getAllOpcos };
