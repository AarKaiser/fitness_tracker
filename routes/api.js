const router = require("express").Router();
const Workout = require("../models/workout.js");

    //create workout post
router.post("/api/workouts", ( req, res) => {
  Workout.create()
    .then(workoutData => {
      res.json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    // .sort({ date: -1 })
    .then(workoutData => {
      res.json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id,
    {
      $push: { exercises: req.body },
    })
    .then(workoutData => {
      res.json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})

        .then(workoutData => {
            res.json(workoutData);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


module.exports = router;
