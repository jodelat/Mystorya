var db = require("../models");
var fs = require("fs");

module.exports = function(app) {
  app.get("/api/story", function(req, res) {
    db.Story.findAll({
      include: [db.User]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.get("/api/story/id/:id", function(req, res) {
    db.Story.findAll({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/storyID", function(req, res) {
    db.Story.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  app.put("/api/storyID", function(req, res) {
    db.User.update(req.body)
    .then(function(result) {
      res.json(result);
    });
  });
};
