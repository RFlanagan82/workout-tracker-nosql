const mongoose = require("mongoose");

const Schema = mongoose. Schema;

const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },

    exercises: [
        {
            type: {
                type: String,
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
})

const Exercise = mongoose.model("Exercise", ExerciseSchema )

module.exports = Exercise