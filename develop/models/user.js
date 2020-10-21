const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Your name is required."
    },
    cardio: [
        {
            type: Schema.Types.ObjectId,
            ref: "cardio"
        }
    ],
    resistance: [
        {
            type: Schema.Types.ObjectId,
            ref: "resistance"
        }
    ],
    date: {
        type: Date,
        default: Date.now
      },

});

const User = mongoose.model("User", UserSchema);

module.exports = User;