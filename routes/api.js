const router = require("express").Router();
const Workout = require("../models/workout.js");

// create POST REQUEST for api route to create my workouts
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log("POST error ---->", err);
        res.json(err);
    });
});

// create GET REQUEST for accessing workouts in db
router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log("GET error ---->", err);
        res.json(err);
    });
});

// create PUT REQUEST to add exercises to app using ID
router.put("/api/workouts/:id", (req, res) => {
    console.log("fetching ID --->", req.params.id)
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: {exercises: req.body}},
        { new: true, runValidators: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log("PUT error ---->", err);
        res.json(err);
    });
})

// create GET REQUEST for range
// get workout in range
router.get("/api/workouts/range", (req, res) => {
   Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log("GET RANGE error ---->", err);
            res.json(err);
        });
});
module.exports = router;