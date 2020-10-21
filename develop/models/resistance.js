const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Name of resistance exercise required."
    },
    weight_lbs: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    reps: {
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

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;