const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoURI = 'mongodb+srv://wellbingo:wellbingo@cluster0.jier5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

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

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
})
