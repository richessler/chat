module.exports = {
  ensureAuthenticated: ensureAuthenticated
}

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/')
}
