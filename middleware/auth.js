module.exports = function auth(req, res, next) {
  const token = req.headers['authorization'];
  console.log('Token:', token); // DEBUG line

  if (!token || token !== 'Bearer mysecrettoken') {
    return res.status(401).json({ error: 'Unauthorized. Token missing or invalid.' });
  }

  next();
};
