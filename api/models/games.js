const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
  team1: { type: "String", required: true },
  team2: { type: "String", required: true },
  gameResult: { type: "String", required: true },
  scorrers: { type: "String", required: true },
});

module.exports = mongoose.model("Game", GameSchema);
