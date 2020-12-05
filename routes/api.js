const Workout = require("../models/workout");
const setRoute = require("express").Router();

    setRoute.get("/api/workouts", (req, res) => {
        Workout.find({}).then(workout => {res.json(workout)});
    });
    
    setRoute.post("/api/workouts", (req, res) => {
        Workout.create({}).then(workout => {res.json(workout)});
    });

    setRoute.put("/api/workouts/:id", (req, res) => {
        // const workoutId = req.id;
        // let savedExercises = [];
        Workout.findByIdAndUpdate(req.params.id, 
            { $push: { exercises: req.body } },
            { new: true, runValidators: true })
            .then(workout => res.json(workout))
    });

    setRoute.get("/api/workouts/range", (req, res) => {
        Workout.find({}).limit(7)
        .then(workout => {
            res.json(workout);
        });
    })

module.exports = setRoute;