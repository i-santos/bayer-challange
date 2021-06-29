require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const express = require("express");
const cors = require("cors");

class AppController {
  constructor() {
    this.express = express();

    this.express.use(cors());

    this.express.use((req, res, next) =>
      setTimeout(next, Number(process.env.DELAY) || 0)
    );

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new AppController().express;
