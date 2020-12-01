const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// COLLECTION for db
// objects for each required field
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        name: {
            type: String,
            trim: true,
            required: "Exercise Name"
          },
        type: {
          type: String,
          trim: true,
          required: "Please enter exercise type"
        },
        duration: {
          type: Number,
          required: "Please enter duration of workout"
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
    ],
    total: {
        type: Number,
        default: 0,
    }
  });


const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
