require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const userRoutes = require("./routes/user");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/gogaga", userRoutes);

app.get("/", (req, res, next) => {
  res.redirect("/gogaga/list");
});
app.get("/*", (req, res, next) => {
  res.render("404", {
    pageTitle: "404: Page Not Found",
    path: "404"
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server Listening on Port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
