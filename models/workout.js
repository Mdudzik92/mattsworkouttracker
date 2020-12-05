const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {type: String, required: "Type of workout"},
            name: {type: String, required: "Exercise name"},
            duration: {type: Number, required: "Duration"},
            weight: {type: Number},
            reps: {type: Number},
            sets: {type: Number},
            distance: {type: Number},
        }
    ]
},
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;