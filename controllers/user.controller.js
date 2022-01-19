var User = require("../models/user");

exports.findUserByName = (req, res) => {
  const name = req.params.username;

  User.findOne({ username: name })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "User not found with name: " + name });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with name: " + name });
    });
};


exports.findUserById = (req, res) => {
  const id = req.params.id;

  User.findById(req.params.id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "User not found with id: " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id: " + id });
    });
};


exports.findUsers = (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users.",
      });
    });
};


exports.createNewUser = (req, res) => {

  const userData = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  userData
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User.",
      });
    });
};


exports.updateByName = (req, res) => {

  const name = req.params.username;

  User.findOneAndUpdate(
    {
      username: req.params.username
    },
    {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    },
    {
      new: true
    }
  )
    .then(data => {
      if (!data)
        res.status(404).send({ message: "User not found with name: " + name });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with name: " + name });
    });
};


exports.updateById = (req, res) => {
  const id = req.params.id;

  User.findByIdAndUpdate(
    {
      _id: req.params.id
    },
    {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    },
    {
      new: true
    }
  )
    .then(data => {
      if (!data)
        res.status(404).send({ message: "User not found with id: " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id: " + id });
    });
};


exports.deleteUserById = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(req.params.id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "User not found with id: " + id });
      else res.send("user deleted with id :" + id);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id: " + id });
    });
};
