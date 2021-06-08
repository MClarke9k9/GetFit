const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Type of exercise",
        },
        name: {
<<<<<<< HEAD
          type: String,
          trim: true,
          required: "Name of exercise",
        },
        duration: {
          type: Number,
          required: "Duration of exercise in minutes",
=======
            type: String,
            trim: true,
            required: 'Name of exercise',
        },
        duration: {
            type: Number,
            required: 'Duration of exercise in minutes',
>>>>>>> 526eed23953d0d612cf8f98f8134c4fb09cab8c4
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
