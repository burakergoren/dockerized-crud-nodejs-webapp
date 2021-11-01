const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const loginRouter = require('./routes/login');
const homeRouter = require('./routes/mainpage');
var bodyParser = require('body-parser');
const { status } = require("express/lib/response");

app.listen(port, () => {
  console.log("Server Started On.. http://localhost:" + port);
});

app.use('/', homeRouter);
app.use('/login', loginRouter);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// uri from mongo atlas cloud db
var  uri = "mongodb+srv://buraker:nodejsdemo@cluster0.5otud.mongodb.net/mongoDbTest?retryWrites=true&w=majority"

// Declare a variable named option and assign optional settings
const  options = {
    useNewUrlParser:  true,
    useUnifiedTopology:  true
};  

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
    console.log("Database connection established!");
},
err  => {
{
    console.log("Error connecting Database instance due to:", err);
}
});

require('./routes/user.routes.js')(app);

const User = require('./models/user.js');

app.get('/', function (req, res) {
    // Rendering your form
    res.render('login');
});


app.post("/register", function (req, res) {
    console.log(req.body.username);
    const userData = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    console.log(userData.email);
    userData.save()
        .then(data => {
            res.render('login', { msg: "Your data successfully saved." });
        })
        .catch(err => {
            res.render('login', { msg: "Check Details." });
        });
})
