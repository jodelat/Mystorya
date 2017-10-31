var db = require("../models");
var fs = require("fs");

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    db.User.findAll({
      include: [db.Story]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.get("/api/user/username/:username", function(req, res) {
    db.User.findOne({
      where: {
        userName: req.params.username
      },
      include: [db.Story]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.get("/api/user/id/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Story]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  app.put("/api/user", function(req, res) {
    db.User.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(result) {
      res.json(result);
    });
  });

  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

};
