console.log("---- Starting the backend -----");

const express = require("express");
const app = express();
const medRouter = require("./route/med.route");
const farmRouter = require("./route/farm.route");
app.use("/", medRouter, farmRouter);
//app.use("/", farmRouter);

app.listen(3002, () => {
  console.log("listening on 3000");
});