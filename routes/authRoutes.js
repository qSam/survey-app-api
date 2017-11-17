const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      scope: 'https://www.googleapis.com/auth/plus.login'
    })
  );

  app.get('/api/logout', (req, res) => {
    //Create logout functuin which is added by passport
    req.logout();
    res.send(req.user);
  });
  app.get('/api/currentuser', (req, res) => {
    res.send(req.user);
  });
};
