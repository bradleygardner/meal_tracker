const path = require('path')

const isLoggedIn = (req, res, next) => {
    //req.user ? next() : res.sendStatus(401);
    req.isAuthenticated() ? next() : res.sendStatus(401);
}
const isLoggedInRedirect = (req, res, next) => {
    //req.user ? next() : res.sendStatus(401);
    req.isAuthenticated() ? next() : res.sendFile(path.join(__dirname, '..', 'pages/index.html'));
}
module.exports = {
    isLoggedIn,
    isLoggedInRedirect
};