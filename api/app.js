var db = require("./db");
var express = require("express");
var app = express();
const cors = require("cors");

const corsOption = {
  origin: ["http://localhost:3000"],
};
app.use(cors());

app.listen(3100, () => {
  console.log("Server running on port 3100");
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

app.get("/italy", (req, res, next) => {
  gameResults = db.italy.map((item) =>
    item.op1 === req.query.op1 || item.op2 === req.query.op1
      ? item.op1 + "  " + item.result + "  " + item.op2
      : next
  );
  res.json(gameResults);
});

app.get("/spain", (req, res, next) => {
  gameResults = db.spain.map((item) =>
    item.op1 === req.query.op1 || item.op2 === req.query.op1
      ? item.op1 + "  " + item.result + "  " + item.op2
      : next
  );
  res.json(gameResults);
});
