const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const loginRouter = require('./routes/login');
const homeRouter = require('./routes/mainpage');
var bodyParser = require('body-parser');
const { status } = require("express/lib/response");


app.listen(port, () => {
  console.log("Server Started...");
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
mongoose.connect(
    "mongodb://localhost:27017/",
    { useUnifiedTopology: true }
);


const User = require('./models/user.js');

// // Create schema
// const feedSchecma = mongoose.Schema({
//     username: String,
//     email: String,
//     password: String
// });
  
// // Making a modal on our already
// // defined schema
// const feedModal = mongoose
//     .model('feeds', feedSchecma);
  
// // Handling get request
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
            res.render('login',
{ msg: "Your feedback successfully saved." });
        })
        .catch(err => {
            res.render('login', 
                { msg: "Check Details." });
        });
})






// app.post("/register", function (req, res) {
//     console.log("hellllooo")
//     console.log(req.body.username);
//     res.render('login');
// })