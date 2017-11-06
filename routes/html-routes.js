var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/new", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/new.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  app.get("/read", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/read.html"));
  });

  app.get("/read", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

};