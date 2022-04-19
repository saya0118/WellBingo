const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const mongoURI = process.env.REACT_APP_MONGO_API;

require('./models/index');

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected to the database.');
}).catch(err => {
    console.log('Cannot connect to the database.');
    process.exit();
});

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

const todo = require('./routes/todo-router');
app.use('/api', todo);

const PORT = process.env.mongoURI || 8080;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
})
