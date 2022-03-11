// node.js (Express.js)
// mongoose (node + mongoDB)
///////////////////////////////////////////////////////
// What we do are:
//     – import express, body-parser and cors modules:
//      Express is for building the Rest apis
//      body-parser helps to parse the request and create the req.body object
//      cors provides Express middleware to enable CORS with various options.
//
//     – create an Express app, then add body-parser and cors middlewares using app.use() method. Notice that we set origin: http://localhost:8081.
//     – define a GET route which is simple for test.
//     – listen on port 8080 for incoming requests.
//
//     Now let’s run the app with command: node server.js.
//     Open your browser with url http://localhost:8080/, you will see:
///////////////////////////////////////////////////////

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./models/wellness_model");

const MONGO_URI =
  "mongodb+srv://wellbingo:wellbingo@cluster0.jier5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Cannot connect to the database", err);
    process.exit();
  });

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const wellness = require("./routes/wellness-router");
app.use("/api", wellness);

const PORT = 7777;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
