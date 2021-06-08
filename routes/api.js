const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((workoutdb) => {
      res.json(workoutdb);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((workoutdb) => {
      res.json(workoutdb);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((workoutdb) => {
      res.json(workoutdb);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then((workoutdb) => {
      console.log(workoutdb);
      res.json(workoutdb);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = router;
