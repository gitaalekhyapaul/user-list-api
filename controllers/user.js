const User = require("../models/user");

exports.getAdd = (req, res, next) => {
  res.render("add-user", {
    pageTitle: "Add Users",
    path: "add"
  });
};

exports.getList = async (req, res, next) => {
  const users = await User.find().select("name age about _id");
  res.render("list-user", {
    pageTitle: "List Users",
    users: users,
    path: "list",
    search: false
  });
};

exports.postList = async (req, res, next) => {
  const searchName = `^${req.body.name_search}$`;
  const result = await User.find({name:{'$regex' : searchName, '$options' : 'i'}}).select("name age about _id");
  res.render("list-user", {
    pageTitle: "List Users",
    users: result,
    path: "list",
    search: true
  });
}

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

exports.deleteUser = async (req, res, next) => {
  const id = req.body.id;
  const result = await User.findByIdAndRemove(id);
  res.redirect("/");
}
