const routes = require("express").Router();

const FarmerController = require("./app/controllers/FarmerController");

routes.get("/api/farmers/:s", FarmerController.findByNameOrDocNumber);

routes.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/dist/bayer-app/index.html");
});

module.exports = routes;
