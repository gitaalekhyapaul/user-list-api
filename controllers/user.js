const User = require("../models/user");

exports.getAdd = (req, res, next) => {
  res.render("add-user");
};

exports.getList = async (req, res, next) => {
  const users = await User.find().select("name age about _id");
  res.render("list-user", {
    users: users,
  });
};

exports.postAdd = async (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const about = req.body.about;
  const newUser = new User({
    name: name,
    age: age,
    about: about,
  });
  const result = await newUser.save();
  res.redirect("/");
};
