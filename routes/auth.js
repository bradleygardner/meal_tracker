const passport = require('passport');
const { isLoggedIn } = require('../middleware/auth.js');
const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.sendFile('../views/index.html')
});

routes.get('/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }));


routes.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/recipes',
        failureRedirect: '/auth/failure',
    })
);

routes.get('/logout', (req, res) => {
    req.logOut();
    req.session.destroy();
    res.redirect('/home');
})
routes.get('/failure', (req, res) => {
    res.send('Bye')
});

routes.get('/protected', isLoggedIn, (req, res) => {
    res.successRedirect('/pages/recipes.html')
});
module.exports = routes;