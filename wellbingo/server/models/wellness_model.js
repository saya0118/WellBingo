const mongoose = require("mongoose");
const { Schema } = mongoose;

const wellnessSchema = new Schema({
    text: String,
});

mongoose.model('wellness', wellnessSchema);


