require("dotenv").config()
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Set up localhost server
const PORT = process.env.PORT || 3000;

// ****Bring in model files here:*****
const db = require("./models");

app.use(logger("dev"));
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Mongoose Middleware
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );

// const connection = mongoose.connection;

// connection.on("connected", () => {
//   console.log("Mongoose successfully connected.");
// });

// connection.on("error", (err) => {
//   console.log("Mongoose connection error: ", err);
// });

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

// APP Listener
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

