const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/mattsworkouttracker',
    {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
      useFindAndModify: false
    }
  );

  app.use(require("./routes/api.js"));
  app.use(require("./routes/view.js"));

  app.listen(PORT, () => {
      console.log("Running on port " + PORT);
  });