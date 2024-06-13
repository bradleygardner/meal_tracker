const isLoggedIn = (req, res, next) => {
    //req.user ? next() : res.sendStatus(401);
    req.isAuthenticated() ? next() : res.sendStatus(401);
}
module.exports = {
    isLoggedIn
};