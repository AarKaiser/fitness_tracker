const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workout = new Schema(
  {
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "What is your exercise?",
        },
        name: {
          type: String,
          trim: true,
          required: "What is your exercise name?",
        },
        duration: {
          type: Number,
          trim: true,
          required: "What was the duration of your exercise?",
        },
        reps: {
          type: Number,
          trim: true,
          required: "How many reps did you manage?",
        },
        sets: {
          type: Number,
          trim: true,
          required: "What were the reps?",
        },
        weight: {
          type: Number,
          trim: true,
          required: "What was the weight you lifted, bro?",
        },
        distance: {
          type: Number,
          trim: true,
          required: "What was the distance of your run?",
        }
      }
    ],

    day: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

workout.virtual("totalDuration").get(function () {
  let exerciseDuration = 0;
  for (let i = 0; i < this.exercises.length; i++) {
    exerciseDuration += this.exercises[i].duration;
  }

  return exerciseDuration;
});

const Workout = mongoose.model("Workout", workout);

module.exports = Workout;
