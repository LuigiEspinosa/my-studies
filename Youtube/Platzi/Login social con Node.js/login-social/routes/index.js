exports.index = function(req, res) {
  res.render('index', {
    title: 'Login Social con Passport.js',
    user: req.user
  });
};
