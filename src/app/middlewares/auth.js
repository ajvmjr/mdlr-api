const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  async auth(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.sendStatus(401);
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
      const data = jwt.verify(token, process.env.SECRET_KEY);
      req.userId = data.user.id;
      next();
    } catch (e) {
      res.sendStatus(401);
    }
  },
};
