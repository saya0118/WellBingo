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
const keys = require("./config/db.config");

require("./models/index");

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to the database")
}).catch(err => {
    console.log("Cannot connect to the database", err)
    process.exit();
})


const app = express();

// const corsOptions = {
//     origin: "http://localhost:3000"
// }
//
// app.use(cors(corsOptions));

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


const todo = require("./routes/todo-router");;
app.use('/api', todo);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})
