const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
/* const path = require("path") */

//database connection
const PORT = process.env.PORT || 8000;

//import model workout.js -- we will be using for app
const db = require("./models")

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/dbWorkout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// requiring our API routes files
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});