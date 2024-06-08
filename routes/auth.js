const passport = require('passport');
const { isLoggedIn } = require('../middleware/auth.js');
const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('<a href="/auth/google">Login with Google</a>')
});

routes.get('/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }));


routes.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/failure',
    })
);

routes.get('/logout', (req, res) => {
    req.logOut();
    req.session.destroy();
    res.send('GoodBye');
})
routes.get('/failure', (req, res) => {
    res.send('Bye')
});

routes.get('/protected', isLoggedIn, (req, res) => {
    res.send('Hello')
});
module.exports = routes;