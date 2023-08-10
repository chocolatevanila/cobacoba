const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("home/index");
});

route.get("/admin", (req, res) => {
  res.render("admin/index");
});
module.exports = route;
