const express = require("express");
const app = require("./app");

const clientDir = __dirname + "/client/dist/bayer-app";
app.use(express.static(clientDir));

app.listen(process.env.PORT || 3000);
