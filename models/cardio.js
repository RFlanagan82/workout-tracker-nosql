const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Name of cardio exercise required."
    },
    distance_miles: {
        type: Number,
        required: true
    },
    duration_mins: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
      },

});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;