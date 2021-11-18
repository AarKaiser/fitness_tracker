const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ( req, res) => {
  Workout.create()
    .then(workoutData => {
      res.json(workoutData);
      console.log("router.put worked")
    })
    .catch(err => {
      res.status(400).json(err);
      console.log("router.post failed")
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(workoutData => {
      res.json(workoutData);
      console.log("router.get worked")
    })
    .catch(err => {
      res.status(400).json(err);
      console.log("router.get failed")
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id,
    {
      $push: { exercises: req.body },
    })
    .then(workoutData => {
      res.json(workoutData);
      console.log("router.put worked")
    })
    .catch(err => {
      res.status(400).json(err);
      console.log("router.put failed")
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})

        .then(workoutData => {
            res.json(workoutData);
            console.log("router.get range failed")
        })
        .catch(err => {
            res.status(400).json(err);
            console.log("router.get range failed")
        });
});

module.exports = router;
