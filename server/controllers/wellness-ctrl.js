const mongoose = require('mongoose');

let Wellness = mongoose.model('wellness');

getAllItems = async(req, res) => {
    await Wellness.find({}, (err, data) => {

        if(err) {
            return res.status(400).json({ success: false, error: err })
        }

        if(!data.length) {
            return res.status(404).json({ success: false, error: `Wellness not found` })
        }

        return res.status(200).json({ success: true, items: data });
    }).clone().catch(err => console.log(err));
}

module.exports = {
    getAllItems,
}