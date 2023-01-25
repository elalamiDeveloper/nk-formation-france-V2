const createRequestTime = (req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
};

export { createRequestTime };
