const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const loginRouter = require('./routes/login');
var passport = require('passport');
var LocalStrategy = require('passport-local');
const session = require("express-session");
const User = require('./models/user.js');
var bcrypt = require('bcryptjs');

require('./config/db.config');
require('./config/auth.config');
require('./routes/user.routes.js')(app);

//swagger setup
const {swaggerUi, swaggerSpecs} = require('./config/swagger.config');

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs, { explorer: true })
);

app.listen(port, () => {
  console.log("Server Started On.. http://localhost:" + port);
});

app.use('/', loginRouter);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'pug');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  console.log("serializing " + user.username);
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  console.log("deserializing " + obj);
  done(null, obj);
});


//Use the LocalStrategy within Passport to login users.
passport.use('local-signin', new LocalStrategy(
  { passReqToCallback: true }, //allows us to pass back the request to the callback
  function (req, username, password, done) {
    localAuth(username, password)
      .then(function (user) {
        if (user) {
          console.log("LOGGED IN AS: " + user.username);
          req.session.success = 'You are successfully logged in ' + user.username + '!';
          done(null, user);
        }
        if (!user) {
          console.log("COULD NOT LOG IN");
          req.session.error = 'Could not log user in. Please try again.'; //inform user could not log them in
          done(null, user);
        }
      })
      .fail(function (err) {
        console.log(err.body);
      });
  }
));


app.post("/register",
  function (req, res) {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      const userData = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
      });

      userData.save()
        .then(data => {
          res.render('login', { msg: "Your data successfully saved." });
        })
        .catch(err => {
          res.render('login', { msg: "Check Details." });
        });
    })
      .catch(error => {
        res.status(500).json({
          error: error
        });
      });
  });

app.post('/login', function (req, res, next) {

  passport.authenticate('local-signin', function (err, user) {
    if (err) { return next(err); }
    if (!user) { return res.render('login', { message: "Wrong data! Please check again.." }); }

    res.render('welcome', { title: 'welcome', message: req.body.username });

  })(req, res, next);

});

module.exports = app

