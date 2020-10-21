const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Set up localhost server
const PORT = process.env.PORT || 3000;

// ****Bring in model files here:*****
// const exercisePlan = require("./models")

// ****Bring in controller files here:*****
// const cardioController = require("./controllers/cardioController");
// const resistanceController = require("./controllers/resistanceController");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Mongoose Middleware
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/exercisePlan",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.post("/submit", ({ body }, res) => {
    exercisePlan.create(body)
      .then(dbexercisePlan => {
        res.json(dbexercisePlan);
      })
      .catch(err => {
        res.json(err);
      });
  });


// *****Use the Controller Files ****
// app.use(cardioController);
// app.use(resistanceController);


// APP Listener
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });