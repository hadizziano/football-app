const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const gamesRoute = require("./routes/games");
var cors = require('cors')
// const initializeDb = require("./db/initialize-db");
//Routes
app.use(cors());
app.use(bodyParser.json());
app.use("/games", gamesRoute);

// app.get("/", (req, res) => res.send("we are on home"));

//connect to db
// initializeDb();
mongoose.connect("mongodb://localhost:27017/football-app", () =>
  console.log("connected to db")
);

// How to listen to the server?

app.listen(3100);
