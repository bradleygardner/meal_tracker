const passport = require('passport');
const mongoose = require('mongoose')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require('../models/User')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    passReqToCallback: true
},
    async (request, accessToken, refreshToken, profile, done) => {
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName
        }
        try{
            let user = await User.findOne({googleId: profile.id})
            if(user){
                done(null, user)
            } else {
                user = await User.create(newUser)
                done(null, user)
            }
        } catch(err) {
            console.error(err);
        }
    }
));

passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function(user, done){
    done(null, user);
});